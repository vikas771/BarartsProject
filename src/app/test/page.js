"use client"

import React, { useRef } from 'react'
import style from './test.module.css'

import {CocktailsImg, dataImg} from '../component/images'

const page = () => {
    const box = useRef(null);

    const btnPressPrev = () => {
        let width = box.current.clientWidth;
        box.current.scrollLeft = box.current.scrollLeft - width;
        console.log(width);
    };

    const btnPressNext = () => {
        let width = box.current.clientWidth;
        box.current.scrollLeft = box.current.scrollLeft + width;
        console.log(width);
    };

    return (
        <div>
            <div className={style.ProductParent}>
                <button className={style.nextbtn} onClick={btnPressNext}>Next</button>
                <button className={style.prev} onClick={btnPressPrev}>Pre</button>
                <div className={style.imgsection} ref={box}>
                    {CocktailsImg.map((item) => (
                        <div>
                        <img src={item.Url} alt='not found' className={style.mycard}/>
                        <h3>{item.pname}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page