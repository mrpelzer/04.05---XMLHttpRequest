var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    }
};

xhttp.open("POST", "http://100.66.169.225:3000/chat", true);
xhttp.setRequestHeader("Content-Type", "application/json");
xhttp.send(JSON.stringify({ firstName: "John", favoriteFood: "Pizza" }));