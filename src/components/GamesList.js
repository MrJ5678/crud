/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 20:01:32
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-15 20:07:08
 * @Description: file content
 */ 
import React from 'react'
import PropTypes from 'prop-types'

const GamesList = ({ games }) => {
  const emptyMessage = (
    <p>There are no games yet in your collection</p>
  )
  const pageList = (
    <p>Page List</p>
  )

  return (
    <div>
      { games.length === 0 ? emptyMessage : pageList }
    </div>
  )
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired
}

export default GamesList

