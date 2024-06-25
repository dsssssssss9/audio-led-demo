input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.showIcon(IconNames.Heart)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
	
})
