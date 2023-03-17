function generate() {
  var x = document.forms["myform"]["name"].value;
  if (x == "") {
    alert("Please enter your Name");
    return false;
  } else {
    generate_table();
  }
}

function generate_table() {
  document.getElementById("empty").style.display = "none";
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var website = document.getElementById("web").value;
  var image = document.getElementById("image").value;
  var genders = document.getElementsByName("gender");
  for (i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      var gender = genders[i].value;
    }
  }
  
  var skills = [];
  if (document.getElementById("java").checked) {
    skills.push(document.getElementById("java").value);
  }
  if (document.getElementById("html").checked) {
    skills.push(document.getElementById("html").value);
  }
  if (document.getElementById("css").checked) {
    skills.push(document.getElementById("css").value);
  }


  skills = skills.toString();
  var body = document.getElementById("d22");
  var tbl = document.getElementById("tab2");
  var tblBody = document.getElementById("tb2");
  var row = document.createElement("tr");
  var cell1 = document.createElement("td");
  var cell2 = document.createElement("td");
  var bold = document.createElement("b");
  var cellText1 = document.createTextNode(name);
  var a = document.createElement("a");
  var b = document.createElement("span");
  var c = document.createTextNode("\n" + gender);
  var d = document.createElement("span");
  var e = document.createTextNode("\n" + email);
  var f = document.createElement("span");
  var g = document.createTextNode("\n" + skills);
  var link = document.createTextNode("\n" + website);
  var img = document.createElement("img");
  img.src = image;
  img.alt = "images";
  img.style.padding = "10px";
  img.style.width = "150px";
  img.style.height = "130px";
  a.appendChild(link);
  a.title = "Link";
  a.href = website;
  a.target = "_blank";
  bold.appendChild(cellText1);
  cell1.appendChild(bold);
  b.appendChild(c);
  cell1.appendChild(b);
  d.appendChild(e);
  cell1.appendChild(d);
  cell1.appendChild(a);
  f.appendChild(g);
  cell1.appendChild(f);
  cell2.appendChild(img);
  row.appendChild(cell1);
  row.appendChild(cell2);
  tblBody.appendChild(row);
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}
