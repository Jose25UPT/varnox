from telegram_utils import send_telegram_notification
from fastapi import FastAPI, Form, UploadFile, File
app = FastAPI(title="VARNOX Contact API", version="1.0.0", description="Simple contact form API")
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

# Serve uploaded files
@app.get("/uploads/{filename}")
async def get_uploaded_file(filename: str):
    """Serve uploaded files"""
    file_path = f"uploads/{filename}"
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="Archivo no encontrado")
    
        return {"contacts": contact_list}
        raise HTTPException(status_code=500, detail="Error al obtener contactos")

    from telegram_utils import send_telegram_notification
    from fastapi import FastAPI, Form

    app = FastAPI(title="VARNOX Contact API", version="1.0.0", description="Simple contact form API")

    @app.post("/api/public/contact/submit")
    async def submit_contact_form(
        name: str = Form(...),
        message: str = Form(...)
    ):
        send_telegram_notification(name, message)
        return {"success": True, "message": "Mensaje enviado a Telegram"}
        # Convert to dict format
