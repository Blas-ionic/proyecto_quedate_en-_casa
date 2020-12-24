(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-slides class=\"mainSlide\" #slidePrincipal>\n        <ion-slide>\n            <form (ngSubmit)=\"login(fLogin)\" #fLogin=\"ngForm\">\n                <ion-grid fixed>\n                    <ion-row>\n                        <ion-col>\n                            <img src=\"/assets/images/quedate_logo.png\">\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-list>\n\n                                <ion-item>\n                                    <ion-label position=\"floating\">Email</ion-label>\n                                    <ion-input name=\"email\" [class.is-invalid]=\"email.invalid && email.touched\" [(ngModel)]=\"usuario.email\" type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required #email=\"ngModel\"></ion-input>\n                                </ion-item>\n\n                                <ion-item>\n                                    <ion-label position=\"floating\">Password</ion-label>\n                                    <ion-input name=\"password\" [class.is-invalid]=\"password.invalid && password.touched\" [(ngModel)]=\"usuario.password\" type=\"password\" required #password=\"ngModel\"></ion-input>\n                                </ion-item>\n\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\n                                Login\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </form>\n        </ion-slide>\n        <ion-slide>\n            <ion-grid fixed>\n                <app-avatar-selector (avatarSel)=\"infoUser.photoUrl = $event\"></app-avatar-selector>\n                <form (ngSubmit)=\"registro(fRegistro)\" #fRegistro=\"ngForm\">\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <h4>Datos de la cuenta</h4>\n                        </ion-col>\n                        <ion-col>\n                            <ion-list>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Correo Electronico</ion-label>\n                                    <ion-input name=\"email\" [(ngModel)]=\"registerUser.email\" type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Contraseña</ion-label>\n                                    <ion-input name=\"password\" [(ngModel)]=\"registerUser.password\" type=\"password\" required></ion-input>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <h4>Datos de la cuenta</h4>\n                        </ion-col>\n                        <ion-col>\n                            <ion-list>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Nombre completo</ion-label>\n                                    <ion-input name=\"name\" [(ngModel)]=\"infoUser.name\" required></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Usuario</ion-label>\n                                    <ion-input name=\"username\" [(ngModel)]=\"infoUser.username\" required></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Description <small>(Opcional)</small></ion-label>\n                                    <ion-input name=\"description\" [(ngModel)]=\"infoUser.description\"></ion-input>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\n                                Crear usuario\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </form>\n            </ion-grid>\n        </ion-slide>\n        <ion-slide>\n            <ion-grid fixed>\n                <ion-row>\n                    <ion-col>\n                        <img src=\"/assets/images/quedate_logo.png\">\n                    </ion-col>\n                </ion-row>\n                <form (ngSubmit)=\"recovery(frecovery)\" #frecovery=\"ngForm\">\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <h4>Recuperar Contraseña</h4>\n                        </ion-col>\n                        <ion-col>\n                            <ion-list>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Correo Electronico</ion-label>\n                                    <ion-input name=\"email\" [(ngModel)]=\"recoveryUser.email\" type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required></ion-input>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\n                                Recuperar\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </form>\n            </ion-grid>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n<ion-footer no-border>\n    <ion-toolbar>\n        <ion-row>\n            <ion-col>\n                <ion-button shape=\"round\" expand=\"full\" size=\"small\" fill=\"outline\" color=\"tertiary\" (click)=\"mostrarLogin()\">\n                    Ingresar\n                </ion-button>\n            </ion-col>\n            <ion-col>\n                <ion-button shape=\"round\" expand=\"full\" size=\"small\" fill=\"outline\" color=\"tertiary\" (click)=\"mostrarRegistro()\">\n                    Registrarme\n                </ion-button>\n            </ion-col>\n            <ion-col>\n                <ion-button shape=\"round\" expand=\"full\" size=\"small\" fill=\"outline\" color=\"tertiary\" (click)=\"mostrarRecovery()\">\n                    Recuperar Contraseña\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/model/usuarios.model.ts":
/*!*****************************************!*\
  !*** ./src/app/model/usuarios.model.ts ***!
  \*****************************************/
/*! exports provided: UsuarioModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModel", function() { return UsuarioModel; });
class UsuarioModel {
}


/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainSlide,\n.mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 150px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n\n.my-custom-class {\n  color: red !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLFdBQVc7RUFDWCxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksK0JBQStCO0VBQy9CLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluU2xpZGUsXG4ubWFpblNsaWRlIGlvbi1zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuLnBpY2stYXZhdGFyIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBvcGFjaXR5OiAwLjM7XG59XG5cbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4ubXktY3VzdG9tLWNsYXNzIHtcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _model_usuarios_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/usuarios.model */ "./src/app/model/usuarios.model.ts");
/* harmony import */ var _servicies_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicies/auth.service */ "./src/app/servicies/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let LoginPage = class LoginPage {
    constructor(auth, router, loadingController, toastController) {
        this.auth = auth;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.infoUser = {
            description: '',
            username: '',
            name: '',
            photoUrl: 'av-1.png'
        };
        this.registerUser = {
            email: '',
            displayName: '',
            photoUrl: '',
            password: ''
        };
        this.recoveryUser = {
            email: '',
            displayName: '',
            photoUrl: '',
            password: ''
        };
    }
    ngOnInit() {
        this.usuario = new _model_usuarios_model__WEBPACK_IMPORTED_MODULE_3__["UsuarioModel"]();
        this.initLoading();
    }
    ionViewDidEnter() {
        this.slides.lockSwipes(true);
    }
    login(form) {
        if (form.invalid) {
            return;
        }
        this.logincSuccess();
        setTimeout(() => {
            this.auth.login(this.usuario)
                .subscribe((resp) => {
                this.loading.dismiss();
                this.toastSuccess(resp.email);
                this.router.navigateByUrl('/tabs/inicio');
            }, (err) => {
                this.loading.dismiss();
                this.toastError();
                console.log(err);
            });
        }, 2000);
    }
    logincSuccess() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Espere un momento...',
            });
            yield this.loading.present();
        });
    }
    initLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Bienvenido',
                duration: 1000
            });
            yield this.loading.present();
        });
    }
    toastSuccess(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `Bienvenido ${message}`,
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        });
    }
    toastError() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Correo y/o Contraseña Incorrecta.',
                position: 'bottom',
                duration: 2500
            });
            toast.present();
        });
    }
    toastErrorRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Correo electronico ya existente.',
                position: 'bottom',
                duration: 2500
            });
            toast.present();
        });
    }
    toastErrorMesage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Correo electronico no encontrado',
                position: 'bottom',
                duration: 2500
            });
            toast.present();
        });
    }
    toastSuccessRecovery(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `Se ha enviado el enlace a ${message}`,
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        });
    }
    registro(form) {
        if (form.invalid) {
            return;
        }
        this.logincSuccess();
        this.auth.postUser(this.infoUser).subscribe((resp) => {
            const uuid = resp.name;
            this.auth.nuevoUsuario(this.registerUser, uuid)
                .subscribe(usuario => {
                this.loading.dismiss();
                this.toastSuccess(usuario.email);
                this.router.navigateByUrl('/tabs/inicio');
            }, (err) => {
                this.loading.dismiss();
                this.toastErrorRegister();
                console.log(err);
            });
        });
    }
    recovery(form) {
        this.logincSuccess();
        this.auth.recovery(this.recoveryUser).subscribe((resp) => {
            this.loading.dismiss();
            this.toastSuccessRecovery(resp.email);
        }, (error) => {
            this.loading.dismiss();
            this.toastErrorMesage();
        });
    }
    mostrarRegistro() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }
    mostrarLogin() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }
    mostrarRecovery() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(2);
        this.slides.lockSwipes(true);
    }
};
LoginPage.ctorParameters = () => [
    { type: _servicies_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
LoginPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slidePrincipal',] }]
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map