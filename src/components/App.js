import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('cute girls');
    
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]); 

    const searchResultsRendered = (selectedVideo, videos) => (
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={selectedVideo} />
                </div>
                <div className="five wide column">
                    <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
                </div>
            </div>
        </div>
    );

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            {videos.length
                ? searchResultsRendered(selectedVideo, videos)
                : 'Loading...'}
        </div>
    );
};

export default App;
