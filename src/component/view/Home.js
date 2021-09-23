import React from 'react';
import Nav from '../Nav';
import Main from '../Main';

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
