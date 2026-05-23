const searchInput = document.getElementById("siteSearch");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const searchable = document.querySelectorAll(".searchable");

    searchable.forEach((item) => {
      const haystack = (item.dataset.search || item.textContent).toLowerCase();
      item.classList.toggle("is-hidden", query && !haystack.includes(query));
    });
  });
}
