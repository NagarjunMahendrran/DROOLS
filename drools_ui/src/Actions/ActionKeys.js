export const CREATE_CARD = "Create_card";
export const CREATE_ROW = "Create_row";
export const CREATE_TABLE = "Create_table";
export const TOOGLE_POPUP = "Toogle_popup";
export const SHOW_EMPTY_ERROR = "show_empty_error";
export const CARD_POPUP = "card_popup";
export const SHOW_CARD_ERROR ="show_card_error";

export const initialState = {
    cards: [],
    tables:[],
    popup_state:false,
    FILEDATA :[],
    allowCreate:false,
    SHOW_EMPTY_ERROR :false,
    CARD_POPUP:false,
    SHOW_CARD_ERROR :false
  };
