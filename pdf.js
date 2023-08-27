function downloadPDF() {
  var labelName = document.getElementById("labelName").innerHTML;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var logo = document.getElementById("logo");
  let myStr = "Hello World!";
  console.log(labelName);
  var doc = new jsPDF();
  doc.text(20, 20, labelName + name);
  doc.text(20, 30, "Email: " + email);
  doc.text(20, 40, "Phone: " + phone);
  doc.text(20, 50, "City: " + city);
  doc.text(20, 60, "State: " + state);
  doc.text(20, 80, "Logo: " + logo);
  doc.text(20, 90, "Message: " + myStr);

  doc.save("form.pdf");
}
