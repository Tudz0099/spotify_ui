import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext';
import { AudioContext } from '../context/AudioContext'
import Images from '../share/Img';
import ListAudio from '../card/ListAudio';
import {ReactComponent as Play} from '../share/icons/play.svg';
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

export default function Like() {
    const classes = useStyles();
    const {authState: {user: {fullName}}} = useContext(AuthContext)
    const {getLikeAudio} = useContext(AudioContext)

    const [audio, setAudio] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => { getLikeAudio()
        .then((data) => {
            setAudio(data.audio)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err.message)
        })
        ; }, []);

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
                            <li className="banner_content_size">
                            {loading ? (
                            <div className={classes.root}>
                                <CircularProgress />
                            </div>
                            ) : (
                                <div>{audio.length} bài hát</div>
                            )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="playlist_inner">
                    <div className="icon_play">
                        <Play className="playIcon_style"/>
                    </div>
                    { loading ? (
                         <div className={classes.root}>
                         <CircularProgress />
                     </div>
                    ):(
                         audio.map(item => (
                                <div key={item._id}>                         
                                    <ListAudio 
                                          title = {item.title}
                                          id= {item._id}
                                          singer= {item.singer}/>
                                </div>
                            ))
                    )
                   
                            }
                </div>
            </div>
        </div>
    )
}
