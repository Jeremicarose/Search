(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-user-details></app-user-details>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Search';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_http_service_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-http/service-request.service */ "./src/app/service-http/service-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");
/* harmony import */ var _user_det_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-det.directive */ "./src/app/user-det.directive.ts");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./date-count.pipe */ "./src/app/date-count.pipe.ts");











var routes = [
    { path: 'input-name', component: _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"] },
    { path: '', redirectTo: '/search-details', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"],
                _user_det_directive__WEBPACK_IMPORTED_MODULE_9__["UserDetDirective"],
                _date_count_pipe__WEBPACK_IMPORTED_MODULE_10__["DateCountPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)
            ],
            providers: [_service_http_service_request_service__WEBPACK_IMPORTED_MODULE_5__["ServiceRequestService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/repo.ts":
/*!*********************************!*\
  !*** ./src/app/classes/repo.ts ***!
  \*********************************/
/*! exports provided: Repo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repo", function() { return Repo; });
var Repo = /** @class */ (function () {
    function Repo(name, html_url, description) {
        this.name = name;
        this.html_url = html_url;
        this.description = description;
    }
    return Repo;
}());



/***/ }),

/***/ "./src/app/classes/user.ts":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(login, avatar_url, html_url, name, public_repos, followers, following) {
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
        this.name = name;
        this.public_repos = public_repos;
        this.followers = followers;
        this.following = following;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/components/user-details/user-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n<div>\n  <p id='users' class=\"btn btn-primary\" (click)=\"searchUsers = true\">Users</p> <br>\n  <p id='repos' class=\"btn btn-primary\" (click)=\"searchUsers = true\">Repos</p>\n</div>\n<p class=\"arose\"></p>\n<form>\n  <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"NAME\" (keyup)=\"getProfile()\">\n    </div>\n</form>\n\n\n<div *ngIf=\"searchUsers\">\n  <div >\n    <img src=\"{{user.avatar_url}}\" alt=\"avatar\">\n    <a href=\"{{user.html_url}}\" target=\"_blank\"><button >GO TO PROFILE </button></a>\n  </div>\n  <div >\n      <h3>{{user.name}}</h3>\n      <p class=\"btn btn-success\">Followers<br><span>{{user.followers}}</span></p>\n      <p class=\"btn btn-primary\">Following<br><span>{{user.following}}</span></p>\n      <p class=\"btn btn-warning\">Repositories<br><span>{{user.public_repos}}</span></p>\n  </div>\n  \n</div>\n\n<div *ngIf=\"!searchUsers\">\n  <div class=\"container repo-row\">\n    <div *ngFor=\"let rep of repo\" class=\"some-card\">\n      <a href=\"{{rep.html_url}}\" target=\"_blank\">\n          <h3>{{rep.name}}</h3>\n          <p>{{rep.description}}</p>\n          <p>{{rep.created_at |dateCount}}</p>\n      </a>\n      \n    </div>\n    \n    \n  </div>\n</div>\n</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_service_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service-http/service-request.service */ "./src/app/service-http/service-request.service.ts");



var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(service) {
        this.service = service;
        this.searchUsers = true;
    }
    UserDetailsComponent.prototype.getProfile = function () {
        this.service.getUsername(this.username);
        this.service.getUser();
        this.user = this.service.user;
        this.service.getRepos(this.username);
        this.repo = this.service.repo;
        console.log(this.repo);
    };
    UserDetailsComponent.prototype.switchSearch = function () {
        this.searchUsers = !this.searchUsers;
    };
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.service.getUser();
        this.user = this.service.user;
        this.service.getRepos(this.username);
        this.repo = this.service.repo;
    };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/components/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/components/user-details/user-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_http_service_request_service__WEBPACK_IMPORTED_MODULE_2__["ServiceRequestService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/date-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateCountPipe = /** @class */ (function () {
    function DateCountPipe() {
    }
    DateCountPipe.prototype.transform = function (value) {
        var today = new Date(); //get current date and time
        var todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNoTime); // returns value in milliseconds
        var secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours
        var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds
        var dateCounter = dateDifferenceSeconds / secondsInADay;
        if (dateCounter >= 1 && value > todayWithNoTime) {
            return dateCounter;
        }
        else {
            return 0;
        }
    };
    DateCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateCount'
        })
    ], DateCountPipe);
    return DateCountPipe;
}());



/***/ }),

/***/ "./src/app/service-http/service-request.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service-http/service-request.service.ts ***!
  \*********************************************************/
/*! exports provided: ServiceRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRequestService", function() { return ServiceRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/user */ "./src/app/classes/user.ts");
/* harmony import */ var _classes_repo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/repo */ "./src/app/classes/repo.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ServiceRequestService = /** @class */ (function () {
    function ServiceRequestService(http) {
        this.http = http;
        this.apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiKey;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.user = new _classes_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', 0, 0, 0);
        this.repo = new _classes_repo__WEBPACK_IMPORTED_MODULE_3__["Repo"]('', '', '');
        this.userName = 'Jeremicarose';
    }
    ServiceRequestService.prototype.getUser = function () {
        var _this = this;
        var promise = new Promise((function (resolve, reject) {
            _this.http.get('https://api.github.com/users/' + _this.userName + '?access_token=' + _this.apiKey)
                .toPromise()
                .then(function (res) {
                _this.user.login = res.login;
                _this.user.avatar_url = res.avatar_url;
                _this.user.html_url = res.html_url;
                _this.user.name = res.name;
                _this.user.followers = res.followers;
                _this.user.following = res.following;
                _this.user.public_repos = res.public_repos;
            }, function (error) {
                reject(error);
            });
        }));
        return promise;
    };
    ServiceRequestService.prototype.getRepos = function (username) {
        var _this = this;
        var promise = new Promise((function (resolve, reject) {
            _this.http.get('https://api.github.com/users/' + _this.userName + '/repos?access_token=' + _this.apiKey)
                .toPromise()
                .then(function (res) {
                _this.repo = res;
            }, function (error) {
                reject(error);
            });
        }));
        return promise;
    };
    ServiceRequestService.prototype.getUsername = function (username) {
        this.userName = username;
    };
    ServiceRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ServiceRequestService);
    return ServiceRequestService;
}());



/***/ }),

/***/ "./src/app/user-det.directive.ts":
/*!***************************************!*\
  !*** ./src/app/user-det.directive.ts ***!
  \***************************************/
/*! exports provided: UserDetDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetDirective", function() { return UserDetDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDetDirective = /** @class */ (function () {
    function UserDetDirective(el) {
        this.el = el;
    }
    UserDetDirective.prototype.hover = function (color) {
        this.el.nativeElement.style.borderColor = color;
    };
    UserDetDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '.app-user-Det'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], UserDetDirective);
    return UserDetDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiKey: 'f19b45f71942b774e310eb5acda3ca5b117bde27',
    baseUrl: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moringa/Downloads/Git-Search-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map