"use client";
import '../../../../../../public/sass/pages/homePage.scss';
import '../../../../../../public/sass/pages/table.scss';
import { Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap';
import { useEffect, useState, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faFilter, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { checkAdmin, getApi } from '@/helpers';
import { useParams, useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { UserContext } from '@/app/user_context';

const Winners_VewPage = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const { id } = useParams()
    const [show, setShow] = useState(false);
    const [winner, setWinner] = useState({})

    const getWinner = async () => {
        try {
            let resp = await getApi(`admin/about_me_winner/view/${id}`);
            console.log(resp)
            if (resp.status) {
                setWinner(resp.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWinner()
    }, [id])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom title="Manage Winner" backUrl="/winners" />
            <div className='right_area top_spacing'>
                <Row>
                    <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={12}>
                        <Card>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Winner Information
                                    </div>
                                </div>
                            </div>
                            <div className='card-body p-0'>
                                <div className='table_main'>
                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <th>Id</th>
                                                <td>{winner?._id?.slice(-5)}</td>
                                            </tr>
                                            <tr>
                                                <th>Winner Name</th>
                                                <td>{winner?.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Winning year</th>
                                                <td>{winner?.year}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <div className='sub_heading'>Description</div>
                                <div className='desc' dangerouslySetInnerHTML={{ __html: winner?.description }} />
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='mt-sm-0 mt-3 ' >
                        <Card className='mb-3'>
                            <div className='card-body'>
                                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                    <SwiperSlide>
                                        <img src={process.env.imageUrl + '' + winner?.image1?.original} alt="Winner Image" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={process.env.imageUrl + '' + winner?.image2?.original} alt="Winner Image" />
                                    </SwiperSlide>
                                </Swiper>
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
                                                <td>{winner?.created_at}</td>
                                            </tr>
                                            <tr>
                                                <th>Updated on</th>
                                                <td>{winner?.updated_at}</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>{winner?.status === 1 ? "True" : "False"}</td>
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
export default Winners_VewPage;