'use strict';

function getTranslate(Effect){

var apiURL ="https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20180226T024559Z.13adb172a8c1d564.bca3430c884a1eee609004c9589cb0cc6c5ca4ae&lang=en-ru&text=" +Effect
  $.ajax({

    url:  apiURL,
    success: function(r){
      console.log(r)
       console.log(r.def[0].ts)
      $("ul").append("<h3>"+r.def[0].ts+"</h3>")

    },
    error: function(er){
      console.log("Error: " + er )
    }
  });
}
$(document).ready(function(){
  $("#submit").on("click", function(){
  var apiUrl = "http://strainapi.evanbusse.com/WVn9rIC/searchdata/effects"

  $.ajax({
       url: apiUrl,
       success: function(response){
         console.log(response)
           response.forEach(function(e){
             console.log(e.effect)
             $("section").append("<h2>"+e.effect+"</h2")
              getTranslate(e.effect)

            });
       },
       //if the api url is wrong or has an error, print the status code       error: function(r){

         error: function(r){
           console.log(r);
       }

     })
 })
 })
