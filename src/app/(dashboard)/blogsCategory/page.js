"use client";
import { Card, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../public/sass/pages/homePage.scss';
import '../../../../public/sass/pages/table.scss';
import { faEdit, faEllipsisV, faEye, faFilter, faSearch, faSort, faTimes, faTimesCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import NavBottom from '../../components/navBottom';
import TableCom from '@/app/components/table';
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { deleteApi, getApi, putApi } from '@/helpers';



const BlogCategoryListing = () => {
    
    const [check, setCheck] = useState([])
    
    const [categoryData, setCategoryData] = useState([])

    function handleMultiCheck(e) {
        if(check.length === categoryData.length || !e.target.checked){  
            setCheck([])
        }
        else{
            setCheck(categoryData.map((_, index) => index))
        }
    }

    function handleCheck(id) {
        setCheck((prevChecked) =>
            prevChecked.includes(id)
                ? prevChecked.filter((checkedId) => checkedId !== id)
                : [...prevChecked, id]
        )
    }

    const deleteCategory = async (id) => {
        try {
            let resp = await deleteApi(`admin/blogsCategory/delete/${id}`);
            if (resp.status) {
                toast('Category Deleted Successfully')
                catData();
            }
            else {
                toast("Failed to delete category")

            }
        }
        catch (error) {
            console.error("Error in deleting Category", error)
            alert("Error in deleting Category")

        }
    }

    let catData = async (
    ) => {
        try {
            let resp = await getApi('admin/blogsCategory')
            console.log(resp)
            if (resp.status) {
                setCategoryData(resp.message)
            }
        } catch (error) {
            console.error("Fetching Error", error)
        }
    }

    const updateCategoryStatus = async (id, newStatus) => {
        try {
            let resp = await putApi(`admin/blogsCategory/edit/${id}`, { status: newStatus});
            if (resp.status){
                toast.success("Status Updated Successfully");
                catData();
            }
            else{
                toast.error("Error in updating status");
            }
        } catch (error) {
            console.log("Error Updating Status", error);
            toast.error("Error Updating Status")
        }
    }

    useEffect(() => {
        catData()
    }, [])

    useEffect(() => {
        console.log(check)
    }, [check])

    const [show, setShow] = useState();

    return (
        <div className='right_side'>
            <NavBottom title="Manage Blogs Category">
                <Link href={'/blogsCategory/add'} className='back_btn'>NEW</Link>
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
                                            <div className='heading'>Here Is Your Blogs Category Listing!</div>
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
                                                            <Dropdown.Item href="#">
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
                                                <th><Form.Check onChange={handleMultiCheck} /></th>
                                                <th>ID <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>TITLE <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>CREATED BY <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>STATUS <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>CREATED ON <span className='sort_icon'><FontAwesomeIcon icon={faSort} /></span></th>
                                                <th>ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {categoryData?.length > 0 ? categoryData.map((item, index) => (

                                                <tr key={index}>
                                                    <td><Form.Check checked={check.includes(index)} onChange={() => handleCheck(index)} /></td>
                                                    <td>{item._id.slice(-5)}</td>
                                                    <td><div className='tab'><Link href={`/blogsCategory/view/${item._id}`} color="white">{item.blogCategoryTitle}</Link></div></td>
                                                    <td>{item.blogCategoryCreatorName}</td>
                                                    <td>
                                                        <Form.Group className='form-group'>
                                                            <Form.Check 
                                                            type="switch"
                                                            checked={item.status === 1}
                                                            onChange={() => updateCategoryStatus(item._id, item.status === 1 ? 0 : 1)}
                                                            />
                                                        </Form.Group>
                                                    </td>
                                                    <td>{new Date(item.created_at).toLocaleString()}</td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <FontAwesomeIcon icon={faEllipsisV} />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href={`/blogsCategory/edit/${item._id}`}>
                                                                    <span className='edit'><FontAwesomeIcon icon={faEdit} />
                                                                    </span> Edit
                                                                </Dropdown.Item>
                                                                <Dropdown.Item href={`/blogsCategory/view/${item._id}`}>
                                                                    <span className='view'><FontAwesomeIcon icon={faEye} />
                                                                    </span> View
                                                                </Dropdown.Item>
                                                                <Dropdown.Item href="#" onClick={() => deleteCategory(item._id)}>
                                                                    <span className='delete'><FontAwesomeIcon icon={faTrashAlt} />
                                                                    </span> Delete
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>

                                            )) : null}
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

export default BlogCategoryListing;