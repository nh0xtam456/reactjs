

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const a = document.getElementById("root");
axios.get(API_ENDPOINT);

async function main(){
    const data = await axios.get(API_ENDPOINT);
    console.log(data);

    if (data) {
        hideloader();
    }
    show(data);
    delete1(data.id,data)
}
main();

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    let tab = 
        `<tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Username</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.data) {
        tab += `<tr> 
        <td>${r.id} </td>
        <td>${r.name}</td>
        <td>${r.phone}</td> 
        <td>${r.username}</td>
        <td><a href="" onclick="edit">Edit</a></td>
        <td><a href="" onclick="delete1(data.id)">Delete</a></td>
    </tr>`;
    }; 
    // Setting innerHTML as tab variable
    document.getElementById("users").innerHTML = tab;
}

function delete1(id,data){
    for (var i = 0, l = data.length; i < l; i++) 
        if (data[i].id == id) {
         delete(data);
        }
}

