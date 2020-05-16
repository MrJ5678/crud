/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 19:46:09
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-15 21:29:06
 * @Description: file content
 */ 
import { 
  SET_GAMES
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