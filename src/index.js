

module.exports = function toReadable(number) {
    const numString = number + '';
    let arr = numString.split('');
    for (let i = arr.length - 1; i >= 0; i--) {
        if ((i + 2) % 3 !== arr.length % 3) {
            switch (arr[i]) {
                case '1':
                    arr[i] = 'one';
                    break;

                case '2':
                    arr[i] = 'two';
                    break;

                case '3':
                    arr[i] = 'three';
                    break;

                case '4':
                    arr[i] = 'four';
                    break;

                case '5':
                    arr[i] = 'five';
                    break;

                case '6':
                    arr[i] = 'six';
                    break;

                case '7':
                    arr[i] = 'seven';
                    break;

                case '8':
                    arr[i] = 'eight';
                    break;

                case '9':
                    arr[i] = 'nine';
                    break;

                    case '0':
                        if(arr.length === 1){arr[i] = 'zero';}
                    
                    break;
            }
        } else if (arr[i] == '1') {
            let k = i + 1;

            switch (arr[k]) {
                case '0':
                    arr[k] = '';
                    arr[i] = 'ten';
                    break;

                case 'one':
                    arr[k] = '';
                    arr[i] = 'eleven';
                    break;

                case 'two':
                    arr[k] = '';
                    arr[i] = 'twelve';
                    break;

                case 'three':
                    arr[k] = '';
                    arr[i] = 'thirteen';
                    break;

                case 'four':
                    arr[k] = '';
                    arr[i] = 'fourteen';
                    break;

                case 'five':
                    arr[k] = '';
                    arr[i] = 'fifteen';
                    break;

                case 'six':
                    arr[i + 1] = '';
                    arr[i] = 'sixteen';
                    console.log('rrr');
                    break;

                case 'seven':
                    arr[k] = '';
                    arr[i] = 'seventeen';
                    break;

                case 'eight':
                    arr[k] = '';
                    arr[i] = 'eighteen';
                    break;

                case 'nine':
                    arr[k] = '';
                    arr[i] = 'nineteen';
                    break;
            }

        } else {
            switch (arr[i]) {

                case '2':
                    arr[i] = 'twenty';
                    break;

                case '3':
                    arr[i] = 'thirty';
                    break;

                case '4':
                    arr[i] = 'forty';
                    break;

                case '5':
                    arr[i] = 'fifty';
                    break;

                case '6':
                    arr[i] = 'sixty';
                    break;

                case '7':
                    arr[i] = 'seventy';
                    break;

                case '8':
                    arr[i] = 'eighty';
                    break;

                case '9':
                    arr[i] = 'ninety';
                    break;
            }
        }
    }

    if (arr.length > 2) { arr.splice(-2, 0, 'hundred'); }
    if (arr.length > 4) { arr.splice(-4, 0, 'thousand'); }
    if (arr.length > 7) { arr.splice(-7, 0, 'hundred'); }
    if (arr.length > 9) { arr.splice(-9, 0, 'million'); }
    if (arr.length > 11) { arr.splice(-12, 0, 'hundred'); }
    if (arr.length > 13) { arr.splice(-14, 0, 'thousand'); }

newArray = arr.filter(function(f) { return f !== '' && f!== '0' })

    let str = newArray.join(' ');

    console.log(str);
    return str;
}