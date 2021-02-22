

"use strict"; // Operate in Strict mode
var gEngine = gEngine || { };
 // initialize the variable while ensuring it is not redefined


 gEngine.Core = (function() {
    // instance variable: the graphical context for drawing
    var mGL = null;
   
    // Accessor of the webgl context
    var getGL = function() { return mGL; };
    // Contains the functions and variables that will be accessible.
    var mPublic = {
    getGL: getGL
    };
    return mPublic;
   }());


   // initialize the WebGL, the vertex buffer and compile the shaders
var initializeWebGL = function(htmlCanvasID) {
    var canvas = document.getElementById(htmlCanvasID);
    
    // Get the standard or experimental webgl and binds to the Canvas area
    // store the results to the instance variable mGL
    mGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
   
    if (mGL === null) {
    document.write("<br><b>WebGL is not supported!</b>");
    return;
    }
    // now initialize the VertexBuffer
    gEngine.VertexBuffer.initialize();
   };