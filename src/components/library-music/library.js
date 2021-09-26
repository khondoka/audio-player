import React from 'react';
import Activebar from './active-bar/active-bar';
import ListMusics from './list-music/list-music';
import Navigation from './navigation/navigation';
import SearchMusic from './search-music/search-music';

const Library = ({ toggleLibrary, setTogglePlayer, togglePlayer, setToggleLibrary, currentSong, isPlay, songs, setCurrenSong, audioRef, setSongs, setIsPlay, onSearch, term, setTerm }) => {

    const togglePlayerHandler = () => {
        setToggleLibrary(!toggleLibrary);
        setTogglePlayer(!togglePlayer);
    };

    return (
        <div className={toggleLibrary ? "responsive-library active" : "responsive-library"}>
            <div className="max-container">
                <div className="responsive-header">
                    <div onClick={togglePlayerHandler} className="arrow-back i-back"></div>
                    <div className="album-name-played">
                        <h1>Daily Mix</h1>
                    </div>
                    <div className="details-open i-details"></div>
                </div>
                <SearchMusic
                    onSearch={onSearch}
                    term={term}
                    setTerm={setTerm}
                />
                <ListMusics
                    audioRef={audioRef}
                    currentSong={currentSong}
                    isPlay={isPlay}
                    setCurrenSong={setCurrenSong}
                    songs={songs}
                    setSongs={setSongs}
                />
            </div>
            <Activebar
                setIsPlay={setIsPlay}
                songs={songs}
                setSongs={setSongs}
                audioRef={audioRef}
                currentSong={currentSong}
                isPlay={isPlay}
                setCurrenSong={setCurrenSong}
            />
            <Navigation />
        </div>
    );
};

export default Library;
