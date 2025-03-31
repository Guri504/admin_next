"use client";
import { faEdit, faEllipsisV, faEye, faSearch, faSort, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';
import '../../../public/sass/pages/table.scss';


const TableCom = (props) => {
    const {
        top_spacing
    } = props;


    return (
        <div className={`table_area ${top_spacing && top_spacing}`}>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Card>
                        <div className='card-header'>
                            <Row>
                                <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={12}>
                                    <div className='header_left'>
                                        <div className='heading'>Here Is Your Users Listing!</div>
                                    </div>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12}>
                                    <div className='header_right'>
                                        <div className='actions'>
                                            <div className='actions_left'>
                                                <Form.Group className='form-group'>
                                                    <InputGroup hasValidation>
                                                        <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
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
                        <div className='card-body'>
                            <div className="table_main">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th><Form.Check /></th>
                                            <th>ID <span className='icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                            <th>NAME <span className='icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                            <th>EMAIL <span className='icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                            <th>STATUS <span className='icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                            <th>CREATED ON <span className='icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                            <th>ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Form.Check /></td>
                                            <td>1</td>
                                            <td><div className='tab'>John</div></td>
                                            <td>@johngmail.com</td>
                                            <td>
                                                <Form.Group className='form-group'>
                                                    <Form.Check type="switch" />
                                                </Form.Group>
                                            </td>
                                            <td>30-11-2023 11:58AM</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basic">
                                                        <FontAwesomeIcon icon={faEllipsisV} />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#"><span className='edit'><FontAwesomeIcon icon={faEdit} /></span> Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#"><span className='view'><FontAwesomeIcon icon={faEye} /></span> View</Dropdown.Item>
                                                        <Dropdown.Item href="#"><span className='delete'><FontAwesomeIcon icon={faTrashAlt} /></span> Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default TableCom;