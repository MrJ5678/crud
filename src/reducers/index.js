/*
 * @Author: hhhhhq
 * @Date: 2020-05-15 17:01:19
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-15 17:44:51
 * @Description: file content
 */ 
import { combineReducers } from 'redux'

import games from './games'

const rootReducer = combineReducers({
  games
})

export default rootReducer
