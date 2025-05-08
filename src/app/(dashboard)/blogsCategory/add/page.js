"use client";
import MultiSelect from '@/app/components/multiSelect';
const Select = dynamic(() => import('react-select'), {
    ssr: false,
});
import dynamic from 'next/dynamic';
import '../../../../../public/sass/pages/multiSelect.scss';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import '../../../../../public/sass/pages/add.scss';
import '../../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, faXmark, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { checkAdmin, postApi } from '@/helpers';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/user_context';


const AddBLogCategory = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const [categoryData, setCategoryData] = useState({
        blogCategoryTitle: "",
        blogCategoryDesc: "",
        blogCategoryCreatorName: ""
    });

    const categorySubmit = async (e) => {
        e.preventDefault();

        try {
            let resp = await postApi('admin/blogsCategory/add', categoryData);
            console.log("Category added", resp)

            if (resp.status) {
                setCategoryData({
                    blogCategoryTitle: "",
                    blogCategoryDesc: "",
                    blogCategoryCreatorName: ""
                });
                toast('Blog Category Added Succesfully')
            }
            else {
                toast('Failed to Add Blog Category')
            }

        } catch (error) {
            console.log("Error in adding category", error)
            return { error: "Error in adding category" }
        }
    }

    const categoryChange = (e) => {
        setCategoryData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);

    return (
        <>
            <div className='right_side'>
                <NavBottom backUrl="/blogsCategory" />
                <div className="right_area top_spacing">
                    <Card>
                        <div className='card-header'>
                            <div className='header_left'>
                                <div className='heading'>
                                    Create New Blog Category Here
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <Form onSubmit={categorySubmit}>
                                <Row>
                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <Form.Group className='form-group'>
                                            <Form.Label>Title <span>*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                name='blogCategoryTitle'
                                                placeholder="Enter Blog Category Title"
                                                value={categoryData.blogCategoryTitle}
                                                onChange={categoryChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <Form.Group className='form-group'>
                                            <Form.Label>Crerator Name <span>*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                name='blogCategoryCreatorName'
                                                placeholder="Enter Creator Name"
                                                value={categoryData.blogCategoryCreatorName}
                                                onChange={categoryChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    {/* <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Sub Heading<span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Sub Heading"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Tags<span>*</span></Form.Label>
                                        <Select 
                                            className="select_main"
                                            classNamePrefix="select"
                                            placeholder={"Select the Category"}
                                            isClearable={false}
                                            isMulti={true}
                                            name="category"
                                            // formatGroupLabel={formatGroupLabel}
                                            // options={colourOptions} // for the single and multi select
                                        // options={groupedOptions} // for the group options
                                        />
                                    </Form.Group>
                                </Col> */}
                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <Form.Group className='form-group'>
                                            <Form.Label>Derscription</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                name='blogCategoryDesc'
                                                placeholder="Enter Blog Category Description"
                                                value={categoryData.blogCategoryDesc}
                                                onChange={categoryChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Form.Group className='form-group'>
                                            <Form.Label>Image <span>*</span></Form.Label>
                                            <Form.Label htmlFor="file-upload" className='upload'>Upload Image</Form.Label>
                                            <Form.Control
                                                type="file"
                                                id="file-upload"
                                                placeholder="Upload Image"
                                            />
                                            {/* after upload --------- */}
                                            {/* <div className='upload_img_area'>
                    <div className='img_area'>
                      <span className='cross_icon'>
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                      <Image
                        src={profileImg3}
                        alt='...'
                        priority="low"
                      />
                    </div>
                  </div> */}
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
                            </Form>
                        </div>
                    </Card>
                </div>
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
        </>
    )
}

export default AddBLogCategory;