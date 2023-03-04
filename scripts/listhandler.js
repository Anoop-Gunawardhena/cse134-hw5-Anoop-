import {maincont,startblogs} from '../scripts/blog.js'
//let count = 0;
let form = document.querySelector('form');
export function addNewBlog (titletext, tostore) {
    window.localStorage.setItem(titletext.toString(),tostore.toString())
    let list = document.getElementById('bloglist');
    createItem(titletext, tostore, list);
    //let lastfour = (dateval).substring(dateval.length-5,dateval.length-1);
    // let listclone = bloglisttemp.content.cloneNode(true)
    // let list =  listclone.querySelector('ul');
    // maincont.appendChild(list);
    // let bloglistitem = document.createElement('li');
    // list.appendChild(bloglistitem);
    // let space = document.createElement('p');
    // space.textContent = '  ';
    // space.class = 'contentoptionspace';
    // let itemdesc = document.createElement('p');
    // let editbtn = document.createElement('button');
    // editbtn.class = 'editbtn';
    // editbtn.innerText = 'Edit';
    // let removebtn = document.createElement('button')
    // removebtn.class = 'removebtn'
    // removebtn.innerText = 'Remove'
    // bloglistitem.class = 'listitems';
    // bloglistitem.id = count.toString();
    // editbtn.id = 'editbtn'+ count.toString();
    // removebtn.id = 'removebrn'+ count.toString();
    // count = count + 1;
    // bloglistitem.style.display = 'flex';
    // bloglistitem.style.flexDirection = 'row';
    
    // itemdesc.innerHTML= titletext + ' ( ' + dateval + ' ) - ' + summary.value;  
    // bloglistitem.append(itemdesc);
    // bloglistitem.append(space);
    // bloglistitem.append(editbtn);
    // bloglistitem.append(space);
    // bloglistitem.append(removebtn);
    // editbtn.addEventListener("click",startblogs)
    // removebtn.addEventListener("click",function(){
    //     bloglistitem.remove();
    // })
    
}

export function buildList(){
    let bloglisttemp = document.getElementById('bloglisttemp');
    let listclone = bloglisttemp.content.cloneNode(true)
    let list =  listclone.querySelector('ul');
    list.id = 'bloglist'
    maincont.appendChild(list);
    console.log('list made');
    console.log('localstorage size is ' + localStorage.length)
    for ( let i = 0 ; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let data = localStorage.getItem(key);
        console.log("key is " + key)
        console.log('data is ' + data);
        createItem(key, data, list);
    }
}

export function createItem(titletext, tostore, list){

    let bloglistitem = document.createElement('li');
    list.appendChild(bloglistitem);
    let space = document.createElement('p');
    space.innerHTML = '  ';
    space.class = 'contentoptionspace';
    let itemdesc = document.createElement('p');
    itemdesc.id = 'parag';
    let editbtn = document.createElement('button');
    editbtn.class = 'editbtn';
    editbtn.style.border = 'none'
    editbtn.style.background = 'none'
    editbtn.innerHTML = '<b>Edit</b>';
    let removebtn = document.createElement('button')
    removebtn.class = 'removebtn'
    removebtn.innerHTML = '<b> Remove </b>'
    removebtn.style.border = 'none';
    removebtn.style.background = 'none';
    bloglistitem.class = 'listitems';
    let titstring = titletext.toString()
    let simptit = titstring.replace( /(<([^>]+)>)/ig, '');
    bloglistitem.id = simptit;
    console.log('stored id is' + titletext + tostore);
    editbtn.id = titletext.toString();
    console.log("editbtn id is " + editbtn.id);
    //removebtn.id = 'removebrn'+ count.toString();
    //count = count + 1;
    bloglistitem.style.display = 'flex';
    bloglistitem.style.flexDirection = 'row';
    itemdesc.innerHTML= titletext + tostore;  
    bloglistitem.append(itemdesc);
    bloglistitem.append(space);
    bloglistitem.append(editbtn);
    bloglistitem.append(space);
    bloglistitem.append(removebtn);
    editbtn.addEventListener("click",startblogs)
    removebtn.addEventListener("click",function(){
        window.localStorage.removeItem(titletext.toString());
        bloglistitem.remove();
    })
    
}

export function editExistingBlog(id,titletext,tostore){
    //console.log(btn);
    //let btntid = btn.id;
    let locatorstring  = id.replace( /(<([^>]+)>)/ig, '');
    window.localStorage.removeItem(id)
    let list = document.getElementById('bloglist');
   // let btn = document.getElementById(id);
    let bloglistitem = list.querySelector('#'+locatorstring);
    console.log('bloglistitem id is ' + bloglistitem.id)
    //let btnid = parseInt(id);
    //btnid = btnid.toString();
   // let itemtoedit = document.querySelector(btnid);
    let paratoedit = bloglistitem.querySelector('#parag');
    let listcontainer = document.getElementById('listcontainer');
    //let lastfour = (dateval).substring(dateval.length-5,dateval.length-1);
    paratoedit.innerHTML= titletext + tostore;
    window.localStorage.setItem(titletext.toString(),tostore.toString())

}