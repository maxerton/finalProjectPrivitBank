import {
  SETTRUE,
  SETFALSE,
  TOGGLE
} from './boilerplate'


export const reducerBoolean = (state, action) => {
  switch (action.type) {
    case SETTRUE:
      return {
        ...state,
        open: true
      }
    case SETFALSE:
      return {
        ...state,
        open: false
      }
    case TOGGLE:
      return {
        ...state,
        open: !state.open
      }
    default:
      return { ...state }
  }
}