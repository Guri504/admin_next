"use client";
import React, { useContext, useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import '../../../../public/sass/pages/auth.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { postApi } from '@/helpers';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/user_context';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let formdata = new FormData(e.target);
            let finalData = Object.fromEntries(formdata.entries());
            let resp = await postApi('admin/login', finalData);
            if (resp.status) {
                localStorage.setItem('admin', JSON.stringify(resp.admin))
                setAdmin(resp.admin);
                router.push('/')
            }
            else {
                toast(resp.message)
            }
        } catch (err) { console.log(err) }
    }

    return (
        <div className='auth_page'>
            <Card>
                <div className='card-header'>
                    <div className='heading'>Admin</div>
                </div>
                <div className='card-body'>
                    <h5>Sign In</h5>
                    <div className='desc'>Please sign-in to your account and start the adventure</div>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className='form-group'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                name='email'
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
                                    name='password'
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
};

export default Login