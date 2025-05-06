"use client";
import dynamic from 'next/dynamic';
const CustomEditor = dynamic(() => import('@/app/components/custom_editor'), { ssr: false });
import MultiSelect from '@/app/components/multiSelect';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import '../../../../../public/sass/pages/add.scss';
import '../../../../../public/sass/pages/homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faRedo, faTimes, } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { checkAdmin, getApi, postApi, uploadClick } from '@/helpers';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/user_context';


const Products_Add = () => {
    const { admin, setAdmin } = useContext(UserContext)
    const router = useRouter()
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [catList, setCatList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])
    const [imgData, setImgData] = useState({})
    const [size, setSize] = useState({})
    const [color, setColor] = useState({})
    const [variants, setVariants] = useState([]);

    const sizeList = async () => {
        try {
            let resp = await getApi('admin/products-sizes');
            if (resp) {
                setSize(resp.data.map(item => ({
                    value: item._id,
                    label: item.sizeTitle
                })));
            }
        } catch (error) {
            console.log(error)
        }
    }

    const colorList = async () => {
        try {
            let resp = await getApi('admin/products-colors');
            console.log("resp", resp)
            if (resp) {
                setColor(resp.data.map(item => ({
                    value: item._id,
                    label: item.colorTitle
                })));
            }
        } catch (error) {
            console.log(error)
        }
    }

    const categoryList = async () => {
        try {
            let resp = await getApi('admin/products-category');
            if (resp.status) {
                setCatList(resp.data.map(item => ({
                    value: item._id,
                    label: item.categoryTitle
                })));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const categoryChange = (selectedoptions) => {
        setSelectedCategory(selectedoptions);
        console.log(selectedoptions)
    };

    const productSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        let finalData = Object.fromEntries(formdata.entries())
        finalData.productCategory = selectedCategory.map(item => item.value);
        finalData.image = imgData;
        finalData.productPrice = variants[0]?.price;
        finalData.variants = variants.map(v => ({
            size: {
                _id: v.size?.value,
                title: v.size?.label
            },
            color: {
                _id: v.color?.value,
                title: v.color?.label
            },
            price: v.price,
            stock: Number(v.stock)
        }));
        console.log(finalData)
        try {
            let resp = await postApi('admin/product/add', finalData)
            console.log("resp", resp);
            if (resp.status) {
                toast("Product with Variants added successfully")
                setTimeout(() => (window.location.reload()), 1500)
            }
        } catch (error) {
            console.log(error)
            toast(resp.message)
        }
    }

    const onFileChange = (e) => {
        uploadClick(e, null, setImgData, null)
        e.currentTarget.value = ''
    };

    const handleDelete = () => {
        setImgData({})
    }

    const handleAddVariant = () => {
        setVariants([...variants, { size: {}, color: {}, price: '', stock: '' }]);
    };

    const handleVariantChange = (index, field, value) => {
        const updated = [...variants];
        updated[index][field] = value || '';
        setVariants(updated);
    };

    const handleRemoveVariant = (index) => {
        const updated = [...variants];
        updated.splice(index, 1);
        setVariants(updated);
    };

    useEffect(() => {
        categoryList()
    }, [])

    useEffect(() => {
        sizeList()
    }, [])

    useEffect(() => {
        colorList()
    }, [])

    useEffect(() => {
        checkAdmin(admin, setAdmin, router)
    }, [])

    return (
        <div className='right_side'>
            <NavBottom backUrl="/products" />
            <div className="right_area top_spacing">
                <Card>
                    <div className='card-header'>
                        <div className='header_left'>
                            <div className='heading'>
                                Create New Product Here
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <Form onSubmit={productSubmit}>
                            <Row>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Product Name <span>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Product Name"
                                            name='productName'
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Category <span>*</span></Form.Label>
                                        <MultiSelect
                                            name="productCategory"
                                            placeholder="Select Product Category"
                                            isMulti={true}
                                            value={selectedCategory}
                                            options={catList}
                                            onChange={categoryChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Description <span>*</span></Form.Label>
                                        <CustomEditor
                                            name='description'
                                            placeholder='Enter Story Description'
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className='form-group'>
                                        <Form.Label>Image <span>*</span></Form.Label>
                                        <Form.Label htmlFor="file-upload" className='upload m-0' >Upload Image</Form.Label>
                                        <Form.Control
                                            name='image'
                                            type="file"
                                            id="file-upload"
                                            placeholder="Upload Image"
                                            onChange={onFileChange}
                                            onClick={uploadClick}
                                            accept='image/*'
                                        />
                                        <div className='upload_img_area'>
                                            {
                                                Object.keys(imgData).length === 0
                                                    ?
                                                    <p>No Image Selected</p>
                                                    :
                                                    <div className='img_area'>
                                                        <span className='cross_icon' onClick={handleDelete}>
                                                            <FontAwesomeIcon icon={faTimes} />
                                                        </span>
                                                        <img
                                                            src={process.env.imageUrl + '' + imgData.original}
                                                            alt='blog Image'
                                                            priority="low"
                                                        />
                                                    </div>
                                            }
                                        </div>

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
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Button
                                        type="button"
                                        onClick={handleAddVariant}
                                        className="mb-3"
                                    >
                                        Add Variant
                                    </Button>
                                </Col>
                                {
                                    variants.map((variant, index) => (
                                        <Row key={index} className='mb-4'>
                                            <Col md={5}>
                                                <Form.Group className='form-group'>
                                                    <Form.Label>Size</Form.Label>
                                                    <MultiSelect
                                                        // name="size"
                                                        placeholder="Select Product Size"
                                                        isClearable={true}
                                                        isMulti={false}
                                                        value={variant.size || {}}
                                                        options={size}
                                                        onChange={(selected) => handleVariantChange(index, 'size', selected)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={5}>
                                                <Form.Group className='form-group'>
                                                    <Form.Label>Color</Form.Label>
                                                    <MultiSelect
                                                        // name="color"
                                                        placeholder="Select Product Color"
                                                        isClearable={true}
                                                        isMulti={false}
                                                        value={variant.color || {}}
                                                        options={color}
                                                        onChange={(selected) => handleVariantChange(index, 'color', selected)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={5} xl={5} lg={5} md={5} sm={12} xs={12}>
                                                <Form.Group className='form-group'>
                                                    <Form.Label>Price <span>*</span></Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Enter Product Price"
                                                        // name='price'
                                                        value={variant.price || ''}
                                                        onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={5} xl={5} lg={5} md={5} sm={12} xs={12}>
                                                <Form.Group className='form-group'>
                                                    <Form.Label> Stock <span>*</span></Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Enter Product Stock"
                                                        // name='stock'
                                                        value={variant.stock || ''}
                                                        onChange={(e) => handleVariantChange(index, 'stock', e.target.value)}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={5}>
                                                <Button variant="danger" onClick={() => handleRemoveVariant(index)}>Remove</Button>
                                            </Col>
                                        </Row>
                                    ))
                                }
                                <div className='btn_area'>
                                    <Button type="submit" >Submit</Button>
                                </div>
                            </Row >
                        </Form>
                    </div>
                </Card>
            </div >
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
        </div >
    )
}

export default Products_Add;