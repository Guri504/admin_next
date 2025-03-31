import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const NavBottom = (props) => {

    return (
        <div className='nav_btm'>
            <Row>
                <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                    <div className='left'>
                        <div className='title'>
                            {props.title}
                        </div>
                        {props.paidChip ? <span className='chip'>Paid</span> : ''}
                        {props.pickUpChip ? <span className='chip pick'>Ready To Pickup</span> : ''}
                        {props.created ? <div className='date'>{props.created}</div> : ''}
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                    <div className='right'>
                        {props.children}
                        {props.backUrl ?
                            <div className='btn_area'>
                                <Link href={props.backUrl} className='back_btn'>
                                    <span><FontAwesomeIcon icon={faAngleLeft} /></span> Back
                                </Link>
                            </div> : ""
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default NavBottom;