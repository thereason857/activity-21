input.onButtonPressed(Button.A, function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (pins.digitalReadPin(DigitalPin.P1)))
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 512) {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
