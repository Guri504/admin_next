"use client";
import MultiSelect from '@/app/components/multiSelect';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import '../../../../../public/sass/pages/add.scss';
import '../../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, faTimes, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { checkAdmin, getApi, postApi, putApi, uploadClick } from '@/helpers';
import CustomEditor from '@/app/components/custom_editor';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/user_context';
import Image from 'next/image';


const About_Page_Titles = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [oldData, setOldData] = useState({})
    const [imgData, setImgData] = useState({});
    const [imgData2, setImgData2] = useState({});
    const [imgData3, setImgData3] = useState({});

    const contentUpdate = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const finalData = Object.fromEntries(formdata.entries())
        finalData.image1 = imgData;
        finalData.image2 = imgData2;
        finalData.image3 = imgData3;
        try {
            let resp = await putApi(`admin/update-page-content/about-me`, finalData)
            if (resp.status) {
                toast("Data Updated Successfully")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const viewContent = async () => {
        try {
            let resp = await getApi('admin/get-page-content/about-me');
            if (resp.status) {
                setOldData(resp.data);
                setImgData(resp.data.image1);
                setImgData2(resp.data.image2);
                setImgData3(resp.data.image3);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const onFileChange = (e) => {
        uploadClick(e, null, setImgData, null, null)
        e.currentTarget.value = ''
    };
    const onFileChange2 = (e) => {
        uploadClick(e, null, null, null, setImgData2)
        e.currentTarget.value = ''
    };
    const onFileChange3 = (e) => {
        uploadClick(e, null, null, null, null, setImgData3)
        e.currentTarget.value = ''
    };

    const handleDelete = () => {
        setImgData({})
    }
    const handleDelete2 = () => {
        setImgData2({})
    }
    const handleDelete3 = () => {
        setImgData3({})
    }

    useEffect(() => {
        viewContent()
    }, [])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom backUrl="#" />
            <div className="right_area top_spacing">
                <Card>
                    <div className='card-header'>
                        <div className='header_left'>
                            <div className='heading'>
                                Update Your Titles/Headings
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <Form onSubmit={contentUpdate}>
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Journey Title <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Journey Title"
                                            name='journeyTitle'
                                            defaultValue={oldData?.journeyTitle}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Journey Description <span>*</span></Form.Label>
                                        <CustomEditor
                                            name='journeyDescription'
                                            placeholder='Enter Journey Description'
                                            defaultValue={oldData?.journeyDescription}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Strategy Heading <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Strategy Heading"
                                            name='strategyHeading'
                                            defaultValue={oldData?.strategyHeading}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Image 1 <span>*</span></Form.Label>
                                        <Form.Label htmlFor="file-upload1" className='upload mb-3' >Upload Image</Form.Label>
                                        <Form.Control
                                            name='image1'
                                            type="file"
                                            id="file-upload1"
                                            placeholder="Upload Image"
                                            onChange={onFileChange}
                                            onClick={uploadClick}
                                            accept='image/*'
                                        />
                                        {/* after upload --------- */}
                                        {
                                            Object.keys(imgData).length === 0
                                                ?
                                                <p>No Image Selected</p>
                                                :
                                                <div className='upload_img_area'>
                                                    <div className='img_area'>
                                                        <span className='cross_icon' onClick={handleDelete}>
                                                            <FontAwesomeIcon icon={faTimes} />
                                                        </span>
                                                        <Image
                                                            src={process.env.imageUrl + '' + imgData?.original}
                                                            alt='blog Image'
                                                            priority="low"
                                                            width='auto'
                                                            height='auto'
                                                        />
                                                    </div>
                                                </div>
                                        }

                                    </Form.Group>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Image 2 <span>*</span></Form.Label>
                                        <Form.Label htmlFor="file-upload2" className='upload mb-3' >Upload Image</Form.Label>
                                        <Form.Control
                                            name='image2'
                                            type="file"
                                            id="file-upload2"
                                            placeholder="Upload Image"
                                            onChange={onFileChange2}
                                            onClick={uploadClick}
                                            accept='image/*'
                                        />
                                        {/* after upload --------- */}
                                        {
                                            Object.keys(imgData2).length === 0
                                                ?
                                                <p>No Image Selected</p>
                                                :
                                                <div className='upload_img_area'>
                                                    <div className='img_area'>
                                                        <span className='cross_icon' onClick={handleDelete2}>
                                                            <FontAwesomeIcon icon={faTimes} />
                                                        </span>
                                                        <Image
                                                            src={process.env.imageUrl + '' + imgData2?.original}
                                                            alt='blog Image'
                                                            priority="low"
                                                            width='auto'
                                                            height='auto'
                                                        />
                                                    </div>
                                                </div>
                                        }

                                    </Form.Group>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Image 3 <span>*</span></Form.Label>
                                        <Form.Label htmlFor="file-upload3" className='upload mb-3' >Upload Image</Form.Label>
                                        <Form.Control
                                            name='image3'
                                            type="file"
                                            id="file-upload3"
                                            placeholder="Upload Image"
                                            onChange={onFileChange3}
                                            onClick={uploadClick}
                                            accept='image/*'
                                        />
                                        {/* after upload --------- */}
                                        {
                                            Object.keys(imgData3).length === 0
                                                ?
                                                <p>No Image Selected</p>
                                                :
                                                <div className='upload_img_area'>
                                                    <div className='img_area'>
                                                        <span className='cross_icon' onClick={handleDelete3}>
                                                            <FontAwesomeIcon icon={faTimes} />
                                                        </span>
                                                        <Image
                                                            src={process.env.imageUrl + '' + imgData3?.original}
                                                            alt='blog Image'
                                                            priority="low"
                                                            width='auto'
                                                            height='auto'
                                                        />
                                                    </div>
                                                </div>
                                        }

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

export default About_Page_Titles;