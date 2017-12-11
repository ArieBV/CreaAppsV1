var switchState = false;
var torchBrightness = 3;

function turnLightOn(){
  //Turn flashlight on with brightness *torchBrightness*
  //alert("Flashlight turned on");
  example3();
  alert(torchBrightness);
  switchState = true;
}

function turnLightOff(){
  //Turn flashlight off
  //alert("Flashlight turned off");
  
  switchState = false;
}

function adjustLight(){
    alert("Brightness set to: " + torchBrightness);
}

function example3() {
  try {
    kony.accelerometer.retrieveCurrentAcceleration(
	onSuccessCallback,
	onFailureCallback);
  } catch (err) {
    alert("Accelerometer not supported");
  }
}

function onSuccessCallback( accelerometerdata ) {
  alert("X: " + accelerometerdata.x +
        "\nY: " + accelerometerdata.y +
        "\nZ: " + accelerometerdata.z);
}

function onFailureCallback(error) {
	alert("Accelerometer is not supported in the device.");
}