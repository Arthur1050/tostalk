'use server'
import {cookies} from 'next/headers'

export async function apiReq(endpoint:string, body?:{}|FormData, method:'GET'|'POST' = 'GET', authorization = true):Promise<any> {
    const route = process.env.API_ROUTE;
    const token = authorization ? cookies().get('token') : '';

    const options:RequestInit = {
      method: method,
      headers: {
        'Authorization': token ? `Bearer ${token.value}`: '',
      },
      cache: 'no-store'
    }

    method == 'POST' && (options.body = body instanceof FormData ? body : JSON.stringify({...body}))
    && !(body instanceof FormData) && (options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })

    console.log(`${route + endpoint}`)
    console.log(options)
    console.log(body)

    const res = await fetch(`${route + endpoint}`, options);

    if(!res.ok) {
      console.error(res.status, res.statusText, await res.text())
      return;
    }
    
    return new Promise(resolve => {
      resolve(res.json())
    })
}

export async function saveCookie(key:string, value:string) {
  cookies().set(key, value);
}