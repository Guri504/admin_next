"use client";
import '../../../../../../public/sass/pages/homePage.scss';
import '../../../../../../public/sass/pages/table.scss';
import { Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faFilter, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { useParams } from 'next/navigation';
import { checkAdmin, formateDate, getApi } from '@/helpers';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/user_context';
import { toast, ToastContainer } from 'react-toastify';


const Transaction_View_Page = () => {

    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const [show, setShow] = useState(false);
    const { id } = useParams()
    const [transData, setTransData] = useState({});

    const getTransaction = async () => {
        try {
            let resp = await getApi(`admin/transaction/view/${id}`);
            console.log("resp", resp);
            if (resp.status) {
                setTransData(resp.data)
                toast(resp.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTransaction();
    }, [id])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom title="Manage Transaction" backUrl="/transactions" />
            <div className='right_area top_spacing'>
                <Row>
                    <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={12}>
                        <Card>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Transaction Information
                                    </div>
                                </div>
                            </div>
                            <div className='card-body p-0'>
                                <div className='table_main'>
                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <th>Id</th>
                                                <td>#{transData?._id?.slice(-5)}</td>
                                            </tr>
                                            <tr>
                                                <th>Customer Name</th>
                                                <td>{transData?.customerName}</td>
                                            </tr>
                                            <tr>
                                                <th>Customer Email</th>
                                                <td>{transData.customerEmail}</td>
                                            </tr>
                                            <tr>
                                                <th>Order ID</th>
                                                <td>#{transData?.orderId}</td>
                                            </tr>
                                            <tr>
                                                <th>Banking Transaction Id</th>
                                                <td>{transData?.transactionId}</td>
                                            </tr>
                                            <tr>
                                                <th>Payment Date</th>
                                                <td>{formateDate(transData?.created_at)}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Payment Details
                                    </div>
                                </div>
                            </div>
                            <div className='card-body p-0'>
                                <div className='table_main'>
                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <th>Payment Method</th>
                                                <td>{transData?.method?.toUpperCase()}</td>
                                            </tr>
                                            <tr>
                                                <th>Total Amount</th>
                                                <td>Rs. {transData?.totalAmount}</td>
                                            </tr>
                                            <tr>
                                                <th>Currency</th>
                                                <td>{transData?.currency}</td>
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
                                transData?.customerImage !== '' ?
                                    <div className='card-body'>
                                        <img src={process.env.imageUrl + '' + transData?.customerImage} alt="user_image" />
                                    </div> : <p>No Image Selected</p>
                            }
                        </Card>
                    </Col>
                </Row>
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
};
export default Transaction_View_Page;