(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-about-comunity-comunity-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/comunity/comunity.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/comunity/comunity.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutComunityComunityPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"primary\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Quédate En Casa\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>\n                Comunidad\n            </ion-card-title>\n        </ion-card-header>\n\n        <ion-slides pager=\"true\">\n            <ion-slide class=\"image-slide\" [style]=\"img1 | domSanitizer\">\n            </ion-slide>\n            <ion-slide class=\"image-slide\" [style]=\"img2 | domSanitizer\">\n            </ion-slide>\n        </ion-slides>\n    </ion-card>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div class=\"ion-text-center \">\n                    <ion-card>\n                        <ion-card-header>\n                            <ion-card-title>Siguenos por Facebook!</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <ion-button href=\"https://www.facebook.com/quedateencasateziutlan\">\n                                <ion-icon name=\"thumbs-up-outline\" slot=\"start\"></ion-icon>\n                                Quedate En Casa teziutlan\n                            </ion-button>\n                        </ion-card-content>\n                    </ion-card>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <div class=\"ion-text-center \">\n                    <ion-card>\n                        <ion-card-header>\n                            <ion-card-title>Visita nuestra Pagina Web!</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <ion-button href=\"http://quedateencasateziutlan.org.mx/\">\n                                <ion-icon name=\"thumbs-up-outline\" slot=\"start\"></ion-icon>\n                                Quedate En Casa teziutlan\n                            </ion-button>\n                        </ion-card-content>\n                    </ion-card>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/components/about/comunity/comunity.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/about/comunity/comunity.module.ts ***!
      \**************************************************************/

    /*! exports provided: ComunityPageModule */

    /***/
    function srcAppComponentsAboutComunityComunityModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComunityPageModule", function () {
        return ComunityPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _comunity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./comunity.page */
      "./src/app/components/about/comunity/comunity.page.ts");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var ComunityPageModule = function ComunityPageModule() {
        _classCallCheck(this, ComunityPageModule);
      };

      ComunityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _comunity_page__WEBPACK_IMPORTED_MODULE_6__["ComunityPage"]
        }])],
        declarations: [_comunity_page__WEBPACK_IMPORTED_MODULE_6__["ComunityPage"]]
      })], ComunityPageModule);
      /***/
    },

    /***/
    "./src/app/components/about/comunity/comunity.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/components/about/comunity/comunity.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsAboutComunityComunityPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".post {\n  margin-top: 10px;\n  box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 0.5);\n}\n\n.image-slide {\n  width: 100%;\n  height: 200px;\n  /* Full height */\n  /* Imagen centrada y colocada de forma elegante */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.ion-text-center {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9jb211bml0eS9jb211bml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFFaEIsOENBQThDO0FBQ2xEOztBQUVBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFFYixnQkFBQTtFQUVBLGlEQUFBO0VBQ0EsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFEMUI7O0FBSUE7RUFDSSxrQkFDSjtBQUZBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9jb211bml0eS9jb211bml0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmltYWdlLXNsaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAvKiBGdWxsIGhlaWdodCAqL1xuICAgIC8vIGhlaWdodDogMTAwJTsgXG4gICAgLyogSW1hZ2VuIGNlbnRyYWRhIHkgY29sb2NhZGEgZGUgZm9ybWEgZWxlZ2FudGUgKi9cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaW9uLXRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/about/comunity/comunity.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/components/about/comunity/comunity.page.ts ***!
      \************************************************************/

    /*! exports provided: ComunityPage */

    /***/
    function srcAppComponentsAboutComunityComunityPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComunityPage", function () {
        return ComunityPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ComunityPage = /*#__PURE__*/function () {
        function ComunityPage() {
          _classCallCheck(this, ComunityPage);

          this.img1 = '../.././/assets/images/quedate_portada.jpg';
          this.img2 = '../.././/assets/images/Catedral.jpg';
        }

        _createClass(ComunityPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ComunityPage;
      }();

      ComunityPage.ctorParameters = function () {
        return [];
      };

      ComunityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comunity',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comunity.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/comunity/comunity.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comunity.page.scss */
        "./src/app/components/about/comunity/comunity.page.scss"))["default"]]
      })], ComunityPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-about-comunity-comunity-module-es5.js.map