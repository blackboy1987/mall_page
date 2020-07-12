import React from "react";
import styles from './index.less';
import ProductList from "@/pages/index/seckill/productList";



const Seckill:React.FC=()=>{
  return (
    <div className={styles.homeSeckillLayout}>
      <div className={styles.seckillBox}>
        <div className={styles.seckillTitle}>
          <div className={styles.title}>
            <h3 />
            <div className={styles.countdown}>
              <span className={styles.tip}>距离下场</span>
              <span className={styles.timer}>
                <span className={styles.m}>02</span>
                <em>:</em>
                <span className={styles.h}>42</span>
                <em>:</em>
                <span className={styles.s}>33</span>
              </span>
            </div>
          </div>
          <a className={styles.more} href="http://java.bizpower.com/web/seckill">更多抢购<i className="fa fa-chevron-circle-right  m-l-5" /></a>
        </div>
        <div className={styles.seckillContent}>
          <div className={styles.bxWrapper} style={{maxWidth: 1206, margin: '0 auto'}}>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seckill;
