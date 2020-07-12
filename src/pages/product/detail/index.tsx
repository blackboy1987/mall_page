import React from "react";
import Header from "@/pages/index/header";
import styles from './index.less';
import Nav from "@/pages/index/nav";
import Breadcrumb from "@/pages/product/detail/components/Breadcrumb";
import Detail from "@/pages/product/detail/components/Detail";


const Index:React.FC=()=>{
  return (
    <div className={styles.header}>
      <Header />
      <Nav />
      <Breadcrumb />
      <Detail />
    </div>
  );
}

export default Index;
