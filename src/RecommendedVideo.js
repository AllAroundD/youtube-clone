import React from 'react'
import './RecommendedVideo.css'
import VideoCard from './VideoCard'

function RecommendedVideo() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="First Snow of the Season | Building a Log Cabin, Timber Frame Workshop"
                    views="326K views"
                    timestamp="1 day ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJz4R3kXfuzkAojZO5XY1nuxTWgqNSzMrLSlcTrsiQ=s176-c-k-c0x00ffffff-no-rj"
                    channel="My Self Reliance"
                    image="https://i.ytimg.com/vi/kR6ExzU-1eo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBx5VKkei41wX_W1eTOpVhtENkR0Q" 
                />
                <VideoCard
                    title="My Self Reliance"
                    views="182K views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJz4R3kXfuzkAojZO5XY1nuxTWgqNSzMrLSlcTrsiQ=s176-c-k-c0x00ffffff-no-rj"
                    channel="My Self Reliance"
                    image="https://i.ytimg.com/vi/uOv9K7bciCs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpYRLGzvY6AQdnhzr0Sik0Eo-o5Q"
                />
                <VideoCard
                    title="This is Way Harder Than I Expected | Building an Off Grid Workshop"
                    views="502K views"
                    timestamp="1 week ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJz4R3kXfuzkAojZO5XY1nuxTWgqNSzMrLSlcTrsiQ=s176-c-k-c0x00ffffff-no-rj"
                    channel="My Self Reliance"
                    image="https://i.ytimg.com/vi/LzTpQI3N3rI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDGt0Ffaa3sYOHw071-xyrUA_E3eQ"
                />
                <VideoCard
                    title="Building a Square Off Grid Log Cabin| Lifting Heavy Logs | Squirrel Confit for Lunch"
                    views="602K views"
                    timestamp="2 weeks ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJz4R3kXfuzkAojZO5XY1nuxTWgqNSzMrLSlcTrsiQ=s176-c-k-c0x00ffffff-no-rj"
                    channel="My Self Reliance"
                    image="https://i.ytimg.com/vi/qYRNitsOi3U/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCoRcJ4z0PuzFxdpx8_UHJBUN8O8w"
                />
                <VideoCard
                    title="Building an Off Grid Workshop | Lunch Date with My Wife"
                    views="443K views"
                    timestamp="3 weeks ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJz4R3kXfuzkAojZO5XY1nuxTWgqNSzMrLSlcTrsiQ=s176-c-k-c0x00ffffff-no-rj"
                    channel="My Self Reliance"
                    image="https://i.ytimg.com/vi/rsRlFWC3858/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCTrcfm2gJRFEKNhnZ9vPhUwLZO_g"
                />
                <VideoCard
                    title="A Walk in the Woods | Thanksgiving at the Outpost"
                    views="205K views"
                    timestamp="3 weeks ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJz4R3kXfuzkAojZO5XY1nuxTWgqNSzMrLSlcTrsiQ=s176-c-k-c0x00ffffff-no-rj"
                    channel="My Self Reliance"
                    image="https://i.ytimg.com/vi/LOi20PYr68o/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB-rYKWRCl_sboYMIHI3IXareViHA"
                />
                <VideoCard
                    title="New Build at the Off Grid Log Cabin, Workshop, Root Cellar, Campfire Cooking Wild Game"
                    views="675K views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJz4R3kXfuzkAojZO5XY1nuxTWgqNSzMrLSlcTrsiQ=s176-c-k-c0x00ffffff-no-rj"
                    channel="My Self Reliance"
                    image="https://i.ytimg.com/vi/UiiU-c-COBQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC6uiPpmwxpvZGMyMXARr0tI9nKJg"
                />
            </div>
        </div>
    )
}

export default RecommendedVideo
