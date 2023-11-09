const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

const movies = [
    { title: 'The Lord of the Rings: The Return of the King  Directed by Peter Jackson.2003', description: 'THE EYE OF THE ENEMY IS MOVING.\n' +
            'Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron’s forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord’s realm.' },
    { title: 'Prologue:', description: 'The film opens with a prologue narrated by Galadriel, explaining the history of the One Ring, its corruption of Sauron, and how it was lost for thousands of years.' },
    { title: 'Gollums Origins: ', description: 'The movie delves into the backstory of Gollum (formerly known as Sméagol) and how he came to possess the One Ring.' },
    { title: 'Aragors Coronation: ', description: 'Aragorn is crowned as King of Gondor, and he and Arwen pledge their love to one another.' },
    { title: 'The Battle of Pelennor Fields:', description: 'This epic battle takes place outside the city of Minas Tirith, where the forces of Gondor and Rohan unite against Saurons army. Key moments include the arrival of the Riders of Rohan, Eowyns confrontation with the Witch-King, and the charge of the Rohirrim.' },
    { title: 'Sam and Frodo in Mordor:', description: 'Sam and Frodo continue their journey into Mordor, facing numerous perils and moments of despair, as they get closer to Mount Doom.' },
    { title: 'Aragorns Leadership: ', description: 'Aragorn, Legolas, Gimli, and the Army of the Dead arrive at the Battle of Pelennor Fields, turning the tide of the battle.' },
    { title: 'The Destruction of the Ring: ', description: 'Frodo and Sam reach the slopes of Mount Doom, but Gollum intervenes, leading to the destruction of the One Ring. This moment marks the climax of the entire trilogy.' },
    { title: 'The Eagles Rescue: ', description: 'After the Ring is destroyed, Sam and Frodo find themselves stranded on Mount Doom, but they are eventually rescued by the giant eagles.' },
    { title: 'The Coronation of Aragorn: ', description: 'The film concludes with the crowning of Aragorn as the King of Gondor, with Arwen by his side. The people of Middle-earth pay their respects to the new king.' },
    { title: 'The Departure of the Elves: ', description: 'A poignant scene features the Elves, including Legolas and Galadriel, departing Middle-earth, signaling the end of an era.' },
    { title: 'Farewells and Departures:', description: 'Many characters bid farewell to one another, including Frodos departure to the Undying Lands and the final farewells of the fellowship members.' },
    { title: 'The Last Words of Sam: ', description: ' The movie closes with Sam returning to the Shire, embracing his family, and telling the story of his adventures to his children, concluding with the famous line: "Well, Im back."' },
];

document.addEventListener('DOMContentLoaded', function() {
    const movieCards = document.querySelectorAll('.card');

    movieCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            // Populate modal with movie information
            document.getElementById('movieModalLabel').innerText = movies[index].title;
            document.getElementById('movieModalBody').innerText = movies[index].description;

            // Show the modal
            const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
            movieModal.show();
        });
    });
});