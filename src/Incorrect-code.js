let ratingBatman = localStorage.getItem('batman');
    console.log(ratingBatman);
    let ratingSuperman = localStorage.getItem('superman');
    console.log(ratingSuperman);
    let ratingIronman = localStorage.getItem('ironman');
    console.log(ratingIronman);
    let ratingSpiderman = localStorage.getItem('spiderman');
    console.log(ratingSpiderman);
    let ratingCaptain = localStorage.getItem('captain');
    console.log(ratingCaptain);
    let ratingThor = localStorage.getItem('thor');
    console.log(ratingThor);
    let ratingHulk = localStorage.getItem('hulk');
    console.log(ratingHulk);
    let ratingWonderwoman = localStorage.getItem('wonderwoman');
    console.log(ratingWonderwoman);
    let ratingBlackwidow = localStorage.getItem('blackwidow');
    console.log(ratingBlackwidow);
    let ratingDeadpool = localStorage.getItem('deadpool');
    console.log(ratingDeadpool);

    if (ratingBatman != null) {
        document.querySelector('.batman').value = ratingBatman;
    }
    if (ratingSuperman != null) {
        document.querySelector('.superman').value = ratingSuperman;
    }
    if (ratingIronman != null) {
        document.querySelector('.ironman').value = ratingIronman;
    }
    if (ratingSpiderman != null) {
        document.querySelector('.spiderman').value = ratingSpiderman;
    }
    if (ratingCaptain != null) {
        document.querySelector('.captain').value = ratingCaptain;
    }
    if (ratingThor != null) {
        document.querySelector('.thor').value = ratingThor;
    }
    if (ratingHulk != null) {
        document.querySelector('.hulk').value = ratingHulk;
    }
    if (ratingWonderwoman != null) {
        document.querySelector('.wonderwoman').value = ratingWonderwoman;
    }
    if (ratingBlackwidow != null) {
        document.querySelector('.blackwidow').value = ratingBlackwidow;
    }
    if (ratingDeadpool != null) {
        document.querySelector('.deadpool').value = ratingDeadpool;
    }

    
function getBatmanRating() {
    const batman = document.querySelector('.batman').value;

    if (localStorage.getItem('batman') == null) {
        localStorage.setItem('batman', batman);
    }
}

function getSupermanRating() {
    const superman = document.querySelector('.superman').value;

    if (localStorage.getItem('superman') == null) {
        localStorage.setItem('superman', superman);
    }
}

function getIronmanRating() {
    const ironman = document.querySelector('.ironman').value;

    if (localStorage.getItem('ironman') == null) {
        localStorage.setItem('ironman', ironman);
    }
}

function getSpidermanRating() {
    const spiderman = document.querySelector('.spiderman').value;

    if (localStorage.getItem('spiderman') == null) {
        localStorage.setItem('spiderman', spiderman);
    }
}

function getCaptainRating() {
    const captain = document.querySelector('.captain').value;

    if (localStorage.getItem('captain') == null) {
        localStorage.setItem('captain', captain);
    }
}

function getThorRating() {
    const thor = document.querySelector('.thor').value;

    if (localStorage.getItem('thor') == null) {
        localStorage.setItem('thor', thor);
    }
}

function getHulkRating() {
    const hulk = document.querySelector('.hulk').value;

    if (localStorage.getItem('hulk') == null) {
        localStorage.setItem('hulk', hulk);
    }
}

function getWonderwomanRating() {
    const wonderwoman = document.querySelector('.wonderwoman').value;

    if (localStorage.getItem('wonderwoman') == null) {
        localStorage.setItem('wonderwoman', wonderwoman);
    }
}

function getBlackwidowRating() {
    const blackwidow = document.querySelector('.blackwidow').value;

    if (localStorage.getItem('blackwidow') == null) {
        localStorage.setItem('blackwidow', blackwidow);
    }
}

function getDeadpoolRating() {
    const deadpool = document.querySelector('.deadpool').value;

    if (localStorage.getItem('deadpool') == null) {
        localStorage.setItem('deadpool', deadpool);
    }
}