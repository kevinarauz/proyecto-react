import { InputText, InputTextarea, Button, FloatLabel } from 'shared/lib'
import { useContactForm } from '../model/useContactForm'

function ContactForm() {
  const { formData, updateField, handleSubmit } = useContactForm()

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid">
        <div className="col-12 md:col-6">
          <FloatLabel className="w-full mb-4">
            <InputText 
              id="name"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
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
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="w-full"
            />
            <label htmlFor="email">Email</label>
          </FloatLabel>
        </div>
        
        <div className="col-12">
          <FloatLabel className="w-full mb-4">
            <InputTextarea 
              id="message"
              value={formData.message}
              onChange={(e) => updateField('message', e.target.value)}
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
  )
}

export default ContactForm