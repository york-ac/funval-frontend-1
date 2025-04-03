document.getElementById("customerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Capturar valores del formulario
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let market = document.getElementById("market").value;
    let email = document.getElementById("email").value;
    let description = document.getElementById("description").value;

    // Crear una nueva fila en la tabla
    let tableBody = document.getElementById("customerTableBody");
    let newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${market}</td>
        <td>${email}</td>
        <td>${description}</td>
    `;

    // Limpiar el formulario
    document.getElementById("customerForm").reset();
});
