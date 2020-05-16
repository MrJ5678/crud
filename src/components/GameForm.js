/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 17:14:37
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-16 10:15:26
 * @Description: file content
 */ 
import React, { Component } from 'react'
import classnames from 'classnames'
// import PropTypes from 'prop-types'

class GameForm extends Component{
  state = {
    title: '',
    cover: '',
    errors: {}, // 存放验证错误信息
  }
  
  handleSubmit = (e) => {
    e.preventDefault()

    let errors = {}
    if(this.state.title === '') errors.title = "Can't be empty"
    if(this.state.cover === '') errors.cover = "Can't be empty"
    this.setState({ errors })
  } 

  handleChange = (e) => {
    if(!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors)
  
      delete errors[e.target.name]
      this.setState({
        [e.target.name]: e.target.value,
        errors
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={ this.handleSubmit }>
          <h1>Add new game</h1>
  
          <div className={ classnames('field', { error: !!this.state.errors.title }) }>
            <label htmlFor="title">Title</label>
            <input 
              type="text"
              name="title"
              value={ this.state.title }
              onChange={ this.handleChange }
            />
            <span>{ this.state.errors.title }</span>
          </div>
  
          <div className={ classnames('field', { error: !!this.state.errors.cover }) }>
            <label htmlFor="cover">Cover</label>
              <input 
                type="text"
                name="cover"
                value={ this.state.cover }
                onChange={ this.handleChange }
              />
            <span>{ this.state.errors.cover }</span>
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
