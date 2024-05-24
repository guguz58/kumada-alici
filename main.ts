radio.setGroup(3)
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        radio.sendValue("name", 1)
        basic.showArrow(ArrowNames.North)
    }
    if (WSJoyStick.Listen_Dir(DIR.D)) {
        radio.sendValue("name", 2)
        basic.showArrow(ArrowNames.South)
    }
    if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendValue("name", 3)
        basic.showArrow(ArrowNames.West)
    }
    if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendValue("name", 4)
        basic.showArrow(ArrowNames.East)
    }
})
