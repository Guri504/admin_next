"use client";
import MultiSelect from '@/app/components/multiSelect';
const Select = dynamic(() => import('react-select'), {
    ssr: false,
});
import dynamic from 'next/dynamic';
import '../../../../../public/sass/pages/multiSelect.scss';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, ProgressBar, Row } from 'react-bootstrap';
import '../../../../../public/sass/pages/add.scss';
import '../../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, faTimes, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { fetchCategories, getApi, postApi, toBase64, uploadClick} from '../../../../helpers'
import Image from 'next/image';
import { ClientPageRoot } from 'next/dist/client/components/client-page';



const AddBLog = () => {

    const [progress, setProgress] = useState(0);

    const [category, setCategory] = useState([
        {
            value: '',
            label: ''
        }
    ])

    const [blogData, setBlogData] = useState({
        title: "",
        publishedOn: "",
        creatorName: "",
        description: "",
        category: [],
        subHeading: ""
    });

    const [imgData, setImgData] = useState({});
    const [img, setImg] = useState("");

    const blogSubmit = async (e) => {
        e.preventDefault();

        try {
            let finalData = {
                ...blogData,
                imageUrl: { ...imgData },
                selected_img: img
            }
            let resp = await postApi('admin/blog/add', finalData);
            if (resp.status) {
                setBlogData({
                    title: "",
                    publishedOn: "",
                    creatorName: "",
                    description: "",
                    category: [],
                    subHeading: ""
                });
                setImgData({})
                toast("Blog Added Successfully")
            }
            else {
                toast("failed to add the blog")
            }
        } catch (error) {
            console.error("Error submitting blog:", error);
            toast("Error in submitting blog");
        }
    }

    const blogChange = (e) => {
        setBlogData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    const onFileChange = (e) => {
        uploadClick(e, setProgress, setImgData, setImg);
        e.currentTarget.value = "";
    } 

    const handleDelete = () => {
        setImgData({});
    }

    useEffect(() => {
        fetchCategories(setCategory)
    }, [])

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
                                Create New Blog Here
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <Form onSubmit={blogSubmit} >
                            <Row>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Title <span>*</span></Form.Label>
                                        <Form.Control
                                            name='title'
                                            value={blogData.title}
                                            type="text"
                                            placeholder="Enter Blog Title"
                                            onChange={blogChange}
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
                                            onChange={blogChange}
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
                                            placeholder="Enter Sub Heading"
                                            onChange={blogChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>

                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Category<span>*</span></Form.Label>
                                        {/* {categoryData?.length > 0 ? categoryData.map((item, index) => ( */}
                                        <Select
                                            className="select_main"
                                            classNamePrefix="select"
                                            placeholder={"Select the Category"}
                                            isClearable={false}
                                            isMulti={true}
                                            name="category"
                                            value={category.filter(option => blogData.category.includes(option.value))}
                                            onChange={(selectedOptions) =>  
                                                setBlogData(prev => ({ ...prev, category: selectedOptions.map(option => option.value) }))
                                            }
                                            options={category} // for the single and multi select
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Sub Heading<span>*</span></Form.Label>
                                        <Form.Control
                                            name='subHeading'
                                            value={blogData.subHeading}
                                            type="text"
                                            placeholder="Enter Sub Heading"
                                            onChange={blogChange}
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
                                            onChange={blogChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Image <span>*</span></Form.Label>
                                        <div className='d-flex align-items-center gap-3 mb-2'>
                                            <Form.Label htmlFor="file-upload" className='upload m-0' >Upload Image</Form.Label>
                                            <Form.Control
                                                name='image'
                                                type="file"
                                                id="file-upload"
                                                placeholder="Upload Image"
                                                onChange={onFileChange}
                                                onClick={uploadClick}
                                                accept='image'
                                            />
                                            {
                                                Object.keys(imgData).length !== 0 &&
                                                <Form.Select aria-label="Default select example" onChange={(e) => setImg(e.target.value)}>
                                                    {
                                                        Object.entries(imgData).map(([key, value], i) => {
                                                            return <option value={value} key={i}>{key}</option>
                                                        })
                                                    }
                                                </Form.Select>
                                            }
                                        </div>
                                        {/* after upload --------- */}
                                        <div className='upload_img_area'>
                                            {
                                                Object.keys(imgData).length === 0
                                                    ?
                                                    <p>No Image Selected</p>
                                                    :
                                                    <div className='img_area'>
                                                        <span className='cross_icon' onClick={handleDelete}>
                                                            <FontAwesomeIcon icon={faTimes} />
                                                        </span>
                                                        <img
                                                            src={process.env.imageUrl + '' + imgData.original}
                                                            alt='blog Image'
                                                            priority="low"
                                                        />
                                                    </div>
                                            }
                                        </div>

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

export default AddBLog;