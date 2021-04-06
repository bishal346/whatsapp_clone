import React, { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {List,LinearProgress,AppBar,Toolbar,IconButton,ListItem,ListItemText,ListSubheader,ListItemAvatar,ListItemIcon,Typography,Avatar,Divider} from '@material-ui/core'
import {ArrowBack,AccountCircle} from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});
function Status({name}) {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

    const[recent,setRecent] =useState([
        {name : "Abhrojyoti",
         time : "10:00"
        },
        {name : "Avijit",
         time : "12:00"
        },
        {name : "Kusol",
         time : "11:58"
        },
        {name : "Trinanjan",
         time : "08:49"
        },
        {name : "Saswati",
         time : "09:00"
        },
        {name : "Sourav",
         time : "13:20"
        }
    ])
    const[viewed,setViewed] =useState([
        {name : "Moumita",
        time : "08:49"
       },
       {name : "Surjodeep",
        time : "09:00"
       },
       {name : "Sona",
        time : "13:20"
       }
    ])
    const muted ={name : "Romit",
    time : "11:22"
   }
   const[bis,setBis] = useState("")
   //const[hel,setHel]= useState(false)
   const[bela,setBela] = useState(false)
   const[tolta,setTolta] = useState(true)
function hi(index) {
       //setRecent(...recent,recent.splice(index,1))
       const hou =recent[index]
       setViewed([...viewed,hou])
       recent.splice(index,1)
       setBis(hou.name)
       setBela(!bela)
       setTolta(!tolta)
   }
function hib(name) {
      setBis(name)
      setBela(!bela)
      setTolta(!tolta)
}
const lota = () => {
  setBela(!bela)
  setTolta(!tolta)
}
return(
    <div>
     {tolta && <div>
        <List subheader={
        <ListSubheader component="div" >
          Recent Updates
        </ListSubheader>
        }
        >
          {recent.map(rec=> (
             rec.name.toLowerCase().includes(name.toLowerCase())&&
              <ListItem button onClick={()=>hi(recent.indexOf(rec))}>
                  <ListItemAvatar><Avatar>{rec.name.charAt(0).toUpperCase()}</Avatar></ListItemAvatar>
          <ListItemText>{rec.name}   </ListItemText>
          <span>{rec.time}</span>
              </ListItem>
          ))}
        </List>
        <List subheader={
        <ListSubheader component="div" >
          Viewed Updates
        </ListSubheader>
        }
        >
          {viewed.map(rec=> (
            rec.name.toLowerCase().includes(name.toLowerCase())&&
              <ListItem onClick={()=>hib(rec.name)} button>
                  <ListItemAvatar><Avatar>{rec.name.charAt(0).toUpperCase()}</Avatar></ListItemAvatar>
          <ListItemText>{rec.name}   </ListItemText>
          <span>{rec.time}</span>
              </ListItem>
          ))}
        </List>
        <List subheader={
        <ListSubheader component="div" >
          Muted Updates
        </ListSubheader>
        }
        >
            {muted.name.toLowerCase().includes(name.toLowerCase())&&<ListItem onClick={()=>hib(muted.name)} button >
                  <ListItemAvatar><Avatar>{muted.name.charAt(0).toUpperCase()}</Avatar></ListItemAvatar>
          <ListItemText>{muted.name}   </ListItemText>
          <span>{muted.time}</span>
              </ListItem>}
        </List>
        </div>}
        {bela && <div className={classes.root} >
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={lota}><ArrowBack/></IconButton>
                <Avatar><AccountCircle /></Avatar>
                <Typography>{bis} Status</Typography>
            </Toolbar>
        </AppBar>
        <br/>
    <LinearProgress variant="determinate" value={progress} />
    </div>}
    </div>
)
}
export default Status