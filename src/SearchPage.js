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
                    views="326K views"
                    subs="1.59M"
                    timestamp="1 day ago"
                    description="The first real snow of the season is quickly replaced by unseasonably warm weather, allowing me to make progress on my ..."
                    channel="My Self Reliance"
                    // channelImage="https://yt3.ggpht.com/a/AATXAJz4R3kXfuzkAojZO5XY1nuxTWgqNSzMrLSlcTrsiQ=s176-c-k-c0x00ffffff-no-rj"
                    title="First Snow of the Season | Building a Log Cabin, Timber Frame Workshop"
                    image="https://i.ytimg.com/vi/kR6ExzU-1eo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBx5VKkei41wX_W1eTOpVhtENkR0Q" 
                />


        </div>
    )
}

export default SearchPage