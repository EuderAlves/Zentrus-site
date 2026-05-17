# Zentrus Tecnologia

Projeto com React + Vite no frontend e Node.js + Express no backend.

## Estrutura

```txt
frontend/  Site da Zentrus Tecnologia
backend/   API para receber orcamentos e enviar emails com Resend
```

## Rodar localmente

Instale as dependencias de cada parte:

```bash
npm install
npm install --prefix frontend
npm install --prefix backend
```

Crie os arquivos de ambiente:

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

Depois rode tudo junto:

```bash
npm run dev
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:3333`

## Configurar email

No arquivo `backend/.env`, preencha:

```env
RESEND_API_KEY=sua_chave_do_resend
RESEND_FROM_EMAIL=Zentrus Tecnologia <seu_email_ou_dominio_verificado>
OWNER_EMAIL=euder.alv@gmail.com
```

Sem `RESEND_API_KEY`, a API roda em modo local e simula o envio do email.

## Configurar WhatsApp

No arquivo `frontend/.env`, preencha o numero comercial no formato internacional, sem `+`:

```env
VITE_WHATSAPP_NUMBER=5511999999999
```

Se o numero ficar vazio, o site apenas confirma o envio por email.
