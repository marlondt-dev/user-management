export class ApiError extends Error {
  status?: number
  constructor(message: string, status?: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export class FetchUsersError extends ApiError {
  constructor(status?: number) {
    super('Failed to fetch users', status)
    this.name = 'FetchUsersError'
  }
}

export class CreateUserError extends ApiError {
  constructor(status?: number) {
    super('Failed to create user', status)
    this.name = 'CreateUserError'
  }
}
