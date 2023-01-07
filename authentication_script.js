function register()
{
    //authenticate the user input using validate function of jquery
    $.post("authentication_backend.php",{"username": username,"email":email,"password":password},function(data){
        console.log(data);})
}