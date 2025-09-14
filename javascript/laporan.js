let laporanList = [];
const handleSave = () => {
  const jenis = document.getElementById("jenis").value;
  const kategori_id = document.getElementById("kategori_id").value;
  const jumlah = document.getElementById("jumlah").value;
  const tanggal = document.getElementById("tanggal").value;
  const keterangan = document.getElementById("keterangan").value;

  const laporan = {
    jenis,
    kategori_id,

    
    jumlah,
    tanggal,
    keterangan,
    
  };

  laporanList.push(laporan);
  console.log(laporanList);
  renderTableLaporan(laporanList);
    document.getElementById("jenis").value = "";
    document.getElementById("kategori_id").value = "";
    document.getElementById("jumlah").value = "";
    document.getElementById("tanggal").value = "";
    document.getElementById("keterangan").value = "";
};

const renderTableLaporan = (data) => {
  const tbody = document.getElementById("tblbody-laporan");
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
  data.forEach((laporan, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${laporan.jenis}</td>
            <td>${laporan.kategori_id}</td>
            <td>${laporan.jumlah}</td>
            <td>${laporan.tanggal}</td>
            <td>${laporan.keterangan}</td>
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
  laporanList.splice(id, 1);
  renderTableLaporan(laporanList);
};
const detailData = (id) => {
  const data = laporanList[id];
  renderDetail(data);
};
const renderDetail = (data) => {
  document.getElementById("detail-jenis").innerText = data?.jenis || " ";
  document.getElementById("detail-kategori").innerText = data?.kategori_id || " ";
  document.getElementById("detail-jumlah").innerText = data?.jumlah || " ";
  document.getElementById("detail-tanggal").innerText = data?.tanggal || " ";
  document.getElementById("detail-keterangan").innerText = data?.keterangan || " ";
}
const handleJenisChange = () => {
  const jenis = document.getElementById("jenis").value;
  console.log("first",jenis);
  const kategoriSelect = document.getElementById("kategori_id");
  if (jenis === "pemasukan") {
    kategoriSelect.innerHTML = `
    <option value="1">Gaji</option>
    <option value="2">Bonus</option>
    
    `;
    kategoriSelect.disabled = false;
  } else if (jenis === "pengeluaran") {
    kategoriSelect.innerHTML =`
    <option value="2">Makan</option>
    <option value="3">Transport</option>
    <option value="5">Hiburan</option>
    `;
    kategoriSelect.disabled = false;
  } else {
    kategoriSelect.innerHTML = `<option value ="">-- pilih kategori --</option>`;
    kategoriSelect.disabled = true;
  }
};
const editData = (id) => {
  const data = laporanList [id];
  document.getElementById("jenis").value = data?.jenis || "";
  document.getElementById("kategori_id").value = data?.kategori_id || "";
  document.getElementById("jumlah").value = data?.jumlah || "";
  document.getElementById("tanggal").value = data?.tanggal || "";
  document.getElementById("keterangan").value = data?.keterangan || "";
  document.getElementById("hiddenId").value = id;
  document.getElementById("saveButton").style.display = "none";
  document.getElementById("editButton").style.display = "block";
}
const handleEditData = () => {
  let jenis = document.getElementById("jenis").value;
  let kategori_id = document.getElementById("kategori_id").value;
  let jumlah = document.getElementById("jumlah").value;
  let tanggal = document.getElementById("tanggal").value;
  let keterangan = document.getElementById("keterangan").value;
  let id = document.getElementById("hiddenId").value;
  const editIndex = parseInt (id,10);
  console.log("editIndex",editIndex);
  const data = {jenis, kategori_id, jumlah, tanggal, keterangan,}; 
  laporanList.splice(editIndex, 1, data);
  renderTableLaporan(laporanList);
  document.getElementById("saveButton").style.display = "block";
  document.getElementById("editButton").style.display = "none";
  document.getElementById("hiddenId").value = "";
  document.getElementById("jenis").value =  "";
  document.getElementById("kategori_id").value =  "";
  document.getElementById("jumlah").value = "";
  document.getElementById("tanggal").value = "";
  document.getElementById("keterangan").value = "";
  
};
const filterLaporan = (jenis) => {
  const filtered = laporanList.filter((laporan) => laporan.jenis === jenis);
  if (jenis === "") {
    renderTableLaporan(laporanList);
    return;
  }
  renderTableLaporan(filtered);
};
