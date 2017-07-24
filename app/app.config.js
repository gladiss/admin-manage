"use strict";
/**
 * Created by MapleFater on 2016/7/13.
 */
angular.module("cambricon-forum").config(["$stateProvider", "$urlRouterProvider", "toastrConfig","$touchProvider",
    function ($stateProvider, $urlRouterProvider, toastrConfig,$touchProvider) {

        $stateProvider.state("home", {
            url: "/",
            templateUrl: "home/home.template.html",
            controller: "homeController"
        }).state("login", {
            url: "/login",
            templateUrl: "login/login.template.html",
            controller: "loginController"
        }).state("profile", {
            url: "/profile",
            templateUrl: "profile/profile.template.html",
            controller: "profileController"
        }).state("detail", {
            url: "/detail/:id",
            templateUrl: "detail/detail.template.html",
            controller: "detailController"
        }).state("cart", {
            url: "/cart",
            templateUrl: "cart/cart.template.html",
            controller: "cartController"
        }).state("address", {
            url: "/address",
            templateUrl: "address/address.template.html",
            controller: "addressController"
        }).state("modifyAddress", {
            url: "/modifyAddress",
            templateUrl: "modifyAddress/modifyAddress.template.html",
            controller: "modifyAddressController",
            params: {
                _id: -1,
                name: "",
                address: "",
                phone: "",
                default: 0
            }
        }).state("register", {
            url: "/register",
            templateUrl: "register/register.template.html",
            controller: "registerController",
            params: {
                reset: 0
            }
        }).state("reset", {
            url: "/reset",
            templateUrl: "register/register.template.html",
            controller: "registerController",
            params: {
                reset: 1
            }
        }).state("myOrder", {
            url: "/myOrder",
            templateUrl: "myOrder/myOrder.template.html",
            controller: "myOrderController"
        }).state("makeOrder", {
            url: "/makeOrder",
            templateUrl: "makeOrder/makeOrder.template.html",
            controller: "makeOrderController"
        });

        $urlRouterProvider.otherwise("/");


        $touchProvider.ngClickOverrideEnabled(true);

        angular.extend(toastrConfig, {
            extendedTimeOut: 1000,
            timeOut: 1000
        });


    }]);