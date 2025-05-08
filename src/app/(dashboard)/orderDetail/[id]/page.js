"use client";
import { Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../../public/sass/pages/homePage.scss';
import '../../../../../public/sass/pages/table.scss';
import { faChevronDown, faFileCsv, faFileExcel, faFilePdf, faPrint, faShoppingCart, faUpload } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import NavBottom from '@/app/components/navBottom';
import { useParams, useRouter } from 'next/navigation';
import { checkAdmin, formateDate, formateDayTime, getApi, handleCheck, handleMultiCheck, putApi } from '@/helpers';
import { useContext, useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { UserContext } from '@/app/user_context';
import { usePDF } from '@react-pdf/renderer';
import dynamic from 'next/dynamic';
const MyPDFComponent = dynamic(() => import('../../../components/pdf_component'), { ssr: false });

const OrderDetail = () => {
    const { id } = useParams();
    const ref = useRef(null);
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const [check, setCheck] = useState([]);
    const [orderData, setOrderData] = useState({});

    const shippingStatus = [
        {
            title: `Order was placed (Order ID: #${orderData?._id?.slice(-5)})`,
            time: orderData?.updatedStatus?.length > 0 ? orderData?.updatedStatus.find(o => o.name == 'Order Placed')?.time : '',
            desc: 'Your order has been placed successfully'
        },
        {
            title: `Pick up`,
            time: orderData?.updatedStatus?.length > 1 ? orderData?.updatedStatus.find(o => o.name == 'Pick Up')?.time : '',
            desc: 'Pick-up scheduled with courier'
        },
        {
            title: `Dispatched`,
            time: orderData?.updatedStatus?.length > 2 ? orderData?.updatedStatus.find(o => o.name == 'Dispatched')?.time : '',
            desc: 'Item has been picked up by courier'
        },
        {
            title: `Package arrived`,
            time: orderData?.updatedStatus?.length > 3 ? orderData?.updatedStatus.find(o => o.name == 'Package Arrived')?.time : '',
            desc: 'Package arrived at an Amazon facility, NY'
        },
        {
            title: `Dispatched for delivery`,
            time: orderData?.updatedStatus?.length > 4 ? orderData?.updatedStatus.find(o => o.name == 'Dispatched For Delivery')?.time : '',
            desc: 'Package has left an Amazon facility, NY'
        },
        {
            title: `Delivered`,
            time: orderData?.updatedStatus?.length > 5 ? orderData?.updatedStatus.find(o => o.name == 'Delivered')?.time : '',
            desc: orderData?.orderStatus == 'Delivered' > 5 ? 'Order Delivered Successfully' : 'Package will be delivered by tomorrow'
        },
    ]

    const dropdownData = [
        { name: 'Order Placed' },
        { name: 'Pick Up' },
        { name: 'Dispatched' },
        { name: 'Package Arrived' },
        { name: 'Dispatched For Delivery' },
        { name: 'Delivered' }
    ]

    const getOrder = async () => {
        try {
            let resp = await getApi(`admin/order/view/${id}`);
            if (resp.status) {
                setOrderData({
                    ...resp.data,
                    updatedStatus: resp?.data?.updatedStatus?.map(u => {
                        return {
                            ...u,
                            name: u.name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                            time: formateDayTime(u.time)
                        }
                    }),
                    orderStatus: resp?.data?.orderStatus?.replace(/_/g, ' ')?.replace(/\b\w/g, c => c.toUpperCase())
                })
            }
        } catch (error) {
            console.log("error", error)
        }
    }

    const updateOrderStatus = async (status) => {
        try {
            let index = dropdownData.findIndex(s => s.name === status);
            let newStatus = dropdownData.slice(0, index + 1);
            let filteredData = newStatus.filter(f => !orderData?.updatedStatus?.map(u => u.name).includes(f.name));
            let finalData = filteredData.map(fd => fd.name.replace(/ /g, '_').toLowerCase())
            let resp = await putApi(`admin/order-status/update/${orderData?._id}`, { data: finalData });
            if (resp.status) {
                setOrderData(
                    {
                        ...orderData,
                        updatedStatus: resp?.updatedStatus?.map(u => {
                            return {
                                ...u,
                                name: u.name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                                time: formateDayTime(u.time)
                            }
                        }),
                        orderStatus: resp?.orderStatus.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
                    })
                toast('Order status updated successfully');
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getOrder()
    }, [])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom
                title={`Order #${orderData?._id?.slice(-5)}`}
                paidChip={orderData?.paymentStatus === 'captured' ? 'Paid' : 'Pending'}
                pickUpChip={true}
                backUrl="/order"
                created={formateDate(orderData?.created_at)}>
                <div className='back_btn'>
                    <MyPDFComponent order={orderData} />
                </div>
            </NavBottom>
            <div className="right_area top_spacing">
                <Row>
                    <Col xx={8} xl={8} lg={8} md={12} sm={12} xs={12}>
                        <Card className='mb-4'>
                            <div className='card-header'>
                                <Row>
                                    <Col xxl={3} xl={3} lg={3} md={4} sm={4} xs={9}>
                                        <div className='header_left'>
                                            <div className='heading'>
                                                Order details
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={9} xl={9} lg={9} md={8} sm={8} xs={3}>
                                        <div className='header_right'>
                                            <Link href="#" className='edit'>Edit</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='card-body p-0'>
                                <div className="table_main">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th><Form.Check onChange={(e) => handleMultiCheck(e, check, setCheck, orderData?.orderListing)} /></th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                orderData?.orderListing?.length > 0 && orderData?.orderListing.map((product, i) => {
                                                    return <tr key={i}>
                                                        <td><Form.Check checked={check.includes(product?.variantId)} onChange={() => handleCheck(product?.variantId, setCheck)} /></td>
                                                        <td>
                                                            <div className='profile_area'>
                                                                <div className='profile_img'>
                                                                    <Image
                                                                        src={process.env.imageUrl + '' + product?.image?.original}
                                                                        alt='...'
                                                                        priority="low"
                                                                        width={32}
                                                                        height={32}
                                                                    />
                                                                </div>
                                                                <div className='info'>
                                                                    <Link className='name' href="#">{product?.productName}</Link>
                                                                    <div className='email'>
                                                                        Size: {product?.size}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Rs {product?.price}</td>
                                                        <td>{product?.quantity}</td>
                                                        <td>{product?.price * product?.quantity}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                                <div className='bill'>
                                    <div className='total'>
                                        <div className='left'>
                                            <div className='txt1'>Subtotal:</div>
                                        </div>
                                        <div className='right'>
                                            <div className='price'>Rs {orderData?.totalAmount}</div>
                                        </div>
                                    </div>
                                    {/* <div className='total'>
                                        <div className='left'>
                                            <div className='txt1'>Discount:</div>
                                        </div>
                                        <div className='right'>
                                            <div className='price'>Rs 2</div>
                                        </div>
                                    </div>
                                    <div className='total'>
                                        <div className='left'>
                                            <div className='txt1'>Tax:</div>
                                        </div>
                                        <div className='right'>
                                            <div className='price'>Rs 28</div>
                                        </div>
                                    </div> */}
                                    <div className='total'>
                                        <div className='left'>
                                            <div className='txt1'>Total:</div>
                                        </div>
                                        <div className='right'>
                                            <div className='price'>Rs {orderData?.totalAmount}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Shipping activity
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <ul className='timeline'>
                                    {
                                        shippingStatus.map((status, i) => {
                                            const isLastItem = i === shippingStatus.length - 1
                                            return <li className='timeline_item' key={i}>
                                                <div className='timeline_item_inner'>
                                                    <span className={`unfillDot ${dropdownData.findIndex(o => o.name === orderData?.orderStatus) >= i ? 'dot' : ''}`}></span>
                                                    <div className='timeline_event'>
                                                        <div className='timeline_header'>
                                                            <div className='timeline_heading'>{status.title}</div>
                                                            <div className='timeline_date'>{status.time}</div>
                                                        </div>
                                                        <div className='desc'>{status.desc}</div>
                                                    </div>
                                                </div>
                                                {!isLastItem && <div className={`dash_line ${dropdownData.findIndex(o => o.name === orderData?.orderStatus) - 1 >= i ? 'line' : ''}`}></div>}
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </Card>
                    </Col>
                    <Col xx={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                        <Card className='mb-4 mt-lg-0 mt-4'>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Customer details
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='user_profile_area'>
                                    <div className='profile_img'>
                                        <Image
                                            src={process.env.imageUrl + '' + orderData?.customerImage}
                                            alt='...'
                                            priority="low"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div className='info'>
                                        <Link className='name' href="#">{orderData?.customerName}</Link>
                                        <div className='customer_id'>
                                            Customer ID: #{orderData?.userId?.slice(-5)}
                                        </div>
                                    </div>
                                </div>
                                <div className='user_profile_area'>
                                    <div className='cart_icon'>
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </div>
                                    <div className='info'>
                                        <Link className='name' href="#">{orderData?.ordersLength} Orders</Link>
                                    </div>
                                </div>
                                <div className='contact_area'>
                                    <div className='contact'>Contact info</div>
                                    <div className='edit'>Edit</div>
                                </div>
                                <div className='phoneNumber'>Email: {orderData?.customerEmail}</div>
                                <div className='phoneNumber'>Mobile: {`${orderData?.customerMobileNumber?.slice(0, -5)} - ${orderData?.customerMobileNumber?.slice(-5)}`}</div>
                            </div>
                        </Card>
                        <Card className='mb-4'>
                            <div className='card-header'>
                                <Row>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={6} xs={9}>
                                        <div className='header_left'>
                                            <div className='heading'>
                                                Update Order Status
                                            </div>
                                        </div>
                                    </Col>
                                    {/* <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={3}>
                                        <div className='header_right'>
                                            <Link href="#" className='edit'>Edit</Link>
                                        </div>
                                    </Col> */}
                                </Row>
                            </div>
                            <div className='card-body'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Update Order
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu >
                                        {dropdownData.filter(d => !orderData?.updatedStatus?.find(u => u.name === d.name)).map((item, i) => {
                                            return <Dropdown.Item onClick={() => updateOrderStatus(item.name)} key={i}> {item.name}</Dropdown.Item>
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card>
                        <Card className='mb-4'>
                            <div className='card-header'>
                                <Row>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={6} xs={9}>
                                        <div className='header_left'>
                                            <div className='heading'>
                                                Shipping address
                                            </div>
                                        </div>
                                    </Col>
                                    {/* <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={3}>
                                        <div className='header_right'>
                                            <Link href="#" className='edit'>Edit</Link>
                                        </div>
                                    </Col> */}
                                </Row>
                            </div>
                            <div className='card-body'>
                                <div className='address'>
                                    {`${orderData?.address?.address},${orderData?.address?.pinCode}  ${orderData?.address?.country1}`}
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className='card-header'>
                                <Row>
                                    <Col xxl={6} xl={8} lg={8} md={8} sm={8} xs={9}>
                                        <div className='header_left'>
                                            <div className='heading'>
                                                Billing address
                                            </div>
                                        </div>
                                    </Col>
                                    {/* <Col xxl={6} xl={4} lg={4} md={4} sm={4} xs={3}>
                                        <div className='header_right'>
                                            <Link href="#" className='edit'>Edit</Link>
                                        </div>
                                    </Col> */}
                                </Row>
                            </div>
                            <div className='card-body'>
                                <div className='address'>
                                    {`${orderData?.address?.address},${orderData?.address?.pinCode}  ${orderData?.address?.country1}`}
                                </div>
                                {orderData?.paymentMethod == 'netbanking' && <div className='card_name'>Net Banking</div>}
                                {orderData?.paymentMethod == 'card' && <div className='card_number'>Card Number: ******4291</div>}
                            </div>
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
                autoClose={2000}
                toastStyle={{ backgroundColor: '#696cff', color: 'white' }}
                position='bottom-right'
                theme='colored'
            />
        </div>
    )
};

export default OrderDetail;