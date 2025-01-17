document .addEventListener('DOMContentLoaded', function(){
    const textarea = document.getElementById('messageInput');
    const currentCount = document.getElementById('currentCount');
    const instructions = document.getElementById('instructions');
    const maxLength = parseInt(textarea.getAttribute('maxLength'));

    function updateCharCount(){
        const currentLength = textarea.value.length;
        currentCount.textContent = currentLength;

        if(currentLength === 0){
            instructions.textContent = "It should have a character count. The number should increase based on what user types.";
            instructions.style.color = "#666";
            textarea.parentElement.classList.remove('limit-reached');
        }else if(currentLength === maxLength){
            instructions.textContent = "User should not be allowed to enter more than the maximun character count of 250. Upon hitting the maximum limit of 250, border of the textarea should turn red.";
            instructions.style.color = "red";
            textarea.parentElement.classList.add('limit-reached');
        }else{
            instructions.textContent = "Character count should go up as the user keeps typing.";
            instructions.style.color = "#666";
            textarea.parentElement.classList.remove('limit-reached');
        }
    }
    textarea.addEventListener('input', updateCharCount);
    updateCharCount();
});