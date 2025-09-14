let listData = [];
console.log("first", listData);

function pindahkanTeks() {
  let nama = document.getElementById("nama").value;
  let usia = document.getElementById("usia").value;
  let pekerjaan = document.getElementById("pekerjaan").value;
  let agama = document.getElementById("agama").value;
  let alamat = document.getElementById("alamat").value;
  let status = document.getElementById("status").value;

  listData.push({ nama, usia, pekerjaan, agama, alamat, status });

  console.log("first", listData);
  renderBodyTable(listData);

  document.getElementById("nama").value = "";
  document.getElementById("usia").value = "";
  document.getElementById("pekerjaan").value = "";
  document.getElementById("agama").value = "";
  document.getElementById("alamat").value = "";
  document.getElementById("status").value = "";
  // Memindahkan teks ke label
  //   document.getElementById("labelNama").innerText = nama;
  //   document.getElementById("labelUsia").innerText = usia;
  //   document.getElementById("labelPekerjaan").innerText = pekerjaan;
  //   document.getElementById("labelAgama").innerText = agama;
  //   document.getElementById("labelAlamat").innerText = alamat;
  //   document.getElementById("labelStatus").innerText = status;
}

const renderBodyTable = (listData) => {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  if (listData.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 8;
    cell.style.textAlign = "center";
    cell.innerText = "Data Not Found";
    row.appendChild(cell);
    tableBody.appendChild(row);
    return;
  }

  listData.forEach((data, index) => {
    const row = document.createElement("tr");

    const number = document.createElement("td");
    number.innerText = index + 1;
    row.appendChild(number);

    const cellNama = document.createElement("td");
    cellNama.innerText = data.nama;
    row.appendChild(cellNama);

    const cellUsia = document.createElement("td");
    cellUsia.innerText = data.usia;
    row.appendChild(cellUsia);

    const cellPekerjaan = document.createElement("td");
    cellPekerjaan.innerText = data.pekerjaan;
    row.appendChild(cellPekerjaan);

    const cellAgama = document.createElement("td");
    cellAgama.innerText = data.agama;
    row.appendChild(cellAgama);

    const cellAlamat = document.createElement("td");
    cellAlamat.innerText = data.alamat;
    row.appendChild(cellAlamat);

    const cellStatus = document.createElement("td");
    cellStatus.innerText = data.status;
    row.appendChild(cellStatus);

    const cellAction = document.createElement("td");
    cellAction.style.width = "200px";
    cellAction.innerHTML = `
        <button style="width:60px;" onclick="editData(${index})">Edit</button>
        <button style="width:60px;" onclick="deleteData(${index})">Delete</button>
        <button style="width:60px;" onclick="detailData(${index})">Detail</button>
    `;
    row.appendChild(cellAction);

    tableBody.appendChild(row);
  });
};
const deleteData = (id) => {
  console.log("id", id);
  listData.splice(id, 1);
  renderBodyTable(listData);
  const data = listData [id];
  renderDetail(data);
};

const detailData = (id) => {
  const data = listData[id];
  renderDetail(data);
};
const renderDetail = (data) => {
  document.getElementById("labelNama").innerText = data?.nama || " ";
  document.getElementById("labelUsia").innerText = data?.usia || " ";
  document.getElementById("labelPekerjaan").innerText = data?.pekerjaan || " ";
  document.getElementById("labelAgama").innerText = data?.agama || " ";
  document.getElementById("labelAlamat").innerText = data?.alamat || " ";
  document.getElementById("labelStatus").innerText = data?.status || " ";
};
const editData = (id) => {
  const data = listData[id];
  document.getElementById("nama").value = data?.nama || "";
  document.getElementById("usia").value = data?.usia || "";
  document.getElementById("pekerjaan").value = data?.pekerjaan || "";
  document.getElementById("agama").value = data?.agama || "";
  document.getElementById("alamat").value = data?.alamat || "";
  document.getElementById("status").value = data?.status || "";
  document.getElementById("hiddenId").value = id;
  document.getElementById("saveButton").style.display = "none";
  document.getElementById("editButton").style.display = "block";
}
const handleEditData = () => {
  let nama = document.getElementById("nama").value;
  let usia = document.getElementById("usia").value;
  let pekerjaan = document.getElementById("pekerjaan").value;
  let agama = document.getElementById("agama").value;
  let alamat = document.getElementById("alamat").value;
  let status = document.getElementById("status").value;
  let id = document.getElementById("hiddenId").value;
  const editIndex = parseInt (id,10);
  console.log("editIndex",editIndex);
  const data = {nama, usia, pekerjaan, agama, alamat, status}; 
  listData.splice(editIndex, 1, data);
  renderBodyTable(listData);
  document.getElementById("saveButton").style.display = "block";
  document.getElementById("editButton").style.display = "none";
  document.getElementById("hiddenId").value = "";
  document.getElementById("nama").value =  "";
  document.getElementById("usia").value =  "";
  document.getElementById("pekerjaan").value = "";
  document.getElementById("agama").value = "";
  document.getElementById("alamat").value = "";
  document.getElementById("status").value = "";
};