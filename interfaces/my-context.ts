import {Response, Request} from 'https://deno.land/x/oak/mod.ts'

export interface MyContext{
    response: Response
    request: Request
}