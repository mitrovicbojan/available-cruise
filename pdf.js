function downloadPDF() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var doc = new jsPDF();
  doc.text(20, 20, "Name: " + name);
  doc.text(20, 30, "Email: " + email);
  doc.text(20, 40, "Phone: " + phone);
  doc.text(20, 50, "City: " + city);
  doc.text(20, 60, "State: " + state);
  doc.save("form.pdf");
}
