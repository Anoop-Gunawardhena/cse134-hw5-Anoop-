export function addNewBlog () {
    let title = document.getElementById('blogtitle');
    let date =  document.getElementById('blogdate');
    let summary = document.getElementById('blogsummary');
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
    }
    let bloglistitem = document.createElement('li');
    bloglistitem.class = 'listitems';
    bloglistitem.innerHTML = title.textContent;
    


}
export function removeBlog(){

}