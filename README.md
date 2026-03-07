# Instituto Aliança e Renovação (IAR)

Website institucional em **Next.js + Tailwind CSS + Decap CMS**, preparado para hospedagem na **Vercel**, conteúdo em **Português (Brasil)**, SEO técnico, analytics e área administrativa em `/admin`.

## Instalação local

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deploy na Vercel

1. Crie um repositório GitHub.
2. Faça o push do projeto.
3. Importe o repositório na Vercel.
4. Configure as variáveis de ambiente.
5. Faça o deploy.

## Domínio no Registro.br

Apex:
- Tipo A
- Nome @
- Valor 76.76.21.21

WWW:
- Tipo CNAME
- Nome www
- Valor cname.vercel-dns-0.com

## Decap CMS

O painel fica em `/admin`.
Para produção com GitHub, configure `repo`, `branch` e `base_url` em `public/admin/config.yml`.
