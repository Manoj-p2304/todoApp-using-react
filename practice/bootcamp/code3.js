function CheckTheSeason() {
    let isValidInput = false;
    let season;
    while (!isValidInput) {
        const monthInput = ("4");
        const monthNumber = parseInt(monthInput);
        if (!isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
            isValidInput = true;
            switch (monthNumber) {
                case 2:
                case 3:
                    season = "Vasanta";
                    break;
                case 4:
                case 5:
                    season = "Grishma / Summer";
                    break;
                case 6:
                case 7:
                    season = "Monsoon / Rainy";
                    break;
                case 8:
                case 9:
                    season = "Sharada";
                    break;
                case 10:
                case 11:
                    season = "Hemanta";
                    break;
                case 12:
                case 1:
                    season = "Shishira / Winter";
                    break;
            }
            console.log(`The season for month ${monthNumber} is ${season}`);
        } else {
            console.error("Invalid month number. Please enter a number between 1 and 12.");
            break;
        }
    }
}
CheckTheSeason();
