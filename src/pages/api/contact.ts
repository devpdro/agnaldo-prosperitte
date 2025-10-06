import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { nome, email, whatsapp, interesse } = req.body;

  if (!nome || !email || !whatsapp || !interesse) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
    const data = await resend.emails.send({
      from: 'contato@agnaldoprosperi.com.br',
      to: ['contato@agnaldoprosperi.com.br'],
      subject: `Novo contato: ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5E2CED;">Novo Contato Recebido</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Informações do Cliente</h3>
            
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp}</p>
            <p><strong>Interesse:</strong> ${interesse}</p>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Este e-mail foi enviado através do formulário de contato do site.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'E-mail enviado com sucesso', data });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}