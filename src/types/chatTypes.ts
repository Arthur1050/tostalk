export type Message = {
    msg: string,
    date: string,
    sender: string,
    receiver: string
    id: string
    chanel: string
}

export type Chanel = {
    type: "GROUP"|"FRIEND"
    title: string
    profile: string
    socketId: string
    msgs: Message[] | null
}

export type NotifyMsg = {
    username: string
    msg: string
} 