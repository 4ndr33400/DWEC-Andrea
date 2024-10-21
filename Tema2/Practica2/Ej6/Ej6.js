function isPalindrome(){
    
    let wordInput =  document.getElementById("wordInput").value;
    let normalizedWord = wordInput.toLowerCase().replace(/\s/g, ''); 
    let reversedWord = normalizedWord.split('').reverse().join('');
    let isPalindrome = document.getElementById("isPalindrome"); 

    if(reversedWord === wordInput && wordInput !== ''){
        isPalindrome.textContent = `es palindromo`;
    } else {
        isPalindrome.textContent = `no es palindromo`;
    }
}