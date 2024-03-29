"use client"

import React from 'react'
import { Grid } from '@mui/material';
import Header from '../../header/page';
import Style from './cocktail.module.css';
import { useRouter } from 'next/navigation';
import common from '../../common.module.css';
import LiquorIcon from '@mui/icons-material/Liquor';
import SearchIcon from '@mui/icons-material/Search';
import BoxexCss from '../../style/twobox.module.css'
import { CocktailsImg } from '../../component/imageArrary';

const Cocktails = () => {
  const Route = useRouter()

  const GetCompleteDetails = async (id) => {
    Route.push(`/specs/cocktails/${id}`)
  }
  return (
    <>
      <div className={Style.CocktainSection}>
        <Header />

        <div className={Style.CocktailParent}>
          <Grid container spacing={2}>
            <Grid item xs={6} className={common.HeadingText}>
              <h4>Cocktails</h4>
            </Grid>
            <Grid item xs={6} className={common.SearchParent}>
              <input
                type="text"
                placeholder="Search Cocktails"
                className={common.SearchInput}
              />
              <SearchIcon className={common.SearchIcon} />
            </Grid>
          </Grid>

          {CocktailsImg.map((item) => (
            <div key={item.id}>
              <div className={BoxexCss.BoxParent} onClick={() => GetCompleteDetails(item.id)}>
                <div>
                  <div className={BoxexCss.ImgParent}>
                    <img src={item.Url} alt='not found' />
                  </div>
                </div>
                <div>
                  <div className={BoxexCss.TextAreaParent}>
                    <h3>{item.pname}</h3>
                    <span><LiquorIcon className={BoxexCss.IconStyle} /> ABV :  {item.persentAlcohol} </span>
                    <p>{item.paratext}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Cocktails