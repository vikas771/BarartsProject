import React, { useRef } from 'react'
import Style from './library.module.css'
import { Grid, List, ListItem, Paper } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { Library, Quizzes } from '../component/imageArrary';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const page = () => {
  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const thirdBox = useRef(null);

  // first carousel button start  here of Cocktails

  const FirstCarouselNext = () => {
    let width = firstBox.current.clientWidth;
    firstBox.current.scrollLeft = firstBox.current.scrollLeft + width;
  };

  const FirstCarouselPrev = () => {
    let width = firstBox.current.clientWidth;
    firstBox.current.scrollLeft = firstBox.current.scrollLeft - width;
  };

  // first carousel button end  here of Cocktails

  return (
    <>
      <div className={Style.libraryparent}>
        <div className={Style.headingSeach}>
          <h4>Library</h4>
          <div>
            <input className={Style.SeachInpput} type="search" placeholder="Search" aria-label="Search" />
          </div>
        </div>

        <div className={Style.SecondParent}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <div className={Style.FlashcardParent}>
                <div className={Style.FirstCircle}>
                  <div>
                    <h5>Flashcard Progress</h5>
                    <p>just a step away to get certificate</p>
                  </div>
                  <div className={Style.progressbar}>
                    <h6>54%</h6>
                  </div>
                </div>

                <Paper className={Style.Paper}>
                  <List >
                    <ListItem className={Style.ListItem}>
                      <div>
                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Distilling Whiskey</h6>
                            <p>10 Flashcards</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Warehouse and Barrels</h6>
                            <p>10 Flashcards</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Whiskeys From Around the World</h6>
                            <p>10 Flashcards</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Manhattan</h6>
                            <p>0 Flashcards</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Whiskey Sour</h6>
                            <p>3 Flashcards</p>
                          </div>
                        </div>

                      </div>
                    </ListItem>
                  </List>
                </Paper>
              </div>

            </Grid>

            <Grid item xs={4}>
              <div className={Style.FlashcardParent}>

                <div className={Style.FirstCircle}>
                  <div>
                    <h5>Quizzes  Progress</h5>
                    <p>just a step away to get certificate</p>
                  </div>
                  <div className={Style.progressbar}>
                    <h6>54%</h6>
                  </div>
                </div>

                <Paper className={Style.Paper} >
                  <List >
                    <ListItem className={Style.ListItem}>
                      <div>
                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Distilling Whiskey</h6>
                            <p>10 Flashcards</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Warehouse and Barrels</h6>
                            <p>10 Flashcards</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Whiskeys From Around the World</h6>
                            <p>10 Flashcards</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Manhattan</h6>
                            <p>7 Flashcards</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Whiskey Sour</h6>
                            <p>4 Flashcards</p>
                          </div>
                        </div>

                      </div>
                    </ListItem>
                  </List>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={Style.FlashcardParent}>

                <div className={Style.FirstCircle}>
                  <div>
                    <h5>Flashcard Progress</h5>
                    <p>just a step away to get certificate</p>
                  </div>
                  <div className={Style.progressbar}>
                    <h6>54%</h6>
                  </div>
                </div>

                <Paper className={Style.Paper}>
                  <List >
                    <ListItem className={Style.ListItem}>
                      <div>
                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Manhattan</h6>
                            <p>Complete Course to Earn Certificate</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Whiskey Sour</h6>
                            <p>Complete Course to Earn Certificate</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Mint-Julep</h6>
                            <p>Complete Course to Earn Certificate</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Boulevardie</h6>
                            <p>Complete Course to Earn Certificate</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Sazerac</h6>
                            <p>Complete Course to Earn Certificate</p>
                          </div>
                        </div>

                        <div className={Style.IconParent}>
                          <ArticleIcon className={Style.iconStyle} />
                          <div className={Style.IconText}>
                            <h6>Old Fashioned</h6>
                            <p>Complete Course to Earn Certificate</p>
                          </div>
                        </div>
                      </div>
                    </ListItem>
                  </List>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Courses or First carousel start here  */}

        <div className={Style.FirstCarousels}>
          <h3>Courses</h3>
          <div className={Style.FirstParent} ref={firstBox}>
            {Library.map((item) => (
              <div key={item.Url} className={Style.FirstImgSection}>
                <video controls width="330" height="210">
                  <source src={item.Url} type="video/mp4" />
                </video>
                <h3>{item.pname}</h3>
              </div>
            )
            )}
          </div>
          <button className={Style.FirstCarouselNextBtn} onClick={FirstCarouselNext}><ArrowForwardIosIcon className={Style.iconBtnFirst} /></button>
          <button className={Style.FirstCarouselPrevBtn} onClick={FirstCarouselPrev}><ArrowBackIosIcon className={Style.iconBtnFirst} /></button>
        </div>


        {/* Courses or First  carousel end  here  */}

        {/* Quizzes or Second  carousel start  here  */}


        <div className={Style.FirstCarousels}>
          <h3>Flashcards</h3>
          <div className={Style.FirstParent} ref={firstBox}>
            {Quizzes.map((item) => (
              <div key={item.Url} className={Style.FirstImgSection}>
                <img src={item.Url} alt='not find' />
                <h3>{item.pname}</h3>
              </div>
            )
            )}
          </div>
          <button className={Style.FirstCarouselNextBtn} onClick={FirstCarouselNext}><ArrowForwardIosIcon className={Style.iconBtnFirst} /></button>
          <button className={Style.FirstCarouselPrevBtn} onClick={FirstCarouselPrev}><ArrowBackIosIcon className={Style.iconBtnFirst} /></button>
        </div>


        {/* Quizzes or Second  carousel end  here  */}



      </div>
    </>
  )
}

export default page