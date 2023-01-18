// complete the given function

function palindrome(str){
    //converting string to array
    let array = str.split('');
    //converting reverse array
    let reverse=array.reverse();
    //join the reverse array and mae string
    let reversestring=reverse.join('');

    if(str == reversestring){
        return true
    }else{
        false
    }

}

module.exports = palindrome
