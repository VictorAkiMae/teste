function salvador(){
    const inputAfazer = document.querySelectorAll('todo-input');
    const todosValores = [];

    inputAfazer.forEach(inputAfazer =>{
        todosValores.push(inputAfazer.value);
    })

    localStorage.setItem('inputAfazer'. JSON.stringfy(todosValores));
    alert('Beerus');
}

function carregar(){
    const todosValores = JSON.parse(localStorage.getItem('inputAfazer'));

    if (todosValores && todosValores.length > 0) {
        todosValores.forEach(valor => {
            adicionarCampo(valor); 
        });
    }
}