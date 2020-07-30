function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- The header component -->\n<app-header></app-header>\n\n<!-- Wrapping the router outlet in order to control content centralization and layout padding.-->\n<div class=\"content-display-container\">\n  <!-- The dynamic pages handled by the angular router would all be loaded here -->\n  <router-outlet></router-outlet>\n</div>\n\n<!-- The footer component -->\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-us/contact-us.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-us/contact-us.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactUsContactUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-display-container\">\n  <h1>CONTACT US</h1>\n\n  <p>\n    You are welcome to the Contact Us page.\n    Our Address and Social media links can be found in the footer.\n  </p>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Footer -->\n<footer class=\"footer-container\">\n    <div class=\"footer-inner-container\"> <!-- Serves to make the footer more responsive. -->\n        <div class=\"f-title\">\n            <h1 class=\"custom-h-1\"> \n                <span class=\"std-footer-text\">Our Library</span> \n                <span class=\"std-footer-text\">is there at your service,</span>  \n                <span class=\"std-footer-text light-green\">Contact us</span> \n            </h1>\n        </div>\n        <div class=\"f-main\">\n            <a href=\"#\">Privacy and Security</a>\n            <a href=\"#\">Legal</a>\n            <a href=\"#\">Accessibility</a>\n            <a href=\"#\">About Us</a>\n            <a href=\"#\">Careers</a>\n        </div>\n        <!-- social media links, with self customised SVG icons, done with Adobe illustrator -->\n        <div class=\"f-base\">\n            <a href=\"https://www.facebook.com/\" target=\"_blank\"><img src=\"assets/images/facebook.svg\" alt=\"facebook icon\"></a> \n            <a href=\"https://twitter.com\" target=\"_blank\"><img src=\"assets/images/twitter.svg\" alt=\"twitter icon\"></a> \n            <a href=\"https://www.youtube.com/\" target=\"_blank\"><img src=\"assets/images/youtube.svg\" alt=\"youtube icon\"></a> \n            <a href=\"https://en.wikipedia.org/wiki/RSS\" target=\"_blank\"><img src=\"assets/images/rss.svg\" alt=\"rss feed icon\"></a> \n        </div>\n    </div>\n</footer>\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<app-nav-bar></app-nav-bar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"design-container\">\n\n  <!-- Left column of the 2 columned layout -->\n  <div class=\"main\">\n    <h1 class=\"display-h1\">You are welcome to our City Library App</h1>\n\n    <p class=\"std-text text-content-p\">\n      Please select a library in order to proceed.\n    </p>\n    <hr>\n\n    <div *ngFor=\"let library of libraries\" (click)=\"getSelectedLibrary(library.libraryId)\" class=\"library-item\">\n      <mat-card>\n          {{ library.name }}\n      </mat-card>\n    </div>\n\n  </div>\n\n</div>\n\n\n<!-- Modal contents to be displayed as the template ref passed to the displayFormValues() method call above. -->\n<ng-template #dataToBSent>\n  <mat-list>\n    <mat-list-item>Title: <span class=\"result\">{{ currentSelectedData.infoTitle.name }}</span> </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>First Name: <span class=\"result\">{{ currentSelectedData.firstName }}</span> </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>Middle Initial: <span class=\"result\">{{ currentSelectedData.middleInitial }}</span> </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>Last Name: <span class=\"result\">{{ currentSelectedData.lastName }}</span> </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>Email Address: <span class=\"result\">{{ currentSelectedData.email }}</span> </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>Date Of Birth: <span class=\"result\">{{ currentSelectedData.dateOfBirth }}</span> </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>SIN: <span class=\"result\">{{ currentSelectedData.socialInsuranceNumber }}</span> </mat-list-item>\n    <mat-divider></mat-divider>\n  </mat-list>\n\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library/library.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library/library.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLibraryLibraryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-display-container\">\n  <h1 *ngIf=\"!isGetAvailableBooks\">Selected Library :</h1>\n\n\n  <div *ngIf=\"!isGetAvailableBooks\" class=\"main\">\n    <div *ngIf=\"library\">\n      <h1 class=\"display-h1\">You have selected the {{ library.name }}</h1>\n      <button class=\"availbleBooksBtn\" (click)=\"getAvailableBooks(library.libraryId)\" mat-raised-button color=\"primary\">\n        Available Books\n      </button>\n      <div>\n        <div class=\"library-item\">\n          <mat-card>\n            <span class=\"detail-item-hightlight\">Name: </span> {{ library.name }}\n          </mat-card>\n        </div>\n        <div class=\"library-item\">\n          <mat-card>\n            <span class=\"detail-item-hightlight\">City: </span> {{ library.city }}\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"isGetAvailableBooks\" class=\"main\">\n    <h1 class=\"display-h1\">Books available for {{ library.name }}</h1>\n\n    <div *ngFor=\"let bookObj of availableBooks\" (click)=\"displaySelectedBookDetails(availableBooksDetailsModal, bookObj)\" class=\"library-item avail\">\n      <mat-card>\n        <span class=\"detail-item-hightlight\">Book Name: </span> {{ bookObj.title }}\n      </mat-card>\n    </div>\n  </div>\n\n</div>\n\n\n<ng-template #availableBooksDetailsModal> \n    <div>\n        <h3>Available book details</h3>\n       <mat-card style=\"margin: 5px 0;\">\n        <span class=\"detail-item-hightlight\">Book Name: </span> {{ currentSelectedItem.title }}\n      </mat-card>\n       <mat-card style=\"margin: 5px 0;\">\n        <span class=\"detail-item-hightlight\">ISBN: </span> {{ currentSelectedItem.isbn }}\n      </mat-card>\n       <mat-card style=\"margin: 5px 0;\">\n        <span class=\"detail-item-hightlight\">Publication Date: </span> {{ currentSelectedItem.dateOfPublication }}\n      </mat-card>        \n    </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Navbar -->\n<div class=\"nav-bar\" role=\"banner\">\n    <!-- Mobile devices menu -->\n    <mat-icon (click)=\"toggleMobileMenu()\" class=\"item-icon menu-icon\">menu</mat-icon>\n\n    <!-- TD Logo -->\n    <div routerLink=\"/\" class=\"logo-container\">\n        <img width=\"40\" alt=\"Td Logo\" src=\"assets/images/logo.png\" />\n    </div>\n    <!-- Insurance Label -->\n    <div class=\"bold-text company-label\"  routerLink=\"/\">City Libraries</div>\n\n    <!-- Middle links group -->\n    <div class=\"middle-group\">\n        <span routerLink=\"products\" class=\"thin-text nav_links\">Schedules</span>\n        <span routerLink=\"contacts\" class=\"thin-text nav_links\">Contact Us</span>\n    </div>\n\n    <!-- End links group -->\n    <div class=\"end-group\">\n        <span style=\"margin-right: 30px;\" class=\"thin-text nav_links icon-ref\">\n            <button mat-button [matMenuTriggerFor]=\"lib\">\n                <span> {{selectedLibrary.name}}  </span>\n                 <mat-icon class=\"item-icon\">keyboard_arrow_down</mat-icon>\n            </button>\n            <mat-menu #lib=\"matMenu\" >\n                <button (click)=\"getSelectedLibrary(library)\" mat-menu-item *ngFor=\"let library of libraries\">{{library.name}}</button>\n            </mat-menu>\n        </span>\n        <span class=\"thin-text nav_links icon-ref\">\n            <mat-icon (click)=\"toggleSearch()\" class=\"search-icon\">search</mat-icon>\n        </span>\n\n    </div>\n  \n</div>\n\n\n\n<!-- Mobile navbar container -->\n<div class=\"mobile-menu-contents dark-green-bg\" [ngClass]=\"{'show-mobile-menu': mobileMenuOpen===true, 'hide-mobile-menu': mobileMenuOpen===false}\">\n    <div (click)=\"navigatetoLink('products')\" class=\"mobile-nav-links-container\">\n        <a class=\"mobile-menu-item\" mat-menu-item >\n            <mat-icon class=\"menu-icon\" aria-label=\"products icon\">schedule</mat-icon>\n            Schedules\n        </a>        \n    </div>\n\n\n    <div (click)=\"navigatetoLink('contacts')\" class=\"mobile-nav-links-container\">\n        <a class=\"mobile-menu-item\" mat-menu-item>\n            <mat-icon class=\"menu-icon\" aria-label=\"edit user list\">contact_mail</mat-icon>\n            Contact Us\n        </a>         \n    </div>\n   \n    <div class=\"mobile-nav-links-container dropdown-icon library-name\">\n        <span class=\"thin-text nav_links icon-ref\">\n            <button mat-button [matMenuTriggerFor]=\"provMobile\">\n                <span> {{ selectedLibrary.name }}  </span>\n                    <mat-icon class=\"item-icon\">keyboard_arrow_down</mat-icon>\n            </button>\n            <mat-menu #provMobile=\"matMenu\" >\n                <button (click)=\"getSelectedLibrary(library)\" mat-menu-item *ngFor=\"let library of libraries\">{{library.name}}</button>\n            </mat-menu>\n        </span>    \n    </div>\n\n    <div (click)=\"closeAndToggleSearch()\" class=\"mobile-nav-links-container\">\n        <a class=\"mobile-menu-item\" mat-menu-item >\n            <mat-icon class=\"menu-icon\" aria-label=\"edit user list\">search</mat-icon>\n            Search\n        </a>         \n    </div>\n                               \n</div>\n\n<div  [ngClass]=\"{'turn-on-overlay': mobileMenuOpen===true, 'turn-off-overlay': mobileMenuOpen===false}\" (click)=\"toggleMobileMenu()\" class=\"dark-content-overlay\"></div>   \n\n<div class=\"search-container\" [ngClass]=\"{'showSearchBox': showSearchInput===true, 'hideSearchBox': showSearchInput===false}\">\n    <mat-form-field class=\"search-field\">\n        <mat-label>Search a product</mat-label>\n        <input matInput type=\"text\" [(ngModel)]=\"searchValue\">\n        <button mat-button *ngIf=\"searchValue\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearchTerm()\">\n            <mat-icon>close</mat-icon>\n        </button>\n    </mat-form-field>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- This is just a place holder to show that the navigation is properly setup. -->\n<div class=\"page-display-container\">\n  <h1>PAGE NOT FOUND</h1>\n  <p>\n    Sorry, the page you navigated to, can not be found.\n    Please follow navigation menu for other options.\n  </p>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/schedules/schedules.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/schedules/schedules.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSchedulesSchedulesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- This is just a place holder to show that the navigation is properly setup. -->\n<div class=\"page-display-container\">\n  <h1>PRODUCTS</h1>\n\n  <p>\n    You are welcome to the Products page.\n    Please follow navigation menu for other options.\n  </p>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/angular-material.module.ts":
  /*!********************************************!*\
    !*** ./src/app/angular-material.module.ts ***!
    \********************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };

    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]],
      providers: []
    })], AngularMaterialModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_schedules_schedules_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/schedules/schedules.component */
    "./src/app/components/schedules/schedules.component.ts");
    /* harmony import */


    var _components_library_library_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/library/library.component */
    "./src/app/components/library/library.component.ts");
    /* harmony import */


    var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/contact-us/contact-us.component */
    "./src/app/components/contact-us/contact-us.component.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'products',
      component: _components_schedules_schedules_component__WEBPACK_IMPORTED_MODULE_5__["SchedulesComponent"]
    }, {
      path: 'contacts',
      component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"]
    }, {
      path: 'libraries/:libraryId',
      component: _components_library_library_component__WEBPACK_IMPORTED_MODULE_6__["LibraryComponent"]
    }, {
      path: 'home',
      redirectTo: ''
    }, {
      path: '**',
      pathMatch: 'full',
      component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-display-container {\n  width: 100%;\n  max-width: 1400px;\n  min-height: 500px;\n  margin: 0 auto;\n  padding: 20px 0;\n  position: relative;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXG90aGVyLXByb2plY3RzXFxha2FubS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vX3ZhcmlhYmxlc1wiO1xyXG5cclxuLy8gU3RydWN0dXJpbmcgb2YgdGhlIG1haW4gZGlzcGxheSBhcmVhIG1hbmFnZWQgYnkgdGhlIHJvdXRpbmcgbW9kdWxlXHJcbi8vICAgICBBbGwgdGhlIHJvdXRlcyB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGlzIHNwYWNlLlxyXG4uY29udGVudC1kaXNwbGF5LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn0iLCIuY29udGVudC1kaXNwbGF5LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'td-app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/nav-bar/nav-bar.component */
    "./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _components_schedules_schedules_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/schedules/schedules.component */
    "./src/app/components/schedules/schedules.component.ts");
    /* harmony import */


    var _components_library_library_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/library/library.component */
    "./src/app/components/library/library.component.ts");
    /* harmony import */


    var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/contact-us/contact-us.component */
    "./src/app/components/contact-us/contact-us.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"], _components_schedules_schedules_component__WEBPACK_IMPORTED_MODULE_8__["SchedulesComponent"], _components_library_library_component__WEBPACK_IMPORTED_MODULE_9__["LibraryComponent"], _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_13__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/contact-us/contact-us.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/contact-us/contact-us.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactUsContactUsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/contact-us/contact-us.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/contact-us/contact-us.component.ts ***!
    \***************************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppComponentsContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactUsComponent = /*#__PURE__*/function () {
      function ContactUsComponent() {
        _classCallCheck(this, ContactUsComponent);
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-us/contact-us.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-us.component.scss */
      "./src/app/components/contact-us/contact-us.component.scss"))["default"]]
    })], ContactUsComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/footer/footer.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer-container {\n  color: #dbd1d1;\n  background-color: #083d33;\n  background-position: 3% 41px;\n  background-size: 226px 249px;\n  background-repeat: no-repeat;\n  padding: 0 15%;\n}\n.footer-container .light-green {\n  color: #1bb14c;\n}\n.footer-container .custom-h-1 {\n  font-size: 33px;\n  font-weight: 200;\n  text-align: center;\n}\n.footer-container .footer-inner-container {\n  width: 100%;\n  max-width: 570px;\n  margin: 0 auto;\n  padding: 57px 0;\n}\n.footer-container .f-main {\n  border-top: solid 1px #1bb14c;\n  border-bottom: solid 1px #1bb14c;\n  margin: 20px 0;\n  padding: 15px 0;\n  display: flex;\n  justify-content: space-between;\n}\n.footer-container .f-main a {\n  font-size: 0.8rem;\n  color: #dbd1d1;\n  text-decoration: none;\n}\n.footer-container .f-base {\n  display: flex;\n  justify-content: space-between;\n  max-width: 400px;\n  margin: 0 auto;\n  width: 100%;\n}\n@media (max-width: 480px) {\n  .footer-container .f-base {\n    max-width: 250px;\n  }\n}\n@media (max-width: 780px) {\n  .footer-container {\n    padding: 15px 10px 250px;\n    background-position: 44% 269px;\n  }\n  .footer-container .custom-h-1 {\n    font-size: 19px;\n  }\n  .footer-container .std-footer-text {\n    width: 100%;\n    display: inline-block;\n    font-size: 19px;\n  }\n  .footer-container .footer-inner-container {\n    padding: 0;\n  }\n  .footer-container .f-main {\n    flex-direction: column;\n    align-items: center;\n  }\n  .footer-container .f-base {\n    max-width: 250px;\n  }\n}\n@media (min-width: 780px) and (max-width: 1000px) {\n  .footer-container {\n    background-position: -1% 41px;\n  }\n  .footer-container .footer-inner-container {\n    max-width: 432px;\n  }\n  .footer-container .custom-h-1 {\n    font-size: 25px;\n  }\n  .footer-container .f-base {\n    max-width: 300px;\n  }\n}\n@media (min-width: 1000px) and (max-width: 1300px) {\n  .footer-container {\n    background-position: 1% 41px;\n  }\n  .footer-container .footer-inner-container {\n    max-width: 580px;\n  }\n  .footer-container .custom-h-1 {\n    font-size: 33px;\n  }\n  .footer-container .f-base {\n    max-width: 435px;\n  }\n}\n@media (min-width: 1300px) {\n  .footer-container {\n    background-position: 1% 8px;\n    background-size: 269px 332px;\n  }\n  .footer-container .footer-inner-container {\n    max-width: 770px;\n  }\n  .footer-container .custom-h-1 {\n    font-size: 43px;\n  }\n  .footer-container .f-base {\n    max-width: 560px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXG90aGVyLXByb2plY3RzXFxha2FubS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL0Q6XFxvdGhlci1wcm9qZWN0c1xcYWthbm0vc3JjXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGNDRGdCO0VERWhCLHlCQ0hVO0VESVYsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBRUhKO0FGS0k7RUFDSSxjQ1hPO0FDUWY7QUZLSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FFSFI7QUZLSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FFSFI7QUZNSTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBRUpSO0FGS1E7RUFDSSxpQkFBQTtFQUNBLGNDaENRO0VEaUNSLHFCQUFBO0FFSFo7QUZNSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUVKUjtBRlNBO0VBRVE7SUFDSSxnQkFBQTtFRVBWO0FBQ0Y7QUZZQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSw4QkFBQTtFRVZOO0VGV007SUFDSSxlQUFBO0VFVFY7RUZXTTtJQUNJLFdBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7RUVUVjtFRldNO0lBQ0ksVUFBQTtFRVRWO0VGV007SUFDSSxzQkFBQTtJQUNBLG1CQUFBO0VFVFY7RUZXTTtJQUNJLGdCQUFBO0VFVFY7QUFDRjtBRmNBO0VBQ0k7SUFDSSw2QkFBQTtFRVpOO0VGYU07SUFDSSxnQkFBQTtFRVhWO0VGYU07SUFDSSxlQUFBO0VFWFY7RUZhTTtJQUNJLGdCQUFBO0VFWFY7QUFDRjtBRmdCQTtFQUNJO0lBRUksNEJBQUE7RUVmTjtFRmdCTTtJQUNJLGdCQUFBO0VFZFY7RUZnQk07SUFDSSxlQUFBO0VFZFY7RUZnQk07SUFDSSxnQkFBQTtFRWRWO0FBQ0Y7QUZtQkE7RUFDSTtJQUNJLDJCQUFBO0lBQ0EsNEJBQUE7RUVqQk47RUZrQk07SUFDSSxnQkFBQTtFRWhCVjtFRmtCTTtJQUNJLGVBQUE7RUVoQlY7RUZrQk07SUFDSSxnQkFBQTtFRWhCVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHRoZSB2YXJpYWJsZXMgZmlsZSwgd2hpY2ggbWFrZXMgc3VyZSB0aGF0IGFueSBjb2xvciBjaGFuZ2VzIFxyXG4vLyBvZiB0aGUgZnV0dXJlLCBzaG91bGQgYmUgZG9uZSBpbiBqdXN0IG9uZSBwYWNlLlxyXG5AaW1wb3J0ICcuLi8uLi8uLi9fdmFyaWFibGVzLnNjc3MnOyBcclxuXHJcbi5mb290ZXItY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiAkY29udHJhc3RUZXh0Q29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGREYXJrR3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzJSA0MXB4OyAgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIyNnB4IDI0OXB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmc6IDAgMTUlO1xyXG5cclxuICAgIC5saWdodC1ncmVlbiB7XHJcbiAgICAgICAgY29sb3I6ICR0ZExpZ2h0R3JlZW47XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWgtMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1pbm5lci1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNTdweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mLW1haW4ge1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkdGRMaWdodEdyZWVuO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkdGRMaWdodEdyZWVuO1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhIHsgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtOyBcclxuICAgICAgICAgICAgY29sb3I6ICRjb250cmFzdFRleHRDb2xvcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mLWJhc2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5IHJlcXVpcmVkIGJ5IHRoZSB2ZXJ5IHNtYWxsIHNjcmVlbnMgXHJcbkBtZWRpYShtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmYtYmFzZSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeSByZXF1aXJlZCBieSB0aGUgc21hbGwgc2NyZWVucyBcclxuQG1lZGlhKG1heC13aWR0aDogNzgwcHgpIHtcclxuICAgIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHggMjUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDQlIDI2OXB4O1xyXG4gICAgICAgIC5jdXN0b20taC0xIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RkLWZvb3Rlci10ZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mLW1haW4ge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZi1iYXNlIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5IHJlcXVpcmVkIGJ5IHRoZSBtZWRpdW0gc2l6ZSBzY3JlZW5zIFxyXG5AbWVkaWEobWluLXdpZHRoOiA3ODBweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmZvb3Rlci1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xJSA0MXB4OyBcclxuICAgICAgICAuZm9vdGVyLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXN0b20taC0xIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZi1iYXNlIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5IHJlcXVpcmVkIGJ5IHRoZSB2ZXJ5IGxhcmdlIFxyXG5AbWVkaWEobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0JSA0MXB4OyBcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxJSA0MXB4O1xyXG4gICAgICAgIC5mb290ZXItaW5uZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1ODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN1c3RvbS1oLTEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mLWJhc2Uge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQzNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gTWVkaWEgcXVlcnkgcmVxdWlyZWQgYnkgdGhlIHZlcnkgbGFyZ2Ugc2NyZWVuc1xyXG5AbWVkaWEobWluLXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxJSA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNjlweCAzMzJweDtcclxuICAgICAgICAuZm9vdGVyLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXN0b20taC0xIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0M3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZi1iYXNlIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1NjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuLy8gJHRkRGFya0dyZWVuMTogIzEyNDIyYjtcclxuJHRkTGlnaHRHcmVlbjogIzFiYjE0YztcclxuJHRkRGFya0dyZWVuOiAjMDgzZDMzO1xyXG4kY29udHJhc3RUZXh0Q29sb3I6ICNkYmQxZDE7XHJcbiRkaXNwbGF5V2luZG93QmFja2dyb3VuZDogI2VmZWZmNDtcclxuJHN0ZFRleHRDb2xvcjogcmdiKDM2LCAzMywgMzMpO1xyXG4kaFRpdGxlQ29sb3I6IGdyYXk7IiwiLmZvb3Rlci1jb250YWluZXIge1xuICBjb2xvcjogI2RiZDFkMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4M2QzMztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMyUgNDFweDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMjZweCAyNDlweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMCAxNSU7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAubGlnaHQtZ3JlZW4ge1xuICBjb2xvcjogIzFiYjE0Yztcbn1cbi5mb290ZXItY29udGFpbmVyIC5jdXN0b20taC0xIHtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LXdlaWdodDogMjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyLWlubmVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDU3MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNTdweCAwO1xufVxuLmZvb3Rlci1jb250YWluZXIgLmYtbWFpbiB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjMWJiMTRjO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzFiYjE0YztcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZvb3Rlci1jb250YWluZXIgLmYtbWFpbiBhIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjZGJkMWQxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZi1iYXNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZm9vdGVyLWNvbnRhaW5lciAuZi1iYXNlIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMTBweCAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NCUgMjY5cHg7XG4gIH1cbiAgLmZvb3Rlci1jb250YWluZXIgLmN1c3RvbS1oLTEge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuICAuZm9vdGVyLWNvbnRhaW5lciAuc3RkLWZvb3Rlci10ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG4gIC5mb290ZXItY29udGFpbmVyIC5mb290ZXItaW5uZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5mb290ZXItY29udGFpbmVyIC5mLW1haW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuZm9vdGVyLWNvbnRhaW5lciAuZi1iYXNlIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xJSA0MXB4O1xuICB9XG4gIC5mb290ZXItY29udGFpbmVyIC5mb290ZXItaW5uZXItY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDQzMnB4O1xuICB9XG4gIC5mb290ZXItY29udGFpbmVyIC5jdXN0b20taC0xIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgLmZvb3Rlci1jb250YWluZXIgLmYtYmFzZSB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAuZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMSUgNDFweDtcbiAgfVxuICAuZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyLWlubmVyLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1ODBweDtcbiAgfVxuICAuZm9vdGVyLWNvbnRhaW5lciAuY3VzdG9tLWgtMSB7XG4gICAgZm9udC1zaXplOiAzM3B4O1xuICB9XG4gIC5mb290ZXItY29udGFpbmVyIC5mLWJhc2Uge1xuICAgIG1heC13aWR0aDogNDM1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDElIDhweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI2OXB4IDMzMnB4O1xuICB9XG4gIC5mb290ZXItY29udGFpbmVyIC5mb290ZXItaW5uZXItY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDc3MHB4O1xuICB9XG4gIC5mb290ZXItY29udGFpbmVyIC5jdXN0b20taC0xIHtcbiAgICBmb250LXNpemU6IDQzcHg7XG4gIH1cbiAgLmZvb3Rlci1jb250YWluZXIgLmYtYmFzZSB7XG4gICAgbWF4LXdpZHRoOiA1NjBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/home/home.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".design-container .std-text {\n  color: #242121;\n}\n.design-container .h-extra {\n  font-weight: 500;\n}\n.controls-container .personal-input-set-1, .controls-container .personal-input-set-2 {\n  display: flex;\n}\n.controls-container .form-item-container {\n  margin: 10px;\n}\n.btn-container {\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-container button {\n  margin: 4px 7px;\n}\n.side-button {\n  width: 100%;\n  white-space: normal;\n  /* Enable word wrap in button element */\n  word-wrap: break-word;\n  /* Enable word wrap in button element */\n}\n.text-content-p {\n  padding: 0 5px;\n}\n@media (max-width: 780px) {\n  .design-container .main {\n    width: 100%;\n    padding: 10px;\n  }\n  .design-container .extra-title {\n    width: 100%;\n  }\n  .design-container .extra-xname {\n    width: 100%;\n  }\n  .design-container .extra-initial {\n    width: 100%;\n  }\n  .design-container .extra-email {\n    width: 100%;\n  }\n  .design-container .extra-dob {\n    width: 100%;\n  }\n  .design-container .extra-sin {\n    width: 100%;\n  }\n  .design-container .controls-container .personal-input-set-1, .design-container .controls-container .personal-input-set-2 {\n    justify-content: space-between;\n    flex-direction: column;\n  }\n}\n@media (min-width: 780px) {\n  .design-container .main {\n    width: 75%;\n    padding: 20px;\n  }\n  .design-container .main .library-item {\n    margin: 5px 0;\n    cursor: pointer;\n  }\n  .design-container .extra-title {\n    width: 62px;\n  }\n  .design-container .extra-xname {\n    width: 130px;\n  }\n  .design-container .extra-initial {\n    width: 100px;\n  }\n  .design-container .extra-email {\n    width: 180px;\n  }\n  .design-container .extra-dob {\n    width: 130px;\n  }\n  .design-container .extra-sin {\n    width: 190px;\n  }\n  .design-container .controls-container .personal-input-set-1, .design-container .controls-container .personal-input-set-2 {\n    justify-content: space-between;\n    flex-direction: row;\n  }\n}\n.result {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxvdGhlci1wcm9qZWN0c1xcYWthbm0vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0ksY0FBQTtBQ0pSO0FETUk7RUFDSSxnQkFBQTtBQ0pSO0FEVUk7RUFDSSxhQUFBO0FDUFI7QURTSTtFQUNJLFlBQUE7QUNQUjtBRFdBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FDUko7QURTSTtFQUNJLGVBQUE7QUNQUjtBRFdBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQXFCLHVDQUFBO0VBQ3JCLHFCQUFBO0VBQXVCLHVDQUFBO0FDTjNCO0FEUUE7RUFDSSxjQUFBO0FDTEo7QURRQTtFQUVRO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUNOVjtFRFNNO0lBQWMsV0FBQTtFQ05wQjtFRE9NO0lBQWUsV0FBQTtFQ0pyQjtFREtNO0lBQWlCLFdBQUE7RUNGdkI7RURHTTtJQUFlLFdBQUE7RUNBckI7RURDTTtJQUFhLFdBQUE7RUNFbkI7RURETTtJQUFhLFdBQUE7RUNJbkI7RUREVTtJQUNJLDhCQUFBO0lBQ0Esc0JBQUE7RUNHZDtBQUNGO0FERUE7RUFFUTtJQUNJLFVBQUE7SUFDQSxhQUFBO0VDRFY7RURFVTtJQUNJLGFBQUE7SUFDQSxlQUFBO0VDQWQ7RURHTTtJQUFjLFdBQUE7RUNBcEI7RURDTTtJQUFlLFlBQUE7RUNFckI7RURETTtJQUFpQixZQUFBO0VDSXZCO0VESE07SUFBZSxZQUFBO0VDTXJCO0VETE07SUFBYSxZQUFBO0VDUW5CO0VEUE07SUFBYSxZQUFBO0VDVW5CO0VEUFU7SUFDSSw4QkFBQTtJQUNBLG1CQUFBO0VDU2Q7QUFDRjtBREhBO0VBQ0ksV0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIHZhcmlhYmxlIGZpbGVcclxuQGltcG9ydCBcIi4uLy4uLy4uL192YXJpYWJsZXNcIjtcclxuXHJcbi8vIFRoZSBkZXNpZ24gY29udGFpbmVyIGhvbGRzIHRoZSBtYWluIGRlc2lnbiwgc3VjaCB0aGF0IGl0IGNhbiBiZSBjb3BpZWQgYW5kIHJlLXVzZWQuIFxyXG4uZGVzaWduLWNvbnRhaW5lciB7XHJcbiAgICAuc3RkLXRleHQge1xyXG4gICAgICAgIGNvbG9yOiAkc3RkVGV4dENvbG9yO1xyXG4gICAgfVxyXG4gICAgLmgtZXh0cmEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFRoaXMgY29udGFpbmVyIGhvbGRzIHRoZSBpbmRpdmlkdWFsIGNvbnRyb2xzXHJcbi5jb250cm9scy1jb250YWluZXIge1xyXG4gICAgLnBlcnNvbmFsLWlucHV0LXNldC0xLCAucGVyc29uYWwtaW5wdXQtc2V0LTIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiA0cHggN3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2lkZS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiBFbmFibGUgd29yZCB3cmFwIGluIGJ1dHRvbiBlbGVtZW50ICovXHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC8qIEVuYWJsZSB3b3JkIHdyYXAgaW4gYnV0dG9uIGVsZW1lbnQgKi9cclxufVxyXG4udGV4dC1jb250ZW50LXAge1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc4MHB4KSB7XHJcbiAgICAuZGVzaWduLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5leHRyYS10aXRsZSB7d2lkdGg6IDEwMCU7fVxyXG4gICAgICAgIC5leHRyYS14bmFtZSB7IHdpZHRoOiAxMDAlO31cclxuICAgICAgICAuZXh0cmEtaW5pdGlhbCB7IHdpZHRoOiAxMDAlO31cclxuICAgICAgICAuZXh0cmEtZW1haWwgeyB3aWR0aDogMTAwJTt9XHJcbiAgICAgICAgLmV4dHJhLWRvYiB7IHdpZHRoOiAxMDAlO31cclxuICAgICAgICAuZXh0cmEtc2luIHsgd2lkdGg6IDEwMCU7fVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jb250cm9scy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAucGVyc29uYWwtaW5wdXQtc2V0LTEsIC5wZXJzb25hbC1pbnB1dC1zZXQtMiB7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3ODBweCkge1xyXG4gICAgLmRlc2lnbi1jb250YWluZXIge1xyXG4gICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgLmxpYnJhcnktaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5leHRyYS10aXRsZSB7d2lkdGg6IDYycHg7fVxyXG4gICAgICAgIC5leHRyYS14bmFtZSB7IHdpZHRoOiAxMzBweDt9XHJcbiAgICAgICAgLmV4dHJhLWluaXRpYWwgeyB3aWR0aDogMTAwcHg7fVxyXG4gICAgICAgIC5leHRyYS1lbWFpbCB7IHdpZHRoOiAxODBweDt9XHJcbiAgICAgICAgLmV4dHJhLWRvYiB7IHdpZHRoOiAxMzBweDt9XHJcbiAgICAgICAgLmV4dHJhLXNpbiB7IHdpZHRoOiAxOTBweDt9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRyb2xzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIC5wZXJzb25hbC1pbnB1dC1zZXQtMSwgLnBlcnNvbmFsLWlucHV0LXNldC0yIHtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1ha2UgdGhlIGZvcm0gZGF0YSB0byBiZSBzdWJtaXR0ZWQgZGlzcGxheWVkIGluIGJsdWUgY29udHJhc3RcclxuLnJlc3VsdCB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufSIsIi5kZXNpZ24tY29udGFpbmVyIC5zdGQtdGV4dCB7XG4gIGNvbG9yOiAjMjQyMTIxO1xufVxuLmRlc2lnbi1jb250YWluZXIgLmgtZXh0cmEge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29udHJvbHMtY29udGFpbmVyIC5wZXJzb25hbC1pbnB1dC1zZXQtMSwgLmNvbnRyb2xzLWNvbnRhaW5lciAucGVyc29uYWwtaW5wdXQtc2V0LTIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRyb2xzLWNvbnRhaW5lciAuZm9ybS1pdGVtLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmJ0bi1jb250YWluZXIgYnV0dG9uIHtcbiAgbWFyZ2luOiA0cHggN3B4O1xufVxuXG4uc2lkZS1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgLyogRW5hYmxlIHdvcmQgd3JhcCBpbiBidXR0b24gZWxlbWVudCAqL1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC8qIEVuYWJsZSB3b3JkIHdyYXAgaW4gYnV0dG9uIGVsZW1lbnQgKi9cbn1cblxuLnRleHQtY29udGVudC1wIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCkge1xuICAuZGVzaWduLWNvbnRhaW5lciAubWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuZGVzaWduLWNvbnRhaW5lciAuZXh0cmEtdGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5kZXNpZ24tY29udGFpbmVyIC5leHRyYS14bmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRlc2lnbi1jb250YWluZXIgLmV4dHJhLWluaXRpYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5kZXNpZ24tY29udGFpbmVyIC5leHRyYS1lbWFpbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRlc2lnbi1jb250YWluZXIgLmV4dHJhLWRvYiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRlc2lnbi1jb250YWluZXIgLmV4dHJhLXNpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRlc2lnbi1jb250YWluZXIgLmNvbnRyb2xzLWNvbnRhaW5lciAucGVyc29uYWwtaW5wdXQtc2V0LTEsIC5kZXNpZ24tY29udGFpbmVyIC5jb250cm9scy1jb250YWluZXIgLnBlcnNvbmFsLWlucHV0LXNldC0yIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc4MHB4KSB7XG4gIC5kZXNpZ24tY29udGFpbmVyIC5tYWluIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLmRlc2lnbi1jb250YWluZXIgLm1haW4gLmxpYnJhcnktaXRlbSB7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmRlc2lnbi1jb250YWluZXIgLmV4dHJhLXRpdGxlIHtcbiAgICB3aWR0aDogNjJweDtcbiAgfVxuICAuZGVzaWduLWNvbnRhaW5lciAuZXh0cmEteG5hbWUge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgfVxuICAuZGVzaWduLWNvbnRhaW5lciAuZXh0cmEtaW5pdGlhbCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5kZXNpZ24tY29udGFpbmVyIC5leHRyYS1lbWFpbCB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIC5kZXNpZ24tY29udGFpbmVyIC5leHRyYS1kb2Ige1xuICAgIHdpZHRoOiAxMzBweDtcbiAgfVxuICAuZGVzaWduLWNvbnRhaW5lciAuZXh0cmEtc2luIHtcbiAgICB3aWR0aDogMTkwcHg7XG4gIH1cbiAgLmRlc2lnbi1jb250YWluZXIgLmNvbnRyb2xzLWNvbnRhaW5lciAucGVyc29uYWwtaW5wdXQtc2V0LTEsIC5kZXNpZ24tY29udGFpbmVyIC5jb250cm9scy1jb250YWluZXIgLnBlcnNvbmFsLWlucHV0LXNldC0yIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuLnJlc3VsdCB7XG4gIGNvbG9yOiBibHVlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_endpoints_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/endpoints.service */
    "./src/app/services/endpoints.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      // Inject the MatDialog reference that would be used to display a modal
      function HomeComponent(endpointsService, router) {
        _classCallCheck(this, HomeComponent);

        this.endpointsService = endpointsService;
        this.router = router;
      } // Setting up the form validation


      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.endpointsService.getLibraries().subscribe(function (libraries) {
            _this.libraries = libraries;
          });
        }
      }, {
        key: "getSelectedLibrary",
        value: function getSelectedLibrary(libraryId) {
          var _this2 = this;

          var id = libraryId.toString();
          this.endpointsService.getALibrary(id).subscribe(function (library) {
            _this2.currentSelectedLibrary = library;
            console.log(library);

            _this2.router.navigate(['/libraries', id], {
              state: {
                data: library
              }
            });
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_endpoints_service__WEBPACK_IMPORTED_MODULE_2__["EndpointsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/components/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/library/library.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/library/library.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLibraryLibraryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-display-container {\n  position: relative;\n}\n\n.main .library-item {\n  margin: 5px 0;\n}\n\n.main .avail {\n  cursor: pointer;\n}\n\n.main .availbleBooksBtn {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\n\n.detail-item-hightlight {\n  color: blue;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5L0Q6XFxvdGhlci1wcm9qZWN0c1xcYWthbm0vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxpYnJhcnlcXGxpYnJhcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGlicmFyeS9saWJyYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjs7QURJRTtFQUNFLGFBQUE7QUNESjs7QURHRTtFQUNJLGVBQUE7QUNETjs7QURHRTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNETjs7QURLQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZ2UtZGlzcGxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgLmxpYnJhcnktaXRlbSB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gIH1cclxuICAuYXZhaWwge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5hdmFpbGJsZUJvb2tzQnRuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTVweDtcclxuICAgICAgdG9wOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRldGFpbC1pdGVtLWhpZ2h0bGlnaHQge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59IiwiLnBhZ2UtZGlzcGxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYWluIC5saWJyYXJ5LWl0ZW0ge1xuICBtYXJnaW46IDVweCAwO1xufVxuLm1haW4gLmF2YWlsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1haW4gLmF2YWlsYmxlQm9va3NCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG59XG5cbi5kZXRhaWwtaXRlbS1oaWdodGxpZ2h0IHtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/library/library.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/library/library.component.ts ***!
    \*********************************************************/

  /*! exports provided: LibraryComponent */

  /***/
  function srcAppComponentsLibraryLibraryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibraryComponent", function () {
      return LibraryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_endpoints_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/endpoints.service */
    "./src/app/services/endpoints.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var LibraryComponent = /*#__PURE__*/function () {
      function LibraryComponent(endpointsService, route, dialog) {
        _classCallCheck(this, LibraryComponent);

        this.endpointsService = endpointsService;
        this.route = route;
        this.dialog = dialog;
        this.isGetAvailableBooks = false;
      }

      _createClass(LibraryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var routeP = this.route.snapshot.params.libraryId;
          this.library = history.state.data;
          this.endpointsService.subsricption.subscribe(function (lib) {
            _this3.library = lib;
          });
          this.endpointsService.getALibrary(routeP).subscribe(function (library) {
            _this3.library = library; // this.isGetAvailableBooks = false;
          });
        }
      }, {
        key: "getAvailableBooks",
        value: function getAvailableBooks(id) {
          var _this4 = this;

          this.isGetAvailableBooks = true;
          this.endpointsService.getAvailableBooks(id).subscribe(function (bookObjects) {
            _this4.availableBooks = bookObjects;
          });
        }
      }, {
        key: "displaySelectedBookDetails",
        value: function displaySelectedBookDetails(templateRef, bookObj) {
          this.currentSelectedItem = bookObj;
          this.dialog.open(templateRef);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.endpointsService.subsricption.unsubscribe();
        }
      }]);

      return LibraryComponent;
    }();

    LibraryComponent.ctorParameters = function () {
      return [{
        type: src_app_services_endpoints_service__WEBPACK_IMPORTED_MODULE_2__["EndpointsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-library',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./library.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library/library.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./library.component.scss */
      "./src/app/components/library/library.component.scss"))["default"]]
    })], LibraryComponent);
    /***/
  },

  /***/
  "./src/app/components/nav-bar/nav-bar.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/nav-bar/nav-bar.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavBarNavBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-bar {\n  background-color: #083d33 !important;\n  color: white;\n  overflow: hidden;\n}\n.nav-bar .company-label {\n  margin: 4px 0 4px 5%;\n  cursor: pointer;\n}\n.nav-bar .logo-container, .nav-bar .company-label, .nav-bar .middle-group {\n  float: left;\n}\n.nav-bar .end-group {\n  float: right;\n  display: flex;\n  justify-content: space-between;\n  width: 28%;\n}\n.search-container {\n  position: absolute;\n  top: 55px;\n  z-index: 10;\n  padding: 5px 63px 5px 10px;\n  background-color: white;\n  border: solid 3px #1b5336;\n  -webkit-transition-property: right opacity;\n  -webkit-transition-duration: 0.4s;\n  -webkit-transition-timing-function: ease;\n  transition-property: right opacity;\n  transition-duration: 0.4s;\n  transition-timing-function: ease;\n}\n.search-container .search-field {\n  width: 200px;\n}\n.showSearchBox {\n  right: -3px;\n  opacity: 1;\n  display: block;\n}\n.hideSearchBox {\n  right: -550px;\n  opacity: 0;\n  display: none;\n}\n@media (max-width: 780px) {\n  .nav-bar {\n    padding: 10px 50px;\n  }\n  .nav-bar .menu-icon {\n    font-size: 41px;\n    position: absolute;\n    left: 3px;\n    top: 6px;\n  }\n\n  .end-group {\n    width: 18px;\n    justify-content: flex-end;\n  }\n  .end-group .icon-ref {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n  }\n\n  .middle-group {\n    display: none;\n  }\n}\n@media (min-width: 780px) {\n  .nav-bar {\n    padding: 10px 72px;\n  }\n  .nav-bar .menu-icon {\n    display: none;\n  }\n\n  .end-group .icon-ref {\n    position: relative;\n    /* constrains the icons */\n    margin: 0 5px;\n  }\n  .end-group .icon-ref .item-icon, .end-group .icon-ref .search-icon {\n    cursor: pointer;\n  }\n  .end-group .search-icon {\n    margin: 0 10px;\n  }\n\n  .middle-group {\n    margin-left: 2%;\n    display: flex;\n    margin-top: 9px;\n    width: 37%;\n    justify-content: space-evenly;\n  }\n}\n.library-name {\n  text-align: left;\n  margin-left: -30px !important;\n}\n@media (min-width: 780px) and (max-width: 1200px) {\n  .end-group .icon-ref .item-icon {\n    top: 21px;\n    right: 10px;\n    transform: translate(-21px, 21px);\n  }\n}\n@media (min-width: 1200px) {\n  .end-group .icon-ref .item-icon {\n    top: 4px;\n    right: -30px;\n    transform: translate(5px, 4px);\n  }\n}\n.mobile-menu-contents {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  height: 100%;\n  width: 190px;\n  padding: 40px 20px;\n  position: fixed;\n  top: 55px;\n  z-index: 23;\n  -webkit-transition-property: left opacity;\n  -webkit-transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease;\n  transition-property: left opacity;\n  transition-duration: 0.3s;\n  transition-timing-function: ease;\n}\n.mobile-menu-contents .mobile-menu-item, .mobile-menu-contents .dropdown-icon {\n  color: white;\n  padding: 0;\n}\n.mobile-menu-contents .mobile-menu-item .menu-icon, .mobile-menu-contents .dropdown-icon .menu-icon {\n  color: white;\n  transform: translate(0px, 2px);\n}\n.dark-content-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0.6;\n  background-color: #000000;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n}\n.show-mobile-menu {\n  left: 0;\n  opacity: 1;\n}\n.hide-mobile-menu {\n  left: -1000px;\n  opacity: 0;\n}\n.turn-on-overlay {\n  display: block;\n}\n.turn-off-overlay {\n  display: none;\n}\n.mobile-nav-links-container {\n  margin: 15px 0;\n  color: white !important;\n  cursor: pointer;\n}\n.prov-links-container {\n  border: solid 1px gray;\n  position: absolute !important;\n  top: 22px;\n  left: 0;\n  z-index: 55;\n  padding: 5px;\n}\n.prov-links-container .prov-link {\n  list-style-type: none;\n  padding: 3px 5px;\n  width: 130px;\n  cursor: pointer;\n  border-top: solid 1px #b6e7c2;\n  background-color: #62b474;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL0Q6XFxvdGhlci1wcm9qZWN0c1xcYWthbm0vc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdi1iYXJcXG5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNGRjtBRElFO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FDRko7QURPRTtFQUNFLFdBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUNOSjtBRFdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ1JKO0FEU0k7RUFDSSxZQUFBO0FDUFI7QURVQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ1BKO0FEU0E7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNOSjtBRFVBO0VBQ0k7SUFDSSxrQkFBQTtFQ1BOO0VEUU07SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtFQ05WOztFRFVFO0lBQ0ksV0FBQTtJQUNBLHlCQUFBO0VDUE47RURRTTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUNOVjs7RURTRTtJQUNJLGFBQUE7RUNOTjtBQUNGO0FEU0E7RUFDSTtJQUNJLGtCQUFBO0VDUE47RURRTTtJQUNJLGFBQUE7RUNOVjs7RURVTTtJQUNJLGtCQUFBO0lBQW9CLHlCQUFBO0lBQ3BCLGFBQUE7RUNOVjtFRE9VO0lBQ0ksZUFBQTtFQ0xkO0VEUU07SUFDSSxjQUFBO0VDTlY7O0VEVUU7SUFDSSxlQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsNkJBQUE7RUNQTjtBQUNGO0FEU0E7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0FDUEo7QURVQTtFQUdZO0lBQ0ksU0FBQTtJQUNBLFdBQUE7SUFDQSxpQ0FBQTtFQ1RkO0FBQ0Y7QURjQTtFQUdZO0lBQ0ksUUFBQTtJQUNBLFlBQUE7SUFDQSw4QkFBQTtFQ2RkO0FBQ0Y7QURvQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFTQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUMzQko7QURjSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDWlI7QURhUTtFQUNJLFlBQUE7RUFDQSw4QkFBQTtBQ1haO0FEdUJBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNwQko7QUR1QkE7RUFDSSxPQUFBO0VBQ0EsVUFBQTtBQ3BCSjtBRHVCQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0FDcEJKO0FEdUJBO0VBQ0ksY0FBQTtBQ3BCSjtBRHVCQTtFQUNJLGFBQUE7QUNwQko7QUR1QkE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDcEJKO0FEdUJBO0VBQ0ksc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNwQko7QURxQkk7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDbkJSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9fdmFyaWFibGVzLnNjc3MnOyAvLyBUaGUgdmFyaWFibGVzIHN0eWxlc1xyXG5cclxuXHJcbi5uYXYtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGREYXJrR3JlZW4gIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLmNvbXBhbnktbGFiZWwge1xyXG4gICAgbWFyZ2luOiA0cHggMCA0cHggNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5sb2dvLWNvbnRhaW5lciwgLmNvbXBhbnktbGFiZWwsIC5taWRkbGUtZ3JvdXAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuZW5kLWdyb3VwIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMjglO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcGFkZGluZzogNXB4IDYzcHggNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogc29saWQgM3B4ICMxYjUzMzY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0IG9wYWNpdHk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQgb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIC5zZWFyY2gtZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxufVxyXG4uc2hvd1NlYXJjaEJveCB7XHJcbiAgICByaWdodDogLTNweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaGlkZVNlYXJjaEJveCB7XHJcbiAgICByaWdodDogLTU1MHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3ODBweCkge1xyXG4gICAgLm5hdi1iYXIgeyBcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XHJcbiAgICAgICAgLm1lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDFweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5lbmQtZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgLmljb24tcmVmIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5taWRkbGUtZ3JvdXAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDc4MHB4KSB7XHJcbiAgICAubmF2LWJhciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA3MnB4O1xyXG4gICAgICAgIC5tZW51LWljb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5lbmQtZ3JvdXAge1xyXG4gICAgICAgIC5pY29uLXJlZiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogY29uc3RyYWlucyB0aGUgaWNvbnMgKi9cclxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgLml0ZW0taWNvbiwgLnNlYXJjaC1pY29uIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1pZGRsZS1ncm91cCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgICAgIHdpZHRoOiAzNyU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB9XHJcbn1cclxuLmxpYnJhcnktbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDc4MHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuZW5kLWdyb3VwIHtcclxuICAgICAgICAuaWNvbi1yZWYge1xyXG4gICAgICAgICAgICAuaXRlbS1pY29uIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMjFweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIxcHgsIDIxcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5lbmQtZ3JvdXAge1xyXG4gICAgICAgIC5pY29uLXJlZiB7XHJcbiAgICAgICAgICAgIC5pdGVtLWljb24ge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTMwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDRweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1lbnUgdG8gYmUgdXNlZCBieSB0aGUgbW9iaWxlIGRldmljZXMuXHJcbi5tb2JpbGUtbWVudS1jb250ZW50c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICBcclxuICAgIHotaW5kZXg6IDIzOyAgICBcclxuICAgIC5tb2JpbGUtbWVudS1pdGVtLCAuZHJvcGRvd24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLm1lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAycHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCBvcGFjaXR5O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxufVxyXG5cclxuXHJcbi5kYXJrLWNvbnRlbnQtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4uc2hvdy1tb2JpbGUtbWVudSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmhpZGUtbW9iaWxlLW1lbnUge1xyXG4gICAgbGVmdDogLTEwMDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi50dXJuLW9uLW92ZXJsYXkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50dXJuLW9mZi1vdmVybGF5IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2JpbGUtbmF2LWxpbmtzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvdi1saW5rcy1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAyMnB4OztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA1NTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIC5wcm92LWxpbmsge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgXHJcbiAgICAgICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2IoMTgyLCAyMzEsIDE5NCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk4LCAxODAsIDExNik7XHJcbiAgICB9XHJcbn1cclxuIiwiLm5hdi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgzZDMzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5uYXYtYmFyIC5jb21wYW55LWxhYmVsIHtcbiAgbWFyZ2luOiA0cHggMCA0cHggNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXYtYmFyIC5sb2dvLWNvbnRhaW5lciwgLm5hdi1iYXIgLmNvbXBhbnktbGFiZWwsIC5uYXYtYmFyIC5taWRkbGUtZ3JvdXAge1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXYtYmFyIC5lbmQtZ3JvdXAge1xuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDI4JTtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTVweDtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmc6IDVweCA2M3B4IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzFiNTMzNjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiByaWdodCBvcGFjaXR5O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0IG9wYWNpdHk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xufVxuLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1maWVsZCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNob3dTZWFyY2hCb3gge1xuICByaWdodDogLTNweDtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oaWRlU2VhcmNoQm94IHtcbiAgcmlnaHQ6IC01NTBweDtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5uYXYtYmFyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gIH1cbiAgLm5hdi1iYXIgLm1lbnUtaWNvbiB7XG4gICAgZm9udC1zaXplOiA0MXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzcHg7XG4gICAgdG9wOiA2cHg7XG4gIH1cblxuICAuZW5kLWdyb3VwIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5lbmQtZ3JvdXAgLmljb24tcmVmIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLm1pZGRsZS1ncm91cCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc4MHB4KSB7XG4gIC5uYXYtYmFyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDcycHg7XG4gIH1cbiAgLm5hdi1iYXIgLm1lbnUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5lbmQtZ3JvdXAgLmljb24tcmVmIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogY29uc3RyYWlucyB0aGUgaWNvbnMgKi9cbiAgICBtYXJnaW46IDAgNXB4O1xuICB9XG4gIC5lbmQtZ3JvdXAgLmljb24tcmVmIC5pdGVtLWljb24sIC5lbmQtZ3JvdXAgLmljb24tcmVmIC5zZWFyY2gtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5lbmQtZ3JvdXAgLnNlYXJjaC1pY29uIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuXG4gIC5taWRkbGUtZ3JvdXAge1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICB3aWR0aDogMzclO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG59XG4ubGlicmFyeS1uYW1lIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3ODBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuZW5kLWdyb3VwIC5pY29uLXJlZiAuaXRlbS1pY29uIHtcbiAgICB0b3A6IDIxcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIxcHgsIDIxcHgpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5lbmQtZ3JvdXAgLmljb24tcmVmIC5pdGVtLWljb24ge1xuICAgIHRvcDogNHB4O1xuICAgIHJpZ2h0OiAtMzBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDRweCk7XG4gIH1cbn1cbi5tb2JpbGUtbWVudS1jb250ZW50cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxOTBweDtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTVweDtcbiAgei1pbmRleDogMjM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCBvcGFjaXR5O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQgb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG59XG4ubW9iaWxlLW1lbnUtY29udGVudHMgLm1vYmlsZS1tZW51LWl0ZW0sIC5tb2JpbGUtbWVudS1jb250ZW50cyAuZHJvcGRvd24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbn1cbi5tb2JpbGUtbWVudS1jb250ZW50cyAubW9iaWxlLW1lbnUtaXRlbSAubWVudS1pY29uLCAubW9iaWxlLW1lbnUtY29udGVudHMgLmRyb3Bkb3duLWljb24gLm1lbnUtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAycHgpO1xufVxuXG4uZGFyay1jb250ZW50LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMC42O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLnNob3ctbW9iaWxlLW1lbnUge1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGlkZS1tb2JpbGUtbWVudSB7XG4gIGxlZnQ6IC0xMDAwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50dXJuLW9uLW92ZXJsYXkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnR1cm4tb2ZmLW92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9iaWxlLW5hdi1saW5rcy1jb250YWluZXIge1xuICBtYXJnaW46IDE1cHggMDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb3YtbGlua3MtY29udGFpbmVyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogMjJweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNTU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5wcm92LWxpbmtzLWNvbnRhaW5lciAucHJvdi1saW5rIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICB3aWR0aDogMTMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNiNmU3YzI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MmI0NzQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/nav-bar/nav-bar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
    \*********************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppComponentsNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_endpoints_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/endpoints.service */
    "./src/app/services/endpoints.service.ts");

    var NavBarComponent = /*#__PURE__*/function () {
      // Inject the router, so as to use it to trigger a new route to navigate the user to.
      function NavBarComponent(router, endpointsService) {
        _classCallCheck(this, NavBarComponent);

        this.router = router;
        this.endpointsService = endpointsService;
        this.mobileMenuOpen = false; // Keeps the mobile devices menu closed until triggered

        this.selectedLibrary = {
          name: 'Toronto Public Library'
        }; // Initializes the selected library

        this.searchValue = 'Clear'; // Place holder for the search term in the search box

        this.showSearchInput = false; // Initially hides the search input box until the search icon is clicked.
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.endpointsService.getLibraries().subscribe(function (libraries) {
            _this5.libraries = libraries;
          });
        }
      }, {
        key: "loadSelectedLibrary",
        value: function loadSelectedLibrary(libraryId) {
          var _this6 = this;

          var id = libraryId.toString();
          this.endpointsService.getALibrary(id).subscribe(function (library) {
            if (_this6.router.url.split('/')[1] === 'libraries') {
              _this6.endpointsService.setSelectedLibrary(library);

              _this6.router.navigate(['/libraries', id]);
            } else {
              _this6.router.navigate(['/libraries', id], {
                state: {
                  data: library
                }
              });
            }
          });
        } // When called toggles the mobile devices menu

      }, {
        key: "toggleMobileMenu",
        value: function toggleMobileMenu() {
          this.mobileMenuOpen = !this.mobileMenuOpen;
        } // when called, chooses the library, and then closes the mobile menu

      }, {
        key: "getSelectedLibrary",
        value: function getSelectedLibrary(library) {
          this.mobileMenuOpen = false;
          this.loadSelectedLibrary(library.libraryId);
          this.selectedLibrary = library;
        } // When called, toggles the search input box.

      }, {
        key: "toggleSearch",
        value: function toggleSearch() {
          this.showSearchInput = !this.showSearchInput;
        } // When called, clears the search input field.

      }, {
        key: "clearSearchTerm",
        value: function clearSearchTerm() {
          this.searchValue = '';
        } // Search toggle helper method

      }, {
        key: "closeAndToggleSearch",
        value: function closeAndToggleSearch() {
          this.mobileMenuOpen = false;
          this.toggleSearch();
        } // Route navigation helper method.

      }, {
        key: "navigatetoLink",
        value: function navigatetoLink(link) {
          this.mobileMenuOpen = false;
          this.router.navigate([link]);
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_endpoints_service__WEBPACK_IMPORTED_MODULE_3__["EndpointsService"]
      }];
    };

    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.scss */
      "./src/app/components/nav-bar/nav-bar.component.scss"))["default"]]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/components/page-not-found/page-not-found.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/page-not-found/page-not-found.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPageNotFoundPageNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/page-not-found/page-not-found.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppComponentsPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.scss */
      "./src/app/components/page-not-found/page-not-found.component.scss"))["default"]]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/components/schedules/schedules.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/schedules/schedules.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSchedulesSchedulesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2NoZWR1bGVzL3NjaGVkdWxlcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/schedules/schedules.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/schedules/schedules.component.ts ***!
    \*************************************************************/

  /*! exports provided: SchedulesComponent */

  /***/
  function srcAppComponentsSchedulesSchedulesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulesComponent", function () {
      return SchedulesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SchedulesComponent = /*#__PURE__*/function () {
      function SchedulesComponent() {
        _classCallCheck(this, SchedulesComponent);
      }

      _createClass(SchedulesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SchedulesComponent;
    }();

    SchedulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-schedules',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedules.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/schedules/schedules.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedules.component.scss */
      "./src/app/components/schedules/schedules.component.scss"))["default"]]
    })], SchedulesComponent);
    /***/
  },

  /***/
  "./src/app/services/endpoints.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/endpoints.service.ts ***!
    \***********************************************/

  /*! exports provided: EndpointsService */

  /***/
  function srcAppServicesEndpointsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EndpointsService", function () {
      return EndpointsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // import { Claim } from '../components/generic-modal/generic-modal.component';
    // export interface ClaimObject {
    //   id: string;
    //   claims: Claim[];
    // }


    var EndpointsService = /*#__PURE__*/function () {
      function EndpointsService(http) {
        _classCallCheck(this, EndpointsService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.userDataSubjectEvent = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.subsricption = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(EndpointsService, [{
        key: "getLibraries",
        value: function getLibraries() {
          return this.http.get(this.baseUrl + 'api/libraries');
        }
      }, {
        key: "getALibrary",
        value: function getALibrary(libraryId) {
          return this.http.get(this.baseUrl + 'api/libraries/' + libraryId);
        }
      }, {
        key: "getAvailableBooks",
        value: function getAvailableBooks(libraryId) {
          var id = libraryId.toString();
          return this.http.get(this.baseUrl + 'api/libraries/' + id + '/books/available');
        }
      }, {
        key: "getBooks",
        value: function getBooks(libraryId) {
          var id = libraryId.toString();
          return this.http.get(this.baseUrl + 'api/libraries/' + id + '/books');
        }
      }, {
        key: "setSelectedLibrary",
        value: function setSelectedLibrary(lib) {
          this.subsricption.next(lib);
        }
      }]);

      return EndpointsService;
    }();

    EndpointsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EndpointsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EndpointsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      apiUrl: 'https://aka-library-api.azurewebsites.net/'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\other-projects\akanm\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map