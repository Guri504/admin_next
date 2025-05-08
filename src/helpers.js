'use client'
import axios from "axios";
import { toast } from "react-toastify";
import * as XLSX from 'xlsx';

// GET API 
const getApi = async (url) => {
    let storedAdmin = JSON.parse(localStorage.getItem("admin"));
    let token = storedAdmin?.token;
    try {
        console.log("object", token)
        let resp = await axios.get(process.env.url + '' + url, {
            headers: { authorization: `Bearer ${token}` }
        });
        if (resp.status === 200) {
            return resp.data;
        }
    } catch (error) {
        console.error("Fetching Error", error);
    }
}

// POST API
const postApi = async (url, data) => {
    let storedAdmin = JSON.parse(localStorage.getItem("admin"));
    let token = storedAdmin?.token;
    try {
        let resp = await axios.post(process.env.url + '' + url, data, {
            headers: { authorization: `Bearer ${token}` }
        });
        if (resp.status === 200) {
            return resp.data;
        }
    } catch (error) {
        console.error("Fetching Error", error)
    }
}

// PUT API
const putApi = async (url, data) => {
    let storedAdmin = JSON.parse(localStorage.getItem("admin"));
    let token = storedAdmin?.token;
    try {
        let resp = await axios.put(process.env.url + '' + url, data, {
            headers: { authorization: `Bearer ${token}` }
        });
        if (resp.status === 200) {
            return resp.data;
        }
    } catch (error) {
        console.error("Fetching Error", error)
    }
}

// DELETE API
const deleteApi = async (url, data) => {
    let storedAdmin = JSON.parse(localStorage.getItem("admin"));
    let token = storedAdmin?.token;
    try {
        console.log("object", token)
        let resp = await axios.delete(process.env.url + '' + url, {
            data,
            headers: { authorization: `Bearer ${token}` }
        });
        if (resp.status === 200) {
            return resp.data;
        }
    } catch (error) {
        console.error("Fetching Error", error)
    }
}

//DELETE MANY
const softDeleteManyApi = async (type, check, listing) => {
    let storedAdmin = JSON.parse(localStorage.getItem("admin"));
    let token = storedAdmin?.token;
    try {
        let resp = await putApi(`admin/delete-many?type=${type}`, { check }, {
            headers: { authorization: `Bearer ${token}` }
        });
        if (resp.status) {
            toast('Items deleted successfully');
            listing();
        }
    } catch (error) {
        console.error("Fetching Error", error)
    }
}

// Convert a file to base64 string
const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);


        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

// UPLOAD FILE/IMAGE
const uploadClick = async (e, setProgress, setImgData, setImg, setImgData2, setImgData3) => {
    const file = e.target.files?.[0];
    if (file) {
        const base64 = await toBase64(file);
        let saveImage = {
            folder_name: "admins",
            resize_large: "1266*668",
            resize_medium: "1166*568",
            resize_small: "1066*468",
            image: base64 ? base64 : null
        }
        let resp = await postApi("uploads/base64", saveImage,
            {
                onUploadProgress: (e) => {
                    const percentCompleted = Math.round((e.loaded * 100) / e.total);
                    requestAnimationFrame(() => {
                        if (setProgress != null) {
                            setProgress(percentCompleted)
                        }
                    })
                }
            });
        console.log('resp', resp);
        if (resp.imageUrl) {
            if (setImgData != null) {
                setImgData(resp.imageUrl);
                if (setProgress != null) {
                    setProgress(0)
                }
            }
            if (setImgData2 != null) {
                setImgData2(resp.imageUrl);
                console.log(resp.imageUrl)
            }
            if (setImgData3 != null) {
                setImgData3(resp.imageUrl);
            }
            if (setImg != null) {
                setImg(resp.imageUrl.original)
            }
        }
    }
}

const fetchCategories = async (setCategory) => {
    try {
        let resp = await getApi("admin/blogsCategory")
        if (resp.status) {
            setCategory(resp.message.map(cat => ({
                value: cat._id,
                label: cat.blogCategoryTitle
            })));
        }
    } catch (error) {
        toast.error("Failed to load categories")
    }
}

const uploadVideo = async (e, setVideo, setVideoUrl) => {
    const file = e?.target?.files?.[0];

    if (file !== undefined) {
        setVideoUrl('');

        const formData = new FormData();
        formData.append('folder_name', 'videos');
        formData.append('video', file)

        let resp = await postApi('uploads/video', formData);
        console.log('resp', resp)
        if (resp.videoPath) {
            setVideo(resp.videoPath)
            setVideoUrl('')
        }
    }
}

const formateDate = (d) => {
    const date = new Date(d)
    const formatted = date.toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
    return formatted;
}

const formateDayTime = (d) => {
    const date = new Date(d)
    const formatted = date.toLocaleString('en-US', {
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }).replace(",", ' ')
    return formatted;
}

const handleCheck = (id, setCheck) => {
    return setCheck(prevData => (
        prevData.includes(id)
            ? prevData.filter(checkedId => checkedId !== id)
            : [...prevData, id]
    ))
}

const handleMultiCheck = (e, check, setCheck, data) => {
    if (check.length === data?.length || !e.target.checked) {
        return setCheck([])
    }
    else {
        setCheck(data?.map((item, i) => item?._id || item?.variantId))
    }
}

const normalizeOrder = (order) => {
    return order.orderListing.map(item => ({
        orderId: order._id.toString(),
        userId: order.userId.toString(),

        productId: item.productId.toString(),
        variantId: item.variantId.toString(),
        quantity: item.quantity,
        price: item.price,

        firstName: order.address.firstName,
        lastName: order.address.lastName,
        email: order.address.email,
        phoneNumber: order.address.phoneNumber,
        country: order.address.country1,
        pinCode: order.address.pinCode,
        address: order.address.address,

        currency: order.currency,
        totalAmount: order.totalAmount,
        orderStatus: order.orderStatus,
        paymentStatus: order.paymentStatus,
        paymentMethod: order.paymentMethod,
        createdAt: new Date(order.created_at).toDateString(),

        // isDeleted: order.isDeleted,
        // deletedAt: new Date(order.deleted_at).toDateString(),
        // status: order.Status,

        // updatedStatusName: order.updatedStatus?.[0]?.name,
        // updatedStatusTime: order.updatedStatus?.[0]?.time
    }));
};

const exportToExcel = (data) => {
    const normalizedOrders = data.flatMap(order => normalizeOrder(order));
    const worksheet = XLSX.utils.json_to_sheet(normalizedOrders);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sandy Orders List");
    XLSX.writeFile(workbook, 'export.xlsx')
}

const checkAdmin = (admin, setAdmin, router) => {
    let storedUser = localStorage.getItem("admin")
    console.log("admin", storedUser)
    if (storedUser) {
        let parsedUser = JSON.parse(storedUser);
        if (parsedUser.token && Date.now() < parsedUser.expiresAt) {
            setAdmin(parsedUser);
        }
        else {
            localStorage.removeItem("admin")
            setAdmin(null)
        }
    }
    else {
        router.push('/auth/login')
        if (router.push('/auth/login')) {
            setAdmin(null);
        }
    }
};

export {
    getApi,
    toBase64,
    postApi,
    putApi,
    deleteApi,
    uploadClick,
    fetchCategories,
    uploadVideo,
    formateDate,
    handleCheck,
    handleMultiCheck,
    formateDayTime,
    exportToExcel,
    normalizeOrder,
    softDeleteManyApi,
    checkAdmin
}

