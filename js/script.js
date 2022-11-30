


const contenitore = document.getElementById("output");
const bottonePlay = document.querySelector("a.btn-primary");

const numeroQuadrati = document.getElementById("numeroQuadrati");



function getQuadrato(){

    const div = document.createElement("div");

    div.classList.add("quadrato", "text-center", "pt-2", "fs-3");

    div.addEventListener("click", function(){
    
        div.classList.toggle("click");
    
    })

    return div;
}






bottonePlay.addEventListener("click", function(){

    contenitore.innerHTML = "";
    

    const radiceQuadrata = Math.sqrt(numeroQuadrati.value);

    for(let i = 1; i <= numeroQuadrati.value; i++){
        
        const elementoQuadrato = getQuadrato();
        
        elementoQuadrato.style.width = `calc(100% / ${radiceQuadrata})`
        elementoQuadrato.style.height = `calc(100% / ${radiceQuadrata})`


        contenitore.append(elementoQuadrato);
        
        elementoQuadrato.append(i);
        
        elementoQuadrato.addEventListener("click", function(){
            
            console.log(i);
            
        })
        
        
    }
    
})
