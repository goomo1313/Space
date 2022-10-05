namespace SpriteKind {
    export const Powerup = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Powerup, function (sprite, otherSprite) {
    Strelalv = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 . . . . 8 . . . . . 
        . . . . . 8 . . . . 8 . . . . . 
        . . . . . 8 . . . . 8 . . . . . 
        . . . . . 8 . . . . 8 . . . . . 
        . . . . . 8 . . . . 8 . . . . . 
        . . . . 9 8 9 . . 9 8 9 . . . . 
        . . . . 9 8 7 . . 9 8 7 . . . . 
        . . . . 7 8 8 . . 7 8 8 . . . . 
        . . . . 8 8 8 . . 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Strelalv.lifespan = 5000
    Strelalv.setPosition(8, 17)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Strela = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . 9 8 9 . . . . . . . 
        . . . . . . 9 8 7 . . . . . . . 
        . . . . . . 7 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Raketa, 0, -100)
    music.pewPew.play()
    if (Strelalv && Strelalv.lifespan > 0) {
        Strela.x += 5
        Strela = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . 9 8 9 . . . . . . . 
            . . . . . . 9 8 7 . . . . . . . 
            . . . . . . 7 8 8 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Raketa, 0, -100)
        Strela.startEffect(effects.fire, 100)
        Strela.x += -5
        music.pewPew.play()
    }
})
function Win () {
    game.setDialogFrame(img`
        ..88888888888888888888..
        .8899999999999999999988.
        889991111111111111199988
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        899911111111111111119998
        889991111111111111199988
        .8899999999999999999988.
        ..88888888888888888888..
        `)
    game.showLongText("WIN GAME", DialogLayout.Bottom)
    game.setDialogTextColor(2)
    game.over(true)
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    doSomething(status)
    status.spriteAttachedTo().destroy(effects.ashes, 200)
})
function doSomething (Enemy: Sprite) {
    Enemy.destroy(effects.ashes, 100)
    if (Math.percentChance(25)) {
        Poverup = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . 9 8 8 8 8 8 8 8 9 . . . 
            . . . 9 9 8 8 8 8 8 8 8 9 9 . . 
            . . 9 9 9 8 8 9 9 9 8 8 9 9 9 . 
            . . 9 9 9 8 8 9 9 9 8 8 9 9 9 . 
            . . 9 9 9 8 8 8 8 8 8 8 9 9 9 . 
            . . 9 9 9 8 8 8 8 8 8 8 9 9 9 . 
            . . 9 9 9 8 8 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 8 8 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 8 8 9 9 9 9 9 9 9 9 . 
            . . . 9 9 8 8 9 9 9 9 9 9 9 . . 
            . . . . 9 8 8 9 9 9 9 9 9 . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Powerup)
        Poverup.x = Enemy.x
        Poverup.y = Enemy.y
        Poverup.lifespan = 2000
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 100)
    info.changeLifeBy(1)
    music.powerUp.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -50
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    doSomething(otherSprite)
})
let Nepriatel2: Sprite = null
let statusbar: StatusBarSprite = null
let Nepriateľ: Sprite = null
let Zivot: Sprite = null
let Poverup: Sprite = null
let Strela: Sprite = null
let Strelalv: Sprite = null
let Raketa: Sprite = null
Raketa = sprites.create(img`
    .......ff.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    ...f...c7...f...
    ...8..3ff...8...
    ...8...87...8...
    ..88..8856..88..
    ..88..8756..88..
    ..88.ccc666.88..
    ..888877756688..
    ..8fffcc66ff66..
    .888866ff775766.
    .888886ff775776.
    ......ffff......
    ................
    ................
    ................
    ................
    `, SpriteKind.Player)
animation.runImageAnimation(
Raketa,
[img`
    .......ff.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    ...f...c7...f...
    ...8...ff...8...
    ...8...87...8...
    ..88..8856..88..
    ..88..8756..88..
    ..88.ccc666.88..
    ..888877756688..
    ..8fffcc66ff66..
    .888866ff775766.
    .888886ff775776.
    ......ffff......
    .......2........
    ......2..2......
    .....2..2.2.....
    ....2..2.2.2....
    `,img`
    .......ff.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    ...f...c7...f...
    ...8...ff...8...
    ...8...87...8...
    ..88..8856..88..
    ..88..8756..88..
    ..88.ccc666.88..
    ..888877756688..
    ..8fffcc66ff66..
    .888866ff775766.
    .888886ff775776.
    ......ffff......
    ................
    ......2..2......
    ................
    ....2..2.2.2....
    `,img`
    .......ff.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    ...f...c7...f...
    ...8...ff...8...
    ...8...87...8...
    ..88..8856..88..
    ..88..8756..88..
    ..88.ccc666.88..
    ..888877756688..
    ..8fffcc66ff66..
    .888866ff775766.
    .888886ff775776.
    ......ffff......
    .......22.......
    ......2..2.2....
    ................
    ..2.2..22..2.2..
    `,img`
    .......ff.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    ...f...c7...f...
    ...8...ff...8...
    ...8...87...8...
    ..88..8856..88..
    ..88..8756..88..
    ..88.ccc666.88..
    ..888877756688..
    ..8fffcc66ff66..
    .888866ff775766.
    .888886ff775776.
    ......ffff......
    .......22.......
    ......2..2..2...
    ................
    ....2.2.2.2.2...
    `,img`
    .......ff.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    ...f...c7...f...
    ...8...ff...8...
    ...8...87...8...
    ..88..8856..88..
    ..88..8756..88..
    ..88.ccc666.88..
    ..888877756688..
    ..8fffcc66ff66..
    .888866ff775766.
    .888886ff775776.
    ......ffff......
    .......2........
    ......2..2......
    ................
    ....2.2...2.....
    `,img`
    .......ff.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    ...f...c7...f...
    ...8...ff...8...
    ...8...87...8...
    ..88..8856..88..
    ..88..8756..88..
    ..88.ccc666.88..
    ..888877756688..
    ..8fffcc66ff66..
    .888866ff775766.
    .888886ff775776.
    ......ffff......
    ................
    ......2..2......
    ................
    ....2.2.2.2.....
    `,img`
    .......ff.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    ...f...c7...f...
    ...8...ff...8...
    ...8...87...8...
    ..88..8856..88..
    ..88..8756..88..
    ..88.ccc666.88..
    ..888877756688..
    ..8fffcc66ff66..
    .888866ff775766.
    .888886ff775776.
    ......ffff......
    .......2.2......
    ......2..2.2....
    ................
    ....2.2.2.2.....
    `,img`
    .......ff.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    ...f...c7...f...
    ...8...ff...8...
    ...8...87...8...
    ..88..8856..88..
    ..88..8756..88..
    ..88.ccc666.88..
    ..888877756688..
    ..8fffcc66ff66..
    .888866ff775766.
    .888886ff775776.
    ......ffff......
    .......2.2......
    ......2.2.......
    .......2........
    ....2.2.2.2.2...
    `,img`
    .......ff.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    ...f...c7...f...
    ...8...ff...8...
    ...8...87...8...
    ..88..8856..88..
    ..88..8756..88..
    ..88.ccc666.88..
    ..888877756688..
    ..8fffcc66ff66..
    .888866ff775766.
    .888886ff775776.
    ......ffff......
    .....2....2.....
    ................
    ....2.2..2..2...
    ................
    `,img`
    .......ff.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    ...f...c7...f...
    ...8...ff...8...
    ...8...87...8...
    ..88..8856..88..
    ..88..8756..88..
    ..88.ccc666.88..
    ..888877756688..
    ..8fffcc66ff66..
    .888866ff775766.
    .888886ff775776.
    ......ffff......
    .....2.2..2.....
    ........2.......
    ....2.2..2..2...
    ................
    `,img`
    .......ff.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    ...f...c7...f...
    ...8...ff...8...
    ...8...87...8...
    ..88..8856..88..
    ..88..8756..88..
    ..88.ccc666.88..
    ..888877756688..
    ..8fffcc66ff66..
    .888866ff775766.
    .888886ff775776.
    ......ffff......
    .....2.2..2.....
    ........2.......
    ....2.2..2..2...
    ................
    `],
100,
true
)
effects.starField.startScreenEffect()
controller.moveSprite(Raketa, 100, 100)
Raketa.setPosition(80, 105)
Raketa.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(15000, function () {
    Zivot = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ......333...333.....
        .....3ddd3.3dd23....
        ....3ddddd3dd3223...
        ....3ddddddd33223...
        ....3dddddd332223...
        .....3dddd332223....
        ......33d332223.....
        .......3332223......
        ........32223.......
        .........323........
        ..........3.........
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Food)
    Zivot.setPosition(randint(0, 160), 0)
    Zivot.setVelocity(0, 20)
    Zivot.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(2500, function () {
    if (true) {
        Nepriateľ = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 2 4 4 5 4 5 5 5 5 e e e e e . 
            . 2 2 4 5 4 4 4 4 2 2 e e e e . 
            . . 2 2 f f 2 2 c c f f f e . . 
            . . . 2 2 2 5 4 4 4 e e 2 . . . 
            . . . 2 2 2 2 2 c c c 2 2 . . . 
            . . . 2 2 . 2 5 4 e . 2 2 . . . 
            . . . f . . 2 5 e e . . f . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 4 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `, SpriteKind.Enemy)
        Nepriateľ.setPosition(randint(0, 160), 0)
        Nepriateľ.setVelocity(0, 20)
        animation.runImageAnimation(
        Nepriateľ,
        [img`
            . . . . 5 . 5 . 5 . . . 5 . . . 
            . . . . . . 5 . . . 5 . 5 . . . 
            . . . . . . . 5 . 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 2 4 4 5 4 5 5 5 5 e e e e e . 
            . 2 2 4 5 4 4 4 4 2 2 e e e e . 
            . . 2 2 f f 2 2 c c f f f e . . 
            . . . 2 2 2 5 4 4 4 e e 2 . . . 
            . . . 2 2 2 2 2 c c c 2 2 . . . 
            . . . 2 2 . 2 5 4 e . 2 2 . . . 
            . . . f . . 2 5 e e . . f . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 4 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . . . 5 . . . 5 . 5 . . . 
            . . . . . 5 . . 5 . . . . . . . 
            . . . . . . 5 . . . 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 2 4 4 5 4 5 5 5 5 e e e e e . 
            . 2 2 4 5 4 4 4 4 2 2 e e e e . 
            . . 2 2 f f 2 2 c c f f f e . . 
            . . . 2 2 2 5 4 4 4 e e 2 . . . 
            . . . 2 2 2 2 2 c c c 2 2 . . . 
            . . . 2 2 . 2 5 4 e . 2 2 . . . 
            . . . f . . 2 5 e e . . f . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 4 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . 5 . 5 . . 5 . 5 . 5 5 . . . 
            . . . . . . 5 . 5 . . 5 . . . . 
            . . . 5 . . . 5 . . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 2 4 4 5 4 5 5 5 5 e e e e e . 
            . 2 2 4 5 4 4 4 4 2 2 e e e e . 
            . . 2 2 f f 2 2 c c f f f e . . 
            . . . 2 2 2 5 4 4 4 e e 2 . . . 
            . . . 2 2 2 2 2 c c c 2 2 . . . 
            . . . 2 2 . 2 5 4 e . 2 2 . . . 
            . . . f . . 2 5 e e . . f . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 4 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . 5 . . 5 . 5 . 5 . . . . 
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . . . 5 . 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 2 4 4 5 4 5 5 5 5 e e e e e . 
            . 2 2 4 5 4 4 4 4 2 2 e e e e . 
            . . 2 2 f f 2 2 c c f f f e . . 
            . . . 2 2 2 5 4 4 4 e e 2 . . . 
            . . . 2 2 2 2 2 c c c 2 2 . . . 
            . . . 2 2 . 2 5 4 e . 2 2 . . . 
            . . . f . . 2 5 e e . . f . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 4 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . 5 . . 5 . . . 5 . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 2 4 4 5 4 5 5 5 5 e e e e e . 
            . 2 2 4 5 4 4 4 4 2 2 e e e e . 
            . . 2 2 f f 2 2 c c f f f e . . 
            . . . 2 2 2 5 4 4 4 e e 2 . . . 
            . . . 2 2 2 2 2 c c c 2 2 . . . 
            . . . 2 2 . 2 5 4 e . 2 2 . . . 
            . . . f . . 2 5 e e . . f . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 4 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . 5 . . 5 . 5 . 5 . . . . 
            . . . . . 5 . . 5 . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 2 4 4 5 4 5 5 5 5 e e e e e . 
            . 2 2 4 5 4 4 4 4 2 2 e e e e . 
            . . 2 2 f f 2 2 c c f f f e . . 
            . . . 2 2 2 5 4 4 4 e e 2 . . . 
            . . . 2 2 2 2 2 c c c 2 2 . . . 
            . . . 2 2 . 2 5 4 e . 2 2 . . . 
            . . . f . . 2 5 e e . . f . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 4 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . 5 . 5 . . 5 . 5 . . . . 
            . . . . . 5 . 5 5 . 5 . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 2 4 4 5 4 5 5 5 5 e e e e e . 
            . 2 2 4 5 4 4 4 4 2 2 e e e e . 
            . . 2 2 f f 2 2 c c f f f e . . 
            . . . 2 2 2 5 4 4 4 e e 2 . . . 
            . . . 2 2 2 2 2 c c c 2 2 . . . 
            . . . 2 2 . 2 5 4 e . 2 2 . . . 
            . . . f . . 2 5 e e . . f . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 4 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . 5 . 5 . . 5 . 5 . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 2 4 4 5 4 5 5 5 5 e e e e e . 
            . 2 2 4 5 4 4 4 4 2 2 e e e e . 
            . . 2 2 f f 2 2 c c f f f e . . 
            . . . 2 2 2 5 4 4 4 e e 2 . . . 
            . . . 2 2 2 2 2 c c c 2 2 . . . 
            . . . 2 2 . 2 5 4 e . 2 2 . . . 
            . . . f . . 2 5 e e . . f . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 4 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . 5 . 5 . . 5 . 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 2 4 4 5 4 5 5 5 5 e e e e e . 
            . 2 2 4 5 4 4 4 4 2 2 e e e e . 
            . . 2 2 f f 2 2 c c f f f e . . 
            . . . 2 2 2 5 4 4 4 e e 2 . . . 
            . . . 2 2 2 2 2 c c c 2 2 . . . 
            . . . 2 2 . 2 5 4 e . 2 2 . . . 
            . . . f . . 2 5 e e . . f . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 4 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . . 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 2 4 4 5 4 5 5 5 5 e e e e e . 
            . 2 2 4 5 4 4 4 4 2 2 e e e e . 
            . . 2 2 f f 2 2 c c f f f e . . 
            . . . 2 2 2 5 4 4 4 e e 2 . . . 
            . . . 2 2 2 2 2 c c c 2 2 . . . 
            . . . 2 2 . 2 5 4 e . 2 2 . . . 
            . . . f . . 2 5 e e . . f . . . 
            . . . . . . . 4 e . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 4 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `],
        100,
        true
        )
        Nepriateľ.setFlag(SpriteFlag.AutoDestroy, true)
        statusbar = statusbars.create(20, 2, StatusBarKind.EnemyHealth)
        statusbar.attachToSprite(Nepriateľ)
        statusbar.setColor(7, 12)
    }
    if (true) {
        Nepriatel2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        Nepriatel2,
        [img`
            . . . . 9 . . 9 9 . . 9 . . . . 
            . . . . . 9 9 . . 9 9 . . . . . 
            . . . . . 9 . 9 9 . 9 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . 9 . . 9 9 . . 9 . . . . 
            . . . . . 9 . . . . 9 . . . . . 
            . . . . . 9 . . . . 9 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . 9 . . 9 9 . . 9 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 9 . 9 9 . 9 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . 9 9 . . . . 9 9 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 9 . . . . 9 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . . 9 . 9 . . 9 . . . . . 
            . . . . . . . . 9 . . . . . . . 
            . . . . . . 9 . . 9 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . . 9 . . 9 . 9 . . . . . 
            . . . . . . . 9 . . . . . . . . 
            . . . . . . 9 . . 9 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . 9 . 9 . . 9 . . . 9 . . . 
            . . . . 9 . . 9 . . . 9 . . . . 
            . . . . . . 9 . . 9 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . 9 . 9 . . 9 . 9 . 9 . . . 
            . . . . 9 . . 9 . . . 9 . . . . 
            . . . . . . 9 . . 9 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . 9 . . . . 9 . 9 . 9 . . . 
            . . . . 9 . . . . . . 9 . . . . 
            . . . . . . 9 . . 9 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . 9 . . . . 9 . . . 9 . . . 
            . . . . 9 . . . . . . 9 . . . . 
            . . . . . . 9 . . 9 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . . . 9 . 9 . 9 . . . . . 
            . . . . . 9 . . . . . . . . . . 
            . . . . . . 9 . . 9 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . . . 9 . . 9 . . . . . . 
            . . . . . . . . 9 . 9 . . . . . 
            . . . . . . 9 . 9 . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `,img`
            . . . . . . 9 . . 9 . . . . . . 
            . . . . . . . . 9 . 9 . . . . . 
            . . . . . . 9 . 9 . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . 7 9 9 5 9 5 5 5 5 a a a a a . 
            . 7 7 9 5 9 9 9 9 7 7 a a a a . 
            . . 7 7 f f 9 9 c c f f f a . . 
            . . . 7 7 7 5 9 9 9 a a a . . . 
            . . . 7 7 7 7 7 c c c 7 7 . . . 
            . . . 7 7 . 7 5 9 a . 7 7 . . . 
            . . . f . . 7 5 a a . . f . . . 
            . . . . . . . 9 a . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 9 c . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . b c . . . . . . . 
            `],
        100,
        true
        )
        Nepriatel2.setPosition(randint(0, 160), 0)
        Nepriatel2.setVelocity(0, 20)
        Nepriatel2.setFlag(SpriteFlag.AutoDestroy, true)
        statusbar = statusbars.create(20, 2, StatusBarKind.EnemyHealth)
        statusbar.attachToSprite(Nepriatel2, 0, 0)
        statusbar.setColor(7, 12)
    }
})
forever(function () {
    if (info.score() == 300) {
        Win()
    }
})
