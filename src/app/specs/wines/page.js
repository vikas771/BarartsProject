"use client"

import React from 'react';
import Style from './wine.module.css';
import { Grid } from '@mui/material';
import common from '../../common.module.css';
import category from '../../style/category.module.css'
import { WineCategory } from '../../component/imageArrary';
import SearchIcon from '@mui/icons-material/Search';
import Header from '../../header/page';

const Wine = () => {
  return (
    <>
      <div className={Style.WineSection}>
        <Header />

        <div className={Style.WineParent}>

          <Grid container spacing={2}>
            <Grid item xs={6} className={common.HeadingText}>
              <h4>Wine Category</h4>
            </Grid>
            <Grid item xs={6} className={common.SearchParent}>
              <input
                type="text"
                placeholder="Search Categories"
                className={common.SearchInput}
              />
              <SearchIcon className={common.SearchIcon} />
            </Grid>
          </Grid>

          <div>
            <Grid container spacing={2} className={category.GridSection}>
              {WineCategory.map((item) => (
                <Grid key={item.id} item xs={4} className={category.TextImgSection}>
                  <Grid container spacing={2} className={category.ImgTextChild}>
                    <Grid item xs={4} className={category.ImgSection}>
                      <img src={item.Url} alt="not found" />
                    </Grid>
                    <Grid item xs={8} className={category.TextHeading}>
                      <h4>{item.pname}</h4>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </div>

        </div>

      </div>
    </>
  )
}

export default Wine