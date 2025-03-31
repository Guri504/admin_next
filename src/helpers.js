import axios from "axios";

// GET API 
const getApi = async (url) => {
    try {
        let resp = await axios.get(process.env.url + '' + url);
        if (resp.status === 200) {
            return resp.data;
        }
    } catch (error) {
        console.error("Fetching Error", error);
    }
}

// POST API
const postApi = async (url, data) => {
    try {
        let resp = await axios.post(process.env.url + '' + url, data);
        if (resp.status === 200) {
            return resp.data;
        }
    } catch (error) {
        console.error("Fetching Error", error)
    }
}

// PUT API
const putApi = async (url, data) => {
    try {
        let resp = await axios.put(process.env.url + '' + url, data);
        if (resp.status === 200) {
            return resp.data;
        }
    } catch (error) {
        console.error("Fetching Error", error)
    }
}

// DELETE API
const deleteApi = async (url) => {
    try {
        let resp = await axios.delete(process.env.url + '' + url);
        if (resp.status === 200) {
            return resp.data;
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
const uploadClick = async (e, setProgress, setImgData, setImg) => {
    const file = e.target.files?.[0];
    if (file) {
        const base64 = await toBase64(file);
        console.log("base64", base64);
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
                        setProgress(percentCompleted)
                    })
                }
            });
        console.log('resp', resp);
        if (resp.imageUrl) {
            setImgData(resp.imageUrl);
            setProgress(0)
            setImg(resp.imageUrl.original)
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

export {
    getApi,
    toBase64,
    postApi,
    putApi,
    deleteApi,
    uploadClick,
    fetchCategories
}

