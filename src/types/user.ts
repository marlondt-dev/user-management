export interface User {
    name: string
    lastName: string
    birthDate: string 
}

export interface userWithAge extends User {
    age: number
    fullName: string
}