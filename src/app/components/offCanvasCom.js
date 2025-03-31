import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../../public/sass/pages/offCanvas.scss';
import { Badge, Form } from 'react-bootstrap';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const OffCanvasCom = (props) => {
    const {
        show,
        handleClose
    } = props;

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Send Invoice</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form.Group className='form-group'>
                    <Form.Label>From</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="company@gmail.com"
                    />
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Label>To</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="company@gmail.com"

                    />
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Invoice regarding goods"
                    />
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter Address"
                    />
                </Form.Group>
                <Badge className='bdg' bg="primary">
                    <span className='me-1'><FontAwesomeIcon icon={faLink} /></span> Invoice Attached
                </Badge>
                <div className='btn_area'>
                    <div className='btn btn-primary'>Send</div>
                    <div className='btn btn_secondary'>Cancel</div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default OffCanvasCom