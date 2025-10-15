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

  // Verificar se a API key está configurada
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY não está configurada');
    return res.status(500).json({ message: 'Configuração de email não encontrada' });
  }

  try {
    const data = await resend.emails.send({
      from: 'contato@patrimoniosemfronteiras-br.com',
      to: ['victorh.pedr@gmail.com'],
      subject: `Novo contato: ${nome}`,
      html: `
        <div style="font-family: 'Inter', 'Gellix', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f7f7;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 20px; border-radius: 15px 15px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">
                Patrimônios Sem Fronteiras
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px;">
                Consultoria Imobiliária
              </p>
            </div>
          </div>

          <!-- Conteúdo principal -->
          <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 15px 15px; box-shadow: 0 4px 32px rgba(0,0,0,0.07);">
            <div style="border-left: 4px solid #f59e0b; padding-left: 20px; margin-bottom: 30px;">
              <h2 style="color: #100f30; margin: 0 0 10px 0; font-size: 22px; font-weight: 600;">
                Novo contato recebido
              </h2>
              <p style="color: #4b5563; margin: 0; font-size: 14px;">
                Recebido em ${new Date().toLocaleString('pt-BR')}
              </p>
            </div>
            
            <!-- Informações do contato -->
            <div style="background: #f3f4f9; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
              <div style="display: grid; gap: 15px;">
                <div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <div style="width: 8px; height: 8px; background: #f59e0b; border-radius: 50%; margin-right: 12px;"></div>
                  <strong style="color: #100f30; font-weight: 600; min-width: 80px; font-size: 14px;">Nome:</strong>
                  <span style="color: #374151; font-size: 14px; margin-left: 10px;">${nome}</span>
                </div>
                
                <div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <div style="width: 8px; height: 8px; background: #f59e0b; border-radius: 50%; margin-right: 12px;"></div>
                  <strong style="color: #100f30; font-weight: 600; min-width: 80px; font-size: 14px;">Email:</strong>
                  <span style="color: #374151; font-size: 14px; margin-left: 10px;">${email}</span>
                </div>
                
                <div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <div style="width: 8px; height: 8px; background: #f59e0b; border-radius: 50%; margin-right: 12px;"></div>
                  <strong style="color: #100f30; font-weight: 600; min-width: 80px; font-size: 14px;">WhatsApp:</strong>
                  <span style="color: #374151; font-size: 14px; margin-left: 10px;">${whatsapp}</span>
                </div>
                
                <div style="display: flex; align-items: center; padding: 12px 0;">
                  <div style="width: 8px; height: 8px; background: #f59e0b; border-radius: 50%; margin-right: 12px;"></div>
                  <strong style="color: #100f30; font-weight: 600; min-width: 80px; font-size: 14px;">Interesse:</strong>
                  <span style="color: #374151; font-size: 14px; margin-left: 10px;">${interesse}</span>
                </div>
              </div>
            </div>
            
            <!-- Call to action -->
            <div style="text-align: center; padding: 25px 0; border-top: 2px solid #f3f4f9;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3); transition: all 0.3s ease;">
                Responder por Email
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="text-align: center; margin-top: 30px; padding: 20px; color: #6b7280; font-size: 12px; line-height: 1.5;">
            <p style="margin: 0 0 10px 0;">
              <strong style="color: #100f30;">Patrimônios Sem Fronteiras</strong> - Consultoria Imobiliária
            </p>
            <p style="margin: 0; opacity: 0.8;">
              Este email foi gerado automaticamente pelo formulário de contato do site
            </p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ 
      message: 'E-mail enviado com sucesso', 
      data,
      redirect: '/obrigado'
    });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    
    // Log mais detalhado do erro
    if (error instanceof Error) {
      console.error('Mensagem do erro:', error.message);
      console.error('Stack trace:', error.stack);
    }
    
    return res.status(500).json({ 
      message: 'Erro interno do servidor',
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}