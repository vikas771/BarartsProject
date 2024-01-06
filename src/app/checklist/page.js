import React from 'react';
import Style from './checklist.module.css';
import common from '../common.module.css';
import { Grid } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import LinearProgress from '@mui/material/LinearProgress';
import SearchIcon from '@mui/icons-material/Search';

// Functional component representing the checklist page
const ChecklistPage = () => {
    return (
        <>
            {/* Parent container for the checklist */}
            <div className={Style.CheckParent}>

                {/* Header section with checklist title and search bar */}
                <Grid container spacing={2} className='mt-1'>
                    {/* Checklist title */}
                    <Grid item xs={6} className={common.HeadingText}>
                        <h4>Checklist</h4>
                    </Grid>
                    {/* Search bar */}
                    <Grid item xs={6} className={common.SearchParent}>
                        <input
                            type="text"
                            placeholder="Search Categories"
                            className={common.SearchInput}
                        />
                        <SearchIcon className={common.SearchIcon} />
                    </Grid>
                </Grid>

                {/* First checklist item */}
                <div className={Style.FirstParent}>
                    {/* Grid container for checklist item details */}
                    <Grid container spacing={2} className={Style.MainChild}>
                        {/* Icon and text section */}
                        <Grid item xs={10} className={Style.IconAndText}>
                            <DescriptionIcon className={Style.IconStyle} />
                            <h5>Opening Sidework for Bartenders</h5>
                        </Grid>
                        {/* Progress details section */}
                        <Grid item xs={2}>
                            {/* Progress details */}
                            <div className={Style.ProgressParent}>
                                <p>03/06</p>
                                <span> In Progress</span>
                            </div>

                            {/* Linear progress bar */}
                            <div className={Style.myProgressBar}>
                                <LinearProgress
                                    className={Style.Demoo}
                                    variant="determinate"
                                    value={25}
                                    sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'rgba(255,131,65,255)' } }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                {/* Second checklist item (similar structure as the first) */}
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
                                    value={25}
                                    sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'rgba(255,131,65,255)' } }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
};

export default ChecklistPage;
