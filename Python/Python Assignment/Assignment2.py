# the board game is played by two players.
# - Each player rolls a dice one after the other, and moves their game piece along the
# board according to the number rolled on the dice.
# - The objective of the game is to reach the finish line on step 30 before the other
# player.
# - If a player lands on a step where the other player is already standing, the latter player
# must move back to the start of the board and begin again. Also grants the Current
# player an additional move.
# - Rolling a 6 on the dice grants the Current player an additional move.
# - The game continues until one player reaches the finish line and wins the game.

import random

def dice(): 
    return random.randint(1,6)

def move_player(current_step, opponent_step, dice_roll):
    if opponent_step == current_step + dice_roll:
        print("Opponent caught! Moving opponent back to start")
        opponent_step = 0

    new_step = current_step + dice_roll
    return new_step, opponent_step


def play_game():
    player1 = 0
    player2 = 0
    finishLine = 30

    while player1 < finishLine and player2 < finishLine:
        dice_roll = dice()
        print("Player 1 rolled:", dice_roll)
        if dice_roll == 6:
            print("Player 1 gets an additional move!")
            dice_roll = dice()
            print("player 1 rolled again:", dice_roll)
        player1, player2 = move_player(player1, player2, dice_roll)
        print("Player 1 position: ", player1)

        if player1 > finishLine:
            print("Player 1 wins")
            break    

        dice_roll = dice()
        print("Player 2 rolled:",dice_roll)
        if dice_roll == 6:
            print("Player 2 gets an additional move!")
        dice_roll = dice()
        print("Player 2 rolled again:", dice_roll)
    
        player2, player1 = move_player(player2, player1, dice_roll)
        print("Player 2 position:", player2)

        if player2 >= finishLine:
            print("Player 2 wins")
            break

        if player1 >= finishLine and player2 >= finishLine:
            print("It's a tie!")
        elif player1 >= finishLine:
            print("Player 1 wins!")
        else:
            print("Player 2 wins!")  

play_game()

