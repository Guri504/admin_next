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


const Success_Stories_VewPage = () => {
    const { id } = useParams()
    const [show, setShow] = useState(false);
    const [stories, setStories] = useState({})

    const getstory = async () => {
        try {
            let resp = await getApi(`admin/success_stories/view/${id}`);
            console.log(resp)
            if (resp.status) {
                setStories(resp.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getstory()
    }, [id])

    return (
        <div className='right_side'>
            <NavBottom title="Manage Success Story" backUrl="/success_stories" />
            <div className='right_area top_spacing'>
                <Row>
                    <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={12}>
                        <Card>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Success Story Information
                                    </div>
                                </div>
                            </div>
                            <div className='card-body p-0'>
                                <div className='table_main'>
                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <th>Id</th>
                                                <td>{stories?._id?.slice(-5)}</td>
                                            </tr>
                                            <tr>
                                                <th>Title</th>
                                                <td>{stories?.title}</td>
                                            </tr>
                                            <tr>
                                                <th>Name</th>
                                                <td>{stories?.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Speciality</th>
                                                <td>{stories?.speciality}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <div className='sub_heading'>Description</div>
                                <div className='desc' dangerouslySetInnerHTML={{ __html: stories?.description }} />
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='mt-sm-0 mt-3 ' >
                        <Card className='mb-3'>
                            <div className='card-body'>
                                <img src={process.env.imageUrl + '' + stories?.image?.original} alt="Story_image" />
                            </div>
                        </Card>
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
                                                <td>{stories?.created_at}</td>
                                            </tr>
                                            <tr>
                                                <th>Updated on</th>
                                                <td>{stories?.updated_at}</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>{stories?.status === 1 ? "True" : "False"}</td>
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
export default Success_Stories_VewPage;