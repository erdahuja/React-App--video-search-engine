/**
 * Create a new component. This component should use some html
 * Put into DOM
 */
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyDkV31hR8vF3dSzX_v9cxTm90cHMoROiMM';


class App extends React.Component{
constructor(props){
super(props);
this.state={
    videos:[],
selectedVideo: null
}
this.videoSearch('surfboards');
}

videoSearch(term){
    YTSearch({key:API_KEY,term:term},
        (videos)=>this.setState({videos,selectedVideo:videos[0]}))
    
};

render(){

    return <div>
    <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
    <VideoDetail video={this.state.selectedVideo}/>
    <VideoList 
    onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
    videos={this.state.videos}/> 
 </div> 

}

}


 ReactDOM.render(<App/>,document.getElementById('app'));
