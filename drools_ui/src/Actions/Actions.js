import * as keys from "./ActionKeys"
import store from "../Store/store"

let CardCount = 0;

export const ADDCARD = data => ({
  type: keys.CREATE_CARD,
  payload: {
    id: CardCount++,
    name:data.name,
    version:data.version,
    Status:data.status
  }
});

export const ADDROW = data => ({
    type: keys.CREATE_ROW,
    id :data.id,
    value: store.getState().tables[data.id].row + 1
  });


  export function TOOGLEPOPUP(){
    localStorage.clear();
    return{
    type: keys.TOOGLE_POPUP,
  }};


export  function ADDTABLE() {
  document.getElementById("RuleName").value = " ";
  return{
    type: keys.CREATE_TABLE,
    payload: {
      name:localStorage.getItem("RuleName"),
      row:0
      }
  }
} 

