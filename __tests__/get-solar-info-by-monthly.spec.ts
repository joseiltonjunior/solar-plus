import { describe, it, expect } from 'vitest'

import api from '../src/services/api'

describe('Solar Info Monthly - E2E', () => {
  it('should be able to get solar information by monthly', async () => {
    const response = await api.get('/test-2023?dataType=monthly')

    expect(response.status).toEqual(200)
  })
})
