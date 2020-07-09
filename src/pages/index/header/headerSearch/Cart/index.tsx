import React from "react";
import styles from './index.less';

const Cart:React.FC=()=>{

  return (
    <div className={styles.myCart}>
      <div className={styles.tit}>
        <i className={styles.ico} />
        <i className={styles.cartCount}>5</i>
        <a target="_blank" href="http://java.bizpower.com/web/cart/list" title="购物车">我的购物车</a>
      </div>
      <div className={styles.con}>
        <div className={styles.spacer} />
        <div className={styles.subTitle}>
          <h4>最新加入的商品</h4>
        </div>
        <div className={styles.goodsBox}>
          <div className={styles.goods} data-cart-goods-list="">
            <div className={styles.noOrder}><span>您的购物车中暂无商品，赶快选择心爱的商品吧！</span></div>
            <div className={styles.goodsList}>
              <div className={styles.goodsThumb}>
                <a target="_blank" href="http://java.bizpower.com/web/goods/87" title="Huawei/华为 AM08小天鹅无线蓝牙音响4.0 颜色：薄荷绿">
                  <img src="http://uploadjava.bizpower.com/image/e6/6c/e66c3ebcff7c6e32552a98b3f3c12cc9.jpg@60w_60h" />
                </a>
              </div>
              <div className={styles.goodsName}>
                <a target="_blank" href="http://java.bizpower.com/web/goods/87" title="Huawei/华为 AM08小天鹅无线蓝牙音响4.0 颜色：薄荷绿">Huawei/华为 AM08小天鹅无线蓝牙音响4.0
                  <p>颜色：薄荷绿</p>
                </a>
              </div>
              <div className={styles.goodsSales} />
              <div className={styles.goodsPrice}>
                <span className={styles.yuan}>￥</span>
                <span className="integer">99</span>
                <span className={styles.pointer}>.</span>
                <span className="decimal">00</span>×1
              </div>
              <div className={styles.handle}><a href="javascript:void(0);" data-cart-del="765">删除</a></div>
            </div>

            <div className={styles.goodsList}>
              <div className={styles.goodsThumb}>
                <a target="_blank" href="http://java.bizpower.com/web/goods/87" title="Huawei/华为 AM08小天鹅无线蓝牙音响4.0 颜色：薄荷绿">
                  <img src="http://uploadjava.bizpower.com/image/e6/6c/e66c3ebcff7c6e32552a98b3f3c12cc9.jpg@60w_60h" />
                </a>
              </div>
              <div className={styles.goodsName}>
                <a target="_blank" href="http://java.bizpower.com/web/goods/87" title="Huawei/华为 AM08小天鹅无线蓝牙音响4.0 颜色：薄荷绿">Huawei/华为 AM08小天鹅无线蓝牙音响4.0
                  <p>颜色：薄荷绿</p>
                </a>
              </div>
              <div className={styles.goodsSales} />
              <div className={styles.goodsPrice}>
                <span className={styles.yuan}>￥</span>
                <span className="integer">99</span>
                <span className={styles.pointer}>.</span>
                <span className="decimal">00</span>×1
              </div>
              <div className={styles.handle}><a href="javascript:void(0);" data-cart-del="765">删除</a></div>
            </div>

            <div className={styles.goodsList}>
              <div className={styles.goodsThumb}>
                <a target="_blank" href="http://java.bizpower.com/web/goods/87" title="Huawei/华为 AM08小天鹅无线蓝牙音响4.0 颜色：薄荷绿">
                  <img src="http://uploadjava.bizpower.com/image/e6/6c/e66c3ebcff7c6e32552a98b3f3c12cc9.jpg@60w_60h" />
                </a>
              </div>
              <div className={styles.goodsName}>
                <a target="_blank" href="http://java.bizpower.com/web/goods/87" title="Huawei/华为 AM08小天鹅无线蓝牙音响4.0 颜色：薄荷绿">Huawei/华为 AM08小天鹅无线蓝牙音响4.0
                  <p>颜色：薄荷绿</p>
                </a>
              </div>
              <div className={styles.goodsSales} />
              <div className={styles.goodsPrice}>
                <span className={styles.yuan}>￥</span>
                <span className="integer">99</span>
                <span className={styles.pointer}>.</span>
                <span className="decimal">00</span>×1
              </div>
              <div className={styles.handle}><a href="javascript:void(0);" data-cart-del="765">删除</a></div>
            </div>




          </div>
        </div>
        <div className={styles.checkout} data-goods-price="">
              <span className={styles.totalPrice}>
                共<strong>5</strong>种商品&nbsp;&nbsp;共计：
                <strong>
                  <span className={styles.yuan}>￥</span>
                  <span className={styles.integer}>7683</span>
                  <span className={styles.pointer}>.</span>
                  <span className={styles.decimal}>00</span>
                </strong>
              </span>
          <a href="http://java.bizpower.com/web/cart/list" className={styles.btnCart}>去购物车</a></div>
      </div>
    </div>
  );
}

export default Cart;
