import React, { useRef, useState } from 'react';
import Header from './components/header/header';
import Library from './components/library-music/library';
import ListMusic from './components/list-music/list-music';
import MusicData from './components/music-data/music-data';
import data from './data/data';

const App = () => {
    // Ref
    const audioRef = useRef(null);
    // endRef

    // State
    const [randomPlay, setRandomPlay] = useState(false);
    const [term, setTerm] = useState("");
    const [toggleLibrary, setToggleLibrary] = useState(false);
    const [togglePlayer, setTogglePlayer] = useState(true);
    const [songs, setSongs] = useState(data());
    const [songDetails, setSongDetails] = useState({
        currentTime: 0,
        duration: 0,
        progress: 0,
    });
    const [isPlay, setIsPlay] = useState(false);
    const [currentSong, setCurrenSong] = useState(songs[0]);
    // endState

    // Handlers
    const timeHandler = (e) => {
        const current = Math.round(e.target.currentTime);
        const duration = Math.round(e.target.duration);
        const progress = Math.round((current / duration) * 100);
        setSongDetails({
            ...songDetails,
            currentTime: current,
            duration: duration,
            progress: progress
        });
    };

    const onSearch = (term) => {
        setTerm(term)
    }

    const search = (songs, term) => {
        if (term.length === 0) {
            return songs;
        };

        return songs.filter((song) => {
            return song.music.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max - min);
        return Math.floor(rand);
    }

    const songEndHandler = async () => {
        if (currentSong.repeat) {
            let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
            console.log(currentIndex);
            await setCurrenSong(songs[currentIndex]);
            if (isPlay) audioRef.current.play();
        } else if (randomPlay) {
            await setCurrenSong(songs[randomInteger(0, songs.length)]);
            if (isPlay) audioRef.current.play();
        } else {
            let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
            await setCurrenSong(songs[(currentIndex + 1) % songs.length]);
            if (isPlay) audioRef.current.play();
        }
    };
    // Endhandlers

    const visibleSongs = search(songs, term);

    return (
        <div className="responsive-wrapper">
            <div className={togglePlayer ? "responsive-player" : "responsive-player hide"}>
                <Header
                    setTogglePlayer={setTogglePlayer}
                    togglePlayer={togglePlayer}
                    setToggleLibrary={setToggleLibrary}
                    toggleLibrary={toggleLibrary}
                />
                <ListMusic
                    currentSong={currentSong}
                    songs={songs}
                />
                <MusicData
                    randomPlay={randomPlay}
                    setRandomPlay={setRandomPlay}
                    setCurrenSong={setCurrenSong}
                    setSongs={setSongs}
                    currentSong={currentSong}
                    setSongDetails={setSongDetails}
                    songDetails={songDetails}
                    audioRef={audioRef}
                    isPlay={isPlay}
                    setIsPlay={setIsPlay}
                    songs={songs}
                />
            </div>
            <audio
                onEnded={songEndHandler}
                onLoadedMetadata={timeHandler}
                onTimeUpdate={timeHandler}
                ref={audioRef}
                src={currentSong.url}>
            </audio>
            <Library
                setTerm={setTerm}
                term={term}
                onSearch={onSearch}
                setIsPlay={setIsPlay}
                setSongs={setSongs}
                audioRef={audioRef}
                setCurrenSong={setCurrenSong}
                songs={visibleSongs}
                isPlay={isPlay}
                currentSong={currentSong}
                setTogglePlayer={setTogglePlayer}
                togglePlayer={togglePlayer}
                setToggleLibrary={setToggleLibrary}
                toggleLibrary={toggleLibrary}
            />
        </div>
    );
};

export default App;
