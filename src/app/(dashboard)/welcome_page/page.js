"use client";
import { Card, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../public/sass/pages/homePage.scss';
import '../../../../public/sass/pages/table.scss';
import { faEdit, faEllipsisV, faEye, faFilter, faSearch, faSort, faTimes, faTimesCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import NavBottom from '../../components/navBottom';
import TableCom from '@/app/components/table';
import { UserContext } from '@/app/user_context';
import { checkAdmin, getApi } from '@/helpers';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import { BarChart, GroupedBarChart, HorizontalLessStockChart, PieChart, UserChart } from '@/app/components/charts';
import { toast, ToastContainer } from 'react-toastify';



const TableListing = () => {
    const router = useRouter()
    const [show, setShow] = useState();
    const { admin, setAdmin } = useContext(UserContext)
    const [seriesData, setSeriesData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [orderListing, setOrderListing] = useState([]);
    const [userList, setUserList] = useState([])
    const [catOrder, setCatOrder] = useState([]);
    const [lessStock, setLessStock] = useState([])

    const listing = async () => {
        try {
            let resp = await getApi(`admin/orders-listing`);
            if (resp.status) {
                setOrderListing(resp.data);
            }
            else {
                toast(resp.message);
            }
        } catch (error) {
            console.log("error", error)
        }
    }

    const userListing = async () => {
        try {
            let resp = await getApi(`admin/users`);
            if (resp.status) {
                setUserList(resp.data);
            }
            else {
                toast(resp.message);
            }
        } catch (error) {
            console.log("error", error)
        }
    }

    const ordersByCategory = async () => {
        try {
            let resp = await getApi('admin/order-by-category');
            if (resp.status) {
                setCatOrder(resp.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const lessStockProduct = async () => {
        try {
            let resp = await getApi('admin/less-stock-products');
            if (resp.status) {
                setLessStock(resp.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const activeUsers = () => {
        const activedata = userList.filter(u => u.expiresAt >= Date.now())?.length;
        const inactivedata = userList.filter(u => u.expiresAt <= Date.now() || !u.expiresAt)?.length;
        return { activedata, inactivedata }
    }

    const userData = () => {
        const userByMonth = userList.reduce((acc, cur) => {
            const month = new Date(cur?.created_at).toLocaleString('default', { month: 'short' });
            acc[month] = (acc[month] || 0) + 1
            return acc;
        }, {});
        return {
            userByMonthKeys: Object.keys(userByMonth),
            userByMonthValues: Object.values(userByMonth)
        }
    }

    useEffect(() => {
        const saleByMonth = orderListing.reduce((acc, cur) => {
            const month = new Date(cur?.created_at).toLocaleString('default', { month: 'short' });
            acc[month] = (acc[month] || 0) + cur?.totalAmount;
            return acc
        }, {});

        setCategories(Object.keys(saleByMonth));
        setSeriesData(Object.values(saleByMonth));
    }, [orderListing])

    useEffect(() => {
        listing()
        userListing()
        ordersByCategory()
        lessStockProduct()
    }, [])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom title="Dashboard">
            </NavBottom>

            <div className="right_area top_spacing">
                <Row className='row-gap-3'>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Card>
                            <div className="card-body">
                                <GroupedBarChart data={catOrder} />
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Card>
                            <div className="card-body">
                                <HorizontalLessStockChart data={lessStock} />
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Card>
                            <div className="card-body">
                                <PieChart activeUser={activeUsers().activedata} inactiveUser={activeUsers().inactivedata} />
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Card>
                            <div className="card-body">
                                <UserChart yaxis={userData().userByMonthValues} xaxis={userData().userByMonthKeys} />
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Card>
                            <div className="card-body">
                                <BarChart yaxis={seriesData} xaxis={categories} />
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

export default TableListing;