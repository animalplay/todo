export default class Model{

    //clases y objetos -> constructor
    constructor(){
        this.view = null;
        //obtener lista  de todos del navegador, del localStorage
        //this.todos = [];
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if(!this.todos || this.todos.length < 1){
            this.todos = [
                {
                    id: 0,
                    title: 'Learn JS',
                    description: 'Watch JS tutorials',
                    completed: false
                }
            ]
            this.currentId = 1;
        }else{
            this.currentId = this.todos[this.todos.length - 1].id + 1;
        }
        
    }

    setView(view){
        this.view = view;
    }
    getTodos(){
        return this.todos.map((todo) => ({...todo}));
    }
    
    save(){
        //convertir objeto de todos a json -> strings
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }

    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id){
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        console.log(this.todos);
        this.save();
    }

    editTodo(id, values){
        const index = this.findTodo(id);
        Object.assign(this.todos[index], values);
        this.save();
    }

    
    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        }
    
        this.todos.push(todo);
        console.log(this.todos); 
        this.save();
        
        return {...todo};
    }

    removeTodo(id){
        const index = this.findTodo(id);
        this.todos.splice(index, 1); //elimina del arreglo todos
        //console.log(this.todos[index]);
        this.save();
    }
}