"use client";
import MultiSelect from '@/app/components/multiSelect';
const Select = dynamic(() => import('react-select'), {
    ssr: false,
});
import dynamic from 'next/dynamic';
import '../../../../../../public/sass/pages/multiSelect.scss';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import '../../../../../../public/sass/pages/add.scss';
import '../../../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import { getApi, putApi } from '@/helpers';


const EditBLogCategory = () => {

    const router = useRouter();

    const params = useParams();

    const [newData, setNewData] = useState({
        blogCategoryTitle: "",
        blogCategoryDesc: "",
        blogCategoryCreatorName: ""
    })

    const [categoryData, setCategoryData] = useState({});

    let catData = async () => {
        let resp = await getApi(`admin/blogsCategory/view/${params.id}`);
        console.log("resp", resp)
        if (resp.status) {
            console.log("ll", resp.data);
            setCategoryData(resp.data);
        }
        else {
            console.error("error")
        }
    }



    const categorySubmit = async (e) => {
        e.preventDefault();
        try {

            const finalCategoryData = {
                ...categoryData,
                ...newData
            }

            console.log("kkk", finalCategoryData);

            let resp = await putApi(`admin/blogsCategory/edit/${params.id}`, finalCategoryData)
            console.log("Category Updated", resp)

            if (!resp.status) {
                toast("Not able to update category");
                return;
            }

            if (resp.status) {
                setNewData({
                    blogCategoryTitle: "",
                    blogCategoryDesc: "",
                })
                setTimeout(() => { router.push('/blogsCategory') }, 2000)
                toast("Category updated successfully")
            }
            else {
                toast("Category Not Updated")
            }
        }
        catch (error) {
            return ("error in updated category", error)
        }
    }

    const categoryChange = (e) => {
        setNewData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    useEffect(() => {
        catData()
        console.log("===", categoryData)
    }, [params.id])

    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);

    return (
        <div className='right_side'>
            <NavBottom backUrl="/blogsCategory" />
            <div className="right_area top_spacing">
                <Card>
                    <div className='card-header'>
                        <div className='header_left'>
                            <div className='heading'>
                                Edit Your Blog Category Here
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        {
                            categoryData && Object.entries(categoryData).length > 0 ?
                                (<Form onSubmit={categorySubmit} >
                                    <Row>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <Form.Group className='form-group'>
                                                <Form.Label>Title <span>*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name='blogCategoryTitle'
                                                    placeholder="Enter Blog Title"
                                                    defaultValue={categoryData.blogCategoryTitle}
                                                    required
                                                    onChange={categoryChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <Form.Group className='form-group'>
                                                <Form.Label>Creator Name <span>*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name='blogCategoryCreatorName'
                                                    placeholder="Enter Creator Name"
                                                    defaultValue={categoryData.blogCategoryCreatorName}
                                                    required
                                                    onChange={categoryChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <Form.Group className='form-group'>
                                                <Form.Label>Derscription</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    name='blogCategoryDesc'
                                                    placeholder="Enter Blog Description"
                                                    defaultValue={categoryData.blogCategoryDesc}
                                                    onChange={categoryChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                            <Form.Group className='form-group'>
                                                <Form.Label>Send credentials on email ?</Form.Label>
                                                <Form.Check
                                                    type="switch"
                                                    id="custom-switch"
                                                    label="Send credentials on email ?"
                                                    checked={show}
                                                    onChange={(event) => setShow(event.target.checked)}
                                                />
                                            </Form.Group>

                                            {show && <Form.Group className='form-group form-group2'>
                                                <InputGroup>
                                                    <Form.Control
                                                        placeholder="credentials"
                                                        type={showPass ? "text" : "password"}
                                                        className='from-control2'
                                                    />
                                                    <InputGroup.Text id="inputGroupPrepend" onClick={() => setShowPass(!showPass)}>
                                                        <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                                                    </InputGroup.Text>
                                                    <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faRedo} /></InputGroup.Text>
                                                </InputGroup>
                                            </Form.Group>}
                                        </Col>
                                        <div className='btn_area'>
                                            <Button type="submit" >Submit</Button>
                                        </div>
                                    </Row>
                                </Form>)
                                : (<p>Loading...</p>)
                        }
                    </div>
                </Card>
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

export default EditBLogCategory;