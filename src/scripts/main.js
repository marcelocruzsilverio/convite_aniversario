AOS.init();


const eventDate = new Date('Jan 29, 2024 19:00:00')
const eventTimeStamp = eventDate.getTime();

const counterOfHours = setInterval(function () {

    const actualTime = new Date();
    const actualTimeStamp = actualTime.getTime();



    const daysInMileseconds = 1000 * 60 * 60 * 24
    const hoursInMileseconds = 1000 * 60 * 60
    const minutesInMiliseconds = 1000 * 60



    const timeToEvent = eventTimeStamp - actualTimeStamp;
    console.log(timeToEvent);


    const daysToEvent = Math.floor(timeToEvent / (daysInMileseconds));

    const hoursToEvent = Math.floor(timeToEvent % (daysInMileseconds) / (hoursInMileseconds))

    const minutesToEvent = Math.floor(timeToEvent % (hoursInMileseconds) / (minutesInMiliseconds))

    const secondsToEvent = Math.floor(timeToEvent % (minutesInMiliseconds) / 1000)



    document.getElementById('counter').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;


    if (timeToEvent < 0) {
        clearInterval(counterOfHours);
        document.getElementById('counter').innerHTML = 'Evento expirado';
    }



}, 1000)


