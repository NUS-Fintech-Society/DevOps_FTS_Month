import React from 'react';
import {Box, Typography, responsiveFontSizes, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
 

let theme = createMuiTheme({
    typography: {
        fontFamily: "'Montserrat', 'Nunito', 'Roboto', 'sans-serif'"
    }
  });

theme = responsiveFontSizes(theme)

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        width:'45vw',
        height:'80vh',
        borderRadius:'10px',
    },
    ul:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
    },
    container:{
        display:'flex',
        width:'100%',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        padding:'20px',
        height:'100%',
    },
    ulbox:{
        display:'flex',
        marginBottom:'5px',
    },
    text:{
        fontSize:'clamp(1rem, 0.4643rem + 2.8571vw, 2.25rem)'
    },
    li:{
        fontSize:'200%'
    }
}))

function Template({content}){
    const classes = useStyles()


    return(
        <ThemeProvider theme={theme}>
            <Paper elevation={3} className={classes.root}>
                <Box className={classes.container}>        
                    <Box className={classes.content}>
                        <ul className={classes.ul}>
                            {content.map((text) =>{
                                return (
                                    <li className={classes.li}>
                                        <Box className={classes.ulbox}>
                                            <Typography className={classes.text}>{text}</Typography>
                                        </Box>
                                    </li>
                                )
                            })}
                        </ul>
                    </Box>
                </Box>
            </Paper>
        </ThemeProvider>

    )
}

export default Template;