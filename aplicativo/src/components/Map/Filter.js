import React, { Component } from 'react';
import {FilterHead, Button} from '../../style.js';
import  {Link} from 'react-router-dom';


export default class Filter extends Component {
  render() {
    return (
        <div>
          <FilterHead>
            <Button back="#B4B4B5">Clear</Button>
          </FilterHead>
          <Filter></Filter>
        
      
        </div>
    );
  }
}
