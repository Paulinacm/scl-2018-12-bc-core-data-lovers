
let pokemonApi = fetch('./data/pokemon/pokemon.json')

let contPokemones = document.getElementById("	pokemones")
 
pokemonApi.then(result => {
    return response.json();
  }).then(result => {
    let arrElementos = [];
    result.forEach(currentItem => {
        let arrElementosCurr = currentItem.dataset.elemento.split(",");
        if (arrElementosCurr.length === 1) {
            arrElementos.push(arrElementosCurr[0])
        } else {
            arrElementosCurr.forEach(currentElemento => {
                arrElementos.push(currentElemento)
            });
        }
    });
    arrElementos = [...new Set(arrElementos)]
    arrElementos.sort(function(a, b){
        if(a < b) { return -1; }
        if(a > b) { return 1; }

        return 0;

    })

    return arrElementos;
    
}).then(result => {
    if (result.length > 0) {
        let btnToolbar = document.createElement("div"),
        btnToolbarGrp = document.createElement("div");
        btnToolbar.classList.add("btn-toolbar","mb-3")
        btnToolbar.setAttribute("role","toolbar")
        btnToolbar.setAttribute("aria-label","Filtrar traumatólogos por centro")
        btnToolbarGrp.classList.add("btn-group","mr-2")
        btnToolbarGrp.setAttribute("role","group")
        btnToolbarGrp.setAttribute("aria-label","Centros deportivos")
        
        let allfltCentro = document.createElement("button");
            allfltCentro.classList.add("btn","active","btn-secondary","btn-filtro-todos")
            allfltCentro.setAttribute("type","button")
            allfltCentro.appendChild(document.createTextNode("Todos"))
            btnToolbarGrp.appendChild(allfltCentro)
            allfltCentro.addEventListener('click',function (e) {
                e.preventDefault()
                const arrMed = medicosTraum.querySelectorAll(".schema-medico");
                arrMed.forEach(element => {
                    element.classList.remove("d-none")
                });
                btnToolbarGrp.querySelectorAll("button").forEach(element => {
                    element.classList.remove("active")
                });
                this.classList.add("active")
                $("#collapse_traumatologos").collapse('show');
            })

        result.forEach(currentItem => {
            let fltCentro = document.createElement("button");
            fltCentro.classList.add("btn","btn-secondary","btn-filtro")
            fltCentro.setAttribute("type","button")
            fltCentro.appendChild(document.createTextNode(currentItem))

            fltCentro.addEventListener('click',function (e) {
                e.preventDefault();
                    const arrMed = medicosTraum.querySelectorAll(".schema-medico");
                    arrMed.forEach(element => {
                        try {
                            if (element.dataset.centro.split(",").includes(this.innerText.toLowerCase())) {
                                element.classList.remove("d-none")
                            } else {
                                element.classList.add("d-none")
                            }
                        } catch (error) {
                            element.classList.add("d-none")
                        }
                    });
                
                btnToolbarGrp.querySelectorAll("button").forEach(element => {
                    element.classList.remove("active")
                });
                this.classList.add("active")

                $("#collapse_traumatologos").collapse('show');
            })
            
            btnToolbarGrp.appendChild(fltCentro);
        })

        

        btnToolbar.appendChild(btnToolbarGrp)        
        medicosTraum.insertAdjacentElement("beforebegin",btnToolbar)

    }
}).catch(err => {
    console.log(err)
});