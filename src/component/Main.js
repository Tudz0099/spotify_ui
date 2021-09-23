import React, {useContext} from 'react';
import Images from './share/Img';
import UnopDropdown from "unop-react-dropdown";
import {ReactComponent as ArrLeft} from './share/icons/arr_left.svg';
import {ReactComponent as ArrRight} from './share/icons/arr_right.svg';
import {ReactComponent as ArrDrop} from './share/icons/arr_drop.svg';
import Card from './card/Card';
import { AuthContext } from './context/AuthContext';

export default function Main() {

    const {authState: {user: {fullName}},
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
                        <img src={Images.PHOTO_1}
                            alt="avatar"
                        />
                    </figure>
                    <span>{fullName}</span>
                    <ArrDrop/>
                    </button>
                }>
                    <ul className= "drop_item">
                        <li>Tài khoản</li>
                        <li>Hồ sơ</li>
                        <li onClick={logout}>Đăng xuất</li>
                    </ul>
                </UnopDropdown>
            </div>
            <div className="mainContent">
                <div className="cardsWrap">
                    <h2>Dành cho bạn</h2>
                    <p className="description">Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.</p>
                    <div className="cardWrapInner">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>    
                </div>
                <div className="cardsWrap">
                    <h2>Dành cho bạn</h2>
                    <p className="description">Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.</p>
                    <div className="cardWrapInner">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>    
                </div>
                <div className="cardsWrap">
                    <h2>Dành cho bạn</h2>
                    <p className="description">Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.</p>
                    <div className="cardWrapInner">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>    
                </div>
            </div>
        </div>
    )
}
