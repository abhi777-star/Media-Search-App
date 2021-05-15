import React from 'react';
import SearchBar from '../components/searchBar';
import ResultList from '../components/ResultList';
// const Search=()=>{
//     return();
// }

// export default Search;
export default class Search extends React.Component{
    constructor(props){
        //Init Props and States
        super(props);
        this.searchTxtValue="";
        this.searchfor="none";
        // initalize the props from the parent and give it to child
        // props = {} // It is an Empty Object
        // props.title = "Image Search App"
        this.state ={imagedata:[],audiodata:[]};
    }
    fetchImageData(searchValue){
        const url = `https://api.giphy.com/v1/gifs/search?api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&q=${searchValue}&limit=20`;
        const promise = fetch(url);
        promise.then(response=>{
            var p= response.json();
            p.then(result=>{
                this.setState({imagedata:result.data});
            }).catch(err=>{
                console.log('There is error in JSON Fetching::',err);
            }).catch(err=>{
                console.log('There is some error in data fetching::',err);
            })
        })
    }
    fetchAudioData(searchValue){
        const url =`https://itunes.apple.com/search?term=${searchValue}&limit=20`;
        const promise = fetch(url);
        promise.then(response=>{
            var pr=response.json();
            pr.then(result=>{
                this.setState({audiodata:result.results});
                console.log('result is coming',result.results);
            }).catch(err=>{
                console.log('There is error in JSON Fetching::',err);
            }).catch(err=>{
                console.log('There is some error in data fetching::',err);
            })
        })
    }
    takeInput(event){
        let data = event.target.value
        this.searchTxtValue = data;
    }
    searchImages(){
        this.searchfor="img";
        this.fetchImageData(this.searchTxtValue);
    }
    searchAudio(){
        this.searchfor="av";
        this.fetchAudioData(this.searchTxtValue);
    }
    render(){
        return (
            <div className="col-lg-12 text-muted text-center p-4">
                 <h4>MEDIA SEARCH APP</h4>
                 <SearchBar takeInput={this.takeInput.bind(this)} btImageClick={this.searchImages.bind(this)} btAudioClick={this.searchAudio.bind(this)}/>
                 <ResultList imagedata={this.state.imagedata} audiodata={this.state.audiodata} searchfor={this.searchfor}/>
            </div>
        )

    }
}