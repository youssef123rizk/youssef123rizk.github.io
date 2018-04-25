$(function() {
  $("form[name='Contact-US-Form']").validate({
    rules: {
      
      firstname: "required",
      lastname: "required",
      subject: "required",
      email: {
        required: true,
        
        email: true
      },
     },
    messages: {
      firstname: "Please enter your first name",
      lastname: "Please enter your last name",
      subject: "Please type your message",
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});