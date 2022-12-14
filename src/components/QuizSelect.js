// import React from 'react';
//
// import ConnectApi from "../api/ConnectApi";
// import Header from "./framework/Header";
//
// // MaterialUI
// import Container from "@material-ui/core/Container";
// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardHeader from "@material-ui/core/CardHeader";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import {makeStyles} from "@material-ui/core/styles";
// import {queries} from "@testing-library/react";
//
// const useStyles = makeStyles((theme) => ({
//     "@global": {
//         ul: {
//             margin: 0,
//             padding: 0,
//             listStyle: "none",
//         },
//     },
//     appBar: {
//         borderBottom: `1px solid ${theme.palette.divider}`,
//     },
//     toolbar: {
//         flexWrap: "wrap",
//     },
//     toolbarTitle: {
//         flexGrow: 1,
//     },
//     link: {
//         margin: theme.spacing(1, 1.5),
//     },
//     heroContent: {
//         padding: theme.spacing(8, 0, 6),
//     },
//     cardHeader: {
//         backgroundColor:
//             theme.palette.type === "light"
//                 ? theme.palette.grey[200]
//                 : theme.palette.grey[700],
//     },
//     cardPricing: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "baseline",
//         marginBottom: theme.spacing(2),
//     },
// }));
//
//
// export const QuizSelect = () => {
//
//     const classes = useStyles();
//     const API_URL = "https://easy-quizzes-api.herokuapp.com/quiz/";
//     const [dataState] = ConnectApi(API_URL);
//
//
//     return (
//         <React.Fragment>
//             <Header/>
//             <Container maxWidth="sm" component="main" className={classes.heroContent}>
//                 <Typography
//                     component="h1"
//                     variant="h2"
//                     align="center"
//                     color="textPrimary"
//                     gutterBottom
//                 >
//                     Quizzes
//                 </Typography>
//                 <Typography
//                     variant="h5"
//                     align="center"
//                     color="textSecondary"
//                     component="p"
//                 >
//
//                 </Typography>
//             </Container>
//             <Container maxWidth="md" component="main">
//                 <Grid container spacing={5} alignItems="flex-end">
//                     {dataState.data.map((quiz) => (
//                         <Grid item key={quiz.title} xs={12} md={4}>
//                             <Card>
//                                 <CardHeader
//                                     title={quiz.title}
//                                     titleTypographyProps={{align: "center"}}
//                                     subheaderTypographyProps={{align: "center"}}
//                                     className={classes.cardHeader}
//                                 />
//                                 <CardContent>
//                                     <div className={classes.cardPricing}>
//                                         <Typography component="h2" variant="h6" color="textPrimary">
//                                             Random Quiz
//                                         </Typography>
//                                     </div>
//                                     <ul>
//                                         <Typography
//                                             component="li"
//                                             variant="subtitle1"
//                                             align="center"
//                                         >
//                                             50 questions
//                                         </Typography>
//                                     </ul>
//                                 </CardContent>
//                                 <CardActions>
//                                     <Button
//                                         fullWidth
//                                         variant="outlined"
//                                         color="primary"
//                                         href="http://localhost:3000/quiz/FMF_MEVm/random/"
//                                     >
//                                         Start Quiz
//                                     </Button>
//                                 </CardActions>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//
//         </React.Fragment>
//     )
// };
//
//
// export default QuizSelect;