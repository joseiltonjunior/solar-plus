import { describe, it, expect } from 'vitest'

import api from '../src/services/api'

describe('Solar Info Daily - E2E', () => {
  it('should be able to get solar information by daily', async () => {
    const response = await api.get('/test-2023?dataType=daily')

    expect(response.status).toEqual(200)
  })
})
