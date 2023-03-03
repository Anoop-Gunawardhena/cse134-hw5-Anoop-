let count = 0;
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
    let islist  = document.getElementById('bloglist');
    if(islist == null){
         let bloglist =document.createElement('ul');
         bloglist.id = 'bloglist';
        listcontainer.appendChild(bloglist);
    }
    let bloglistitem = document.createElement('li');
    let itemdesc = document.createElement('p');
    let editbtn = document.createElement('button');
    editbtn.class = 'editbtn'
    let removebtn = document.createElement('button')
    removebtn.class = 'removebtn'
    bloglistitem.class = 'listitems';
    bloglistitem.id = count.toString();
    count = count + 1;
    itemdesc.value = title.value + ' ( ' + date.value + ' ) - ' + summary.value;  
    bloglistitem.append(itemdesc);
    bloglistitem.append(editbtn);
    bloglistitem.append(removebtn);
    removebtn.addEventListener("click",function(){
        bloglistitem.remove();
    })
    setTimeout(function (){
        islist.appendChild(bloglistitem);
},0);
}

export function removeBlog(){

}