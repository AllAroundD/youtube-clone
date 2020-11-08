import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';


function Header() {

      return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img 
                    className="header__logo"
                    // src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                    src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" 
                    alt="" 
                />
                {/* Country Code i.e. CA */}
            </div>
            <div className="header__input">
                <input placeholder="Search" type="text"/>
                <Tooltip title="Search">
                    <SearchIcon className="header__inputButton" />
                </Tooltip>
            </div>
            <div className="header__icons">
               <Tooltip title="Create">
                    <VideoCallIcon className="header__icon" />
                    </Tooltip>
                <Tooltip title="YouTube Apps">
                    <AppsIcon className="header__icon" />
                    </Tooltip>
                <Tooltip title="Notifications">
                   <NotificationsIcon className="header__icon" />
                   </Tooltip>
                <Avatar alt="Doug Moore" src="/static/images/avatar/3.jpg" />
            </div>
        </div>
    )
}

export default Header
