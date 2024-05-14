


function withForOf() {

    for (const coder of coders) {

        tbody.innerHTML += `
    
    
    
            <tr>
    
                <th scope="row">${coder.id}</th>
    
                <td>${coder.name}</td>
    
                <td>${coder.lastName}</td>
    
                <td>${coder.email}</td>
                
              
                
                
            </tr>
    
        `

    }
}



function withForIn() {
    for (const key in coders) {
        const coder = coders[key]
        tbody.innerHTML += `
    
            <tr>
                <th scope="row">${coder.id}</th>
                <td>${coder.name}</td>
                <td>${coder.lastName}</td>
                <td>${coder.email}</td>
            </tr>
        `
    }
}

function withFor() {
    for (let i = 0; i < coders.length; i++) {
        tbody.innerHTML += `
    
            <tr>
                <th scope="row">${coders[i].id}</th>
                <td>${coders[i].name}</td>
                <td>${coders[i].lastName}</td>
                <td>${coders[i].email}</td>
            </tr>
        `
    }
}


//withForEach 
export function index(coders, tbody) {
    tbody.innerHTML = ``

    coders.forEach(coder => {

        tbody.innerHTML += `
    
            <tr>
                <th scope="row">${coder.id}</th>
                <td>${coder.name}</td>
                <td>${coder.lastName}</td>
                <td>${coder.email}</td>
                <td>
                <button type="button" data-id= ${coder.id} class="btn btn-primary">details</button>
                <button type="button" data-id= ${coder.id} class="btn btn-warning">edit</button>
                <button type="button" data-id= ${coder.id} class="btn btn-danger">delete</button>
               </td>
            </tr>
        `
    })
}

export function create(nameForm, lastNameForm, emailForm, coders) {
    const newCoder = {
        id: Date.now(),
        name: nameForm.value,
        lastName: lastNameForm.value,
        email: emailForm.value
    }

    coders.push(newCoder) //agrega el arreglo newcoder a la base de datos
}


export function deleteId(coders, idParaEliminar) {
    
 

    coders.forEach((coder, index) => {
        if (coder.id == idParaEliminar){
            coders.splice(index, 1)
        }
})
}