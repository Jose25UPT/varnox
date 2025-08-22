
from telegram_utils import send_telegram_notification
from fastapi import FastAPI, Form, UploadFile, File
from fastapi.responses import JSONResponse

import os

app = FastAPI(title="VARNOX Contact API", version="1.0.0", description="Simple contact form API")

@app.post("/api/public/contact/submit")
async def submit_contact_form(
    name: str = Form(...),
    email: str = Form(...),
    telefono: str = Form(...),
    empresa: str = Form(...),
    tipo: str = Form(...),
    presupuesto: str = Form(...),
    referencia: str = Form(...),
    mensaje: str = Form(...),
    archivo: UploadFile = File(None)
):
    file_path = None
    if archivo and archivo.filename:
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
