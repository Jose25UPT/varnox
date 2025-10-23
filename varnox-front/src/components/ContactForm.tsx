"use client"
import { useState } from 'react'
import Image from 'next/image'

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
    <section id="contact" className="py-16 bg-background-dark">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="VARNOX Logo" width={64} height={64} className="brightness-125" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">Contacto</h2>
          <p className="text-gray-400 mb-6">¿Listo para llevar tu proyecto al siguiente nivel?</p>

          {/* WhatsApp Contact */}
          <div className="mb-8">
            <a
              href="https://wa.me/51983307173"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="material-symbols-outlined mr-2">chat</span>
              Contactar por WhatsApp
            </a>
            <p className="text-sm text-gray-500 mt-2">+51 983 307 173</p>
          </div>
        </div>

        <div className="bg-black/20 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">O envíanos un mensaje</h3>
          <form onSubmit={onSubmit} className="space-y-4">
          <input className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none" placeholder="Nombre" value={state.name} onChange={e=>setState({...state,name:e.target.value})} />
          <input className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none" placeholder="Email" value={state.email} onChange={e=>setState({...state,email:e.target.value})} />
          <input className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none" placeholder="Teléfono" value={state.phone} onChange={e=>setState({...state,phone:e.target.value})} />
          <input className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none" placeholder="Empresa" value={state.company} onChange={e=>setState({...state,company:e.target.value})} />
          <textarea className="bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none w-full h-32 resize-none" placeholder="Mensaje" value={state.message} onChange={e=>setState({...state,message:e.target.value})} />
          <button type="submit" disabled={sending} className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/80 disabled:opacity-50 transition-colors">
            {sending ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
        {result && <p className="text-green-400 mt-3">{result}</p>}
        </div>
      </div>
    </section>
  )
}
