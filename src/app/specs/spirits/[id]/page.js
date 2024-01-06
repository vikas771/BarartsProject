"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import { SpiritCategory } from '@/app/component/imageArrary';
import style from './spritinner.module.css';
import Header from '../../../header/page';
import { Grid } from '@mui/material';
import common from '../../../style/innersection.module.css';
import SearchIcon from '@mui/icons-material/Search';

const page = () => {
    const params = useParams()
    const Id = params.id

    const SpiritDetails = SpiritCategory.find((item) => item.id === Id);

    console.log("data", SpiritDetails)

    return (
        <>
            <div className={style.DynamicParent}>
                <Header />

                <Grid container spacing={2}>
                    <Grid item xs={6} className={common.HeadingText}>
                        <h4>{SpiritDetails.pname}</h4>
                    </Grid>
                    <Grid item xs={6} className={common.SearchParent}>
                        <input
                            type="text"
                            placeholder="Search Spirit"
                            className={common.SearchInput}
                        />
                        <SearchIcon className={common.SearchIcon} />
                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default page