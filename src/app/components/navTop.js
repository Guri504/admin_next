"use client";
import Image from 'next/image';
import profileImg3 from '../../../public/images/profile3.png';
import '../../../public/sass/pages/navTop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'react-bootstrap';
import { faBars, faCog, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect } from 'react';
import { UserContext } from '../user_context';


const NavTop = (props) => {
    const { toggleSidebar, } = props;
    const { setAdmin } = useContext(UserContext)

    function handleLogOut() {
        localStorage.removeItem('admin');
        setAdmin('')
    }

    return (
        <div className='nav_top'>
            <div className='bar_icon d-xl-none d-block' onClick={() => toggleSidebar()}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    <div className='profile_area'>
                        <div className='profile_img'>
                            <Image src={profileImg3} alt='...' fetchPriority='low' />
                        </div>
                        <div className='dot'></div>
                    </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">
                        <div className='top'>
                            <div className='profile_left'>
                                <div className='user_profile'>
                                    <div className='profile_area'>
                                        <div className='profile_img'>
                                            <Image src={profileImg3} alt='...' fetchPriority='low' />
                                        </div>
                                        <div className='dot'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='profile_right'>
                                <div className='user_name'>John Doe</div>
                                <div className='admin'>Admin</div>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        <div className='mid'><span className='profile_icon'><FontAwesomeIcon icon={faUser} /></span> My Profile</div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        <div className='mid'><span className='profile_icon'><FontAwesomeIcon icon={faCog} /></span> Setting</div>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogOut}>
                        <div className='bottom'>
                            <span className='profile_icon'><FontAwesomeIcon icon={faSignOutAlt} /></span> Log out
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
export default NavTop;