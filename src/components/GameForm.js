/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 17:14:37
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-15 22:00:07
 * @Description: file content
 */ 
import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class GameForm extends Component{
  state = {
    title: '',
    cover: ''
  }
  
  render() {
    return (
      <div>
        <form className="ui form">
          <h1>Add new game</h1>
  
          <div className="field">
            <label htmlFor="title">Title</label>
            <input 
              type="text"
              name="title"
              value={ this.state.title }
              onChange={ e => this.setState({ title: e.target.value })}
            />
          </div>
  
          <div className="field">
            <label htmlFor="title">Cover</label>
              <input 
                type="text"
                name="text"
                value={ this.state.cover }
                onChange={ e => this.setState({ cover: e.target.value })}
              />
          </div>

          <div className="field">
            { this.state.cover !== '' && <img src={ this.state.cover } alt="cover" className="ui small bordered image"/> }
          </div>

          <div className="field">
            <button className="ui primary button">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

// GameForm.propTypes = {

// }

export default GameForm
