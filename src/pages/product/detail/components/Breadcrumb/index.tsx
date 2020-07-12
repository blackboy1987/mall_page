import React from "react";
import styles from './index.less';

import {HomeOutlined, RightOutlined} from '@ant-design/icons';
import {constants} from "@/utils/constants";

const Breadcrumb: React.FC = () => {

  return (
    <div className={styles.breadcrumbLayout}>
      <div className={styles.breadcrumb}>
        <HomeOutlined style={{color: '#AAA', fontSize: 14, marginRight: 4,}}/>
        <span><a href={`${constants.webUrl}search?cat=1`}>服饰鞋帽</a></span>
        <RightOutlined/>
        <span><a href={`${constants.webUrl}search?cat=7`}>运动</a></span>
        <RightOutlined/>
        <span><a href={`${constants.webUrl}search?cat=82`}>卫衣</a></span>
        <RightOutlined/>
        <span>李宁2016新款男装训练系列 罗纹收口开衫运动卫衣AWDL081</span>
      </div>
    </div>
  );
}

export default Breadcrumb;
