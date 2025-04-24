"use client";
import MultiSelect from '@/app/components/multiSelect';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import '../../../../../../public/sass/pages/add.scss';
import '../../../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { getApi, postApi, putApi } from '@/helpers';
import { useParams, useRouter } from 'next/navigation';
import CustomEditor from '@/app/components/custom_editor';


const Training_Plan_Service_Edit = () => {
    const {id} = useParams()
    const router = useRouter()
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [serviceData, setServiceData] = useState({})
    const [message, setMessage] = useState('')

    const getService = async () => {
        try {
            let resp = await getApi(`admin/trainingPlanService/view/${id}`);
            console.log(resp)
            if(resp.status){
                setServiceData(resp.data);
                setMessage(resp.message);
            }
        } catch (error) {
            setMessage(resp.message)
        }
    }

    const serviceUpdate = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const finalData = Object.fromEntries(formdata.entries())
        try {
            let resp = await putApi(`admin/trainingPlanService/edit/${id}`, finalData)
            console.log("resp", resp);
            if (resp.status) {
                setMessage(resp.message);
                router.push('/training_plan_services')
            }
        } catch (error) {
            console.log(error)
            setMessage(resp.message)
        }
    }

    useEffect(() => {
        getService()
    }, [id])

    return (
        <div className='right_side'>
            <NavBottom backUrl="/training_plan_services" />
            <div className="right_area top_spacing">
                <Card>
                    <div className='card-header'>
                        <div className='header_left'>
                            <div className='heading'>
                                Update Your Service Here
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <Form onSubmit={serviceUpdate}>
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Title <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Service Title"
                                            name='title'
                                            defaultValue={serviceData.title}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Description <span>*</span></Form.Label>
                                        <CustomEditor
                                            placeholder="Enter Service Descriptiion"
                                            name='description'
                                            defaultValue={serviceData.description}
                                        />
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

export default Training_Plan_Service_Edit;