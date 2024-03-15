document.addEventListener('DOMContentLoaded', function() {
  const calendar = document.getElementById('calendar');

  // Liste des mois de l'année avec le nombre de jours
  const months = [
    { name: 'Janvier', days: 31 },
    { name: 'Février', days: 28 }, // Notez que Février est traité séparément pour prendre en compte les années bissextiles
    { name: 'Mars', days: 31 },
    { name: 'Avril', days: 30 },
    { name: 'Mai', days: 31 },
    { name: 'Juin', days: 30 },
    { name: 'Juillet', days: 31 },
    { name: 'Août', days: 31 },
    { name: 'Septembre', days: 30 },
    { name: 'Octobre', days: 31 },
    { name: 'Novembre', days: 30 },
    { name: 'Décembre', days: 31 }
  ];

  // Liste des jours de la semaine
  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  // Création du calendrier par mois
  for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
    const month = months[monthIndex];
    const monthDiv = document.createElement('div');
    monthDiv.classList.add('month');

    const monthTitle = document.createElement('h2');
    monthTitle.textContent = month.name;
    monthDiv.appendChild(monthTitle);

    // Création du tableau pour afficher les jours
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Ajout des noms de jours de la semaine dans l'en-tête du tableau
    const headerRow = document.createElement('tr');
    daysOfWeek.forEach(function(dayName) {
      const th = document.createElement('th');
      th.textContent = dayName;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Création du calendrier par semaine
    let dayIndex = 1;
    while (dayIndex <= month.days) {
      const weekRow = document.createElement('tr');
      for (let i = 0; i < 7 && dayIndex <= month.days; i++) {
        const day = document.createElement('td');
        day.classList.add('day');
        day.textContent = dayIndex;

        // Ajouter des classes pour indiquer l'état ouvert ou fermé du jour
        day.addEventListener('click', function() {
          if (day.classList.contains('open')) {
            day.classList.remove('open');
            day.classList.add('closed');
          } else {
            day.classList.remove('closed');
            day.classList.add('open');
          }
        });

        weekRow.appendChild(day);
        dayIndex++;
      }
      tbody.appendChild(weekRow);
    }

    table.appendChild(tbody);
    monthDiv.appendChild(table);

    calendar.appendChild(monthDiv);
  }
});
