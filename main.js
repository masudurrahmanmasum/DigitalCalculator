function getNumber(number){
    var existingNumver = $("#beaut").val();
   $("#beaut").val(existingNumver + number);
}
function clearAll(){
    $("#beaut").val('');
    
}
function calculate(){
    var result = eval($("#beaut").val())
    $("#beaut").val( result.toPrecision(8));
}
function deleteOne(){
    var presentValue = $("#beaut").val()
    if(presentValue != ''){
        $("#beaut").val(presentValue.slice(0,-1));
    }
}
