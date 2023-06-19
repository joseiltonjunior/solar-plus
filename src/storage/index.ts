import { legacy_createStore as createStore } from 'redux'
import rootReducer from './rootReducer'

export interface ReduxProps {
  menu: boolean
}

const store = createStore(rootReducer)

export { store }
