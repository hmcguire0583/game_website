extends Node2D

@export var time_limit := 60  # seconds
@onready var level_timer := $LevelTimer
@onready var timer_label := $TimerLabel
@onready var question_label := $QuestionLabel
@onready var answer_input := $AnswerInput

var current_enemy = null
var correct_answer = 0

func _ready():
	if level_timer:
		level_timer.wait_time = time_limit
		level_timer.one_shot = true
		level_timer.start()
		level_timer.timeout.connect(_on_time_out)
	else:
		push_error("LevelTimer node not found!")

	# Initialize the label
	if timer_label:
		timer_label.text = str(time_limit) + "s"

func _process(delta):
	if level_timer:
		timer_label.text = str(ceil(level_timer.time_left)) + "s"

func _on_time_out():
	print("Time's up! Going back to Main Menu!")
	# Optional: update the label
	if timer_label:
		timer_label.text = "GAME OVER"
	# Change scene to Main Menu
	get_tree().change_scene_to_file("res://main_menu.tscn")
	
func ask_question(enemy):
	current_enemy = enemy
	var a = randi() % 10 + 1
	var b = randi() % 10 + 1
	correct_answer = a + b
	question_label.text = "Solve: %d + %d =" % [a, b]
	answer_input.text = ""
	answer_input.editable = true
	answer_input.grab_focus()

func _on_AnswerInput_text_submitted(new_text):
	if int(new_text) == correct_answer and current_enemy:
		print("Correct! Enemy defeated.")
		current_enemy.queue_free()
		current_enemy.check_all_enemies_defeated()
	else:
		print("Wrong answer!")
	answer_input.editable = false
	question_label.text = ""
	current_enemy = null
