"use client"

import React from 'react';
import Style from './innerbeer.module.css';
import common from '../../../style/speccommon.module.css';
import Header from '../../../header/page';
import { useParams } from 'next/navigation';
import LiquorIcon from '@mui/icons-material/Liquor';
import BoxexCss from '../../../style/twobox.module.css';
import { BeerDetails } from '@/app/component/imageArrary';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const pages = () => {
    const params = useParams()
    const Id = params.id

    const BeerDetail = BeerDetails.find((item) => item.id === Id);

    console.log("data", BeerDetail)

    return (
        <>
            <div className={Style.BeerParent}>
                <Header />

                <div className={common.HeadingParent}>
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
                                <span><LiquorIcon className={BoxexCss.IconStyle} /> ABV :  {BeerDetail.persentAlcohol}  </span>
                                <span><WhatshotIcon className={BoxexCss.IconStyle} /> Calories :  {BeerDetail.persentAlcohol}</span>
                                <p>{BeerDetail.description}</p>
                            </div>
                        </div>
                    </div>

                        <div className={common.IngredientsParent}>
                            <h3>Details</h3>
                            {BeerDetail.Details.map((item) => (
                                <div key={item.id} className={common.WhiskeyParent}>
                                    <p>{item.FirstText}</p>
                                    <p>{item.EndText}</p>
                                </div>
                            ))}
                        </div>

                </div>

            </div>
        </>
    )
}

export default pages