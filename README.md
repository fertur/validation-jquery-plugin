This jQuery plugin allows validate some form fields. Specifically, this plugin allows:

  - Validate Username.
  - Validate Password.
  - Validate Password Confirmation.
  - Validate First name.
  - Validate Last name.
  - Validate E-mail.

To include this plugin in your own project, you must:

  - Download the plugin demo or, at least, download the file called 'jquery.validation.js'.
    You can find the jQuery Validation Plugin Demo here: http://fertur.github.io/.
  
  - In your html file, add jQuery (1.5+) with the following line: 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    You can insert this line where you prefer.

  - Add the 'jquery.validation.js' line at the body bottom with the following line:
        <script src="js/jquery.validation.js"></script>
    Be careful with the file path to avoid unnecessary mistakes. 
  
  - And finally, you must call the function in the js file, adding the following line:
    var regform = $("#register_form");
