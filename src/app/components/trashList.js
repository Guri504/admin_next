'use client';
import { useEffect, useState } from 'react';
import { Card, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../public/sass/pages/homePage.scss';
import '../../../public/sass/pages/table.scss';
import { faEdit, faEllipsisV, faEye, faFilter, faSearch, faSort, faTimes, faTimesCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '../components/navBottom';
import { deleteApi, getApi, putApi } from '@/helpers';
import Link from 'next/link';

export default function TrashList({ type }) {
    const [show, setShow] = useState();
    const [items, setItems] = useState([]);
    const heading = type.replace(/1$/, '').replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

    const fetchData = async () => {
        try {
            const resp = await getApi(`admin/trash/${type}`);
            if (resp.status) {
                setItems(resp.data);
            }
        } catch (err) {
            console.error('Error fetching trash:', err);
        }
    };

    const undoDelete = async (e, id) => {
        e.preventDefault();
        try {
            const data = {
                id: id
            }
            let resp = await putApi(`admin/trash/undo/${type}`, data);
            if (resp.status) {
                fetchData()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deletePermanently = async (e, id) => {
        e.preventDefault();
        try {
            const data = {
                id: id
            }
            let resp = await deleteApi(`admin/trash/delete/${type}`, { data });
            console.log(resp)
            if (resp.status) {
                fetchData()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [type]);

    return (
        <div className='right_side'>
            <NavBottom title={`Manage ${heading}`}>
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
                                            <div className='heading'>Here Is Your {heading} Listing!</div>
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
                                                <th>NAME/Title <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>DELETED ON </th>
                                                <th>Restore </th>
                                                <th>Permanent Delete </th>
                                                {/* <th>STATUS <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th> */}
                                                {/* <th>ACTIONS</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items?.length > 0 && items.map((item, i) => {
                                                return <tr key={i}>
                                                    <td><Form.Check /></td>
                                                    <td className='text-danger'>#{item?._id?.slice(-5)}</td>
                                                    <td><div className='tab'>{item?.name || item?.title || item?.type ||
                                                        item?.productName || item?.blogCategoryTitle || item?.categoryTitle || item?.colorTitle ||
                                                        item?.sizeTitle || item?.color?.title + ',' + item?.size?.title || item?.firstName + ' ' + item?.lastName}</div></td>
                                                    <td>{item?.deleted_at}</td>
                                                    <td><Link href={'#'} className='tab tab-green' onClick={(e) => undoDelete(e, item?._id)}>Restore</Link></td>
                                                    <td><Link href={'#'} className='tab tab-red' onClick={(e) => deletePermanently(e, item?._id)}>Permanent Delete</Link></td>
                                                    {/* <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <FontAwesomeIcon icon={faEllipsisV} />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#"><span className='edit'>
                                                                    <FontAwesomeIcon icon={faEdit} /></span> Edit
                                                                </Dropdown.Item>
                                                                <Dropdown.Item href="#">
                                                                    <span className='view'><FontAwesomeIcon icon={faEye} />
                                                                    </span> View</Dropdown.Item>
                                                                <Dropdown.Item href="#">
                                                                    <span className='delete'><FontAwesomeIcon icon={faTrashAlt} /></span> Delete
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td> */}
                                                </tr>
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
