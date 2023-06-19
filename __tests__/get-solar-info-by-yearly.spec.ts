import { describe, it, expect } from 'vitest'

import api from '../src/services/api'

describe('Solar Info Yearly - E2E', () => {
  it('should be able to get solar information by yearly', async () => {
    const response = await api.get('/test-2023?dataType=yearly')

    expect(response.status).toEqual(200)
  })
})
