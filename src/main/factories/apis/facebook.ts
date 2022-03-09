import { FacebookApi } from '@/infra/apis'
import { } from '@/main/factories/http'
import { env } from '@/main/config/env'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-client'

export const makeFacebookApi = (): FacebookApi => {
  return new FacebookApi(
    makeAxiosHttpClient(),
    env.facebookApi.clientId,
    env.facebookApi.clientSecret
  )
}
