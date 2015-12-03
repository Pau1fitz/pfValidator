var $ = jQuery.noConflict();

var app = app || {};
!function(){
	"use strict";

	$('html').removeClass('no-js');

	app.initialize = {
		init: function() {
			app.login.init();
		}
	},
	app.login = {
		init: function() {

		// Validate form before submit
		$('#login .login-form').submit(function(event) {
	
			//validate email or password
			if (!(app.validation.email($("#email").val()) && app.validation.password($("#id").val()))) {

				//prevent default event handling if the validation does not pass
            	event.preventDefault();
		
  				//if email address entered incorrectly show email error message
            	if(!app.validation.email($("#email").val())){
            		app.errorMsg.email();
            	};

            	//if email password entered incorrectly show password error message
            	if(!app.validation.password($("#id").val())) {
            		app.errorMsg.password();
            	};
        	};
		});

		}
	},
	app.validation = {
		email: function(email) {
			// Regex, use this to validate the Email
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
		password: function(id) {
			// Used to validate the Password
			if(id.length > 0)
				return true;
		}
	},
	app.errorMsg = {
		email: function(id) {
			var text = 'Your E-Mail is not valid';
			$(".email-error-text").append("<p class='error-text'>"+text+"</p>");
		},
		password: function(id) {
			var text = 'Your Password is not valid';
			$(".password-error-text").append("<p class='error-text'>"+text+"</p>");
		},
	}
	app.docOnReady = {
		init: function() {
			app.initialize.init();
		}
	};

	$(document).ready(app.docOnReady.init);

}(jQuery);

