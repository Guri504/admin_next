import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import '../../../public/sass/pages/toasterCom.scss';

const ToasterCom = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            {/* for red background use className toastContainer2 */}
            {/* <ToastContainer className='toastContainer2' position={'top-end'}> */}
            <ToastContainer>
                <Toast className='toaster' onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        You're reading this text in a Toast!
                    </Toast.Header>
                </Toast>
            </ToastContainer>
            <Button onClick={() => setShow(true)}>Show Toast</Button>
        </>
    );
}

export default ToasterCom;