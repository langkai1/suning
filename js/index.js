window.onload=function () {
    let shouji=document.getElementsByClassName("shouji");
    let b1=document.getElementsByClassName("b1");
    let cdh=document.getElementsByClassName("cdh");

    for (let i in shouji){

        shouji[i].onmouseenter=function () {
            shouji[i].className+=" b13";
        }
        shouji[i].onmouseleave=function () {
            shouji[i].className="shouji b12";
        }
    }
    for (let i in b1){
        b1[i].onmouseenter=function () {
            b1[i].className+=" b14";
            if(i==0){
                shouji[0].className+=" b12";
                shouji[1].className+=" b12";
                shouji[2].className+=" b12";
            }
            else if(i==1){
                shouji[3].className+=" b12";
                shouji[4].className+=" b12";
                shouji[5].className+=" b12";
                shouji[6].className+=" b12";
            }
            else if(i==2){
                shouji[7].className+=" b12";
                shouji[8].className+=" b12";
                shouji[9].className+=" b12";
            }
            else if(i==3){
                shouji[10].className+=" b12";
                shouji[11].className+=" b12";
                shouji[12].className+=" b12";
            }
            else if(i==4){
                shouji[13].className+=" b12";
                shouji[14].className+=" b12";
                shouji[15].className+=" b12";
                shouji[16].className+=" b12";
            }
            else if(i==5){
                shouji[17].className+=" b12";
                shouji[18].className+=" b12";
                shouji[19].className+=" b12";
                shouji[20].className+=" b12";
            }
            else if(i==6){
                shouji[21].className+=" b12";
                shouji[22].className+=" b12";
                shouji[23].className+=" b12";
            }
            else if(i==7){
                shouji[24].className+=" b12";
                shouji[25].className+=" b12";
                shouji[26].className+=" b12";
                shouji[27].className+=" b12";
            }
            else if(i==8){
                shouji[28].className+=" b12";
                shouji[29].className+=" b12";
                shouji[30].className+=" b12";
                shouji[31].className+=" b12";
            }
            else if(i==9){
                shouji[32].className+=" b12";
                shouji[33].className+=" b12";
                shouji[34].className+=" b12";
            }
            else if(i==10){
                shouji[35].className+=" b12";
                shouji[36].className+=" b12";
                shouji[37].className+=" b12";
                shouji[38].className+=" b12";
            }
            else if(i==11){
                shouji[39].className+=" b12";
                shouji[40].className+=" b12";
                shouji[41].className+=" b12";

            }
            else if(i==12){
                shouji[42].className+=" b12";
                shouji[43].className+=" b12";

            }
            else {
                shouji[44].className+=" b12";
                shouji[45].className+=" b12";
                shouji[46].className+=" b12";
                shouji[47].className+=" b12";
            }
            //
            for(let j=0;j<cdh.length;j++){
                cdh[j].style.display="none";
            }
            cdh[i].style.display="block";
        }
        b1[i].onmouseleave=function () {
            cdh[i].style.display="none";

            //
            b1[i].className="b1";
            if(i==0){
                shouji[0].className="shouji";
                shouji[1].className="shouji";
                shouji[2].className="shouji";
            }
            else if(i==1){
                shouji[3].className="shouji";
                shouji[4].className="shouji";
                shouji[5].className="shouji";
                shouji[6].className="shouji";
            }
            else if(i==2){
                shouji[7].className="shouji";
                shouji[8].className="shouji";
                shouji[9].sclassName="shouji";
            }
            else if(i==3){
                shouji[10].className="shouji";
                shouji[11].className="shouji";
                shouji[12].className="shouji";
            }
            else if(i==4){
                shouji[13].className="shouji";
                shouji[14].className="shouji";
                shouji[15].className="shouji";
                shouji[16].className="shouji";
            }
            else if(i==5){
                shouji[17].className="shouji";
                shouji[18].className="shouji";
                shouji[19].className="shouji";
                shouji[20].className="shouji";
            }
            else if(i==6){
                shouji[21].className="shouji";
                shouji[22].className="shouji";
                shouji[23].className="shouji";
            }
            else if(i==7){
                shouji[24].className="shouji";
                shouji[25].className="shouji";
                shouji[26].className="shouji";
                shouji[27].className="shouji";
            }
            else if(i==8){
                shouji[28].className="shouji";
                shouji[29].className="shouji";
                shouji[30].className="shouji";
                shouji[31].className="shouji";
            }
            else if(i==9){
                shouji[32].className="shouji";
                shouji[33].className="shouji";
                shouji[34].className="shouji";
            }
            else if(i==10){
                shouji[35].className="shouji";
                shouji[36].className="shouji";
                shouji[37].className="shouji";
                shouji[38].className="shouji";
            }
            else if(i==11){
                shouji[39].className="shouji";
                shouji[40].className="shouji";
                shouji[41].className="shouji";

            }
            else if(i==12){
                shouji[42].className="shouji";
                shouji[43].className="shouji";

            }
            else {
                shouji[44].className="shouji";
                shouji[45].className="shouji";
                shouji[46].className="shouji";
                shouji[47].className="shouji";
            }
        }
    }
    let close=document.querySelector(".close");
    let head=document.querySelector("header");
    let ad=document.querySelector(".ad");
    close.onclick=function () {
        head.style.display="none";
        ad.style.display="block";
    }
    ad.onclick=function () {
        head.style.display="block";
        ad.style.display="none";
    }
    }
