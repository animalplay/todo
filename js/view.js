import AddTodo from './components/add-todo.js';


export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        //const btn = document.getElementById('add');
        this.addTodoForm = new AddTodo();

        //btn.onclick = () => this.addTodo('titulo', 'descripction');
        this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
    }

    setModel(model){
        this.model = model;
    }
    
    render(){
        const todos = this.model.getTodos();
        for(const todo of todos ){
            this.createRow(todo);
        }
    }

    toggleCompleted(id){
        this.model.toggleCompleted(id);
    }

    addTodo(title, description){
        const todo = this.model.addTodo(title, description);
        this.createRow(todo);
    }

    removeTodo(id){
        this.model.removeTodo(id);
        document.getElementById(id).remove();
    }

    createRow(todo){
        const row = table.insertRow();
        row.setAttribute('id', todo.id);
        row.innerHTML =  `
            <td>${todo.title}</td>
            <td>${todo.description}</td>
            <td class="text-center">
        
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);
        row.children[2].appendChild(checkbox);

        //crear boton de remove manualmente para poder manipularlo
        const removeBtn = document.createElement('button');
        //Agregar clases de boopstrap para el css
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1');
        removeBtn.innerHTML = `<i class="fa fa-trash"></i>`;
        
        //funcion de eliminar 
        // 'e' es el parametro de la funcion el cual es el evento
        removeBtn.onclick = () => {
            this.removeTodo(todo.id);
        }
        
        //agregar btn remove en el td correspondiente
        row.children[3].appendChild(removeBtn);
    }
}