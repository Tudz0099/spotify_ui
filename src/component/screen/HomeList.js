import React, { useContext, useEffect, useState, useRef } from 'react';
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
    const mainInnerRef = useRef();
    const { 
        audioState: { audios, audiosLoading },
            getAllAudio
        } = useContext(AudioContext)

    const [allAudio, setAllAudio] = useState();
    const [loadAudio, setLoadAudio] = useState(false)
    const [limiter, setLimiter] = useState(0)

    useEffect(() => getAllAudio()
        .then((data) => {
            setAllAudio(data.audios)
            setLoadAudio(true)
        })
        .catch((err) => {
            console.log(err.message)
        }) 
    , [])

    useEffect (() => {
        const handleWindowResize = () => {
            const calculation = 
                Math.floor(mainInnerRef.current.getBoundingClientRect().width / 190); 

            setLimiter(calculation)
        }

        handleWindowResize()

        //add event listener
        window.addEventListener('resize', handleWindowResize)

        // remove event listener
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

        const date = new Date();
        const h = date.getHours();
        let session = h < 12 ? 'Chào buổi sáng' : 'Chào buổi chiều'
        

    return (
        <div className = "pr_30" ref={mainInnerRef}>
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
                            allAudio.map(item => (
                                <div key={item._id}>                         
                                    <Card
                                        title = {item.title}
                                        id= {item._id}
                                        description= {item.description}/>
                                </div>
                            )).slice(0, limiter)
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
                            allAudio.map(item => (
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
