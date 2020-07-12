import React from "react";
import styles from './index.less';



const ProductItem:React.FC=({title})=>{
  return (
    <div className={styles.skItems} style={{float: 'left', listStyle: 'none', position: 'relative', width: 170,}}>
      <div className={styles.skGoodsInfo}>
        <a href="http://java.bizpower.com/web/goods/864" target="_blank" className={styles.skLink}>
          <img title="" alt="" src="http://uploadjava.bizpower.com/image/a8/08/a808dca4d764f69a8acac284a8338ea2.jpg" />
          <p className={styles.skName}>铂金戒指情侣对戒==={title}</p>
        </a>
        <span className={styles.skShadow} />
      </div>
      <p className={styles.skPrice}>
        <span className={styles.priceNew}>
          <span className={styles.yuan}>￥</span><span className={styles.integer}>100</span>
          <span className={styles.pointer}>.</span><span className={styles.decimal}>00</span>
        </span>
        <span className={styles.priceOriginal}>
          <span className={styles.yuan}>￥</span>
          <span className={styles.integer}>1680</span>
          <span className={styles.pointer}>.</span>
          <span className={styles.decimal}>00</span>
        </span>
      </p>
    </div>
  );
}

export default ProductItem;
