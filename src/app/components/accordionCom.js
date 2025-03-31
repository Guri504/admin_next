import { Accordion } from 'react-bootstrap';
import '../../../public/sass/pages/accordionCom.scss';

const AccordionCom = () => {

    return (
        <Accordion>
            {[1, 2, 3, 4, 5].map((_, index) => (
                <Accordion.Item eventKey={index + 1} key={index}>
                    <Accordion.Header>Accordion Item #{index + 1}</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export default AccordionCom