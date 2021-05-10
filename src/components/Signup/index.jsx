import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import './styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: "500",
        fontSize: "30px",
        lineHeight: "42px",
        marginBottom: "15px",
        margin: "auto"

    },
    root: {
        display: "flex",
        justifyContent: "center",

        '& > *': {
            margin: theme.spacing(1),
            width: '50%',
        },
    },
    button:{
        backgroundColor:"#05C0A5",
        width:"365px",
        height:"65px",
        color:"#fff"

    }
}));

Signup.propTypes = {

};

function Signup(props) {
    const classes = useStyles();
    return (
        <div className="root-login">
            <Typography className={classes.title} variant="h1" component="h2">
                Get a New Wallet
            </Typography>
            <div className="sub-root">
                <span className="sub_title">Already have a wallet?</span>
                <a className="sub_title-link" href="">Access My Wallet</a>
            </div>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="1. furnace" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="2. issue" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="3. birth" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="4. lucky" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="5. now" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="6. runway" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="7. spot" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="8. engine" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="9. deer" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="10. now" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="11. birth" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="12. zone" />
                    </Grid>
                </Grid>
               

            </form>
            <Button className={classes.button} variant="contained" color="primary">
                    Primary
            </Button>
        </div>
    );
}

export default Signup;