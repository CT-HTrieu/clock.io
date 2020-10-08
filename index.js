alert("Hack Computer.......");

for (let i = 0; i <= 100; i += 10) {
  setTimeout(() => {
    document.getElementById("hack").innerHTML =
      "Hack Computer " + i + "%.....<br/>";
    if (i == 100)
      document.getElementById("hack").innerHTML = "Hack Thành Công Máy Của Bạn";
  }, i * 100);
}
