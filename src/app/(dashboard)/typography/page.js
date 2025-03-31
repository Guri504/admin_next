"use client";
import { Badge, Col, Row } from 'react-bootstrap';
import '../../../../public/sass/pages/typography.scss';
import '../../../../public/sass/pages/homePage.scss';
import CarouselCom from '@/app/components/carousel';
import AlertCom from '@/app/components/alertCom';
import AccordionCom from '@/app/components/accordionCom';
import TooltipCom from '@/app/components/tooltipCom';
import DropdownCom from '@/app/components/dropdownCom';
import ModalCom from '@/app/components/modalCom';
import ModalCom2 from '@/app/components/modalCom2';
import PopOverCom from '@/app/components/popOverCom';
import TabCom from '@/app/components/tabsCom';
import ToasterCom from '@/app/components/toasterCom';
import NavBottom from '@/app/components/navBottom';



const TypoGraphy = () => {


    return (
        <div className='right_side'>
            <NavBottom title="Typography" backUrl="/" />
            <div className='typography_main'>
                <Row>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='left'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Accordion
                                </div>
                                <div className='card-body'>
                                    <AccordionCom />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='right'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Alerts
                                </div>
                                <div className='card-body'>
                                    <AlertCom />
                                    <AlertCom bgColor={'secondary'} />
                                    <AlertCom bgColor={'success'} />
                                    <AlertCom bgColor={'warning'} />
                                    <AlertCom bgColor={'danger'} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='left'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Carousel
                                </div>
                                <div className='card-body'>
                                    <CarouselCom />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='right'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Crossfade Carousel (dark)
                                </div>
                                <div className='card-body'>
                                    <CarouselCom variant={'dark'} fade={'fade'} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='left'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Badges
                                </div>
                                <div className='card-body'>
                                    <div className='tooltipMain'>
                                        <Badge className='bdg' bg="primary">Primary</Badge>
                                        <Badge bg="secondary">Secondary</Badge>
                                        <Badge bg="success">Success</Badge>
                                        <Badge bg="danger">Danger</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='right'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Dropdowns
                                </div>
                                <div className='card-body'>
                                    <div className='tooltipMain'>
                                        <DropdownCom />
                                        <DropdownCom outline={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='left'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Modal Form
                                </div>
                                <div className='card-body'>
                                    <ModalCom />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='right'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Modal
                                </div>
                                <div className='card-body'>
                                    <ModalCom2 />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='left'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Tooltip
                                </div>
                                <div className='card-body'>
                                    <div className='tooltipMain'>
                                        <TooltipCom title="Tooltip Top" position="top" >
                                            <div className='btn btn-primary'>Tooltip Top</div>
                                        </TooltipCom>
                                        <TooltipCom title="Tooltip Right" position="right" >
                                            <div className='btn btn-primary'>Tooltip Right</div>
                                        </TooltipCom>
                                        <TooltipCom title="Tooltip Bottom" position="bottom">
                                            <div className='btn btn-primary'>Tooltip Bottom</div>
                                        </TooltipCom>
                                        <TooltipCom title="Tooltip Left" position="left">
                                            <div className='btn btn-primary'>Tooltip Left</div>
                                        </TooltipCom>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='right'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Pop Over
                                </div>
                                <div className='card-body'>
                                    <div className='tooltipMain'>
                                        <PopOverCom position="top" >
                                            <div className='btn btn-primary'>Popover Top</div>
                                        </PopOverCom>
                                        <PopOverCom position="right" >
                                            <div className='btn btn-primary'>Popover Right</div>
                                        </PopOverCom>
                                        <PopOverCom title="Popover Bottom" position="bottom">
                                            <div className='btn btn-primary'>Popover Bottom</div>
                                        </PopOverCom>
                                        <PopOverCom title="Popover Left" position="left">
                                            <div className='btn btn-primary'>Popover Left</div>
                                        </PopOverCom>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col >
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='left'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Tabs
                                </div>
                                <div className='card-body'>
                                    <TabCom />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='right'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Toaster
                                </div>
                                <div className='card-body'>
                                    <ToasterCom />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className='left'>
                            <div className='card'>
                                <div className='card-heading'>
                                    Buttons
                                </div>
                                <div className='card-body'>
                                    <div className='tooltipMain'>
                                        <div className='btn btn-primary'>Primary</div>
                                        <div className='btn btn_outline'>Primary outline</div>
                                    </div>
                                    <div className='tooltipMain2'>
                                        <div className='btn btn-primary btn-sm'>Small Btn</div>
                                        <div className='btn btn_outline btn-sm'>Small Btn outline</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row >
            </div >
        </div >

    )
}
export default TypoGraphy;