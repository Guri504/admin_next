"use client";
import MultiSelect from '@/app/components/multiSelect';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import '../../../../../../public/sass/pages/add.scss';
import '../../../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { checkAdmin, getApi, postApi, putApi } from '@/helpers';
import { useParams, useRouter } from 'next/navigation';
import CustomEditor from '@/app/components/custom_editor';
import { UserContext } from '@/app/user_context';


const Training_Plan_Edit = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const { id } = useParams()
    const router = useRouter()
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [planData, setPlanData] = useState({})

    const getPlan = async () => {
        try {
            let resp = await getApi(`admin/trainingPlan/view/${id}`);
            if (resp.status) {
                setPlanData(resp.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const planUpdate = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const finalData = Object.fromEntries(formdata.entries())
        try {
            let resp = await putApi(`admin/trainingPlan/edit/${id}`, finalData)
            if (resp.status) {
                router.push('/training_plans')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPlan()
    }, [id])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom backUrl="/training_plans" />
            <div className="right_area top_spacing">
                <Card>
                    <div className='card-header'>
                        <div className='header_left'>
                            <div className='heading'>
                                Update Your Plan Here
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <Form onSubmit={planUpdate}>
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Plan Type <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Plan Type"
                                            name='type'
                                            defaultValue={planData.type}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Plan Price <span>*</span></Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter Plan Price in US$"
                                            name='price'
                                            defaultValue={planData.price}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Plan Time Period <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Plan Period like (quarter, week, month, year)"
                                            name='period'
                                            defaultValue={planData.period}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Plan Features <span>*</span></Form.Label>
                                        <CustomEditor
                                            placeholder="Enter Plan Features"
                                            name='description'
                                            defaultValue={planData.description}
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

export default Training_Plan_Edit;