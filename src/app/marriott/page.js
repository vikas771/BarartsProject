"use client"

import React, { useRef } from 'react'
import Style from './marriott.module.css'
import { MarriottFirstcarousel, MarriottFirstcarousel2 } from '../component/imageArrary';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LanguageIcon from '@mui/icons-material/Language';
import { Grid } from '@mui/material';
import Header from '../header/page'


const page = () => {
    const firstBox = useRef(null);
    const secondBox = useRef(null)

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
    return (
        <>
            <div className={Style.MarriottSection}>

                <Header />

                <div className={Style.MarriottParent}>
                    <h3>Marriott</h3>

                    <div className={Style.CarouselsParent}>

                        {/* First Carousel  start here */}

                        <div className={Style.FirstCarousels}>
                            <div className={Style.FirstParent} ref={firstBox}>
                                {MarriottFirstcarousel.map((item) => (
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
                            <div className={Style.SecondParent} ref={secondBox}>
                                {MarriottFirstcarousel2.map((item) => (
                                    <div key={item.id} className={Style.SecondImgSection}>
                                        <img src={item.Url} alt='not found' />
                                        <span className={Style.TextCode}>Marsha Code: {item.Code}</span>
                                        <span className={Style.LogoText}><LanguageIcon /> Visit Website </span>
                                    </div>
                                )
                                )}
                            </div>
                            <button className={Style.SecondCarouselNextBtn} onClick={SecondCarouselNext}><ArrowForwardIosIcon className={Style.iconBtnSecond} /></button>
                            <button className={Style.SecondCarouselPrev} onClick={SecondCarouselPrev}><ArrowBackIosIcon className={Style.iconBtnSecond} /></button>
                        </div>

                        {/* Second Carousel  end here */}

                    </div>

                    <div>
                        <Grid container spacing={2} className={Style.FormSectionParent}>
                            <Grid item xs={4} className={Style.FormChildFirst}>
                                <div className={Style.textSection}>
                                    <h3>Address</h3>
                                    <p>1150 South Beverly Drive</p>
                                </div>
                                <div className={Style.textSection}>
                                    <h3>City</h3>
                                    <p>Los Angeles</p>
                                </div>
                                <div className={Style.textSection}>
                                    <h3>State</h3>
                                    <p>California</p>
                                </div>
                                <div className={Style.textSection}>
                                    <h3>Country</h3>
                                    <p>United States</p>
                                </div>
                            </Grid>
                            <Grid item xs={8} className={Style.FormChildSecond}>
                                <div className={Style.textSectionSecond}>
                                    <h3>Brand Details</h3>
                                    <p>The Beverly Hills Marriott is a part of the Marriott International brand. Marriott is known for its commitment to quality, exceptional service, and a broad range of accommodations to meet various travel needs, from luxury to budget-conscious. Our brand emphasizes guest satisfaction, innovation in hospitality services, and a loyalty program that is highly regarded in the industry.</p>
                                </div>

                                <div className={Style.textSectionSecond}>
                                    <h3>Property Details</h3>
                                    <p>A luxury hotel located in the prestigious Beverly Hills area, known for its prime location close to famous attractions like Rodeo Drive and the Hollywood Walk of Fame. Offering upscale amenities, including stylish rooms and suites, fine dining options, and comprehensive business and leisure facilities. It caters to both business and leisure travelers seeking a blend of comfort, convenience, and a touch of glamour in one of Los Angeles' most iconic neighborhoods.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page