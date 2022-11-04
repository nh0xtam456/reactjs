

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const a = document.getElementById("root");
axios.get(API_ENDPOINT);

async function main() {
    const data = await axios.get(API_ENDPOINT);
    console.log(data);

    if (data) {
        hideloader();
    }
}
main();

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data) { // Khai báo hàm show nhưng đã sử dụng ở đâu?
    let tab =
        `<tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Username</th>
         </tr>`;

    // Loop to access all rows 
    array.forEach(r => { // biến array này ở đâu ra mà sài đây?
        tab += `<tr> 
        <td>${r.id} </td>
        <td>${r.name}</td>
        <td>${r.phone}</td> 
        <td>${r.username}</td>          
    </tr>`;
    });
    // Setting innerHTML as tab variable
    document.getElementById("users").innerHTML = tab;
}