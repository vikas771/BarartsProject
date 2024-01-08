"use client"

import { Grid } from '@mui/material';
import React, { useRef } from 'react';
import Style from './specs.module.css';
import common from '../common.module.css';
import carouselCss from '../style/carousel.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CocktailsImg, CoreBeverage, EventPlacement } from '../component/imageArrary';

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

                <Grid container spacing={2} className='mt-1'>
                    <Grid item xs={6} className={common.HeadingText}>
                        <h4>Specs</h4>
                    </Grid>
                    <Grid item xs={6} className={common.SearchParent}>
                        <input
                            type="text"
                            placeholder="Search Categories"
                            className={common.SearchInput}
                        />
                        <SearchIcon className={common.SearchIcon} />
                    </Grid>
                </Grid>

                <div className={Style.CarouselParent}>


                    {/* first carousel start  here of Cocktails  */}

                    <div className={Style.FirstCarousels}>
                        <div className={Style.HeadingParetn}>
                            <div>
                                <h4>Cocktails</h4>
                            </div>
                            <div>
                                <h5>See All</h5>
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
                        <button className={carouselCss.NextBtn} onClick={FirstCarouselNext}><ArrowForwardIosIcon className={carouselCss.PreAndNextIcon} /></button>
                        <button className={carouselCss.PreviousBtn} onClick={FirstCarouselPrev}><ArrowBackIosIcon className={carouselCss.PreAndNextIcon} /></button>
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
                        <button className={` ${carouselCss.NextBtn}`} onClick={SecondCarouselNext}><ArrowForwardIosIcon className={carouselCss.PreAndNextIcon} /></button>
                        <button className={`${Style.SecondCarouselPrevBtn} ${carouselCss.PreviousBtn}`} onClick={SecondCarouselPrev}><ArrowBackIosIcon className={carouselCss.PreAndNextIcon} /></button>
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
                        <button className={`${carouselCss.NextBtn}`} onClick={ThirdCarouselNext}><ArrowForwardIosIcon className={carouselCss.PreAndNextIcon} /></button>
                        <button className={`${Style.ThirdCarouselPrevBtn} ${carouselCss.PreviousBtn}`} onClick={ThirdCarouselPrev}><ArrowBackIosIcon className={carouselCss.PreAndNextIcon} /></button>
                    </div>

                    {/* third carousel end here of Core Beverage */}

                </div>

            </div>
        </>
    )
}

export default Specs