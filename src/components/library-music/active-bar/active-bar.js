import React from 'react';

const Activebar = ({ currentSong, isPlay, songs, setCurrenSong, setSongs, setIsPlay, audioRef }) => {

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

    const playHandler = () => {
        if (isPlay) {
            setIsPlay(!isPlay);
            audioRef.current.pause();
        } else {
            setIsPlay(!isPlay);
            audioRef.current.play();
        }
    }

    return (
        <div className="responsive-current-music">
            <div className="item">
                <div className="image">
                    <img src={currentSong.image} alt="" />
                </div>
                <div className="data-current-music">
                    <div className="name-author">
                        <h1>{currentSong.music}</h1>
                        <p>{currentSong.author}</p>
                    </div>
                    <div className="action-bar">
                        <div onClick={favoriteHandler} className={currentSong.favorite ? "favor-bar favs-i" : "favor-bar"}></div>
                        <div onClick={playHandler} className={isPlay ? "toggle-bar" : "toggle-bar pause-i"}></div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Activebar;
