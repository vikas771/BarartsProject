import React, { useRef } from 'react';
import Style from './library.module.css';
import common from '../common.module.css'
import { Grid, List, ListItem, Paper } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { Flashcards, Library, Quizzes } from '../component/imageArrary';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';

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

  // first carousel button end  here of Quizzes

  // second carousel button start  here of Quizzes

  const SecondCarouselNext = () => {
    let width = secondBox.current.clientWidth;
    secondBox.current.scrollLeft = secondBox.current.scrollLeft + width;
  };

  const SecondCarouselPrev = () => {
    let width = secondBox.current.clientWidth;
    secondBox.current.scrollLeft = secondBox.current.scrollLeft - width;
  };

  // second carousel button end  here of Quizzes

  // third carousel button start  here of Flashcards

  const ThirdCarouselNext = () => {
    let width = thirdBox.current.clientWidth;
    thirdBox.current.scrollLeft = thirdBox.current.scrollLeft + width;
  };

  const ThirdCarouselPrev = () => {
    let width = thirdBox.current.clientWidth;
    thirdBox.current.scrollLeft = thirdBox.current.scrollLeft - width;
  };

  // third carousel button end  here of Flashcards

  return (
    <>
      <div className={Style.libraryparent}>

        <Grid container spacing={2}>
          <Grid item xs={6} className={common.HeadingText}>
            <h4>Library</h4>
          </Grid>
          <Grid item xs={6} className={common.SearchParent}>
            <input
              type="text"
              placeholder="Search Cocktails"
              className={common.SearchInput}
            />
            <SearchIcon className={common.SearchIcon} />
          </Grid>
        </Grid>


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
                <video width="330" height="210">
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


        <div className={Style.SecondCarousels}>
          <h3>Quizzes</h3>
          <div className={Style.SecondParent} ref={secondBox}>
            {Quizzes.map((item) => (
              <div key={item.Url} className={Style.SecondImgSection}>
                <img src={item.Url} alt='not find' />
                <h3>{item.pname}</h3>
                <p>{item.question} questions</p>
              </div>
            )
            )}
          </div>
          <button className={Style.SecondCarouselNextBtn} onClick={SecondCarouselNext}><ArrowForwardIosIcon className={Style.iconBtnFirst} /></button>
          <button className={Style.SecondCarouselPrevBtn} onClick={SecondCarouselPrev}><ArrowBackIosIcon className={Style.iconBtnFirst} /></button>
        </div>


        {/* Quizzes or Second  carousel end  here  */}

        {/* Flashcards  Second  carousel start  here  */}

        <div className={Style.SecondCarousels}>
          <h3>Flashcards</h3>
          <div className={Style.SecondParent} ref={thirdBox}>
            {Flashcards.map((item) => (
              <div key={item.Url} className={Style.SecondImgSection}>
                <img src={item.Url} alt='not find' />
                <h3>{item.pname}</h3>
                <p>{item.question} flashcards</p>
              </div>
            )
            )}
          </div>
          <button className={Style.SecondCarouselNextBtn} onClick={ThirdCarouselNext}><ArrowForwardIosIcon className={Style.iconBtnFirst} /></button>
          <button className={Style.SecondCarouselPrevBtn} onClick={ThirdCarouselPrev}><ArrowBackIosIcon className={Style.iconBtnFirst} /></button>
        </div>

        {/* Flashcards  Second  carousel end  here  */}

      </div>
    </>
  )
}

export default page