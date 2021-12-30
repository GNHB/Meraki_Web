function AddRow() {
    if (document.getElementById("ten").value.length == 0 || document.getElementById("phone").value.length == 0 || document.getElementById("tinh").value.length == 0 || document.getElementById("quan").value.length == 0 || document.getElementById("phuong").value.length == 0 || document.getElementById("diachi").value.length == 0) {
        alert("Xin điền đầy đủ thông tin");
    } else {
        var table, tr, td, name, address, phone, txtName, txtAddress, txtPhone, br, tinh, quan, phuong, diachi;
        table = document.getElementById("myTable");
        br = document.createElement('br');
        tr = document.createElement('tr');
        td = document.createElement('td');

        name = document.getElementById("ten").value;
        txtName = document.createTextNode(name);
        td.appendChild(txtName);
        td.appendChild(br);

        var br;
        br = document.createElement('br');
        phone = document.getElementById("phone").value;
        txtPhone = document.createTextNode(phone);
        td.appendChild(txtPhone);
        td.appendChild(br);

        address = document.getElementById("diachi").value + ", " + document.getElementById("tinh").value + ", " + document.getElementById("quan").value + ", " + document.getElementById("phuong").value;
        txtAddress = document.createTextNode(address);
        td.appendChild(txtAddress);

        var hr;
        hr = document.createElement('hr');
        td.appendChild(hr);
        tr.appendChild(td);
        table.appendChild(tr);


    }

}