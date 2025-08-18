import { useState, Card, InputText, InputTextarea, Button, FloatLabel } from '../lib'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, message })
    // Aquí puedes manejar el envío del formulario
  }

  return (
    <div className="grid">
      <div className="col-12 md:col-8 md:col-offset-2">
        <Card title="Contacto" className="m-2">
          <p className="text-lg mb-4">
            ¿Tienes preguntas sobre React? ¡Contáctanos!
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <div className="col-12 md:col-6">
                <FloatLabel className="w-full mb-4">
                  <InputText 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                  />
                  <label htmlFor="name">Nombre</label>
                </FloatLabel>
              </div>
              
              <div className="col-12 md:col-6">
                <FloatLabel className="w-full mb-4">
                  <InputText 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                  <label htmlFor="email">Email</label>
                </FloatLabel>
              </div>
              
              <div className="col-12">
                <FloatLabel className="w-full mb-4">
                  <InputTextarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full"
                  />
                  <label htmlFor="message">Mensaje</label>
                </FloatLabel>
              </div>
              
              <div className="col-12">
                <Button 
                  type="submit"
                  label="Enviar"
                  icon="pi pi-send"
                  className="p-button-primary"
                />
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default Contact