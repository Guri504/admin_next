"use client";
import MultiSelect from '@/app/components/multiSelect';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import '../../../../../public/sass/pages/add.scss';
import '../../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { checkAdmin, postApi } from '@/helpers';
import CustomEditor from '@/app/components/custom_editor';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/user_context';


const Membership_Plan_Add = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);


    const planSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        let finalData = Object.fromEntries(formdata.entries())
        try {
            let resp = await postApi('admin/membershipPlan/add', finalData)
            if (resp.status) {
                toast(resp.message);
                e.target.reset();
            }
        } catch (error) {
            console.log(error)
            toast(resp.message)
        }
    }

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom backUrl="/membership_plans" />
            <div className="right_area top_spacing">
                <Card>
                    <div className='card-header'>
                        <div className='header_left'>
                            <div className='heading'>
                                Create New Plan Here
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <Form onSubmit={planSubmit}>
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label> Plan Type <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Plan Type"
                                            name='type'
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
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Plan Features <span>*</span></Form.Label>
                                        <CustomEditor
                                            name='description'
                                            placeholder='Enter Service Description'
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

export default Membership_Plan_Add;