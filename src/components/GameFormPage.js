/*
 * @Author: hhhhhq
 * @Date: 2020-05-17 16:43:37
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-17 17:10:13
 * @Description: file content
 */ 
import React, { Component } from 'react'
import { saveGame, fetchGame, updateGame } from '../actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import GameForm from './GameForm'

class GameFormPage extends Component {
  state = {
    redirect: false
  }
  
  componentDidMount() {
    const { match } = this.props
    if(match.params._id) {
      this.props.fetchGame(match.params._id)
    }
  }

  saveGame = ({ _id, title, cover }) => {
    if(_id) {
      // 有_id, 属于需要更改数据
      return this.props.updateGame({ _id, title, cover })
      .then(
        () => { this.setState({ redirect: true })}
      )
    } else {
      return this.props.saveGame({ title, cover })
      .then(
        () => { this.setState({ redirect: true })}
      )
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/games" /> :
          <GameForm 
            saveGame={ this.saveGame }
            game={ this.props.game }
          />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { match } = props;
  if (match.params._id) {
    return {
      game: state.games.find(item => item._id === match.params._id)
    };
  }

  return { game: null };
};

export default connect(mapStateToProps, { saveGame, fetchGame, updateGame })(GameFormPage)