(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipes.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Recipes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let recipe of recipes\" [routerLink]=\"['./', recipe.id]\">\n      <ion-avatar slot=\"start\">\n        <ion-img [src]=\"recipe.imageUrl\"></ion-img>\n      </ion-avatar>\n      <ion-label>{{ recipe.title }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/recipes/recipes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/*! exports provided: RecipesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPageModule", function() { return RecipesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes.page */ "./src/app/recipes/recipes.page.ts");







var routes = [
    {
        path: '',
        component: _recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"]
    }
];
var RecipesPageModule = /** @class */ (function () {
    function RecipesPageModule() {
    }
    RecipesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"]]
        })
    ], RecipesPageModule);
    return RecipesPageModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.page.scss":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recipes/recipes.page.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipes.page.ts ***!
  \*****************************************/
/*! exports provided: RecipesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPage", function() { return RecipesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.service */ "./src/app/recipes/recipes.service.ts");



var RecipesPage = /** @class */ (function () {
    function RecipesPage(recipesService) {
        this.recipesService = recipesService;
    }
    RecipesPage.prototype.ngOnInit = function () {
        this.recipes = this.recipesService.getAllRecipes();
    };
    RecipesPage.prototype.getRecipe = function (id) {
        this.recipe = this.recipesService.getRecipe(id);
        var obj = { id: this.recipe.id, imageUrl: this.recipe.imageUrl, ingredients: this.recipe.ingredients, title: this.recipe.title };
        console.log(obj);
    };
    RecipesPage.prototype.ionViewWillEnter = function () {
        this.recipes = this.recipesService.getAllRecipes();
    };
    RecipesPage.ctorParameters = function () { return [
        { type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"] }
    ]; };
    RecipesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! raw-loader!./recipes.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.page.html"),
            styles: [__webpack_require__(/*! ./recipes.page.scss */ "./src/app/recipes/recipes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"]])
    ], RecipesPage);
    return RecipesPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipes-recipes-module-es5.js.map