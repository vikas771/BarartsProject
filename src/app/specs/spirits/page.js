"use client"

import React from 'react';
import Style from './spirits.module.css';
import common from '../../style/innersection.module.css';
import category from '../../style/category.module.css'
import { Grid } from '@mui/material';
import { SpiritCategory } from '../../component/imageArrary';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import Header from '../../header/page';


const Spirits = () => {
  const Route = useRouter()

  const GetCompleteDetails = async (id) => {
    console.log("id", id);
    Route.push(`/specs/spirits/${id}`)
  }

  return (
    <>
    <div className={Style.SpritSection}>
      <Header />
   
      <div className={Style.SpiritParent}>

        <Grid container spacing={2}>
          <Grid item xs={6} className={common.HeadingText}>
            <h4>Spirit Category</h4>
          </Grid>
          <Grid item xs={6} className={common.SearchParent}>
            <input
              type="text"
              placeholder="Search categories"
              className={common.SearchInput}
            />
            <SearchIcon className={common.SearchIcon} />
          </Grid>
        </Grid>

        <div>
          <Grid container spacing={2} className={category.GridSection}>
            {SpiritCategory.map((item) => (
              <Grid key={item.id} item xs={4} className={category.TextImgSection} onClick={() => GetCompleteDetails(item.id)}>
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

export default Spirits