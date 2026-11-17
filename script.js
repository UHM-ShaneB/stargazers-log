fetch("events.json")
    .then((response) => response.json())
    .then((events) => {
        const item = document.querySelector("#starred");
        events.forEach((event) => {
            const item = document.createElement("li");
            item.textContent = '${event.name} - starred ${event.starred}';
            list.appendChild(item);
        })
    })