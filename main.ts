let RawPulseSensorSignal = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    RawPulseSensorSignal = pins.analogReadPin(AnalogPin.P2)
    led.plotBarGraph(
    RawPulseSensorSignal,
    1023
    )
})
