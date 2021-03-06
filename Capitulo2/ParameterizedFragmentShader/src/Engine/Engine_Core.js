

var gEngine = gEngine || { };
gEngine.Core = (function () {

    var mGL = null;
    var getGL = function () { return mGL; };
    var initializeWebGL = function (htmlCanvasID) {
        var canvas = document.getElementById(htmlCanvasID);
        mGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

        if (mGL === null) {
            document.write("<br><b>WebGL is not supported!</b>");
            return;
        }

        // now initialize the VertexBuffer
        gEngine.VertexBuffer.initialize();
    };

    // Clears the draw area and draws one square
    var clearCanvas = function (color) {
        mGL.clearColor(color[0], color[1], color[2], color[3]);  // set the color to be cleared
        mGL.clear(mGL.COLOR_BUFFER_BIT);      // clear to the color previously set
    };

    // -- end of public methods

    var mPublic = {
        getGL: getGL,
        initializeWebGL: initializeWebGL,
        clearCanvas: clearCanvas
    };

    return mPublic;
}());
