import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo List';
  taskList: string[] = [
   
  ]
  ngOnInit(): void {
    // if(localStorage.getItem('my_tasks')){
    //   this.taskList=JSON.parse(localStorage.getItem('my_tasks'))
    // }
    const storedTasks = localStorage.getItem('my_tasks');
  
    if (storedTasks) {
      try {
        
        this.taskList = JSON.parse(storedTasks);
  
        
        if (!Array.isArray(this.taskList)) {
          console.error('Invalid data in localStorage: Expected an array.');
          
        }
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
        
      }
    }
  }
  
    
    
   }

