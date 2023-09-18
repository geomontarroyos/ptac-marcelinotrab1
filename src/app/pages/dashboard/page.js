import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import Listar from "@/app/componentes/listar";
import "../../global.css"

export default async function Dashboard() {

    const users = await getUsers();
    return (
        <div> 


<h1 className="h1">Usuários cadastrados </h1>

<div className="body">

            <Suspense fallback={ <p className="carrega"> Carregando pagina...</p> }>
                <Listar className="body" users={users}/>
            </Suspense>

            <button className="botaoalt"><a href="/pages/alterar">Alterar</a></button>
                <button className="botaoreg"><a href="/pages/registrar">Registrar</a></button>
</div>
        </div>
    );
};