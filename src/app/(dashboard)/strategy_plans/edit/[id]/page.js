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
import { toast, ToastContainer } from 'react-toastify';
import { UserContext } from '@/app/user_context';


const Strategy_Plan_Edit = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const { id } = useParams()
    const router = useRouter()
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [planData, setPlanData] = useState({})

    const getplan = async () => {
        try {
            let resp = await getApi(`admin/strategy_plan/view/${id}`);
            console.log("resp", resp)
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
            let resp = await putApi(`admin/strategy_plan/edit/${id}`, finalData)
            console.log("resp", resp);
            if (resp.status) {
                toast("Data Updated Successfully");
                setTimeout(() => (router.push('/strategy_plans')), 1500)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getplan()
    }, [id])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom backUrl="/strategy_plans" />
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
                                        <Form.Label>Title <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Plan Title"
                                            name='title'
                                            defaultValue={planData.title}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Description <span>*</span></Form.Label>
                                        <CustomEditor
                                            placeholder="Enter Plan Descriptiion"
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
            <ToastContainer
                closeButton={true}
                closeOnClick={true}
                newestOnTop={true}
                stacked={true}
                limit={5}
                autoClose={1500}
                toastStyle={{ backgroundColor: '#696cff', color: 'white' }}
                position='bottom-right'
                theme='colored'
            />
        </div>
    )
}

export default Strategy_Plan_Edit;