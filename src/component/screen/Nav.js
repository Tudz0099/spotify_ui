import React from 'react';
import { Link } from 'react-router-dom';
import Images from "../share/Img";
import {ReactComponent as HomeIcon} from '../share/icons/home.svg'
import {ReactComponent as SearchIcon} from '../share/icons/search.svg'
import {ReactComponent as LibraryIcon} from '../share/icons/library.svg'
import {ReactComponent as PlayList} from '../share/icons/playlist.svg'
import {ReactComponent as Like} from '../share/icons/like.svg'



export default function Nav() {
    return (
         <div className="navBar">
              <div className="logo">
                    <img 
                    src ={Images.LOGO_LIGHT}
                    alt = ""
                    />
              </div>
                <ul>
                    <Link to="/" style={{ textDecoration: 'none' }}>  
                        <li className="active">
                            <HomeIcon/>
                            Trang chủ
                        </li>
                    </Link>
                    <Link to="/search" style={{ textDecoration: 'none' }}>
                        <li>
                            <SearchIcon/>
                            Tìm kiếm
                        </li>
                    </Link>
                    <Link to="/library" style={{ textDecoration: 'none' }}>
                        <li>
                            <LibraryIcon/>
                            Thư viện
                        </li>
                    </Link>
                </ul>
                
                <ul className = "nav_list">
                    <Link style={{ textDecoration: 'none' }}>
                        <li>
                            <PlayList/>
                            Tạo playlist
                        </li>
                    </Link>
                    <Link to="/like" style={{ textDecoration: 'none' }}>
                        <li>
                            <Like/>
                            Bài hát đã thích
                        </li>
                    </Link>
                </ul>
               
                <div className="cookies">
                    <span>Cookies</span>
                    <span>Privacy Policy</span>
                </div>
         </div>
    )
}
