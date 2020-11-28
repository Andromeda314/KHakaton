'use strict'
window.addEventListener('DOMContentLoaded', function () {

  const loading = document.querySelector('.load');

  window.addEventListener('load', function(){
    loading.classList.add('hidden');
  })
  // window.addEventListener('load', function(){
  //   const loading = document.querySelector('.load');
  //   loading.classList.add('hidden');
  // })

  const namePacient = document.querySelector('.namePacient'), //ФИО
  glukoza = document.querySelector('.glukoza'), //глюкоза  
  kholesterin = document.querySelector('.kholesterin'), //холестерин
  age = document.querySelector('.age'), //возрасt, 
  heightPeople = document.querySelector('.heightPeople'), // rost
  weightPeople = document.querySelector('.weightPeople'); // ves

  let obraz = document.querySelector('.obraz'), //obraz vypad
  stress = document.querySelector('.stress'), //stress vypad
  dostatok = document.querySelector('.dostatok'), //dostatok vypad
  mestoProz = document.querySelector('.mestoProz'), //mestoProzivania vypad
  alc = document.querySelector('.alc'), //alc vypad
  kurenie = document.querySelector('.kurenie'), //kurenie vepad
  sport = document.querySelector('.sport'); //sport vypad


  let itemCard = document.querySelector('.item');

  let patientArr = {};

  const wrapBody = document.querySelector('.overlay');
  console.log(wrapBody);


   


//   function sendPost(method = 'POST', url = 'https://jsonplaceholder.typicode.com/users', body) {
      function sendPost(){

    loading.classList.remove('hidden');

    body = {
      namePacient: namePacient.value,
      age: age.value, 
      heightPeople: heightPeople.value, 
      weightPeople: weightPeople.value,
      glukoza: glukoza.value,
      kholesterin: kholesterin.value, 
      obraz: {
        value: obraz.value, 
        text: $(".obraz option:selected").text()
      }, 
      stress: {
        value: stress.value, 
        text: $(".stress option:selected").text()
      }, 
      dostatok: {
        value: dostatok.value, 
        text: $(".dostatok option:selected").text()
      }, 
      mestoProz: {
        value: mestoProz.value, 
        text: $(".mestoProz option:selected").text()
      }, 
      alc: {
        value: alc.value, 
        text: $(".alc option:selected").text()
      }, 
      kurenie: {
        value: kurenie.value, 
        text: $(".kurenie option:selected").text()
      }, 
      sport: {
        value: sport.value, 
        text: $(".sport option:selected").text()
      }, 
    };

//     const headers = {
//       'Content-Type': 'application/json'
//     }

//     return fetch(url, {

//         method: method,
//         body: JSON.stringify(body),
//         headers: headers
//       })
//       .then(response => response.json())
//       .then(json => {
             
//         console.log(json)
        return function(){
        itemCard.innerHTML = `
          <div class="overlay row">
            <div class="wrap">
                <div class="wrap__item title row">
                    <h2>Результаты исследования</h2>
                    <button class="title__btn">Войти</button>
                </div>
                <div class="wrap__item main row">
                    <div class="main__item main__item-left card" style="color: black;">
                        <div class="card__header">
                            Антропометрия
                        </div>
                        <div class="card__list">
                            <ul class="patientMainInfo">
                                <li>
                                 ФИО - ${body.namePacient}
                                </li>
                                <li>
                                  Рост - ${body.heightPeople}
                                </li>
                                <li>
                                  Вес - ${body.weightPeople}
                                </li>
                                 <li>
                                  Глюкоза - ${body.glukoza}
                                </li>
                                 <li>
                                  Холестерин - ${body.kholesterin}
                                </li>
                            </ul>
                        </div>
                        <!-- <button class="class="card__btn card__btn-blue"">Подробнее</button> -->
                    </div>
                    <div class="main__item main__item-center card" style="color: black;">

                        <div class="card__header">
                            ${body.namePacient}
                        </div>

                        <div class="card__list">
                            <ul>
                                <li>
                                    <strong>Место жительства</strong>
                                    <span>${body.mestoProz.text}</span>
                                    <span> - г. Кемерово</span>
                                </li>
                                <li>
                                    <strong>Образ жизни</strong>
                                    <span>${body.obraz.text}</span>
                                </li>
                                <li>
                                    <strong>Достаток</strong>
                                    <span>${body.dostatok.text}</span>
                                </li>
                                <li>
                                    <strong>Стресс</strong>
                                    <span>${body.stress.text}</span>
                                </li>
                                <li>
                                    <strong>Курение</strong>
                                    <span>${body.kurenie.text}</span>
                                </li>
                                <li>
                                    <strong>Алкоголь</strong>
                                    <span>${body.alc.text}</span>
                                </li>
                                <li>
                                    <strong>Спорт</strong>
                                    <span>${body.sport.text}</span>
                                </li>
                                <li>
                                    <strong>Предварительный диагноз</strong>
                                    <span>Сердечная недостаточность</span>
                                </li>
                            </ul>
                        </div>

                        <button class="card__btn card__btn-green repeatBtn">Повторный осмотр</button>
                        <button class="card__btn card__btn-white recomendation">Рекомендации</button>

                    </div>
                </div>
            </div>
        </div>
    `

        document.querySelector('.repeatBtn').addEventListener('click', () => {
          itemCard.innerHTML = '';
          itemCard.appendChild(wrapBody)
        })

        document.querySelector('.recomendation').addEventListener('click', () => {
          let modal = document.querySelector('.modal');
          modal.style.display = 'block';
          let closeBtn = document.querySelector('.closeBtn');
          closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
          })
        })

        loading.classList.add('hidden');

      })
  }


  document.querySelector('.sendForm').addEventListener('click', function() {
    sendPost();
  })


})
