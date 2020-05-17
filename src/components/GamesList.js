/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 20:01:32
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-17 17:44:50
 * @Description: file content
 */ 
import React from 'react'
import GameCard from './GameCard'
import PropTypes from 'prop-types'

const GamesList = ({ games, deleteGame }) => {
  const emptyMessage = (
    <p>There are no games yet in your collection</p>
  )
  const pageList = (
    <div className="ui four cards">
      { games.map(game => <GameCard key={ game._id } game={ game } deleteGame={ deleteGame }/>) }  
    </div>
  )

  return (
    <div>
      { games.length === 0 ? emptyMessage : pageList }
    </div>
  )
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
  deleteGame: PropTypes.func.isRequired
}

export default GamesList

