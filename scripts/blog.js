
    import {addNewBlog,buildList,editExistingBlog} from '../scripts/listhandler.js'
    export let maincont = document.getElementById('listcontainer');
    let bodycont = document.getElementById('bodycontainer');
    let addbtn = document.getElementById('addbtn');
    let formtemplate = document.getElementById('formtemp');
    let cancelbtn;
    let savebtn;
    console.log(maincont.childElementCount);
    if(localStorage.length == 0){
        bodycont.style.display = 'flex';
        bodycont.style.flexDirection = 'row';
        bodycont. style.gap = '10px'
        setTimeout(function(){
        let displayp =document.createElement("p");
        displayp.textContent ="Add some blogs?";
    maincont.appendChild(displayp);

    },0);
}
buildList();
    
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
        savebtn.id = btn.id;
        console.log("id of button that called startblogs " + savebtn.id)
        savebtn.addEventListener('click',function(){
            let inputs = validateInputs();
            if(inputs != null){
            editExistingBlog(savebtn.id,inputs[0],inputs[1]);
            form.remove();
            }
        });
    }

    else{
    console.log("id of button that called startblogs " + savebtn.id);
    savebtn.addEventListener("click",function(){
        let inputs = validateInputs();
        if(inputs != null){
        addNewBlog(inputs[0],inputs[1]);
        form.remove();
        }

    });  //form.style.flexDirection = 'column';
}
}
function validateInputs (){
    let title = document.getElementById('blogtitle');
    let date =  document.getElementById('blogdate');
    let summary = document.getElementById('blogsummary');
    //let listcontainer = document.getElementById('listcontainer');
    if(title.value == null || title.value == ''){
        window.alert("please enter a title");
        return;
    }
    if(summary.value == null || summary.value == ''){
        window.alert("please enter a summary");
        return;
    }
    if( date.value == ''){
        window.alert('please enter a date');
        return;
    }
    let dateval = date.value;
    dateval = dateval.substring(0,4);
    let titletext = title.value;
    titletext = titletext.bold();
    let tostore = '( '+ dateval + ' ) : '+ summary.value;
    return [titletext,tostore]
}
addbtn.style.width = '60px';
addbtn.addEventListener("click",startblogs);
