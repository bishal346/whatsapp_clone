import React from 'react'
import {Typography,Grid,TextareaAutosize,AppBar,Toolbar,TextField,Avatar,IconButton,Fab} from '@material-ui/core'
import { makeStyles,useTheme } from '@material-ui/styles'
import {ArrowBack,Videocam,CallSharp,MoreVert,Send} from '@material-ui/icons'

/*const useStyles = makeStyles((theme) => ({
    iny: {
      position: 'fixed',
      bottom: theme.spacing(1),
      right: theme.spacing(300),
    },
    sey: {
        position: 'fixed',
        bottom: theme.spacing(1),
        right: theme.spacing(150),
      },
      inhe: {
        position: 'fixed',
        bottom: theme.spacing(1),
        right: theme.spacing(2),
      },
      sehe: {
          position: 'fixed',
          bottom: theme.spacing(1),
          right: theme.spacing(25),
        },
  }));*/
  const useStyles = makeStyles((theme) => ({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    form: {
        position: 'fixed',
        bottom: theme.spacing(40),
        right: theme.spacing(30),
      },
  }));
function Chatmes() {
    const classes = useStyles();
    return(
        <div>
            <Grid container spacing={2} direction="row">
                <Grid item container xs={6}>
                   <AppBar position="static">
                       <Toolbar>
                            <IconButton>
                                <ArrowBack />
                            </IconButton>
                            <Avatar>
                                R
                            </Avatar>
                            <Typography>You</Typography>
                        </Toolbar>
                    </AppBar>
                    <TextField className={classes.fab}></TextField>
                    <IconButton ><Send></Send></IconButton>
                </Grid>
                <Grid item container xs={6}>
                <AppBar position="static">
                       <Toolbar>
                            <IconButton>
                                <ArrowBack />
                            </IconButton>
                            <Avatar>
                                R
                            </Avatar>
                            <Typography>Sir</Typography>
                            </Toolbar>
                    </AppBar>
                    <TextField  ></TextField>
                    <IconButton ><Send></Send></IconButton>
                </Grid>
            </Grid>
        </div>
    )
}
export default Chatmes