import { createActions, createReducer } from 'reduxsauce'

const { Types, Creators } = createActions({
  addUser: ['user'],
  removeUser: ['']
})

export const AuthenticateTypes = Types

export default Creators

const INITIAL_STATE = {
  user: null
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_USER]: (state, { user }) => ({ ...state, user }),
  [Types.REMOVE_USER]: (state) => ({ ...state, user: null })
})
