"use client";
import { Card, Col, Form, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../public/sass/pages/homePage.scss';
import '../../../../public/sass/pages/table.scss';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import oneplus from '../../../../public/images/oneplus.png';
import shoes from '../../../../public/images/shoes.png';
import woodenchair from '../../../../public/images/woodenchair.png';
import facecream from '../../../../public/images/facecream.png';
import profile3 from '../../../../public/images/profile3.png';
import NavBottom from '@/app/components/navBottom';


const OrderDetail = () => {

    return (
        <div className='right_side'>
            <NavBottom
                title="Order #32543"
                paidChip={true}
                pickUpChip={true}
                backUrl="/"
                created="Aug 17, 2025, 5:48 (ET)">
                <div className='back_btn'>
                    Delete Order
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
                                                <th><Form.Check /></th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><Form.Check /></td>
                                                <td>
                                                    <div className='profile_area'>
                                                        <div className='profile_img'>
                                                            <Image
                                                                src={oneplus}
                                                                alt='...'
                                                                priority="low"
                                                            />
                                                        </div>
                                                        <div className='info'>
                                                            <Link className='name' href="#">Oneplus 10</Link>
                                                            <div className='email'>
                                                                Storage:128gb
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$896</td>
                                                <td>3</td>
                                                <td>2368</td>
                                            </tr>
                                            <tr>
                                                <td><Form.Check /></td>
                                                <td>
                                                    <div className='profile_area'>
                                                        <div className='profile_img'>
                                                            <Image
                                                                src={shoes}
                                                                alt='...'
                                                                priority="low"
                                                            />
                                                        </div>
                                                        <div className='info'>
                                                            <Link className='name' href="#">Nike Jordan</Link>
                                                            <div className='email'>
                                                                Size:8UK
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$392</td>
                                                <td>1</td>
                                                <td>$392</td>
                                            </tr>
                                            <tr>
                                                <td><Form.Check /></td>
                                                <td>
                                                    <div className='profile_area'>
                                                        <div className='profile_img'>
                                                            <Image
                                                                src={woodenchair}
                                                                alt='...'
                                                                priority="low"
                                                            />
                                                        </div>
                                                        <div className='info'>
                                                            <Link className='name' href="#">Wooden Chair</Link>
                                                            <div className='email'>
                                                                Material: Wooden
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$841</td>
                                                <td>2</td>
                                                <td>1682</td>
                                            </tr>
                                            <tr>
                                                <td><Form.Check /></td>
                                                <td>
                                                    <div className='profile_area'>
                                                        <div className='profile_img'>
                                                            <Image
                                                                src={facecream}
                                                                alt='...'
                                                                priority="low"
                                                            />
                                                        </div>
                                                        <div className='info'>
                                                            <Link className='name' href="#">Face cream</Link>
                                                            <div className='email'>
                                                                Gender:Women
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$813</td>
                                                <td>2</td>
                                                <td>1626</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className='bill'>
                                    <div className='total'>
                                        <div className='left'>
                                            <div className='txt1'>Subtotal:</div>
                                        </div>
                                        <div className='right'>
                                            <div className='price'>$2093</div>
                                        </div>
                                    </div>
                                    <div className='total'>
                                        <div className='left'>
                                            <div className='txt1'>Discount:</div>
                                        </div>
                                        <div className='right'>
                                            <div className='price'>$2</div>
                                        </div>
                                    </div>
                                    <div className='total'>
                                        <div className='left'>
                                            <div className='txt1'>Tax:</div>
                                        </div>
                                        <div className='right'>
                                            <div className='price'>$28</div>
                                        </div>
                                    </div>
                                    <div className='total'>
                                        <div className='left'>
                                            <div className='txt1'>Total:</div>
                                        </div>
                                        <div className='right'>
                                            <div className='price'>$2113</div>
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
                                    <li className='timeline_item'>
                                        <div className='timeline_item_inner'>
                                            <span className='dot'></span>
                                            <div className='timeline_event'>
                                                <div className='timeline_header'>
                                                    <div className='timeline_heading'>Order was placed (Order ID: #32543)</div>
                                                    <div className='timeline_date'>Tuesday 11:29 AM</div>
                                                </div>
                                                <div className='desc'>Your order has been placed successfully</div>
                                            </div>
                                        </div>
                                        <div className='line'></div>
                                    </li>
                                    <li className='timeline_item'>
                                        <div className='timeline_item_inner'>
                                            <span className='dot'></span>
                                            <div className='timeline_event'>
                                                <div className='timeline_header'>
                                                    <div className='timeline_heading'>Pick-up</div>
                                                    <div className='timeline_date'>Wednesday 11:29 AM</div>
                                                </div>
                                                <div className='desc'>Pick-up scheduled with courier</div>
                                            </div>
                                        </div>
                                        <div className='line'></div>
                                    </li>
                                    <li className='timeline_item'>
                                        <div className='timeline_item_inner'>
                                            <span className='dot'></span>
                                            <div className='timeline_event'>
                                                <div className='timeline_header'>
                                                    <div className='timeline_heading'>Dispatched</div>
                                                    <div className='timeline_date'>Thursday 11:29 AM</div>
                                                </div>
                                                <div className='desc'>Item has been picked up by courie</div>
                                            </div>
                                        </div>
                                        <div className='line'></div>
                                    </li>
                                    <li className='timeline_item'>
                                        <div className='timeline_item_inner'>
                                            <span className='dot'></span>
                                            <div className='timeline_event'>
                                                <div className='timeline_header'>
                                                    <div className='timeline_heading'>Package arrived</div>
                                                    <div className='timeline_date'>Saturday 15:20 AM</div>
                                                </div>
                                                <div className='desc'>Package arrived at an Amazon facility, NY</div>
                                            </div>
                                        </div>
                                        <div className='line'></div>
                                    </li>
                                    <li className='timeline_item'>
                                        <div className='timeline_item_inner'>
                                            <span className='dot'></span>
                                            <div className='timeline_event'>
                                                <div className='timeline_header'>
                                                    <div className='timeline_heading'>Dispatched for delivery</div>
                                                    <div className='timeline_date'>Today 14:12 PM</div>
                                                </div>
                                                <div className='desc'>Package has left an Amazon facility, NY</div>
                                            </div>
                                        </div>
                                        <div className='line dash_line'></div>
                                    </li>
                                    <li className='timeline_item'>
                                        <div className='timeline_item_inner'>
                                            <span className='dot unfillDot'></span>
                                            <div className='timeline_event'>
                                                <div className='timeline_header'>
                                                    <div className='timeline_heading'>Delivery</div>
                                                </div>
                                                <div className='desc'>Package will be delivered by tomorrow</div>
                                            </div>
                                        </div>
                                    </li>
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
                                            src={profile3}
                                            alt='...'
                                            priority="low"
                                        />
                                    </div>
                                    <div className='info'>
                                        <Link className='name' href="#">Shamus Tuttle</Link>
                                        <div className='customer_id'>
                                            Customer ID: #58909
                                        </div>
                                    </div>
                                </div>
                                <div className='user_profile_area'>
                                    <div className='cart_icon'>
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </div>
                                    <div className='info'>
                                        <Link className='name' href="#">12 Orders</Link>
                                    </div>
                                </div>
                                <div className='contact_area'>
                                    <div className='contact'>Contact info</div>
                                    <div className='edit'>Edit</div>
                                </div>
                                <div className='phoneNumber'>Email: Shamus889@yahoo.com</div>
                                <div className='phoneNumber'>Mobile: +1 (609) 972-22-22</div>
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
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={3}>
                                        <div className='header_right'>
                                            <Link href="#" className='edit'>Edit</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='card-body'>
                                <div className='address'>
                                    45 Roker Terrace
                                    Latheronwheel
                                    KW5 8NW,London
                                    UK
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
                                    <Col xxl={6} xl={4} lg={4} md={4} sm={4} xs={3}>
                                        <div className='header_right'>
                                            <Link href="#" className='edit'>Edit</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='card-body'>
                                <div className='address'>
                                    45 Roker Terrace
                                    Latheronwheel
                                    KW5 8NW,London
                                    UK
                                </div>
                                <div className='card_name'>Mastercard</div>
                                <div className='card_number'>Card Number: ******4291</div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default OrderDetail;