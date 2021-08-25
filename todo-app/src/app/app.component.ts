import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todos';
  todos = [ 
    {
      label:'Bring Milk' ,
      done:false,
      priority:3
},
{
  label:'pay mobile bill' ,
  done:false,
  priority:2
},
{
  label:'Clean house' ,
  done:false,
  priority:6
},
{
  label:'Fix the bulb' ,
  done:true,
  priority:4
},  
];
addTodo(newTodoLabel){
var newTodo={
  label:newTodoLabel,
  priority:1,
  done:false
};
this.todos.push(newTodo)
}

deleteTodo(todo){
  this.todos = this.todos.filter (t => t.label !== todo.label)
}

}
