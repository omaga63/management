import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub: 'World wide web'},
      content:{title:'HTML', desc:'HTML is HyperText Markup Language'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    return(
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <TOC data={this.state.contents}></TOC>
        <Content title={this.state.content.title} desc={this.state.content.desc}></Content>
      </div>
    )
  }
}

export default App;
