
$(function() {

var $name = $('#name')
var $email = $('#email')
var $password = $('#password')

$('#signup').on("click", function(){
  var user ={
    name: $name.val(),
    email: $email.val(),
    password :$password.val()
  }

  $.ajax({
    type:'POST',
    url:'/users/signup',
    data:user,
    success: function(newUser){
      alert("User Created:"+ newUser)
    }
  })

})


})
