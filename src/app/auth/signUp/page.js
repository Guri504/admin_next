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
                    <h5>Sign Up</h5>
                    <div className='desc'>Please sign-up to your account and start the adventure</div>
                    <Form>
                        <Form.Group className='form-group'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Your First Name"
                            />
                        </Form.Group>
                        <Form.Group className='form-group'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Your Last Name"
                            />
                        </Form.Group>
                        <Form.Group className='form-group'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter Your Email"
                            />
                        </Form.Group>
                        <Form.Group className='form-group'>
                        <Form.Label>Password</Form.Label>
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
                            <Button type="submit">Sign up</Button>
                        </div>
                    </Form>
                </div>
            </Card>
        </div>
    )
};

export default Login