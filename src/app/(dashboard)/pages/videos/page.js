"use client";
import MultiSelect from '@/app/components/multiSelect';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import '../../../../../public/sass/pages/add.scss';
import '../../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, faTimes, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { checkAdmin, getApi, postApi, putApi, uploadClick, uploadVideo } from '@/helpers';
import CustomEditor from '@/app/components/custom_editor';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/user_context';


const Video_Page_Titles = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [oldData, setOldData] = useState({})
    const [video, setVideo] = useState(null)
    const [videoUrl, setVideoUrl] = useState('')

    const contentUpdate = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const finalData = Object.fromEntries(formdata.entries())
        finalData.video = video;
        try {
            let resp = await putApi(`admin/update-page-content/videos`, finalData)
            if (resp.status) {
                toast("Data Updated Successfully")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const viewContent = async () => {
        try {
            let resp = await getApi('admin/get-page-content/videos');
            if (resp.status) {
                setOldData(resp.data);
                setVideo(resp.data.video)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const onFileChange = (e) => {
        uploadVideo(e, setVideo, setVideoUrl)
        e.currentTarget.value = ''
    };

    const handleDelete = () => {
        setVideo(null)
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
                                        <Form.Label>Back Main Heading <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter heading Title"
                                            name='mainTitle'
                                            defaultValue={oldData?.mainTitle}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Videos Main Heading <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Video Heading"
                                            name='videoHeading'
                                            defaultValue={oldData?.videoHeading}
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
                                            value={videoUrl}
                                            onChange={(e) => { setVideoUrl(e.target.value), e.target.value ? setVideo(null) : '' }}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}><p className='mb-3' style={{ fontSize: '20px', fontWeight: '500' }}>OR</p></Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Main Video <span>*</span></Form.Label>
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

export default Video_Page_Titles;