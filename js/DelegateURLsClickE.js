/*
fail-safe URL delegation to Click Event via classes - js
*/
//this runs if js is enabled else fallback to the ahref assigned in the html
//MUST assign correct/working links to ahrefs in html
//MUST assign correct/working links to delegateURLsClickE_M.options
/* HOW TO DelegateURLsClickE_options - ONLY CLASSNAMES - 'className' - NO '.className'
[
  [className1, url1],
  [className2, url2]
  ...
]
*/
/* 

/// * * *   start USE EXAMPLE * * * ///

var DelegateURLsClickE_options = [
    ['linkX_1', 'https://www.snapdeal.com/product/samsung-galaxy-j2-pro-16gb/686534480658?MID_Mobiles_SamsungJ2PRO='],
    ['linkX_2', 'https://www.snapdeal.com/offers/kitchen-essentials'],
    ['linkX_3', 'https://www.snapdeal.com']
];
DelegateURLsClickE.run(DelegateURLsClickE_options);


/// * * *   end USE EXAMPLE * * * ///
*/ 
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
                delegateClickE(className, url);
            }
        }
    //private functions
    function delegateClickE(className, url) {
        var elem_DOM = document.querySelectorAll('.' + className);
        for (var i = 0; i < elem_DOM.length; i++) {
            elem_DOM[i].addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = url;
            });
        }
    }
    return public;
})();
   
