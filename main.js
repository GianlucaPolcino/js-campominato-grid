const container = document.querySelector('.gp-container');
const btn = document.querySelector('.btn-outline-dark');
const option = document.getElementById('options');

btn.addEventListener('click', function(){
    console.log(option.value);
    container.innerHTML = "";
    let squares;
    if(option.value == 'easy'){
        squares = 100;
    }else if(option.value == 'normal'){
        squares = 81;
    }else{
        squares = 49;
    }

    init(squares);
})

function init(tot){
    for(let i = 0; i < tot; i++){
        const sq = createSquare(container);
        sq.innerHTML = i + 1;
        sq.addEventListener('click',function(){

        })
    
    }
    
}

function createSquare(target){
    const sq = document.createElement('div');
    target.append(sq);
    if(option.value == 'easy'){
        sq.classList.add('gp-easy');
    }else if(option.value == 'normal'){
        sq.classList.add('gp-normal');
    }else{
        sq.classList.add('gp-hard');
    }
    return sq;
}
