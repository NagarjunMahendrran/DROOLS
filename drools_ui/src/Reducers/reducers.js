import * as keys from "../Actions/ActionKeys";
import update from 'react-addons-update'; 


export default function rootReducer(state = keys.initialState, action) {
  switch (action.type) {

    //Action to hide and show the popup
    case keys.TOOGLE_POPUP:
      return { ...state,
        tables: [],
        CARD_POPUP:false,
        SHOW_EMPTY_ERROR :false,
        SHOW_TABLE_ERROR : false,
        popup_state: !state.popup_state,
      };
      case keys.CARD_POPUP:
        return { ...state,
          SHOW_EMPTY_ERROR :false,
          CARD_POPUP: true,
          SHOW_TABLE_ERROR : false,
        };
      case keys.SHOW_EMPTY_ERROR:
        return { ...state,
          SHOW_EMPTY_ERROR: !state.SHOW_EMPTY_ERROR,
        };
      case keys.CREATE_TABLE:
        return { ...state,
          SHOW_EMPTY_ERROR : false,
          allowCreate :true,
            tables: [...state.tables, action.payload]
          };
          case keys.CREATE_CARD:
            return { ...state,
                cards: [...state.cards, action.payload],
                SHOW_EMPTY_ERROR : false,
                allowCreate :false,
                SHOW_CARD_ERROR:false,
                CARD_POPUP:false,
                SHOW_TABLE_ERROR:false,
                popup_state: !state.popup_state,
              };
          case keys.SHOW_CARD_ERROR:
            return { ...state,
              SHOW_CARD_ERROR: !state.SHOW_CARD_ERROR,
            };
            case keys.SHOW_TABLE_ERROR:
              return { ...state,
                SHOW_TABLE_ERROR: true,
              };
          case keys.CREATE_ROW:
            let value = action.value;
            return  update(state,{tables: {[action.id] :{row: {$set: value}}}})

    default:
      return state;
  }
}
