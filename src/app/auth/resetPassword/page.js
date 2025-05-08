"use client";
import React, { Suspense, useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import '../../../../public/sass/pages/auth.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { postApi } from '@/helpers';
import { UserContext } from '@/app/user_context';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

const ResetPassword = () => {
    const router = useRouter()
    const [showPass, setShowPass] = useState(false);
    const [showPass2, setShowPass2] = useState(false);
    const paramLink = useSearchParams();
    const tokenFromLink = paramLink.get('token');
    console.log("object", tokenFromLink)

    const resetPassword = async (e) => {
        e.preventDefault();
        try {
            let formdata = new FormData(e.target);
            let finalData = Object.fromEntries(formdata.entries());
            let resp = await postApi(`admin/reset-password/${tokenFromLink}`, finalData);
            console.log("resp", resp)
            if (resp.status) {
                router.push('/auth/login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Suspense>
            <div className='auth_page'>
                <Card>
                    <div className='card-header'>
                        <div className='heading'>Admin</div>
                    </div>
                    <div className='card-body'>
                        <h5>Reset Password</h5>
                        <div className='desc'>Please sign-in to your account and start the adventure</div>
                        <Form onSubmit={resetPassword}>
                            <Form.Group className='form-group'>
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        name='password'
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
                                        name='confirmPassword'
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
                                <Link href="/auth/login" className='back'><span className='back_arrow'></span> Back to login</Link>
                            </div>
                        </Form>
                    </div>
                </Card>
            </div>
        </Suspense>
    )
};

export default ResetPassword;