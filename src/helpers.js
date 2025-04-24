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
const deleteApi = async (url, data) => {
    try {
        let resp = await axios.delete(process.env.url + '' + url, data);
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

const uploadVideo = async (e, setVideo) => {
    const file = e?.target?.files?.[0];

    if (file !== undefined) {

        const formData = new FormData();
        formData.append('folder_name', 'videos');
        formData.append('video', file)

        let resp = await postApi('uploads/video', formData);
        console.log('resp', resp)
        if (resp.videoPath) {
            setVideo(resp.videoPath)
        }
    }
}

export {
    getApi,
    toBase64,
    postApi,
    putApi,
    deleteApi,
    uploadClick,
    fetchCategories,
    uploadVideo
}

