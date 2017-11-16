webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-sidebar/app-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sideNaveList {\n    height: 100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-sidebar/app-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-nav-list class=\"sideNaveList\">\n    <a mat-list-item routerLink=\"/list\" routerLinkActive=\"active\">Dashboard</a>\n    <a mat-list-item routerLink=\"/add\" routerLinkActive=\"active\">Tasks</a>\n    <a mat-list-item routerLink=\"/chat\" routerLinkActive=\"active\">Chat</a>\n</mat-nav-list>"

/***/ }),

/***/ "../../../../../src/app/app-sidebar/app-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSidebarComponent = (function () {
    function AppSidebarComponent() {
    }
    AppSidebarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarComponent.prototype, "checked", void 0);
    AppSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-app-sidebar',
            template: __webpack_require__("../../../../../src/app/app-sidebar/app-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-sidebar/app-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarComponent);
    return AppSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n    background: #3f51b5;\n    height: 60px;\n}\n\n.footer {\n    background: cornflowerblue;\n}\n\n.sideMenu {\n    background: maroon;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-toolbar color=\"primary\">\n        <span>\n         <mat-slide-toggle [(ngModel)]=\"slideToggleModel\"></mat-slide-toggle>\n        </span>\n        <span>Task Manager</span>\n\n    </mat-toolbar>\n    <mat-sidenav mode=\"side\" opened=\"{{slideToggleModel}}\">\n        <app-app-sidebar [checked]=\"slideToggleModel\"></app-app-sidebar>\n    </mat-sidenav>\n    <div class=\"my-content\">\n        <router-outlet></router-outlet>\n    </div>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.checked = false;
        this.slideToggleModel = true;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_task_component__ = __webpack_require__("../../../../../src/app/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_add_task_add_component__ = __webpack_require__("../../../../../src/app/task-add/task-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_sidebar_app_sidebar_component__ = __webpack_require__("../../../../../src/app/app-sidebar/app-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__task_service_task_service__ = __webpack_require__("../../../../../src/app/task/service/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__task_pipe_task_is_done_pipe__ = __webpack_require__("../../../../../src/app/task/pipe/task-is-done.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__delete_dialog_delete_dialog_component__ = __webpack_require__("../../../../../src/app/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_drag_drop__ = __webpack_require__("../../../../ng-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__chat_room_chat_room_component__ = __webpack_require__("../../../../../src/app/chat-room/chat-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__chat_room_service_chat_service_service__ = __webpack_require__("../../../../../src/app/chat-room/service/chat-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_7__task_add_task_add_component__["a" /* TaskAddComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_sidebar_app_sidebar_component__["a" /* AppSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__task_pipe_task_is_done_pipe__["a" /* TaskIsDonePipe */],
                __WEBPACK_IMPORTED_MODULE_14__delete_dialog_delete_dialog_component__["a" /* DeleteDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__chat_room_chat_room_component__["a" /* ChatRoomComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_15_ng_drag_drop__["NgDragDropModule"], __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_16_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_15_ng_drag_drop__["NgDragDropModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__task_service_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_18__chat_room_service_chat_service_service__["a" /* ChatServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__delete_dialog_delete_dialog_component__["a" /* DeleteDialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_task_component__ = __webpack_require__("../../../../../src/app/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_add_task_add_component__ = __webpack_require__("../../../../../src/app/task-add/task-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_room_chat_room_component__ = __webpack_require__("../../../../../src/app/chat-room/chat-room.component.ts");




var appRoutes = [
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_2__task_add_task_add_component__["a" /* TaskAddComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_1__task_task_component__["a" /* TaskComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_3__chat_room_chat_room_component__["a" /* ChatRoomComponent */] },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/chat-room/chat-room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-room/chat-room.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let msg of messsages\">\n    {{msg}}\n</p>\n\n\n\n<form (ngSubmit)=\"sendMessage(message)\">\n    <mat-input-container class=\"example-full-width\">\n        <input matInput name=\"message\" [(ngModel)]=\"message\" placeholder=\"Enter messages\" value=\"{{message}}\">\n    </mat-input-container>\n\n    <button type=\"submit\">Send</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/chat-room/chat-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_chat_service_service__ = __webpack_require__("../../../../../src/app/chat-room/service/chat-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatRoomComponent = (function () {
    function ChatRoomComponent(chatServiceService) {
        this.chatServiceService = chatServiceService;
        this.messsages = [];
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connetion = this.chatServiceService.getMessages().subscribe(function (msg) {
            console.log(msg);
            _this.messsages.push('Other:' + msg);
        });
    };
    ChatRoomComponent.prototype.sendMessage = function (message) {
        this.chatServiceService.sendMessage(message);
        this.messsages.push('Me:' + message);
        console.log("MESSAGE SENT");
        this.message = '';
    };
    ChatRoomComponent.prototype.ngOnDestroy = function () {
        this.connetion.unsubscribe();
    };
    ChatRoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-room',
            template: __webpack_require__("../../../../../src/app/chat-room/chat-room.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat-room/chat-room.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_chat_service_service__["a" /* ChatServiceService */]])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat-room/service/chat-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatServiceService = (function () {
    function ChatServiceService() {
        this.url = 'http://localhost:3000';
    }
    ChatServiceService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
        console.log("MESSAGE SENT");
    };
    ChatServiceService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChatServiceService);
    return ChatServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/delete-dialog/delete-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delete-dialog/delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    {{ title }}</p>\n<p>{{ message }}</p>\n<button type=\"button\" mat-raised-button (click)=\"dialogRef.close(true)\">OK</button>\n<button type=\"button\" mat-button (click)=\"dialogRef.close()\">Cancel</button>"

/***/ }),

/***/ "../../../../../src/app/delete-dialog/delete-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteDialogComponent = (function () {
    function DeleteDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.title = "Are you sure?";
        this.message = "You want to delete";
    }
    DeleteDialogComponent.prototype.ngOnInit = function () {
        console.log(this.dialogRef);
    };
    DeleteDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-dialog',
            template: __webpack_require__("../../../../../src/app/delete-dialog/delete-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/delete-dialog/delete-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */]])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task-add/task-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task-add/task-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<mat-card>\n\n    <div>\n        <canvas baseChart [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n    <mat-card-content>\n        content\n    </mat-card-content>\n</mat-card>-->\n<div fxLayout=\"row wrap\" class=\"colored box nopad\">\n    <mat-card fxFlex=\"33.33%\">\n        <mat-card-header>\n            <mat-card-title> Doughnut chart </mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content>\n            <div>\n                <canvas baseChart [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\" (chartHover)=\"chartHovered($event)\" legend=\"true\" (chartClick)=\"chartClicked($event) \"></canvas>\n            </div>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title> Pie chart </mat-card-title>\n        </mat-card-header>\n        <div>\n            <canvas baseChart [data]=\"doughnutChartData \" [labels]=\"doughnutChartLabels \" [chartType]=\"pieChartType \" (chartHover)=\"chartHovered($event) \" (chartClick)=\"chartClicked($event) \"></canvas>\n        </div>\n    </mat-card>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/task-add/task-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service_task_service__ = __webpack_require__("../../../../../src/app/task/service/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskAddComponent = (function () {
    function TaskAddComponent(taskService) {
        this.taskService = taskService;
        this.doughnutChartLabels = ['Done Task', 'In-Progress Task'];
        this.radarChartLabels = ['Done Task', 'In-Progress Task'];
        this.colors = ['blue', 'greem'];
        this.doughnutChartData = [0, 0];
        this.doughnutChartType = 'doughnut';
        this.pieChartType = 'pie';
        this.taskList = [];
        this.taskDone = [];
        this.taskNotDone = [];
        this.lineChartType = 'line';
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    }
    // events
    TaskAddComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    TaskAddComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    TaskAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.get().subscribe(function (res) {
            _this.taskList = res;
            _this.taskDone = _this.taskList.filter(function (tsk) { return tsk.isDone; });
            _this.taskNotDone = _this.taskList.filter(function (tsk) { return !tsk.isDone; });
            _this.doughnutChartData = [_this.taskDone.length, _this.taskNotDone.length];
        });
    };
    TaskAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-add',
            template: __webpack_require__("../../../../../src/app/task-add/task-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task-add/task-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_service_task_service__["a" /* TaskService */]])
    ], TaskAddComponent);
    return TaskAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task/pipe/task-is-done.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskIsDonePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskIsDonePipe = (function () {
    function TaskIsDonePipe() {
    }
    TaskIsDonePipe.prototype.transform = function (lst, val) {
        return lst.filter(function (tsk) { return tsk.isDone == val; });
    };
    TaskIsDonePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'taskIsDone'
        })
    ], TaskIsDonePipe);
    return TaskIsDonePipe;
}());



/***/ }),

/***/ "../../../../../src/app/task/service/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.url = '/api/tasks';
    }
    TaskService.prototype.get = function () {
        return this.http.get(this.url).map(function (response) {
            return response.json();
        });
    };
    TaskService.prototype.create = function (task) {
        return this.http.post(this.url, task).map(function (res) {
            return res.json();
        });
    };
    TaskService.prototype.remove = function (id) {
        return this.http.delete(this.url + "/" + id).map(function (res) {
            return res.json();
        });
    };
    TaskService.prototype.update = function (id, data) {
        return this.http.put(this.url + "/" + id, data).map(function (res) {
            return res.json();
        });
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/app/task/task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" class=\"colored box nopad\">\n\n    <mat-card fxFlex=\"33.33%\" droppable (onDrop)=\"DoneTask($event,'inprogress')\">\n        <mat-card-title>\n            Inprogress Tasks\n        </mat-card-title>\n        <mat-card-content>\n            <mat-list>\n                <mat-list-item draggable [dragData]=\"task\" (click)=\"setTask(task)\" *ngFor=\"let task of taskNotDone ,let lst= last\">\n                    <span fxFlex=\"80%\">{{task.title}}</span>\n                    <button fxFlex=\"20%\" mat-icon-button (click)=\"removeTask(task._id,task.isDone)\"><span MatTooltip=\"Delete\"></span> <mat-icon>delete</mat-icon></button>\n                </mat-list-item>\n            </mat-list>\n        </mat-card-content>\n\n        <mat-card-footer>\n            <mat-input-container class=\"example-full-width\">\n                <input matInput name=\"title\" [(title)]=\"title\" placeholder=\"Add new task\" value=\"{{title}}\" (keyup.enter)=\"addNewTask($event.target.value)\">\n            </mat-input-container>\n        </mat-card-footer>\n    </mat-card>\n\n    <mat-card fxFlex=\"33.33%\" droppable (onDrop)=\"DoneTask($event,'done')\">\n        <mat-card-title>\n            Done Tasks\n        </mat-card-title>\n        <mat-card-content>\n            <mat-list>\n                <mat-list-item draggable [dragData]=\"task\" (click)=\"setTask(task)\" *ngFor=\"let task of taskDone  ,let lst= last\">\n                    <span fxFlex=\"80%\">{{task.title}}</span>\n                    <button fxFlex=\"20%\" mat-icon-button (click)=\"removeTask(task._id,task.isDone)\"><span MatTooltip=\"Delete\"></span> <mat-icon>delete</mat-icon></button>\n                </mat-list-item>\n\n\n            </mat-list>\n        </mat-card-content>\n\n\n    </mat-card>\n\n    <mat-card fxFlex=\"33.33%\">\n        <mat-card-header>\n            <mat-card-title>{{task.title}}</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <mat-list>\n                <mat-list-item>{{task.isDone ? 'Done' : 'In Progress'}}</mat-list-item>\n                <mat-list-item>{{task.createdByDate | date}}</mat-list-item>\n            </mat-list>\n        </mat-card-content>\n    </mat-card>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_task_service__ = __webpack_require__("../../../../../src/app/task/service/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__delete_dialog_delete_dialog_component__ = __webpack_require__("../../../../../src/app/delete-dialog/delete-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskComponent = (function () {
    function TaskComponent(taskService, matDialog, snackBar) {
        this.taskService = taskService;
        this.matDialog = matDialog;
        this.snackBar = snackBar;
        this.checked = false;
        this.taskList = [];
        this.title = '';
        this.taskDone = [];
        this.taskNotDone = [];
        this.task = {};
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        //  this.title="fse";
        this.taskService.get().subscribe(function (res) {
            _this.taskList = res;
            _this.taskDone = _this.taskList.filter(function (tsk) { return tsk.isDone; });
            _this.taskNotDone = _this.taskList.filter(function (tsk) { return !tsk.isDone; });
        });
    };
    TaskComponent.prototype.setTask = function (task) {
        this.task = task;
    };
    TaskComponent.prototype.addNewTask = function (newValue) {
        var _this = this;
        if (newValue) {
            var task = { title: newValue, isDone: false };
            this.taskService.create(task).subscribe(function (res) {
                _this.title = '';
                _this.snackBar.open('Task has been created', null, {
                    duration: 2000,
                });
                _this.taskList.push(res);
                _this.taskNotDone.push(res);
            });
        }
    };
    TaskComponent.prototype.removeTask = function (id, isDone) {
        var _this = this;
        var dilog = this.matDialog.open(__WEBPACK_IMPORTED_MODULE_4__delete_dialog_delete_dialog_component__["a" /* DeleteDialogComponent */]);
        dilog.afterClosed().subscribe(function (res) {
            console.log(res);
            if (res) {
                _this.taskService.remove(id).subscribe(function (res) {
                    _this.snackBar.open('Task has been deleted', null, {
                        duration: 2000,
                    });
                    _this.removeTaskFromList(id, isDone);
                });
            }
        });
    };
    TaskComponent.prototype.DoneTask = function (event, type) {
        var _this = this;
        if (event.dragData) {
            var task_1 = event.dragData;
            if (task_1.isDone && type === 'inprogress') {
                task_1.isDone = false;
            }
            else if (!task_1.isDone && type === 'done') {
                task_1.isDone = true;
            }
            else {
                return;
            }
            this.taskService.update(task_1._id, task_1).subscribe(function (res) {
                _this.removeTaskFromList(task_1._id, !task_1.isDone);
                type === 'inprogress' ? _this.taskNotDone.push(task_1) : _this.taskDone.push(task_1);
                _this.snackBar.open('Task has been moved to Done', null, {
                    duration: 2000,
                });
            });
        }
        ;
    };
    TaskComponent.prototype.removeTaskFromList = function (id, isDone) {
        var idx = __WEBPACK_IMPORTED_MODULE_2_lodash__["findIndex"](isDone ? this.taskDone : this.taskNotDone, { _id: id });
        __WEBPACK_IMPORTED_MODULE_2_lodash__["remove"](isDone ? this.taskDone : this.taskNotDone, function (tsk) { return tsk._id == id; });
    };
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task',
            template: __webpack_require__("../../../../../src/app/task/task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSnackBar */]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map