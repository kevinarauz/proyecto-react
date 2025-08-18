import { useState } from 'shared/lib'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    // Aquí se manejaría el envío real
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return {
    formData,
    updateField,
    handleSubmit,
    resetForm
  }
}