import React from "react";
import classNames from 'classnames';
import styles from './index.less';

import {DoubleRightOutlined} from '@ant-design/icons';

const Promotion: React.FC = () => {
  return (
    <dl className={styles.promotion}>
      <dt>促&nbsp;销</dt>
      <dd>
        <div className={styles.conformBlock} title="满优惠活动" id="conformBlockPanel">
          <div className={styles.conformFirst} title="满优惠">
            单笔订单满
            <span className={styles.number}>
                      <span className={styles.yuan}>￥</span>
                      <span className={styles.integer}>2999</span>
                      <span className={styles.pointer}>.</span>
                      <span className={styles.decimal}>00</span>
                    </span>
            ，立减
            <span className={classNames(styles.number,styles.numberThin)}>
                      <span className={styles.yuan}>￥</span>
                      <span className={styles.integer}>100</span>
                      <span className={styles.pointer}>.</span>
                      <span className={styles.decimal}>00</span>
                    </span>
            免邮费 送赠品
            <em>详情</em>
            <DoubleRightOutlined size={8} style={{color: '#348FE2',textRendering: 'auto',display: 'inline-block',marginLeft: 5, marginRight: 4}} />
          </div>
        </div>
      </dd>
    </dl>
  );
}

export default Promotion;
