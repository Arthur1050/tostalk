export type Message = {
    msg: string,
    date: string,
    sender: string,
    receiver: string
    id: string
}

export type Chanel = {
    type: "GROUP"|"FRIEND"
    title: string
    profile: string

}