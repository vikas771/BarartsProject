import React from 'react';
import Style from './low.module.css';
import {  LowNoABV } from '../../component/imageArrary';
import LiquorIcon from '@mui/icons-material/Liquor';

const Low = () => {
  return (
    <div className={Style.LowParent}>
    <div className={Style.HeadSeachbar}>
      <h3>Low No ABV</h3>
      <div className={Style.SeachBar}>
        <input className={Style.SeachInpput} type="search" placeholder="Search" aria-label="Search" />
      </div>
    </div>

    {LowNoABV.map((item) => (
      <div item={item.Url}>
        <div className={Style.mainParent}>
          <div>
            <div className={Style.imgSection}>
              <img src={item.Url} alt='not found' />
            </div>
          </div>
          <div>
            <div className={Style.TextArea}>
              <h3>{item.pname}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Low