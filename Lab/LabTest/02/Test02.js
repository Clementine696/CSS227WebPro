function inputtext(e){
    if(e.code=="Enter")
    {
        if(input.value.length != 0)
        {
            text = input.value;
            input.value = "";
            const node = document.createElement("li");
            const node2 = document.createElement("li");
            // Create a text node:
            const textnode = document.createTextNode(text);
            const textnode2 = document.createTextNode("Remove " + text);
            // Append the text node to the "li" node:
            node.appendChild(textnode);
            node2.appendChild(textnode2);
            node.classList.add('listtext');
            node2.classList.add('close');
            list.appendChild(node);
            list.appendChild(node2);
            
            const element = document.querySelectorAll('li');  
            let i=element.length;
            element[i-2].addEventListener('click', function(event){
                this.classList.toggle('finish');
            });
            element[i-1].addEventListener('click', function(event){
                element[i-1].classList.add('hidden');
                element[i-2].classList.add('hidden');
            });
        }
    }  
}

const input = document.getElementById("input");
const list = document.getElementById("list");
const xlist = document.getElementById("xlist");
input.addEventListener("keypress",inputtext);
var text;

