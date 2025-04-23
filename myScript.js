function validateForm() {
    var ho = document.getElementById("ho").value.trim();
    var ten = document.getElementById("ten").value.trim();
    var sdt = document.getElementById("sdt").value.trim();

    if (ho === "" || ten === "") {
      alert("Vui lòng nhập đầy đủ họ và tên.");
      return false;
    }

    if (!/^\d{10}$/.test(sdt)) {
      alert("Vui lòng nhập số điện thoại.");
      return false;
    }

    return true; 
  }
  document.addEventListener("DOMContentLoaded", function () {
    const ngaySelect = document.getElementById("ngay");
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      ngaySelect.appendChild(option);
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const ngaySelect = document.getElementById("thang");
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      ngaySelect.appendChild(option);
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const ngaySelect = document.getElementById("nam");
    for (let i = 2000; i <= 2010; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      ngaySelect.appendChild(option);
    }
  });