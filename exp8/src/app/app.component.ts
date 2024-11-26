import { Component } from '@angular/core';
import { FetchdataService } from './fetchdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exp8';
  userList:any[] = [];
   constructor(private fetchService: FetchdataService)
{}
 ngOnInit(): void{
  this.fetchService.getUser().subscribe(user =>
this.userList = user);
 }
}
