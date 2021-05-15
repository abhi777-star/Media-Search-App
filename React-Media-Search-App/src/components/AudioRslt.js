import React from 'react';
const AudioRslt=(props)=>{return(
<div className="item">
    <img src={props.thumbnail} alt="thumbnailart" className="v-t"/> 
    <audio controls name="media">
        <source src={props.url} type="audio/x-m4a"/>
    </audio>
</div>
);}
export default AudioRslt; 