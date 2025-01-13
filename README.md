# otus-css-Spiridonova
<!-- Страница находится в процессе оформления -->
Данный лендинг был создан с помощью HTML/CSS как проектная работа по одноименному курсу OTUS 09.2024 - 01.2025.

Так как я начинающий верстальщик, то в проекте стили прописаны для каждого класса в отдельности, даже если они повторяются. Стили написаны с использованием расширения CSS - SСSS, что дало возможность использовать миксины и переменные.
Мексины и переменные позволяют уменьшить количество кода, т.е. заменить повторяющийся кода на миксин или переменную. 
Так же SCSS дает возможность распределить стили по папкам и подключить в нужных местах через @import.
В проекте так же имеются интерактивные элементы, которые реагируют на наведение или фокус. 

## Классы элементам присвоены с использованием методологии БЭМ (Блок- элемент - модификатор)

### Menu секция 
По бэм menu - это блок, list,text и buttons - это элементы 
меню далее выделяем блок button, item  является элементами блока button.
menu - это блок,  list - элемент блока меню, mob - является модификатором. 
list-mob название нового блока, где  item является элементом

### Секция MOD

cover-container является блоком,  box - является элементом, main - является модификатором.
Далее main-box  это название блока, где img и text являются элементами блока   main-box,
img-main является блоком, где mob и tablet являются модификаторами, так как отвечают на вопрос Какой 

### Секция Biography 

biography-container название блока, img, header,  text являются элементами блока biography-container
biography-container__img блок + элемент, далее mob и  tablet являются модификаторами 
biography-text является блоком, где name, position, skills, quote являются элементами
skills является блоком, где item является элементом 

### Секция Designers  
designers-container - это блок, header и  list являются элементами этого блока , 
Далее list уже является блоком, inner-box - элементом блока  list, big и normal  являются модификаторами
inner-box-big   - это блок с большой картинкой, img и text являются элементами этого блока, mob, tablet и  img-big бдут модификаторами элементов img и  text соответственно,
inner-text является блоком, где name,from и skills будут элементами, а  designer является модификатором 
designer-skills является блоком, где item является элементом

### Секция Testimonials 
testimonials-container - блок, где  header, box и quotes  являются элементами
следующий блок box, где list и img являются элементами, а url явялется модификатором элемента list
следующий блок list-url, где элемент - item, модификаторами являются text и  link
testimoniail будет модификатором элеменат img блока box
блок quotes имеет элементы text и img, модификаторами элемента img являются mob и tablet

### Секция Strong points 

В блоке strong-points-container если элементы  header и carousel
В блоке carousel есть элементы img и list, где column является модификатором list
mob и tablet являются модификаторами элемента img
В блоке list-column элементы header и navigation
В блоке navigation есть элементы item

### Футер с контактами  

footer - блок, где data, name и  text элементы 
phone и Email явялется модификатором элемента data





## Проект написан с использованием SASS

Архитектура построена по принципу шаблона 7-1: 7 папок, 1 файл. Однако созданы только те папки, которые были необходимы.
Так в папке SASS находятся: 
- abstracts, где расположены _variables.scss - переменные и  _mixins.scss  - миксины
- base, где распределены стили по файлам, одноименным секциям лендинга, а также файл со шрифтами для всего лендинга: _typography.scss - Типографика
- components, где находятся стили модального окна 
- layout, где находятся стили _navigation.scss  - навигации и _footer.scss - Футера

Отдельно создан файл style.scss, которая объединяет все стили через @import

### Переменные и Миксины
Переменные созданы для примера, использованы в файле typigraphy для footer и в файле testimonials для list-url__item_link.
Все переменные расположены в папке _variables.scss.

Миксины используются для оптимизации повторяющегося когда. Все миксины расположены в файле _mixins.scss. В файлы миксины подключаются через @include

Так миксин font_mob содержит аргументы, благодаря которым прописывать стили шрифтов стало проще. Использовано в основном для мобильной верстки. Возможно далее будет модифицировано и использовано для шрифтов в файле _typography.scss.

##### _navigation.scss
Например в _navigation.scss для класса .list-mob__item прописано @include font_mob (400,  'Bitter', 40px, 48px)

Это можно было записать как: 
font-family: 'Bitter', serif;
font-weight: 400;
font-size: 40px;
line-height: 48px;

Таким образом запись занимает намного меньше места и гораздо быстрее понимается другим человеком, кто будет смотреть код. 

В этом же файле использован миксин hover__navigation для определения стилей при наведении курсора. 


##### _cover.scss
В этом файле использовала миксин font_mob в мобильной верстке для шрифтов.

Для класса .text__heading я указала  @include font_mob (400,  'Playfair Display', 70px, 93px)

Это можно было написать как: 
font-family: 'Playfair Display';
font-weight: 400;
font-size: 70px;
line-height: 93px;

Для класса .text__subtitle я указала @include font_mob (500,  'Roboto', 18px, 21px)

Это можно было написать как: 
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;


##### _biography.scss
В этом файле использовала миксин font_mob в мобильной верстке для шрифтов.

Для класса .biography-text__name я указала @include font_mob (400,  'Playfair Display', 64px, 85px).

Это можно было написать как: 
font-family: 'Playfair Display';
font-weight: 400;
font-size: 64px;
line-height: 85px;

Для класса .biography-text__position я указала @include font_mob (500,  'Roboto', 18px, 21px);

Это можно было написать как: 
font-family: 'Roboto';
font-weight: 500;
font-size: 18px;
line-height: 21px;

Для класса .biography-text__skills я указала те же параметры, что и для .biography-text__position.

Для класса .biography-text__quote я указала @include font_mob (300,  'Bitter', 30px, 36px);

Это можно было написать как: 
font-family: 'Bitter';
font-weight: 300;
font-size: 30px;
line-height: 36px;


##### _designers.scss
На данном этапе миксины не использовала 


##### _testimonials.scss
В этом файле использова миксин font_mob в мобильной верстке для шрифтов. А так же переменная none-decoration-black.

Переменная использовала для класса .list-url__item_link: 
Запись @extend .none-decoration-black;

В переменной находится код: 
text-decoration:none;
color: #000;

Для класса .testimonials-container__header я указала @include font_mob (700,  'Roboto', 18px, 21px);

Это можно было написать как: 
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

Для класса .quotes__text я указала @include font_mob (300,  'Bitter', 30px, 36px);

Это можно было написать как: 
font-family: 'Bitter';
font-style: normal;
font-weight: 300;
font-size: 30px;
line-height: 36px;


###### _strong-points.scss
Для класса .strong-points-container__header я указала @include font_mob (700,  'Roboto', 18px, 21px);

Это можно было написать как: 
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;

Для класса .list-column__header я указала @include font_mob (400,  'Playfair Display', 46px, 100%); 

Это можно было написать как: 
font-family: 'Playfair Display';
font-style: normal;
font-weight: 400;
font-size: 46px;
line-height: 100%;

Для класса .navigation__item я указала @include font_mob (400,  'Bitter', 24px, 29px);

Это можно было написать как: 
font-family: 'Bitter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
  
Для классов .list-column__header и .navigation__item указала @include hover__navigation;

В данном миксине находится код: 
text-decoration: underline;
background-color: rgb(232, 222, 222);
transform: scale(1.2);
cursor: pointer;


##### _typography.scss
Для классов .footer__data_phone и .footer__data_Email использована переменная @extend .none-decoration-white;

В данной переменной содержится код: 
text-decoration:none;
color: #fff;

Для класса .modal-box__header я указала миксин @include font_mob (700,  'Roboto', 24px, 28px);

Это можно было написать как: 
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;

Для класса .modal-box__text я указала миксин @include font_mob (400,  'Roboto', 18px, 21px);

Это можно было написать как: 
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;

Для класса .input-name__input я указала миксин @include font_mob (400,  'Roboto', 16px, 19px);

Это можно было написать как:
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;


Для других классов также использован миксин @mixin font_mob.


##### _modal.scss
Для классов .input-name__input, .input-email__input и .input-comment__input использован  миксин @include input;

В этом миксине находится код: 
width: 100%;
min-height: 42px;
margin-bottom: 30px;

padding: 6px 10px;
border: 1px solid black;
border-radius: 8px;

Для мобильной версии использован миксин @include input-mob;

Для кнопок с классами .modal-box__button_cancel и .modal-box__button_send использован миксин @include button__footer;


В этом миксине находится код:
text-align: center;
width: 190px;
height: 60px;
text-decoration:none;
border: 2px solid black;
border-radius: 8px;

Для мобильной версии использован миксин @include button__footer_mob;

Для анимации наведения использован миксин @include button__hover;

В этом миксине находится код:
text-decoration: underline;
cursor: pointer;
transform: scale(1.2)




## Интерактивные элементы 
Добавлена анимация наведения на пункты меню и на навигационный список в карусели секции strong-points.
Так же добавлена анимация фокуса в модальное окно для инпутов и анимация наведения на кнопки Cancel и Send.



## Задачи по доработке 
Первое,что хотелось бы поправить в данном проекте - это переименовать миксин font_mob  в просто font, для того чтобы использовать для всех шрифтов. Считаю, что это значительно облегчит файл со шрифтами _typography.scss.

Второе, хотелось бы добавить больше различных анимаций и оживить лендинг за счет них. 










    