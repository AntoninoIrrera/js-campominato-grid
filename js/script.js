


const contenitore = document.getElementById("output");
const bottonePlay = document.querySelector("a.btn-primary");

const numeroQuadrati = document.getElementById("numeroQuadrati");

const erroreNumero = document.getElementById("outputErroreNumero");

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
    
    const numeroQuadratiValore = numeroQuadrati.value;

    const radiceQuadrata = Math.sqrt(numeroQuadrati.value);

    if(numeroQuadratiValore > 506){
        erroreNumero.innerHTML = "Inserire solo numeri minori o uguali a 506";
    }else{

        erroreNumero.innerHTML = "";
        
        
        for(let i = 1; i <= numeroQuadratiValore; i++){
            
            const elementoQuadrato = getQuadrato();
            
            elementoQuadrato.style.width = `calc(100% / ${radiceQuadrata})`
            elementoQuadrato.style.height = `calc(100% / ${radiceQuadrata})`
            
            
            contenitore.append(elementoQuadrato);
            
            elementoQuadrato.append(i);
            
            elementoQuadrato.addEventListener("click", function(){
                
                console.log(i);
                
            })
            
            
        }
    
    
    }
     
    

})
