input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("shohei ")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showNumber(9)
basic.showNumber(1)
for (let index = 0; index < 10; index++) {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
}
basic.forever(function () {
	
})
