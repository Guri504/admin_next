"use client";
import { Button, Card, Form } from 'react-bootstrap';
import '../../../../public/sass/pages/auth.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';


const ForgotPassword = () => {
    const router = useRouter();

    return (
        <div className='auth_page'>
            <Card>
                <div className='card-header'>
                    <div className='heading'>Admin</div>
                </div>
                <div className='card-body'>
                    <h5>Forgot Password</h5>
                    <div className='desc'>Enter your email and we'll send you instructions to reset your password</div>
                    <Form>
                        <Form.Group className='form-group'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Your Email"
                            />
                        </Form.Group>
                        <div className='btn_area'>
                            <Button type="submit" onClick={() => router.push("./resetPassword")}>Send Reset Link</Button>
                            <Link href="#" className='back'><span className='back_arrow'><FontAwesomeIcon icon={faChevronLeft} /></span> Back to login</Link>
                        </div>
                    </Form>
                </div>
            </Card>
        </div>
    )
};

export default ForgotPassword;