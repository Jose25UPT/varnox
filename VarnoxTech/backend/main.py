
from telegram_utils import send_telegram_notification
from fastapi import FastAPI, Form, UploadFile, File
from fastapi.responses import JSONResponse

import os

app = FastAPI(title="VARNOX Contact API", version="1.0.0", description="Simple contact form API")

from fastapi import Request

@app.post("/api/public/contact/submit")
async def submit_contact_form(request: Request):
    form = await request.form()
    # Permitir ambos nombres (español e inglés)
    name = form.get("name")
    email = form.get("email")
    telefono = form.get("telefono") or form.get("phone")
    empresa = form.get("empresa") or form.get("company")
    tipo = form.get("tipo") or form.get("type")
    presupuesto = form.get("presupuesto") or form.get("budget")
    referencia = form.get("referencia") or form.get("referral")
    mensaje = form.get("mensaje") or form.get("message")
    archivo = form.get("archivo") or form.get("file")

    file_path = None
    if archivo and hasattr(archivo, "filename") and archivo.filename:
        file_path = f"/tmp/{archivo.filename}"
        with open(file_path, 'wb') as f:
            content = await archivo.read()
            f.write(content)
    send_telegram_notification(
        name,
        email,
        telefono,
        empresa,
        tipo,
        presupuesto,
        referencia,
        mensaje,
        file_path if file_path else None
    )
    return {"success": True, "message": "Mensaje enviado a Telegram"}

# Endpoint de healthcheck para Docker
@app.get("/health")
async def health():
    return JSONResponse(content={"status": "ok"})
