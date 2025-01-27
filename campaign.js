// Example systemObject with talents
const systemObject = {
  talents: {
    accuratestrike: {
      name: "Accurate Strike",
      gritcost: 2,
      description: "Gain Advantage on an attack. You must declare this Talent before rolling your Attack Roll.",
    },
    armoredresilience: {
      name: "Armored Resilience [1-2]",
      gritcost: 0,
      description:
        "Choose an armor type (Unarmored, Light, Medium, Heavy). While wearing armor of this type, your effective DR is equal to the armor's DR + your Rank in this Talent (max of 2). You must acquire this Talent for each individual type of armor",
    },
    cleave: {
      name: "Cleave [1-3]",
      gritcost: 2,
      description:
        "Before you make an attack, declare Cleave and spend 2 Grit. On a hit, deal half the damage of the attack to a second target adjacent to you whose Melee Defense your attack would also hit. If your main attack kills the target, the Grit cost of Cleave is refunded. Rank 2: Deal +1 damage to the second target. Rank 3: deal +2 damage to the secondary target.",
    },
  },
};

// Function to populate the talent table
function populateTalentTable() {
  const talents = systemObject.talents; // Access talents from the systemObject
  const table = document.getElementById("talent-table").getElementsByTagName("tbody")[0];

  // Loop through the talents and create rows
  Object.keys(talents).forEach((key) => {
    const talent = talents[key]; // Access talent object

    // Create a table row
    const row = document.createElement("tr");

    // Create cells for name, description, and gritcost
    const nameCell = document.createElement("td");
    nameCell.classList.add("talent-name");
    const descriptionCell = document.createElement("td");

    nameCell.textContent = talent.name; // Talent name
    descriptionCell.textContent = talent.description; // Talent description

    // Append cells to the row
    row.appendChild(nameCell);
    row.appendChild(descriptionCell);

    // Append the row to the table body
    table.appendChild(row);
  });
}

// Call populateTalentTable when the window loads
window.onload = () => {
  populateTalentTable();
};
