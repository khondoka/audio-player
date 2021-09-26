import React from 'react';
import AdditionalControls from './controls/additional-controls';
import ControllArrows from './controls/controls-arrows';
import CurrentProgress from './controls/current-progress';

const ControllBars = ({ audioRef, setIsPlay, isPlay, songDetails, setSongDetails, songs, setSongs, currentSong, setCurrenSong, setRandomPlay, randomPlay }) => {
    return (
        <div className="controll-bar">
            <CurrentProgress
                songDetails={songDetails}
                audioRef={audioRef}
                setSongDetails={setSongDetails}
            />
            <ControllArrows
                setCurrenSong={setCurrenSong}
                currentSong={currentSong}
                setSongs={setSongs}
                songs={songs}
                audioRef={audioRef}
                isPlay={isPlay}
                setIsPlay={setIsPlay}
            />
            <AdditionalControls
                randomPlay={randomPlay}
                setRandomPlay={setRandomPlay}
                setCurrenSong={setCurrenSong}
                currentSong={currentSong}
                setSongs={setSongs}
                songs={songs}
            />
        </div>
    );
};

export default ControllBars;