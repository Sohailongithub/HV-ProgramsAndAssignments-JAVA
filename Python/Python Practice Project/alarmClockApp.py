import time
import winsound

def set_alarm(alarm_time, sound_file):
    while True:
        current_time = time.strftime("%H:%M:%S")
        if current_time == alarm_time:
            play_sound(sound_file)
            break
        time.sleep(1)

def play_sound(sound_file):
    try:
        winsound.PlaySound(sound_file, winsound.SND_FILENAME)
    except Exception as e:
        print(f"Error playing sound: {e}")

if __name__ == "__main__":
    print("Alarm Application")
    alarm_time = input("Enter the alarm time (HH:MM:SS format): ")
    sound_file = input("Enter the path to the sound file (e.g., alarm.wav): ")

    try:
        set_alarm(alarm_time, sound_file)
    except KeyboardInterrupt:
        print("\nAlarm application terminated.")
