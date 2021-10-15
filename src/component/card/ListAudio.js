import React from 'react'
import {Link} from 'react-router-dom'

export default function ListAudio(props) {
    return (
        <div >
            <Link to={'/playlist/'+props.id} style={{ textDecoration: 'none' }}>
                <ul className="playlist_list">
                    <li>
                        <div className="song_detail">
                            <h3>{props.title}</h3>
                            <span>{props.singer}</span>
                        </div>
                        <div className="song_time">
                            <span>4:00</span>
                        </div>
                    </li>             
                </ul>
            </Link>    
        </div>
    )
}
