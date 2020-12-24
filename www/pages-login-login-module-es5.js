(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <ion-slides class=\"mainSlide\" #slidePrincipal>\n        <ion-slide>\n            <form (ngSubmit)=\"login(fLogin)\" #fLogin=\"ngForm\">\n                <ion-grid fixed>\n                    <ion-row>\n                        <ion-col>\n                            <img src=\"/assets/images/quedate_logo.png\">\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-list>\n\n                                <ion-item>\n                                    <ion-label position=\"floating\">Email</ion-label>\n                                    <ion-input name=\"email\" [class.is-invalid]=\"email.invalid && email.touched\" [(ngModel)]=\"usuario.email\" type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required #email=\"ngModel\"></ion-input>\n                                </ion-item>\n\n                                <ion-item>\n                                    <ion-label position=\"floating\">Password</ion-label>\n                                    <ion-input name=\"password\" [class.is-invalid]=\"password.invalid && password.touched\" [(ngModel)]=\"usuario.password\" type=\"password\" required #password=\"ngModel\"></ion-input>\n                                </ion-item>\n\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\n                                Login\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </form>\n        </ion-slide>\n        <ion-slide>\n            <ion-grid fixed>\n                <app-avatar-selector (avatarSel)=\"infoUser.photoUrl = $event\"></app-avatar-selector>\n                <form (ngSubmit)=\"registro(fRegistro)\" #fRegistro=\"ngForm\">\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <h4>Datos de la cuenta</h4>\n                        </ion-col>\n                        <ion-col>\n                            <ion-list>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Correo Electronico</ion-label>\n                                    <ion-input name=\"email\" [(ngModel)]=\"registerUser.email\" type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Contraseña</ion-label>\n                                    <ion-input name=\"password\" [(ngModel)]=\"registerUser.password\" type=\"password\" required></ion-input>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <h4>Datos de la cuenta</h4>\n                        </ion-col>\n                        <ion-col>\n                            <ion-list>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Nombre completo</ion-label>\n                                    <ion-input name=\"name\" [(ngModel)]=\"infoUser.name\" required></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Usuario</ion-label>\n                                    <ion-input name=\"username\" [(ngModel)]=\"infoUser.username\" required></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Description <small>(Opcional)</small></ion-label>\n                                    <ion-input name=\"description\" [(ngModel)]=\"infoUser.description\"></ion-input>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\n                                Crear usuario\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </form>\n            </ion-grid>\n        </ion-slide>\n        <ion-slide>\n            <ion-grid fixed>\n                <ion-row>\n                    <ion-col>\n                        <img src=\"/assets/images/quedate_logo.png\">\n                    </ion-col>\n                </ion-row>\n                <form (ngSubmit)=\"recovery(frecovery)\" #frecovery=\"ngForm\">\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <h4>Recuperar Contraseña</h4>\n                        </ion-col>\n                        <ion-col>\n                            <ion-list>\n                                <ion-item>\n                                    <ion-label position=\"floating\">Correo Electronico</ion-label>\n                                    <ion-input name=\"email\" [(ngModel)]=\"recoveryUser.email\" type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required></ion-input>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\n                                Recuperar\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </form>\n            </ion-grid>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n<ion-footer no-border>\n    <ion-toolbar>\n        <ion-row>\n            <ion-col>\n                <ion-button shape=\"round\" expand=\"full\" size=\"small\" fill=\"outline\" color=\"tertiary\" (click)=\"mostrarLogin()\">\n                    Ingresar\n                </ion-button>\n            </ion-col>\n            <ion-col>\n                <ion-button shape=\"round\" expand=\"full\" size=\"small\" fill=\"outline\" color=\"tertiary\" (click)=\"mostrarRegistro()\">\n                    Registrarme\n                </ion-button>\n            </ion-col>\n            <ion-col>\n                <ion-button shape=\"round\" expand=\"full\" size=\"small\" fill=\"outline\" color=\"tertiary\" (click)=\"mostrarRecovery()\">\n                    Recuperar Contraseña\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/model/usuarios.model.ts":
    /*!*****************************************!*\
      !*** ./src/app/model/usuarios.model.ts ***!
      \*****************************************/

    /*! exports provided: UsuarioModel */

    /***/
    function srcAppModelUsuariosModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuarioModel", function () {
        return UsuarioModel;
      });

      var UsuarioModel = function UsuarioModel() {
        _classCallCheck(this, UsuarioModel);
      };
      /***/

    },

    /***/
    "./src/app/pages/login/login-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "./src/app/components/components.module.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mainSlide,\n.mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 150px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n\n.my-custom-class {\n  color: red !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLFdBQVc7RUFDWCxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksK0JBQStCO0VBQy9CLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluU2xpZGUsXG4ubWFpblNsaWRlIGlvbi1zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuLnBpY2stYXZhdGFyIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBvcGFjaXR5OiAwLjM7XG59XG5cbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4ubXktY3VzdG9tLWNsYXNzIHtcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _model_usuarios_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../model/usuarios.model */
      "./src/app/model/usuarios.model.ts");
      /* harmony import */


      var _servicies_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../servicies/auth.service */
      "./src/app/servicies/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(auth, router, loadingController, toastController) {
          _classCallCheck(this, LoginPage);

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

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.usuario = new _model_usuarios_model__WEBPACK_IMPORTED_MODULE_3__["UsuarioModel"]();
            this.initLoading();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.slides.lockSwipes(true);
          }
        }, {
          key: "login",
          value: function login(form) {
            var _this = this;

            if (form.invalid) {
              return;
            }

            this.logincSuccess();
            setTimeout(function () {
              _this.auth.login(_this.usuario).subscribe(function (resp) {
                _this.loading.dismiss();

                _this.toastSuccess(resp.email);

                _this.router.navigateByUrl('/tabs/inicio');
              }, function (err) {
                _this.loading.dismiss();

                _this.toastError();

                console.log(err);
              });
            }, 2000);
          }
        }, {
          key: "logincSuccess",
          value: function logincSuccess() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Espere un momento...'
                      });

                    case 2:
                      this.loading = _context.sent;
                      _context.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "initLoading",
          value: function initLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Bienvenido',
                        duration: 1000
                      });

                    case 2:
                      this.loading = _context2.sent;
                      _context2.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "toastSuccess",
          value: function toastSuccess(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: "Bienvenido ".concat(message),
                        position: 'bottom',
                        duration: 2000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "toastError",
          value: function toastError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: 'Correo y/o Contraseña Incorrecta.',
                        position: 'bottom',
                        duration: 2500
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "toastErrorRegister",
          value: function toastErrorRegister() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastController.create({
                        message: 'Correo electronico ya existente.',
                        position: 'bottom',
                        duration: 2500
                      });

                    case 2:
                      toast = _context5.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "toastErrorMesage",
          value: function toastErrorMesage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastController.create({
                        message: 'Correo electronico no encontrado',
                        position: 'bottom',
                        duration: 2500
                      });

                    case 2:
                      toast = _context6.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "toastSuccessRecovery",
          value: function toastSuccessRecovery(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toastController.create({
                        message: "Se ha enviado el enlace a ".concat(message),
                        position: 'bottom',
                        duration: 2000
                      });

                    case 2:
                      toast = _context7.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "registro",
          value: function registro(form) {
            var _this2 = this;

            if (form.invalid) {
              return;
            }

            this.logincSuccess();
            this.auth.postUser(this.infoUser).subscribe(function (resp) {
              var uuid = resp.name;

              _this2.auth.nuevoUsuario(_this2.registerUser, uuid).subscribe(function (usuario) {
                _this2.loading.dismiss();

                _this2.toastSuccess(usuario.email);

                _this2.router.navigateByUrl('/tabs/inicio');
              }, function (err) {
                _this2.loading.dismiss();

                _this2.toastErrorRegister();

                console.log(err);
              });
            });
          }
        }, {
          key: "recovery",
          value: function recovery(form) {
            var _this3 = this;

            this.logincSuccess();
            this.auth.recovery(this.recoveryUser).subscribe(function (resp) {
              _this3.loading.dismiss();

              _this3.toastSuccessRecovery(resp.email);
            }, function (error) {
              _this3.loading.dismiss();

              _this3.toastErrorMesage();
            });
          }
        }, {
          key: "mostrarRegistro",
          value: function mostrarRegistro() {
            this.slides.lockSwipes(false);
            this.slides.slideTo(1);
            this.slides.lockSwipes(true);
          }
        }, {
          key: "mostrarLogin",
          value: function mostrarLogin() {
            this.slides.lockSwipes(false);
            this.slides.slideTo(0);
            this.slides.lockSwipes(true);
          }
        }, {
          key: "mostrarRecovery",
          value: function mostrarRecovery() {
            this.slides.lockSwipes(false);
            this.slides.slideTo(2);
            this.slides.lockSwipes(true);
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _servicies_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      LoginPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slidePrincipal']
        }]
      };
      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map