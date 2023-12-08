import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-grli',
  templateUrl: './grli.component.html',
  styleUrls: ['./grli.component.css']
})
export class GrliComponent {
@Input()tasks: any;
Search="";

removetask(index:number){
this.tasks.splice(index, 1);
localStorage.setItem('my_tasks',JSON.stringify(this.tasks))

}
}
