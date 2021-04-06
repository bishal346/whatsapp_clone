import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import {Toolbar,Grid,TextareaAutosize,IconButton,TextField,Menu,MenuList,MenuItem} from '@material-ui/core'
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {WhatsApp, Home,Search,MoreVert} from '@material-ui/icons'
import Chatt from './Chat'
import Status from './Status'
import Calll from './Call'
//import P1 from './P1'
//import P2 from './P2'
//import P21 from './P21'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  },
  grow: {
    flexGrow: 1,
  },
  form: {
    position: 'fixed',
    top: theme.spacing(0),
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const[search,setSearch] = useState(false)
  const[word,setWord] = useState("")
  const[bar,setBar] = useState(false)
  /*const setbar = () => {
    bar = true
  }*/
  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Toolbar>
              <Typography><WhatsApp /> WhatsApp</Typography>
              <IconButton onClick={()=>setSearch(!search)}>
                            <Search />
                        </IconButton>
                        {search&&
                        <React.Fragment><TextField onChange={e=>setWord(e.target.value)}></TextField>
                          
                          </React.Fragment>
                        }
                   <IconButton onClick={()=>setBar(!bar)}><MoreVert></MoreVert></IconButton>
                   <Menu
                     keepMounted
                     open={bar}
                     onClose={()=>setBar(false)}
                     
                   >
                   <MenuItem onClick={()=>setBar(false)}>New group</MenuItem>
                   <MenuItem onClick={()=>setBar(false)}>New broadcast</MenuItem>
                   <MenuItem onClick={()=>setBar(false)}>WhatsApp Web</MenuItem>
                   <MenuItem onClick={()=>setBar(false)}>Starred message</MenuItem>
                   <MenuItem onClick={()=>setBar(false)}>Status Privacy</MenuItem>
                   <MenuItem onClick={()=>setBar(false)}>Clear call log</MenuItem>
                   <MenuItem onClick={()=>setBar(false)}>Settings</MenuItem>
                   
                   </Menu>
          </Toolbar>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Chat" {...a11yProps(0)} />
          <Tab label="Status" {...a11yProps(1)} />
          
          <Tab label="Calls" {...a11yProps(2)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Chatt name={word} bol={bar} />
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        <Status name={word} bol={bar} />
      </TabPanel>
     
      <TabPanel value={value} index={2}>
        <Calll name={word} bol={bar} />
  </TabPanel>
  
    </div>
  );
}