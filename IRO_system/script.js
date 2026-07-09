document.getElementById("issueForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let issue = {
        name: document.getElementById("name").value,
        category: document.getElementById("category").value,
        type: document.getElementById("type").value,
        location: document.getElementById("location").value,
        description: document.getElementById("description").value
    };

    let issues = JSON.parse(localStorage.getItem("issues")) || [];
    issues.push(issue);

    localStorage.setItem("issues", JSON.stringify(issues));

    alert("✅ Issue submitted!");
});