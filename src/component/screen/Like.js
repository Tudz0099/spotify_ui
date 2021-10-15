import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import Images from '../share/Img';
import ListAudio from '../card/ListAudio';
import {ReactComponent as Play} from '../share/icons/play.svg';


export default function Like() {
    const {authState: {user: {fullName}}} = useContext(AuthContext)
    return (
        <div className="playlist">
            <div className="playlist_cover">
                <div className="playlist_banner">
                    <div>
                        <img
                            src={Images.DIEU_TOA}
                            alt="dieutoa"
                        />
                    </div>
                    <div className="banner_content">
                        <span className="banner_content_size">PLAYLIST</span>
                        <h1>Bài hát đã thích</h1>
                        <ul className="d_flex like_quantity">
                            <li className="banner_content_size">{fullName}</li>
                            <li className="banner_content_size">7 bài hát</li>
                        </ul>
                    </div>
                </div>
                <div className="playlist_inner">
                    <div className="icon_play">
                        <Play className="playIcon_style"/>
                    </div>
                    <ListAudio/>
                </div>
            </div>
        </div>
    )
}
