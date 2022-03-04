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
    const fbUser = await sut.loadUser({ token: 'EAAJMpZB01HvsBAOLxwXd4ZAB9eOEAXDi1obcyrDCUSvFKgWtv9fGInQKzq78X71Brok9GRIAhXmObyLZBN5QV4jpmH68TI56stNaAB2N0QTcjDOvCZCkNsJLvxiXukSfjpGgL1Fh0fWUluzvMjAncWaWtuHj96v7CZBMy2UUoM2mmg4IKRsDZCyZATXyEe8mmqwvLIGMeZAv7ASVUqWSRAic' })

    expect(fbUser).toEqual({
      facebookId: '107248528574957',
      email: 'node_opitjna_test@tfbnw.net',
      name: 'Node Test'
    })
  })

  it('should return undefined if token is invalid', async () => {
    const fbUser = await sut.loadUser({ token: 'invalid' })

    expect(fbUser).toBeUndefined()
  })
})
