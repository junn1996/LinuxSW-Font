import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import {Input,message} from 'antd'

const Search = Input.Search;

export class SearchBar extends React.Component{


    constructor(props){
        super(props);
    }
    handleOnsearch(value){
        message.info(value)
    }

    render(){
        return(
         <div>
             <Search 
             placeholder="Search"
             onSearch={value=>this.handleOnsearch(value)}
             enterButton
             ></Search>

        </div>
        )
       
    }

}