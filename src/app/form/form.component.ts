import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input()taskList: any;
  newvalue="";
  adtodo(){
  this.taskList.unshift(this.newvalue);
  localStorage.setItem('my_tasks',JSON.stringify(this.taskList));
  
  this.newvalue='';
  }
}
