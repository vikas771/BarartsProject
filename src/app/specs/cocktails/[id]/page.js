"use client"

import React from 'react';
import Style from './dynamic.module.css';
import Header from '../../../header/page';
import { useParams } from 'next/navigation';
import LiquorIcon from '@mui/icons-material/Liquor';
import BoxexCss from '../../../style/twobox.module.css';
import { CocktailsImg } from '../../../component/imageArrary'

const pages = () => {
    const params = useParams()
    const Id = params.id

    const cocktailDetails = CocktailsImg.find((item) => item.id === Id);

    console.log("data", cocktailDetails)

    return (
        <>
            <div className={Style.DynamicParent}>
                <Header />

                <div className={Style.CocktailParent}>
                    <h4>Manhattan</h4>

                    <div className={BoxexCss.BoxParent} >
                        <div>
                            <div className={BoxexCss.ImgParent}>
                                <img src={cocktailDetails.Url} alt='not found' />
                            </div>
                        </div>
                        <div>
                            <div className={BoxexCss.TextAreaParent}>
                                <h3>{cocktailDetails.pname}</h3>
                                <span><LiquorIcon className={BoxexCss.IconStyle} /> ABV :  {cocktailDetails.persentAlcohol} </span>
                                <p>{cocktailDetails.paratext}</p>
                            </div>
                        </div>
                    </div>

                    <div className={Style.IngredientsParent}>
                        <h3>Ingredients</h3>
                        {
                            cocktailDetails.Ingredients.map((item) => (
                                <div key={item.id} className={Style.WhiskeyParent}>
                                    <p>{item.startText}</p>
                                    <p>{item.endText}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className={Style.IngredientsParent}>
                        <h3>Presentations</h3>
                        {cocktailDetails.Presentations.map((item) => (
                            <div key={item.id} className={Style.WhiskeyParent}>
                                <p>{item.startText}</p>
                                <p>{item.endText}</p>
                            </div>
                        ))}
                    </div>

                    <div className={Style.IngredientsParent}>
                        <h3>Methods</h3>
                        {cocktailDetails.Methods.map((item => (
                            <div key={item.id} className={Style.WhiskeyParent}>
                                <p>{item.text}</p>
                            </div>
                        )))}
                    </div>

                    <div className={Style.DetailParent}>
                        <h3>Detail</h3>
                        {cocktailDetails.Detail.map((item => (
                            <p key={item.id}>{item.description}</p>
                        )))}
                    </div>

                    <div className={Style.VideoParent}>
                        <video className={Style.VideoChild}>
                            <source src="https://bararts.s3.amazonaws.com/Videos/MBP+-+Cocktails+-+Video+1+-+Manhattan" type="video/mp4" />
                        </video>
                    </div>


                </div>


            </div>
        </>
    )
}

export default pages