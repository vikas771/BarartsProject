import React from 'react';
import Style from './spirits.module.css';
import common from '../../common.module.css'
import { Grid } from '@mui/material';
import { SpiritCategory } from '../../component/imageArrary';
import SearchIcon from '@mui/icons-material/Search';

const Spirits = () => {

  return (
    <>
      <div className={Style.SpiritsSection}>

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
          <Grid container spacing={2} className={Style.GridParent}>
            {SpiritCategory.map((item) => (
              <Grid key={item.id} item xs={4} className={Style.TextImgSection}>
                <Grid container spacing={2} className={Style.ImgtextParent}>
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

export default Spirits