const fetchAllPosts = async () => {
  try {
    const response = await fetch("https://gorest.co.in/public/v2/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! body: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
const fetchPostsById = async (id) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("fetch error", error);
    return null;
  }
};

const fetchDeletePostsById = async (id) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer d56a07017eb8c60446f7c7f8ba2752cbafcca9b281657a6c19e56ededd140d87",
      },
    });
    if (!response.ok) {
      throw new error(`HTTP error! status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.log("fetch error", error);
    return false;
  }
};
const fetchUpdatePostsById = async (id, data) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer d56a07017eb8c60446f7c7f8ba2752cbafcca9b281657a6c19e56ededd140d87",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const updateData = await response.json();
    return updateData;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
const fetchCreatePosts = async (data) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer d56a07017eb8c60446f7c7f8ba2752cbafcca9b281657a6c19e56ededd140d87",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const createdData = await response.json();
    return createdData;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
document.addEventListener("DOMContentLoaded", async () => {
  const result = await fetchAllPosts();
  console.log(result);
  if (result.length > 0) {
    renderTable(result);
  }
});

function renderTable(dataList) {
  const tbody = document.querySelector("#dataTable tbody");
  tbody.innerHTML = "";
  dataList.forEach((data) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
                    <td>${data.id}</td>
                    <td>${data.user_id}</td>
                    <td>${data.title}</td>
                    <td>${data.body}</td>
                `;
    tr.onclick = () => showDetails(data.id);
    tbody.appendChild(tr);
  });
}

const showDetails = async (id) => {
  console.log("id", id);
  try {
    const findData = await fetchPostsById(id);
    console.log("first", findData);
    const data = findData;
    document.getElementById("detailsContent").innerHTML = `
                <div><strong>Id:</strong> ${data.id}</div>
                <div><strong>User_id:</strong> ${data.user_id}</div>
                <div><strong>Title:</strong> ${data.title}</div>
                <div><strong>Body:</strong> ${data.body}</div>
                `;
    document.getElementById("id").value = data.id;
    document.getElementById("user_id").value = data.user_id;
    document.getElementById("title").value = data.title;
    document.getElementById("body").value = data.body;
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};
function clearForm() {
  document.getElementById("userForm").reset();
  showResult("");
}
function showResult(msg) {
  console.log("msg", msg);
  document.getElementById("result").textContent = msg;
}
const deleteData = async () => {
  try {
    const id = Number(document.getElementById("id").value);
    const deleteData = await fetchDeletePostsById(id);
    console.log("deleteData", deleteData);
    if (deleteData === true) {
      showResult("DELETE:Data dengan ID " + id + "dihapus.");
      setTimeout(() => {
        clearForm();
        document.getElementById("detailsContent").textContent =
          "Pilih data pada tabel untuk melihat detail.";
      }, 1000);
    }
  } catch (error) {
    console.error("error deleting data", error);
  }
};
const getFormData = () => {
  return {
    id: document.getElementById("id").value,
    user_id: document.getElementById("user_id").value,
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
  };
};
const updateData = async () => {
  const data = getFormData();
  const updateData = await fetchUpdatePostsById(data.id, data);
  console.log("first", updateData);
  if (updateData) {
    showResult("Update: Data dengan ID " + data.id + " berhasil diperbarui.");
    setTimeout(() => {
      clearForm();
    }, 1000);
  } else {
    showResult("Gagal memperbarui data!");
  }
};
const createData = async () => {
  try {
    const data = getFormData();
    const createdData = await fetchCreatePosts(data);
    console.log("createdData", createdData);
    clearForm();
  } catch (error) {}
};
