import React, {useContext} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { apiUrl } from './context/constants';
import UnopDropdown from "unop-react-dropdown";
import {ReactComponent as ArrLeft} from './share/icons/arr_left.svg';
import {ReactComponent as ArrRight} from './share/icons/arr_right.svg';
import {ReactComponent as ArrDrop} from './share/icons/arr_drop.svg';
import { AuthContext } from './context/AuthContext';
import HomeList from './screen/HomeList';
import Profile from './screen/Profile';
import Library from './screen/Library';
import Like from './screen/Like';
import Search from './screen/Search';
import PlayList from './screen/Playlist';


export default function Main() {

    const {authState: {user: {fullName, avatar, _id}},
    logoutUser
    } = useContext(AuthContext)

    const logout = () => {
        logoutUser()
    }

    
    return (
        <div className="main">
            <div className="upperMain ">
                <div className="upper_arr">
                    <button>
                        <ArrLeft/>
                    </button>
                    <button>
                        <ArrRight/>
                    </button>
                </div>
                <UnopDropdown trigger={
                    <button className = "btn_drop">
                        <figure>
                        <img src= {apiUrl + avatar}
                            alt="avatar"
                        />
                    </figure>
                    <span>{fullName}</span>
                    <ArrDrop/>
                    </button>
                }>
                    <ul className= "drop_item">
                        <li className = "li_profile">Tài khoản</li>
                        <Link to={"/profile/"+_id}  style={{ textDecoration: 'none' }}>
                            <li className = "li_profile">Hồ sơ</li>
                        </Link> 
                        <li className = "li_profile"
                       onClick={logout}
                        >Đăng xuất</li>
                    </ul>
                </UnopDropdown>
            </div>
            <div className="mainContent">
                <Switch>
                    <Route path='/home' exact component={HomeList}/>
                    <Route path='/profile/:userId' component={Profile}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/like' component={Like}/>
                    <Route path='/library' component={Library}/>
                    <Route path='/playlist' component={PlayList}/>
                </Switch>
            </div>
        </div>
    )
}
