"use client";
import '../../../../../../public/sass/pages/homePage.scss';
import '../../../../../../public/sass/pages/table.scss';
import { Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faFilter, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { useParams } from 'next/navigation';
import { getApi } from '@/helpers';


const Email_Log_View_Page = () => {
    const { id } = useParams()
    const [show, setShow] = useState(false);
    const [log, setLog] = useState({})

    const getLogs = async () => {
        try {
            let resp = await getApi(`admin/email-log/view/${id}`);
            if (resp.status) {
                setLog(resp.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLogs()
    }, [])

    return (
        <div className='right_side'>
            <NavBottom title="Manage Logs" backUrl="/email_logs" />
            <div className='right_area top_spacing'>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Card>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Log Information
                                    </div>
                                </div>
                            </div>
                            <div className='card-body p-0'>
                                <div className='table_main'>
                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <th>Id</th>
                                                <td>#{log?._id?.slice(-5)}</td>
                                            </tr>
                                            <tr>
                                                <th>Email From</th>
                                                <td>{log?.from}</td>
                                            </tr>
                                            <tr>
                                                <th>TO Email</th>
                                                <td>{log?.to}</td>
                                            </tr>
                                            <tr>
                                                <th>Subject</th>
                                                <td>{log?.subject}</td>
                                            </tr>
                                            <tr>
                                                <th>Created At</th>
                                                <td>{new Date(log?.created_at).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <th>Modified On</th>
                                                <td>{new Date(log?.updated_at).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <th>Sent</th>
                                                <td>{log?.sent == 1 ? 'True' : 'False'}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <div className='sub_heading'>Description</div>
                                <div className='desc'>{log?.description}</div>
                            </div>
                        </Card>
                    </Col>
                    {/* <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='mt-sm-0 mt-3' >
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
                    </Col> */}
                </Row>
            </div>
        </div>
    )
};
export default Email_Log_View_Page;