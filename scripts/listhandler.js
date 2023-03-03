import {maincont,startblogs} from '../scripts/blog.js'
let count = 0;
let bloglisttemp = document.getElementById('bloglisttemp')
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
    if( date.value == 'dd/mm/yyyy'){
        window.alert('please enter a data');
    }
    let dateval = date.value;
    let lastfour = (dateval).substrng(dateval.length-5,dateval.length-1);
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
    itemdesc.innerText= title.value + ' ( ' + lastfour + ' ) - ' + summary.value;  
    bloglistitem.append(itemdesc);
    bloglistitem.append(editbtn);
    bloglistitem.append(removebtn);
    editbtn.addEventListener("click",startblogs)
    removebtn.addEventListener("click",function(){
        bloglistitem.remove();
    })
    
}

export function editExistingBlog(event){
    let btn = event.target;
    let btntid = btn.id;
    btnid = parseInt(btnid);
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
    if( date.value == 'dd/mm/yyyy'){
        window.alert('please enter a data');
    }
    let dateval = date.value;
    let lastfour = (dateval).substrng(dateval.length-5,dateval.length-1);
    paratoedit.innerText= title.value + ' ( ' + lastfour + ' ) - ' + summary.value;


}