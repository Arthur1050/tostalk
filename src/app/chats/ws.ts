'use client'
import { io } from "socket.io-client";

export const socket = io('http://localhost:3001', {
    reconnectionDelay: 10000, // defaults to 1000
    reconnectionDelayMax: 10000, // defaults to 5000
    autoConnect: false
});

socket.on('connect', () => {
    console.log(socket.id)
    console.log("recovered?", socket.recovered);

    socket.emit('user-status', {status: 'online'})
})

socket.onAny((event, ...args) => {
    console.log(event, args);
});