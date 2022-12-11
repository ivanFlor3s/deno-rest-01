import { Application, isHttpError, Status } from 'https://deno.land/x/oak/mod.ts';
import { routes } from './routes/app.routes.ts';
import { ResponseAm } from './interfaces/response-am.ts';

const app = new Application();

const port = 8000;
/*
app.use(async (context, next) => {
	// console.log('Pasa una consulta', { context });
	try {
		await next();
	} catch (error) {
		console.log('Exception catched');
        let msge: string =''
        if(isHttpError(error)){
            context.response.status = error.status
            msge ='Couldnt catch HTTP exception'
            switch(error.status){
                case Status.NotFound:
                    msge = 'Not found exception'
            }
        } else {
            console.log({error})
            msge = 'Unkown exception'
        }
        context.response.body = {
            message: msge,
            error,
         } as Partial<ResponseAm<void>>
	}
});*/
  app.use(routes.routes())
  app.use(routes.allowedMethods());

  app.addEventListener("error", (evt) => {
    // Will log the thrown error to the console.
    console.log(evt.error);
  });



console.log('Server running on ' + port);
await app.listen({ port });
