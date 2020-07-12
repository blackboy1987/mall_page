import React from "react";
import styles from './index.less';



const Gift: React.FC = () => {

  return (
    <div className={styles.goodsGift}>
      <dl>
        <dt>赠&nbsp;品</dt>
        <dd>
          <ul>
            <li>
              <a href="http://java.bizpower.com/web/goods/89" target="_blank" title="Huawei/华为 多彩数据线 颜色：随机色">
                <img src="http://uploadjava.bizpower.com/image/76/f4/76f455c703e2e80ffed9f4dc1ee67176.jpg" />
              </a>
              <span className={styles.goodsGiftNumber}>
                <em>1根</em>
              </span>
            </li>
            <span>(赠完即止)</span></ul>
        </dd>
      </dl>
    </div>
  );
}

export default Gift;
