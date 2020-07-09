import React from "react";
import styles from './index.less';

const Logo:React.FC=()=>{

  return (
    <h1 className={styles.siteLogo}>
      <a href="http://java.bizpower.com/web/">
        <img src="http://uploadjava.bizpower.com/image/86/69/8669e1c56d027db0271e1a91a0596ef9.png" alt="" />
      </a>
    </h1>
  );
}

export default Logo;
