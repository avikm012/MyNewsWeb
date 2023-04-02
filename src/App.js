import './App.css';
import News from './Components/News';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  pageSize=6;
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        {/* <News pageSizes={this.pageSize} category='general' country='in' /> */}
        <Routes>
          <Route path='/' element={<News pageSizes={this.pageSize} category='general' country='in' />}/>
          <Route path='/general' element={<News key='general' pageSizes={this.pageSize} category='general' country='in' />}/>
          <Route path='/business' element={<News key='business' pageSizes={this.pageSize} category='business' country='in' />}/>
          <Route path='/entertainment' element={<News key='entertainment' pageSizes={this.pageSize} category='entertainment' country='in' />}/>
          <Route path='/health' element={<News key='health' pageSizes={this.pageSize} category='health' country='in' />}/>
          <Route path='/science' element={<News key='science' pageSizes={this.pageSize} category='science' country='in' />}/>
          <Route path='/sports' element={<News key='sports' pageSizes={this.pageSize} category='sports' country='in' />}/>
          <Route path='/technology' element={<News key='technology' pageSizes={this.pageSize} category='technology' country='in' />}/>
        </Routes>
        
        
        </BrowserRouter>
      </div>
    )
  }
}
