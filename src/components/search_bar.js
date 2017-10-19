import React,{Component} from 'react';
import ReactDOM from 'react-dom';


 class SearchBar extends Component {
//init vars,states
constructor(props){

  super(props);
  this.state={term:''};


}


onInputChange(term){

this.setState({term});    
this.props.onSearchTermChange(term);
}
    render() {
      return  <div>
<input 
value={this.state.term}
onChange={evnt=>this.onInputChange(evnt.target.value)}/>
      </div>
       }
  }

export default SearchBar;