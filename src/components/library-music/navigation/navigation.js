import React from 'react';

const Navigation = () => {
    return (
        <div className="responsive-navigation">
            <div className="list-nav">
                <div className="item active">
                    <div className="icon-nav i-main"></div>
                    <p>Main</p>
                </div>
                <div className="item">
                    <div className="icon-nav i-search"></div>
                    <p>Search</p>
                </div>
                <div className="item">
                    <div className="icon-nav i-favorites"></div>
                    <p>Favorites</p>
                </div>
                <div className="item">
                    <div className="icon-nav i-playlist"></div>
                    <p>Playlist</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
