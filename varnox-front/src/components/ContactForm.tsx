"use client"
import { useState } from 'react'

export default function ContactForm() {
  const [state, setState] = useState({ name:'', email:'', phone:'', company:'', type:'', budget:'', referral:'', message:'' })
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Sin backend: solo simular éxito
    setTimeout(() => {
      setResult('Mensaje enviado. (Demo sin backend)')
      setSending(false)
      setState({ name:'', email:'', phone:'', company:'', type:'', budget:'', referral:'', message:'' })
    }, 800)
  }

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input className="varnox-input" placeholder="Nombre" value={state.name} onChange={e=>setState({...state,name:e.target.value})} />
          <input className="varnox-input" placeholder="Email" value={state.email} onChange={e=>setState({...state,email:e.target.value})} />
          <input className="varnox-input" placeholder="Teléfono" value={state.phone} onChange={e=>setState({...state,phone:e.target.value})} />
          <input className="varnox-input" placeholder="Empresa" value={state.company} onChange={e=>setState({...state,company:e.target.value})} />
          <textarea className="varnox-textarea" placeholder="Mensaje" value={state.message} onChange={e=>setState({...state,message:e.target.value})} />
          <button type="submit" disabled={sending} className="px-6 py-3 rounded bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50">
            {sending ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
        {result && <p className="text-green-600 mt-3">{result}</p>}
      </div>
    </section>
  )
}
