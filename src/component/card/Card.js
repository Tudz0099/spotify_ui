import React from 'react';
import Images from '../share/Img';
import {ReactComponent as PlayIcon} from '../share/icons/play.svg'

export default function Card({title, description}) {
    return (
        <div className="card">
            <div className="cardImage">
                <img 
                    src ={Images.PHOTO_1}
                    alt = "images"
                />
            </div>
            <div className="cardContent">
                <h3 className="text_wrap">Liked song</h3>
                <p className="description text_wrap">Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.i bạn nghe nhiều hơn.i bạn nghe nhiều hơn.</p>
            </div>
            <span className="playIcon"><PlayIcon/></span>
        </div>
    )
}
