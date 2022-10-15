import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import {Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {SearchOutlined} from "@mui/icons-material";
import SidebarChat from './SidebarChat';
import firebase from './Firebase';


function Sidebar() {
    const [rooms, setRooms] = useState([]);
    
    useEffect (() => {
        firebase.collection("rooms").onSnapshot(snapshot =>
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
               }))
            )
        );
    }, []);


  return (
    <div className="sidebar">
        <div className="sidebar__header">
            <Avatar/>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
            <SearchOutlined/>
            <input placeholder="search or start new channel" type="text"></input>
            </div>
        </div>
        <div className="sidebar__chats">
            <SidebarChat addNewChat/>
            {rooms.map(room => (
                <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
            ))}
            
        </div>
    </div>
  );
}

export default Sidebar