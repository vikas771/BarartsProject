"use client"

import React, { useRef } from 'react';
import Style from './specs.module.css';
import common from '../common.module.css'
import { CocktailsImg, CoreBeverage, EventPlacement } from '../component/imageArrary'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';


const Specs = () => {

    const firstBox = useRef(null);
    const secondBox = useRef(null);
    const thirdBox = useRef(null);

    // first carousel button start  here of Cocktails

    const FirstCarouselNext = () => {
        let width = firstBox.current.clientWidth;
        firstBox.current.scrollLeft = firstBox.current.scrollLeft + width;
    };

    const FirstCarouselPrev = () => {
        let width = firstBox.current.clientWidth;
        firstBox.current.scrollLeft = firstBox.current.scrollLeft - width;
    };

    // first carousel button end  here of Cocktails

    // second carousel button start  here of Cocktails

    const SecondCarouselNext = () => {
        let width = secondBox.current.clientWidth;
        secondBox.current.scrollLeft = secondBox.current.scrollLeft + width;
    }

    const SecondCarouselPrev = () => {
        let width = secondBox.current.clientWidth;
        secondBox.current.scrollLeft = secondBox.current.scrollLeft - width;
    }

    // second carousel button end  here of Cocktails

    // third carousel button start  here of Cocktails

    const ThirdCarouselNext = () => {
        let width = thirdBox.current.clientWidth;
        thirdBox.current.scrollLeft = thirdBox.current.scrollLeft + width;
    }

    const ThirdCarouselPrev = () => {
        let width = thirdBox.current.clientWidth;
        thirdBox.current.scrollLeft = thirdBox.current.scrollLeft - width;
    }

    // third carousel button end  here of Cocktails

    return (
        <>
            <div className={Style.SpecsParent}>

                <Grid container spacing={2}>
                    <Grid item xs={6} className={common.HeadingText}>
                        <h4>Specs</h4>
                    </Grid>
                    <Grid item xs={6}  className={common.SearchParent}>
                            <input
                                type="text"
                                placeholder="Search Categories"
                                className={common.SearchInput}
                            />
                            <SearchIcon className={common.SearchIcon} />
                    </Grid>
                </Grid>

                <div className={Style.FirstCarousel}>

                    <div className={Style.Tesing}>

                        {/* first carousel start  here of Cocktails  */}

                        <div className={Style.FirstCarousels}>
                            <div className={Style.HeadingParetn}>
                                <div>
                                    <h4>Cocktails</h4>
                                </div>
                                <div>
                                    <h3>See All</h3>
                                </div>
                            </div>

                            <div className={Style.FirstParent} ref={firstBox}>
                                {CocktailsImg.map((item) => (
                                    <div key={item.Url} className={Style.FirstImgSection}>
                                        <img src={item.Url} alt='not found' />
                                        <h3>{item.pname}</h3>
                                    </div>
                                )
                                )}
                            </div>
                            <button className={Style.FirstCarouselNextBtn} onClick={FirstCarouselNext}><ArrowForwardIosIcon className={Style.iconBtnFirst} /></button>
                            <button className={Style.FirstCarouselPrevBtn} onClick={FirstCarouselPrev}><ArrowBackIosIcon className={Style.iconBtnFirst} /></button>
                        </div>

                        {/* first carousel end  here of Cocktails  */}


                        {/* Second carousel start here of Core Beverage */}

                        <div className={Style.SecondCarousels}>
                            <h3>Core Beverage</h3>
                            <div className={Style.SecondParent} ref={secondBox}>
                                {CoreBeverage.map((item) => (
                                    <div key={item.Url} className={Style.SecondImgSection}>
                                        <img src={item.Url} alt='not found' />
                                        <h3>{item.pname}</h3>
                                    </div>
                                )
                                )}
                            </div>
                            <button className={Style.SecondCarouselNextBtn} onClick={SecondCarouselNext}><ArrowForwardIosIcon className={Style.iconBtnSecond} /></button>
                            <button className={Style.SecondCarouselPrevBtn} onClick={SecondCarouselPrev}><ArrowBackIosIcon className={Style.iconBtnSecond} /></button>
                        </div>

                        {/* Second carousel end here of Core Beverage */}

                        {/* third carousel end here of Core Beverage */}

                        <div className={Style.ThirdCarousels}>
                            <h3>Event Placement</h3>
                            <div className={Style.ThirdParent} ref={thirdBox}>
                                {EventPlacement.map((item) => (
                                    <div key={item.Url} className={Style.ThirdImgSection}>
                                        <img src={item.Url} alt='not found' />
                                        <h3>{item.pname}</h3>
                                    </div>
                                )
                                )}
                            </div>
                            <button className={Style.ThirdCarouselNextBtn} onClick={ThirdCarouselNext}><ArrowForwardIosIcon className={Style.iconBtnThird} /></button>
                            <button className={Style.ThirdCarouselPrevBtn} onClick={ThirdCarouselPrev}><ArrowBackIosIcon className={Style.iconBtnThird} /></button>
                        </div>

                        {/* third carousel end here of Core Beverage */}

                    </div>

                    <div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Specs