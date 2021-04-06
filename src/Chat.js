import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table,IconButton,Grid,TextareaAutosize,AppBar,Toolbar,TableBody,TableCell,Menu,MenuList,MenuItem,TableContainer,TableHead,Tooltip,TableRow,Paper,Avatar,Fab,List,ListItem,ListItemText,ListItemIcon, Typography} from '@material-ui/core';
import {AccountCircle,AttachFile,Send,CameraAlt,Videocam,CallSharp,MoreVert,Chat,ArrowBack} from '@material-ui/icons'
import Chame from './Chame'

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
     /* fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      form: {
          position: 'fixed',
          bottom: theme.spacing(40),
          right: theme.spacing(30),
        },*/
        iny: {
          position: 'fixed',
          bottom: theme.spacing(1),
          right: theme.spacing(160),
        },
        sey: {
            position: 'fixed',
            bottom: theme.spacing(1),
            right: theme.spacing(100),
          },
          inhe: {
            position: 'fixed',
            bottom: theme.spacing(1),
            right: theme.spacing(60),
          },
          sehe: {
              position: 'fixed',
              bottom: theme.spacing(1),
              right: theme.spacing(2),
            },
          ycam: {
              position: 'fixed',
              bottom: theme.spacing(1),
              right: theme.spacing(130),
          },
          yat: {
              position: 'fixed',
              bottom: theme.spacing(1),
              right: theme.spacing(120),
          },
          hecam: {
              position: 'fixed',
              bottom: theme.spacing(1),
              right: theme.spacing(22),
          },
          heat: {
              position: 'fixed',
              bottom: theme.spacing(1),
              right: theme.spacing(32),
          },
          ib : {
              background_colors:"primary"
          }
  }));
function Chatt(props) {
    const classes = useStyles();
    const[message,setMessage] = useState([
        /*{
            messa:"Hi",
            xs:0,
            sx:2
        },
        {
           messa:"Hello",
           xs:2,
           sx:0
       },
       {
           messa:"How your studies are going in the lockdown",
           xs:2,
           sx:0
       },
       {
           messa:"Sir nice",
           xs:0,
           sx:2
       }*/
    ])
    const mesb = message
    const[obj,setObj] = useState({
        messa:"",
        xs:0,
        sx:0
    })
    const[ob,setOb] = useState({
       messa:"",
       xs:0,
       sx:0
   })
    const I = () => {
        setObj({...obj,xs:0,sx:2})
        setMessage([...message,obj])
    }
    const He = () => {
       setOb({...ob,xs:2,sx:0})
       setMessage([...message,ob])
   }
const chat = [
    {name :"Ma",
     number :"9495761918",
     date : "16/04/2020",
     time : "10:00",
     message : "hey there I am using Watsapp"
    },
    {name :"Baba",
     number :"9832415631",
     date : "13/04/2020",
     time : "10:30",
     message : "hey there I am using Watsapp"
    },
    {name :"Dadabhai",
     number :"9478563850",
     date : "16/10/2019",
     time : "13:00",
     message : "My foreign number +341 864835"
    },
    {name :"Masi",
     number :"9475657988",
     date : "14/06/2018",
     time : "12:00",
     message : "hey there I am using Watsapp"
    },
    {name :"Sourav",
     number :"9875649348",
     date : "16/04/2016",
     time : "20:50",
     message : "Love is my life"
    },
    {name : "Kusol",
     number :"9465748342",
     date : "19/04/2018",
     time : "10:00",
     message : "Gaming champion"
    },
    {name :"Surjodeep",
     number :"8954673821",
     date : "16/04/2020",
     time : "10:00",
     message : 'Always cazz'
    },
    {name :"Trinanjan",
     number :"9564739354",
     date : "16/08/2018",
     time : "10:00",
     message : "Hi myself Trinanjan"
    },
    {
     name:"Abhrojyoti",
     number :"7563547581",
     date : "30/08/2019",
     time : "11:20",
     message : "Coding is life"
    },
    {
     name:"Avijit",
     number :"7546357681",
     date : "30/10/2019",
     time : "12:20",
     message : "Great devotee of lord Krishna"
    },
    {
        name:"Saswati",
        number :"7567586581",
        date : "30/08/2020",
        time : "11:20",
        message : "My life my choise"
       },
       {
        name:"Moumita",
        number :"7567568581",
        date : "30/07/2019",
        time : "13:20",
        message : "Good"
       },
       {
        name:"Sona",
        number :"9086547581",
        date : "22/08/2019",
        time : "09:20",
        message : "Coding is life"
       },
       {
           name : "Romit",
           number : "8574890432",
           date : "21/01/2019",
           time :"21:30",
           message : "My friends are my life"
       }
]
const[pg,setPg] = useState(true)
const[hm,setHm] = useState(false)
const[na,setNa] = useState("")
const[ch,setCh] = useState(false)
function cham(name){
    setNa(name)
    setHm(!hm)
    setCh(!ch)
}
const git = () => {
    setCh(!ch)
    setHm(!hm)
    setMessage([mesb])
}
let bl = props.bol
const[bar,setBar] = useState(false)
const gelo=() => {
    setPg(!pg)
    setHm(!hm)

}
return (
    <div>
        
        {pg && <div><TableContainer>
            <Table>
                <TableHead></TableHead>
                <TableBody>
                    {chat.map(ch=> (
                        ch.name.toLowerCase().includes(props.name.toLowerCase())&&
                        <TableRow>
                            <TableCell><Avatar><AccountCircle></AccountCircle></Avatar></TableCell>
                            <TableCell>{ch.name}</TableCell>
                            <TableCell>{ch.date}</TableCell>
                            <TableCell>{ch.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Tooltip title="Chats">
        <Fab color="alert" aria-label="add" className={classes.fab} >
        <Chat onClick={gelo}/>
    </Fab></Tooltip></div>}
        {hm && <div><List>
            {chat.map(ch=> (
                ch.name.toLowerCase().includes(props.name.toLowerCase())&&
                <ListItem onClick={()=>cham(ch.name)} button >
                    <ListItemIcon><AccountCircle /></ListItemIcon>
                    <ListItemText>{ch.name}     </ListItemText>
                    <span><p>{ch.message}</p></span> 
                </ListItem>
            ))}
        </List>
        <Tooltip title="Go back !"><IconButton onClick={gelo}><ArrowBack /></IconButton></Tooltip>
        </div>}
        {ch && <div>
        <Grid container spacing={2} direction="row">
                <Grid item container xs={6}>
                   <AppBar position="static">
                       <Toolbar>
                            <IconButton onClick={git}>
                                <ArrowBack />
                            </IconButton>
                            <Avatar>
                                R
                            </Avatar>
                            <Typography>You</Typography>
                        </Toolbar>
                        <div>
                        <IconButton><Videocam /></IconButton>
                        <IconButton><CallSharp /></IconButton>
                        <IconButton><MoreVert /></IconButton>
                        </div>
                    </AppBar>
                    <Grid item container spacing={1} direction="column" >
                        {message.map(mes=>
                        <Grid item container>
                         <Grid item sm={1} />
                         <Grid item sm={mes.xs}/>
                        <Grid item sm={8}>
                            <Paper >{mes.messa}</Paper>
                         </Grid>
                         <Grid item sm={mes.sx}/>
                         <Grid item sm={1} />
                         <br/>
                         <br/>
                        </Grid>
                        )}
                    </Grid>
                    <TextareaAutosize onChange={e=>setObj({...obj,messa:e.target.value})} rowsMax={4} className={classes.iny}></TextareaAutosize>
                    <IconButton className={classes.ycam}><CameraAlt/></IconButton>
                    <IconButton className={classes.yat}><AttachFile /></IconButton>
                    <IconButton onClick={I} className={classes.sey} ><Send></Send></IconButton>
                </Grid>
                <Grid item container xs={6}>
                <AppBar position="static">
                       <Toolbar>
                            <IconButton onClick={git}>
                                <ArrowBack />
                            </IconButton>
                            <Avatar>
                                R
                            </Avatar>
                            <Typography>{na}</Typography>
                            </Toolbar>
                            <div>
                            <IconButton><Videocam /></IconButton>
                        <IconButton><CallSharp /></IconButton>
                        <IconButton><MoreVert /></IconButton>
                        </div>
                    </AppBar>
                    <Grid item container spacing={1} direction="column" >
                        {message.map(mes=>
                        <Grid item container>
                         <Grid item sm={1} />
                         <Grid item sm={mes.sx}/>
                        <Grid item sm={8}>
                            <Paper>{mes.messa}</Paper>
                         </Grid>
                         <Grid item sm={mes.xs}/>
                         <Grid item sm={1} />
                         <br/>
                         <br/>
                        </Grid>
                        )}
                    </Grid>
                    <TextareaAutosize onChange={e=>setOb({...ob,messa:e.target.value})} rowsMax={4} className={classes.inhe} ></TextareaAutosize>
                    <IconButton className={classes.hecam}><CameraAlt/></IconButton>
                    <IconButton className={classes.heat}><AttachFile /></IconButton>
                    <IconButton onClick={He} className={classes.sehe} ><Send></Send></IconButton>
                </Grid>
            </Grid>
        
    </div>}
    </div>
)
}
export default Chatt