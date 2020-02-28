/*
    -preparing the object for use 
    -accepting arguments which a constructor
    -used to set the values of member properties and methods when the object is first created.
*/

//CREATE a new object
// Each of the following options will create a new empty object:
var newObject = {};
 
// or
var newObject = Object.create( Object.prototype );
 
// or
var newObject = new Object();


//ASSIGN VALUES to new object
/** 
 * ECMA3
 *  -dot notation
*   -sqaure bracket

    ECMA5
    -Object.defineProperty
    -Object.defineProperties
*/

//Object.defineProperty
//set properties
var defineProp = function ( obj, key, value ){
    var config = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty( obj, key, config );
  };

// To use, we then create a new empty "person" object
var person = Object.create( Object.prototype );

// Populate the object with properties
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );


//Object.defineProperties
// Set properties
Object.defineProperties( newObject, {
 
    "someKey": {
      value: "Hello World",
      writable: true
    },
   
    "anotherKey": {
      value: "Foo bar",
      writable: false
    }
   
  });


  function Car( model, year, miles ) {
 
    this.model = model;
    this.year = year;
    this.miles = miles;
   
    this.toString = function () {
      return this.model + " has done " + this.miles + " miles";
    };
  }
   
  // Usage:
   
  // We can create new instances of the car
  var civic = new Car( "Honda Civic", 2009, 20000 );
  console.log( civic.toString() );

  //PROBLEM
  /**
   * One is that it makes inheritance difficult and the other is that functions such as toString() are redefined for each of the new objects created using the Car constructor. This isn't very optimal as the function should ideally be shared between all of the instances of the Car type.
   */

   //SOLUTION
   function Car( model, year, miles ) {
 
    this.model = model;
    this.year = year;
    this.miles = miles;
   
  }
   
  // Note here that we are using Object.prototype.newMethod rather than
  // Object.prototype so as to avoid redefining the prototype object
  Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
   
  // Usage:
  var civic = new Car( "Honda Civic", 2009, 20000 );
  console.log( civic.toString() );

  //RESULT
  //a single instance of toString() will now be shared between all of the Car objects.