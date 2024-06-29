const form = document.getElementById("user-form");
const tableBody = document.getElementById("user-data");

let userData = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td></td>
		<td>${name}</td>
		<td>${email}</td>
		<td class="actions">
			<button class="edit-btn">Edit</button>
			<button class="delete-btn">Delete</button>
		</td>
	`;

  tableBody.appendChild(newRow);

  userData.push({ id, name, email });

  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
});

tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    editUser(e.target.parentNode.parentNode);
  } else if (e.target.classList.contains("delete-btn")) {
    deleteUser(e.target.parentNode.parentNode);
  }
});

function editUser(row) {
  const id = row.cells[0].textContent;
  const nameCell = row.cells[1];
  const emailCell = row.cells[2];

  const name = nameCell.textContent;
  const email = emailCell.textContent;

  const newName = prompt("Enter the updated name:", name);
  const newEmail = prompt("Enter the updated email:", email);

  if (newName !== null) nameCell.textContent = newName;
  if (newEmail !== null) emailCell.textContent = newEmail;

  const user = userData.find((user) => user.id === parseInt(id));
  user.name = newName;
  user.email = newEmail;
}

function deleteUser(row) {
  const index = Array.prototype.indexOf.call(tableBody.children, row);
  userData.splice(index, 1);
  tableBody.removeChild(row);
}