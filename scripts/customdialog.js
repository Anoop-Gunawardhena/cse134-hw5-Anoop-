export const Elementsection = document.querySelector('#dialogs');
export const boxtemplate = document.querySelector('template');
export const altbtn = document.getElementById("Alert");
export const cfmbtn = document.getElementById("Confirm");
export const promptbtn = document.getElementById("Prompt");
export const sfpromptbtn = document.getElementById("SafePrompt");
export let altdialogbtn;
export let confirmation;

/*

 function addAlertbox() {
    textout = document.getElementById("textout");
    if(textout != null){
        console.log("output exists")
        textout.innerHTML ='';
    }
    check = document.getElementById("alertbox");
    if(check != null){
        console.log("alert message already there")
        document.removeChild(check);
    }

     boxclone = boxtemplate.content.cloneNode(true)   
     attempt =  boxclone.querySelector('dialog');

    //attempt.textContent = value > magicNumber ? `Less than ${value}` : `Bigger than ${value}`;
   // Elementsection.style.border = "4px solid black";
    Elementsection.style.position = "relative";
    Elementsection.style.margin = "auto";
    Elementsection.style.width = "20%";
    //Elementsection.style.backgroundColor ="yellow";
    Elementsection.appendChild(attempt);
    //dbox.style.backgroundColor ="yellow";
    setTimeout(function(){
    dbox = document.getElementById('alertbox')
    para = dbox.querySelector('p');
    para.style.textAlign = "center";
    altdialogbtn = document.getElementById("alertbtn");
    altdialogbtn.style.position ="relative";
    altdialogbtn.style.width = "25%";
    altdialogbtn.style.textAlign = 'center';
    altdialogbtn.style.left = '40%';   
    altdialogbtn.addEventListener("click",removeAlertbox);},0);
}
function addcfmbox() {
    check = document.getElementById("confirmbox");
    textout = document.getElementById("textout");
    if(textout != null){
        console.log("output exists")
        textout.innerHTML ='';
    }
    if(check != null){
        console.log("confirm message already there")
        document.removeChild(check);
    }

     boxclone = boxtemplate.content.cloneNode(true)   
     attempt =  boxclone.querySelector('#confirmbox');

    //attempt.textContent = value > magicNumber ? `Less than ${value}` : `Bigger than ${value}`;
   // Elementsection.style.border = "4px solid black";
    Elementsection.style.position = "relative";
    Elementsection.style.margin = "auto";
    Elementsection.style.width = "20%";
    //Elementsection.style.backgroundColor ="yellow";
    Elementsection.appendChild(attempt);
    //dbox.style.backgroundColor ="yellow";
    setTimeout(function(){
    dbox = document.getElementById('confirmbox')
    para = dbox.querySelector('p');
    para.style.textAlign = "center";
    cfmdialogbtns = dbox.getElementsByTagName('button');
    cfmdialogbtns[0].style.position ="relative";
    cfmdialogbtns[0].style.width = "26%";
    cfmdialogbtns[0].style.textAlign = 'center';
    cfmdialogbtns[0].style.left = '10%';   
    cfmdialogbtns[1].style.position ="relative";
    cfmdialogbtns[1].style.width = "42%";
    cfmdialogbtns[1].style.textAlign = 'center';
    cfmdialogbtns[1].style.left = '27%'; 
    cfmdialogbtns[0].addEventListener("click",function() {
        confirmation = true;
        removecfmbox();
    });
    cfmdialogbtns[1].addEventListener("click",function() {
        confirmation = false;
        removecfmbox();
    });
    },0);
}
function addpromptbox(){
    check = document.getElementById("promptbox");
    textout = document.getElementById("textout");
    if(textout != null){
        console.log("output exists")
        textout.innerHTML ='';
    }
    if(check != null){
        console.log("prompt message already there")
        document.removeChild(check);
    }

     boxclone = boxtemplate.content.cloneNode(true)   
     attempt =  boxclone.querySelector('#promptbox');

    //attempt.textContent = value > magicNumber ? `Less than ${value}` : `Bigger than ${value}`;
   // Elementsection.style.border = "4px solid black";
    Elementsection.style.position = "relative";
    Elementsection.style.margin = "auto";
    Elementsection.style.width = "20%";
    //Elementsection.style.backgroundColor ="yellow";
    Elementsection.appendChild(attempt);
    //dbox.style.backgroundColor ="yellow";
    setTimeout(function(){
    dbox = document.getElementById('promptbox')
    para = dbox.querySelector('p');
    para.style.textAlign = "center";
    inp = dbox.querySelector('input')
    inp.style.width = '90%';
    inp.placeholder = "Type name here";
    promptdialogbtns = dbox.getElementsByTagName('button');
    promptdialogbtns[0].style.position ="relative";
    promptdialogbtns[0].style.width = "26%";
    promptdialogbtns[0].style.textAlign = 'center';
    promptdialogbtns[0].style.left = '10%';   
    promptdialogbtns[1].style.position ="relative";
    promptdialogbtns[1].style.width = "42%";
    promptdialogbtns[1].style.textAlign = 'center';
    promptdialogbtns[1].style.left = '27%'; 
    promptdialogbtns[0].addEventListener("click",function() {
        entered = true;
        removepromptbox();
    });
    promptdialogbtns[1].addEventListener("click",function() {
        entered = false;
        removepromptbox();
    })},0);
}
function removecfmbox() {
    box = document.getElementById('confirmbox');
    if(box != null){
        box.remove();
    }
    //Elementsection.style.border = 'none';
    outcage = document.getElementById('textout');
    if (confirmation == true){
        outcage.innerHTML = "value returned by the confirm method is true"
    }
    else{
        outcage.innerHTML = "value returned by the confirm method is false"
    }
    //console.log(document.getElementById('confirmbox').nodeType)
   
}
function removepromptbox() {
    outcage = document.getElementById('textout');

    txtval = document.getElementById('promptinp')

    if(entered == true){
        outcage.innerHTML ="User's name is " + txtval.value;
    }
    else{
        outcage.innerHTML ="User did not enter anything";

    }
    box = document.getElementById('promptbox');
    if(box != null){
        box.remove();
    }
}
 function removeAlertbox() {
    Elementsection.removeChild(document.getElementById('alertbox'));
    Elementsection.style.border = 'none';
}
altbtn.addEventListener("click",addAlertbox);
cfmbtn.addEventListener("click",addcfmbox);
promptbtn.addEventListener("click",addpromptbox)
*/