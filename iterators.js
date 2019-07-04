const bands = ['dead & company', 'fleetwood mac', 'eagles', 'the doobie brothers'];
bands.forEach(band =>
    console.log('My favorite band is ' + band));


// Iterate using forEach + interpolation

const bands2 = ['dead & company', 'fleetwood mac', 'eagles', 'the doobie brothers'];
bands2.forEach(band2 =>
    console.log(`My favorite band is ${band2}.`));


// Iterate using map function

const bands3 = ['dead & company', 'fleetwood mac', 'eagles', 'the doobie brothers'];
bands3.map(band3 =>
    console.log('My favorite band is '+ band3));


// Filter through an array

const bands4 = ['dead & company', 'fleetwood mac', 'eagles', 'the doobie brothers'];

// Return bands with more than 4 characters

bands4.filter(band4 => {
    return band4.length > 4;
});
