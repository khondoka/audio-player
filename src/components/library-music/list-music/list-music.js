import React from 'react';
import MusicItem from '../music-item/music-item';

const ListMusics = ({ songs, isPlay, setCurrenSong, currentSong, audioRef, setSongs }) => {

    const togglePlay = async (id) => {
        const currentIndex = songs.findIndex((song) => song.id === id);
        const newSong = songs.map((song) => {
            if (song.id === id) {
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
        await setCurrenSong(songs[currentIndex]);
        await setSongs(newSong);
        if (isPlay) audioRef.current.play();
    };

    return (
        <div className="responsive-list">
            {songs.map((song) => {
                const { id, ...dataSong } = song;
                return (
                    <MusicItem
                        isPlay={isPlay}
                        togglePlay={() => togglePlay(id)}
                        key={id}
                        {...dataSong}
                    />
                )
            })};
        </div>
    );
};

export default ListMusics;
