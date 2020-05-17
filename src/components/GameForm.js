/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 17:14:37
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-17 17:26:19
 * @Description: file content
 */ 
import React, { Component } from 'react'
import classnames from 'classnames'

class GameForm extends Component{
  state = {
    _id: this.props.game ? this.props.game._id : null,
    title: this.props.game ? this.props.game.title : '',
    cover: this.props.game ? this.props.game.cover : '',
    errors: {}, // 存放验证错误信息
    loading: false,
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      // console.log(this.props);
      this.setState({
        _id: this.props.game._id,
        title: this.props.game.title,
        cover: this.props.game.cover
      })
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault()

    let errors = {}
    if(this.state.title === '') errors.title = "Can't be empty"
    if(this.state.cover === '') errors.cover = "Can't be empty"
    this.setState({ errors })

    const isValid = Object.keys(this.state.errors).length === 0

    if(isValid) {
      const { _id, title, cover } = this.state
      this.setState({ loading: true })
      // 如果通过验证
      this.props.saveGame({ _id, title, cover })
      .catch(
        (error) => {
          error.response.json()
          .then(({ errors }) => this.setState({ errors, loading: false }))
        }
      )
    }
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
    const form = (
      <form className={ classnames("ui", "form", { loading: this.state.loading }) } onSubmit={ this.handleSubmit }>
        <h1>Add new game</h1>

        {!!this.state.errors.global && <div className="ui negative message">{ this.state.errors.global }</div>}

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
    )
    return (
      <div>{ form }</div>
    )
  }
}

// GameForm.propTypes = {
// }

export default GameForm
