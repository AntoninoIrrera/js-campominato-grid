


const contenitore = document.getElementById("output");
const bottonePlay = document.querySelector("a.btn-primary");





function getQuadrato(){

    const div = document.createElement("div");

    div.classList.add("quadrato", "text-center", "pt-2", "fs-3");

    div.addEventListener("click", function(){
    
        div.classList.toggle("click");
    
    })

    return div;
}






bottonePlay.addEventListener("click", function(){


    for(let i = 1; i <= 100; i++){
        
        const elementoQuadrato = getQuadrato();
    
        contenitore.append(elementoQuadrato);
    
        elementoQuadrato.append(i);

        elementoQuadrato.addEventListener("click", function(){

            console.log(i);

        })


    }

})
