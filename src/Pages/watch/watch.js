import React from 'react';

const Watch = () => {
    return (
        <div>
            <video controls={true}>
                <source src="http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8" type="application/x-mpegURL"/>
            </video>
        </div>
    );
};

export default Watch;