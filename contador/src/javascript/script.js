const value = document.getElementById('value');
const plusButtan = document.getElementById('plus');
const minusButtan = document.getElementById('minus');
const resetButtan = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervaId = 0;

plusButtan.addEventListener('mousedown', () => {
    intervaId =  setInterval( () => {
        count +=1;
        updateValue();
    }, 100);
});

minusButtan.addEventListener('mousedown', () => {
    intervaId =  setInterval( () => {
        count -=1;
        updateValue();
    }, 100);
});

resetButtan.addEventListener('click', () => {
    count = 0;
    updateValue();
});


document.addEventListener('mouseup', () => clearInterval(intervaId));