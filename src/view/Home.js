import React, {useContext} from 'react';
import Nav from '../component/screen/Nav';
import Main from '../component/Main';
import { PlayAudioContext } from '../component/context/PlayContext';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';


const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
  },
  '&:after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    transform: 'rotate(30deg)',
  },
});

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backdropFilter: 'blur(40px)',
}));


const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function Home() {
  const { audioPlay: {audio} } = useContext(PlayAudioContext)

  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
 
    return ( 
        <div className="outerWrap">
        <div className = "App">
          <Nav/>
          <Main/>
        </div>
        <div className="musicControls">
            <Box sx={{ width: '100%',height: '100%', overflow: 'hidden' }}>
              <Widget className="play">
                <Slider
                  aria-label="time-indicator"
                  size="small"
                  value={position}
                  min={0}
                  step={1}
                  max={duration}
                  onChange={(_, value) => setPosition(value)}
                  sx={{
                    color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                    height: 4,
                    '& .MuiSlider-thumb': {
                      width: 8,
                      height: 8,
                      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                      '&:before': {
                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                      },
                      '&:hover, &.Mui-focusVisible': {
                        boxShadow: `0px 0px 0px 8px ${
                          theme.palette.mode === 'dark'
                            ? 'rgb(255 255 255 / 16%)'
                            : 'rgb(0 0 0 / 16%)'
                        }`,
                      },
                      '&.Mui-active': {
                        width: 20,
                        height: 20,
                      },
                    },
                    '& .MuiSlider-rail': {
                      opacity: 0.28,
                    },
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: -2,
                  }}
                >
                  <TinyText>{formatDuration(position)}</TinyText>
                  <TinyText>-{formatDuration(duration - position)}</TinyText>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: -1,
                  }}
                >
                  <IconButton aria-label="previous song">
                    <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
                  </IconButton>
                  <IconButton
                    aria-label={paused ? 'play' : 'pause'}
                    onClick={() => setPaused(!paused)}
                  >
                    {paused ? (
                      <PlayArrowRounded
                        sx={{ fontSize: '3rem' }}
                        htmlColor={mainIconColor}
                      />
                    ) : (
                      <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
                    )}
                  </IconButton>
                  <IconButton aria-label="next song">
                    <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
                  </IconButton>
                </Box>
            </Widget>
          <WallPaper />
        </Box>
        </div>
      </div>
    )
}
