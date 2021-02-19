import { createStore } from "redux";

const initialState = {
    number  : 1,
    foods   : [
        {id:1, name: "tacos",   time: 5, photo: "https://cdn.pixabay.com/photo/2014/01/14/22/14/tacos-245241_960_720.jpg"},
        {id:2, name: "tortas", time: 10, photo: "https://cdn.pixabay.com/photo/2019/10/10/19/40/torta-4540403_960_720.jpg"},
        {id:3, name: "tamales", time: 40, photo:"https://cdn.pixabay.com/photo/2019/09/25/16/29/tamale-4504060_960_720.jpg"},
        {id:4, name: "pupusas", time: 5, photo: "https://media.istockphoto.com/photos/papusas-in-nice-mexican-restaurant-picture-id187691672?s=612x612"},
        {id:5, name: "beef",    time: 40, photo:"https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
        {id:6, name: "potato",   time: 5, photo: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
        {id:7, name: "orange juice", time: 10, photo: "https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    ],
    orders  : [],
    card    : [],
}

const reducerManager = (state = initialState, action) => {
    if(action.type === "ADD_FOOD"){
        return {
            ...state,
            card: state.card.concat(action.food),
            foods: state.foods.filter(food => food.id !== action.food.id)
        }
    }

    if(action.type === "REMOVE_FOOD"){
        return {
            ...state,
            card: state.card.filter(food => food.id !== action.food.id),
            foods: state.foods.concat(action.food)
        }
    }

    if(action.type === "SAVE_ORDER"){
        return {
            ...state,
            foods: state.foods.concat(action.card),
            number: state.number+1,
            orders:state.orders.concat({
                id: state.number,
                foods: action.card,
            }),
            card: action.card = []
        }   
    }
    return state
}


export default createStore(reducerManager);