"use client";
import { Card, Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../public/sass/pages/homePage.scss';
import '../../../../public/sass/pages/invoice.scss';
import { faCog, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import logo from '../../../../public/images/sneat_logo.png'
import Image from 'next/image';
import Link from 'next/link';
import OffCanvasCom from '@/app/components/offCanvasCom';


const AddInvoice = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            item: "App Customization",
            cost: "24",
            qty: "1",
            price: "$24.00",
            description: "Customization & bug",
        },
    ]);

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleShowOffcanvas = () => setShowOffcanvas(true);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);

    const addItem = () => {
        setItems([
            ...items,
            { id: items.length + 1 },
        ]);
    };

    const deleteItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };


    return (
        <div className='right_side'>
            <NavBottom title="Add Item" backUrl="invoiceListing" />
            <div className="right_area top_spacing">
                <Row>
                    <Col xxl={9} xl={9} lg={9} md={12} sm={12} xs={12}>
                        <Card className='mb-lg-0 mb-4'>
                            <div className='card-body manage_space'>
                                <div className='invoice_main'>
                                    <div className='invoice_header'>
                                        <Row>
                                            <Col xxl={8} xl={6} lg={6} md={6} sm={5} xs={12}>
                                                <div className='invoice_left'>
                                                    <div className='logo_area'>
                                                        <div className='logo_img'>
                                                            <Image
                                                                src={logo}
                                                                priority="high"
                                                                alt='...'
                                                            />
                                                        </div>
                                                        <span className='logo_title'>Sneat</span>
                                                    </div>
                                                    <div className='invoice_address'>
                                                        <div className='ofc_address'>Office 149, 450 South Brand Brooklyn</div>
                                                        <div className='ofc_address'>San Diego County, CA 91905, USA</div>
                                                        <div className='ofc_address'>+1 (123) 456 7891, +44 (876) 543 2198</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={4} xl={6} lg={6} md={6} sm={7} xs={12}>
                                                <div className='invoice_right'>
                                                    <div className='invoice_row'>
                                                        <div className="invoice">Invoice</div>
                                                        <Form.Group className='form-group'>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="#3904"
                                                                disabled
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                    <div className='invoice_row'>
                                                        <div className="date_txt">Date Issued:</div>
                                                        <Form.Group className='form-group'>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="#3904"
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                    <div className='invoice_row'>
                                                        <div className="date_txt">Due Date:</div>
                                                        <Form.Group className='form-group'>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="#3904"
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='invoice_body'>
                                        <Row>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                <div className='invoice_to'>
                                                    <div className="date_txt">Invoice To:</div>
                                                    <Form.Select className='w-75'>
                                                        <option value="Jordan Stevenson">Jordan Stevenson</option>
                                                        <option value="Wesley Burland">Wesley Burland</option>
                                                        <option value="Vladamir Koschek">Vladamir Koschek</option>
                                                        <option value="Tyne Widmore">Tyne Widmore</option>
                                                    </Form.Select>
                                                    <div className='to_address'>
                                                        <div className='address_txt'>Shelby Company Limited</div>
                                                        <div className='address_txt'>Small Heath, B10 0HF, UK</div>
                                                        <div className='address_txt'>718-986-6062</div>
                                                        <div className='address_txt'>peakyFBlinders@gmail.com</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                <div className='invoice_from'>
                                                    <div className="date_txt">Bill To:</div>
                                                    <div className='bill_row'>
                                                        <div className='bill_left'>
                                                            <span className='bill_label'>Total Due:</span>
                                                        </div>
                                                        <div className='bill_right'>
                                                            <span className='bill_price'>$12,110.55</span>
                                                        </div>
                                                    </div>
                                                    <div className='bill_row'>
                                                        <div className='bill_left'>
                                                            <span className='bill_label'>Bank name:</span>
                                                        </div>
                                                        <div className='bill_right'>
                                                            <span className='bill_price'>American Bank</span>
                                                        </div>
                                                    </div>
                                                    <div className='bill_row'>
                                                        <div className='bill_left'>
                                                            <span className='bill_label'>Country:</span>
                                                        </div>
                                                        <div className='bill_right'>
                                                            <span className='bill_price'>United States</span>
                                                        </div>
                                                    </div>
                                                    <div className='bill_row'>
                                                        <div className='bill_left'>
                                                            <span className='bill_label'>IBAN:</span>
                                                        </div>
                                                        <div className='bill_right'>
                                                            <span className='bill_price'>E95476213874685</span>
                                                        </div>
                                                    </div>
                                                    <div className='bill_row'>
                                                        <div className='bill_left'>
                                                            <span className='bill_label'>SWIFT code:</span>
                                                        </div>
                                                        <div className='bill_right'>
                                                            <span className='bill_price'>BR91905</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className='line'></div>
                                        <div className='source_item'>
                                            {items && items.length > 0 && items.map((item, index) => (
                                                <div key={index} className='source_item_content'>
                                                    <div className='content_left'>
                                                        <Row>
                                                            <Col xxl={6} xl={5} lg={5} md={5} sm={5} xs={12}>
                                                                <div className='contentBox'>
                                                                    <div className='sub_heading'>Item</div>
                                                                    <Form.Select className='w-100'>
                                                                        <option value="App Customization">App Customization</option>
                                                                        <option value="10">App Design</option>
                                                                        <option value="25">App Development</option>
                                                                        <option value="50">App Template</option>
                                                                    </Form.Select>
                                                                    <div className='form-group mt-4'>
                                                                        <Form.Control
                                                                            as="textarea"
                                                                            placeholder="Customization & bug"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={12}>
                                                                <div className='contentBox'>
                                                                    <div className='sub_heading'>Cost</div>
                                                                    <div className='form-group'>
                                                                        <Form.Control
                                                                            placeholder="24"
                                                                        />
                                                                    </div>
                                                                    <div className='form-group'>
                                                                        <Form.Label>Discount:</Form.Label>
                                                                        <Form.Control
                                                                            placeholder="24"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={12}>
                                                                <div className='contentBox'>
                                                                    <div className='sub_heading'>Qty</div>
                                                                    <div className='form-group'>
                                                                        <Form.Control
                                                                            type='number'
                                                                            placeholder="1"
                                                                        />
                                                                    </div>
                                                                    <div className='form-group'>
                                                                        <Form.Label>Gst:</Form.Label>
                                                                        <Form.Control
                                                                            placeholder="24"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col xxl={1} xl={2} lg={2} md={2} sm={2} xs={12}>
                                                                <div className='contentBox'>
                                                                    <div className='sub_heading'>Price</div>
                                                                    <div className='priceTxt'>$24.00</div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div className='content_right'>
                                                        <div className='content_right_inner'>
                                                            <div className='setting_icon' onClick={() => deleteItem(item.id)}><FontAwesomeIcon icon={faTimes} /></div>
                                                            <div className='setting_icon'><FontAwesomeIcon icon={faCog} /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className='btn_area'>
                                                <div className='btn btn-primary btn-sm' onClick={addItem}>
                                                    <span className='plus_icon'><FontAwesomeIcon icon={faPlus} /></span> Add Item
                                                </div>
                                            </div>
                                        </div>
                                        <div className='line'></div>
                                        <div className='detail_area'>
                                            <Row>
                                                <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                    <div className='detail_left'>
                                                        <div className='sales_row'>
                                                            <div className="input_label">Salesperson: </div>
                                                            <Form.Group className='form-group'>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Edward Crowley"
                                                                />
                                                            </Form.Group>
                                                        </div>
                                                        <Form.Group className='form-group'>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Thanks for your business"
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </Col>
                                                <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                    <div className='detail_right'>
                                                        <div className='sub_total'>
                                                            <div className='row2'>
                                                                <div className='bill_label'>Subtotal:</div>
                                                                <div className='bill_price'>$1800</div>
                                                            </div>
                                                            <div className='row2'>
                                                                <div className='bill_label'>Discount:</div>
                                                                <div className='bill_price'>$28</div>
                                                            </div>
                                                            <div className='row2'>
                                                                <div className='bill_label'>Tax:</div>
                                                                <div className='bill_price'>21%</div>
                                                            </div>
                                                            <div className='row2'>
                                                                <div className='bill_label'>Total:</div>
                                                                <div className='bill_price'>$1690</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='line'></div>
                                        <div className='invoice_footer'>
                                            <Form.Group className='form-group'>
                                                <Form.Label>Note: </Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    defaultValue="It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12}>
                        <Card className='mb-4'>
                            <div className='card-body'>
                                <div className='btn btn-primary mb-3' onClick={handleShowOffcanvas}>
                                    <span className='me-2'>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </span>Send Invoice
                                </div>
                                <Link href="previewInvoice" className='btn btn_secondary mb-3'>
                                    Preview
                                </Link>
                                <div className='btn btn_secondary'>
                                    Save
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className='card-body'>
                                <Form.Group className='form-group'>
                                    <Form.Label>Accept payments via</Form.Label>
                                    <Form.Select className='w-100'>
                                        <option value="7">Bank Account</option>
                                        <option value="10">Paypal</option>
                                        <option value="25">Credit/Debit Card</option>
                                        <option value="50">UPI Transfer</option>
                                    </Form.Select>
                                </Form.Group>
                                <div className='switch_area'>
                                    <div className='switch_label'>Payment Terms</div>
                                    <Form.Group className='form-group'>
                                        <Form.Check type="switch" />
                                    </Form.Group>
                                </div>
                                <div className='switch_area'>
                                    <div className='switch_label'>Client Notes</div>
                                    <Form.Group className='form-group'>
                                        <Form.Check type="switch" />
                                    </Form.Group>
                                </div>
                                <div className='switch_area'>
                                    <div className='switch_label'>Payment Stub</div>
                                    <Form.Group className='form-group'>
                                        <Form.Check type="switch" />
                                    </Form.Group>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
            <OffCanvasCom show={showOffcanvas} handleClose={handleCloseOffcanvas} />
        </div>
    )
};

export default AddInvoice;