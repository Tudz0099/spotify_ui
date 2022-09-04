import React, { useContext, useEffect, useState, useRef } from 'react';
import Card from '../card/Card';
import Horizontal from '../card/Horizontal';
import { AudioContext } from '../context/AudioContext';
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress} from '@material-ui/core';
import { Category } from '@mui/icons-material';


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

export default function HomeList() {
    const classes = useStyles();
    const mainInnerRef = useRef();
    const { 
        audioState: { audios, audiosLoading },
            getAllAudio, AudioByCateGory
        } = useContext(AudioContext)

    const [allAudio, setAllAudio] = useState();
    const [randomAudio, setRandomAudio] = useState();
    const [Electronic, setElectronic] = useState();
    const [loadAudio, setLoadAudio] = useState(false)
    const [loadElectronic, setLoadElectronic] = useState(false)
    const [limiter, setLimiter] = useState(0)

    // get all audio
    useEffect(() => getAllAudio()
        .then((data) => {
            const audio = data.audios
            const random = audio[Math.floor(Math.random() * audio.length)];
            setAllAudio(audio)
            setRandomAudio(random)
            setLoadAudio(true)
        })
        .catch((err) => {
            console.log(err.message)
        })
    , [])

    // get audio by category
    useEffect(() => AudioByCateGory("Electronic")
        .then((data) => {
            setElectronic(data.audio)
            setLoadElectronic(true)
        })  
        .catch((err) => {
            console.log(err.message)
        })  
    , []) 

     
    // responsive
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


    // time
    const date = new Date();
    const h = date.getHours();
    let session = h < 12 ? 'Chào buổi sáng' : 'Chào buổi chiều'
        
    return (
        <div className = "pr_30" ref={mainInnerRef}>
                <div className="cardsWrap">
                    <h1 >{session}</h1>
                    <div className="cardWrapInner">
                        {loadAudio ? (  
                                <div>                         
                                    <Horizontal id= {randomAudio?._id}/>
                                </div>

                        ):(
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
                    <h2>Nhạc điện tử</h2>
                    <p className="description">Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.</p>
                    <div className="cardWrapInner">
                        {loadElectronic ? (
                            Electronic.map(item => (
                                <div key={item._id}>                         
                                    <Card title = {item.title}
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
        </div>
    )
}
