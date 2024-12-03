let resolve = {
    guide1: {
        channel1: 'value1',
        channel2: 'value2'
    },
    guide2: {
        channel3: 'value3'
    }
};

let guide = 'guide1';
let channel = 'channel2';

console.log(resolve[guide][channel] || 'shared'); // Output: 'value2'

channel = 'channel3';
console.log(resolve[guide][channel] || 'shared'); // Output: 'shared' (since resolve['guide1']['channel3'] does not exist)
