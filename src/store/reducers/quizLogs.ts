import { Reducer } from 'react'

import { ADD_QUIZ_LOG } from 'store/actions/quizLogs'
import { StateType, ActionType } from 'type/quizLogsReducerType'

const quizLogsReducer: Reducer<StateType[], ActionType> = (states, action) => {
  switch (action.type) {
    case ADD_QUIZ_LOG:
      const quizLog = {
        category: action.category,
        correctWrongJudgement: action.correctWrongJudgement,
        dateTime: action.dateTime,
      }
      return [...states, quizLog]
    default:
      return states
  }
}

export default quizLogsReducer