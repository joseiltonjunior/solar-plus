import { describe, it, expect } from 'vitest'

import api from '../src/services/api'

describe('Solar Info Hourly - E2E', () => {
  it('should be able to get solar information by hourly', async () => {
    const response = await api.get('/test-2023?dataType=hourly')

    expect(response.status).toEqual(200)
  })
})
