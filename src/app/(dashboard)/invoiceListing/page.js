"use client";
import { Card, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../public/sass/pages/homePage.scss';
import '../../../../public/sass/pages/table.scss';
import { faArrowDown, faCheck, faCheckDouble, faEllipsisV, faExclamationTriangle, faEye, faFileInvoice, faPlus, faSearch, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import carousel_img1 from '../../../../public/images/carousel_img1.jpg';
import carousel_img2 from '../../../../public/images/carousel_img2.jpg';
import carousel_img3 from '../../../../public/images/carousel_img3.jpg';
import Header from '@/app/components/header';
import NavBottom from '@/app/components/navBottom';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import TooltipCom from '@/app/components/tooltipCom';

const InvoiceListing = () => {
    const transactions = [
        {
            id: 5089,
            img: carousel_img1,
            name: "Jamal Kerrod",
            role: "Software Development",
            amount: 3077,
            date: "09 May 2020",
            status: "Paid",
            icon: {
                status: 'sent',
                icon: faEnvelope
            }
        },
        {
            id: 5041,
            img: carousel_img2,
            name: "Shamus Tuttle",
            role: "Software Development",
            amount: 2230,
            date: "19 Nov 2020",
            status: "Paid",
            icon: {
                status: 'partial',
                icon: faCheck
            }
        },
        {
            id: 5027,
            img: carousel_img3,
            name: "Devonne Wallbridge",
            role: "Software Development",
            amount: 2787,
            date: "25 Sept 2020",
            status: "Paid",
            icon: {
                status: 'download',
                icon: faArrowDown
            }
        },
        {
            id: 5024,
            img: null,
            name: "Ariella Filippyev",
            role: "Unlimited Extended License",
            amount: 5285,
            date: "02 Aug 2020",
            status: 6695,
            icon: {
                status: 'sent',
                icon: faEnvelope
            }
        },
        {
            id: 5020,
            img: carousel_img2,
            name: "Roy Southerell",
            role: "UI/UX Design & Development",
            amount: 5219,
            date: "15 Dec 2020",
            status: "Paid",
            icon: {
                status: 'partial',
                icon: faCheck
            }
        },
        {
            id: 4995,
            img: carousel_img3,
            name: "Raynell Clendennen",
            role: "Template Customization",
            amount: 3313,
            date: "09 Jun 2020",
            status: "Paid",
            icon: {
                status: 'due',
                icon: faExclamationTriangle
            }
        },
        {
            id: 4993,
            img: null,
            name: "Lutero Aloshechkin",
            role: "Unlimited Extended License",
            amount: 4836,
            date: "22 Oct 2020",
            status: "Paid",
            icon: {
                status: 'partial',
                icon: faCheck
            }
        },
        {
            id: 4989,
            img: carousel_img2,
            name: "Lorine Hischke",
            role: "Unlimited Extended License",
            amount: 3623,
            date: "23 Sept 2020",
            status: "Paid",
            icon: {
                status: 'sent',
                icon: faEnvelope
            }
        },
        {
            id: 4989,
            img: carousel_img3,
            name: "Orson Grafton",
            role: "Unlimited Extended License",
            amount: 5293,
            date: "01 Aug 2020",
            status: 5685,
            icon: {
                status: 'download',
                icon: faArrowDown
            }
        }
    ];


    return (
        <div className='right_side'>
            <NavBottom title="Invoice">
                <Form.Select>
                    <option value="7">7</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </Form.Select>
                <Form.Select>
                    <option value="">Invoice Status</option>
                    <option value="Downloaded">Downloaded</option>
                    <option value="Draft">Draft</option>
                    <option value="Paid">Paid</option>
                    <option value="Partial Payment">Partial Payment</option>
                    <option value="Past Due">Past Due</option>
                    <option value="Sent">Sent</option>
                </Form.Select>
                <div className='btn_area'>
                    <Link href="addInvoice" className='back_btn'>
                        <span className='icon'>
                            <FontAwesomeIcon icon={faPlus} />
                        </span> Create Invoice
                    </Link>
                </div>
            </NavBottom>
            <div className="right_area">
                <Header
                    num1={24}
                    title1='Client'
                    icon1={faUser}
                    num2={165}
                    title2='Invoices'
                    icon2={faFileInvoice}
                    num3={2.46}
                    title3='Paid'
                    icon3={faCheckDouble}
                    num4={879}
                    title4='UnPaid'
                    icon4={faExclamationTriangle}
                />
                <Card>
                    <div className='card-header'>
                        <Row>
                            <Col xxl={8} xl={6} lg={6} md={5} sm={5} xs={12}>
                                <div className='header_left'>
                                    <div className='heading'>Here Is Your Invoice Listing!</div>
                                </div>
                            </Col>
                            <Col xxl={4} xl={6} lg={6} md={7} sm={7} xs={12}>
                                <div className='header_right'>
                                    <div className='actions'>
                                        <div className='actions_left'>
                                            <Form.Group className='form-group'>
                                                <InputGroup hasValidation>
                                                    <InputGroup.Text id="inputGroupPrepend">
                                                        <FontAwesomeIcon icon={faSearch} />
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Search..."
                                                        aria-describedby="inputGroupPrepend"
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </div>
                                    </div>
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
                                        <th>#</th>
                                        <th>Status</th>
                                        <th>Client</th>
                                        <th>Total</th>
                                        <th>Issues Date</th>
                                        <th>Balance</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        transactions.map((item, index) => (
                                            <tr key={index}>
                                                <td><Form.Check /></td>
                                                <td>#{item.id}</td>
                                                <td>
                                                    <TooltipCom position="top">
                                                        <div className={`status_circle 
                                                            ${item.icon.status === 'partial' ? 'check' :
                                                                item.icon.status === 'download' ? 'download' :
                                                                    item.icon.status === 'due' ? 'failed' : ''}`}>
                                                            <FontAwesomeIcon icon={item.icon.icon} />
                                                        </div>
                                                    </TooltipCom>
                                                </td>
                                                <td>
                                                    <div className='profile_area'>
                                                        {
                                                            item && item.img ?
                                                                <div className='profile_img'>
                                                                    <Image
                                                                        src={item.img}
                                                                        alt='...'
                                                                        priority="low"
                                                                    />
                                                                </div>
                                                                :
                                                                <div className='without_img'>
                                                                    RM
                                                                </div>

                                                        }
                                                        <div className='info'>
                                                            <Link className='name' href="#">{item.name}</Link>
                                                            <div className='email'>
                                                                {item.role}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    ${item.amount}
                                                </td>
                                                <td>
                                                    {item.date}
                                                </td>
                                                <td>
                                                    {

                                                        item.status === 'Paid' ?
                                                            <span className='outDel delivered'>{item.status}</span>
                                                            :
                                                            '$' + item.status
                                                    }
                                                </td>
                                                <td>
                                                    <div className='action_Container'>
                                                        <span className='del_icon'><FontAwesomeIcon icon={faTrashAlt} /></span>
                                                        <Link href="previewInvoice" className='del_icon'>
                                                            <FontAwesomeIcon icon={faEye} />
                                                        </Link>
                                                        <Dropdown>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <FontAwesomeIcon icon={faEllipsisV} />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="orderDetail">Downloaded</Dropdown.Item>
                                                                <Dropdown.Item href="orderDetail">Edit</Dropdown.Item>
                                                                <Dropdown.Item href="orderDetail">Duplicate</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
};

export default InvoiceListing;