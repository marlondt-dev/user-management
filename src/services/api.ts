import type { User } from '@/types/user'
import { FetchUsersError, CreateUserError } from '@/errors/errors'

const API_URL = 'http://localhost:3001/api/users/1'

export const userService = {
  async getUsers(): Promise<User[]> {
    const response = await fetch(`${API_URL}/users`)
    if (!response.ok) {
      throw new FetchUsersError(response.status)
    }
    return response.json()
  },

  async createUser(user: User): Promise<void> {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    if (!response.ok) {
      throw new CreateUserError(response.status)
    }
  },
}
