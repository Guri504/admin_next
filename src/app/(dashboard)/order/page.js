"use client";
import { Card, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../public/sass/pages/homePage.scss';
import '../../../../public/sass/pages/table.scss';
import { faAngleLeft, faAngleRight, faChevronDown, faEllipsisH, faEllipsisV, faEye, faFileCsv, faFileExcel, faFilePdf, faPrint, faSearch, faTimes, faTrashAlt, faUpload } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import carousel_img1 from '../../../../public/images/carousel_img1.jpg';
import mastercard from '../../../../public/images/mastercard.png';
import paypal from '../../../../public/images/paypal.png';
import Header from '@/app/components/header';
import NavBottom from '@/app/components/navBottom';


const Order = () => {

    return (
        <div className='right_side'>
            <NavBottom title="Orders">
                <Form.Select aria-label="Default select example">
                    <option value="7">7</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </Form.Select>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <span className='icon'><FontAwesomeIcon icon={faUpload} /></span>
                        Export
                        <span className='icon'><FontAwesomeIcon icon={faChevronDown} /></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><span className='icon'>
                            <FontAwesomeIcon icon={faPrint} /></span> Print
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            <span className='icon'><FontAwesomeIcon icon={faFileCsv} /></span> Csv
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            <span className='icon'><FontAwesomeIcon icon={faFileExcel} /></span> Excels
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            <span className='icon'><FontAwesomeIcon icon={faFilePdf} /></span> Pdf
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </NavBottom>
            <div className="right_area">
                <Header />
                <Card>
                    <div className='card-header'>
                        <Row>
                            <Col xxl={8} xl={7} lg={7} md={6} sm={5} xs={12}>
                                <div className='header_left'>
                                    <div className='heading'>Here Is Your Users Order!</div>
                                </div>
                            </Col>
                            <Col xxl={4} xl={5} lg={5} md={6} sm={7} xs={12}>
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
                                        <div className='actions_right'>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    <FontAwesomeIcon icon={faEllipsisV} />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#"><span className='publish'></span> Publish</Dropdown.Item>
                                                    <Dropdown.Item href="#"><span className='publish unpublish'></span> UnPublish</Dropdown.Item>
                                                    <Dropdown.Item href="#"><span className='cross'><FontAwesomeIcon icon={faTimes} /></span> Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
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
                                        <th>order</th>
                                        <th>date</th>
                                        <th>customers</th>
                                        <th>payment</th>
                                        <th>status</th>
                                        <th>method</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                                            <tr key={index}>
                                                <td><Form.Check /></td>
                                                <td>#6544</td>
                                                <td>Oct 25, 2022, 10:48</td>
                                                <td>
                                                    <div className='profile_area'>
                                                        <div className='profile_img'>
                                                            <Image
                                                                src={carousel_img1}
                                                                alt='...'
                                                                priority="low"
                                                            />
                                                        </div>
                                                        <div className='info'>
                                                            <Link className='name' href="#">Abagael Drogan</Link>
                                                            <div className='email'>
                                                                adrogan8@storify.com
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='cancelTxt'>
                                                        Cancelled
                                                    </div>
                                                </td>
                                                <td><span className='outDel'>Out for Delivery</span></td>
                                                <td>
                                                    <div className='pay_type'>
                                                        <div className='card_img'>
                                                            <Image
                                                                src={mastercard}
                                                                alt='...'
                                                                fetchPriority='low'
                                                            />
                                                        </div>
                                                        <FontAwesomeIcon icon={faEllipsisH} /> 2356
                                                    </div>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basic">
                                                            <FontAwesomeIcon icon={faEllipsisV} />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="orderDetail"><span className='view'><FontAwesomeIcon icon={faEye} /></span> View</Dropdown.Item>
                                                            <Dropdown.Item href="#"><span className='delete'><FontAwesomeIcon icon={faTrashAlt} /></span> Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
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

export default Order;