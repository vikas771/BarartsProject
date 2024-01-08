"use client"

import React from 'react';
import Style from './dynamic.module.css';
import common from '../../../style/speccommon.module.css';
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

                <div className={common.HeadingParent}>
                    <h4>{cocktailDetails.pname}</h4>

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

                    {cocktailDetails.Ingredients.length > 0 && (
                        <div className={common.IngredientsParent}>
                            {cocktailDetails.Ingredients.map((item) => (
                                <div key={item.id} className={common.WhiskeyParent}>
                                    <h3>Ingredients</h3>
                                    <p>{item.startText}</p>
                                    <p>{item.endText}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className={common.IngredientsParent}>
                        <h3>Presentations</h3>
                        {cocktailDetails.Presentations.map((item) => (
                            <div key={item.id} className={common.WhiskeyParent}>
                                <p>{item.startText}</p>
                                <p>{item.endText}</p>
                            </div>
                        ))}
                    </div>

                    <div className={common.IngredientsParent}>
                        <h3>Methods</h3>
                        {cocktailDetails.Methods.map((item => (
                            <div key={item.id} className={common.WhiskeyParent}>
                                <p>{item.text}</p>
                            </div>
                        )))}
                    </div>

                    {cocktailDetails.Detail.length > 0 && (
                        <div className={common.DetailParent}>
                            <h3>Detail</h3>
                            {cocktailDetails.Detail.map((item => (
                                <p key={item.id}>{item.description}</p>
                            )))}
                        </div>
                    )}

                    {cocktailDetails.VideoLink ? (
                        <div className={common.VideoParent}>
                            <video className={common.VideoChild}>
                                <source src={cocktailDetails.VideoLink} />
                            </video>
                        </div>
                    ) : (null)}
                </div>

            </div>
        </>
    )
}

export default pages