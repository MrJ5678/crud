/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 17:13:15
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-15 20:11:46
 * @Description: file content
 */ 
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchGames } from '../actions'

import GamesList from './GamesList'

class GamesPage extends Component {
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.fetchGames()
  }

  render() {
    return (
     <GamesList games={ this.props.games }/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps, { fetchGames })(GamesPage)
