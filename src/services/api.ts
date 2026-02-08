import type {User} from '@/types/user'

const API_URL = 'http://localhost:3001/api/users/1'

export const userService = {
    async getUsers(): Promise<User[]> {
        const response = await fetch(`${API_URL}/users`)
        if (!response.ok){
            throw new Error('Failed to get users')
        }
        return response.json()
    },

    async createUser(user: User): Promise<void> {
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type':'aplication/json'
            },
            body: JSON.stringify(user)
        })
        if(!response.ok) {
            throw new Error('Failed to create a new user')
        }
    }
}