"use client";
import React, { useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import '../../../../public/sass/pages/auth.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ResetPassword = () => {
    const [showPass, setShowPass] = useState(false);
    const [showPass2, setShowPass2] = useState(false);

    return (
        <div className='auth_page'>
            <Card>
                <div className='card-header'>
                    <div className='heading'>Admin</div>
                </div>
                <div className='card-body'>
                    <h5>Reset Password</h5>
                    <div className='desc'>Please sign-in to your account and start the adventure</div>
                    <Form>
                        <Form.Group className='form-group'>
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    required
                                    type={showPass ? "text" : "password"}
                                    placeholder="Enter Password"
                                />
                                <InputGroup.Text onClick={() => setShowPass(!showPass)} id="inputGroupPrepend">
                                    <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className='form-group'>
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    required
                                    type={showPass2 ? "text" : "password"}
                                    placeholder="Enter Confirm Password"
                                />
                                <InputGroup.Text onClick={() => setShowPass2(!showPass2)} id="inputGroupPrepend">
                                    <FontAwesomeIcon icon={showPass2 ? faEye : faEyeSlash} />
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className='btn_area'>
                            <Button type="submit">Sign in</Button>
                            <Link href="#" className='back'><span className='back_arrow'><FontAwesomeIcon icon={faChevronLeft} /></span> Back to login</Link>
                        </div>
                    </Form>
                </div>
            </Card>
        </div>
    )
};

export default ResetPassword;