import * as keys from "./ActionKeys"
import store from "../Store/store"
import { GETDBNAMES } from "../API/Api";



export const UPDATETABLE = data =>({
type:keys.UPDATETABLE,
data
})

export const ADDCARD = data => ({
  type: keys.CREATE_CARD,
  payload: {
    id: store.getState().cards.length++,
    name:localStorage.getItem("FileName"),
    version:localStorage.getItem("version"),
    Status:localStorage.getItem("status"),
    discription : localStorage.getItem("discription") ?  localStorage.getItem("discription") : "",
    fileData :  localStorage.getItem("dataResult"),
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



  export function SHOW_CARD_ERROR(){
    return{
    type: keys.SHOW_CARD_ERROR,
  }};

  export function SHOW_TABLE_ERROR(){
    return{
    type: keys.SHOW_TABLE_ERROR,
  }};

  

  export function TOOGLECARDPOPUP(){
    return{
    type: keys.CARD_POPUP,
  }};

  export function setSelectedDb(data) {
    localStorage.clear();
    return{
      type:keys.SETDBNAME,
      value:data.value,
      selectedDBTables:data.tableList
    }
  }

  export function ADDSELECTEDCOLUMNS(data) {
    return{
    type:keys.SELECTEDCOLUMNS,
    tableid:data.table,
    payload:{
      id:data.rowid,
      name:data.tableName
    }
  }
  }
export  function ADDTABLE() {
  document.getElementById("RuleName").value = " ";
  let name = localStorage.getItem("RuleName");
  localStorage.removeItem("RuleName");
  if(name){
  return{
    type: keys.CREATE_TABLE,
    payload: {
      name:name,
      row:0,
      selectedtable:[]
      }
  }
}else{
  return{
    type: keys.SHOW_EMPTY_ERROR
  }
}
} 

