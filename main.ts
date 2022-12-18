function Deaf_makegreenand_let_walk () {
    basic.pause(5000)
    Green()
    basic.showIcon(IconNames.StickFigure)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(2000)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(2000)
    for (let index = 0; index <= 15; index++) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        basic.showNumber(15 - index)
    }
    basic.showIcon(IconNames.No)
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(131, music.beat(BeatFraction.Breve))
    Yellow()
    basic.pause(4000)
    Red()
}
function Makegreen_and_letwalk () {
    basic.pause(5000)
    Green()
    basic.showIcon(IconNames.StickFigure)
    basic.pause(5000)
    for (let index = 0; index <= 15; index++) {
        basic.showNumber(15 - index)
    }
    basic.showIcon(IconNames.No)
    Yellow()
    basic.pause(4000)
    Red()
}
function Sonar () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P0, 0)
    distance = pins.pulseIn(DigitalPin.P13, PulseValue.High) / 58
}
input.onButtonPressed(Button.A, function () {
    Makegreen_and_letwalk()
})
function Yellow () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
input.onButtonPressed(Button.B, function () {
    Deaf_makegreenand_let_walk()
})
function Green () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
function Red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let distance = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(70)
basic.showIcon(IconNames.No)
radio.setGroup(32)
distance = 7
let counter = 0
Red()
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        Sonar()
        if (distance <= 5) {
            counter += 1
        }
    }
    if (distance == 4) {
        Makegreen_and_letwalk()
    }
    counter = 0
})
