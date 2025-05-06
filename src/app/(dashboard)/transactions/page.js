"use client";
import { Badge, Card, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../public/sass/pages/homePage.scss';
import '../../../../public/sass/pages/table.scss';
import { faEdit, faEllipsisV, faEye, faFilter, faSearch, faSort, faTimes, faTimesCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import NavBottom from '../../components/navBottom';
import TableCom from '@/app/components/table';
import { UserContext } from '@/app/user_context';
import { checkAdmin, getApi } from '@/helpers';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import mastercard from '../../../../public/images/mastercard.png'
import Link from 'next/link';
import Image from 'next/image';


export default function Transactions() {
    const router = useRouter()
    const [show, setShow] = useState();
    const { admin, setAdmin } = useContext(UserContext)
    const [transactions, setTransactions] = useState([]);

    const listing = async () => {
        try {
            let resp = await getApi('admin/transactions');
            console.log(resp)
            if (resp.status) {
                setTransactions(resp.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listing();
    }, [])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])
    return (
        <div className='right_side'>
            <NavBottom title="Manage Transactions">
                <Dropdown bsPrefix='filter_dropdown' show={show}>
                    <Dropdown.Toggle id="dropdown-basic" onClick={() => setShow(true)}>
                        <span className='icon' ><FontAwesomeIcon icon={faFilter} /></span>
                        Filter
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <div className='crossMain'>
                            <div className='cross_icon' onClick={() => setShow(false)}>
                                <FontAwesomeIcon icon={faTimesCircle} />
                            </div>
                        </div>
                        <Dropdown.Item as={'div'}>
                            <div className='date_area'>
                                <Row className='align-items-end'>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <Form.Group className='form-group'>
                                            <Form.Label>Created On</Form.Label>
                                            <Form.Control
                                                type="date"
                                                placeholder="Select Date of birth"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <Form.Group className='form-group'>
                                            <Form.Control
                                                type="date"
                                                placeholder="Select Date of birth"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item as={'div'}>
                            <div className='date_area'>
                                <Row className='align-items-end'>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <Form.Group className='form-group'>
                                            <Form.Label>Last Login</Form.Label>
                                            <Form.Control
                                                type="date"
                                                placeholder="Select Date of birth"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <Form.Group className='form-group'>
                                            <Form.Control
                                                type="date"
                                                placeholder="Select Date of birth"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item as={'div'}>
                            <div className='select_area'>
                                <Form.Check
                                    type={'radio'}
                                    label="All"
                                    name='status'
                                />
                                <Form.Check
                                    type={'radio'}
                                    label="Publish"
                                    name='status'
                                />
                                <Form.Check
                                    type={'radio'}
                                    label="UnPublish"
                                    name='status'
                                />
                            </div>
                        </Dropdown.Item>
                        <div className='btn_main'>
                            <div className='btn_area'>
                                <div className='btn btn-primary reset_btn'>Reset</div>
                            </div>
                            <div className='btn_area' onClick={() => setShow(false)}>
                                <div className='btn btn-primary'>Submit</div>
                            </div>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </NavBottom>

            <div className="right_area top_spacing">
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Card>
                            <div className='card-header'>
                                <Row>
                                    <Col xxl={8} xl={8} lg={8} md={5} sm={5} xs={12}>
                                        <div className='header_left'>
                                            <div className='heading'>Here Is Your Transaction Listing!</div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={7} sm={7} xs={12}>
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
                                                            <Dropdown.Item href="#">
                                                                <span className='publish'></span> Publish
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#">
                                                                <span className='publish unpublish'></span> UnPublish
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#">
                                                                <span className='cross'><FontAwesomeIcon icon={faTimes} /></span> Delete
                                                            </Dropdown.Item>
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
                                                <th>ID <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>Banking ID <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>Order ID <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>Customer NAME <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>Amount <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>STATUS <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>CREATED ON <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                transactions?.length > 0 && transactions.map((t, i) => {
                                                    return <tr key={i}>
                                                        <td><Form.Check /></td>
                                                        <td className='text-primary'>#{t?._id?.slice(-5)}</td>
                                                        <td className='text-danger'>#{t?.transactionId}</td>
                                                        <td className='text-primary'>#{t?.orderId?.slice(-5)}</td>
                                                        <td>
                                                            <div className='profile_area'>
                                                                <div className='profile_img'>
                                                                    <Image
                                                                        src={process.env.imageUrl + '' + t?.customerImage}
                                                                        alt='...'
                                                                        priority="low"
                                                                        width={32}
                                                                        height={32}
                                                                    />
                                                                </div>
                                                                <div className='info'>
                                                                    <Link className='name' href="#">{t?.customerName}</Link>
                                                                    <div className='email'>
                                                                        {t?.customerEmail}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><Badge bg="success">Rs {t?.totalAmount}</Badge></td>
                                                        {t?.paymentStatus == 'captured' ?
                                                            <td><Badge bg="success">Paid</Badge></td> :
                                                            <td><Badge bg="danger">Failed</Badge></td>}
                                                        <td>{new Date(t?.created_at).toDateString()}</td>
                                                        <td>
                                                            <Link href={`/transactions/view/${t?._id}`} ><Badge className='bdg' bg='primary'>View</Badge></Link>
                                                        </td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}