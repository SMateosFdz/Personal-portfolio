
function show(elem){
    const noInfIntDiv = elem.querySelectorAll(".no-inf-int");
    console.log("hola");
    noInfIntDiv.forEach((div) =>{
        div.style.display = div.style.display == "none" ? "block" : "none";
    });
    console.log("Hola");
}