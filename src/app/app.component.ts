import { Component } from '@angular/core';
import { count } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
Cource=[
  {name:'physic', id:'1',avg:'20'},
  {name:'science', id:'2',avg:'10'},
  {name:'chemestry', id:'3',avg:'7'},
  {name:'english', id:'4',avg:'12'}
]
OnRemove(Cource){
Cource.name='parisa';
}
OnDelete(p){
  let x=this.Cource.indexOf(p);
  this.Cource.splice(x,1);
}
}

