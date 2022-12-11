import { MyContext } from '../interfaces/my-context.ts';
import { prismaClient } from '../core/cliente.ts';
import { ResponseAm } from '../interfaces/response-am.ts';
import { User } from '../generated/client/deno/index.d.ts';
import { Status } from 'https://deno.land/std@0.152.0/http/http_status.ts';
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import {isEmail} from "https://deno.land/x/validasaur/mod.ts"

export const login = async ({response}:MyContext)=>{  
    console.log('login auth')
    response.body = {
        message:'hola creo login'
    }
}
export const createAccount = async({response,request}:MyContext) =>{
    console.log('intento crear cuenta');
    response.body = {
        message:'hola creo cuenta'
    }
}

export const register = async ({response, request}:MyContext) =>{

    const {email, password} = await request.body().value
    
    const hashPassword = await bcrypt.hash(password)

    const createdUser = await prismaClient.user.create({
        data:{
            email,
            hash: hashPassword
        }
    })

    response.status = Status.Accepted
    response.body = {
        createdUser
    }

}