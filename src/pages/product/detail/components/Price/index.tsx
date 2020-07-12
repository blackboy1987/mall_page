import React from "react";
import classNames from 'classnames';
import styles from './index.less';

const Price: React.FC = () => {

  return (
    <dl className={styles.goodsPrice}>
      <dt>价&nbsp;格</dt>
      <dd>
        <span className={styles.goodsPriceReal}>
          <strong className={classNames(styles.number, styles.numberThin)}>
            <span className={styles.yuan}>￥</span>
            <span className={styles.integer}>349</span>
            <span className={styles.pointer}>.</span>
            <span className={styles.decimal}>00</span>
          </strong>
          <sub className={styles.originalPrice} style={{display: 'none !important'}}>
            原价：
            <span className={styles.yuan}>￥</span>
            <span className={styles.integer}>349</span>
            <span className={styles.pointer}>.</span>
            <span className={styles.decimal}>00</span>
          </sub>
        </span>
      </dd>
    </dl>
  );
}

export default Price;
