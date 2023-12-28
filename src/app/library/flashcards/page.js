import React, { useRef } from 'react'
import Style from './flashcards.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { BourbonHistory, CoreBeveragelLibrary, SignatureCocktails } from '@/app/component/imageArrary';

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

    //  Core Beverage or Third  button  start  here  

    const ThirdCarouselNext = () => {
        let width = thirdBox.current.clientWidth;
        thirdBox.current.scrollLeft = thirdBox.current.scrollLeft + width;
    };

    const ThirdCarouselPrev = () => {
        let width = thirdBox.current.clientWidth;
        thirdBox.current.scrollLeft = thirdBox.current.scrollLeft - width;
    };
    //  Core Beverage  or Third  button  end  here 

    return (
        <>
            <div className={Style.FlashcardsParent}>
                <h3>Flashcards</h3>

                {/* Bourbon History or First  carousel start  here  */}

                <div className={Style.FirstCarousels}>
                    <h3>Bourbon History</h3>
                    <div className={Style.FirstParent} ref={firstBox}>
                        {BourbonHistory.map((item) => (
                            <div key={item.Url} className={Style.FirstImgSection}>
                                <img src={item.Url} alt='not find' />
                                <h3>{item.pname}</h3>
                                <p>{item.question} flashcards</p>
                            </div>
                        )
                        )}
                    </div>
                    <button className={Style.FirstCarouselNextBtn} onClick={FirstCarouselNext}><ArrowForwardIosIcon className={Style.iconBtnFirst} /></button>
                    <button className={Style.FirstCarouselPrevBtn} onClick={FirstCarouselPrev}><ArrowBackIosIcon className={Style.iconBtnFirst} /></button>
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
                                <p>{item.question} flashcards</p>
                            </div>
                        )
                        )}
                    </div>
                    <button className={Style.FirstCarouselNextBtn} onClick={SecondCarouselNext}><ArrowForwardIosIcon className={Style.iconBtnFirst} /></button>
                    <button className={Style.FirstCarouselPrevBtn} onClick={SecondCarouselPrev}><ArrowBackIosIcon className={Style.iconBtnFirst} /></button>
                </div>

                {/* Signature Cocktails or Second  carousel end  here  */}

                {/* Core Beverage  or third  carousel start  here  */}

                <div className={Style.FirstCarousels}>
                    <h3>Core Beverage</h3>
                    <div className={Style.FirstParent} ref={thirdBox}>
                        {CoreBeveragelLibrary.map((item) => (
                            <div key={item.Url} className={Style.FirstImgSection}>
                                <img src={item.Url} alt='not find' />
                                <h3>{item.pname}</h3>
                                <p>{item.question} flashcards</p>
                            </div>
                        )
                        )}
                    </div>
                    <button className={Style.FirstCarouselNextBtn} onClick={ThirdCarouselNext}><ArrowForwardIosIcon className={Style.iconBtnFirst} /></button>
                    <button className={Style.FirstCarouselPrevBtn} onClick={ThirdCarouselPrev}><ArrowBackIosIcon className={Style.iconBtnFirst} /></button>
                </div>

                {/* Core Beverage or Third  carousel end  here  */}

            </div>
        </>
    )
}

export default page