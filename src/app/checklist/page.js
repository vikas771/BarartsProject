import React from 'react'
import Style from './checklist.module.css'
import { Grid } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';

const page = () => {
    return (
        <>
            <div className={Style.CheckParent}>
                <h3>Checklist</h3>
                <div className={Style.FirstChild}>
                    <Grid container spacing={2} className={Style.TextParent}>
                        <Grid item xs={8} className={Style.IconParent}>
                            <DescriptionIcon />
                            <h5>Opening Sidework for Bartenders</h5>
                        </Grid>
                        <Grid item xs={4}>
                            <h3>Checklist</h3>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className={Style.TextParent}>
                        <Grid item xs={8} className={Style.IconParent}>
                            <DescriptionIcon />
                            <h5>Opening Sidework for Bartenders</h5>
                        </Grid>
                        <Grid item xs={4}>
                            <h3>Checklist</h3>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default page