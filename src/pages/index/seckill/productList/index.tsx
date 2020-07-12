import React, {CSSProperties} from "react";
import {Carousel} from "antd";
import styles from './index.less';

import ProductItem from "@/pages/index/seckill/productList/ProductItem";


const productList=[1,2,3,4,5,6,7,8,9,10];


const ProductList:React.FC=()=>{
  const setting = {
    slidesToShow: 6,
    slidesToScroll: 6,
    arrow:true,
  }

  const arrowStyle:CSSProperties={
    position: 'absolute',
    top: ' 50%',
    outline: 0,
    zIndex: 9999,
    marginTop: -31,
    width: 28,
    height: 62,
    textAlign: 'center',
    filter: "progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#33000000', endColorstr='#33000000')",
    background: "rgba(0,0,0,0.2)",
    fontFamily: "simsun",
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 62,
    color: '#FFF'
  }


  return (
    <Carousel arrows {...setting} className={styles.skUl} nextArrow={<a style={arrowStyle} className={styles.prev}>&#60;</a>} prevArrow={<a style={arrowStyle} className={styles.next}>&#62;</a>}>
      {
        productList.map(item=> <ProductItem key={item} title={item} />)
      }
    </Carousel>
  );
}

export default ProductList;
