import {createStore} from "redux"

const initialState = {
    jugadores:[{
        id:1,
        nombre:"Pikachu",
        foto: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },{
        id:2,
        nombre:"squirtle",
        foto:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png"
    }],
    titulares:[],
    suplentes:[]
}

const reducerEntrenador = (state = initialState,action)=>{
    
    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j=> j.id !== action.jugador.id)
        }
        
    }

    if ( action.type === "AGREGAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j=> j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.filter(j=> j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if ( action.type === "QUITAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.filter(j=> j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }


    //minuto 39 https://www.youtube.com/watch?v=HhtqSwUgP1U&ab_channel=EDteam
    return state
}


export default createStore(reducerEntrenador)