import * as api from "../api";
export const readTodos = async () => {
    try {
        const resp = await api.readTodos();
        return resp.data;
    } catch (error) {
        console.log(error.message);
    }
}

export const readTodosPromise = async () => {
    return api.readTodos()
        .then((resp) => {
            return resp.data;
        })
        .catch(error => console.log(error.message));
}

export const createTodos = async (todo) => {
    try {
        const {data} = await api.createTodo(todo);
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

/**
 * o qu eh:
 * - crud
 * - REST
 * - Promise
 * - async await
 */
