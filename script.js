window.addEventListener('load', ()=>{
	let sub1 = document.querySelector('#sub1');
  let sub2 = document.querySelector('#sub2');
  let sub3 = document.querySelector('#sub3');
  let sub4 = document.querySelector('#sub4');
  let sub5 = document.querySelector('#sub5');
  let sub6 = document.querySelector('#sub6');
  let sub7 = document.querySelector('#sub7');
  let sub8 = document.querySelector('#sub8');
  let sub9 = document.querySelector('#sub9');
  let sub10 = document.querySelector('#sub10');
  let sub11 = document.querySelector('#sub11');
  let sub12 = document.querySelector('#sub12');
  let sub13 = document.querySelector('#sub13');
  let sub14 = document.querySelector('#sub14');
  let sub15 = document.querySelector('#sub15');
  let sub16 = document.querySelector('#sub16');

   sub1.addEventListener('mouseover', mudarCor, false);
   sub2.addEventListener('mouseover', mudarCor, false);
   sub3.addEventListener('mouseover', mudarCor, false);
   sub4.addEventListener('mouseover', mudarCor, false);
   sub5.addEventListener('mouseover', mudarCor, false);
   sub6.addEventListener('mouseover', mudarCor, false);
   sub7.addEventListener('mouseover', mudarCor, false);
   sub8.addEventListener('mouseover', mudarCor, false);
   sub9.addEventListener('mouseover', mudarCor, false);
   sub10.addEventListener('mouseover', mudarCor, false);
   sub11.addEventListener('mouseover', mudarCor, false);
   sub12.addEventListener('mouseover', mudarCor, false);
   sub13.addEventListener('mouseover', mudarCor, false);
   sub14.addEventListener('mouseover', mudarCor, false);
   sub15.addEventListener('mouseover', mudarCor, false);
   sub16.addEventListener('mouseover', mudarCor, false);
});

function random(number){
	return Math.floor(Math.random()*(number-1));
}

function mudarCor(){
	let randonColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  this.style.backgroundColor = randonColor;
}