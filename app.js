
    for (var i = 1; i <=100; i++)
    {
       if (i % 3 === 0 && i % 5 ===0){
            console.log('FizzBuzz');}
        else if (i % 3 === 0){
            console.log('Fizz');}
        else if (i % 5 === 0){
            console.log('Buzz');}
        else {
        console.log(i);
        }

    }
    var beverage = ['milk', 'beer','beer', 'milk', 'milk'];
    {
        console.log(beverage);
        for (var i = 0; i < beverage.length; i++) {
            if (beverage[i] === 'milk') {
                console.log('good');
                break;
            }
        }
    }
        for (var i = 0; i < beverage.length; i++) {
            if (beverage[i] === 'beer') {
                console.log('bad');
                break;
            }
        }

        for (var i = 0; i < beverage.length; i++) {
            if (beverage[i] === 'beer') {
                console.log('bad');
                break;
            }
        }


        for (var i = 0; i < beverage.length; i++) {
            if (beverage[i] === 'milk') {
                console.log('good');
                break;
            }
        }
        for (var i = 0; i < beverage.length; i++) {
            if (beverage[i] === 'milk') {
                console.log('good');
                break;
            }
        }