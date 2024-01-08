"use client"

import React from 'react';
import Style from './lowinner.module.css';
import common from '../../../style/speccommon.module.css';
import Header from '../../../header/page';
import { useParams } from 'next/navigation';
import BoxexCss from '../../../style/twobox.module.css';
import { LowNoABV } from '../../../component/imageArrary'

const pages = () => {
    const params = useParams()
    const Id = params.id

    const LowDetail = LowNoABV.find((item) => item.id === Id);

    return (
        <>
            <div className={Style.BeerParent}>
                <Header />

                <div className={common.HeadingParent}>
                    <h4>{LowDetail.pname}</h4>

                    <div className={BoxexCss.BoxParent} >
                        <div>
                            <div className={BoxexCss.ImgParent}>
                                <img src={LowDetail.Url} alt='not found' />
                            </div>
                        </div>
                        <div>
                            <div className={BoxexCss.TextAreaParent}>
                                <h3>{LowDetail.pname}</h3>
                                <p>{LowDetail.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className={common.IngredientsParent}>
                        <h3>Details</h3>
                        {LowDetail.Details.map((item) => (
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