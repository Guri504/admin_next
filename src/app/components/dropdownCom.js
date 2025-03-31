import { Dropdown } from 'react-bootstrap';
import '../../../public/sass/pages/dropdownCom.scss';


const DropdownCom = (props) => {
    const {
        outline
    } = props;

    return (
        <Dropdown className={outline ? 'outline_dropdown' : ''}>
            <Dropdown.Toggle>
                Primary
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownCom