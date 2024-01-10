"use client"

import React from 'react';
import { Grid } from '@mui/material';
import Style from './low.module.css';
import Header from '../../header/page';
import { useRouter } from 'next/navigation';
import common from '../../common.module.css';
import SearchIcon from '@mui/icons-material/Search';
import BoxexCss from '../../style/twobox.module.css'
import { LowNoABV } from '../../component/imageArrary';

const Low = () => {
  const Route = useRouter()

  const GetCompleteDetails = async (id) => {
    Route.push(`/specs/low/${id}`)
  }

  return (
    <>
      <div className={Style.LowSection}>
        <Header />

        <div className={Style.LowParent}>
          <Grid container spacing={2}>
            <Grid item xs={6} className={common.HeadingText}>
              <h4>Low No ABV</h4>
            </Grid>
            <Grid item xs={6} className={common.SearchParent}>
              <input
                type="text"
                placeholder="Search Low No ABV"
                className={common.SearchInput}
              />
              <SearchIcon className={common.SearchIcon} />
            </Grid>
          </Grid>

          {LowNoABV.map((item) => (
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

export default Low