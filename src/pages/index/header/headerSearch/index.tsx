import React, {useState} from "react";
import styles from './index.less';
import Cart from "@/pages/index/header/headerSearch/Cart";
import Logo from "@/pages/index/header/headerSearch/Logo";

const defaultPlaceholder = '无线游戏耳机';

const keyword=['苹果','冰箱','男鞋','耳机','奶嘴','水果'];

const HeaderSearch:React.FC=()=>{

  const [searchType,setSearchType] = useState<string>('goods');
  const [placeholder,setPlaceholder] = useState<string>(defaultPlaceholder);
  const [searchTipDisplay, setSearchTipDisplay] = useState<string>('none');

  const changeSearchType=(type:string)=>{
    setSearchType(type);
    if(type==='goods'){
      setPlaceholder(defaultPlaceholder);
    }else if(type==='store'){
      setPlaceholder('请输入您要搜索的店铺关键字');
    }else if(type==='distribution'){
      setPlaceholder('请输入您要搜索的推广商品关键字');
    }else if(type==='purchase'){
      setPlaceholder('请输入您要搜索的供求订单关键字');
    }else{
      setPlaceholder(defaultPlaceholder);
    }
  }

  const onFocus=()=>{
    setSearchTipDisplay('block');
  }
  const onBlur=()=>{
    setSearchTipDisplay('none');
  }

  return (
    <div className={styles.headerWrap}>
      <header>
        <Logo />
        <div className={styles.headSearchLayout}>
          <div className={styles.headSearchTab}>
            <span><a onClick={()=>changeSearchType('goods')} className={searchType==='goods'? styles.selected : ''}>商品</a></span>
            <span><a onClick={()=>changeSearchType('store')} className={searchType==='store'? styles.selected : ''}>店铺</a></span>
            <span><a onClick={()=>changeSearchType('distribution')} className={searchType==='distribution'? styles.selected : ''}>推广</a></span>
            <span><a onClick={()=>changeSearchType('purchase')} className={searchType==='purchase'? styles.selected : ''}>求购</a></span>
          </div>
          <div className={styles.headSearchBar}>
            <form action="http://java.bizpower.com/web/search" method="get" className={styles.searchForm}>
              <input name="keyword" onFocus={onFocus} onBlur={onBlur} type="text" className={styles.inputText} value="" maxLength={60} placeholder={placeholder} autoComplete="off" />
              <input type="submit" value="搜 索" className={styles.inputSubmit} />
            </form>
            <div className={styles.searchTip} style={{display:searchTipDisplay}}>
              <div className={styles.searchHistory}>
                <div className={styles.title}>历史纪录
                  <a href="javascript:void(0);">清除</a>
                </div>
                <ul>
                  <li><a href="http://java.bizpower.com/web/search?&amp;keyword=abcdefag">abcdefag</a></li>
                  <li><a href="http://java.bizpower.com/web/search?&amp;keyword=abc">abc</a></li>
                </ul>
              </div>
              <div className={styles.searchHot}>
                <div className={styles.title}>热门搜索...</div>
                <ul>
                  <li><a data-hot-value="香水" href="http://java.bizpower.com/web/search?&amp;keyword=%E9%A6%99%E6%B0%B4">浪漫天使女士香水</a></li>
                  <li><a data-hot-value="汽车" href="http://java.bizpower.com/web/search?&amp;keyword=%E6%B1%BD%E8%BD%A6">汽车用品打折季</a></li>
                  <li><a data-hot-value="耳机" href="http://java.bizpower.com/web/search?&amp;keyword=%E8%80%B3%E6%9C%BA">无线游戏耳机</a></li>
                  <li><a data-hot-value="女装" href="http://java.bizpower.com/web/search?&amp;keyword=%E5%A5%B3%E8%A3%85">浪漫夏季 简约百搭</a></li>
                  <li><a data-hot-value="耐克" href="http://java.bizpower.com/web/search?&amp;keyword=%E8%80%90%E5%85%8B">春季踏青郊游必备</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.keyword}>热门关键字：
            <ul>
              {
                keyword.map(item=>(<li key={item}><a target="_blank" href={`http://java.bizpower.com/web/search?keyword=${item}`}>{item}</a></li>))
              }
            </ul>
          </div>
        </div>
        <Cart />
      </header>
    </div>
  );
}

export default HeaderSearch;
