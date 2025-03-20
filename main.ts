input.onButtonPressed(Button.A, function () {
    if (Segundos < 50) {
        Segundos += 10
        basic.showNumber(Segundos)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (Segundos < 60) {
        Segundos += 1
        basic.showNumber(Segundos)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    while (Segundos > 50) {
        basic.showNumber(Segundos)
        basic.pause(1000)
        Segundos += 0 - 1
    }
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.No)
})
let Segundos = 0
Segundos = 0
