import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';

class App extends Component{
  render(){
    return (
      <div style={{ margin: 100 }}>
        <h1>AntDesign Demo</h1>
      </div>
    )
  }  
}

ReactDOM.render(<App />, document.getElementById('root'));
