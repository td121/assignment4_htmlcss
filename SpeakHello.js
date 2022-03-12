(function(window){
  var speakWord = 'Hello';
  var sayhello = function (name){
    console.log(speakWord + ' ' + name)
  }
  window.sayhello = sayhello
})(window);


