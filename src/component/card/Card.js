import React from 'react';
import {Link} from 'react-router-dom'
import Images from '../share/Img';
import {ReactComponent as PlayIcon} from '../share/icons/play.svg'

export default function Card(props) {

    return (
        <Link to={'/playlist/'+props.id} style={{ textDecoration: 'none', color: "#616467" }}>
            <div className="card">
                <div className="cardImage img_shadow image_size">
                    <img 
                        src ={Images.MUSIC_DISC}
                        alt = "images"
                    />
                </div>
                <div className="cardContent">
                    <h3 className="text_wrap">{props.title}</h3>
                    <p className="description text_wrap">{props.description}</p>
                </div>
                <span className="playIcon playIcon_style"><PlayIcon className="icon_play"/></span>
            </div>
        </Link>
    )
}
