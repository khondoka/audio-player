import React from 'react';

const ControllArrows = ({ audioRef, setIsPlay, isPlay, songs, setSongs, currentSong, setCurrenSong }) => {

    // Handlers
    const playHandler = () => {
        if (isPlay) {
            setIsPlay(!isPlay);
            audioRef.current.pause();
        } else {
            setIsPlay(!isPlay);
            audioRef.current.play();
        }
    }

    const actionSongHandler = async (action) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (action === "next") {
            await setCurrenSong(songs[(currentIndex + 1) % songs.length]);
            activeLibHandler(songs[(currentIndex + 1) % songs.length]);
        };
        if (action === "prev") {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrenSong(songs[songs.length - 1]);
                activeLibHandler(songs[songs.length - 1]);
                return;
            }
            await setCurrenSong(songs[(currentIndex - 1) % songs.length]);
            activeLibHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if (isPlay) audioRef.current.play();
    };

    // EndHandlers

    // Additional Functions
    const activeLibHandler = (action) => {
        const newSong = songs.map((song) => {
            if (song.id === action.id) {
                return {
                    ...song,
                    active: true
                };
            } else {
                return {
                    ...song,
                    active: false
                };
            };
        });
        setSongs(newSong);
    };
    // Additional Function

    return (
        <div className="controls-arrows">
            <div onClick={() => actionSongHandler("prev")} className="action-button i-prev"></div>
            <div onClick={playHandler} className={isPlay ? "toggle-play now-play" : "toggle-play not-play"}></div>
            <div onClick={() => actionSongHandler("next")} className="action-button i-next"></div>
        </div>
    );
};

export default ControllArrows;

