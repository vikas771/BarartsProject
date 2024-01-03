"use client"
import React, { useRef } from 'react'
import Style from './quizzes.module.css';
import common from '../../common.module.css';
import carouselCss from '../../style/carousel.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import { QuizzesBourbonHistory, QuizzesCoreBeverage, SignatureCocktails } from '@/app/component/imageArrary';

const page = () => {
    const firstBox = useRef(null);
    const secondBox = useRef(null);
    const thirdBox = useRef(null);

    // first carousel button start  here of Bourbon History

    const FirstCarouselNext = () => {
        let width = firstBox.current.clientWidth;
        firstBox.current.scrollLeft = firstBox.current.scrollLeft + width;
    };

    const FirstCarouselPrev = () => {
        let width = firstBox.current.clientWidth;
        firstBox.current.scrollLeft = firstBox.current.scrollLeft - width;
    };

    // first carousel button end  here of Bourbon History

    //  Signature Cocktails  or Second  button  start  here  

    const SecondCarouselNext = () => {
        let width = secondBox.current.clientWidth;
        secondBox.current.scrollLeft = secondBox.current.scrollLeft + width;
    };

    const SecondCarouselPrev = () => {
        let width = secondBox.current.clientWidth;
        secondBox.current.scrollLeft = secondBox.current.scrollLeft - width;
    };

    //  Signature Cocktails  or Second  button  end  here  

    //  Core Beverage  or Third  button  start  here  

    const ThirdCarouselNext = () => {
        let width = thirdBox.current.clientWidth;
        thirdBox.current.scrollLeft = thirdBox.current.scrollLeft + width;
    };

    const ThirdCarouselPrev = () => {
        let width = thirdBox.current.clientWidth;
        thirdBox.current.scrollLeft = thirdBox.current.scrollLeft - width;
    };

    //  Core Beverage  or Third  button  start  here  
    return (
        <>
            <div className={Style.FlashcardsParent}>

                <Grid container spacing={2}>
                    <Grid item xs={6} className={common.HeadingText}>
                        <h4>Quizzes</h4>
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
                {/* Bourbon History or First  carousel start  here  */}

                <div className={Style.FirstCarousels}>
                    <h3>Bourbon History</h3>
                    <div className={Style.FirstParent} ref={firstBox}>
                        {QuizzesBourbonHistory.map((item) => (
                            <div key={item.Url} className={Style.FirstImgSection}>
                                <img src={item.Url} alt='not find' />
                                <h3>{item.pname}</h3>
                                <p>{item.question} questions</p>
                            </div>
                        )
                        )}
                    </div>
                    <button className={carouselCss.NextBtn} onClick={FirstCarouselNext}><ArrowForwardIosIcon className={carouselCss.PreAndNextIcon} /></button>
                    <button className={carouselCss.PreviousBtn} onClick={FirstCarouselPrev}><ArrowBackIosIcon className={carouselCss.PreAndNextIcon} /></button>
                </div>

                {/* Bourbon History or First  carousel end  here  */}

                {/* Signature Cocktails  or Second  carousel start  here  */}

                <div className={Style.FirstCarousels}>
                    <h3>Signature Cocktails</h3>
                    <div className={Style.FirstParent} ref={secondBox}>
                        {SignatureCocktails.map((item) => (
                            <div key={item.Url} className={Style.FirstImgSection}>
                                <img src={item.Url} alt='not find' />
                                <h3>{item.pname}</h3>
                                <p>{item.question} questions</p>
                            </div>
                        )
                        )}
                    </div>
                    <button className={carouselCss.NextBtn} onClick={SecondCarouselNext}><ArrowForwardIosIcon className={carouselCss.PreAndNextIcon} /></button>
                    <button className={carouselCss.PreviousBtn} onClick={SecondCarouselPrev}><ArrowBackIosIcon className={carouselCss.PreAndNextIcon} /></button>
                </div>

                {/* Signature Cocktails or Second  carousel end  here  */}

                {/* Core Beverage  or third  carousel start  here  */}

                <div className={Style.FirstCarousels}>
                    <h3>Core Beverage</h3>
                    <div className={Style.FirstParent} ref={thirdBox}>
                        {QuizzesCoreBeverage.map((item) => (
                            <div key={item.Url} className={Style.FirstImgSection}>
                                <img src={item.Url} alt='not find' />
                                <h3>{item.pname}</h3>
                                <p>{item.question} questions</p>
                            </div>
                        )
                        )}
                    </div>
                    <button className={carouselCss.NextBtn} onClick={ThirdCarouselNext}><ArrowForwardIosIcon className={carouselCss.PreAndNextIcon} /></button>
                    <button className={carouselCss.PreviousBtn} onClick={ThirdCarouselPrev}><ArrowBackIosIcon className={carouselCss.PreAndNextIcon} /></button>
                </div>

                {/* Core Beverage or Third  carousel end  here  */}

            </div>
        </>
    )
}

export default page