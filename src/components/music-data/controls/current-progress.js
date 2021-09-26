import React from 'react';

const CurrentProgress = ({ songDetails, audioRef, setSongDetails }) => {

    // Additional Functions
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };
    // End Additional Function

    // Handlers
    const progressHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongDetails({
            ...songDetails,
            currentTime: e.target.value
        });
    };
    // End Handlers

    // Styles
    const progressStyle = {
        width: `${songDetails.progress}%`
    }
    // Styles

    return (
        <div className="current-progress">
            <div className="progress-bar">
                <input
                    onChange={progressHandler}
                    min={0}
                    max={songDetails.duration || 0}
                    value={songDetails.currentTime}
                    type="range"
                />
                <div style={progressStyle} className="track-progress"></div>
            </div>
            <div className="data-time-progress">
                <div className="current-time">{songDetails.currentTime ? getTime(songDetails.currentTime) : "0:00"}</div>
                <div className="duration-music">{songDetails.duration ? getTime(songDetails.duration) : "0:00"}</div>
            </div>
        </div>
    );
};

export default CurrentProgress;
