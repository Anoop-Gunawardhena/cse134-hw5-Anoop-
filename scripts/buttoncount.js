let counter;
class ButtonCount extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const button = document.createElement("button");
        button.textContent ="CLicked 0 times";
        shadow.appendChild(button);
        shadow.querySelector("button").textContent = "Times Clicked: 0";
      
        //onst count = document.createElement("div");
        //count.textContent = "0";
        //button.textContent = "Times clicked: ";
        //shadoq.
        
        //shadow.querySelector("button").textContent = "Times Clicked: " + counter.toString();
        
        button.addEventListener("click", () => {
            counter = counter + 1;
            console.log(counter);
            shadow.querySelector("button").textContent = "Times Clicked: " + counter.toString();
            
        });
         
    }

}
window.addEventListener("load", function() {
    counter = 0;
});
customElements.define("button-count",ButtonCount);
document.body.appendChild(document.createElement("button-count"));

