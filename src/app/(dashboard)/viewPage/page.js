"use client";
import '../../../../public/sass/pages/homePage.scss';
import '../../../../public/sass/pages/table.scss';
import { Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faFilter, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';


const ViewPage = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='right_side'>
            <NavBottom title="Manage User" backUrl="/" />
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
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <th>Title</th>
                                                <td>jkskd</td>
                                            </tr>
                                            <tr>
                                                <th>Designations</th>
                                                <td>lakljkl</td>
                                            </tr>
                                            <tr>
                                                <th>Designations</th>
                                                <td>lakljkl</td>
                                            </tr>
                                            <tr>
                                                <th>Location</th>
                                                <td>lakljkl</td>
                                            </tr>
                                            <tr>
                                                <th>Rating</th>
                                                <td> <FontAwesomeIcon icon={faStar} /></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <div className='sub_heading'>Description</div>
                                <div className='desc'>jskldjljada</div>
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='mt-sm-0 mt-3' >
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
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <th>Title</th>
                                                <td>jkskd</td>
                                            </tr>
                                            <tr>
                                                <th>Designations</th>
                                                <td>lakljkl</td>
                                            </tr>
                                            <tr>
                                                <th>Designations</th>
                                                <td>lakljkl</td>
                                            </tr>
                                            <tr>
                                                <th>Location</th>
                                                <td>lakljkl</td>
                                            </tr>
                                            <tr>
                                                <th>Rating</th>
                                                <td> <FontAwesomeIcon icon={faStar} /></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <div className='sub_heading'>Description</div>
                                <div className='desc'>jskldjljada</div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
};
export default ViewPage;