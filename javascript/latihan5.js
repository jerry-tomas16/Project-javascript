let kategoryList = [];
const Kategory = () => {
  console.log("cek")
  const nama_kategory = document.getElementById("nama_kategory").value;
  const code_kategory = document.getElementById("code_kategory").value;
  

  const kategory = {
    nama_kategory,
    code_kategory,
    
    
  };

  kategoryList.push(kategory);
  console.log(kategoryList);
  renderKategoryTable(kategoryList);
    document.getElementById("nama_kategory").value = "";
    document.getElementById("code_kategory").value = "";
   
};

const renderKategoryTable = (data) => {
  const tbody = document.getElementById("tblbody-kategory");
  tbody.innerHTML = "";

    if (data.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.style.textAlign = "center";
    cell.innerText = "Data Not Found";
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }
  data.forEach((kategory, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${kategory.nama_kategory}</td>
            <td>${kategory.code_kategory}</td>
            <td style="width: 180px;">
            <div style="display: flex; gap: 8px;">
                    <button onclick="editData(${index})">Edit</button>
                    <button onclick="handleDelete(${index})">Delete</button>
                    <button onclick="detailData(${index})">Detail</button>
                </div>
            </td>
        `;

    tbody.appendChild(row);
  });
};
const handleDelete = (id) => {
  console.log("id", id);
  kategoryList.splice(id, 1);
  renderKategoryTable(kategoryList);
};
const detailData = (id) => {
  const data = kategoryList[id];
  renderDetail(data);
};
const renderDetail = (data) => {
  document.getElementById("detail_nama_kategory").innerText = data?.nama_kategory || " ";
  document.getElementById("detail_code_kategory").innerText = data?.code_kategory || " ";

}
const editData = (id) => {
  const data = kategoryList[id];
  document.getElementById("nama_kategory").value = data?.nama_kategory || "";
  document.getElementById("code_kategory").value = data?.code_kategory || "";
  document.getElementById("hiddenId").value = id;
  document.getElementById("saveButton").style.display = "none";
  document.getElementById("editButton").style.display = "block";
}
const handleEditData = () => {
  let nama_kategory = document.getElementById("nama_kategory").value;
  let code_kategory = document.getElementById("code_kategory").value;
  let id = document.getElementById("hiddenId").value;
    const editIndex = parseInt (id,10);
  console.log("editIndex",editIndex);
  const data = {nama_kategory, code_kategory}; 
  kategoryList.splice(editIndex, 1, data);
  renderKategoryTable(kategoryList);
  document.getElementById("saveButton").style.display = "block";
  document.getElementById("editButton").style.display = "none";
  document.getElementById("hiddenId").value = "";
  document.getElementById("nama_kategory").value = "";
  document.getElementById("code_kategory").value = "";
};
