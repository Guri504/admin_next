"use client";
import React, { useState } from 'react';
import '../../../public/sass/pages/navBtm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { faAngleLeft, faFilter, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


const NavBtm = (props) => {
    const {
        heading,
        time,
        paidChip,
        pickChip
    } = props;

    const [show, setShow] = useState(false);

    return (
        <div className='nav_btm'>
            <Row>
                <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={12}>
                    <div className='left'>
                        <div className='title'>
                            {heading ? heading : 'Manage Users'}
                        </div>
                        {paidChip ? <span className='chip'>Paid</span> : null}
                        {pickChip ? <span className='chip pick'>Ready To Pickup</span> : null}
                        <div className='txt'>
                            {time ? time : ''}
                        </div>
                    </div>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12}>
                    <div className='right'>
                        <div className='btn_area'>
                            <div className='back_btn'>
                                <span><FontAwesomeIcon icon={faAngleLeft} /></span>  Back
                            </div>
                        </div>
                        <Dropdown bsPrefix='filter_dropdown' show={show}>
                            <Dropdown.Toggle id="dropdown-basic" onClick={() => setShow(true)}>
                                <span className='icon' ><FontAwesomeIcon icon={faFilter} /></span>
                                Filter
                                {/* <div className='btn_area'>
                                    <div className='back_btn' onClick={() => setShow(true)}>
                                        <span className='filter_icon'><FontAwesomeIcon icon={faFilter} /></span>  Filter
                                    </div>
                                </div> */}
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
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default NavBtm;