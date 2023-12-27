import React from 'react';
import Style from './wine.module.css';
import { Grid } from '@mui/material';
import {  WineCategory } from '../../component/imageArrary';

const Wine = () => {

  const  CompleteDetails = (id) =>{
    console.log(id);
  }
  return (
   <>
     <div className={Style.WineSection}>
        <div className={Style.HeadSeachbar}>
          <h3>Wine Category</h3>
          <div className={Style.SeachBar}>
            <input className={Style.SeachInpput} type="search" placeholder="Search" aria-label="Search" />
          </div>
        </div>

        <div>
          <Grid container spacing={2} className={Style.GridParent}>
            {WineCategory.map((item) => (
              <Grid key={item.id} item xs={4} className={Style.TextImgSection}>
                <Grid container spacing={2} className={Style.ImgtextParent} onClick={()=> CompleteDetails(item.id)}>
                  <Grid item xs={4} className={Style.ImgSection}>
                    <img src={item.Url} alt="not found" />
                  </Grid>
                  <Grid item xs={8} className={Style.TextHeading}>
                    <h4>{item.pname}</h4>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>

      </div>
   </>
  )
}

export default Wine