export function addNewBlog () {
    title = document.getElementById('blogtitle');
    date =  document.getElementById('blogdate');
    summary = document.getElementById('blogsummary');
    if(title.innerHTML == null || title.innerHTML == ''){
        window.alert("please enter a title");
        return;
    }
    if(summary.innerHTML == null || summary.innerHTML == ''){
        window.alert("please enter a summary");
        return;
    }


}
function removeBlog(){

}