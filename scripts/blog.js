
    import {addNewBlog,editExistingBlog} from '../scripts/listhandler.js'
    export let maincont = document.getElementById('listcontainer');
    let bodycont = document.getElementById('bodycontainer');
    let addbtn = document.getElementById('addbtn');
    let formtemplate = document.getElementById('formtemp');
    let cancelbtn;
    let savebtn;
    console.log(maincont.childElementCount);
    if(maincont.childElementCount == 0){
        bodycont.style.display = 'flex';
        bodycont.style.flexDirection = 'row';
        bodycont. style.gap = '10px'
        setTimeout(function(){
        let displayp =document.createElement("p");
        displayp.textContent ="Add some blogs?";
    maincont.appendChild(displayp);

    },0);
}
export function startblogs(event){
    let btn = event.target;
    let check = document.getElementById('subform');
    if(check != null){
        check.remove();
    }
    // let currentgap = bodycont.style.gap
    // bodycont.style.flexDirection = 'column'
    let formclone = formtemplate.content.cloneNode(true);
    let form =  formclone.querySelector('dialog');
    document.body.appendChild(form);
    form = document.getElementById('subform');
    form.style.border = '10px solid black';
    let cancelbtn = form.querySelector('#cancelbtn');
    let savebtn = form.querySelector('#savebtn');
    cancelbtn.addEventListener("click", function(){
        let dbox = document.getElementById('subform');
        dbox.remove();
    });
    if (btn.id != 'addbtn'){
        savebtn.id == btn.id;
        savebtn.addEventListener('click',editExistingBlog);
    }
    else{
    savebtn.addEventListener("click",addNewBlog)   //form.style.flexDirection = 'column';
}
}
addbtn.style.width = '60px';
addbtn.addEventListener("click",startblogs);
