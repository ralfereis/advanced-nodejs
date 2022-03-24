export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '647234076352251',
    clientSecret: process.env.FB_CLIENT_SECRET ?? '636b4ef49ed304f43f45ea6f63153db8'
  },
  port: process.env.PORT ?? 3333,
  jwtSecret: process.env.JWT_SECRET ?? '3jk24h32jk4h'
}
