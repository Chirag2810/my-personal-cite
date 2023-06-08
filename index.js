function hideSideBar(){
    document.querySelector("#side-bar").hidden=true;

}
function show(){
    document.querySelector("#side-bar").hidden=false;
}

document.querySelector("#welcome").addEventListener("mouseover",hideSideBar);
document.querySelector("#welcome").addEventListener("onload",hideSideBar);
document.querySelector(".sb").addEventListener("mouseover",show);
