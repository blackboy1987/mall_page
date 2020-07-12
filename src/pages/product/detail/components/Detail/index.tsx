import React, {useEffect, useState} from "react";
import classNames from 'classnames';
import QRcode from 'qrcode.react';
import styles from './index.less';

import {RightOutlined, LeftOutlined,DoubleRightOutlined} from '@ant-design/icons';
import {constants} from "@/utils/constants";
import {productImgs} from "@/data/productImgs";
import Promotion from "@/pages/product/detail/components/Promotion";
import CouponCode from "@/pages/product/detail/components/CouponCode";
import Gift from "@/pages/product/detail/components/Gift";
import Price from "@/pages/product/detail/components/Price";

interface ScrollY {
  width: number;
  left: number;
}

const Detail: React.FC = () => {
  const [currentImg, setCurrentImg] = useState({});
  const [imgs, setImgs] = useState(productImgs);
  const [zoomBigImageTop, setZoomBigImageTop] = useState(-10000);


  useEffect(() => {
    const newImgs = imgs.map((img, index) => {
      if (index === 0) {
        setCurrentImg(img);
        return {
          ...img,
          current: 'current'
        }
      } else {
        return {
          ...img,
          current: ''
        }
      }
    });
    setImgs(newImgs);
  }, []);

  const [scrollY, setScrollY] = useState<ScrollY>({
    width: 1620,
    left: 0,
  })

  const go = (type: string) => {
    let left = scrollY.left;
    if (type === 'next') {
      left = left - 54 * 3;
      console.log("next", left)
      if (left < -1620 + 54 * 6 - 16) {
        left = -1620 + 54 * 6 - 16;
      }
    } else if (type === 'prev') {
      left = left + 54 * 3;
      console.log("prev", left)
      if (left > 0) {
        left = 0
      }
    }
    setScrollY({
      width: 1620,
      left,
    })
  }

  const onMouseEnter = (current: number) => {
    const newImgs = imgs.map((img, index) => {
      if (index === current) {
        setCurrentImg(img);
        return {
          ...img,
          current: 'current'
        }
      } else {
        return {
          ...img,
          current: ''
        }
      }
    });
    setImgs(newImgs);
  }

  const onMouseEnter1 = () => {
    setZoomBigImageTop(0);
  }

  const onMouseLeave1 = () => {
    setZoomBigImageTop(-10000);
  }

  return (
    <div className={styles.detailWrap}>
      <div className={styles.topStore}>
        <div className={styles.storeName}>
          <a href={`${constants.webUrl}store/15`} title="feng的服装配饰">feng的服装配饰</a>
        </div>
        <div className={styles.storeScore}>
          <div className={styles.star}>
            <div className={styles.starBg}>
              <div className={styles.starGray} title="5.0">
                <p className={styles.starLight} style={{width: '100%'}}/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.storeIm}>
          <a className={styles.chatOffline}>
            <i className={styles.icon}/>联系客服
          </a>
        </div>
        <div className={styles.storeFavorites}>
          <a>
            <i className={styles.icon}/>关注店铺
          </a>
        </div>
        <div className={styles.content}>
          <dl className={styles.scoreDetail}>
            <dt>评分详细</dt>
            <dd className={styles.scoreInfo}>
              <span className={styles.scoreDesc}>商品评价：</span>
              <span className={styles.equal}>
                  <em title="持平--" className={styles.number}>5.0<i>中</i></em>
                </span>
            </dd>
            <dd className={styles.scoreInfo}>
              <span className={styles.scoreDesc}>物流履约：</span>
              <span className={styles.equal}>
                  <em title="持平--" className={styles.number}>5.0<i>中</i></em>
                </span>
            </dd>
            <dd className={styles.scoreInfo}>
              <span className={styles.scoreDesc}>售后服务：</span>
              <span className={styles.equal}>
                  <em title="持平--" className={styles.number}>5.0<i>中</i></em>
                </span>
            </dd>
          </dl>
          <dl className={styles.shopIm}>
            <dt>客服</dt>
            <dd>
              <div className={styles.storeIm}>
                <a className={styles.chatOffline}>
                  <i className={styles.icon}/>联系客服
                </a>
              </div>
            </dd>
          </dl>
          <div className={styles.shopQrCode}>
            <div className={classNames(styles.qrCode, styles.JMQrcode)}>
              <QRcode renderAs='svg' size={140}
                      value="http://java.bizpower.com/wap/tmpl/product_detail.html?commonId=159"/>
              <p>微信扫码手机下单</p>
            </div>
          </div>
          <div className={styles.shopBtns}>
            <a href="http://java.bizpower.com/web/store/15" target="_blank" className={styles.enterShop}>
              <i className={styles.icon}/>进店逛逛
            </a>
            <span className={styles.separator}>|</span>
            <a className={styles.followShop}>
              <i className={styles.icon}/>关注店铺
            </a>
          </div>
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.goodsPicture}>
          <img src={currentImg.rev} style={{maxWidth: 350, maxHeight: 350, opacity: 1, border: 'solid 1px #EEE'}}
               onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}/>
          <div className={styles.magicZoomBigImageCont} style={{top: zoomBigImageTop}}>
            <img src={currentImg.href} style={{maxWidth: '100%', maxHeight: '100%'}}/>
          </div>
          <div className={styles.controller}>
            <a title="向前" onClick={() => go("prev")}
               className={classNames(styles.cBtn, styles.prev)}><LeftOutlined/></a>
            <div className={styles.goodsPicBox}>
              <ul id="ncsGoodsPicList" style={scrollY}>
                {
                  imgs.map((img, index) => (
                    <li key={`${index}`} style={{display: 'list-item'}} onMouseEnter={() => onMouseEnter(index)}>
                      <a rev-herf={img.href} rev={img.rev} className={img.current && styles[`${img.current}`]}>
                        <img src={img.url}/>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <a title="向后" onClick={() => go("next")}
               className={classNames(styles.cBtn, styles.next)}><RightOutlined/></a>
          </div>
        </div>
        <div className={classNames(styles.goodsSummary, styles.modelRetail)}>
          <div className={styles.skuNme}>
            <span className={styles.goodsTag}/>华为 华为盒子增强版 真4K高清智能网络电视机顶盒 H.265硬解安卓电视盒子 3D 蓝牙4.0
          </div>
          <div className={styles.skuNews}>【华为M3 交18抵88】预定送皮套+贴膜、预约抽华为P9 该商品支持门店自提</div>
          <div className={styles.meta}>
            <Price />

            <dl className={styles.memberIsLogin}>
              <dt>会员价</dt>
              <dd><a>请登录</a> 确认是否享受店铺会员价格优惠
              </dd>
            </dl>

            <Gift />

            <CouponCode />

            <Promotion />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
