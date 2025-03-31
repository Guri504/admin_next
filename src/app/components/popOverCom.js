import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import '../../../public/sass/pages/popover.scss';
import { useEffect, useState } from 'react';


const PopOverCom = (props) => {
    const {
        position,
        children
    } = props;

    const [placement, setPlacement] = useState(position);


    useEffect(() => {
        const handleResize = () => {
            setPlacement(window.innerWidth < 400 ? 'top' : placement);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
                <Popover className='popover_main'>
                    <Popover.Header as="h3">{'Popover'}</Popover.Header>
                    <Popover.Body>
                        <div className='msg'>
                            Popover message Check info lorem ipus message.
                        </div>
                        <div className='btn_area'>
                            <div className='btn btn_outline'>Skip</div>
                            <div className='btn btn-primary'>Read more</div>
                        </div>
                    </Popover.Body>
                </Popover>
            }
        >
            {children}
        </OverlayTrigger>
    )
}

export default PopOverCom