/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 17:01:27
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-15 21:29:24
 * @Description: file content
 */ 
import { SET_GAMES } from '../constants';

const games = (state = [], action = {}) => {
  switch(action.type) {
    case SET_GAMES:
      return action.games;
    default: return state;
  }
}

export default games;