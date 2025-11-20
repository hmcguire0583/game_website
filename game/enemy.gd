extends CharacterBody2D

@export var speed := 20.0
var player_chase := false
var player = null
var current_dir := "down"

func _ready():
	$detection_area.body_entered.connect(_on_detection_area_body_entered)
	$detection_area.body_exited.connect(_on_detection_area_body_exited)
	$AnimatedSprite2D.play("down_idle")

func _physics_process(delta):
	if player_chase and player:
		var move_vec = player.position - position
		update_direction(move_vec)
		if move_vec.length() > 1:
			position += move_vec.normalized() * speed * delta
			play_anim(1)
		else:
			play_anim(0)
			var world = get_tree().get_current_scene()
			world.ask_question(self)
	else:
		play_anim(0)

func _on_detection_area_body_entered(body):
	if body.is_in_group("player"):
		player = body
		player_chase = true
func _on_detection_area_body_exited(body):
	if body == player:
		player = null
		player_chase = false

func update_direction(vec: Vector2):
	if vec == Vector2.ZERO:
		return
	if abs(vec.x) > abs(vec.y):
		current_dir = "right" if vec.x > 0 else "left"
	else:
		current_dir = "down" if vec.y > 0 else "up"

func play_anim(movement):
	var anim = $AnimatedSprite2D
	match current_dir:
		"right":
			anim.flip_h = false
			anim.play("side_walk" if movement == 1 else "side_idle")
		"left":
			anim.flip_h = true
			anim.play("side_walk" if movement == 1 else "side_idle")
		"down":
			anim.flip_h = false
			anim.play("down_walk" if movement == 1 else "down_idle")
		"up":
			anim.flip_h = false
			anim.play("up_walk" if movement == 1 else "up_idle")
		_:
			anim.play("down_idle")

func check_all_enemies_defeated():
	if get_tree().get_nodes_in_group("enemy").size() == 0:
		print("Enemy defeated! You win!")
		$"/root/World/TimerLabel".text = "YOU WIN"
		
		# Optional: disable player/enemy scripts instead of pausing the whole tree
		var player_node = get_tree().get_nodes_in_group("player")[0]
		player_node.set_process(false)  # stop player movement
		set_process(false)               # stop this enemy
