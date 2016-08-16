import {Auth, JwtHttp} from 'ng2-ui-auth';
import {NgMessages} from '../formComponents/ngMessages';
import {EmailValidator} from '../formComponents/customValidators';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Component, Renderer, AfterContentInit, OnInit, ElementRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';


/**
 * Created by Ron on 18/12/2015.
 */

@Component({
    selector: 'app-addTodolist',
    templateUrl: './src/todolist/addTodolist.component.html',
    directives: [NgMessages, ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
})
export class AddTodolistComponent  implements AfterContentInit, OnInit {
    form: FormGroup;
    helloWorld2: Observable<string>;
    helloWorldError2: string = 'sdf';
   

  addTodolist() {
     //const taskInfo = {task: this.form.value.task};
     this.jwtHttp.post('/api/helloWorld3',this.form.value).subscribe(() => 
            this.router.navigate(['/todolist']));
        
    }


 ngAfterContentInit(): any {
        this.renderer.setElementClass(this.element.nativeElement, 'app', true);
 }
  ngOnInit() {
      this.form = this.fb.group({
          tasks: new FormControl(''),
        });
    }
  constructor(private auth: Auth,
                private router: Router,
                private element: ElementRef,
                private renderer: Renderer,
                private fb: FormBuilder,
                private jwtHttp: JwtHttp,
                 private http: Http)  {
                    this.helloWorld2 = jwtHttp.get('/api/helloWorld2').map((response) => response.text());
                http.get('/api/helloWorld2')
                .subscribe(
                (response) => {
                    this.helloWorldError2 = response.text();
                },
                (response) => {
                    this.helloWorldError2 = response.text();
                });} 

}