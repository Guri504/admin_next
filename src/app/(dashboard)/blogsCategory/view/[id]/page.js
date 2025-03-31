"use client";
import '../../../../../../public/sass/pages/homePage.scss';
import '../../../../../../public/sass/pages/table.scss';
import { Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faFilter, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { getApi } from '@/helpers';


const CategoryViewPage = () => {

    const params = useParams();

    const [categoryData, setCategoryData] = useState({});

    let catData = async () => {
        try {
            let resp = await getApi(`admin/blogsCategory/view/${params.id}`);
            console.log("ppppp", resp);
            if (resp.status) {
                setCategoryData(resp.data);
                console.log("log", resp.data)
            }
        } catch (error) {
            console.error("Fetching Error", error);
        }
    }

    useEffect(() => {
        catData()
        console.log("===", categoryData)
    }, [])

    const [show, setShow] = useState(false);

    return (
        <div className='right_side'>
            <NavBottom title="Category Details" backUrl="/blogsCategory" />
            <div className='right_area top_spacing'>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
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
                                                <td>{params.id.slice(-5)}</td>
                                            </tr>
                                            <tr>
                                                <th>Title</th>
                                                <td>{categoryData.blogCategoryTitle}</td>
                                            </tr>
                                            <tr>
                                                <th>Created On</th>
                                                <td>{new Date(categoryData.created_at).toLocaleString()}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <div className='sub_heading'>Description</div>
                                <div className='desc'>{categoryData.blogCategoryDesc}</div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
};
export default CategoryViewPage;