import React from "react";

import styles from './index.less';
import {constants} from "@/utils/constants";
import {RightOutlined} from '@ant-design/icons';
import {categories} from "@/data/category";


interface NavProps {
  defaultShow?:boolean
}

const Nav:React.FC<NavProps>=({defaultShow})=>{
  return (
    <nav className={styles.publicNavLayout}>
      <div className={styles.wrapper}>
        <div className={styles.allCategory}>
          <div className={styles.title}>
            <h3><a target="_blank" href={`${constants.webUrl}category`}>所有商品分类</a></h3>
            <i className={styles.arrowDown} />
          </div>
          <div className={styles.minTitle}>
            <a target="_blank" href={`${constants.webUrl}category`}>全部分类</a>
            <span className={styles.arrowDown} />
          </div>
          <div className={styles.category} style={{display:defaultShow?'block':'none'}}>
            <ul className={styles.menu}>

              {
                categories.map((item,index)=>(
                  <li key={`${index}`} className={styles.cateMenuItem}>
                    <div className={styles.cateMenubox}>
                      {
                        item.firstCategories.map(i=>(
                          <>
                            <a target="_blank" className={styles.cateMenuLk} href={i.url}>{i.name}</a><span className={styles.cateMenuLine}>/</span>
                          </>
                        ))
                      }
                    </div>
                    <div className={styles.catePart}>
                      <div className={styles.catePartCol1}>
                        <div className={styles.cateChannel}>
                          {
                            item.channels.map(tuijian=>(
                              <a className={styles.cateChannelLk} href={tuijian.url} target="_blank">
                                {tuijian.name}<RightOutlined />
                              </a>
                            ))
                          }
                        </div>
                        <div className={styles.cateDetail}>
                          {
                            item.children.map((child,index1)=>(
                              <dl key={`${index}_${index1}`} className={styles.cateDetailItem}>
                                <dt className={styles.cateDetailTit}>
                                  <a target="_blank" href={child.url}>{child.name}<RightOutlined /></a>
                                </dt>
                                <dd className={styles.cateDetailCon}>
                                  {
                                    child.children.map((last,index2)=>(
                                    <a key={`${index}_${index1}_${index2}`} target="_blank" href={last.url}>{last.name}</a>
                                    ))
                                  }
                                </dd>
                              </dl>
                            ))
                          }
                        </div>
                      </div>
                      <div className={styles.subClassRight}>
                        <div className="{styles.advPromotions">
                          {
                            item.ads.map((ad,index)=>(
                              <a href={ad.url} target="_blank">
                                <img src={ad.img} />
                              </a>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <ul className={styles.siteMenu}>
          <li><a href="http://java.bizpower.com/web/" className={styles.current}>首页</a></li>
          <li><a target="_blank" href="http://java.bizpower.com/web/brand">品牌</a></li>
          <li><a target="_blank" href="http://java.bizpower.com/web/pointscenter/index">积分中心</a></li>
          <li><a target="_blank" href="http://java.bizpower.com/web/vouchercenter/index">领券中心</a></li>
          <li><a target="_blank" href="http://java.bizpower.com/web/distribution">推广分佣</a></li>
          <li><a target="_blank" href="http://java.bizpower.com/web/trys">试用</a></li>
          <li><a target="_blank" href="http://java.bizpower.com/web/seckill">秒杀</a></li>
          <li><a target="_blank" href="http://java.bizpower.com/web/advertorial/article/list">推文</a></li>
          <li><a target="_blank" href="http://java.bizpower.com/web/theme/2">全球购</a></li>
          <li><a target="_blank" href="http://java.bizpower.com/web/channel/3">数码</a></li>
          <li><a target="_blank" href="http://java.bizpower.com/web/channel/1">服饰</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
