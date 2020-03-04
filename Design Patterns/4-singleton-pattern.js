//one object to coordinate one access across the system
//ex: config settings or client-side to store api key, session info, etc
//well known use case: jQuery
//drawback: global instance

var mySingleton = (function () {
 
    // Instance stores a reference to the Singleton
    var instance;
   
    function init() {
   
      // Singleton
   
      // Private methods and variables
      function privateMethod(){
          console.log( "I am private" );
      }
   
      var privateVariable = "Im also private";
   
      var privateRandomNumber = Math.random();
   
      return {
   
        // Public methods and variables
        publicMethod: function () {
          console.log( "The public can see me!" );
        },
   
        publicProperty: "I am also public",
   
        getRandomNumber: function() {
          return privateRandomNumber;
        }
   
      };
   
    };
   
    return {
   
      // Get the Singleton instance if one exists
      // or create one if it doesn't
      getInstance: function () {
   
        if ( !instance ) {
          instance = init();
        }
   
        return instance;
      }
   
    };
   
  })();
   
   
  // Usage:
   
  var singleA = mySingleton.getInstance();
  var singleB = mySingleton.getInstance();
  
  console.log(singleA.publicMethod());
  console.log(singleB.publicProperty);
  console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true