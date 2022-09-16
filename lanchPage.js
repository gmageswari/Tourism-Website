let signedUpUsers;
let userArr = localStorage.getItem("users");
console.log(userArr);
if(userArr !== null){
    signedUpUsers = JSON.parse(userArr);
}
else{
    signedUpUsers = [];
}
function signUpClicked(event){  
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    signedUpUsers.push({
        username,
        password
    });
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    localStorage.setItem("users",JSON.stringify(signedUpUsers));
    console.log("Stored successfully");
}