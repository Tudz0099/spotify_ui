import React, { useContext, useEffect, useState } from 'react';
import Card from '../card/Card';
import Horizontal from '../card/Horizontal';
import { AudioContext } from '../context/AudioContext';
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

export default function HomeList() {
    const classes = useStyles();
    const { 
        audioState: { audios, audiosLoading },
            getAllAudio
        } = useContext(AudioContext)

    const [allAudio, setAllAudio] = useState();
    const [loadAudio, setLoadAudio] = useState(false)

    useEffect(() => getAllAudio()
        .then((data) => {
            setAllAudio(data.audios)
            setLoadAudio(true)
        })
        .catch((err) => {
            console.log(err.message)
        }) 
    , [])

        const date = new Date();
        const h = date.getHours();
        var session = ''
        if ( h < 4){
            session = "Hôm nay của bạn thế nào"
        } else if ( 4 <= h <= 12) {
            session = "Một ngày tràn năng lượng"
        } else if (13 <= h <= 18) {
            session = "Chào buổi chiều"
        } else if (h >= 19){
            session = "Thư giãn cuối ngày"
        }

    return (
        <div>
                <div className="cardsWrap">
                    <h1 >{session}</h1>
                    <div className="cardWrapInner">
                        <Horizontal/>
                    </div>    
                </div>
                <div className="cardsWrap">
                    <h2>Dành cho bạn</h2>
                    <p className="description">Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.</p>
                    <div className="cardWrapInner">
                        {loadAudio ? (
                            audios.map(item => (
                                <div key={item._id}>                         
                                    <Card title = {item.title}
                                          id= {item._id}
                                          description= {item.description}/>
                                </div>
                            ))
                        ) : (
                            <div className={classes.root}>
                                 <CircularProgress />
                            </div>
                        )}
                    </div>    
                </div>
                <div className="cardsWrap">
                    <h2>Dành cho bạn</h2>
                    <p className="description">Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.</p>
                    <div className="cardWrapInner">
                        {loadAudio ? (
                            audios.map(item => (
                                <div key={item._id}>                         
                                    <Card title = {item.title}
                                          id= {item._id}
                                          description= {item.description}/>
                                </div>
                            ))
                        ) : (
                            <div className={classes.root}>
                                 <CircularProgress />
                            </div>
                        )}
                    </div>    
                </div>
        </div>
    )
}
