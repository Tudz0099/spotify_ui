import React from 'react';
import Images from "./share/Img";
import {ReactComponent as HomeIcon} from './share/icons/home.svg'
import {ReactComponent as SearchIcon} from './share/icons/search.svg'
import {ReactComponent as LibraryIcon} from './share/icons/library.svg'
import {ReactComponent as PlayList} from './share/icons/playlist.svg'
import {ReactComponent as Like} from './share/icons/like.svg'



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
                    <li className="active">
                        <HomeIcon/>
                        Trang chủ
                    </li>
                    <li>
                        <SearchIcon/>
                        Tìm kiếm
                    </li>
                    <li>
                        <LibraryIcon/>
                        Thư viện
                    </li>
                </ul>
                
                <ul className = "nav_list">
                    <li>
                        <PlayList/>
                        Tạo playlist
                    </li>
                    <li>
                        <Like/>
                        Bài hát đã thích
                    </li>
                </ul>
               
                <div className="cookies">
                    <span>Cookies</span>
                    <span>Privacy Policy</span>
                </div>
         </div>
    )
}
