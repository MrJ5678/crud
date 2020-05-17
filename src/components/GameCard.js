/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 21:40:28
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-17 17:38:03
 * @Description: file content
 */ 
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const GameCard = ({ game, deleteGame }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={ game.cover } alt="game cover"/>
      </div>
      <div className="content">
        <div className="header">{ game.title }</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <Link to={ `/game/${game._id}` } className="ui basic button green">Edit</Link>
          <div onClick={ () => deleteGame(game._id) } className="ui basic button red">Delete</div>
        </div>
      </div>
    </div>
  )
}

GameCard.propTypes = {
  game: PropTypes.object.isRequired,
  deleteGame: PropTypes.func.isRequired
}

export default GameCard