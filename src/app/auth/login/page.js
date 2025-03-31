"use client";
import React, { useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import '../../../../public/sass/pages/auth.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className='auth_page'>
            <Card>
                <div className='card-header'>
                    <div className='heading'>Admin</div>
                </div>
                <div className='card-body'>
                    <h5>Sign In</h5>
                    <div className='desc'>Please sign-in to your account and start the adventure</div>
                    <Form>
                        <Form.Group className='form-group'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Your Email"
                            />
                        </Form.Group>
                        <Form.Group className='form-group'>
                            <div className='row2'>
                                <Form.Label>Password</Form.Label>
                                <Link href="./forgotPassword" className='forgot'>Forgot Password?</Link>
                            </div>
                            <InputGroup>
                                <Form.Control
                                    required
                                    type={showPass ? "text" : "password"}
                                    placeholder="Enter Your Password"
                                />
                                <InputGroup.Text onClick={() => setShowPass(!showPass)} id="inputGroupPrepend">
                                    <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Form.Check label="Remember Me" />
                        <div className='btn_area'>
                            <Button type="submit">Sign in</Button>
                        </div>
                    </Form>
                </div>
            </Card>
        </div>
    )
};

export default Login