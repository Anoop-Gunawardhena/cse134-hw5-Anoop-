const alertbtn = document.getElementById("Alert");
const confirmbtn = document.getElementById("Confirm");
const promptbtn = document.getElementById("Prompt");
const safepromptbtn = document.getElementById("SafePrompt");
let opt = document.getElementsByName("res")[0];
let cityname;//console.log(opt);
//let optprompt = document.getElementsByName("res")[1];
//let optsafeprompt = document.getElementsByName("res")[2];
const regex = new RegExp('\d');
//console.log(optprompt)
function throwalert() {
    opt.innerHTML = '';
    setTimeout(() => alert('Remember to drink water today'));
    };


function throwcfm() {
    opt.innerHTML = '';
   setTimeout(function onTimeout() {
    if(confirm(("Do you want to leave this page"))){
    opt.innerHTML = DOMPurify.sanitize("The value returned by the confirm method is : OK ");
    }
    else{
        opt.innerHTML = DOMPurify.sanitize("The value returned by the confirm method is : Cancel");

    } }, 0);
}
function throwprompt() {
    opt.innerHTML = '';
    setTimeout( function () {
    let city = prompt("Please enter the name of your favourite city", "Des moines");
    if(city == null || city == ""){
    opt.innerHTML = DOMPurify.sanitize("User didnt enter anything");
    }
    else{
        
        opt.innerHTML = DOMPurify.sanitize("the user typed in " + city);
    }
},0);
}
function helper(strings,cityname){
    console.log(cityname);
    str0 = strings[0];
    if(cityname == null || cityname == ""){
        let res = "User didnt enter anything";
        return `${res}`;
        }
    else if (/\d/.test(cityname)){
        let res = "an invalid city because it has a number";
        return `${str0}${res}`;
    }
    else {
        console.log("didnt pass")
        return `${str0}${cityname}`;
    }
}
function throwsafeprompt(){
    opt.innerHTML = '';
    setTimeout( function () {
   cityname = prompt("Please enter the name of your favourite city", "Des moines");
   let clean = DOMPurify.sanitize(cityname) 
    opt.innerHTML = helper`This person chose ${clean}`;},0);

}
alertbtn.addEventListener("click",throwalert);

confirmbtn.addEventListener("click",throwcfm);

promptbtn.addEventListener("click",throwprompt);
safepromptbtn.addEventListener("click",throwsafeprompt);


       
