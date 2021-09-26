import React from 'react';

const AdditionalControls = ({ songs, setSongs, currentSong, setCurrenSong, setRandomPlay, randomPlay }) => {

    // Additional Functions
    const favoriteHandler = () => {
        const newSong = songs.map((song) => {
            if (song.id === currentSong.id) {
                return {
                    ...song,
                    favorite: !currentSong.favorite
                };
            } else {
                return {
                    ...song
                };
            };
        });
        setSongs(newSong);
        setCurrenSong({
            ...currentSong,
            favorite: !currentSong.favorite
        })
        console.log(newSong);
    };

    const repeatHandler = () => {
        const newSong = songs.map((song) => {
            return {
                ...song,
                repeat: !currentSong.repeat
            };
        });
        setSongs(newSong);
        setCurrenSong({
            ...currentSong,
            repeat: !currentSong.repeat
        })
    };

    const randomHandler = () => {
        setRandomPlay(!randomPlay)
    };
    // End Additional Functions

    return (
        <div className="additional-controls">
            <div onClick={favoriteHandler} className={currentSong.favorite ? "item favor-i active" : "item favor-i"}></div>
            <div onClick={randomHandler} className={randomPlay ? "item random-i active" : "item random-i"}></div>
            <div onClick={repeatHandler} className={currentSong.repeat ? "item repeat-i active" : "item repeat-i"}></div>
            <div className="item library-i"></div>
        </div>
    );
};

export default AdditionalControls;
