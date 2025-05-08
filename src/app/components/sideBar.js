"use client";
import React, { useEffect, useRef, useState } from 'react';
import '../../../public/sass/pages/sidebar.scss';
import { faUsers, faAngleDown, faSignOutAlt, faFileAlt, faQuestionCircle, faAddressCard, faBars, faMapMarkerAlt, faAngleRight, faHomeAlt, faAngleLeft, faBlog, faUsersGear, faFunnelDollar, faHeading, faDumbbell, faInfo, faCircleInfo, faTrash, faVideo, faRupeeSign, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';



const SideBar = (props) => {

    const trashLinks = [
        { name: 'users' },
        { name: 'about_me' },
        { name: 'blogs' },
        { name: 'blogs_category' },
        { name: 'membership_plan_services' },
        { name: 'training_plan_services' },
        { name: 'training_plans' },
        { name: 'membership_plans' },
        { name: 'strategy_plans' },
        { name: 'success_stories' },
        { name: 'products' },
        { name: 'products_category' },
        { name: 'products_sizes' },
        { name: 'products_color' },
        { name: 'product_variants' },
        { name: 'videos' },
    ]

    const {
        toggleSidebar,
        isSidebarOpen
    } = props;
    const [show, setShow] = useState(null);
    const [active, setActive] = useState(false);
    const listingRef = useRef();


    useEffect(() => {
        listingRef.current.addEventListener('scroll', () => {
            if (listingRef.current.scrollTop > 2) {
                setActive(true)
            }
            else {
                setActive(false)
            }
        })
        return () => setActive(false)
    }, []);


    const showFunc = (val) => {
        if (show === val) {
            setShow(null)
        }
        else {
            setShow(val)
        }
    };


    return (
        <div className='sidebar'>
            {isSidebarOpen && <div className='d-xl-none d-block'>
                <div className='close' onClick={() => toggleSidebar()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
            </div>}
            <div className='logo_area'>
                <div className='logo_title'>FITNESS</div>
                <div className={`menu_inner_shadow ${active ? 'show' : ''}`} ></div>
                <div className='nav_listing' ref={listingRef}>
                    <ul className='nav_links' >
                        <li>
                            <Link href="/" className='link_area active'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faHomeAlt} />
                                </span>
                                <span className='title'>
                                    Dashboard
                                </span>
                            </Link>
                        </li>
                        <li>
                            <div className='link_area' onClick={() => showFunc('Pages')}>
                                <div className='dropDown_area'>
                                    <div className='dropDown'>
                                        <div className='left_side'>
                                            <span className='icon'>
                                                <FontAwesomeIcon icon={faFileAlt} />
                                            </span>
                                            <span className='title'>
                                                Pages Content
                                            </span>
                                        </div>
                                        <div className='right_side'>
                                            <span className='right_arrow'>
                                                {show === "Pages" ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={`dropDown_content ${show === "Pages" ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link href="#" className='dropDownItem active'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/about_me" className='dropDownItem '>
                                            About Me
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/fitness_membership_plans" className='dropDownItem'>
                                            Fitness Membership Plans
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/training_plans" className='dropDownItem'>
                                            1-1 Training Plans
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/videos" className='dropDownItem'>
                                            Videos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Member Ship
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='link_area' onClick={() => showFunc('Blogs')}>
                                <div className="dropDown_area">
                                    <div className="dropDown">
                                        <div className="left_side">
                                            <span className="icon">
                                                <FontAwesomeIcon icon={faBlog} />
                                            </span>
                                            <span className="title">
                                                Blogs
                                            </span>
                                        </div>
                                        <div className="right_side">
                                            <span className="right_arrow">
                                                {show === 'Blogs' ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`dropDown_content ${show === 'Blogs' ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link href="/blogs" className='dropDownItem active'>
                                            Blogs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blogsCategory" className='dropDownItem'>
                                            Category
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="/videos" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faVideo} />
                                </span>
                                <span className='title'>
                                    Videos
                                </span>
                            </Link>
                        </li>
                        <li>
                            <div className='link_area' onClick={() => showFunc('Services')}>
                                <div className="dropDown_area">
                                    <div className="dropDown">
                                        <div className="left_side">
                                            <span className="icon">
                                                <FontAwesomeIcon icon={faUsersGear} />
                                            </span>
                                            <span className="title">
                                                Services
                                            </span>
                                        </div>
                                        <div className="right_side">
                                            <span className="right_arrow">
                                                {show === 'Services' ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`dropDown_content ${show === 'Services' ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link href="/membership_plan_services" className='dropDownItem active'>
                                            Membership Plan Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/training_plan_services" className='dropDownItem'>
                                            Training Plan Services
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='link_area' onClick={() => showFunc('Plans')}>
                                <div className="dropDown_area">
                                    <div className="dropDown">
                                        <div className="left_side">
                                            <span className="icon">
                                                <FontAwesomeIcon icon={faFunnelDollar} />
                                            </span>
                                            <span className="title">
                                                Plans
                                            </span>
                                        </div>
                                        <div className="right_side">
                                            <span className="right_arrow">
                                                {show === 'Plans' ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`dropDown_content ${show === 'Plans' ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link href="/membership_plans" className='dropDownItem '>
                                            Membership Plans
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/training_plans" className='dropDownItem '>
                                            Training Plans
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="/success_stories" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faDumbbell} />
                                </span>
                                <span className='title'>
                                    Success Stories
                                </span>
                            </Link>
                        </li>
                        <li>
                            <div className='link_area' onClick={() => showFunc('About Me')}>
                                <div className="dropDown_area">
                                    <div className="dropDown">
                                        <div className="left_side">
                                            <span className="icon">
                                                <FontAwesomeIcon icon={faCircleInfo} />
                                            </span>
                                            <span className="title">
                                                About Me
                                            </span>
                                        </div>
                                        <div className="right_side">
                                            <span className="right_arrow">
                                                {show === 'About Me' ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`dropDown_content ${show === 'About Me' ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link href="/winners" className='dropDownItem active'>
                                            Winners
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/strategy_plans" className='dropDownItem '>
                                            Strategy Plans
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='link_area' onClick={() => showFunc('Products')}>
                                <div className='dropDown_area'>
                                    <div className='dropDown'>
                                        <div className='left_side'>
                                            <span className='icon'>
                                                <FontAwesomeIcon icon={faProductHunt} />
                                            </span>
                                            <span className='title'>
                                                Products
                                            </span>
                                        </div>
                                        <div className='right_side'>
                                            <span className='right_arrow'>
                                                {show === "Products" ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`dropDown_content ${show === "Products" ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link href="/products" className='dropDownItem'>
                                            Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products_category" className='dropDownItem'>
                                            Categories
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products_sizes" className='dropDownItem'>
                                            Product Sizes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products_colors" className='dropDownItem'>
                                            Products Colors
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/product_variants" className='dropDownItem'>
                                            Variants
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='link_area' onClick={() => showFunc('Trash')} style={{ cursor: 'pointer' }}>
                                <div className='dropDown_area'>
                                    <div className='dropDown'>
                                        <div className='left_side'>
                                            <span className='icon'>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </span>
                                            <span className='title'>
                                                Trash
                                            </span>
                                        </div>
                                        <div className='right_side'>
                                            <span className='right_arrow'>
                                                {show === "Trash" ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`dropDown_content ${show === "Trash" ? 'show' : ''}`}>
                                <ul>
                                    {
                                        trashLinks?.map((item, i) => {
                                            const type = item.name;
                                            return <li key={i}><Link href={`/trash/${type}`} className='dropDownItem'>{item.name.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</Link></li>
                                        })
                                    }

                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="/users" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faUsers} />
                                </span>
                                <span className='title'>
                                    Users
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </span>
                                <span className='title'>
                                    Auth Content
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/order" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faFileAlt} />
                                </span>
                                <span className='title'>
                                    Orders
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/transactions" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                                </span>
                                <span className='title'>
                                    Transactions
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faQuestionCircle} />
                                </span>
                                <span className='title'>
                                    Faqs
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='link_area'>
                                <span className='icon'>
                                    <FontAwesomeIcon icon={faAddressCard} />
                                </span>
                                <span className='title'>
                                    Contact Us
                                </span>
                            </Link>
                        </li>
                        <li>
                            <div className='menu_header'>
                                <span className='seperator'>Others</span>
                            </div>
                        </li>
                        <li>
                            <div className='link_area' onClick={() => showFunc('Activites')}>
                                <div className='dropDown_area'>
                                    <div className='dropDown'>
                                        <div className='left_side'>
                                            <span className='icon'>
                                                <FontAwesomeIcon icon={faBars} />
                                            </span>
                                            <span className='title'>
                                                Activites
                                            </span>
                                        </div>
                                        <div className='right_side'>
                                            <span className='right_arrow'>
                                                {show === "Activites" ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`dropDown_content ${show === "Activites" ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link href="#" className='dropDownItem'>
                                            Activities Logs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/email_logs" className='dropDownItem'>
                                            Email Logs
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;