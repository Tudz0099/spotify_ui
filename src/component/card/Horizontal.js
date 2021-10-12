import React from 'react'
import {Link} from 'react-router-dom'
import Images from '../share/Img'
import {ReactComponent as PlayIcon} from '../share/icons/play.svg'

export default function Horizontal() {
    return (
        <Link to={'/playlist'} style={{ textDecoration: 'none', color: "#616467" }}>
            <div className="horizontal d_flex">
                <div className="img_shadow image_size size">
                    <img 
                        src ={Images.PHOTO_1}
                        alt = "images"
                    />
                </div>
                <div className="horizontal_title d_flex">
                    <h3>Massew</h3>
                </div>
                <span className="playIcon_horizontal playIcon_style"> <PlayIcon className="icon_play"/> </span>
            </div>
        </Link>
    )
}
