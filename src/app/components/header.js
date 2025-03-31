import { faCalendarAlt, faCheckDouble, faExclamationTriangle, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import '../../../public/sass/pages/homePage.scss';


const Header = (props) => {
    const {
        num1,
        title1,
        icon1,
        num2,
        title2,
        icon2,
        num3,
        title3,
        icon3,
        num4,
        title4,
        icon4
    } = props

    return (
        <Card className="mb-3 top_spacing">
            <div className='card-body p-0'>
                <div className="content_main">
                    <div className="content">
                        <div className="left_content">
                            <div className="number">
                                {num1 ? num1 : 56}
                            </div>
                            <div className="pendingTxt">
                                {title1 ? title1 : 'Pending Payment'}
                            </div>
                        </div>
                        <div className="right_content">
                            <div className="icon">
                                <FontAwesomeIcon icon={icon1 ? icon1 : faCalendarAlt} />
                            </div>
                        </div>
                        <div className="line d-lg-none d-block"></div>
                    </div>
                    <div className="content">
                        <div className="left_content">
                            <div className="number">
                                {num2 ? num2 : '12,689'}
                            </div>
                            <div className="pendingTxt">
                                {title2 ? title2 : 'Completed'}
                            </div>
                        </div>
                        <div className="right_content">
                            <div className="icon">
                                <FontAwesomeIcon icon={icon2 ? icon2 : faCheckDouble} />
                            </div>
                        </div>
                        <div className="line d-lg-none d-block"></div>
                    </div>
                    <div className="content">
                        <div className="left_content">
                            <div className="number">
                                {num3 ? num3 : 124}
                            </div>
                            <div className="pendingTxt">
                                {title3 ? title3 : 'Refunded'}
                            </div>
                        </div>
                        <div className="right_content">
                            <div className="icon">
                                <FontAwesomeIcon icon={icon3 ? icon3 : faWallet} />
                            </div>
                        </div>
                        <div className="line d-md-none d-block"></div>
                    </div>
                    <div className="content">
                        <div className="left_content">
                            <div className="number">
                                {num4 ? num4 : 32}
                            </div>
                            <div className="pendingTxt">
                                {title4 ? title4 : 'Failed'}
                            </div>
                        </div>
                        <div className="right_content">
                            <div className="icon">
                                <FontAwesomeIcon icon={icon4 ? icon4 : faExclamationTriangle} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Header;