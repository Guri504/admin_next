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
import { fetchCategories, getApi, postApi, toBase64, uploadClick, uploadVideo } from '../../../../helpers'
import Image from 'next/image';
import { ClientPageRoot } from 'next/dist/client/components/client-page';



const AddVideo = () => {
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [video, setVideo] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const finalData = Object.fromEntries(formData.entries());
            finalData.video = video
            let resp = await postApi('admin/video/add', finalData);
            if (resp.status) {
                toast('Video Added Successfully')
                setTimeout(() => window.location.reload(), 1500)
            }
        } catch (error) {
            console.log("error", error)
        }
    }

    const onFileChange = (e) => {
        uploadVideo(e, setVideo)
        e.currentTarget.value = "";
    }

    const handleDelete = () => {
        console.log("Delete button clicked")
        setVideo(null)
    }

    return (
        <div className='right_side'>
            <NavBottom backUrl="/videos" />
            <div className="right_area top_spacing">
                <Card>
                    <div className='card-header'>
                        <div className='header_left'>
                            <div className='heading'>
                                Create New Video Here
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group' controlId='videoTitle'>
                                        <Form.Label>Title <span>*</span></Form.Label>
                                        <Form.Control
                                            name='title'
                                            type="text"
                                            placeholder="Enter Video Title"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group' controlId='videoUrl'>
                                        <Form.Label>Video Url <span>*</span></Form.Label>
                                        <Form.Control
                                            name='url'
                                            type="url"
                                            placeholder="Enter Video URL"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}><p className='mb-3' style={{ fontSize: '20px', fontWeight: '500' }}>OR</p></Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Video <span>*</span></Form.Label>
                                        <div className='d-flex align-items-center gap-3 mb-2'>
                                            <Form.Label htmlFor="file-upload" className='upload m-0' >Upload Video</Form.Label>
                                            <Form.Control
                                                name='video'
                                                type="file"
                                                id="file-upload"
                                                placeholder="Upload Video"
                                                onChange={onFileChange}
                                                onClick={uploadVideo}
                                            />
                                        </div>
                                        {/* after upload --------- */}
                                        {
                                            video ?
                                                <div className='upload_img_area'>
                                                    <div className='img_area'>
                                                        <span className='cross_icon' onClick={handleDelete} style={{ zIndex: 999 }}>
                                                            <FontAwesomeIcon icon={faTimes} />
                                                        </span>
                                                        <video
                                                            src={process.env.imageUrl + '' + video}
                                                            alt='video'
                                                            width='200px'
                                                            height='100%'
                                                            priority="low"

                                                        />
                                                    </div>
                                                </div>
                                                :
                                                <p>No Video Selected</p>
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

                                    {
                                        show && <Form.Group className='form-group form-group2'>
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
                                        </Form.Group>
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

export default AddVideo;