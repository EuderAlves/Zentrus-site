# Zentrus Tecnologia

Site institucional com React + Vite, backend local em Express e API serverless pronta para Vercel.

## Estrutura

```txt
api/       Funcoes serverless usadas pela Vercel
frontend/  Site React + Vite
backend/   API Express para desenvolvimento local
```

## Rodar localmente

```bash
npm install
npm run dev
```

Frontend: `http://localhost:5173`

Backend local: `http://localhost:3333`

## Variaveis de ambiente

Crie os arquivos locais:

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

No `backend/.env`:

```env
OWNER_EMAIL=euder.alv@gmail.com
RESEND_API_KEY=sua_chave_do_resend
RESEND_FROM_EMAIL=Zentrus Tecnologia <contato@seudominio.com>
RESEND_SEND_CUSTOMER_CONFIRMATION=false
```

No `frontend/.env`, durante o desenvolvimento local:

```env
VITE_API_URL=http://localhost:3333
VITE_WHATSAPP_NUMBER=5511999999999
```

Na Vercel, deixe `VITE_API_URL` vazio ou nao crie essa variavel. O frontend usara `/api/orcamentos` no mesmo dominio.

Enquanto estiver usando `onboarding@resend.dev`, mantenha `RESEND_SEND_CUSTOMER_CONFIRMATION=false`.
Depois que verificar um dominio proprio no Resend, troque `RESEND_FROM_EMAIL` para um email do dominio e use `RESEND_SEND_CUSTOMER_CONFIRMATION=true`.

## Deploy na Vercel

O arquivo `vercel.json` na raiz define:

```txt
buildCommand: npm run build
outputDirectory: frontend/dist
```

As funcoes em `api/` ficam disponiveis como:

```txt
/api/health
/api/orcamentos
```
