import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Guid} from "guid-typescript";
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [
    // new Todo(Guid.create(),'Lavar el coche','Pendiente','Fecha',false),
    // new Todo(Guid.create(),'Hacer la compra','Pendiente','Fecha',false)
  ]

  //Función para crear un todo, con los valores del form del html, salvo pendiente que lo tendrán
  //todos los todos por defecto
  onSubmit(form: NgForm){
    let todo = new Todo(Guid.create(),form.value.nombre,"Pendiente",form.value.fecha,false)
    this.todos.push(todo);
    form.resetForm();
  }
  //función para editar el nombre del todo
  editTodo(todo: any){
    todo.editable = !todo.editable;
  }
  //Función para cambiar el estado del todo, ligado a las flechas de la tabla de html
  estadoTodo(id: Guid){
    let todo = this.todos.filter(t=>t.id == id)[0];
    if (todo.estado == "Pendiente") {
      todo.estado = "En Proceso";
    }else
    {
      todo.estado = "Completado";
    }
  }
  //Borrar un todo, basado en la id , mediante un splice
  deleteTodo(id: Guid){
    let todo = this.todos.filter(t=>t.id == id)[0];
    let index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

  //Función para ordenar las tablas a la forma antigua, cambiando el orden de las filas
  booleanValue: boolean = true;
  sort(colName,boolean) {
    
   if (boolean == true){
     this.todos.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
     this.booleanValue = !this.booleanValue
 }
 else{
     this.todos.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
     this.booleanValue = !this.booleanValue
 }
}

}
