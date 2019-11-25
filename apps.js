var myApp = angular.module("myApp", []);

myApp.service("OrganisationService" , function(){
 var uid = 1;
 var organisations = []; 

 this.save = function(org)  
 {
 if(org.id == null)                       
 {
 org.id = uid++;
 organisations.push(org);
 }
 else
 {
 for(var i in organisations)
 {
 if(organisations[i].id == org.id)
 {
 organisations[i] = org;
 }
 }
 }
 };
 
 this.list = function()
 {
 return organisations;
 } ; 
});
 
myApp.controller("OrganisationController" , function($scope , OrganisationService){
    console.clear();
    
 $scope.organisations = OrganisationService.list();
 
 $scope.saveContact = function()
 {
   console.log($scope.neworg);
 };
});