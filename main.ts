let mySprite = sprites.create(img`
    . . . . . . . f f . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . f . . . c 7 . . . f . . . 
    . . . 8 . . . f f . . . 8 . . . 
    . . . 8 . . . 8 7 . . . 8 . . . 
    . . 8 8 . . 8 8 5 6 . . 8 8 . . 
    . . 8 8 . . 8 7 5 6 . . 8 8 . . 
    . . 8 8 . c c c 6 6 6 . 8 8 . . 
    . . 8 8 8 8 7 7 7 5 6 6 8 8 . . 
    . . 8 f f f c c 6 6 f f 6 6 . . 
    . 8 8 8 8 6 6 f f 7 7 5 7 6 6 . 
    . 8 8 8 8 8 6 f f 7 7 5 7 7 6 . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.Player)
effects.starField.startScreenEffect()
controller.moveSprite(mySprite, 100, 100)
