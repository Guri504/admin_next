import { faCalendarAlt, faCheckDouble, faExclamationTriangle, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import '../../../public/sass/pages/homePage.scss';


const Header = (props) => {
    const { completedOrderLength, pendingPayment } = props

    return (
        <Card className="mb-3 top_spacing">
            <div className='card-body p-0'>
                <div className="content_main">
                    <div className="content">
                        <div className="left_content">
                            <div className="number">{pendingPayment}</div>
                            <div className="pendingTxt">Pending Payment</div>
                        </div>
                        <div className="right_content">
                            <div className="icon">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                            </div>
                        </div>
                        <div className="line d-lg-none d-block"></div>
                    </div>
                    <div className="content">
                        <div className="left_content">
                            <div className="number">{completedOrderLength}</div>
                            <div className="pendingTxt">Completed Payments</div>
                        </div>
                        <div className="right_content">
                            <div className="icon">
                                <FontAwesomeIcon icon={faCheckDouble} />
                            </div>
                        </div>
                        <div className="line d-lg-none d-block"></div>
                    </div>
                    <div className="content">
                        <div className="left_content">
                            <div className="number">{0}</div>
                            <div className="pendingTxt">Refunded</div>
                        </div>
                        <div className="right_content">
                            <div className="icon">
                                <FontAwesomeIcon icon={faWallet} />
                            </div>
                        </div>
                        <div className="line d-md-none d-block"></div>
                    </div>
                    <div className="content">
                        <div className="left_content">
                            <div className="number">{0}</div>
                            <div className="pendingTxt">Failed Payments</div>
                        </div>
                        <div className="right_content">
                            <div className="icon">
                                <FontAwesomeIcon icon={faExclamationTriangle} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Header;