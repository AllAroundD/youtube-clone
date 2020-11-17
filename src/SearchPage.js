import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow 
                image="https://yt3.ggpht.com/a/AATXAJz4R3kXfuzkAojZO5XY1nuxTWgqNSzMrLSlcTrsiQ=s176-c-k-c0x00ffffff-no-rj"
                channel="My Self Reliance"
                verified
                subs="1.59M"
                noOfVideos={429}
                description="Log Cabin Building, Woodworking, Bushcraft, Survival Skills, Cooking, Canadian Wilderness exploration, Hunting, Fishing, Off Grid Living in the forest with my golden retriever Cali."
           />

            <hr />
            <VideoRow
                views="326K"
                subs="1.59M"
                timestamp="1 day ago"
                description="The first real snow of the season is quickly replaced by unseasonably warm weather, allowing me to make progress on my ..."
                channel="My Self Reliance"
                // channelImage="https://yt3.ggpht.com/a/AATXAJz4R3kXfuzkAojZO5XY1nuxTWgqNSzMrLSlcTrsiQ=s176-c-k-c0x00ffffff-no-rj"
                title="First Snow of the Season | Building a Log Cabin, Timber Frame Workshop"
                image="https://i.ytimg.com/vi/kR6ExzU-1eo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBx5VKkei41wX_W1eTOpVhtENkR0Q" 
            />

            <VideoRow
                views="232K"
                subs="1.59M"
                timestamp="1 week ago"
                description="Resourcefulness, simplification, gratefulness, less dependence, more responsibility, reconnection with nature and love of our ..."
                channel="My Self Reliance"
                title="My Self Reliance"
                image="https://i.ytimg.com/vi/uOv9K7bciCs/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCKIqeSFhFOTD5rqU1MSM5P6tjx-w" 
            />

            <VideoRow
                views="550K"
                subs="1.59M"
                timestamp="2 weeks ago"
                description="Building an off grid workshop, a tiny cabin, with heavy hemlock timbers is taking way longer than I expected - it's heavy work and ..."
                channel="My Self Reliance"
                title="This is Way Harder Than I Expected | Building an Off Grid Workshop"
                image="https://i.ytimg.com/vi/LzTpQI3N3rI/mqdefault.jpg" 
            />

            <VideoRow
                views="697K"
                subs="1.59M"
                timestamp="3 weeks ago"
                description="Lifting heavy hemlock timbers is difficult so I rig up a cable winch system to help raise them into place on the small square log ..."
                channel="My Self Reliance"
                title="Building a Square Off Grid Log Cabin| Lifting Heavy Logs | Squirrel Confit for Lunch"
                image="https://i.ytimg.com/vi/qYRNitsOi3U/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCavkavH2F9mms9_w8uUQ2GFi4gHg" 
            />



        </div>
    )
}

export default SearchPage