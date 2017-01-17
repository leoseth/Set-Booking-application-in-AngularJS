var routingApp = angular.module('routingApp', ['ngRoute', 'ui.bootstrap']);
routingApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
          when('/SeatBooking/:slotNumber',    { templateUrl: '/SeatBooking/SeatBooking.html',             controller: 'BookingController' }).
          when('/SeatBooking120/:slotNumber', { templateUrl: '/SeatBooking120/SeatBooking120.html',       controller: 'BookingController' }).
          when('/SeatBooking140/:slotNumber', { templateUrl: '/SeatBooking140/SeatBooking140.html',       controller: 'BookingController' }).
          when('/SeatBooking200/:slotNumber', { templateUrl: '/SeatBooking200/SeatBooking200.html',       controller: 'BookingController' }).
          when('/ShowBookSeatDetail',         { templateUrl: '/ShowBookSetDetail/ShowBookingDetail.html', controller: 'ShowBookingDetailController' }).
          when('/CustomDirective',            { templateUrl: '/CustomDirective/CustomDirective.html',     controller: 'OlympicController' }).
          otherwise({ redirectTo: '' });

          console.log("successfully routed");
          $locationProvider.html5Mode(true);
}]);

routingApp.filter('encodeURI', function () {
    return window.encodeURI;
});
                                                                  
console.log(routingApp.config);
console.log(routingApp);

routingApp.controller("BookingController", ['$scope', 'dataService', '$routeParams', '$modal', '$log', '$location', function ($scope, dataService, $routeParams, $modal, $log, $location) {
    $scope.GetIndex = function (Index) {
        $scope.lastIndex = Index;
    }
    var slotNum = $routeParams.slotNumber.substring(0, 3);
}]);
console.log("ooooops");

//  This is the ShowBookingDetailController  //
routingApp.controller("ShowBookingDetailController", ['$scope', '$routeParams', '$modal', '$log', '$location', function ($scope, $routeParams, $modal, $log, $location) {
    console.log("ShowBookingDetailController");
}]);
//  This is the ShowBookingDetailController  //

//  This is the OlympicController  //
routingApp.controller("OlympicController", ['$scope', '$routeParams', '$modal', '$log', '$location', function ($scope, $routeParams, $modal, $log, $location) {
    console.log("OlympicController");
}]);
//  This is the OlympicController  //










