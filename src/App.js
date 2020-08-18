import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase';

function App() {
  const [reels, setReels] = useState([]);
  
  useEffect(() => {
    //  App Component will run ONCE when it loads, and never again
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    )) 
  }, [])
  
  return (
    <div className="app">
      <div className="app__top"> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" className="app__logo"/>
        <h1>R_ee_ls</h1>
      </div>
      {/* image at the top logo     */}
      {/* Reels Text */}

      <div className="app__videos">
      {/* Container of app__videos(scrollable content) */}
      {reels.map(({channel, avatarSrc, song, url,likes, shares}) => (
      <VideoCard
      channel = {channel}
      avatarSrc = {avatarSrc}
      song = {song}
      url = {url}
      likes = {likes}
      shares = {shares}
      />
      ))}
      </div>    
    </div>
  );
}

export default App;
