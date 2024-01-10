"use client"

import React, { useRef } from 'react'
import Style from './courses.module.css';
import common from '../../style/carousel.module.css';
import { CocktailsCouses, Courses, HistoryCourses } from '../../component/imageArrary';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Header from '../../header/page';

const page = () => {
    const firstBox = useRef(null);
    const secondBox = useRef(null);
    const thirdBox = useRef(null);

    // First Carousel button start here 

    const FirstCarouselNext = () => {
        let width = firstBox.current.clientWidth;
        firstBox.current.scrollLeft = firstBox.current.scrollLeft + width;
    }

    const FirstCarouselPrev = () => {
        let width = firstBox.current.clientWidth;
        firstBox.current.scrollLeft = firstBox.current.scrollLeft - width;
    }

    // First Carousel button end  here

    // Second Carousel button start here 

    const SecondCarouselNext = () => {
        let width = secondBox.current.clientWidth;
        secondBox.current.scrollLeft = secondBox.current.scrollLeft + width;
    }

    const SecondCarouselPrev = () => {
        let width = secondBox.current.clientWidth;
        secondBox.current.scrollLeft = secondBox.current.scrollLeft - width;
    }

    // Second Carousel button end  here 

    // Second Carousel button start here 

    const ThirdCarouselNext = () => {
        let width = thirdBox.current.clientWidth;
        thirdBox.current.scrollLeft = thirdBox.current.scrollLeft + width;
    }

    const ThirdCarouselPrev = () => {
        let width = thirdBox.current.clientWidth;
        thirdBox.current.scrollLeft = thirdBox.current.scrollLeft - width;
    }

    // Second Carousel button end  here 
    return (
        <>
            <div className={Style.CoursesSection}>
                <Header />

                <div className={Style.CoursesParent}>
                    <h3>Courses</h3>

                    <div className={Style.CarouselsMainParent}>
                        {/* First Carousel  start here */}

                        <div className={Style.FirstCarousels}>
                            <div className={Style.FirstParent} ref={firstBox}>
                                {Courses.map((item) => (
                                    <div key={item.id} className={Style.FirstImgSection}>
                                        <img src={item.Url} alt='not found' />
                                    </div>
                                )
                                )}
                            </div>
                            <button className={Style.FirstCarouselNextBtn} onClick={FirstCarouselNext}><ArrowForwardIosIcon className={Style.iconBtnFirst} /></button>
                            <button className={Style.FirstCarouselPrevBtn} onClick={FirstCarouselPrev}><ArrowBackIosIcon className={Style.iconBtnFirst} /></button>
                        </div>

                        {/* First Carousel  start here */}

                        {/* Second Carousel  start here */}

                        <div className={Style.SecondCarousels}>
                            <h3>Cocktails</h3>
                            <div className={Style.SecondParent} ref={secondBox}>
                                {CocktailsCouses.map((item) => (
                                    <div key={item.Url} className={Style.SecondImgSection}>
                                        <video width="330" height="210">
                                            <source src={item.Url} type="video/mp4" />
                                        </video>
                                        <h3>{item.pname}</h3>
                                    </div>
                                )
                                )}
                            </div>
                            <button className={common.NextBtn} onClick={SecondCarouselNext}><ArrowForwardIosIcon className={common.PreAndNextIcon} /></button>
                            <button className={common.PreviousBtn} onClick={SecondCarouselPrev}><ArrowBackIosIcon className={common.PreAndNextIcon} /></button>
                        </div>

                        {/* Second Carousel  end here */}

                        {/* Third Carousel  start here */}

                        <div className={Style.SecondCarousels}>
                            <h3>History</h3>
                            <div className={Style.SecondParent} ref={thirdBox}>
                                {HistoryCourses.map((item) => (
                                    <div key={item.Url} className={Style.SecondImgSection}>
                                        <video width="330" height="210">
                                            <source src={item.Url} type="video/mp4" />
                                        </video>
                                        <h3>{item.pname}</h3>
                                    </div>
                                )
                                )}
                            </div>
                            <button className={common.NextBtn} onClick={ThirdCarouselNext}><ArrowForwardIosIcon className={common.PreAndNextIcon} /></button>
                            <button className={common.PreviousBtn} onClick={ThirdCarouselPrev}><ArrowBackIosIcon className={common.PreAndNextIcon} /></button>
                        </div>

                        {/* Third Carousel  end here */}
                    </div>

                </div>

            </div>
        </>
    )
}

export default page