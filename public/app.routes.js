(function(){
  "use strict";

  angular
    .module("mapdocApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider"];

  function AppRoutes($stateProvider){

    $stateProvider
      .state("landing", {
        url: "/"
      })
      .state("home", {
        url: "/home",
        templateUrl: "/templates/home.html"
      })
      .state("mapPage", {
        url: "/map",
        templateUrl: "/templates/map.html"
      })
      .state("aboutPage", {
        url: "/about",
        templateUrl: "/templates/about.html"
      })
      .state("post", {
        url: "/post",
        templateUrl: "/templates/post.html",
        controller: "DocsController",
        controllerAs: "vm"
      })
      .state("yourDocs", {
        url: "/yourDocuments",
        templateUrl: "/templates/your_docs.html",
        controller: "YourDocsController"
      })
      .state("register", {
        url: "/register",
        templateUrl: "/templates/register.html",
        controller: "UsersController",
        controllerAs: "vm"
      })
      .state("login", {
        url: "/login",
        templateUrl: "/templates/login.html",
        controller: "LoginController",
        controllerAs: "vm"
      });
}

})();
