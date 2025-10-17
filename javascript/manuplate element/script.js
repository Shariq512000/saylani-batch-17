// document.getElementById("img").src = "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176"
// document.getElementById("img").className = "def"

function darkMode(){
    if(document.querySelector("html").className == "darkMode"){
        document.getElementById("switchButton").innerText = "Dark Mode"
        document.querySelector("html").className = ""
    }else{
        document.getElementById("switchButton").innerText = "Light Mode"
        document.querySelector("html").className = "darkMode"
    }
    
}