import { Col, Container, Row, Tab, Table } from 'react-bootstrap'
import logo from '../../../public/images/sneat_logo.png'
import Image from 'next/image'


const page = () => {
    return (
        <>
            <section className='pdf_section'>
                {/* <Container> */}
                {/* <Row>
                    <Col xs={12}> */}
                <div className='parent_area'>
                    {/* <center> */}
                    <Table>
                        <tbody>
                            <tr>
                                <td>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table style={{ borderSpacing: '0 50px', width: '100%', padding: '0 50px 0 50px' }} >
                        <tbody style={{ padding: "50px" }}>
                            <tr>
                                <td style={{ paddingBottom: "20px !important" }}>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td width="50%">
                                                    <Table>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <Image src={logo} alt="..." />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Office 149, 450 South Brand Brooklyn
                                                                    San Diego County, CA 91905, USA
                                                                    +1 (123) 456 7891, +44 (876) 543 2198
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                                <td style={{ textAlign: "right" }}>
                                                    <Table>
                                                        <tbody>
                                                            <tr>
                                                                <th>INVOICE #86423</th>
                                                            </tr>
                                                            <tr>
                                                                <td>Date Issues: April 25, 2021</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Date Due: May 25, 2021</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ borderTop: "1px solid", paddingTop: "20px !important" }}>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Invoice To:</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Thomas shelby</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Shelby Company Limited</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Small Heath, B10 0HF, UK</td>
                                                            </tr>
                                                            <tr>
                                                                <td>peakyFBlinders@gmail.com</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                                <td>
                                                    <Table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Bill To:</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total Due:</td>
                                                                <td>$12,110.55</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Bank name:</td>
                                                                <td>American Bank</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Country:</td>
                                                                <td>United States</td>
                                                            </tr>
                                                            <tr>
                                                                <td>IBAN:</td>
                                                                <td>ETD95476213874685</td>
                                                            </tr>
                                                            <tr>
                                                                <td>SWIFT code:	</td>
                                                                <td>BR91905</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    {/* </center> */}
                </div>
                {/* </Col>
                </Row> */}
                {/* </Container> */}
            </section>
        </>
    )
}

export default page