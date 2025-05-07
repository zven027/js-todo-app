let items = [];

function addItem() {
  const newItem = document.getElementById("itemInput").value;
  if (newItem === "") return;
  items.push(newItem);
  updateList();
  document.getElementById("itemInput").value = "";
}

function deleteItem(index) {
  items.splice(index, 1);
  updateList();
}

function clearAll() {
  items = [];
  updateList();
}

function updateList() {
  let listHtml = "";
  for (let i = 0; i < items.length; i++) {
    listHtml += `<li>${items[i]} 
      <button class="delete-btn" onclick="deleteItem(${i})">削除</button>
    </li>`;
  }
  document.getElementById("itemList").innerHTML = listHtml;
}