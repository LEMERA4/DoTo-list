import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Auth, JwtHttp} from 'ng2-ui-auth';
import {Http} from '@angular/http';
/**
 * Created by Ron on 02/07/2016.
 */
@Component({
    selector: 'app-todolist',
    template: '<h2 class="text-center">TodO List</h2> <p>{{helloWorld2 | async}}</p><p>{{helloWorldError2}}</p><button type="button" (click)="main()">Back</button> <button type="button" (click)="addTodolist()">Add tasks</button>  <router-outlet></router-outlet>',
    
    directives: [ROUTER_DIRECTIVES]
})
export class TodolistComponent {
    helloWorld2: Observable<string>;
    helloWorldError2: string = 'sdf';
    constructor(private auth: Auth,
                private router: Router,
                private jwtHttp: JwtHttp,
                private http: Http) {
    
        this.helloWorld2 = jwtHttp.get('/api/helloWorld2').map((response) => response.text());
        http.get('/api/helloWorld2')
            .subscribe(
                (response) => {
                    this.helloWorldError2 = response.text();
                },
                (response) => {
                    this.helloWorldError2 = response.text();
                });
    }

    main() {
            this.router.navigate(['/main']);
    }

    addTodolist() {
             this.router.navigate(['/addTodolist']);}
        
    }






    


