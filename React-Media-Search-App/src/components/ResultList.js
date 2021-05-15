import React from 'react';
import ImageRslt from './ImageRslt';
import VideoRslt from './VideoRslt'
import AudioRslt from './AudioRslt';
const ResultList=(props)=>{
    var data=<p>Search something!</p>;
    let clsname='text-center';
    if(props.searchfor==="img"){
        data = props.imagedata.map(ele=><ImageRslt id={ele.id} src={ele.images.original.url}/>);
        console.log('image block');
        clsname="masonry"
    }else if(props.searchfor==="av"){
        data = props.audiodata.map(function(ele){
            if(ele.kind==="song"){
                return <AudioRslt id={ele.artistId} url={ele.previewUrl} thumbnail={ele.artworkUrl100}/>;
            }else{
                return <VideoRslt id={ele.artistId} url={ele.previewUrl} thumbnail={ele.artworkUrl100}/>
            }
        });
        console.log('audio block');
        clsname="masonry-video-audio"
    }
    return(
    <div className="col-lg-12">
        <div className={clsname}>
            {data.length===0?<p>Sorry There is no result found!</p>:data}
        </div>
    </div>
);}
export default ResultList;