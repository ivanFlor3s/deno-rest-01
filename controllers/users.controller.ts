import { MyContext } from '../interfaces/my-context.ts';
import { prismaClient } from '../core/cliente.ts';
import { ResponseAm } from '../interfaces/response-am.ts';
import { User } from '../generated/client/deno/index.d.ts';
import { Status } from 'https://deno.land/std@0.152.0/http/http_status.ts';

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