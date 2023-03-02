export const Elementsection = document.querySelector('#dialogs');
export const boxtemplate = document.querySelector('template');
export const altbtn = document.getElementById("Alert");
export const cfmbtn = document.getElementById("Confirm");
export const promptbtn = document.getElementById("Prompt");
export const sfpromptbtn = document.getElementById("SafePrompt");
export const textout = document.getElementById("textout");
export let altdialogbtn;
export let confirmation;
export let entered;



 export function addAlertbox() {
    
    if(textout != null){
        console.log("output exists")
        textout.innerHTML ='';
    }
    let check = document.getElementById("alertbox");
    if(check != null){
        console.log("alert message already there")
        document.removeChild(check);
    }

     let boxclone = boxtemplate.content.cloneNode(true)   
     let attempt =  boxclone.querySelector('dialog');

    //attempt.textContent = value > magicNumber ? `Less than ${value}` : `Bigger than ${value}`;
   // Elementsection.style.border = "4px solid black";
    Elementsection.style.position = "relative";
    Elementsection.style.margin = "auto";
    Elementsection.style.width = "20%";
    //Elementsection.style.backgroundColor ="yellow";
    Elementsection.appendChild(attempt);
    //dbox.style.backgroundColor ="yellow";
    setTimeout(function(){
    let dbox = document.getElementById('alertbox')
    let para = dbox.querySelector('p');
    para.style.textAlign = "center";
    let altdialogbtn = document.getElementById("alertbtn");
    altdialogbtn.style.position ="relative";
    altdialogbtn.style.width = "25%";
    altdialogbtn.style.textAlign = 'center';
    altdialogbtn.style.left = '40%';   
    altdialogbtn.addEventListener("click",removeAlertbox);},0);
}
export function addcfmbox() {
    let check = document.getElementById("confirmbox");
    if(textout != null){
        console.log("output exists")
        textout.innerHTML ='';
    }
    if(check != null){
        console.log("confirm message already there")
        document.removeChild(check);
    }

    let boxclone = boxtemplate.content.cloneNode(true)   
     let attempt =  boxclone.querySelector('#confirmbox');

    //attempt.textContent = value > magicNumber ? `Less than ${value}` : `Bigger than ${value}`;
   // Elementsection.style.border = "4px solid black";
    Elementsection.style.position = "relative";
    Elementsection.style.margin = "auto";
    Elementsection.style.width = "20%";
    //Elementsection.style.backgroundColor ="yellow";
    Elementsection.appendChild(attempt);
    //dbox.style.backgroundColor ="yellow";
    setTimeout(function(){
    let dbox = document.getElementById('confirmbox')
    let para = dbox.querySelector('p');
    para.style.textAlign = "center";
    let cfmdialogbtns = dbox.getElementsByTagName('button');
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
export function addpromptbox(){
    let check = document.getElementById("promptbox");
    if(textout != null){
        console.log("output exists")
        textout.innerHTML ='';
    }
    if(check != null){
        console.log("prompt message already there")
        document.removeChild(check);
    }

    let boxclone = boxtemplate.content.cloneNode(true)   
     let attempt =  boxclone.querySelector('#promptbox');

    //attempt.textContent = value > magicNumber ? `Less than ${value}` : `Bigger than ${value}`;
   // Elementsection.style.border = "4px solid black";
    Elementsection.style.position = "relative";
    Elementsection.style.margin = "auto";
    Elementsection.style.width = "20%";
    //Elementsection.style.backgroundColor ="yellow";
    Elementsection.appendChild(attempt);
    //dbox.style.backgroundColor ="yellow";
    setTimeout(function(){
    let dbox = document.getElementById('promptbox')
    let para = dbox.querySelector('p');
    para.style.textAlign = "center";
    let inp = dbox.querySelector('input')
    inp.style.width = '90%';
    inp.placeholder = "Type name here";
    let promptdialogbtns = dbox.getElementsByTagName('button');
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
export function removecfmbox() {
    let box = document.getElementById('confirmbox');
    if(box != null){
        box.remove();
    }
    //Elementsection.style.border = 'none';
    let outcage = document.getElementById('textout');
    if (confirmation == true){
        outcage.innerHTML = "value returned by the confirm method is true"
    }
    else{
        outcage.innerHTML = "value returned by the confirm method is false"
    }
    //console.log(document.getElementById('confirmbox').nodeType)
   
}
export function removepromptbox() {
    let outcage = document.getElementById('textout');

    let txtval = document.getElementById('promptinp')

    if(entered == true){
        outcage.innerHTML ="User's name is " + DOMPurify.sanitize(txtval.value);
    }
    else{
        outcage.innerHTML ="User did not enter anything";

    }
    let box = document.getElementById('promptbox');
    if(box != null){
        box.remove();
    }
}
 export function removeAlertbox() {
    Elementsection.removeChild(document.getElementById('alertbox'));
    Elementsection.style.border = 'none';
}
altbtn.addEventListener("click",addAlertbox);
cfmbtn.addEventListener("click",addcfmbox);
promptbtn.addEventListener("click",addpromptbox)
