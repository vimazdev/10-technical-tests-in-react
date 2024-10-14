export const TodoList = ({ message, count }) => {

    const task = message;
    const id = count++

    if (task === "") {
        return false
    } else {
        const x = {
            "id": id,
            "label": "Task",
            "message": task,
        }

        return x;
    }
}

export default TodoList;