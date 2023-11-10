//Приклад плеєра
function calcSpace(amount, unit = "px") {
    return `${amount * 4}${unit}`;
}

function playTrackById(trackId) {
    ///get track name and stert
}

function play(trackName, trackId) {
    console.log(`Start ${trackName}`);
    playTrackById(trackId);

}

function end(oldTrackName, newTrackName) {
    console.log(`End playing ${oldTrackNametrackName}`);
    console.log(`Next track ${newTrackName}`);
}

function pauseStop(currentTrackName) {
    console.log(`Track ${currentTrackName} paused`);
}

function pausePlay(currentTrackName) {
    console.log(`Track ${currentTrackName} paused`);

    reloadDataTrack();

    play();
}

function reloadDataTrack(amount) {
    if (amount <= 0) {
        console.log('Data refreshed n-times')
    } else {
        console.log("Repeat refresh")
        //певний код оновлення дпних
        reloadDataTrack(amount - 1);
    }
}

reloadDataTrack(5);


//Приклад плеєра2
function calcSpace(amount, unit = "px") {
    return `${amount * 4}${unit}`;
}

function playTrackById(trackId) {
    ///get track name and start
}

function stopTrackById(trackId) {
    ///get track name and stop
}

function play(trackName, trackId) {
    console.log(`Start ${trackName}`);
    playTrackById(trackId);

}

function end(oldTrackName, newTrackName) {
    console.log(`End playing ${oldTrackNametrackName}`);
    console.log(`Next track ${newTrackName}`);
}

function pausePlay(currentTrackName) {
    console.log(`Track ${currentTrackName} paused`);

    reloadDataTrack();

    play();
}

function reloadDataTrack(amount) {
    if (amount <= 0) {
        console.log('Data refreshed n-times')
    } else {
        console.log("Repeat refresh")
        //певний код оновлення дпних
        reloadDataTrack(amount - 1);
    }
}

reloadDataTrack(5);

//приклад замикання
function pauseStopByTrack(trackName, trackId) {
    let originTrackName = trackName;
    let originTrackId = trackId;

    return function pauseStop() {
        stopTrackById(originTrackId);
        console.log(`Track ${originTrackName} paused`);
    }
}

const pauseStop123 = function pauseStop(originTrackId, originTrackName) {
    stopTrackById(originTrackId);
    console.log(`Track ${originTrackName} paused`);
}

pauseStop123();

const pauseStop456 = pauseStopByTrack("IT - Console log");

pauseStop456();

const runCommand = function (command, errorFn) {
    const result = command();

    if (!result) {
        return errorFn()
    }
}

runCommand(function () {
    console.log('Start comand');

    return 1 - 1;
}, function () {
    console.log("Error")
}
);

//стрілкова функція
function calcSpace(amount, unit = "px") {
    return `${amount * 4}${unit}`;
}

function playTrackById(trackId) {
    ///get track name and start
}

function stopTrackById(trackId) {
    ///get track name and stop
}

function play(trackName, trackId) {
    console.log(`Start ${trackName}`);
    playTrackById(trackId);

}

function end(oldTrackName, newTrackName) {
    console.log(`End playing ${oldTrackNametrackName}`);
    console.log(`Next track ${newTrackName}`);
}

function pausePlay(currentTrackName) {
    console.log(`Track ${currentTrackName} paused`);

    reloadDataTrack();

    play();
}

function reloadDataTrack(amount) {
    if (amount <= 0) {
        console.log('Data refreshed n-times')
    } else {
        console.log("Repeat refresh")
        //певний код оновлення дпних
        reloadDataTrack(amount - 1);
    }
}

reloadDataTrack(5);

function pauseStopByTrack(trackName, trackId) {
    let originTrackName = trackName;
    let originTrackId = trackId;

    return () => {
        stopTrackById(originTrackId);
        console.log(`Track ${originTrackName} paused`);
    }
}

const pauseStop123 = function pauseStop(originTrackId, origin
    stopTrackById(originTrackId);
console.log(`Track ${originTrackName} paused`);
}

pauseStop123();

const pauseStop456 = pauseStopByTrack("IT - Console log");

pauseStop456();

const runCommand = function (command, errorFn) {
    const result = command();

    if (!result) {
        return errorFn()
    }
}

runCommand(
    () => {
        console.log('Start comand');
        return 1 - 1;
    },
    () => console.log("Error")
);

//проблемаитика VAR

const testFunc = () => {
    console.log(test);

    var test = 10;

    return test;

};

console.log(testFunc());

//карарована функція
function calcSpace(amount, unit = "px") {
    return `${amount * 4}${unit}`;
}

function playTrackById(trackId) {
    ///get track name and start
}

function stopTrackById(trackId) {
    ///get track name and stop
    console.log(`get track name from ID ${trackId} and stop`)
}

function play(trackName, trackId) {
    console.log(`Start ${trackName}`);
    playTrackById(trackId);

}

function end(oldTrackName, newTrackName) {
    console.log(`End playing ${oldTrackNametrackName}`);
    console.log(`Next track ${newTrackName}`);
}

function pausePlay(currentTrackName) {
    console.log(`Track ${currentTrackName} paused`);

    reloadDataTrack();

    play();
}

function pauseStopByTrack(trackName, trackId) {
    let isPause = null;

    return () => {
        if (isPause == ttrue) {
            return;
        }

        stopTrackById(trackId);
        console.log(`Track ${trackName} paused`);
        isPause = true;
    };
}

const pauseStop456 = pauseStopByTrack("IT - Console log", 10);

pauseStop456();

//функція мемо
const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {
    return (amount, unit = "px") => {
        if (oldAmount === amount && unit === oldUnit) {
            console.log("Memo");
            return oldResult;
        }

        oldResult = `${amount * 4}${unit}`;
        oldAmount = amount;
        oldUnit = unit;


        return oldResult;
    };
};

const calcSpace = memoCalcSpace();

console.log(calcSpace(4));
console.log(calcSpace(4));

//композиція функцій
const getSpaceFromDesign = (componentName) => {
    switch (componentName) {
        case 'button':
            return 4;
        case 'card':
            return 3;
        default:
            return 2;
    }
};

const isMobile = true;

const amount = getSpaceFromDesign("button");
const amountMobile = isMobile ? amount / 2 : amount;
const amountInPx = calcSpace(amount);

const calcSpaceFromDesign = (componentName) => {
    const result = getSpaceFromDesign(componentName);
    return calcSpace(isMobile ? result / 2 : result);
};

console.log("/////")
console.log(calcSpaceFromDesign("button"));

