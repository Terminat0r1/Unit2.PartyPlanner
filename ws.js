const COHORT = "REPLACE_ME!";
const API_URL = `https://fsa-async-await.herokuapp.com/api/${COHORT}/artists`;

const state = {
  party: [],
};

const partyList = document.querySelector("#party");

const addpartyForm = document.querySelector("#addParty");
addpartyForm.addEventListener("submit", addparty);

/**
 * Sync state with the API and rerender
 */
async function render() {
  await getparty();
  renderparty();
}
render();


 
async functionGet(Getparty) {
  
     try {
        const response = await fetch(API_URL);
        const json = await response.json();
        state.party = json.data;
      } catch (error) {
        console.error(error);
      }
    }
  

/**
 * Render 
 */
function renderparty() {
    function renderparty() {
        if (!state.party.length) {
          partyList.innerHTML = "<li>No party.</li>";
          return;
        }
   
        const partyCards = state.party.map((party) => {
          const li = document.createElement("li");
          li.innerHTML = `
            <h2>${party.name}</h2>
            <img src="${artist.imageUrl}" alt="${party.name}" />
            <p>${artist.description}</p>
          `;
          return li;
        });
   
        partyList.replaceChildren(...partyCards);
      }
}

/**

 * @param {Event} event
 */
function addparty(event) {
  event.preventDefault();

  async function addparty(event) {
    event.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: addpartyForm.name.value,
          imageUrl: addpartyForm.imageUrl.value,
          description: addApartyForm.description.value,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create party");
      }

      render();
    } catch (error) {
      console.error(error);
    }
  }
}
