var menulist = document.getElementById("menulist");
var pending_area = document.getElementById("pending-area");
var fund_detail1 = document.getElementById("fund-detail1");
var fund_detail2 = document.getElementById("fund-detail2");
var fund_detail3 = document.getElementById("fund-detail3");
var grants = document.getElementById("grants");
var con = document.getElementById("contributions");
var ex = document.getElementById("exchange");
var others = document.getElementById("other");
console.log(info, enterDate, recievedDate, noOfShares, type, amount, statuss);
let object='';
function getDetails(){
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","http://127.0.0.1:5500/Js/data.json",false);
    xmlhttp.send();
    if(xmlhttp.readyState==4 && xmlhttp.status==200){
        var res=xmlhttp.responseText;
         object=JSON.parse(res);
    }
}
getDetails();
menulist.style.maxHeight = "0px";
function toggleMenu() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "150px";
    } else {
        menulist.style.maxHeight = "0px";
    }
}
function remove() {
    pending_area.style.display = "none";
}
function selectedOption() {
    let date='';
    var selectElement = document.querySelector('#select-box');
    var selected_option = selectElement.options[selectElement.selectedIndex].value;
    // console.log(selected_option);
    document.getElementById("number").innerHTML = selected_option;
    if(selected_option=='A1050919')
    date='12/12/2012';
    else if(selected_option=='A1050920')
    date='21/10/2018' 
    else
    date='30/08/2015';
document.getElementById("balance-date").innerHTML=date;


}
function backgroundColor() {
    grants.style.borderTopColor = "rgba(0, 103, 120, 0.1)";
    con.style.borderTopColor = "rgba(0, 103, 120, 0.1)";
    ex.style.borderTopColor = "rgba(0, 103, 120, 0.1)";
    others.style.borderTopColor = "rgba(0, 103, 120, 0.1)";
    grants.style.backgroundColor = "#F0F0F0";
    con.style.backgroundColor = "#F0F0F0";
    ex.style.backgroundColor = "#F0F0F0";
    others.style.backgroundColor = "#F0F0F0";
}
let selected_obj="";
function show(selected_obj){
document.getElementById("info").innerHTML = object[selected_obj].info;
document.getElementById("enterDate").innerHTML = object[selected_obj].EnteredDate;
document.getElementById("recievedDate").innerHTML = object[selected_obj].ReceivedDate;
document.getElementById("noOfShares").innerHTML = object[selected_obj].NumberofShares;
document.getElementById("amount").innerHTML = object[selected_obj].Amount;
document.getElementById("statuss").innerHTML = object[selected_obj].Status;
document.getElementById("type").innerHTML = object[selected_obj].Type;
}
function grant() {
    backgroundColor();
    grants.style.backgroundColor = "white";
    grants.style.borderTopColor = "#006778";
    selected_obj="Grants";
    show(selected_obj);
}
function contributions() {
    backgroundColor();
    con.style.backgroundColor = "white";
    con.style.borderTopColor = "#006778";
    selected_obj="Contributions";
    show(selected_obj);
}
function exchange() {
    backgroundColor();
    ex.style.backgroundColor = "white";
    ex.style.borderTopColor = "#006778";
    selected_obj="Exchange";
    show(selected_obj);
}
function other() {
    backgroundColor();
    others.style.backgroundColor = "white";
    others.style.borderTopColor = "#006778";
    selected_obj="Other Transactions";
    show(selected_obj);
}
let i=1;
let index2=0;
let len=object.corauselArr.length;
function nextPage(){
let index=i%len;
document.getElementById("featured").innerHTML=object.corauselArr[index].feature;
document.getElementById("learn").innerHTML=object.corauselArr[index].Learn;
document.getElementById("paragraph").innerHTML=object.corauselArr[index].Para;
i++;

index2=index;
console.log(index2);
}
function previousPage(){
index2--;
if(index2<0){
    index2=len-1;
}
document.getElementById("featured").innerHTML=object.corauselArr[index2].feature;
document.getElementById("learn").innerHTML=object.corauselArr[index2].Learn;
document.getElementById("paragraph").innerHTML=object.corauselArr[index2].Para;
} 


// let res='';
// fetch("Js/data.json")
// .then(response => response.json())
// .then(datas => {
// //    disp(datas);
// res=datas;
// }
// );
// function disp(datas) {
// return datas;
// }
// console.log(res);