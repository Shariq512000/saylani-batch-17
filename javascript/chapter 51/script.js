function expandPara(condition){
    let seeLess = `Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. <a href="JavaScript:void(0)" onclick="expandPara('seeAll')">See More</a>`
    let seeAll = `Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.<a href="JavaScript:void(0)" onclick="expandPara('seeLess')">See Less</a>`
    if(condition == "seeAll"){
        document.getElementById("detailPara").innerHTML = seeAll
    }else{
        document.getElementById("detailPara").innerHTML = seeLess
    }
    // document.getElementById("test").innerHTML = "<h1>Hello World</h1>"
}

function showList(){
    document.getElementById("list").innerHTML = `<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>`
}

function showPopup(){
    document.querySelector(".popuplayout").style.display = "flex"
    document.querySelector("body").style.overflowY = "hidden"
}

function hidePopup(){
    document.querySelector(".popuplayout").style.display = "none"
    document.querySelector("body").style.overflowY = "auto"
}