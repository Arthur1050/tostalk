export type User = {
    username: string
    profile: string
    friends: Friend[]
}

export type UserStatus = {
    username: string
    status: 'online' | 'offline' | 'ocupado'
}

export type Friend = {
    username: string
    profile: string
    status: 'online' | 'offline' | 'ocupado'
}