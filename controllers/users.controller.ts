import { MyContext } from '../interfaces/my-context.ts';
import { prismaClient } from '../core/cliente.ts';
import { ResponseAm } from '../interfaces/response-am.ts';
import { User } from '../generated/client/deno/index.d.ts';
import { Status } from 'https://deno.land/std@0.152.0/http/http_status.ts';
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

export const listarUsuarios = async ({response}:MyContext)=>{    
    const users = await prismaClient.user.findMany()
    const res: Partial<ResponseAm<User[]>> = {
        message: 'Lista de usuarios',
        data: users,
    }
    response.status  = Status.OK
    response.body = res
}

export const getUser = ({response}:MyContext)=>{
    response.body = 'jadksdasjkdskjl'
}

export const login = async({request,response}: MyContext)=>{
    const {email, password} = await request.body().value

    const user = await prismaClient.user.findUnique({
        where:{
            email
        }
    })

    if(!user){
        response.status =  Status.NotFound
        response.body = { message: "No se encontro un usuario con ese email"}
    }
    else {
        const result = await bcrypt.compare(password, user.hash )
        if(!result){
            response.status =  Status.Unauthorized
            response.body = { message: "Contrasena invalida"}
        }else {
            response.status = Status.Accepted
            response.body = { message: "Login correcto", data: user}
            
        }
        
    }

}