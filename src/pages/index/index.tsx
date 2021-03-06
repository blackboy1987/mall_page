import React from "react";
import Header from "@/pages/index/header";
import styles from './index.less';
import Nav from "@/pages/index/nav";
import Center from "@/pages/index/center";
import Seckill from "@/pages/index/seckill";


const Index:React.FC=()=>{
  return (
    <div className={styles.header}>
      <Header />
      <Nav defaultShow />
      <Center />
      <Seckill />
    </div>
  );
}

export default Index;
