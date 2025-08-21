import requests
import os

# Configura tu token de bot y chat_id aquí o usa variables de entorno
TELEGRAM_BOT_TOKEN = "8128583538:AAHy2heWIEG3MIlFhERAiMbITZc98wSK5uo"
TELEGRAM_CHAT_ID = "1542055313"


def send_telegram_notification(nombre, mensaje):
    try:
        text = f"Nuevo mensaje de {nombre}: {mensaje}"
        url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
        data = {
            "chat_id": TELEGRAM_CHAT_ID,
            "text": text
        }
        response = requests.post(url, data=data)
        if response.status_code == 200:
            print("Mensaje enviado a Telegram")
        else:
            print(f"Error enviando a Telegram: {response.text}")
    except Exception as e:
        print(f"Error enviando a Telegram: {e}")
