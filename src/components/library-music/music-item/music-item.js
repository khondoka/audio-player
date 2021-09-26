import React from 'react';

const MusicItem = ({ isPlay, ...dataSong }) => {
    return (
        <div onClick={dataSong.togglePlay} className={dataSong.active ? "item active" : "item"}>
            <div className="image">
                <img src={dataSong.image} alt="" />
            </div>
            <div className="data-song">
                <div className="author-song-name">
                    <h1>{dataSong.music}</h1>
                    <p>{dataSong.author}</p>
                </div>
                <div className="duration-status">
                    <div className={dataSong.active ? `status ${isPlay ? "active" : "paused"}` : "status"}></div>
                    <p>{dataSong.duration}</p>
                </div>
            </div>
        </div>
    );
};

export default MusicItem;
