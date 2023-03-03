export function addNewBlog () {
    let title = document.getElementById('blogtitle');
    let date =  document.getElementById('blogdate');
    let summary = document.getElementById('blogsummary');
    if(title.innerHTML == null || title.innerHTML == ''){
        window.alert("please enter a title");
        return;
    }
    if(summary.innerHTML == null || summary.innerHTML == ''){
        window.alert("please enter a summary");
        return;
    }
    let islist  = document.getElementById('bloglist');
    if(islist == null){
         let bloglist =document.createElement('ul');
    }
    let bloglistitem = document.createElement('li');
    bloglistitem.class = 'listitems';
    bloglistitem.innerHTML = title.textContent;
    


}
export function removeBlog(){

}