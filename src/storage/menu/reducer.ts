import { Reducer } from 'redux'

const INITIAL_STATE = false

const menu: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@menu/IS_VISIBLE': {
      state = !state

      return state
    }

    default: {
      return state
    }
  }
}

export default menu
