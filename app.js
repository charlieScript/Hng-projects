let data = [
    {principal: 2500, time: 1.8},
    {principal: 1000, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3}
];

function interestCalculator(data) {
    let interestData = [];
    data.forEach(i => {
        if (i.principal >= 2500 && (i.time > 1 && i.time < 3 )) {
            let rate = 3;
            let interest;
            interest = (i.principal * i.time * rate) / 100;
            interestData.push({
                principal: i.principal,
                time: i.time,
                rate: rate,
                interest: interest
            })
        } else if (i.principal >= 2500 && i.time < 3) {
            let rate = 4;
            let interest;
            interest = (i.principal * i.time * rate) / 100;
            interestData.push({
              principal: i.principal,
              time: i.time,
              rate: rate,
              interest: interest
            });
        } else if (i.principal < 2500 && i.time <= 1) {
            let rate = 2;
            let interest;
            interest = (i.principal * i.time * rate) / 100;
            interestData.push({
              principal: i.principal,
              time: i.time,
              rate: rate,
              interest: interest
            });
        } else {
            let rate = 1;
            let interest;
            interest = (i.principal * i.time * rate) / 100;
            interestData.push({
              principal: i.principal,
              time: i.time,
              rate: rate,
              interest: interest
            });
        } 
    });
    console.log(interestData);
    return interestData;
}

interestCalculator(data)