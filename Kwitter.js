function LogIn(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if(username != "" && password != ""){
        localStorage.setItem("Username",username);
        localStorage.setItem("Password",password);
        window.location = "Kwitter_Room.html";
    }
    else{
        window.alert("Please enter username or password");
    }
}