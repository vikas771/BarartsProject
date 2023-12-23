import React from 'react'
import Style from './cocktail.module.css'
import LiquorIcon from '@mui/icons-material/Liquor';
import { CocktailsImg } from '../imageArrary';


const Cocktails = () => {
  return (
    <>
      <div className={Style.CocktailParent}>
        <div className={Style.HeadSeachbar}>
          <h3>Cocktails</h3>
          <div className={Style.SeachBar}>
            <input className={Style.SeachInpput} type="search" placeholder="Search" aria-label="Search" />
          </div>
        </div>

        {CocktailsImg.map((item) => (
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
                  <span><LiquorIcon className={Style.Icons} /> ABV :  {item.persentAlcohol} </span>
                  <p>{item.paratext}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cocktails