import React from 'react'
import Style from './checklist.module.css';
import common from '../common.module.css';
import { Grid } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';
import LinearProgress from '@mui/material/LinearProgress';
import SearchIcon from '@mui/icons-material/Search';


const page = () => {
    return (
        <>
            <div className={Style.CheckParent}>

                <Grid container spacing={2} className='mt-1'>
                    <Grid item xs={6} className={common.HeadingText}>
                        <h4>Checklist</h4>
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

                <div className={Style.FirstParent}>
                    <Grid container spacing={2} className={Style.MainChild}>
                        <Grid item xs={10} className={Style.IconAndText}>
                            <DescriptionIcon className={Style.IconStyle} />
                            <h5>Opening Sidework for Bartenders</h5>
                        </Grid>
                        <Grid item xs={2}>
                            <div className={Style.ProgressParent}>
                                <p>03/06</p>
                                <span> In Progress</span>
                            </div>

                            <div className={Style.myProgressBar}>
                                <LinearProgress
                                    className={Style.Demoo}
                                    variant="determinate"
                                    value="25"
                                    sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'rgba(255,131,65,255)' } }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className={Style.FirstParent}>
                    <Grid container spacing={2} className={Style.MainChild}>
                        <Grid item xs={10} className={Style.IconAndText}>
                            <DescriptionIcon className={Style.IconStyle} />
                            <h5>Opening Sidework for Bartenders</h5>
                        </Grid>
                        <Grid item xs={2}>
                            <div className={Style.ProgressParent}>
                                <p>03/06</p>
                                <span> In Progress</span>
                            </div>

                            <div className={Style.myProgressBar}>
                                <LinearProgress
                                    className={Style.Demoo}
                                    variant="determinate"
                                    value="25"
                                    sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'rgba(255,131,65,255)' } }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default page