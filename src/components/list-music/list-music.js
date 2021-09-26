import React from 'react';

const ListMusic = ({ currentSong }) => {
    return (
        <div className="responsive-list-music">
            <div className="item">
                <div className="music"></div>
            </div>
            <div className="item active">
                <div className="music">
                    <img src={currentSong.image} alt="" />
                </div>
            </div>
            <div className="item">
                <div className="music"></div>
            </div>
        </div>
    );
};

export default ListMusic;
