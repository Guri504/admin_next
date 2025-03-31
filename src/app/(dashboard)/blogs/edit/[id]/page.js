"use client";
import MultiSelect from '@/app/components/multiSelect';
const Select = dynamic(() => import('react-select'), {
    ssr: false,
});
import dynamic from 'next/dynamic';
import '../../../../../../public/sass/pages/multiSelect.scss';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, ProgressBar, Row } from 'react-bootstrap';
import '../../../../../../public/sass/pages/add.scss';
import '../../../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, faTimes, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';
import { fetchCategories, getApi, postApi, putApi, toBase64, uploadClick } from '../../../../../helpers'



const EditBLog = () => {

    const router = useRouter()

    const params = useParams();

    const [category, setCategory] = useState([])

    const [blogData, setBlogData] = useState({
        title: "",
        publishedOn: "",
        creatorName: "",
        subHeading: "",
        description: "",
        category: [],
    });

    const [imgData, setImgData] = useState({});

    const [img, setImg] = useState('');

    const [progress, setProgress] = useState(0);

    const defaultData = async () => {
        try {
            if (!params.id) return;
            let resp = await getApi(`admin/blog/view/${params.id}`)
            console.log("default value", resp);
            if (resp.status) {
                console.log("dascadsc", resp.data.category)
                resp.data.category = resp.data.category.map(item => ({
                    value: item.value,
                    label: category.find(cat => cat.value === item)?.label || "Unknown"
                }));
                setBlogData(resp.data)
                console.log("222", resp.data)
                if (resp.data.imageUrl) {
                    setImgData(resp.data.imageUrl)
                }
            }
        } catch (error) {
            toast.error("Not able to fetch current input of blog")
        }
    }

    const updatedBlogSubmit = async (e) => {
        e.preventDefault();
        try {
            let finalUpdatedData = {
                ...blogData,
                imageUrl: { ...imgData },
            }
            if (img) {
                finalUpdatedData.selected_img = img
            }
            else {
                finalUpdatedData.selected_img = blogData.selected_img
            }
            let resp = await putApi(`admin/blog/edit/${params.id}`, finalUpdatedData)
            if (resp.status !== true) {
                toast("NOt able to update Blog")
                return;
            }
            else if (resp.status === true) {
                setTimeout(() => { router.push('/blogs') }, 1500)
                toast(" Blog Updated Successfully")
            }
            else {
                toast("Category not updated")
            }
        } catch (error) {
            return ("Error in updated Blog", error)
        }
    }

    const updatedBlogChange = (e) => {
        if (!e) return;

        if (Array.isArray(e)) {
            setBlogData((prevdata) => ({
                ...prevdata,
                category: e.map(item => item.value)
            }));
        }
        else {
            const { name, value } = e.target;
            setBlogData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    }

    const onFileChange = (e) => {
        uploadClick(e, setProgress, setImgData, setImg);
    }

    const handleDelete = () => {
        console.log("kkk", imgData)
        setBlogData(prevData => ({
            ...prevData,
            selected_img: null
        }));
        setImgData("");
    };

    useEffect(() => {
        fetchCategories(setCategory);
    }, [])

    useEffect(() => {
        defaultData();
        console.log("object", category)
    }, [category])

    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);

    return (
        <div className='right_side'>
            <NavBottom backUrl="/blogs" />
            <div className="right_area top_spacing">
                <Card>
                    <div className='card-header'>
                        <div className='header_left'>
                            <div className='heading'>
                                Edit Your Blog Here
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <Form onSubmit={updatedBlogSubmit}>
                            <Row>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Title <span>*</span></Form.Label>
                                        <Form.Control
                                            name='title'
                                            value={blogData.title}
                                            type="text"
                                            placeholder="Enter Blog Title"
                                            onChange={updatedBlogChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Published On <span>*</span></Form.Label>
                                        <Form.Control
                                            name='publishedOn'
                                            value={blogData.publishedOn}
                                            type="date"
                                            placeholder="Enter Current Date"
                                            onChange={updatedBlogChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Creator Name<span>*</span></Form.Label>
                                        <Form.Control
                                            name='creatorName'
                                            value={blogData.creatorName}
                                            type="text"
                                            placeholder="Enter Creator Name"
                                            onChange={updatedBlogChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Category<span>*</span></Form.Label>
                                        <Select
                                            className="select_main"
                                            classNamePrefix="select"
                                            placeholder={"Select the Category"}
                                            isClearable={false}
                                            isMulti={true}
                                            name="category"
                                            defaultValue={blogData.category}
                                            onChange={(selectedOptions) =>
                                                setBlogData(prev => ({ ...prev, category: selectedOptions.map(option => option.value) }))
                                            }
                                            options={category}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Sub Heading<span>*</span></Form.Label>
                                        <Form.Control
                                            name='subHeading'
                                            value={blogData.subHeading}
                                            type="text"
                                            placeholder="Enter Sub Heading"
                                            onChange={updatedBlogChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Derscription <span>*</span></Form.Label>
                                        <Form.Control
                                            name='description'
                                            value={blogData.description}
                                            as="textarea"
                                            placeholder="Enter Description"
                                            onChange={updatedBlogChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Image <span>*</span></Form.Label>
                                        <div className='d-flex align-item-center gap-3 mb-2'>
                                            <Form.Label htmlFor="file-upload" className='upload'>Upload Image</Form.Label>
                                            <Form.Control
                                                type="file"
                                                id="file-upload"
                                                placeholder="Upload Image"
                                                onChange={onFileChange}
                                                onClick={uploadClick}
                                            />
                                            {/* after upload --------- */}

                                            {imgData ?
                                                <Form.Select aria-label="Default select example"
                                                    defaultValue={blogData.selected_img}
                                                    onChange={(e) => setImg(e.target.value)}>
                                                    {
                                                        Object.entries(imgData).map(([key, value], i) => {
                                                            return <option value={value} key={i}>{key}</option>
                                                        })
                                                    }
                                                </Form.Select> : null
                                            }
                                        </div>
                                        {imgData ?
                                            <div className='upload_img_area'>

                                                <div className='img_area'>
                                                    <span className='cross_icon' onClick={handleDelete}>
                                                        <FontAwesomeIcon icon={faTimes} />
                                                    </span>
                                                    <img
                                                        src={(img ? process.env.imageUrl + '' + img : process.env.imageUrl + '' + blogData.selected_img)}
                                                        alt='blog Image'
                                                        fetchPriority="low"
                                                    // onClick={uploadClick}
                                                    // onChange={onFileChange}
                                                    />
                                                </div>

                                            </div>
                                            : <p>No Image Selected</p>}
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Send credentials on email ?</Form.Label>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="Send credentials on email ?"
                                            checked={show}
                                            onChange={(event) => setShow(event.target.checked)}
                                        />
                                    </Form.Group>

                                    {show && <Form.Group className='form-group form-group2'>
                                        <InputGroup>
                                            <Form.Control
                                                placeholder="credentials"
                                                type={showPass ? "text" : "password"}
                                                className='from-control2'
                                            />
                                            <InputGroup.Text id="inputGroupPrepend" onClick={() => setShowPass(!showPass)}>
                                                <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                                            </InputGroup.Text>
                                            <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faRedo} /></InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>}
                                    {
                                        progress > 0 &&
                                        <div className='progress_bar'>
                                            <ProgressBar variant="success" now={progress} style={{ transition: 'all 1.5s ease-in-out' }} />
                                        </div>
                                    }
                                </Col>
                                <div className='btn_area'>
                                    <Button type="submit" >Submit</Button>
                                </div>
                            </Row>
                        </Form>
                    </div>
                </Card>
            </div>
            <ToastContainer
                closeButton={true}
                closeOnClick={true}
                newestOnTop={true}
                stacked={true}
                limit={5}
                autoClose={2000}
                toastStyle={{ backgroundColor: '#696cff', color: 'white' }}
                position='bottom-right'
                theme='colored'
            />
        </div>
    )
}

export default EditBLog;