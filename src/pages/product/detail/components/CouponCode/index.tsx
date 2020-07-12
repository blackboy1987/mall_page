import React from "react";
import classNames from 'classnames';
import styles from './index.less';

const CouponCode: React.FC = () => {

  return (
    <dl className={styles.couponCode}>
      <dt>优惠券</dt>
      <dd>
        <a id="showCouponActivityListBtn" className={styles.voucherBlock}>
                  <span className={styles.voucherItem} title="全品类适用有效期 2017-12-25至2022-02-01">
                    <s></s><b></b>
                    <span className={classNames(styles.text, styles.number, styles.numberThin)}>满
                      <span className={styles.yuan}>￥</span>
                      <span className={styles.integer}>100</span>
                      <span className={styles.pointer}>.</span>
                      <span className={styles.decimal}>00</span>
                      减
                      <span className={styles.yuan}>￥</span>
                      <span className={styles.integer}>10</span>
                      <span className={styles.pointer}>.</span>
                      <span className={styles.decimal}>00</span>
                    </span>
                  </span>
          <span className={styles.voucherItem} title="全品类适用有效期 2017-12-07至2022-01-08">
                    <s></s><b></b>
                    <span className={classNames(styles.text, styles.number, styles.numberThin)}>满
                      <span className={styles.yuan}>￥</span>
                      <span className={styles.integer}>100</span>
                      <span className={styles.pointer}>.</span>
                      <span className={styles.decimal}>00</span>
                      减
                      <span className={styles.yuan}>￥</span>
                      <span className={styles.integer}>10</span>
                      <span className={styles.pointer}>.</span>
                      <span className={styles.decimal}>00</span>
                    </span>
                  </span>
          <span className={styles.voucherItem} title="全品类有效期 2019-02-18至2023-02-18">
                    <s></s><b></b>
                    <span className={classNames(styles.text, styles.number, styles.numberThin)}>
                      <span className={styles.yuan}>￥</span>
                      <span className={styles.integer}>5</span>
                      <span className={styles.pointer}>.</span>
                      <span className={styles.decimal}>00</span>
                      无门槛券
                    </span>
                  </span>
        </a>
      </dd>
    </dl>
  );
}

export default CouponCode;
