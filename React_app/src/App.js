import React, {Component} from 'react';

//class components:
class App extends Component {
// define states in class component
constructor(){
    super();
    this.state={
        data:0
    }
}
Myname(){
    this.setState({data:"Hey Buddy!"}); 
    this.setState({data:this.state.data+1}); 
}
    render(){
        return (
            <div className="App">
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.Myname()}>Update</button>
            </div>
        )
    }
}
export default App;