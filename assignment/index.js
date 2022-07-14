function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length==0){
        seterror("email", "*please enter a valid email");
        returnval = false;
    }

    var gender = document.forms['myForm']["fgender"].value;
    if(gender!= "male" && gender!= "female" ){
        seterror("gender", "*please enter gender!");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    var phno= /^\d{10}$/;
    if (phone.match(phno)){
    }
    else{
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

     
    var password = document.forms['myForm']["fpass"].value;
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
    if (password.match(decimal)){

      
    }
    else{
        seterror("pass", "*Your password needs to be  one uppercase letter, one symbol, and a number.");
         returnval=false;   
    }


    return returnval;
}
