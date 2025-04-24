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


const Products_VewPage = () => {
    const { id } = useParams()
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState({})
    const [category, setCategory] = useState([])
    const [variants, setVariants] = useState([])

    const getCategory = async () => {
        try {
            let resp = await getApi(`admin/products-category`);
            if (resp.status) {
                setCategory(resp.data.map(item => ({
                    value: item._id,
                    label: item.categoryTitle
                })))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getProduct = async () => {
        try {
            let resp = await getApi(`admin/product/view/${id}`);
            if (resp.status) {
                resp.data.productCategory = resp.data.productCategory.map((cat) => ({
                    value: cat,
                    label: category.find(item => item.value === cat)?.label || "Unknown"
                })
                );
                setProduct(resp.data);
                setVariants(resp.variants);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategory()
    }, [])

    useEffect(() => {
        getProduct()
    }, [category])

    return (
        <div className='right_side'>
            <NavBottom title="Manage Products" backUrl="/products" />
            <div className='right_area top_spacing'>
                <Row>
                    <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={12}>
                        <Card>
                            <div className='card-header'>
                                <div className='header_left'>
                                    <div className='heading'>
                                        Product Information
                                    </div>
                                </div>
                            </div>
                            <div className='card-body p-0'>
                                <div className='table_main'>
                                    <Table responsive>
                                        <tbody>
                                            <tr>
                                                <th>Id</th>
                                                <td>{product?._id?.slice(-5)}</td>
                                            </tr>
                                            <tr>
                                                <th>Product Name</th>
                                                <td>{product?.productName}</td>
                                            </tr>
                                            <tr>
                                                <th>Product Category</th>
                                                <td>{product?.productCategory?.length && product?.productCategory.map((item, i) => {
                                                    return item.label + (i > (product?.productCategory?.length - 1) ? "," : '');
                                                })}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <div className='sub_heading'>Description</div>
                                <div className='desc' dangerouslySetInnerHTML={{ __html: product?.description }} />
                            </div>
                        </Card>
                        {variants?.length > 0 ? variants?.map((variant, i) => {
                            return (
                                <Card key={i}>
                                    <div className='card-header'>
                                        <div className='header_left'>
                                            <div className='heading'>
                                                Varient {i + 1}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body p-0'>
                                        <div className='table_main'>
                                            <Table responsive>
                                                <tbody>
                                                    <tr>
                                                        <th>Color</th>
                                                        <td>{variant?.color?.title}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Size</th>
                                                        <td>{variant?.size?.title}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Price</th>
                                                        <td>{variant?.price}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Stock</th>
                                                        <td>{variant?.stock}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Status</th>
                                                        <td>{variant?.status === 1 ? "True" : "False"}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </Card>
                            )
                        }) : <p>Product has no variant</p>}
                    </Col>
                    <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='mt-sm-0 mt-3 ' >
                        <Card>
                            {
                                // Object.keys(product?.image)?.length > 0 &&
                                <div className='card-body'>
                                    <img src={process.env.imageUrl + '' + product?.image?.original} alt="blog_image" />
                                </div>
                            }
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
                                                <td>{product?.created_at}</td>
                                            </tr>
                                            <tr>
                                                <th>Updated on</th>
                                                <td>{product?.updated_at}</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>{product?.status === 1 ? "True" : "False"}</td>
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
export default Products_VewPage;