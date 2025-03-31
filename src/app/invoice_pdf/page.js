"use client";
import { Table } from 'react-bootstrap';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import { useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const InvoicePdf = () => {
    useEffect(() => {
        const handleKeyDown = async (event) => {
            if (event.ctrlKey && event.key === "p") {
                event.preventDefault();

                const input = document.getElementById("pdf-content"); // Target specific content, not whole page
                const canvas = await html2canvas(input, {
                    scale: 1,
                });

                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF("p", "mm", "a4");

                const pdfWidth = 210; // A4 width in mm
                const pdfHeight = 297; // A4 height in mm
                const imgWidth = pdfWidth;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;

                let yPosition = 0;
                let remainingHeight = imgHeight;

                while (remainingHeight > 0) {
                    pdf.addImage(imgData, "PNG", 0, yPosition, imgWidth, imgHeight, undefined, "FAST");
                    remainingHeight -= pdfHeight;
                    yPosition -= pdfHeight;

                    if (remainingHeight > 0) {
                        pdf.addPage();
                    }
                }

                pdf.save("invoice.pdf");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    return (
        <>
            <style jsx>{`
           .pdf_area {
              padding: 45px !important;
              background-color: #FFFFFF !important;
            }

            table {
              margin: 0 !important;
            }

            th, td {
                padding: 0 !important;
                margin: 0;
               }

            // @media print {
            //     .pdf_area  {
            //         padding: 0 !important; /* Reduce padding for printing */
            //     }
            // }
        `}
            </style>
            <section className='pdf_section' id="pdf-content">
                <div className='pdf_area'>
                    <Table>
                        <tbody>
                            <tr>
                                <td style={{ paddingBottom: "30px !important" }}>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td width="50%">
                                                    <Table>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{
                                                                    height: '42px',
                                                                    width: '130px',
                                                                    overflow: 'hidden',
                                                                    paddingBottom: '25px !important'
                                                                }}>
                                                                    <Image src={logo} alt="..." priority="high" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    color: '#646E78',
                                                                    fontWeight: 400,
                                                                }}>
                                                                    Office 149, 450 South Brand Brooklyn
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    color: '#646E78',
                                                                    fontWeight: 400,
                                                                    paddingTop: '10px !important'
                                                                }}>
                                                                    San Diego County, CA 91905, USA
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    color: '#646E78',
                                                                    fontWeight: 400,
                                                                    paddingTop: '10px !important'
                                                                }}>
                                                                    +1 (123) 456 7891, +44 (876) 543 2198
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                                <td style={{ float: "right" }}>
                                                    <Table>
                                                        <tbody>
                                                            <tr>
                                                                <th style={{
                                                                    fontSize: '18px',
                                                                    color: '#646E78',
                                                                    fontWeight: 500,
                                                                    paddingBottom: '25px !important',
                                                                }}>INVOICE #86423</th>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    paddingBottom: '7px !important'
                                                                }}>Date Issues: April 25, 2021</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                }}>Date Due: May 25, 2021</td>
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
                                <td style={{ borderTop: '1px solid #000000', paddingTop: "25px !important" }}>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td style={{ width: "50%", paddingRight: '15px !important' }}>
                                                    <Table>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 600,
                                                                    color: '#646E78',
                                                                }}
                                                                >Invoice To:</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    paddingTop: '20px !important'
                                                                }}>Thomas shelby</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    paddingTop: '7px !important'
                                                                }}>Shelby Company Limited</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    paddingTop: '7px !important'
                                                                }}>Small Heath, B10 0HF, UK</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    paddingTop: '7px !important'
                                                                }}>718-986-6062
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    paddingTop: '7px !important'
                                                                }}>peakyFBlinders@gmail.com</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                                <td style={{ width: "50%", paddingLeft: '15px !important' }}>
                                                    <Table>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 600,
                                                                    color: '#646E78',
                                                                }}
                                                                >Bill To:</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    width: '120px',
                                                                    paddingTop: '20px !important'
                                                                }}

                                                                >Total Due:</td>
                                                                <td
                                                                    style={{
                                                                        fontSize: '15px',
                                                                        fontWeight: 400,
                                                                        color: '#646E78',
                                                                        paddingTop: '20px !important'
                                                                    }}
                                                                >$12,110.55</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    width: '120px',
                                                                    paddingTop: '7px !important'
                                                                }}
                                                                >Bank name:</td>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    paddingTop: '7px !important'
                                                                }}>American Bank</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    width: '120px',
                                                                    paddingTop: '7px !important'
                                                                }}>Country:</td>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    paddingTop: '7px !important'
                                                                }}>United States</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    width: '120px',
                                                                    paddingTop: '7px !important'
                                                                }}>IBAN:</td>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    paddingTop: '7px !important'
                                                                }}>ETD95476213874685</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    width: '120px',
                                                                    paddingTop: '7px !important'
                                                                }}>SWIFT code:	</td>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#646E78',
                                                                    paddingTop: '7px !important'
                                                                }}>BR91905</td>
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
                                <td style={{ paddingTop: '30px !important' }}>
                                    <Table style={{ border: '1px solid #ebeef0', borderRadius: "10px", marginBottom: '2px !important' }}>
                                        <thead>
                                            <tr>
                                                <th style={{
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    color: '#384551',
                                                    padding: '15px 20px !important',
                                                    borderBottom: '1px solid #ebeef0'
                                                }}>Item</th>
                                                <th style={{
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    color: '#384551',
                                                    padding: '15px 20px !important',
                                                    borderBottom: '1px solid #ebeef0'
                                                }}>Description</th>
                                                <th style={{
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    color: '#384551',
                                                    padding: '15px 20px !important',
                                                    borderBottom: '1px solid #ebeef0'
                                                }}>Cost</th>
                                                <th style={{
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    color: '#384551',
                                                    padding: '15px 20px !important',
                                                    borderBottom: '1px solid #ebeef0'
                                                }}>Qty</th>
                                                <th style={{
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    color: '#384551',
                                                    padding: '15px 20px !important',
                                                    borderBottom: '1px solid #ebeef0'
                                                }}>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                [1, 2, 3, 4, 5].map((_, index) => (
                                                    <tr key={index}>
                                                        <td style={{
                                                            fontSize: '15px',
                                                            fontWeight: 400,
                                                            color: '#646E78',
                                                            padding: '15px 20px !important',
                                                            borderBottom: '1px solid #ebeef0'
                                                        }}
                                                        >Vuexy Admin Template</td>
                                                        <td style={{
                                                            fontSize: '15px',
                                                            fontWeight: 400,
                                                            color: '#646E78',
                                                            padding: '15px 20px !important',
                                                            borderBottom: '1px solid #ebeef0'
                                                        }}
                                                        >HTML Admin Template</td>
                                                        <td style={{
                                                            fontSize: '15px',
                                                            fontWeight: 400,
                                                            color: '#646E78',
                                                            padding: '15px 20px !important',
                                                            borderBottom: '1px solid #ebeef0'
                                                        }}
                                                        >$32</td>
                                                        <td style={{
                                                            fontSize: '15px',
                                                            fontWeight: 400,
                                                            color: '#646E78',
                                                            padding: '15px 20px !important',
                                                            borderBottom: '1px solid #ebeef0'
                                                        }}
                                                        >1</td>
                                                        <td style={{
                                                            fontSize: '15px',
                                                            fontWeight: 400,
                                                            color: '#646E78',
                                                            padding: '15px 20px !important',
                                                            borderBottom: '1px solid #ebeef0'
                                                        }}
                                                        >$32.00</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingTop: '30px !important' }}>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td style={{ width: '50%', paddingRight: '30px !important' }}>
                                                    <Table>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    color: '#646E78',
                                                                    fontWeight: 400
                                                                }}
                                                                >
                                                                    <b>Salesperson:</b> Alfie Solomons
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    color: '#646E78',
                                                                    fontWeight: 400,
                                                                    paddingTop: '7px !important'
                                                                }}
                                                                >
                                                                    Thanks for your business
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                                <td style={{ float: 'inline-end' }}>
                                                    <Table style={{
                                                        width: '230px'
                                                    }}>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    color: '#646E78',
                                                                    fontWeight: 400,
                                                                    wordBreak: 'break-all',
                                                                    paddingRight: '70px !important'
                                                                }}
                                                                >Subtotal:</td>
                                                                <td
                                                                    style={{
                                                                        fontSize: '15px',
                                                                        color: '#646E78',
                                                                        fontWeight: 500,
                                                                        textAlign: 'right',
                                                                        wordBreak: 'break-all'
                                                                    }} >$154.25</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    color: '#646E78',
                                                                    fontWeight: 400,
                                                                    wordBreak: 'break-all',
                                                                    paddingTop: '10px !important',
                                                                    paddingRight: '70px !important'

                                                                }}>Discount:</td>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    color: '#646E78',
                                                                    fontWeight: 500,
                                                                    wordBreak: 'break-all',
                                                                    textAlign: 'right',
                                                                    paddingTop: '10px !important'
                                                                }}>$00.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    color: '#646E78',
                                                                    fontWeight: 400,
                                                                    paddingTop: '10px !important',
                                                                    paddingBottom: '10px !important',
                                                                    wordBreak: 'break-all',
                                                                    paddingRight: '70px !important'

                                                                }}>Tax:</td>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    color: '#646E78',
                                                                    fontWeight: 500,
                                                                    paddingTop: '10px !important',
                                                                    wordBreak: 'break-all',
                                                                    textAlign: 'right',
                                                                    paddingBottom: '10px !important'
                                                                }}>$50.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    color: '#646E78',
                                                                    fontWeight: 400,
                                                                    paddingTop: '15px !important',
                                                                    paddingBottom: '40px !important',
                                                                    wordBreak: 'break-all',
                                                                    borderTop: '1px solid #ebeef0'
                                                                }}>Total:</td>
                                                                <td style={{
                                                                    fontSize: '15px',
                                                                    color: '#646E78',
                                                                    fontWeight: 500,
                                                                    paddingTop: '15px !important',
                                                                    paddingBottom: '40px !important',
                                                                    wordBreak: 'break-all',
                                                                    textAlign: 'right',
                                                                    borderTop: '1px solid #ebeef0'

                                                                }}>$204.25</td>
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
                                <td>
                                    <hr style={{ backgroundColor: '#000000 !important', height: '1px', opacity: 1 }} />
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td style={{
                                                    fontSize: '15px',
                                                    color: '#646E78',
                                                    fontWeight: 400
                                                }}>
                                                    <b>Note:</b> It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </section>
        </>
    )
}

export default InvoicePdf;