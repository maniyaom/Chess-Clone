let files = document.querySelectorAll(".files");
let file = 'a'
for (const i of files){
    let rank = 8
    for (const j of i.children){ 
        j.setAttribute("id",file+rank);
        rank--;
    }
    file = String.fromCharCode(file.charCodeAt() + 1);
}