import {maincont,startblogs} from '../scripts/blog.js'
let count = 0;
let bloglisttemp = document.getElementById('bloglisttemp')
let form = document.querySelector('form');
export function addNewBlog () {
    let title = document.getElementById('blogtitle');
    let date =  document.getElementById('blogdate');
    let summary = document.getElementById('blogsummary');
    let listcontainer = document.getElementById('listcontainer');
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
    let lastfour = (dateval).substring(dateval.length-5,dateval.length-1);
    let listclone = bloglisttemp.content.cloneNode(true)
    let list =  listclone.querySelector('ul');
    maincont.appendChild(list);
    let bloglistitem = document.createElement('li');
    list.appendChild(bloglistitem);
    let itemdesc = document.createElement('p');
    let editbtn = document.createElement('button');
    editbtn.class = 'editbtn'
    editbtn.innerText = 'Edit'
    let removebtn = document.createElement('button')
    removebtn.class = 'removebtn'
    removebtn.innerText = 'Remove'
    bloglistitem.class = 'listitems';
    bloglistitem.id = count.toString();
    editbtn.id = 'editbtn'+ count.toString();
    removebtn.id = 'removebrn'+ count.toString();
    count = count + 1;
    bloglistitem.style.display = 'flex';
    bloglistitem.style.flexDirection = 'row';
    let titletext = title.value;
    titletext = titletext.bold();
    itemdesc.innerHTML= titletext + ' ( ' + dateval + ' ) - ' + summary.value;  
    bloglistitem.append(itemdesc);
    bloglistitem.append(editbtn);
    bloglistitem.append(removebtn);
    editbtn.addEventListener("click",startblogs)
    removebtn.addEventListener("click",function(){
        bloglistitem.remove();
    })
    
}

export function editExistingBlog(id){
    //console.log(btn);
    //let btntid = btn.id;
    btnid = parseInt(id);
    btnid = btnid.toString();
    let itemtoedit = document.getElementById(btnid);
    let paratoedit = itemtoedit.querySelector('p');
    let title = document.getElementById('blogtitle');
    let date =  document.getElementById('blogdate');
    let summary = document.getElementById('blogsummary');
    let listcontainer = document.getElementById('listcontainer');
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
    let lastfour = (dateval).substring(dateval.length-5,dateval.length-1);
    let titletext = title.value;
    titletext = titletext.bold();
    paratoedit.innerHTML= titletext + ' ( ' + lastfour + ' ) - ' + summary.value;


}