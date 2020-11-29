'use strict'
window.addEventListener('DOMContentLoaded', function () {

  function sda(){
    return fetch('http://venisoking.ru/heart?data')
    .then(data => data.json())
    .then(data => console.log(data))
  }

  sda();

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
  sport = document.querySelector('.sport'), //sport vypad
  sex = document.querySelector('.sex');


  let itemCard = document.querySelector('.item');

  let patientArr = {};

  const wrapBody = document.querySelector('.overlay');
  console.log(wrapBody);


  // https://jsonplaceholder.typicode.com/users


  function sendPost(method = 'POST', url = 'http://venisoking.ru/heart' , body) {

    loading.classList.remove('hidden');

    body = {
      d_art: {
        age: age.value, 
        heightPeople: heightPeople.value, 
        weightPeople: weightPeople.value,
        mestoProz: {
          value: mestoProz.value, 
          text: $(".mestoProz option:selected").text()
        }, 
        dostatok: {
          value: dostatok.value, 
          text: $(".dostatok option:selected").text()
        }
      },
      d_onmk: {
        age: age.value, 
        kholesterin: kholesterin.value, 
        sex: {
          value: sex.value, 
          text: $(".sex option:selected").text()
        }, 
        kurenie: {
          value: kurenie.value, 
          text: $(".kurenie option:selected").text()
        }, 
        dostatok: {
          value: dostatok.value, 
          text: $(".dostatok option:selected").text()
        },
        alc: {
          value: alc.value, 
          text: $(".alc option:selected").text()
        }
      },
        d_steno: {
          age: age.value,
          glukoza: glukoza.value,
          mestoProz: {
            value: mestoProz.value, 
            text: $(".mestoProz option:selected").text()
          }, 
          kurenie: {
            value: kurenie.value, 
            text: $(".kurenie option:selected").text()
          }, 
          dostatok: {
            value: dostatok.value, 
            text: $(".dostatok option:selected").text()
          }
        },
        d_heart: {
          age: age.value,
          glukoza: glukoza.value,
          kholesterin: kholesterin.value, 
          sex: {
            value: sex.value, 
            text: $(".sex option:selected").text()
          }, 
          kurenie: {
            value: kurenie.value, 
            text: $(".kurenie option:selected").text()
          }, 
          dostatok: {
            value: dostatok.value, 
            text: $(".dostatok option:selected").text()
          }
        },
      namePacient: namePacient.value,
      age: age.value, 
      heightPeople: heightPeople.value, 
      weightPeople: weightPeople.value,
      glukoza: glukoza.value,
      kholesterin: kholesterin.value, 
      sex: {
        value: sex.value, 
        text: $(".sex option:selected").text()
      }, 
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

    const headers = {
      'Content-Type': 'application/json'
    }

    return fetch(url, {

        method: method,
        body: JSON.stringify(body),
        headers: headers
      })
      .then(response => response.json())
      .then(json => {
             
        console.log(json)
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
                                 ФИО - ${json.namePacient}
                                </li>
                                <li>
                                  Пол - ${json.sex.text}
                                </li>
                                <li>
                                  Рост - ${json.heightPeople}
                                </li>
                                <li>
                                  Вес - ${json.weightPeople}
                                </li>
                                 <li>
                                  Глюкоза - ${json.glukoza}
                                </li>
                                 <li>
                                  Холестерин - ${json.kholesterin}
                                </li>
                            </ul>
                        </div>
                        <!-- <button class="class="card__btn card__btn-blue"">Подробнее</button> -->
                    </div>
                    <div class="main__item main__item-center card" style="color: black;">

                        <div class="card__header">
                            ${json.namePacient}
                        </div>

                        <div class="card__list">
                            <ul class='main'>
                                <li>
                                    <strong>Место жительства</strong>
                                    <span>${json.mestoProz.text}</span>
                                </li>
                                <li>
                                    <strong>Образ жизни</strong>
                                    <span>${json.obraz.text}</span>
                                </li>
                                <li>
                                    <strong>Достаток</strong>
                                    <span>${json.dostatok.text}</span>
                                </li>
                                <li>
                                    <strong>Стресс</strong>
                                    <span>${json.stress.text}</span>
                                </li>
                                <li>
                                    <strong>Курение</strong>
                                    <span>${json.kurenie.text}</span>
                                </li>
                                <li>
                                    <strong>Алкоголь</strong>
                                    <span>${json.alc.text}</span>
                                </li>
                                <li>
                                    <strong>Спорт</strong>
                                    <span>${json.sport.text}</span>
                                </li>
                            </ul>
                            <div>
                              <strong>Вероятность возникновения сердечной недостаточности</strong>
                            </div>
                            <progress max="100" value="10" id="progress"></progress>
                            <div>
                              <strong>Вероятность возникновения ОНМК</strong>
                            </div>
                            <progress max="100" value="16" id="progress"></progress>
                            <div>
                              <strong>Вероятность возникновения стенокардии</strong>
                            </div>
                            <progress max="100" value="43" id="progress"></progress>
                            <div>
                              <strong>Вероятность возникновения артериальной гипертензии</strong>
                            </div>
                            <progress max="100" value="24" id="progress"></progress>
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