import axios from 'axios'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  type: string
  budget: string
  referral: string
  message: string
  file?: File
}

export interface ContactResponse {
  success: boolean
  message: string
  contact_id?: number
}

class ContactService {
  private readonly baseURL = this.getApiUrl()
  
  private getApiUrl(): string {
    // Siempre usar la variable de entorno VITE_API_URL (definida en Docker Compose para producción)
    // Esto asegura que nunca se use localhost ni http://backend:8000
    return (import.meta as any).env?.VITE_API_URL || import.meta.env.VITE_API_URL || '';
  }

  async submitContactForm(data: ContactFormData): Promise<ContactResponse> {
    try {
      const formData = new FormData()
      
      // Agregar todos los campos del formulario con los nombres que espera el backend
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('telefono', data.phone)
      formData.append('empresa', data.company)
      formData.append('tipo', data.type)
      formData.append('presupuesto', data.budget)
      formData.append('referencia', data.referral)
      formData.append('mensaje', data.message)

      // Agregar archivo si existe
      if (data.file) {
        formData.append('archivo', data.file)
      }

      const response = await axios.post(`${this.baseURL}/api/public/contact/submit`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000
      })

      return {
        success: true,
        message: response.data.message || 'Mensaje enviado exitosamente',
        contact_id: response.data.contact_id
      }
    } catch (error) {
      console.error('Error al enviar formulario de contacto:', error)
      
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.detail || 
                           error.response?.data?.message || 
                           'Error al enviar el mensaje. Por favor intenta de nuevo.'
        
        return {
          success: false,
          message: errorMessage
        }
      }
      
      return {
        success: false,
        message: 'Error inesperado. Por favor intenta de nuevo más tarde.'
      }
    }
  }
}

export const contactService = new ContactService()
