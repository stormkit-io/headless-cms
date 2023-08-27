import http from 'http'
import { readBody } from '~/lib/read-body'

interface LoginRequest {
  username: string
  password: string
}

export default async (req: http.IncomingMessage, res: http.ServerResponse) => {
  let body: LoginRequest
  try {
    body = await readBody<LoginRequest>(req)
  } catch (e: any) {
    res.write(
      JSON.stringify({ error: e?.message || 'Unable to parse request body.' }),
    )
    res.end()
    return
  }

  if (
    body.username === process.env.ADMIN_USERNAME &&
    body.password === process.env.ADMIN_PASSWORD
  ) {
    res.write(JSON.stringify({ success: true }))
  } else {
    res.statusCode = 401
    res.write(
      JSON.stringify({ success: false, message: 'Invalid credentials' }),
    )
  }
  res.end()
}
