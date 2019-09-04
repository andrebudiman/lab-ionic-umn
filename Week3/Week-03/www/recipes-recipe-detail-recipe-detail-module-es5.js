(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipe-detail-recipe-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-detail/recipe-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-detail/recipe-detail.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/recipes\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"danger\" (click)=\"presentAlert()\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>{{ loadedRecipe.title }}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-img [src]=\"loadedRecipe.imageUrl\"></ion-img>\n      </ion-col> \n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item *ngFor=\"let i of loadedRecipe.ingredients\">{{ i }} </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: RecipeDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailPageModule", function() { return RecipeDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipe_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-detail.page */ "./src/app/recipes/recipe-detail/recipe-detail.page.ts");







var routes = [
    {
        path: '',
        component: _recipe_detail_page__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailPage"]
    }
];
var RecipeDetailPageModule = /** @class */ (function () {
    function RecipeDetailPageModule() {
    }
    RecipeDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recipe_detail_page__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailPage"]]
        })
    ], RecipeDetailPageModule);
    return RecipeDetailPageModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: RecipeDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailPage", function() { return RecipeDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes.service */ "./src/app/recipes/recipes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RecipeDetailPage = /** @class */ (function () {
    function RecipeDetailPage(activatedRoute, recipesSvc, router, alertController, toastController) {
        this.activatedRoute = activatedRoute;
        this.recipesSvc = recipesSvc;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
    }
    RecipeDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('recipeId')) {
                return;
            }
            _this.loadedRecipe = _this.recipesSvc.getRecipe(paramMap.get('recipeId'));
        });
    };
    RecipeDetailPage.prototype.deleteRecipe = function () {
        this.recipesSvc.deleteRecipe(this.loadedRecipe.id);
        this.router.navigate(['/recipes']);
        this.presentToast();
    };
    RecipeDetailPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete Recipe',
                            message: 'Are you sure you want to delete this recipe?',
                            buttons: [
                                {
                                    text: 'YES',
                                    handler: function () { return _this.deleteRecipe(); }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RecipeDetailPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Your settings have been saved.',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RecipeDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    RecipeDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! raw-loader!./recipe-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-detail/recipe-detail.page.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.page.scss */ "./src/app/recipes/recipe-detail/recipe-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], RecipeDetailPage);
    return RecipeDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipes-recipe-detail-recipe-detail-module-es5.js.map