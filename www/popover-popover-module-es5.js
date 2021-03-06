(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popover-popover-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popinfo/popinfo.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popinfo/popinfo.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopinfoPopinfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list>\n    <ion-list-header>Opciones</ion-list-header>\n    <ion-item button (click)=\"onPerfil()\">\n        <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n        <small>Perfil</small>\n    </ion-item>\n    <ion-item button (click)=\"onAbout()\">\n        <ion-icon slot=\"start\" name=\"clipboard\"></ion-icon>\n        <small>Acerca de</small>\n    </ion-item>\n    <ion-item button (click)=\"logout()\">\n        <ion-icon slot=\"start\" name=\"exit-outline\"></ion-icon>\n        <small>Cerrar Sesion</small>\n    </ion-item>\n</ion-list>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPopoverPopoverPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"presentPopover($event)\">\n                <ion-icon slot=\"icon-only\" ios=\"person\" md=\"person\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>popover</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-button (click)=\"presentPopover($event)\">\n        Click me\n    </ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/components/popinfo/popinfo.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/popinfo/popinfo.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPopinfoPopinfoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9waW5mby9wb3BpbmZvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/popinfo/popinfo.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/popinfo/popinfo.component.ts ***!
      \*********************************************************/

    /*! exports provided: PopinfoComponent */

    /***/
    function srcAppComponentsPopinfoPopinfoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopinfoComponent", function () {
        return PopinfoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _servicies_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../servicies/auth.service */
      "./src/app/servicies/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var PopinfoComponent = /*#__PURE__*/function () {
        function PopinfoComponent(popoverController, auth, router) {
          _classCallCheck(this, PopinfoComponent);

          this.popoverController = popoverController;
          this.auth = auth;
          this.router = router;
          this.items = [{
            name: 'Perfil',
            redirecTo: '/tabs/quedatecasa/informacion'
          }, {
            name: 'Acerca de',
            redirecTo: '/tabs/quedatecasa/comunidad'
          }];
        }

        _createClass(PopinfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onPerfil",
          value: function onPerfil() {
            this.popoverController.dismiss(this.router.navigateByUrl('/tabs/usuario'));
          }
        }, {
          key: "onAbout",
          value: function onAbout() {
            this.popoverController.dismiss(this.router.navigateByUrl('/tabs/quedatecasa'));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.popoverController.dismiss(this.auth.logout());
            this.popoverController.dismiss(this.router.navigateByUrl('/login'));
          }
        }]);

        return PopinfoComponent;
      }();

      PopinfoComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }, {
          type: _servicies_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      PopinfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popinfo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./popinfo.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popinfo/popinfo.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./popinfo.component.scss */
        "./src/app/components/popinfo/popinfo.component.scss"))["default"]]
      })], PopinfoComponent);
      /***/
    },

    /***/
    "./src/app/pages/popover/popover-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/popover/popover-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: PopoverPageRoutingModule */

    /***/
    function srcAppPagesPopoverPopoverRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverPageRoutingModule", function () {
        return PopoverPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./popover.page */
      "./src/app/pages/popover/popover.page.ts");

      var routes = [{
        path: '',
        component: _popover_page__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"]
      }];

      var PopoverPageRoutingModule = function PopoverPageRoutingModule() {
        _classCallCheck(this, PopoverPageRoutingModule);
      };

      PopoverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PopoverPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/popover/popover.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/popover/popover.module.ts ***!
      \*************************************************/

    /*! exports provided: PopoverPageModule */

    /***/
    function srcAppPagesPopoverPopoverModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function () {
        return PopoverPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./popover-routing.module */
      "./src/app/pages/popover/popover-routing.module.ts");
      /* harmony import */


      var _popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./popover.page */
      "./src/app/pages/popover/popover.page.ts");

      var PopoverPageModule = function PopoverPageModule() {
        _classCallCheck(this, PopoverPageModule);
      };

      PopoverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopoverPageRoutingModule"]],
        declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]]
      })], PopoverPageModule);
      /***/
    },

    /***/
    "./src/app/pages/popover/popover.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/popover/popover.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPopoverPopoverPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcG92ZXIvcG9wb3Zlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/popover/popover.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/popover/popover.page.ts ***!
      \***********************************************/

    /*! exports provided: PopoverPage */

    /***/
    function srcAppPagesPopoverPopoverPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverPage", function () {
        return PopoverPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/popinfo/popinfo.component */
      "./src/app/components/popinfo/popinfo.component.ts");

      var PopoverPage = /*#__PURE__*/function () {
        function PopoverPage(popoverController) {
          _classCallCheck(this, PopoverPage);

          this.popoverController = popoverController;
        }

        _createClass(PopoverPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentPopover",
          value: function presentPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover, _yield$popover$onWill, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_3__["PopinfoComponent"],
                        event: ev,
                        translucent: true
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                      _context.next = 7;
                      return popover.onWillDismiss();

                    case 7:
                      _yield$popover$onWill = _context.sent;
                      data = _yield$popover$onWill.data;

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return PopoverPage;
      }();

      PopoverPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }];
      };

      PopoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./popover.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./popover.page.scss */
        "./src/app/pages/popover/popover.page.scss"))["default"]]
      })], PopoverPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=popover-popover-module-es5.js.map