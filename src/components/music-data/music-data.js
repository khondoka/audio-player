import React from 'react';
import ControllBars from './controll-bar';

const MusicData = ({ audioRef, isPlay, setIsPlay, songDetails, setSongDetails, currentSong, songs, setSongs, setCurrenSong, setRandomPlay, randomPlay }) => {
    return (
        <div className="max-container">
            <div className="responsive-music-data">
                <div className="name-autor">
                    <div className="music-name">{currentSong.music}</div>
                    <div className="music-autor">{currentSong.author}</div>
                </div>
            </div>
            <ControllBars
                randomPlay={randomPlay}
                setRandomPlay={setRandomPlay}
                setCurrenSong={setCurrenSong}
                currentSong={currentSong}
                setSongs={setSongs}
                setSongDetails={setSongDetails}
                songs={songs}
                songDetails={songDetails}
                audioRef={audioRef}
                isPlay={isPlay}
                setIsPlay={setIsPlay}
            />
        </div>
    );
};

export default MusicData;
