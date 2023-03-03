
    let maincont = document.getElementById('listcontainer');
    let bodycont = document.getElementById('bodycontainer');
    let addbtn = document.getElementsByTagName('button');
    let formtemplate = document.querySelector('template');
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
function startblogs(){
    let currentgap = bodycont.style.gap
    maincont.style.flexDirection = 'column'
    let formclone = formtemplate.content.cloneNode(true)
    let form =  formclone.querySelector('form');
    maincont.append(form);

}
addbtn[0].addEventListener("click",startblogs);
