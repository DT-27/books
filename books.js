let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});



/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});





{
  "name": "web",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bootstrap": "^4.3.1",
    "font-awesome": "^4.7.0",
    "jquery": "^3.3.1"
  }
}




{
  "name": "web",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "bootstrap": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-4.3.1.tgz",
      "integrity": "sha512-rXqOmH1VilAt2DyPzluTi2blhk17bO7ef+zLLPlWvG494pDxcM234pJ8wTc/6R40UWizAIIMgxjvxZg5kmsbag=="
    },
    "font-awesome": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/font-awesome/-/font-awesome-4.7.0.tgz",
      "integrity": "sha1-j6jPBBGhoxr9B7BtKQK7n8gVoTM="
    },
    "jquery": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/jquery/-/jquery-3.3.1.tgz",
      "integrity": "sha512-Ubldcmxp5np52/ENotGxlLe6aGMvmF4R8S6tZjsP6Knsaxd/xp3Zrh50cG93lR6nPXyUFwzN3ZSOQI0wRJNdGg=="
    }
  }
}