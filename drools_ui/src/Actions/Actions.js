import * as keys from "./ActionKeys"

export const ADDCARD = content => ({
  type: keys.CREATE_CARD,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const ADDROW = content => ({
    type: keys.CREATE_ROW,
    payload: {
      id: ++nextTodoId,
      content
    }
  });

export const ADDTABLE = id => ({
  type: keys.CREATE_TABLE,
  payload: { id }
});

