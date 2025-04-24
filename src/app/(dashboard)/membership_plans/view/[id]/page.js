"use client";
import '../../../../../../public/sass/pages/homePage.scss';
import '../../../../../../public/sass/pages/table.scss';
import { Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faFilter, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { getApi } from '@/helpers';
import { useParams } from 'next/navigation';


const Membership_Plan_VewPage = () => {
    const {id} = useParams()
    const [show, setShow] = useState(false);
    const [viewPlan, setViewPlan] = useState({})

    const plan = async () => {
        try {
            let resp = await getApi(`admin/membershipPlan/view/${id}`);
            console.log(resp)
            if(resp.status){
                setViewPlan(resp.data)
                console.log(resp.data._id)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        plan()
    }, [id])

    return (
        <div className='right_side'>
            <NavBottom title="Manage Plan" backUrl="/membership_plans" />
            <div className='right_area top_spacing'>
                <Row>
                    <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={12}>
                        <Card>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Plan Information
                                    </div>
                                </div>
                            </div>
                            <div className='card-body p-0'>
                                <div className='table_main'>
                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <th>Id</th>
                                                <td>{viewPlan?._id?.slice(-5)}</td>
                                            </tr>
                                            <tr>
                                                <th>Plan Type</th>
                                                <td>{viewPlan?.type}</td>
                                            </tr>
                                            <tr>
                                                <th>Plan Price</th>
                                                <td>{viewPlan?.price}</td>
                                            </tr>
                                            <tr>
                                                <th>Plan Time Period</th>
                                                <td>{viewPlan?.period?.toUpperCase()}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <div className='sub_heading'>Description</div>
                                <div className='desc' dangerouslySetInnerHTML={{__html: viewPlan?.description}}/>
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='mt-sm-0 mt-3' >
                        <Card>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Other Information
                                    </div>
                                </div>
                            </div>
                            <div className='card-body p-0'>
                                <div className='table_main'>
                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <th>Created on</th>
                                                <td>{viewPlan?.created_at}</td>
                                            </tr>
                                            <tr>
                                                <th>Updated on</th>
                                                <td>{viewPlan?.updated_at}</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>{viewPlan?.status === 1 ? "True" : "False"}</td>
                                            </tr>
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
};
export default Membership_Plan_VewPage;