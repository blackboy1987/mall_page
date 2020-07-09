import React from "react";
import classNames from "classnames";
import styles from './index.less';

interface DropMenuProps {
  title:string;
  url?:string;
  width?:number;
  prefix?:React.ReactNode;
  content?:React.ReactNode;
  bodyStyle?:any;
}

const DropMenu:React.FC<DropMenuProps>=({children,title,url,width,prefix,content,bodyStyle})=>{

  return (
    <dl className={styles.topMenu}>
      <dt className={styles.title}>
        {
          title ? (
            <>
              {prefix}
              <a target="_blank" href={url}>{title}</a>
            </>
          ) : (
            <>
              {prefix}
              {title}
            </>
          )
        }
        <span className={styles.arrow} />
      </dt>
      {
        content ? (
          content
        ) : null
      }
      <dd className={classNames(styles.con,bodyStyle)} style={{width:width}}>
        {children}
      </dd>
    </dl>
  );
}

export default DropMenu;
