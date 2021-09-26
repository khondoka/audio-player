import React from 'react';

const Header = ({ setToggleLibrary, toggleLibrary, setTogglePlayer, togglePlayer }) => {
    const toggleLibraryHandler = () => {
        setToggleLibrary(!toggleLibrary);
        setTogglePlayer(!togglePlayer);
    };

    return (
        <div className="max-container">
            <div className="responsive-header">
                <div
                    onClick={toggleLibraryHandler}
                    className="arrow-back i-back">
                </div>
                <div className="album-name-played">
                    <p>Played from</p>
                    <h1>Daily Mix</h1>
                </div>
                <div className="details-open i-details"></div>
            </div>
        </div>
    );
};

export default Header;
