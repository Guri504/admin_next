import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../../../public/sass/pages/modal.scss';
import { Col, Row } from 'react-bootstrap';


const ModalCom = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} centered={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='form-group' controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                placeholder="Enter name"
                            />
                        </Form.Group>
                        <Row>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Form.Group className='form-group' controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                </Form.Group></Col>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Form.Group className='form-group'>
                                    <Form.Label>Date of birth</Form.Label>
                                    <Form.Control
                                        required
                                        type="date"
                                        placeholder="Select Date of birth"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                    </Form>
                    <div className='btn_area'>
                        <Button className='close_btn' onClick={handleClose}>
                            Close
                        </Button>
                        <Button onClick={handleClose}>
                            Save Changes
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalCom;