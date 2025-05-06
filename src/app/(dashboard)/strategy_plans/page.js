"use client";
import { Card, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../public/sass/pages/homePage.scss';
import '../../../../public/sass/pages/table.scss';
import { faEdit, faEllipsisV, faEye, faFilter, faSearch, faSort, faTimes, faTimesCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import NavBottom from '../../components/navBottom';
import TableCom from '@/app/components/table';
import Link from 'next/link';
import { checkAdmin, deleteApi, getApi, handleCheck, handleMultiCheck, putApi, softDeleteManyApi } from '@/helpers';
import { toast, ToastContainer } from 'react-toastify';
import { UserContext } from '@/app/user_context';
import { useRouter } from 'next/navigation';

const Strategy_Plan_Listing = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const [show, setShow] = useState();
    const [planList, setPlanlist] = useState([]);
    const [check, setCheck] = useState([]);

    const listing = async () => {
        try {
            let resp = await getApi('admin/strategy_plans');
            console.log(resp)
            if (resp.status) {
                setPlanlist(resp.data)
                // toast(resp.message)
            }
        } catch (error) {
            console.log(error);
            toast(resp.message)
        }
    }

    const deletePlan = async (id) => {
        try {
            let resp = await putApi(`admin/strategy_plan/delete/${id}`);
            if (resp.status) {
                toast(resp.message);
                listing()
            }
        } catch (error) {
            toast(resp.message);
            console.log(error)
        }
    }

    const updatePlanStatus = async (id, newStatus) => {
        try {
            let resp = await putApi(`admin/strategy_plan/edit/${id}`, {
                status: newStatus
            });
            if (resp.status) {
                toast("Staus Updated Succesfully");
                listing();
            }
            else {
                toast.error(resp.message);
            }
        } catch (error) {
            console.log("Error updating status", error);
            toast.error(resp.message);
        }
    };

    useEffect(() => {
        listing()
    }, [])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom title="Manage Strategy Plan Listing">
                <Link href={'/strategy_plans/add'} className='back_btn'>NEW</Link>
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
                                            <div className='heading'>Here Is Your Strategy Plan Listing!</div>
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
                                                            <Dropdown.Item onClick={() => softDeleteManyApi('strategy_plans', check, listing)}>
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
                                                <th><Form.Check onChange={(e) => handleMultiCheck(e, check, setCheck, planList)} /></th>
                                                <th>ID <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>Title <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>STATUS <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>CREATED ON <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {planList?.length > 0 && planList.map((plan, i) => (
                                                <tr key={i}>
                                                    <td><Form.Check checked={check.includes(plan._id)} onChange={() => handleCheck(plan._id, setCheck)} /></td>
                                                    <td>{plan._id.slice(-5)}</td>
                                                    <td><div className='tab'><Link href={`/strategy_plans/view/${plan._id}`}>{plan.title}</Link></div></td>
                                                    <td>
                                                        <Form.Group className='form-group'>
                                                            <Form.Check
                                                                type="switch"
                                                                checked={plan.status === 1}
                                                                onChange={() => updatePlanStatus(plan._id, plan.status === 1 ? 0 : 1)}
                                                            />
                                                        </Form.Group>
                                                    </td>
                                                    <td>{plan.created_at}</td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <FontAwesomeIcon icon={faEllipsisV} />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href={`/strategy_plans/edit/${plan._id}`}><span className='edit'>
                                                                    <FontAwesomeIcon icon={faEdit} /></span> Edit
                                                                </Dropdown.Item>
                                                                <Dropdown.Item href={`/strategy_plans/view/${plan._id}`}>
                                                                    <span className='view'><FontAwesomeIcon icon={faEye} />
                                                                    </span> View</Dropdown.Item>
                                                                <Dropdown.Item href="#" onClick={() => deletePlan(plan._id)}>
                                                                    <span className='delete'><FontAwesomeIcon icon={faTrashAlt} /></span> Delete
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
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
                autoClose={1500}
                toastStyle={{ backgroundColor: '#696cff', color: 'white' }}
                position='bottom-right'
                theme='colored'
            />
        </div>
    )
}

export default Strategy_Plan_Listing;