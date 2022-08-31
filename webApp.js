const result = () => {
    let saving=document.querySelector("#saving").value;
    let home=document.querySelector("#home").value;
    let year=parseInt(home/saving/12);
    let month=parseInt(home/saving%12);
        document.querySelector("#result").innerHTML
        =`내 집 마련까지 ${year}년 ${month}개월 남았네요!`;
}