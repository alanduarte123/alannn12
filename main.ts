input.onButtonPressed(Button.A, function () {
    if (reading < 12) {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P1, 100)
        music.playMelody("C5 - C5 - - - - - ", 500)
    }
})
input.onButtonPressed(Button.B, function () {
    if (reading < 12) {
        basic.showIcon(IconNames.No)
        pins.servoWritePin(AnalogPin.P1, -100)
        music.playMelody("C5 B C5 - - - - - ", 500)
    }
})
let reading = 0
basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.pause(200)
basic.clearScreen()
basic.showString("Hola")
basic.forever(function () {
	
})
