(function(window){
  var speakWord = "Good Bye";
  var saybye = function (name){
    console.log(speakWord + ' ' + name)
  }
  window.saybye = saybye
})(window);

