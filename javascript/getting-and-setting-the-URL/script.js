function navigatePage(){
    let pageName = window.location.pathname
    if(pageName == "/index.html"){
        window.location.pathname = "/about.html"
    }else{
        window.location.pathname = "/index.html"
    }
}