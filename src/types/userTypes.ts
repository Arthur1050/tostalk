export type Status = 'online' | 'offline' | 'ocupado'

export type User = {
    username: string
    profile: string
    friends: Friend[]
}

export type UserStatus = {
    username: string
    status: Status
    socketId: string
}

export type Friend = {
    username: string
    profile: string
    status: Status
    socketId?: string
}