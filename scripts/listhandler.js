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


}
export function removeBlog(){

}