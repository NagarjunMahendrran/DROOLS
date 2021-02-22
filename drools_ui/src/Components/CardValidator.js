
export function cardValidator() {

let status = true;
      if((localStorage.getItem("FileName") == null) || (localStorage.getItem("status") == null) || (localStorage.getItem("version") == null) ){
        status = false;
    }
    console.log(status);
    return status;
}