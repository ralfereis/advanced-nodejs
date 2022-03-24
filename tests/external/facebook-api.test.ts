import { FacebookApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'

describe('Facebook Api Integration Tests', () => {
  let axiosClient: AxiosHttpClient
  let sut: FacebookApi

  beforeEach(() => {
    axiosClient = new AxiosHttpClient()
    sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )
  })

  it('should return a Facebook User if token is valid', async () => {
    const fbUser = await sut.loadUser({ token: 'EAAJMpZB01HvsBAKUIKntx3I5gCRYfp5L8el1PuKrVMonz0P61i6HfiJ0JaR6YFZAA66EYAI9YXT4FUkTNqdjjW3FyHSNn7gIJ8VWyZAH47Uml32pIXNv06zNWbU0TYs0qQ1ko434UhoxCkG9ABqogf1q4TfOBjvlnDYIkAC7ow1KvagEemCZApuFMBgTkTnPgSmOEZBDBwQZDZD' })

    expect(fbUser).toEqual({
      facebookId: '111972991433796',
      email: 'dkbobrcwny_1647374774@tfbnw.net',
      name: 'John Alghfcbhggbcj Zamorestein'
    })
  })

  it('should return undefined if token is invalid', async () => {
    const fbUser = await sut.loadUser({ token: 'invalid' })

    expect(fbUser).toBeUndefined()
  })
})
