"use client";
import React, { useEffect, useLayoutEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../public/sass/pages/homePage.scss';
import TableCom from './components/table';
import FormCom from './components/formCom';
import TooltipCom from './components/tooltipCom';
import ModalCom from './components/modalCom';
import MultiSelect from './components/multiSelect';
import ViewData from './components/viewData';
import TableListing from './(dashboard)/tableListing/page';
import { useRouter } from "next/navigation";


const HomeAdmin = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    router.replace("/tableListing");
  }, []);

  return (
    <div>Dashboard</div>
    // <TableListing />
    // <div className='home_page'>
    //   <Row>
    //     <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
    //       <div className='inner_area'>
    //         {/* <MultiSelect /> */}
    //         {/* <FormCom top_spacing="top_spacing" />
    //         <ViewData /> */}
    //         {/* <ModalCom /> */}
    //         {/* <TableCom />
    //         <TooltipCom
    //           value="Tooltip Message"
    //           title="Tooltip title"
    //         /> */}
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
  )
}

export default HomeAdmin;