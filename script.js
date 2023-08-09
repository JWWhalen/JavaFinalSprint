fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Display JSON data in console

    data.forEach((item) => {
      console.log(`Name: ${item.name}, Age: ${item.age}`);
    });

    const describeData = (data) => {
      return data
        .map((item) => `Name: ${item.name}, Age: ${item.age}`)
        .join("<br>");
    };

    const displayDataInHtml = (data) => {
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = describeData(data);
    };

    displayDataInHtml(data);
  })
  .catch((error) => console.error("Error fetching JSON:", error));
