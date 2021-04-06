import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {LinearProgress,Fab,Table,TableHead,TableBody,TableRow,TableCell,Divider,AppBar,Toolbar,Avatar,IconButton,Typography} from '@material-ui/core';
import {ArrowBack,VolumeMute,VolumeUp,CallEnd,KeyboardArrowDown,Videocam,CallSharp,AccountCircle,Chat,MoreVert} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(10),
      
    },
    up: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(140),
      },
      dis: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(90),
      },
      mut: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(40),
      },
    form: {
        position: 'fixed',
        bottom: theme.spacing(40),
        right: theme.spacing(30),
      },
  }));

function Chame() {
    const classes = useStyles();
  return (
    <div>
        <AppBar position="static">
            End-to-end encrypted
            <Toolbar>
                <IconButton><KeyboardArrowDown /></IconButton>
                <Typography>Baba</Typography>
            </Toolbar>
            Calling
        </AppBar>
        <Fab className={classes.fab} color="secondary" aria-label="Call End">
  <CallEnd />
</Fab>
<IconButton className={classes.up}><VolumeUp /></IconButton>
<IconButton className={classes.dis} disabled><Videocam /></IconButton>
<IconButton className={classes.mut}><VolumeMute /></IconButton>
    </div>
  );
}
export default Chame
