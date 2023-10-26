import {
  SETTRUE,
  SETFALSE,
  TOGGLE
} from './boilerplate';


export const setTrue = payload => ({
  type: SETTRUE,
  payload: payload
});

export const setFalse = payload => ({
  type: SETFALSE,
  payload: payload
});


export const toggle = payload => ({
  type: TOGGLE,
  payload: payload
});
