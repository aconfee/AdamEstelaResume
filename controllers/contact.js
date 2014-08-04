function ContactController($scope){

  $scope.sendEmail = function(){
    // Get email info
    var $name = $('input[name="name"]');
    var $email = $('input[name="email"]');
    var $message = $('textarea[name="message"]');

    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'YCIdHt4plO84mUGeIOM11Q',
        'message': {
          'from_email': $email.val(),
          'to': [
              {
                'email': 'adamestela@gmail.com',
                'name': $name.val(),
                'type': 'to'
              },
            ],
          'autotext': 'true',
          'subject': 'Resume Inquery [From my site]',
          'html': $message.val()
        }
      }
     }).done(function(response) {
       console.log(response);
     });

     $name.val('');
     $email.val('');
     $message.val('');
  }
}