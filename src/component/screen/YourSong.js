import React, {useContext, useEffect, useState} from 'react'
import {apiUrl} from '../context/constants'
import { AuthContext } from '../context/AuthContext';
import { AudioContext } from '../context/AudioContext';
import Images from '../share/Img';
import ListAudio from '../card/ListAudio';
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress} from '@material-ui/core';
import {ReactComponent as Play} from '../share/icons/play.svg';


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

export default function YourSong() {
    const classes = useStyles();
    const {authState: {user: {fullName, _id, avatar}}} = useContext(AuthContext)
    const { AudioByUser } = useContext(AudioContext)

    const [listAudio, setListAudio] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => AudioByUser(_id)
    .then((data) => {
        setListAudio(data.audio)
        setLoading(false)
    })
    .catch((err) => {
        console.log(err.message)
    }) 
, [])

    return (
        <div className="playlist">
            <div className="playlist_cover">
                <div className="playlist_banner">
                    <div>
                        <img
                            src= {{avatar} ? `${apiUrl}${avatar}` : Images.AVT_NONE} 
                            alt={fullName}
                        />
                    </div>
                    <div className="banner_content">
                        <span className="banner_content_size">PLAYLIST</span>
                        <h1>Bài hát của bạn</h1>
                        <ul className="d_flex like_quantity">
                            <li className="banner_content_size">{fullName}</li>
                            <li className="banner_content_size">
                            {loading ? (
                            <div className={classes.root}>
                                <CircularProgress />
                            </div>
                            ) : (
                                <div>{listAudio.length} bài hát</div>
                            )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="playlist_inner">
                    <div className="icon_play">
                        <Play className="playIcon_style"/>
                    </div>
                    {loading ? (
                            <div className={classes.root}>
                            <CircularProgress />
                       </div>
                        ) : (
                            listAudio.length !== 0 ? (
                                listAudio.map(item => (
                                    <div key={item._id}>                         
                                        <ListAudio 
                                            title = {item.title}
                                            id= {item._id}
                                            singer= {item.singer}/>
                                    </div>
                                ))
                                ) : (
                                    <div>You haven't posted any songs yet</div>
                                )
                        )}
                    <ListAudio/>
                </div>
            </div>
        </div>
    )
}
