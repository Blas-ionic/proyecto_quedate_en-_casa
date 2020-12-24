(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tab3-edit-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tab3/edit/edit.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tab3/edit/edit.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"primary\"> Listo</ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Quédate En Casa\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n    <ion-grid>\n        <form (ngSubmit)=\"onUpdateInfo(UpRegistro)\" #UpRegistro=\"ngForm\">\n            <app-avatar-selector (avatarSel)=\"info.photoUrl = $event\"></app-avatar-selector>\n            <ion-row>\n                <ion-col>\n                    <ion-card>\n                        <ion-card-header>\n                            <ion-list>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Usuario</ion-label>\n                                    <ion-input name=\"username\" [(ngModel)]=\"info.username\" type=\"text\" required></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Nombre</ion-label>\n                                    <ion-input name=\"name\" [(ngModel)]=\"info.name\" type=\"text\" required></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Descripcion</ion-label>\n                                    <ion-input name=\"description\" [(ngModel)]=\"info.description\" type=\"text\" required></ion-input>\n                                </ion-item>\n                            </ion-list>\n                        </ion-card-header>\n\n                        <ion-card-content>\n                            <ion-row>\n                                <ion-col>\n                                    <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\n                                        Actualizar\n                                    </ion-button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </form>\n    </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/components/tab3/edit/edit-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tab3/edit/edit-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function() { return EditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.page */ "./src/app/components/tab3/edit/edit.page.ts");




const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
    }
];
let EditPageRoutingModule = class EditPageRoutingModule {
};
EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPageRoutingModule);



/***/ }),

/***/ "./src/app/components/tab3/edit/edit.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/tab3/edit/edit.module.ts ***!
  \*****************************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.module */ "./src/app/components/tab3/edit/edit-routing.module.ts");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/components/tab3/edit/edit.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components/components.module.ts");








let EditPageModule = class EditPageModule {
};
EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"],
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })
], EditPageModule);



/***/ }),

/***/ "./src/app/components/tab3/edit/edit.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/tab3/edit/edit.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainSlide,\n.mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 150px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n\n.my-custom-class {\n  color: red !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWIzL2VkaXQvZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksV0FBVztFQUNYLFlBQVk7QUFDaEI7O0FBRUE7RUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksV0FBVztFQUNYLFlBQVk7QUFDaEI7O0FBRUE7RUFDSSwrQkFBK0I7RUFDL0IscUJBQXFCO0FBQ3pCOztBQUVBO0VBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YWIzL2VkaXQvZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblNsaWRlLFxuLm1haW5TbGlkZSBpb24tc2xpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbi5waWNrLWF2YXRhciB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgb3BhY2l0eTogMC4zO1xufVxuXG4ucGljay1hdmF0YXItc2VsZWNjaW9uYWRvIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuLm15LWN1c3RvbS1jbGFzcyB7XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/tab3/edit/edit.page.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tab3/edit/edit.page.ts ***!
  \***************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _servicies_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../servicies/auth.service */ "./src/app/servicies/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let EditPage = class EditPage {
    constructor(auth, router, loadingController, toastController) {
        this.auth = auth;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.user = [];
        this.info = [];
    }
    ngOnInit() {
        this.onUser();
        this.onInfo();
    }
    onUpdate(form) {
        console.log(this.user.email);
        this.auth.putEmail(this.user)
            .subscribe(resp => {
            this.toastSuccess();
            this.router.navigateByUrl('/tabs/usuario');
        }, (err) => {
            this.toastError();
        });
    }
    onUpdateInfo(form) {
        console.log(this.info);
        this.auth.putInfoUser(this.info)
            .subscribe(resp => {
            this.toastSuccess();
            this.router.navigateByUrl('/tabs/usuario');
        });
    }
    toastSuccess() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Actualizado Completamente',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        });
    }
    toastError() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'El correo ya existe.',
                position: 'bottom',
                duration: 2500
            });
            toast.present();
        });
    }
    perfilLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Espere un momento...',
                duration: 2000
            });
            yield this.loading.present();
        });
    }
    onUser() {
        this.auth.getUser()
            .subscribe((resp) => {
            this.user = resp.users[0];
        });
    }
    onInfo() {
        const uuid = localStorage.getItem('uuid');
        this.auth.getInfoUser(uuid)
            .subscribe(resp => {
            this.info = resp;
        });
    }
};
EditPage.ctorParameters = () => [
    { type: _servicies_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tab3/edit/edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit.page.scss */ "./src/app/components/tab3/edit/edit.page.scss")).default]
    })
], EditPage);



/***/ })

}]);
//# sourceMappingURL=components-tab3-edit-edit-module-es2015.js.map