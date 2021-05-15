import React from 'react';
const VideoRslt=(props)=>{return(
<div className="item">
    <video controls name="media" poster={props.thumbnail}>
        <source src={props.url} type="video/x-m4v"/>
    </video>
</div>
);}
export default VideoRslt; 