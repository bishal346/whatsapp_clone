import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography,AppBar,Fab,Toolbar,Table,TableBody,TableCell,TableHead,TableRow,Divider,Avatar,IconButton,List,ListItem,ListItemText,ListItemIcon,ListItemAvatar} from '@material-ui/core'
import {CallReceived,KeyboardArrowDown,VolumeMute,VolumeUp,CallEnd,CallSharp,Videocam,ArrowBack,Chat,MoreVert,PhoneMissed,CallMade,AccountCircle,Call} from '@material-ui/icons'

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

function Calll({name}) {
    const classes = useStyles()
    const[list,setList] = useState(
        [
            {
                name:"Dadabhai",
                time:"22:00",
                date:"1 July",
                icon:<CallMade />
            },
            {
                name:"Dadabhai",
                time:"22:00",
                date:"25 June",
                icon:<CallReceived />
            },
            {
                name:"Dadabhai",
                time:"21:00",
                date:"20 June",
                icon:<CallMade />
            },
            {
                name:"Dadabhai",
                time:"22:00",
                date:"20 June",
                icon:<CallReceived />
            },
            {
                name:"Dadabhai",
                time:"21:45",
                date:"28 May",
                icon:<CallMade />
            },
            {
                name:"Saptarshi",
                time:"21:55",
                date:"21 May",
                icon:<CallMade />
            },
            {
                name:"Saptarshi",
                time:"21:50",
                date:"21 May",
                icon:<PhoneMissed />
            },
            {
                name:"Dadabhai",
                time:"21:00",
                date:"19 May",
                icon:<CallMade />
            },
            {
                name:"Dadabhai",
                time:"10:00",
                date:"16 April",
                icon:<CallReceived />
            },
            {
                name:"Dadabhai",
                time:"21:45",
                date:"10 April",
                icon:<CallMade />
            },
            {
                name:"Debojoti",
                time:"20:46",
                date:"22 February",
                icon:<CallMade />
            },
        ]
    )
    const[frn,setFrn] = useState(true)
    const[bkn,setBkn] = useState(false)
    const[abk,setAbk] = useState(false)
    const[ojb,setOjb] = useState({})
    const[bgc,setBgc]=useState("")
    function nrf(obj) {
        setOjb(obj)
        setBkn(!bkn)
        setFrn(!frn)
    }
    const nkb = () => {
        setBkn(!bkn)
        setFrn(!frn)
    }
    const bank = () => {
        setBkn(!bkn)
        setAbk(!abk)
    }
    function kba(obj) {
        setBgc(obj)
        setBkn(!bkn)
        setAbk(!abk)
    }
return (
    <div>
       { frn && <List>
            {list.map(ch=> (
                ch.name.toLowerCase().includes(name.toLowerCase())&&
                <ListItem onClick={()=>nrf(ch)} button>
                    <ListItemAvatar><Avatar><AccountCircle /></Avatar></ListItemAvatar>
                    <ListItemText>{ch.name}     </ListItemText>
            <span><p>{ch.date},{ch.time}</p></span> 
                    <ListItemIcon><IconButton ><Call /></IconButton></ListItemIcon>
                </ListItem>
            ))}
        </List>}
       { bkn && <div>
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={nkb} ><ArrowBack /></IconButton>
                <Typography>Call info</Typography>
                <IconButton><Chat /></IconButton>
                <IconButton><MoreVert /></IconButton>
            </Toolbar>
        </AppBar>
        <Table>
            <TableHead></TableHead>
            <TableBody>
                <TableRow>
                    <TableCell><Avatar><AccountCircle></AccountCircle></Avatar></TableCell>
                    <TableCell><Typography>{ojb.name}</Typography></TableCell>
                    <TableCell><IconButton onClick={()=>kba(ojb.name)}><CallSharp /></IconButton></TableCell>
                    <TableCell><IconButton><Videocam /></IconButton></TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <Divider />
        <List>
            <ListItem>
       <ListItemIcon>{ojb.icon}</ListItemIcon>
       <ListItemText>{ojb.date}, {ojb.time}</ListItemText>
            </ListItem>
        </List>
       </div> }
       {abk&&<div>
        <AppBar position="static">
            End-to-end encrypted
            <Toolbar>
                <IconButton><KeyboardArrowDown /></IconButton>
                <Typography>{bgc}</Typography>
            </Toolbar>
            Calling
        </AppBar>
        <Fab onClick={bank} className={classes.fab} color="secondary" aria-label="Call End">
  <CallEnd />
</Fab>
<IconButton className={classes.up}><VolumeUp /></IconButton>
<IconButton className={classes.dis} disabled><Videocam /></IconButton>
<IconButton className={classes.mut}><VolumeMute /></IconButton>
    </div>}
    </div>
)
}
export default Calll