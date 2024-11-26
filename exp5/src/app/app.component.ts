import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exp5';
  list:any[]=[];
  add(item:string){
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list);
  }
  remove(id:number){
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id);
  }
}
