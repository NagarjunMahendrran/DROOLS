import * as keys from "../Actions/ActionKeys";
import update from 'react-addons-update'; 


export default function rootReducer(state = keys.initialState, action) {
  switch (action.type) {

    //Action to hide and show the popup
    case keys.TOOGLE_POPUP:
      return { ...state,
        popup_state: !state.popup_state,
      };
      case keys.CREATE_TABLE:
        return { ...state,
            tables: [...state.tables, action.payload]
          };
          case keys.CREATE_ROW:
            let value = action.value;
            return  update(state, {tables: {[action.id] :{row: {$set: value}}}})

    default:
      return state;
  }
}
