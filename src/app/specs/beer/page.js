"use client"

import React from 'react';
import { Grid } from '@mui/material';
import Style from './beer.module.css';
import Header from '../../header/page';
import { useRouter } from 'next/navigation';
import common from '../../common.module.css';
import SearchIcon from '@mui/icons-material/Search';
import LiquorIcon from '@mui/icons-material/Liquor';
import BoxexCss from '../../style/twobox.module.css';
import { BeerDetails } from '../../component/imageArrary';

const Beer = () => {
  const Route = useRouter()

  const GetCompleteDetails = async (id) => {
    Route.push(`/specs/beer/${id}`)
  }

  return (
    <>
      <div className={Style.BeerSection}>
        <Header />

        <div className={Style.BeerParent}>
          <Grid container spacing={2}>
            <Grid item xs={6} className={common.HeadingText}>
              <h4>Beer</h4>
            </Grid>
            <Grid item xs={6} className={common.SearchParent}>
              <input
                type="text"
                placeholder="Search Beer"
                className={common.SearchInput}
              />
              <SearchIcon className={common.SearchIcon} />
            </Grid>
          </Grid>

          {BeerDetails.map((item) => (
            <div key={item.id} item={item.Url}>
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
                    <p>{item.description}</p>
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

export default Beer