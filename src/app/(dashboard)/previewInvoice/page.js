"use client";
import { Card, Col, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../public/sass/pages/homePage.scss';
import '../../../../public/sass/pages/previewInvoice.scss';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import NavBottom from '@/app/components/navBottom';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import logo from '../../../../public/images/sneat_logo.png'
import Image from 'next/image';
import { useState } from 'react';
import OffCanvasCom from '@/app/components/offCanvasCom';
import Link from 'next/link';

const PreviewInvoice = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleShowOffcanvas = () => setShowOffcanvas(true);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);

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
                                            <Col xxl={9} xl={7} lg={7} md={7} sm={7} xs={12}>
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
                                            <Col xxl={3} xl={5} lg={5} md={5} sm={5} xs={12}>
                                                <div className='invoice_right'>
                                                    <div className="invoice_id">Invoice #86423</div>
                                                    <div className='date_area'>
                                                        <div className='created_row'>
                                                            <span className="issue_date">Date Issued:</span>
                                                            <span className='date_txt2'>April 25, 2021</span>
                                                        </div>
                                                        <div className='created_row'>
                                                            <span className="issue_date">Due Date:</span>
                                                            <span className='date_txt2'>May 25, 2021</span>
                                                        </div>
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
                                                    <div className='to_address'>
                                                        <div className='address_txt'>Thomas shelby</div>
                                                        <div className='address_txt'>Shelby Company Limited</div>
                                                        <div className='address_txt'>Small Heath, B10 0HF, UK</div>
                                                        <div className='address_txt'>718-986-6062</div>
                                                        <div className='address_txt'>peakyFBlinders@gmail.com</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                <div className='bill_to'>
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
                                        <div className="table_area">
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Item</th>
                                                        <th>Description</th>
                                                        <th>Cost</th>
                                                        <th>Qty</th>
                                                        <th>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        [1, 2, 3, 4, 5].map((_, index) => (
                                                            <tr key={index}>
                                                                <td>Vuexy Admin Template</td>
                                                                <td>HTML Admin Template</td>
                                                                <td>$32</td>
                                                                <td>1</td>
                                                                <td>$32.00</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className='detail_area'>
                                            <Row>
                                                <Col xxl={9} xl={9} lg={8} md={8} sm={7} xs={12}>
                                                    <div className='detail_left'>
                                                        <div className="user_pos">
                                                            Salesperson: <span className='name'>Alfie Solomons</span>
                                                        </div>
                                                        <div className='name'>Thanks for your business</div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={4} md={4} sm={5} xs={12}>
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
                                        <div className='disclamer'>
                                            <span className='note'>Note:</span>
                                            It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12}>
                        <Card>
                            <div className='card-body'>
                                <div className='btn btn-primary mb-3' onClick={handleShowOffcanvas}>
                                    <span className='me-2'>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </span> Send Invoice
                                </div>
                                <div className='btn btn_secondary mb-3'>
                                    Download
                                </div>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <div className='btn btn_secondary mb-3'>
                                            Print
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <Link href="addInvoice" className='btn btn_secondary mb-3'>
                                            Edit
                                        </Link>
                                    </Col>
                                </Row>
                                <div className='btn btn-primary'>
                                    <span className='me-1'>
                                        <FontAwesomeIcon icon={faDollarSign} />
                                    </span> Add Payment
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

export default PreviewInvoice;