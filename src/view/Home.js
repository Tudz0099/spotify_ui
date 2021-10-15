import React, {useContext, useState, useEffect} from 'react';
import { apiUrl } from '../component/context/constants';
import Images from '../component/share/Img';
import Nav from '../component/screen/Nav';
import Main from '../component/Main';
import { PlayAudioContext } from '../component/context/PlayContext';
import ReactAudioPlayer from 'react-audio-player';
import {ReactComponent as Control} from '../component/share/icons/control.svg';


export default function Home() {
  const { audioPlay: {audio, title, singer} } = useContext(PlayAudioContext)
  const [audioFile, setAudioFile] = useState();
  const [titleDetail, setTitleDetail] = useState()
  const [singerDetail, setSingerDetail] = useState()

  useEffect(() => {setAudioFile(audio)}, [audio])
  useEffect(() => {setTitleDetail(title)}, [title])
  useEffect(() => {setSingerDetail(singer)}, [singer])

    return ( 
        <div className="outerWrap"> 
        <div className = "App">
          <Nav/>
          <Main/>
        </div>
        <div className="musicControls">
          <div className="play_detail d_flex">
            <img
              src = {Images.MUSIC_DISC}
              alt = ''
            />
            <div className="box_detail d_flex">
              <div className="detail_title">{titleDetail}</div>
              <div className="detail_singer">{singerDetail}</div>
            </div>
          </div>
          <ReactAudioPlayer
            src={apiUrl + audioFile}
            autoPlay
            controls
          />
          <Control/>
        </div>
      </div>
    )
}
