import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {

  task!: string;
  tasks = [] as any [];

  onClick(){
    this.tasks.push({name: this.task});
  this.task = '';
}
}
