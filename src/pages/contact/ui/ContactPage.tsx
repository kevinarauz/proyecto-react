import { Card } from 'shared/lib'
import { ContactForm } from 'features/contact/send-message'

function ContactPage() {
  return (
    <div className="grid">
      <div className="col-12 md:col-8 md:col-offset-2">
        <Card title="Contacto" className="m-2">
          <p className="text-lg mb-4">
            ¿Tienes preguntas sobre React? ¡Contáctanos!
          </p>
          
          <ContactForm />
        </Card>
      </div>
    </div>
  )
}

export default ContactPage