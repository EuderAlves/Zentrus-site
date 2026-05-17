import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import quoteRoutes from './routes/quotes.js'

const app = express()
const port = process.env.PORT || 3333
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }

      callback(new Error('Origem nao permitida pelo CORS.'))
    },
  }),
)

app.use(express.json({ limit: '1mb' }))

app.get('/health', (_request, response) => {
  response.json({
    ok: true,
    service: 'zentrus-api',
  })
})

app.use('/api/orcamentos', quoteRoutes)

app.use((_request, response) => {
  response.status(404).json({
    message: 'Rota nao encontrada.',
  })
})

app.use((error, _request, response, _next) => {
  console.error(error)

  response.status(500).json({
    message: 'Erro interno no servidor.',
  })
})

app.listen(port, () => {
  console.log(`API da Zentrus rodando em http://localhost:${port}`)
})
