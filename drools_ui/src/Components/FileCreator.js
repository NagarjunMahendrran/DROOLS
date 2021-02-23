import store from "../Store/store"


let status = true;
 export default function download() {
    status = true;
     localStorage.setItem("dataResult",createarray());
      return status;
}

function updateError(message) {
  localStorage.setItem("ErrorMsg", message);
}

function createarray() {
  const table = store.getState().tables;
  const lines = [];
  lines.push("package com.matrixbi.rules");
  lines.push("import com.matrixbi.objects.BusinessObject");
  lines.push("");

  for (var tab = 0; tab < table.length; tab++) {
    lines.push("");
    lines.push("rule  \"" + table[tab].name + "\"");
    lines.push("when");
    lines.push("");
    lines.push("b: BusinessObject()");
    var condition = "eval(";
    var set_message = localStorage.getItem("field_"+ tab);
    var set_value = localStorage.getItem("value_"+ tab);

    for (let cond = 0; cond < table[tab].row; cond++) {
      var type = store.getState().SelectedDbTables[store.getState().tables[tab].selectedtable[cond]][cond].properties.datatype;
      type = type != undefined ? type :"String";
      var condition_line = localStorage.getItem(tab+ "_condition_" + cond);
      var value = localStorage.getItem(tab+ "_value_" + cond);
      var column = localStorage.getItem(tab + "_column_" + cond);
      var operator = localStorage.getItem(tab+"_operator_"+cond);

      if (type !== null) {
        condition = condition + createDataType(type, condition_line, tab);
      } else {
        updateError("Please select Datatype: Line No : " + cond);
        status = false;
      }

      if (column !== null) {
        condition = condition + createColumn(column, condition_line);
      } else {
        updateError("Please select Column Value: Line No : " + cond);
        status = false;
      }

      if (condition_line !== null) {
        condition = condition + createCondition(condition_line);
      } else {
        updateError("Please select Conditiontype: Line No : " + cond);
        status = false;
      }

      if (value !== null) {
        condition = condition + createValue(value, condition_line, table[tab].condition);
      } else {
        updateError("Please Fill value , Line No : " + cond);
        status = false;
      }

      if ( table[tab].row > cond && (table[tab].row-1) !== cond) {
          if(operator !== null){
        condition = condition + " " + operator + " ";
      }
      else{
        updateError("Please select operator ,Line No : " + cond);
        status = false;
      }
    }
}

    condition = condition + ")";
    lines.push(condition);
    lines.push("");
    lines.push("then");
    lines.push("");

    if (set_message !== undefined && set_value !== undefined) {
      lines.push("b: set(\"" + set_message + "\",\"" + set_value + "\")");
    }

    lines.push("end");
  }

  return lines.join("|");
}

function createValue(data, condition, tab) {
  switch (condition) {
    case "greater":
      return " " + data + ")";

    case "lesser":
      return " " + data + ")";

    case "equal":
      return " " + data + "\"))";

    case "notequal":
      return " " + data + "\"))";

    default:
      return " ";
  }
}

function createColumn(data, condition) {
  return data + (condition === "notequal" || condition === "equal" ? "\")" : "\")");
}

function createDataType(data, condition, tab) {
  switch (data) {
    case "number":
      return condition === "notequal" ? "(!b.getAsInt(\"" : "(b.getAsInt(\"";

    case "getAsFloat":
      return condition === "notequal" ? "(!b.getAsFloat(\"" : "(b.getAsFloat(\"";

    case "getAsBoolean":
      return condition === "notequal" ? "(!b.getAsBoolean(\"" : "(b.getAsBoolean(\"";

    case "String":
      return condition === "notequal" ? "(!b.get(\"" : "(b.get(\"";
      case "string":
      return condition === "notequal" ? "(!b.get(\"" : "(b.get(\"";

    default:
      return " ";
  }
}

function createCondition(data) {
  switch (data) {
    case "greater":
      return " >";

    case "lesser":
      return "  <";

    case "equal":
      return ".equals(\"";

    case "notequal":
      return ".equals(\"";

    default:
      return " ";
  }
}