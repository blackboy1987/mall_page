import React from "react";
import Header from "@/pages/index/header";
import styles from './index.less';


const Index:React.FC=()=>{
  return (
    <div className={styles.header}>
      <Header />
    </div>
  );
}

export default Index;
