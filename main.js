
var cardElement = [
    {
        titulo: "Comprar comida",
        estado: "activo",
        fecha: "25/06/2024",
        texto: "ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ut quis corporis itaque dolorum omnis sit recusandae maxime saepe adipisci quasi modi numquam aut illum tenetur nesciunt veritatis, a aliquam."
    },
    {
        titulo: "Estudiar para parcial",
        estado: "activo",
        fecha: "21/06/2024",
        texto: "ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ut quis corporis itaque dolorum omnis sit recusandae maxime saepe adipisci quasi modi numquam aut illum tenetur nesciunt veritatis, a aliquam."
    },{
        titulo: "Regar plantas",
        estado: "terminado",
        fecha: "22/06/2024",
        texto: "ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ut quis corporis itaque dolorum omnis sit recusandae maxime saepe adipisci quasi modi numquam aut illum tenetur nesciunt veritatis, a aliquam."
    }
]

window.onload = cargarEvento;

function cargarEvento(){
    document.getElementById("nuevaTarea").addEventListener("submit", nuevaTarea, false);    
}


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
                
                            </div>
                        </div>
                        `;
        contCard.append(div);
    })   
}



function nuevaTarea(event){
    event.preventDefault();

    var titulo= document.getElementById("idTitulo").value;
    var descripcion= document.getElementById("idDescripcion").value;
    var fecha= document.getElementById("idFecha").value;
    var estado= document.getElementById("idEstado").value;

    console.log(titulo);

    var nuevaTarea={titulo: titulo, estado: estado, fecha: fecha, texto:descripcion};
    cardElement.push(nuevaTarea);
    cargarCards();
}