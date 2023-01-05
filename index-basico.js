//Hace que no ejecute javascript hasta que no cargue todo el html
document.addEventListener('DOMContentLoaded', function(){

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const btn = document.getElementById('add');
    const alert = document.getElementById('alert');
    let id = 1;
    
    function removeTodo(id){
        //imprmir id del elemento agregado
        //console.log(id)

        //eliminar elemento html
        document.getElementById(id).remove();
    }



    function addTodo(){
        if(title.value === '' || description.value === ''){
            //Elimina una clase del elemento 'alert'
            alert.classList.remove('d-none');
            //Indexar texto en un elemnto html
            alert.innerText = 'Title and description are required';
            return;
        }

        alert.classList.add('d-none');
        const row = table.insertRow();

        //definir id
        row.setAttribute('id', id++);


        //insertar html
        row.innerHTML =  `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        //crear boton de remove manualmente para poder manipularlo
        const removeBtn = document.createElement('button');
        //Agregar clases de boopstrap para el css
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1');
        removeBtn.innerHTML = `<i class="fa fa-trash"></i>`;
        
        //funcion de eliminar 
        // 'e' es el parametro de la funcion el cual es el evento
        removeBtn.onclick = function (e){
            removeTodo(row.getAttribute('id'));
        }
        
        //agregar btn remove en el td correspondiente
        row.children[3].appendChild(removeBtn);
        
        
    };

    //hace que cuando se clickee el boton se ejecute la funcion addTodo
    btn.onclick = addTodo;
});