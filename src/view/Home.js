import React, {useContext, useState, useEffect} from 'react';
import { apiUrl } from '../component/context/constants';
import Nav from '../component/screen/Nav';
import Main from '../component/Main';
import { PlayAudioContext } from '../component/context/PlayContext';
import Grid from '@material-ui/core/Grid';
import pink from "@material-ui/core/colors/pink";
import deepPurple from "@material-ui/core/colors/deepPurple";
import { createTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";  
import { AudioPlayer } from 'mui-audio-player';
import { green } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
      type: 'dark',
      primary:green,
      secondary: green
  }
});

export default function Home() {
  const { audioPlay: {audio} } = useContext(PlayAudioContext)
  const [audioFile, setAudioFile] = useState();

  useEffect(() => {setAudioFile(audio)}, [audio])
  console.log(audioFile)
 
    return ( 
        <div className="outerWrap">
        <div className = "App">
          <Nav/>
          <Main/>
        </div>
        <div className="musicControls">
        <ThemeProvider >
                <Grid justify="center"  alignContent="center" alignItems="center" container style={{maxWidth: "400px"}}>
                        <AudioPlayer 
                            src={apiUrl + audioFile}
                            autoPlay={true}
                            rounded={true}
                            elevation={1}
                            width="100%"
                        />
                </Grid>
            </ThemeProvider>
        </div>
      </div>
    )
}
