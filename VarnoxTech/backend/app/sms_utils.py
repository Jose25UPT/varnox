# Instala la librería Twilio para enviar SMS
from twilio.rest import Client
import os

# Configura tus credenciales de Twilio aquí o usa variables de entorno
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID", "TU_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN", "TU_AUTH_TOKEN")
TWILIO_PHONE_FROM = os.getenv("TWILIO_PHONE_FROM", "+1234567890")  # Número de Twilio
TWILIO_PHONE_TO = os.getenv("TWILIO_PHONE_TO", "+51999999999")    # Número destino


def send_sms_notification(nombre, mensaje):
    try:
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        body = f"Nuevo mensaje de {nombre}: {mensaje}"
        message = client.messages.create(
            body=body,
            from_=TWILIO_PHONE_FROM,
            to=TWILIO_PHONE_TO
        )
        print(f"SMS enviado: {message.sid}")
    except Exception as e:
        print(f"Error enviando SMS: {e}")
