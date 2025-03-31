"use client";
import MultiSelect from '@/app/components/multiSelect';
import React, { useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import '../../../../public/sass/pages/add.scss';
import '../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';


const AddData = () => {
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);

    return (
        <div className='right_side'>
            <NavBottom backUrl="/" />
            <div className="right_area top_spacing">
                <Card>
                    <div className='card-header'>
                        <div className='header_left'>
                            <div className='heading'>
                                Create New User Here
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <Form>
                            <Row>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>First name <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter First Name"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Last Name <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Lirst name"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Email Address <span>*</span></Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter Email Address"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Phone Number <span>*</span></Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>IN (+91)</InputGroup.Text>
                                            <Form.Control
                                                type="tel"
                                                placeholder="Enter Phone Number"
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Date of birth <span>*</span></Form.Label>
                                        <Form.Control
                                            type="date"
                                            placeholder="Select Date of birth"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Gender<span>*</span></Form.Label>
                                        <MultiSelect />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Address <span>*</span></Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Enter Address"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Image <span>*</span></Form.Label>
                                        <Form.Label htmlFor="file-upload" className='upload'>Upload Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            id="file-upload"
                                            placeholder="Upload Image"
                                        />
                                        {/* after upload --------- */}
                                        {/* <div className='upload_img_area'>
                    <div className='img_area'>
                      <span className='cross_icon'>
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                      <Image
                        src={profileImg3}
                        alt='...'
                        priority="low"
                      />
                    </div>
                  </div> */}
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

export default AddData;