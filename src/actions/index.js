/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 19:46:09
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-17 17:40:32
 * @Description: file content
 */ 
import { 
  SET_GAMES,
  ADD_GAME,
  GAME_FETCHED,
  GAME_UPDATED,
  GAME_DELETED
} from '../constants' 

export const fetchGames = () => {
  return dispatch => {
    fetch('/api/games')
    .then(res => res.json())
    .then(data => dispatch(setGames(data.games)))
  }
};

export const setGames = (games) => {
  return {
    type: SET_GAMES,
    games
  }
};

const handleResponse = (response) => {
  if(response.ok) {
    return response.json()
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const saveGame = (data) => {
  return dispatch => {
    return fetch('/api/games', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(handleResponse)
    .then(data => dispatch(addGame(data.game)))
  }
};

export const addGame = (game) => {
  return {
    type: ADD_GAME,
    game
  }
};

export const fetchGame = (id) => {
  return dispatch => {
    fetch(`/api/games/${id}`)
    .then(res => res.json())
    .then(data => dispatch(gameFetched(data.game)))
  }
};

export const gameFetched = (game) => {
  return {
    type: GAME_FETCHED,
    game
  }
};

export const updateGame = (data) => {
  return dispatch => {
    return fetch(`/api/games/${data._id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(handleResponse)
    .then(data => dispatch(gameUpdated(data.game)))
  }
};

export const gameUpdated = (game) => {
  return {
    type: GAME_UPDATED,
    game
  }
};

export const deleteGame = (id) => {
  return dispatch => {
    return fetch(`/api/games/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(handleResponse)
    .then(data => dispatch(gameDeleted(id)))
  }
};

export const gameDeleted = (gameId) => {
  return {
    type: GAME_DELETED,
    gameId
  }
};