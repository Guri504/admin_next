import { Alert } from 'react-bootstrap';
import '../../../public/sass/pages/alertCom.scss';


const AlertCom = ({ bgColor, msg }) => {
    return (
        <Alert className={`alert_main ${bgColor}`} dismissible>
            <div className='msg'>
                {msg || 'This is a primary dismissible alert — check it out!'}
            </div>
        </Alert>
    )
}

export default AlertCom;