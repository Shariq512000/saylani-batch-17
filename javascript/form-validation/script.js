function submitForm(){
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    if(userName.length == 0){
        alert("Please Fill Out Name")
    }
    if(!userEmail.match(regex)){
        alert("Enter a Valid Email")
    }
}