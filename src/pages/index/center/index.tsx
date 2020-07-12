import React from "react";
import {Carousel} from 'antd';
import styles from './index.less';

const Center:React.FC=()=>{
  return (
    <div className={styles.homeFocusLayout}>
      <div className={styles.focus}>
        <Carousel autoplay style={{width:'100%',height:440}}  effect="fade">
          <img src="http://uploadjava.bizpower.com/image/36/fc/36fc98921f02045389e772ac3be4693d.png" height="440" width="730" />
          <img src="http://uploadjava.bizpower.com/image/b6/9e/b69e20006df89c7e3b4836431c3848f6.png" height="440" width="730" />
          <img src="http://uploadjava.bizpower.com/image/44/cd/44cde3c2ccd37cab02bd046b6970beb9.png" height="440" width="730" />
          <img src="http://uploadjava.bizpower.com/image/49/eb/49eb459fbda20b6a7cb35ca946290d2f.png" height="440" width="730" />
          <img src="http://uploadjava.bizpower.com/image/ec/9c/ec9c3bc5f3d8d5b7a1faac4d7ffb3a87.png" height="440" width="730" />
          <img src="http://uploadjava.bizpower.com/image/36/fc/36fc98921f02045389e772ac3be4693d.png" height="440" width="730" />
          <img src="http://uploadjava.bizpower.com/image/b6/9e/b69e20006df89c7e3b4836431c3848f6.png" height="440" width="730" />
        </Carousel>
      </div>
      <div className={styles.rightBar}>
        <div className={styles.title}>
          <h2>商城快讯</h2>
        </div>
        <div className={styles.contentNews}>
          <ul>
            <li><a target="_blank" href="http://java.bizpower.com/web/article/info/33">【特惠】全场图书优惠促销火爆销售中</a></li>
            <li><a target="_blank" href="http://java.bizpower.com/web/article/info/32">【公告】Bizpower商城火热上线</a></li>
            <li><a target="_blank" href="#">【公告】管理功能说明</a></li>
          </ul>
        </div>
        <div className={styles.title}>
          <h2>商城服务</h2>
        </div>
        <div className={styles.contentFunction}>
          <ul>
            <li><a target="_blank" href="http://java.bizpower.com/seller/open"><i className={styles.tb01} />招商入驻</a></li>
            <li><a target="_blank" href="http://java.bizpower.com/seller/"><i className={styles.tb02} />商家中心</a></li>
            <li><a target="_blank" href="http://java.bizpower.com/chain/"><i className={styles.tb03} />门店管理</a></li>
            <li><a href="javascript:;"><i className={styles.tb04} />正品保障</a></li>
            <li><a href="javascript:;"><i className={styles.tb05} />闪电发货</a></li>
            <li><a href="javascript:;"><i className={styles.tb06} />七天退换</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Center;
