"use client";
import '../../../../../../public/sass/pages/homePage.scss';
import '../../../../../../public/sass/pages/table.scss';
import { Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faFilter, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import { checkAdmin, fetchCategories, getApi } from '@/helpers';
import ReactPlayer from 'react-player/lazy';
import { UserContext } from '@/app/user_context';


const VideoView = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const { id } = useParams()

    const [viewData, setViewData] = useState({})

    const videoData = async () => {
        try {
            let resp = await getApi(`admin/video/view/${id}`)
            if (resp.status) {
                setViewData(resp.data)
            }
        }
        catch (error) {
            toast.error("Not able to fetch Video detail")
        }
    }

    useEffect(() => {
        videoData()
    }, [])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    const [show, setShow] = useState(false);

    return (
        <div className='right_side'>
            <NavBottom title="Manage Videos" backUrl="/videos" />
            <div className='right_area top_spacing'>
                <Row>
                    <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={12}>
                        <Card>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Video Detail
                                    </div>
                                </div>
                            </div>
                            <div className='card-body p-0'>
                                <div className='table_main'>
                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <th>Id</th>
                                                <td>{viewData?._id?.slice(-5)}</td>
                                            </tr>
                                            <tr>
                                                <th>Title</th>
                                                <td>{viewData?.title}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
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
                                                <td>{viewData?.created_at}</td>
                                            </tr>
                                            <tr>
                                                <th>Updated on</th>
                                                <td>{viewData?.updated_at}</td>
                                            </tr>
                                            <tr>
                                                <th>Deleted on</th>
                                                <td>{viewData?.deleted_at}</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>{viewData?.status === 1 ? "True" : "False"}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='mt-sm-0 mt-3' >
                        <Card>
                            {
                                viewData?.url ?
                                    <ReactPlayer
                                        url={viewData?.url}
                                        controls
                                        playing={true}
                                        muted={true}
                                        width={'100%'}
                                        height={282}
                                    />
                                    :
                                    viewData?.video ?
                                        <ReactPlayer
                                            url={process.env.imageUrl + '' + viewData?.video}
                                            controls
                                            playing={true}
                                            muted={true}
                                            width={'100%'}
                                            height={282}
                                        />
                                        :
                                        <p>No video is selected</p>
                            }
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
                autoClose={2000}
                toastStyle={{ backgroundColor: '#696cff', color: 'white' }}
                position='bottom-right'
                theme='colored'
            />
        </div>
    )
};
export default VideoView;