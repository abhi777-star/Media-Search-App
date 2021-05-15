import React from 'react';
const divStyle={
    // texttransform: 'uppercase'
    textTransform: 'capitalize',
    fontWeight: 'lighter'
}
export default function SearchBar(props){return(
    <div className="input-group shadow-sm p-3 mb-5 bg-white rounded">
        <input type="text" onChange={props.takeInput} className="form-control shadow-none bg-light" id="searchbar" aria-describedby="searchbar" style={divStyle}/>
        <div className="input-group-append">
        <button onClick={props.btImageClick} className="btn btn-secondary shadow-sm" type="button" id="searchbtn">Search Images</button>
        <button onClick={props.btAudioClick} className="btn btn-info shadow-sm" type="button" id="searchbtn">Search Audio/Video</button>
        </div>
    </div>
)}