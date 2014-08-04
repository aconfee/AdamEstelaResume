function ContactController($scope){

  $scope.sendEmail = function(){
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'YCIdHt4plO84mUGeIOM11Q',
        'message': {
          'from_email': 'adamestela@gmail.com',
          'to': [
              {
                'email': 'aconfee@charter.net',
                'name': 'Pigly',
                'type': 'to'
              },
              {
                'email': 'adam.estela@paperg.com',
                'name': 'Pigly2',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Resume Inquery',
          'html': 'Finally an email is sent!'
        }
      }
     }).done(function(response) {
       console.log(response); // if you're into that sorta thing
     });
  }
}