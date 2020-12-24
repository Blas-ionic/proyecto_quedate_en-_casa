(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-information-information-information-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/information/information/information.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/information/information/information.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"primary\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Quédate En Casa\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n\n    <ion-list>\n        <ion-card>\n            <ion-card-header>\n                <ion-card-title>\n                    Informacion\n                </ion-card-title>\n            </ion-card-header>\n\n            <ion-slides pager=\"true\">\n                <ion-slide class=\"image-slide\" [style]=\"img1 | domSanitizer\">\n                </ion-slide>\n                <ion-slide class=\"image-slide\" [style]=\"img2 | domSanitizer\">\n                </ion-slide>\n            </ion-slides>\n        </ion-card>\n\n        <ion-item>\n            <ion-label>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <div class=\"ion-text-center\">\n                                <h1>Numero de Contacto</h1>\n                            </div>\n                        </ion-col>\n                        <ion-col size=\"12\">\n                            <div class=\"ion-text-center\">\n                                <ion-chip outline color=\"primary\">\n                                    <h3>229 129 5020</h3>\n                                </ion-chip>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <div class=\"ion-text-center\">\n                                <h1>Chat Facebook</h1>\n                            </div>\n                        </ion-col>\n                        <ion-col size=\"12\">\n                            <div class=\"ion-text-center\">\n                                <ion-button href=\"https://www.facebook.com/messages/t/quedateencasateziutlan\">\n                                    <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>\n                                    Chat En Messenger\n                                </ion-button>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/components/information/information/information-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/information/information/information-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: InformationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageRoutingModule", function() { return InformationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./information.page */ "./src/app/components/information/information/information.page.ts");




const routes = [
    {
        path: '',
        component: _information_page__WEBPACK_IMPORTED_MODULE_3__["InformationPage"]
    }
];
let InformationPageRoutingModule = class InformationPageRoutingModule {
};
InformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InformationPageRoutingModule);



/***/ }),

/***/ "./src/app/components/information/information/information.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/information/information/information.module.ts ***!
  \**************************************************************************/
/*! exports provided: InformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageModule", function() { return InformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _information_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./information-routing.module */ "./src/app/components/information/information/information-routing.module.ts");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information.page */ "./src/app/components/information/information/information.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let InformationPageModule = class InformationPageModule {
};
InformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _information_routing_module__WEBPACK_IMPORTED_MODULE_5__["InformationPageRoutingModule"]
        ],
        declarations: [_information_page__WEBPACK_IMPORTED_MODULE_6__["InformationPage"]]
    })
], InformationPageModule);



/***/ }),

/***/ "./src/app/components/information/information/information.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/information/information/information.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post {\n  margin-top: 10px;\n  box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 0.5);\n}\n\n.image-slide {\n  width: 100%;\n  height: 200px;\n  /* Full height */\n  /* Imagen centrada y colocada de forma elegante */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.ion-text-center {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFFaEIsOENBQThDO0FBQ2xEOztBQUVBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFFYixnQkFBQTtFQUVBLGlEQUFBO0VBQ0EsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFEMUI7O0FBSUE7RUFDSSx5QkFBb0I7RUFDcEIsNEJBQXVCO0FBRDNCOztBQUlBO0VBQ0ksa0JBQ0o7QUFGQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24vaW5mb3JtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3Qge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5pbWFnZS1zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgLyogRnVsbCBoZWlnaHQgKi9cbiAgICAvLyBoZWlnaHQ6IDEwMCU7IFxuICAgIC8qIEltYWdlbiBjZW50cmFkYSB5IGNvbG9jYWRhIGRlIGZvcm1hIGVsZWdhbnRlICovXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuLmlvbi10ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/information/information/information.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/information/information/information.page.ts ***!
  \************************************************************************/
/*! exports provided: InformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPage", function() { return InformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InformationPage = class InformationPage {
    constructor() {
        this.img1 = '../.././/assets/images/quedate_portada.jpg';
        this.img2 = '../.././/assets/images/Catedral.jpg';
    }
    ngOnInit() {
    }
};
InformationPage.ctorParameters = () => [];
InformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-information',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./information.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/information/information/information.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./information.page.scss */ "./src/app/components/information/information/information.page.scss")).default]
    })
], InformationPage);



/***/ })

}]);
//# sourceMappingURL=components-information-information-information-module-es2015.js.map