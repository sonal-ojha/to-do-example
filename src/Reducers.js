export const TodoReducer = ( state = {
    todo : ["Def1" , "Def2"]
} , action ) => {
    switch(action.type){
        case "Add Todo" : 
        state.todo.push(action.list);
        return Object.assign( {} , state );
        case "Delete Todo": 
        state.todo.splice(action.item, 1);
        return Object.assign( {} , state );        
        default: return state;
    }
}