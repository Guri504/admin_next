"use client";
import dynamic from 'next/dynamic';
const CustomEditor = dynamic(() => import('@/app/components/custom_editor'), { ssr: false });
import MultiSelect from '@/app/components/multiSelect';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import '../../../../../public/sass/pages/add.scss';
import '../../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, faTimes, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { checkAdmin, postApi, uploadClick } from '@/helpers';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/user_context';
import Image from 'next/image';


const Winners_Add = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [imgData, setImgData] = useState({});
    const [imgData2, setImgData2] = useState({});

    const winnerSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        let finalData = Object.fromEntries(formdata.entries())
        finalData.image1 = imgData
        finalData.image2 = imgData2

        console.log(finalData)

        try {
            let resp = await postApi('admin/about_me_winner/add', finalData)
            console.log("resp", resp);
            if (resp.status) {
                toast(resp.message)
                e.target.reset();
                setImgData({})
                setImgData2({})
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

    const onFileChange2 = (e) => {
        uploadClick(e, null, null, null, setImgData2)
        e.currentTarget.value = ''
    };

    const handleDelete1 = () => {
        setImgData({})
    }

    const handleDelete2 = () => {
        setImgData2({})
    }

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom backUrl="/winners" />
            <div className="right_area top_spacing">
                <Card>
                    <div className='card-header'>
                        <div className='header_left'>
                            <div className='heading'>
                                Add New Winner Here
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <Form onSubmit={winnerSubmit}>
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Winner Name <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Winner Name"
                                            name='name'
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Winning Year <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Winning year"
                                            name='year'
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Winner Description <span>*</span></Form.Label>
                                        <CustomEditor
                                            name='description'
                                            placeholder='Enter Winner Description'
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Image 1 <span>*</span></Form.Label>
                                        <Form.Label htmlFor="file-upload" className='upload mb-3' >Upload Image</Form.Label>
                                        <Form.Control
                                            name='image1'
                                            type="file"
                                            id="file-upload"
                                            placeholder="Upload Image"
                                            onChange={onFileChange}
                                            onClick={uploadClick}
                                            accept='image/*'
                                        />
                                        {/* after upload --------- */}
                                        <div className='upload_img_area'>
                                            {
                                                Object.keys(imgData).length === 0
                                                    ?
                                                    <p>No Image Selected</p>
                                                    :
                                                    <div className='img_area'>
                                                        <span className='cross_icon' onClick={handleDelete1}>
                                                            <FontAwesomeIcon icon={faTimes} />
                                                        </span>
                                                        <Image
                                                            src={process.env.imageUrl + '' + imgData.original}
                                                            alt='blog Image'
                                                            priority="low"
                                                            width='auto'
                                                            height='auto'
                                                        />
                                                    </div>
                                            }
                                        </div>

                                    </Form.Group>
                                </Col>
                                <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12}>
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
                                        <div className='upload_img_area'>
                                            {
                                                Object.keys(imgData2).length === 0
                                                    ?
                                                    <p>No Image Selected</p>
                                                    :
                                                    <div className='img_area'>
                                                        <span className='cross_icon' onClick={handleDelete2}>
                                                            <FontAwesomeIcon icon={faTimes} />
                                                        </span>
                                                        <Image
                                                            src={process.env.imageUrl + '' + imgData2.original}
                                                            alt='blog Image'
                                                            priority="low"
                                                            width='auto'
                                                            height='auto'
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

export default Winners_Add;