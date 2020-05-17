/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 17:13:15
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-17 17:32:41
 * @Description: file content
 */ 
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchGames, deleteGame } from '../actions'

import GamesList from './GamesList'

class GamesPage extends Component {
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.fetchGames()
  }

  render() {
    return (
     <GamesList games={ this.props.games } deleteGame={ this.props.deleteGame }/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage)
