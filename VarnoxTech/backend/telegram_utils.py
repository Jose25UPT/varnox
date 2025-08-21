import requests
import os

# Configura tu token de bot y chat_id aquí o usa variables de entorno
TELEGRAM_BOT_TOKEN = "8128583538:AAHy2heWIEG3MIlFhERAiMbITZc98wSK5uo"
TELEGRAM_CHAT_ID = "1542055313"


def send_telegram_notification(nombre, email, telefono, empresa, tipo, presupuesto, referencia, mensaje, archivo=None):
    try:
        text = (
            f"Nuevo contacto recibido:\n"
            f"Nombre: {nombre}\n"
            f"Email: {email}\n"
            f"Teléfono: {telefono}\n"
            f"Empresa: {empresa}\n"
            f"Tipo: {tipo}\n"
            f"Presupuesto: {presupuesto}\n"
            f"Referencia: {referencia}\n"
            f"Mensaje: {mensaje}\n"
        )
        # Enviar mensaje de texto primero
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

        # Si hay archivo, enviarlo como documento
        if archivo:
            try:
                with open(archivo, "rb") as f:
                    files = {"document": f}
                    doc_url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendDocument"
                    doc_data = {"chat_id": TELEGRAM_CHAT_ID}
                    doc_response = requests.post(doc_url, data=doc_data, files=files)
                    if doc_response.status_code == 200:
                        print("Archivo enviado a Telegram")
                    else:
                        print(f"Error enviando archivo a Telegram: {doc_response.text}")
            except Exception as e:
                print(f"Error abriendo/enviando archivo a Telegram: {e}")
    except Exception as e:
        print(f"Error enviando a Telegram: {e}")
