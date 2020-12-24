(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-tab3-edit-edit-module~pages-login-login-module~tab1-tab1-module~tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-selector/avatar-selector.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-selector/avatar-selector.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row>\n    <ion-col>\n        <h3>Seleccione Avatar</h3>\n    </ion-col>\n</ion-row>\n<ion-row>\n    <ion-col>\n        <ion-slides [options]=\"avatartSlide\">\n            <ion-slide *ngFor=\"let avatar of avatars\">\n                <ion-img class=\"pick-avatar\" [ngClass]=\"{'pick-avatar-seleccionado': avatar.seleccionado}\" (click)=\"seleccionarAvatar(avatar)\" src=\"/assets/avatars/{{avatar.img}}\"></ion-img>\n            </ion-slide>\n        </ion-slides>\n    </ion-col>\n</ion-row>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popinfo/popinfo.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popinfo/popinfo.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n    <ion-list-header>Opciones</ion-list-header>\n    <ion-item button (click)=\"onPerfil()\">\n        <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n        <small>Perfil</small>\n    </ion-item>\n    <ion-item button (click)=\"onAbout()\">\n        <ion-icon slot=\"start\" name=\"clipboard\"></ion-icon>\n        <small>Acerca de</small>\n    </ion-item>\n    <ion-item button (click)=\"logout()\">\n        <ion-icon slot=\"start\" name=\"exit-outline\"></ion-icon>\n        <small>Cerrar Sesion</small>\n    </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"post\">\n    <ion-slides pager=\"true\">\n        <ion-slide class=\"image-slide\" [style]=\"img1 | domSanitizer\">\n        </ion-slide>\n    </ion-slides>\n\n    <ion-item lines=\"none\">\n        <ion-label>\n            {{post.title.rendered}}\n        </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n        <ion-label text-wrap>\n            {{post.content.rendered}}\n        </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"heart-outline\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"bookmark-outline\"></ion-icon>\n    </ion-item>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/posts/posts.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/posts/posts.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid fixed>\n    <ion-row>\n        <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\" *ngFor=\"let post of posts; let i = index;\">\n            <app-post [post]=\"post\"></app-post>\n        </ion-col>\n    </ion-row>\n</ion-grid>");

/***/ }),

/***/ "./src/app/components/avatar-selector/avatar-selector.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/avatar-selector/avatar-selector.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainSlide,\n.mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 150px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n\n.my-custom-class {\n  color: red !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0b3IvYXZhdGFyLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLFdBQVc7RUFDWCxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksK0JBQStCO0VBQy9CLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXZhdGFyLXNlbGVjdG9yL2F2YXRhci1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluU2xpZGUsXG4ubWFpblNsaWRlIGlvbi1zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuLnBpY2stYXZhdGFyIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBvcGFjaXR5OiAwLjM7XG59XG5cbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4ubXktY3VzdG9tLWNsYXNzIHtcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/avatar-selector/avatar-selector.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/avatar-selector/avatar-selector.component.ts ***!
  \*************************************************************************/
/*! exports provided: AvatarSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarSelectorComponent", function() { return AvatarSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AvatarSelectorComponent = class AvatarSelectorComponent {
    constructor() {
        this.avatarSel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.avatars = [
            {
                img: 'av-1.png',
                seleccionado: true
            },
            {
                img: 'av-2.png',
                seleccionado: false
            },
            {
                img: 'av-3.png',
                seleccionado: false
            },
            {
                img: 'av-4.png',
                seleccionado: false
            },
            {
                img: 'av-5.png',
                seleccionado: false
            },
            {
                img: 'av-6.png',
                seleccionado: false
            },
            {
                img: 'av-7.png',
                seleccionado: false
            },
            {
                img: 'av-8.png',
                seleccionado: false
            },
        ];
        this.avatartSlide = {
            slidesPerView: 3.5
        };
    }
    ngOnInit() { }
    seleccionarAvatar(avatar) {
        this.avatars.forEach(av => av.seleccionado = false);
        avatar.seleccionado = true;
        console.log(avatar.img);
        this.avatarSel.emit(avatar.img);
    }
};
AvatarSelectorComponent.ctorParameters = () => [];
AvatarSelectorComponent.propDecorators = {
    avatarSel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
AvatarSelectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-avatar-selector',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./avatar-selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-selector/avatar-selector.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./avatar-selector.component.scss */ "./src/app/components/avatar-selector/avatar-selector.component.scss")).default]
    })
], AvatarSelectorComponent);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popinfo/popinfo.component */ "./src/app/components/popinfo/popinfo.component.ts");
/* harmony import */ var _avatar_selector_avatar_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./avatar-selector/avatar-selector.component */ "./src/app/components/avatar-selector/avatar-selector.component.ts");









let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"],
            _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"],
            _popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__["PopinfoComponent"],
            _avatar_selector_avatar_selector_component__WEBPACK_IMPORTED_MODULE_8__["AvatarSelectorComponent"]
        ],
        exports: [
            _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"],
            _popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__["PopinfoComponent"],
            _avatar_selector_avatar_selector_component__WEBPACK_IMPORTED_MODULE_8__["AvatarSelectorComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/popinfo/popinfo.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popinfo/popinfo.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9waW5mby9wb3BpbmZvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/popinfo/popinfo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popinfo/popinfo.component.ts ***!
  \*********************************************************/
/*! exports provided: PopinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopinfoComponent", function() { return PopinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicies_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicies/auth.service */ "./src/app/servicies/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let PopinfoComponent = class PopinfoComponent {
    constructor(popoverController, auth, router) {
        this.popoverController = popoverController;
        this.auth = auth;
        this.router = router;
        this.items = [
            {
                name: 'Perfil',
                redirecTo: '/tabs/quedatecasa/informacion'
            },
            {
                name: 'Acerca de',
                redirecTo: '/tabs/quedatecasa/comunidad'
            }
        ];
    }
    ngOnInit() { }
    onPerfil() {
        this.popoverController.dismiss(this.router.navigateByUrl('/tabs/usuario'));
    }
    onAbout() {
        this.popoverController.dismiss(this.router.navigateByUrl('/tabs/quedatecasa'));
    }
    logout() {
        this.popoverController.dismiss(this.auth.logout());
        this.popoverController.dismiss(this.router.navigateByUrl('/login'));
    }
};
PopinfoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _servicies_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PopinfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popinfo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popinfo/popinfo.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popinfo.component.scss */ "./src/app/components/popinfo/popinfo.component.scss")).default]
    })
], PopinfoComponent);



/***/ }),

/***/ "./src/app/components/post/post.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post {\n  margin-top: 10px;\n  box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 0.5);\n}\n\n.image-slide {\n  width: 100%;\n  height: 200px;\n  /* Full height */\n  /* Imagen centrada y colocada de forma elegante */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFFaEIsOENBQThDO0FBQ2xEOztBQUVBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFFYixnQkFBQTtFQUVBLGlEQUFBO0VBQ0EsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFEMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uaW1hZ2Utc2xpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgLy8gaGVpZ2h0OiAxMDAlOyBcbiAgICAvKiBJbWFnZW4gY2VudHJhZGEgeSBjb2xvY2FkYSBkZSBmb3JtYSBlbGVnYW50ZSAqL1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PostComponent = class PostComponent {
    constructor() {
        this.post = {};
        this.img1 = '../.././/assets/images/quedate_portada.jpg';
    }
    ngOnInit() { }
};
PostComponent.ctorParameters = () => [];
PostComponent.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
PostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post.component.scss */ "./src/app/components/post/post.component.scss")).default]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/components/posts/posts.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/posts/posts.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PostsComponent = class PostsComponent {
    constructor() {
        this.posts = [];
    }
    ngOnInit() {
    }
};
PostsComponent.ctorParameters = () => [];
PostsComponent.propDecorators = {
    posts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
PostsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/posts/posts.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./posts.component.scss */ "./src/app/components/posts/posts.component.scss")).default]
    })
], PostsComponent);



/***/ })

}]);
//# sourceMappingURL=default~components-tab3-edit-edit-module~pages-login-login-module~tab1-tab1-module~tab3-tab3-module-es2015.js.map