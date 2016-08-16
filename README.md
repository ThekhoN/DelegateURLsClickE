# DelegateURLsClickE
fail-safe URL delegation to Click Event via classes - js

Using javascript to assign urls to callToAction Buttons that may not work normally through classes.
Came across this, while promoting one of our htmls on an app.

  #Need to update

  Add open in new tab unless false is defined in the params
  
  ```
    var DelegateURLsClickE = (function() {
    var public = {};
    public.run = function(multi_array) {
            var opts = multi_array;
            if (!arguments.length || !multi_array) {
                console.log('please define your parameters');
                return;
            } else if (typeof opts != "object" && !Array.isArray(opts)) {
                console.log('options must be array, ref guide');
                return;
            }
            for (var i = 0; i < opts.length; i++) {
                var className = opts[i][0];
                var url = opts[i][1];
                var newTab = opts[i][2];
                delegateClickE(className, url, newTab);
            }
        }
        //private functions
    function delegateClickE(className, url, newTab) {
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var elem_DOM = document.querySelectorAll('.' + className);
        for (var i = 0; i < elem_DOM.length; i++) {
            elem_DOM[i].addEventListener('click', function(e) {
                e.preventDefault();
                console.log(newTab);
                if (newTab == false || newTab == 'false') {
                    window.location.href = url;
                } else {
                    if (windowWidth > 768) {
                        window.open(url, '_blank');
                    } else {
                        window.location.href = url;
                    }
                }
            });
        }
    }
    return public;
})();

var DelegateURLsClickE_options = [
    ['linkX_1', 'https://www.snapdeal.com/product/samsung-galaxy-j2-pro-16gb/686534480658?MID_Mobiles_SamsungJ2PRO=', false],
    ['linkX_2', 'https://www.snapdeal.com/offers/kitchen-essentials'],
    ['linkX_3', 'https://www.snapdeal.com']
];
DelegateURLsClickE.run(DelegateURLsClickE_options);

  ```
