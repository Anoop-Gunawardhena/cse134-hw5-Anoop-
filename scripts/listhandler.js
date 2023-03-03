import {maincont} from '../scripts/blog.js'
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
    let listclone = bloglisttemp.content.cloneNode(true)
    let list =  listclone.querySelector('ul');
    maincont.appendChild(list);
    let bloglistitem = document.createElement('li');
    list.appendChild(bloglistitem);
    let itemdesc = document.createElement('p');
    let editbtn = document.createElement('button');
    editbtn.class = 'editbtn'
    let removebtn = document.createElement('button')
    removebtn.class = 'removebtn'
    bloglistitem.class = 'listitems';
    bloglistitem.id = count.toString();
    editbtn.id = 'editbtn'+ count.toString();
    removebtn.id = 'removebrn'+ count.toString();
    count = count + 1;
    itemdesc.value = title.value + ' ( ' + date.value + ' ) - ' + summary.value;  
    bloglistitem.append(itemdesc);
    bloglistitem.append(editbtn);
    bloglistitem.append(removebtn);
    removebtn.addEventListener("click",function(){
        bloglistitem.remove();
    })
    
}

export function removeBlog(){

}