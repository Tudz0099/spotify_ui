import React from 'react';
import Images from '../share/Img';
import {ReactComponent as LikeIcon} from '../share/icons/like_icon.svg';
import {ReactComponent as More} from '../share/icons/more_icon.svg';
import {ReactComponent as Play} from '../share/icons/play.svg';

export default function PlayList() {
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
                        <span className="banner_content_size">Đĩa Đơn</span>
                        <h1>Điêu Toa</h1>
                        <li className="banner_content_size">Masew</li>
                    </div>
                </div>
                <div className="playlist_inner">
                    <div className="icon_play">
                        <Play className="playIcon_style"/>
                        <LikeIcon/>
                        <More/>
                    </div>
                    <div className="playlist_list">
                        <ul>
                            <li>
                                <span></span>
                                <div className="song_detail">
                                    <h3>Điêu Toa</h3>
                                    <span>Masew</span>
                                </div>
                                <div className="song_time">
                                    <span>4:00</span>
                                </div>
                            </li>
                            <li>
                                <div className="song_detail">
                                    <h3>Điêu Toa</h3>
                                    <span>Masew</span>
                                </div>
                                <div className="song_time">
                                    <span>4:00</span>
                                </div>
                            </li>
                            <li>
                                <div className="song_detail">
                                    <h3>Điêu Toa</h3>
                                    <span>Masew</span>
                                </div>
                                <div className="song_time">
                                    <span>4:00</span>
                                </div>
                            </li>
                            <li>
                                <div className="song_detail">
                                    <h3>Điêu Toa</h3>
                                    <span>Masew</span>
                                </div>
                                <div className="song_time">
                                    <span>4:00</span>
                                </div>
                            </li>
                            <li>
                                <div className="song_detail">
                                    <h3>Điêu Toa</h3>
                                    <span>Masew</span>
                                </div>
                                <div className="song_time">
                                    <span>4:00</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="end_list">
                        <span>© 2000 Atlantic Record Corporation for the United States and WEA International Inc. for the world outside of the United States</span>
                        <span>℗ 2000 Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
