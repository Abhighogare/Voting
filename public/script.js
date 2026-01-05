async function vote(pet) {
  const res = await fetch(`/vote/${pet}`, {
    method: "POST"
  });
  const data = await res.json();
  updateResults(data);
}

async function loadResults() {
  const res = await fetch("/results");
  const data = await res.json();
  updateResults(data);
}

function updateResults(data) {
  document.getElementById("dog").innerText = data.dog;
  document.getElementById("cat").innerText = data.cat;
}

loadResults();
