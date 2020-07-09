import React from "react";
import styles from './index.less';
import DropMenu from "@/pages/index/header/top/DropMenu";

const Top:React.FC=()=>{

  return (
    <div className={styles.top}>
      <div className={styles.bar}>
        <div className={styles.left}>

        </div>
        <div className={styles.right}>
          <dl className={styles.topMenu}>
            <dt className={styles.title}>
              <a href="http://java.bizpower.com/web/login" className={styles.login}>您好，请登录</a>
              <a href="http://java.bizpower.com/web/register">免费注册</a>
            </dt>
          </dl>
          <DropMenu title="我的订单" url="http://java.bizpower.com/web/member/orders/list">
            <ul>
              <li>
                <a target="_blank" href="http://java.bizpower.com/web/member/orders/list/?ordersState=new">待支付</a>
              </li>
              <li>
                <a target="_blank" href="http://java.bizpower.com/web/member/orders/list/?ordersState=send">待确认</a>
              </li>
              <li>
                <a target="_blank" href="http://java.bizpower.com/web/member/orders/list/?ordersState=noeval">待评价</a>
              </li>
            </ul>
          </DropMenu>

          <DropMenu title="我的商城" url="http://java.bizpower.com/web/member/" width={160}>
            <ul className={styles.userContentMenu}>
              <li><a href="http://java.bizpower.com/web/member/message/list" target="_top">站内消息</a></li>
              <li><a href="http://java.bizpower.com/web/member/consult/list" target="_top">咨询回复</a></li>
              <li><a href="http://java.bizpower.com/web/member/favorites/goods" target="_top">我的收藏</a></li>
              <li><a href="http://java.bizpower.com/web/member/goodsbrowse" target="_top">我的足迹</a></li>
              <li><a href="http://java.bizpower.com/web/member/pointslog" target="_top">我的积分</a></li>
              <li><a href="http://java.bizpower.com/web/member/voucher/index" target="_top">我的优惠券</a></li>
            </ul>
          </DropMenu>

          <DropMenu title="客户服务">
            <ul>
              <li>
                <a target="_blank" href="http://java.bizpower.com/web/member/orders/list/?ordersState=new">测试</a>
              </li>
            </ul>
          </DropMenu>

          <DropMenu title="手机商城" prefix={<span className={styles.phoneIcon} />} content={
            <dd className={styles.staticCode}>
              <img src="http://uploadjava.bizpower.com/qr/app/url.gif" />
            </dd>
          }  width={320} bodyStyle={styles.dropMenuBody}>
            <span className={styles.QRcode}>
              <img src="http://uploadjava.bizpower.com/qr/app/url.gif" />
              <p>下载手机客户端<br />享受更多促销活动</p>
            </span>
            <span className={styles.QRcode}>
              <div className={styles.line} />
              <img src="http://uploadjava.bizpower.com/image/33/f5/33f5b958de4d5f138753ac38fef84219.jpg" />
              <p>微信扫一扫<br/>关注商城公众号</p>
            </span>
          </DropMenu>
        </div>
      </div>
    </div>
  );
}

export default Top;
