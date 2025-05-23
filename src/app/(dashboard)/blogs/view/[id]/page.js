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
import { UserContext } from '@/app/user_context';
import Image from 'next/image';


const BlogView = () => {

    const params = useParams()
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()

    const [category, setCategory] = useState([])

    const [viewData, setViewData] = useState([])

    const blogData = async () => {
        try {
            let resp = await getApi(`admin/blog/view/${params.id}`)
            if (resp.status) {
                resp.data.category = resp.data.category.map(item => ({
                    value: item.value,
                    label: category.find(cat => cat.value === item)?.label || "Unknown"
                }));
                setViewData(resp.data)
            }
        }
        catch (error) {
            toast.error("Not able to fetch blog detail")
        }
    }

    useEffect(() => {
        fetchCategories(setCategory)
    }, [])

    useEffect(() => {
        blogData()
    }, [category])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    const [show, setShow] = useState(false);

    return (
        <div className='right_side'>
            <NavBottom title="Manage User" backUrl="/blogs" />
            <div className='right_area top_spacing'>
                <Row>
                    <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={12}>
                        <Card>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Blog Detail
                                    </div>
                                </div>
                            </div>
                            <div className='card-body p-0'>
                                <div className='table_main'>
                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <th>Id</th>
                                                <td>{params.id.slice(-5)}</td>
                                            </tr>
                                            <tr>
                                                <th>Title</th>
                                                <td>{viewData.title}</td>
                                            </tr>
                                            <tr>
                                                <th>Sub Heading</th>
                                                <td>{viewData.subHeading}</td>
                                            </tr>
                                            <tr>
                                                <th>Category</th>
                                                <td>
                                                    {
                                                        viewData.category?.length > 0 && viewData.category.map((item, index) => {
                                                            return item.label + (index < (viewData.category.length - 1) ? ", " : "");
                                                        })

                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Published At</th>
                                                <td>{new Date(viewData.publishedOn).toLocaleString()}</td>
                                            </tr>
                                            {/* <tr>
                                                <th>Rating</th>
                                                <td> <FontAwesomeIcon icon={faStar} /></td>
                                            </tr> */}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <div className='sub_heading'>Description</div>
                                <div className='desc'>{viewData.description}</div>
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='mt-sm-0 mt-3' >
                        <Card>
                            {
                                viewData.selected_img !== '' ?
                                    <div className='card-body'>
                                        <Image src={process.env.imageUrl + '' + viewData.selected_img} alt="blog_image" width='auto' height='auto' />
                                    </div> : <p>No Image Selected</p>
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
export default BlogView;