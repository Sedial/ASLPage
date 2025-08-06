import type { APIRoute } from 'astro';

// Tipo para datos del formulario de contacto
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Obtener datos del formulario desde la petición
    const formData = await request.formData();
    
    // Extraer campos del formulario
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    
    // Validación básica
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Por favor complete todos los campos requeridos',
        }),
        { status: 400 }
      );
    }
    
    // Crear objeto de datos de contacto
    const contactData: ContactFormData = {
      name,
      email,
      subject,
      message,
    };
    
    // Aquí normalmente:
    // 1. Enviar un email usando un servicio como SendGrid, Mailgun, etc.
    // 2. Almacenar el contacto en una base de datos
    // 3. Integrar con un CRM
    
    // Por ahora, sólo registramos los datos (en una app real, reemplazar con lógica actual)
    console.log('Envío de formulario de contacto:', contactData);
    
    // En una aplicación real, añadirías código aquí para enviar el email o almacenar en una base de datos
    // Por ejemplo:
    // await enviarEmail(contactData); 
    
    // Devolver respuesta de éxito
    return new Response(
      JSON.stringify({
        success: true,
        message: '¡Gracias por tu mensaje! Nos pondremos en contacto pronto.',
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar el formulario de contacto:', error);
    
    // Devolver respuesta de error
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Ocurrió un error al procesar tu solicitud. Por favor intenta de nuevo más tarde.',
      }),
      { status: 500 }
    );
  }
};
