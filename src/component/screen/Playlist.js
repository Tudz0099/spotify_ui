import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { PlayAudioContext } from '../context/PlayContext'
import { AudioContext } from '../context/AudioContext';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Images from '../share/Img';
import ListAudio from '../card/ListAudio';
import {ReactComponent as LikeIcon} from '../share/icons/like_icon.svg';
import {ReactComponent as More} from '../share/icons/more_icon.svg';
import {ReactComponent as Play} from '../share/icons/play.svg';
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

export default function PlayList() {
    const classes = useStyles();
    const audioId = useParams();

    const { GetDataAudio } = useContext(PlayAudioContext)
    const { audioState: {audios} } = useContext(AudioContext)

    const [audio, setAudio] = useState();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => GetDataAudio(audioId)
        .then((data) => {
            setAudio(data)
            setIsLoading(false)
        })    
        , [audioId])
    return (
        <div className="playlist">
            {isLoading ? (
                <div className={classes.root}>
                    <CircularProgress />
                </div>
            ):(
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
                        <h1>{audio.title}</h1>
                        <li className="banner_content_size">{audio.singer}</li>
                    </div>
                </div>
                <div className="playlist_inner">
                    <div className="icon_play">
                        <Play className="playIcon_style"/>
                        <LikeIcon/>                
                        <Popup trigger={<More/>} position="right center">
                            <div className="more_change_img">
                                <label>Đặt hình ảnh</label>
                                <input type="file" />
                            </div>
                        </Popup>
                    </div>
                      {audios.map(item => (
                                <div key={item._id}>                         
                                    <ListAudio 
                                          title = {item.title}
                                          id= {item._id}
                                          singer= {item.singer}/>
                                </div>
                            ))}
                    <div className="end_list">
                        <span>© 2000 Atlantic Record Corporation for the United States and WEA International Inc. for the world outside of the United States</span>
                        <span>℗ 2000 Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States.</span>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}
