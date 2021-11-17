def on_a_pressed():
    global bullet
    bullet = sprites.create_projectile_from_sprite(img("""
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
        """),
        plane,
        200,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

enemyShip: Sprite = None
bullet: Sprite = None
plane: Sprite = None
effects.star_field.start_screen_effect()
plane = sprites.create(img("""
        .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            ..22666666666ffffffffffffffff....
            .224677744444f444466666666ff9....
            2245666774444ffff4888555566666666
            2455ff6677744f..f4888885555555556
            2245666aaa744ffff4488888866666666
            .2246aaaaa774f444466666666ff9....
            ..22666666666ffffffffffffffff....
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
            .................................
    """),
    SpriteKind.player)
controller.move_sprite(plane, 85, 85)
plane.set_stay_in_screen(True)

def on_update_interval():
    global enemyShip
    enemyShip = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    enemyShip.x = scene.screen_width()
    enemyShip.vx = -25
game.on_update_interval(2000, on_update_interval)