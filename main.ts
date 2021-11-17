namespace SpriteKind {
    export const PowerUp = SpriteKind.create()
    export const powerups = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 8 9 2 2 . . . . . 
        . . . . . 2 2 2 f 9 9 2 2 . . . . 
        . . . . . . . 2 8 9 2 2 . . . . . 
        . . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `, plane, 200, 0)
    if (doublefireMode && doublefireMode.lifespan > 0) {
        bullet.y += -5
        bullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 8 9 2 2 . . . . . 
            . . . . . 2 2 2 f 9 9 2 2 . . . . 
            . . . . . . . 2 8 9 2 2 . . . . . 
            . . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, plane, 200, 0)
        bullet.y += 5
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    enemyDeath(status.spriteAttachedTo())
    info.changeScoreBy(1)
})
function enemyDeath (enemy: Sprite) {
    enemy.destroy(effects.fire, 1000)
    if (Math.percentChance(7.436666666666667)) {
        power_up = sprites.create(img`
            . . . . . . . . . . . . . . . . . 
            . . . . 7 . 7 . 7 . 7 . 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 f f f f f f f f f 7 7 . . 
            . 7 7 f 5 9 9 9 9 9 9 9 9 f 7 7 . 
            . . 7 f 5 5 9 9 9 9 9 9 4 f 7 . . 
            . 7 7 f 5 5 5 9 9 9 9 4 4 f 7 7 . 
            . . 7 f 5 5 5 5 9 9 4 4 4 f 7 . . 
            . 7 7 f 5 5 5 5 5 4 4 4 4 f 7 7 . 
            . . 7 f 5 5 5 5 5 5 4 4 4 f 7 . . 
            . 7 7 f 5 5 5 5 5 5 5 4 4 f 7 7 . 
            . . 7 f 5 5 5 5 5 5 5 5 4 f 7 . . 
            . 7 7 f 5 5 5 5 5 5 5 5 5 f 7 7 . 
            . . 7 7 f f f f f f f f f 7 7 . . 
            . . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . 7 . 7 . 7 . 7 . 7 . . . . 
            . . . . . . . . . . . . . . . . . 
            `, SpriteKind.powerups)
        power_up.x = enemy.x
        power_up.y = enemy.y
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.powerups, function (sprite, otherSprite) {
    doublefireMode = sprites.create(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . . 
        . . . . . . 2 8 9 2 2 . . . . . . 
        . . . . 2 2 2 f 9 9 2 2 . . . . . 
        . . . . . . 2 8 9 2 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . . 
        . . . . . . 2 8 9 2 2 . . . . . . 
        . . . . 2 2 2 f 9 9 2 2 . . . . . 
        . . . . . . 2 8 9 2 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    doublefireMode.setPosition(6, 112)
    doublefireMode.lifespan = 10000
    otherSprite.destroy(effects.halo, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    enemyDeath(otherSprite)
})
let statusbar: StatusBarSprite = null
let enemyShip: Sprite = null
let power_up: Sprite = null
let doublefireMode: Sprite = null
let bullet: Sprite = null
let plane: Sprite = null
effects.starField.startScreenEffect()
plane = sprites.create(img`
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    ....66666..66....................
    ....666666666666666..............
    ....66666666666666666............
    .....666666666666666666..........
    .....666666666666666666666.......
    ........6666666666666666666......
    .........66666aa11111111111111d..
    .........6666aaa8f8f8f8f8f8f8f6..
    ...........aaaaaf8f8f8f8f8f8f866.
    .........6666aaa8f8f8f8f8f8f8f6..
    .........66666aa111111111111111..
    ........6666666666666666666......
    .....666666666666666666666.......
    .....666666666666666666..........
    ....66666666666666666............
    ....666666666666666..............
    ....66666..66....................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    `, SpriteKind.Player)
controller.moveSprite(plane, 85, 85)
plane.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    enemyShip = sprites.create(img`
        . . . . 2 2 2 2 . . . . . . . . . 
        . . . . 2 1 2 2 . . . . . . . . . 
        . . . . 2 1 2 2 . . . . . . . . . 
        . . . . 2 1 2 2 2 . . . . . . . . 
        . . . . 2 1 2 1 2 . . . . . . . . 
        . 2 2 2 1 1 1 1 2 2 . . . . . . . 
        2 1 1 1 2 1 2 1 1 2 2 . . . . . . 
        2 1 1 1 2 2 2 2 2 1 2 . . . . . . 
        2 2 2 2 2 1 2 1 2 2 2 . . . . . . 
        2 1 1 1 2 2 2 2 2 1 2 . . . . . . 
        2 1 1 1 2 1 2 1 1 2 2 . . . . . . 
        . 2 2 2 1 1 1 1 2 2 . . . . . . . 
        . . . . 2 1 2 1 2 . . . . . . . . 
        . . . . 2 1 2 2 2 . . . . . . . . 
        . . . . 2 1 2 2 . . . . . . . . . 
        . . . . 2 1 2 2 . . . . . . . . . 
        . . . . 2 2 2 2 . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemyShip.x = scene.screenWidth()
    enemyShip.vx = -25
    enemyShip.y = randint(25, scene.screenHeight() - 25)
    statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
    statusbar.setColor(5, 1)
    statusbar.max = 80
    statusbar.attachToSprite(enemyShip)
})
