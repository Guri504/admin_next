import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../../../public/sass/pages/tooltip.scss';

const CustomTooltip = (props) => (
    <Tooltip {...props}>
        <div className='tooltip_container'>
            <div className='info'>Sent</div>
            <div className='info'>Balance: 0</div>
            <div className='info'>Due Date: 05/09/2020</div>
        </div>
    </Tooltip>
);

const TooltipLink = ({ children, title, position }) => (
    <OverlayTrigger
        placement={position}
        overlay={title ? <Tooltip>{title}</Tooltip> : CustomTooltip()}>
        <div className='tooltip_area'>{children}</div>
    </OverlayTrigger>
);

const TooltipCom = (props) => {
    const {
        title,
        position
    } = props;

    return (
        <TooltipLink position={position} title={title}>
            {props.children ? props.children : "Tooltip"}
        </TooltipLink>
    );
}

export default TooltipCom;