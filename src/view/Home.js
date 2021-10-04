import React from 'react';
import Nav from '../component/screen/Nav';
import Main from '../component/Main';

export default function Home() {
 
    return (
        <div className="outerWrap">
        <div className = "App">
          <Nav/>
          <Main/>
        </div>
        <div className="musicControls">music control</div>
        </div>
    )
}
