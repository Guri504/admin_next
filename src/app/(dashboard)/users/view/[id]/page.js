"use client";
import '../../../../../../public/sass/pages/homePage.scss';
import '../../../../../../public/sass/pages/table.scss';
import { Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faFilter, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { useParams } from 'next/navigation';
import { checkAdmin, getApi } from '@/helpers';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/user_context';
import Image from 'next/image';


const UserViewPage = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const [show, setShow] = useState(false);

    const params = useParams()

    const [userData, setUserData] = useState({});

    const viewUser = async () => {
        try {
            let resp = await getApi(`admin/user/view/${params.id}`);
            if (resp.status) {
                setUserData(resp.data)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        viewUser();
    }, [params.id])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom title="Manage User" backUrl="/users" />
            <div className='right_area top_spacing'>
                <Row>
                    <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={12}>
                        <Card>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Testimonial Information
                                    </div>
                                </div>
                            </div>
                            <div className='card-body p-0'>
                                <div className='table_main'>
                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <th>Id</th>
                                                <td>{params.id.slice(-5)}</td>
                                            </tr>
                                            <tr>
                                                <th>Username</th>
                                                <td>{userData.username1}</td>
                                            </tr>
                                            <tr>
                                                <th>First Name</th>
                                                <td>{userData.firstName1}</td>
                                            </tr>
                                            <tr>
                                                <th>Last Name</th>
                                                <td>{userData.lastName1}</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>{userData.email1}</td>
                                            </tr>
                                            <tr>
                                                <th>Password</th>
                                                <td>{userData.password1}</td>
                                            </tr>
                                            <tr>
                                                <th>Country</th>
                                                <td>{userData.country1}</td>
                                            </tr>
                                            <tr>
                                                <th>Registered On</th>
                                                <td>{userData.created_at}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='mt-sm-0 mt-3' >
                        <Card>
                            {
                                userData.image1 !== '' ?
                                    <div className='card-body'>
                                        <Image src={process.env.imageUrl + '' + userData.image1} alt="user_image" width='auto' height='auto' />
                                    </div> : <p>No Image Selected</p>
                            }
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
};
export default UserViewPage;