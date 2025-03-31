// import '../../../public/sass/pages/viewData.scss';
import '../../../public/sass/pages/table.scss';
import { Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ViewData = () => {

    return (
        <Card>
            <div className='card-header'>
                Testimonial Information
            </div>
            <div className='card-body'>
                <div className='table_main'>
                    <Table responsive>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>Title</th>
                                <td>jkskd</td>
                            </tr>
                            <tr>
                                <th>Designations</th>
                                <td>lakljkl</td>
                            </tr>
                            <tr>
                                <th>Designations</th>
                                <td>lakljkl</td>
                            </tr>
                            <tr>
                                <th>Location</th>
                                <td>lakljkl</td>
                            </tr>
                            <tr>
                                <th>Rating</th>
                                <td> <FontAwesomeIcon icon={faStar} /></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className='card-footer'>
                <div className='sub_heading'>Description</div>
                <div className='desc'>jskldjljada</div>
            </div>
        </Card>
    )
};

export default ViewData;