fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load events.json: ${response.status}`);
    }
    return response.json();
  })
  .then((events) => {
    const list = document.querySelector("#starred");
    if (!Array.isArray(events) || events.length === 0) {
      list.innerHTML = "<li>No starred repositories found.</li>";
      return;
    }

    events.forEach((event) => {
      const item = document.createElement("li");
      const name = document.createElement("strong");
      name.textContent = event.name;

      const details = document.createElement("span");
      details.textContent = `Starred on ${event.starred}`;

      item.appendChild(name);
      item.appendChild(details);
      list.appendChild(item);
    });
  })
  .catch((error) => {
    const list = document.querySelector("#starred");
    list.innerHTML = `<li>Error loading starred repositories.</li>`;
    console.error(error);
  });
