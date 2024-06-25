input.onSound(DetectedSound.Loud, function () {
    OnOff = !(OnOff)
    if (OnOff == true) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
let OnOff = false
basic.showIcon(IconNames.Tortoise)
OnOff = false
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
	
})
