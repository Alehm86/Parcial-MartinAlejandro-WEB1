
const tareas= JSON.parse(localStorage.getItem("cardElementLS"));

const contCard = document.querySelector('main');

function cargarCards(){
    
    cardElement.forEach(cards => {
        const div = document.createElement('div');
        div.classList.add("card");
        div.innerHTML=  `
                        <div class="cardTarea">
                            <div class="cardContainer">
                                <h2 class="cardTitle">${cards.titulo}</h2>
                                <h4>Estado: ${cards.estado}</h4>
                                <div>
                                    <h3>Fecha limite</h3>
                                    <h3>${cards.fecha}</h3>
                                </div>
                                <span class="cardDesc">
                                    <p>${cards.texto}</p>
                                </span>
                                <input type="submit" value="Eliminar" class="btnDelete" id="btnDelete">
                
                            </div>
                        </div>
                        `;
        contCard.append(div);
    })   
}

let cardElement;

let cardElementLS = localStorage.getItem("cardElement");


if (cardElementLS) {
    cardElement = JSON.parse(cardElementLS);

} else {
    cardElement = []
}



const btnAdd = document.getElementById('btnGuardar')
btnAdd.addEventListener('click', ()=>{
 
    const titulo= document.getElementById("idTitulo").value;
    const descripcion= document.getElementById("idDescripcion").value;
    const fecha= document.getElementById("idFecha").value;
    const estado= document.getElementById("idEstado").value;

    const newItem = {titulo: titulo, estado: estado, fecha: fecha, texto:descripcion }

    cardElement.push(newItem);
    console.log(cardElement);
    localStorage.setItem("cardElement", JSON.stringify(cardElement));
    cargarCards();
    
})


