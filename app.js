let input = document.getElementsByClassName("custom-input");
const page = document.querySelector('body');


$("input").focus(function(){
    $(input).val("@");
  });

page.addEventListener('click', function(e){
  $(input).val("");
});