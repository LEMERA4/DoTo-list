System.register(['ng2-ui-auth', '../formComponents/ngMessages', '@angular/router', '@angular/core', '@angular/forms', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng2_ui_auth_1, ngMessages_1, router_1, core_1, forms_1, http_1;
    var AddTodolistComponent;
    return {
        setters:[
            function (ng2_ui_auth_1_1) {
                ng2_ui_auth_1 = ng2_ui_auth_1_1;
            },
            function (ngMessages_1_1) {
                ngMessages_1 = ngMessages_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            /**
             * Created by Ron on 18/12/2015.
             */
            AddTodolistComponent = (function () {
                function AddTodolistComponent(auth, router, element, renderer, fb, jwtHttp, http) {
                    var _this = this;
                    this.auth = auth;
                    this.router = router;
                    this.element = element;
                    this.renderer = renderer;
                    this.fb = fb;
                    this.jwtHttp = jwtHttp;
                    this.http = http;
                    this.helloWorldError2 = 'sdf';
                    this.helloWorld2 = jwtHttp.get('/api/helloWorld2').map(function (response) { return response.text(); });
                    http.get('/api/helloWorld2')
                        .subscribe(function (response) {
                        _this.helloWorldError2 = response.text();
                    }, function (response) {
                        _this.helloWorldError2 = response.text();
                    });
                }
                AddTodolistComponent.prototype.addTodolist = function () {
                    var _this = this;
                    //const taskInfo = {task: this.form.value.task};
                    this.jwtHttp.post('/api/helloWorld3', this.form.value).subscribe(function () {
                        return _this.router.navigate(['/todolist']);
                    });
                };
                AddTodolistComponent.prototype.ngAfterContentInit = function () {
                    this.renderer.setElementClass(this.element.nativeElement, 'app', true);
                };
                AddTodolistComponent.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        tasks: new forms_1.FormControl(''),
                    });
                };
                AddTodolistComponent = __decorate([
                    core_1.Component({
                        selector: 'app-addTodolist',
                        templateUrl: './src/todolist/addTodolist.component.html',
                        directives: [ngMessages_1.NgMessages, router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [ng2_ui_auth_1.Auth, router_1.Router, core_1.ElementRef, core_1.Renderer, forms_1.FormBuilder, ng2_ui_auth_1.JwtHttp, http_1.Http])
                ], AddTodolistComponent);
                return AddTodolistComponent;
            }());
            exports_1("AddTodolistComponent", AddTodolistComponent);
        }
    }
});
//# sourceMappingURL=addTodolist.component.js.map