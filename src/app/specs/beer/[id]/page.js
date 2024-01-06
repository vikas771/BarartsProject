"use client"

import React from 'react';
import Style from './innerbeer.module.css';
import Header from '../../../header/page';
import { useParams } from 'next/navigation';
import LiquorIcon from '@mui/icons-material/Liquor';
import BoxexCss from '../../../style/twobox.module.css';
import { BeerDetails } from '@/app/component/imageArrary';

const pages = () => {
    const params = useParams()
    const Id = params.id

    const BeerDetail = BeerDetails.find((item) => item.id === Id);

    console.log("data", BeerDetail)

    return (
        <>
            <div className={Style.DynamicParent}>
                <Header />

                <div className={Style.CocktailParent}>
                    <h4>{BeerDetail.pname}</h4>

                    <div className={BoxexCss.BoxParent} >
                        <div>
                            <div className={BoxexCss.ImgParent}>
                                <img src={BeerDetail.Url} alt='not found' />
                            </div>
                        </div>
                        <div>
                            <div className={BoxexCss.TextAreaParent}>
                                <h3>{BeerDetail.pname}</h3>
                                <span><LiquorIcon className={BoxexCss.IconStyle} /> ABV :  {BeerDetail.persentAlcohol} </span>
                                <p>{BeerDetail.paratext}</p>
                            </div>
                        </div>
                    </div>

                    {/* {cocktailDetails.Ingredients.length > 0 && (
                        <div className={Style.IngredientsParent}>
                            {cocktailDetails.Ingredients.map((item) => (
                                <div key={item.id} className={Style.WhiskeyParent}>
                                    <h3>Ingredients</h3>
                                    <p>{item.startText}</p>
                                    <p>{item.endText}</p>
                                </div>
                            ))}
                        </div>
                    )} */}

                </div>

            </div>
        </>
    )
}

export default pages