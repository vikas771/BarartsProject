import React from 'react'
import Style from './specs.module.css'

const Specs = () => {
 
  return (
    <>
      <div className={Style.SpecsParent}>
        <div className={Style.headingSeach}>
          <h4>Specs</h4>
          <div>
            <input className={Style.SeachInpput} type="search" placeholder="Search" aria-label="Search" />
          </div>
        </div>

        <div className={Style.FirstCarousel}>
          <div className={Style.HeadingParetn}>
            <div>
              <h4>Cocktails</h4>
            </div>
            <div>
              <h3>See All</h3>
            </div>
          </div>
          
        </div>
      </div>

<div>

</div>

    </>
  )
}

export default Specs