async function fetchData() {
    const response = await fetch("http://localhost:8080/api/requests");
    const data = await response.json();
    
    let output = "<h2>Repair Requests</h2>";
    data.forEach(request => {
        output += `<p>${request.id}: ${request.location} - ${request.status}</p>`;
    });

    document.getElementById("requests").innerHTML = output;
}
