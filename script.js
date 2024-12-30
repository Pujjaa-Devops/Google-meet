const participants = [
    { name: 'Pujjaa', image: 'girl1.png' },
      { name: 'Pratham', image: 'boy1.png' },
      { name: 'Abhii', image: 'boy2.png' },
      { name: 'Siddharth', image: 'boy1.png' },
      { name: 'Vaishnavi', image: 'girl2.png' },
      { name: 'Saurabh', image: 'boy1.png' },
      { name: 'Mayur', image: 'boy2.png' },
      { name: 'Neha', image: 'girl2.png' },
      { name: 'Siddhi', image: 'girl2.png' },
      { name: 'Sai', image: 'boy1.png' },
      { name: 'Rohit', image: 'boy2.png' },
      { name: 'Smita', image: 'girl1.png' },
      { name: 'Sanika', image: 'girl2.png' },
      { name: 'Sayli', image: 'girl1.png' },
      { name: 'Aakanksha', image: 'girl2.png' },
      { name: 'Pratik', image: 'boy2.png' },
      { name: 'Abhilasha', image: 'girl1.png'},
    ];
    
    const participantsContainer = document.getElementById('participants-container');
    
    function displayParticipants(participantList) {
      participantsContainer.innerHTML = '';
      participantList.forEach((participant) => {
        participantsContainer.innerHTML += `
          <div class='participant-card'>
            <img src="${participant.image}" alt="${participant.name}">
            <span>${participant.name}</span>
          </div>
        `;
      });
    }
    
    displayParticipants(participants);
    
    function filterParticipants() {
      const searchQuery = document.getElementById('search').value.toLowerCase();
      const filteredParticipants = participants.filter(participant => 
        participant.name.toLowerCase().includes(searchQuery)
      );
      displayParticipants(filteredParticipants);
    }
    