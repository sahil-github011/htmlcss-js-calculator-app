function display_num(num){

    result.value += num;
}
function clearbox(){
    result.value = ' ';
}
function remove_last(){
   result.value = result.value.slice(0,-1);
}

function evaluateExpression(){
    result.value = eval(result.value);
}