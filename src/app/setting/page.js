import React from 'react';
import Style from './setting.module.css';
import Header from '../header/page';

const page = () => {
  return (
    <>
      <div className={Style.SettingSection}>
        <Header />
        <h3>Settings</h3>

        <div className={Style.ImgSection}>
          <img src='https://app.mibararts.com/Images/wip.png' alt='not found ' />
          <p>This page is currently under development and will be live soon. Thank you for your patience!</p>
        </div>

      </div>

    </>
  )
}

export default page