"use client";
import dynamic from 'next/dynamic';
const CustomEditor = dynamic(() => import('@/app/components/custom_editor'), { ssr: false });
import MultiSelect from '@/app/components/multiSelect';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import '../../../../../../public/sass/pages/add.scss';
import '../../../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, faTimes, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { checkAdmin, getApi, postApi, putApi, uploadClick } from '@/helpers';
import { toast } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';
import { UserContext } from '@/app/user_context';


const Success_Stories_Edit = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const { id } = useParams()
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [oldData, setOldData] = useState({})
    const [imgData, setImgData] = useState({})

    const defaultdata = async () => {
        try {
            let resp = await getApi(`admin/success_stories/view/${id}`)
            console.log(resp)
            if (resp.status) {
                setOldData(resp.data);
                setImgData(resp.data.image)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const storySubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        let finalData = Object.fromEntries(formdata.entries())
        finalData.image = imgData
        console.log(finalData)
        try {
            let resp = await putApi(`admin/success_stories/edit/${id}`, finalData)
            console.log("resp", resp);
            if (resp.status) {
                toast(resp.message)
                e.target.reset();
                router.push('/success_stories')
            }
        } catch (error) {
            console.log(error)
            toast(resp.message)
        }
    }


    const onFileChange = (e) => {
        uploadClick(e, null, setImgData, null)
        e.currentTarget.value = ''
    };

    const handleDelete = () => {
        setImgData(null)
    }
    console.log(imgData)

    useEffect(() => {
        defaultdata()
    }, [])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom backUrl="/success_stories" />
            <div className="right_area top_spacing">
                <Card>
                    <div className='card-header'>
                        <div className='header_left'>
                            <div className='heading'>
                                Update your Story Here
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <Form onSubmit={storySubmit}>
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Title <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Story Title"
                                            name='title'
                                            defaultValue={oldData?.title}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Name <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            name='name'
                                            defaultValue={oldData?.name}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Speciality <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter speciality"
                                            name='speciality'
                                            defaultValue={oldData?.speciality}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Description <span>*</span></Form.Label>
                                        <CustomEditor
                                            name='description'
                                            placeholder='Enter Story Description'
                                            defaultValue={oldData?.description}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group '>
                                        <Form.Label>Image <span>*</span></Form.Label>
                                        <Form.Label htmlFor="file-upload" className='upload mb-3' >Upload Image</Form.Label>
                                        <Form.Control
                                            name='image'
                                            type="file"
                                            id="file-upload"
                                            placeholder="Upload Image"
                                            onChange={onFileChange}
                                            onClick={uploadClick}
                                            accept='image/*'
                                        />
                                        {/* after upload --------- */}
                                        {imgData !== null ?
                                            <div className='upload_img_area'>
                                                <div className='img_area'>
                                                    <span className='cross_icon' onClick={handleDelete}>
                                                        <FontAwesomeIcon icon={faTimes} />
                                                    </span>
                                                    <img
                                                        src={!imgData ? process.env.imageUrl + '' + oldData.image.original : process.env.imageUrl + '' + imgData.original}
                                                        alt='blog Image'
                                                        priority="low"
                                                    />
                                                </div>
                                            </div>
                                            : <p>No Image Selected</p>
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
        </div>
    )
}

export default Success_Stories_Edit;