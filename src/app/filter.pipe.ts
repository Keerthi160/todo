import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: [], searchText :string): any[] {
    if(!tasks) return[];
    if(!searchText)return tasks;
    searchText=searchText.toLowerCase();
    return tasks.filter((task:string)=>{
      return task.toLowerCase().includes(searchText)
    })

  }

}
