import React from 'react'
import Style from './cocktail.module.css';
import common from '../../common.module.css';
import BoxexCss from '../../style/twobox.module.css'
import LiquorIcon from '@mui/icons-material/Liquor';
import { CocktailsImg } from '../../component/imageArrary';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';

const Cocktails = () => {
  const Check = (id) => {
    console.log("id", id);

  }
  return (
    <>
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
            <div className={BoxexCss.BoxParent}>
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
                  {/* <button onClick={() => Check(item.id)}> click here </button> */}
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