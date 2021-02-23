import axios from "axios";
import * as keys from "../Actions/ActionKeys"
import { UPDATETABLE} from "../Actions/Actions";
import store from "../Store/store"

let dbname = [];
let duplicates = [];

let tableDefaultPost = {
    "filter": {
      "columname": "metadataId",
      "operator": "equals",
      "value": ""
    }
  };  

export function GETDBNAMES () {
axios.post(keys.apiUrl+"list_schema", {})
.then(res => {

    let names =res.data.Result;
    names.map( val =>{
        if(duplicates.indexOf(val.client) == -1){
            duplicates.push(val.client);
            dbname.push({label:val.client,value:val.metadataId});
    }
})})
return dbname;
}

export function GETDBTABLES(metaDataID) {
    duplicates = [];
    let tableName = {};
    let columname = [];
tableDefaultPost.filter.value = metaDataID;
    axios.post(keys.apiUrl+"list_entity", tableDefaultPost)
    .then(res => {
        let result = res.data.Result;
        result.map(table => {
               tableName[table.entity]= table.fields;
        })

    }).then(() =>{
        store.dispatch(UPDATETABLE(tableName));
    }
        )
}