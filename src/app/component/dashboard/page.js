import { Grid, List, ListItem, Paper } from '@mui/material'
import React from 'react'
import { ResponsiveContainer } from 'recharts';
import Style from './dashboard.module.css'
import { Typography, CircularProgress } from '@mui/material';
import { PieChart, Pie, Cell, Boxj } from 'recharts';
import { Box } from '@mui/system';
import ArticleIcon from '@mui/icons-material/Article';

const pieChartData = [
  { name: 'Step 1', value: 25 },
  { name: 'Step 2', value: 25 },
  { name: 'Step 3', value: 25 },
  { name: 'Step 4', value: 25 },
];

const COLORS = ['#f44336', '#2196f3', '#4caf50', '#ff9800'];

const Dashboard = () => {
  return (
    <>
      <div className={Style.DashboardParent}>
        <h2>Welcome Back, Aria</h2>
        <p>We are grateful to have you on the Marriott International BarArts team.</p>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <div className={Style.GraphParent}>
              <div className={Style.HeadingText}>
                <h4>This Week</h4>
                <h6>Select Week</h6>
              </div>
              <div className={Style.graphImg}>
                <img src='/barchart.webp' alt='not found' />
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={Style.PieGraphParent}>
              <h2>Your Status</h2>
              <div className={Style.ProgressBarChild}>
                {/* <Box position="relative" display="inline-flex" >
                  <CircularProgress
                    className={Style.ProgressCircle}
                    variant="determinate"
                    value={68}
                    size={100}
                    thickness={4}
                    style={{ color: '#4caf50' }}
                  />
                  <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography variant="caption" component="div" color="textSecondary" className={Style.Innertext}>
                      68% Complete
                    </Typography>
                  </Box>
                </Box> */}

                <div className={Style.StatusParent}>
                  <div className={Style.ProgressStatus}>
                    <h6>68%</h6>
                  </div>
                </div>

                <div className={Style.endSection}>
                  <div className={Style.SquarePareent}>
                    <div className={Style.firstSquare}></div>
                    <p>Completed</p>
                  </div>
                  <div className={Style.SquarePareent}>
                    <div className={Style.secondSquare}></div>
                    <p>Remaining</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={Style.Progress}>
              <h2>Your Progress</h2>
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={5}>
                  <div className={Style.BoxesParent}>
                    <div className={Style.SquareBoxFirst}>
                      <div className={Style.InnerFirst}></div>
                      <h6>Flashcards</h6>
                    </div>

                    <div className={Style.SquareBoxFirst}>
                      <div className={Style.SquareBoxSecond}></div>
                      <h6>Quizzes</h6>
                    </div>

                    <div className={Style.SquareBoxFirst}>
                      <div className={Style.SquareBoxThird}></div>
                      <h6>Courses</h6>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
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
    </>
  )
}

export default Dashboard;