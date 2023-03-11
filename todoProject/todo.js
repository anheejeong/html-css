let cmd = prompt('What would you like to do?');
const todos = ['씻기', '수업가기'];
while (cmd !== 'quit') {
    if (cmd === 'list') {
        console.log('***********');
        for (let i = 0; i < todos.length; i++)
            console.log(`${i} : ${todos[i]}`)
        console.log('***********');
    } else if (cmd === 'new') {
        const newTodo = prompt('what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (cmd === 'delete') {
        const index = prompt('enter an index to delete');
        console.log(index);
        todos.splice(parseInt(index), 1);
    }
    cmd = prompt('What would you like to do?');
}