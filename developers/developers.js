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
    {
        title: 'Log in',
        description: 'THE EYE OF THE ENEMY IS MOVING.\n' +
            'Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron’s forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord’s realm.'
    },
    {
        title: 'Books',
        description: 'The film opens with a prologue narrated by Galadriel, explaining the history of the One Ring, its corruption of Sauron, and how it was lost for thousands of years.'
    },
    {
        title: 'Sorting',
        description: 'The movie delves into the backstory of Gollum (formerly known as Sméagol) and how he came to possess the One Ring.'
    },
    {
        title: 'Adding interesting facts, ESLint + Prettier  ',
        description: 'Aragorn is crowned as King of Gondor, and he and Arwen pledge their love to one another.'
    },
    {
        title: 'Developers page',
        description: 'This epic battle takes place outside the city of Minas Tirith, where the forces of Gondor and Rohan unite against Saurons army. Key moments include the arrival of the Riders of Rohan, Eowyns confrontation with the Witch-King, and the charge of the Rohirrim.'
    },
];

document.addEventListener('DOMContentLoaded', function () {
    const movieCards = document.querySelectorAll('.card');

    movieCards.forEach((card, index) => {
        card.addEventListener('click',
            function () {
                // Populate modal with movie information
                document.getElementById('movieModalLabel').innerText = movies[index].title;
                document.getElementById('movieModalBody').innerText = movies[index].description;

                // Show the modal
                const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
                movieModal.show();
            });
    });
});
