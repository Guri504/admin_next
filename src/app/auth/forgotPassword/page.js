"use client";
import { Button, Card, Form } from 'react-bootstrap';
import '../../../../public/sass/pages/auth.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { postApi } from '@/helpers';
import { useContext } from 'react';
import { UserContext } from '@/app/user_context';
import { toast, ToastContainer } from 'react-toastify';


const ForgotPassword = () => {
    const router = useRouter();
    const { tempAdmin, setTempAdmin } = useContext(UserContext)

    const forgotPassword = async (e) => {
        e.preventDefault();
        try {
            let formdata = new FormData(e.target);
            let finalData = Object.fromEntries(formdata.entries());
            let resp = await postApi('admin/forgot-password', finalData);
            if (resp.status) {
                setTempAdmin(resp.admin);
                toast('Link send to email for changing password')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='auth_page'>
            <Card>
                <div className='card-header'>
                    <div className='heading'>Admin</div>
                </div>
                <div className='card-body'>
                    <h5>Forgot Password</h5>
                    <div className='desc'>Enter your email and we'll send you instructions to reset your password</div>
                    <Form onSubmit={forgotPassword}>
                        <Form.Group className='form-group'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name='email'
                                required
                                type="text"
                                placeholder="Enter Your Email"
                            />
                        </Form.Group>
                        <div className='btn_area'>
                            <Button type="submit" >Send Reset Link</Button>
                            <Link href="#" className='back'><span className='back_arrow'><FontAwesomeIcon icon={faChevronLeft} /></span> Back to login</Link>
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

export default ForgotPassword;