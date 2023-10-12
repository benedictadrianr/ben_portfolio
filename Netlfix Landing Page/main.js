const qnaList = document.querySelectorAll('[id^="qna-list-"]');
const qnaExtend = document.querySelectorAll('[id^="qna-extend-"]');
const faPlus = document.querySelectorAll('[id^="plus-"]');

function removeShow(){

    faPlus.forEach(item => {
        item.style.transform = 'rotate(0)';
    });

    qnaExtend.forEach(item => {
        item.style.display = 'none';
    });
}

function selectList(e){
    const qnaExtend = document.querySelector(`#qna-extend-${this.id.split('-')[2]}`);
    const faPlus = document.querySelector(`#plus-${this.id.split('-')[2]}`);

    removeShow();

    if(qnaExtend.style.display == 'none'){
    
        qnaExtend.style.display = 'block';

        faPlus.style.transform = 'rotate(45deg)';
    }
}

qnaList.forEach(item => {
    item.addEventListener('click', selectList);
});