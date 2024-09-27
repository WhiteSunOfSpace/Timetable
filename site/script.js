let All_Directions = new Array(10);
 
for (let i = 0; i < All_Directions.length; i++) {
  All_Directions[i] = new Array(20);
}

All_Directions[0] = ["Павелецкая", "Дербеневская", "Верхние-котлы", "Нагатинская", "Коломенская", 
                    "Чертановская", "Бирюлево-Товарная", "Бирюлево-Пассажирская", "Булатниково",
                    "Расторгуево", "Калинина", "Ленинская", "Домодедово", "Взлетная", "Востряково",
                    "Белые-столбы", "Барыбино", "Вельяминово", "Ожерелье", "Узуново"];
All_Directions[1] = ["Ярославская", "Яуза", "Ростокино", "Лосиноостровская", "Мытищи", 
                    "Болшево", "Валентиновка", "Загорянская", "Соколовская",
                    "Воронок", "Щелково", "Гагаринская", "Чкаловская", "Бахчиванджи", "Циолковская",
                    "Осеевская", "Монино", "Кашино", "Колонтаево", "Бужаниново"];
All_Directions[2] = ["Казанская", "Электрозаводская", "Сортировочная", "Авиамоторная", "Андроновка", 
                    "Перово", "Плющево", "Вешняки", "Выхино",
                    "Косино", "Ухтоминская", "Панки", "Томилино", "Красково", "Малаховка",
                    "Удельная", "Быково", "Ипподром", "Бронницы", "Фаустово"];
All_Directions[3] = ["Ленинградская", "Останкино", "Лихоборы", "Моссельмаш", "Грачевская", 
                    "Ховрино", "Левобережная", "Химки", "Молжаниново",
                    "Подрезково", "Сходня", "Фирсановская", "Малино", "Алабушево", "Радищево",
                    "Поваровка", "Подсолнечная", "Сенеж", "Клин", "Решетниково"];
All_Directions[4] = ["Белорусская", "Беговая", "Тестовская", "Фили", "Кунцевская", 
                    "Сетунь", "Немчиновка", "Сколково", "Баковка",
                    "Одинцово", "Отрадное", "Пионерская", "Перхушково", "Здравница", "Жаворонки",
                    "Дачное", "Голицыно", "Петелино", "Часцовская", "Кубинка"];
All_Directions[5] = ["Курская", "Нижегородская", "Чухлинка", "Кусково", "Новогиреево", 
                    "Реутов", "Никольское", "Салтыковская", "Кучино",
                    "Ольгино", "Железнодорожная", "Черное", "Заря", "Купавна", "Электроугли",
                    "Храпуново", "Есино", "Фрязево", "Металлург", "Электросталь"];
All_Directions[6] = ["Товарная", "Калитники", "Новохохловская", "Текстильщики", "Печатники", 
                    "Люблино", "Депо", "Перерва", "Курьяново",
                    "Москворечье", "Царицыно", "Покровское", "Битца", "Бутово", "Щербинка",
                    "Остафьево", "Силикатная", "Подольск", "Гривно", "Львовская"];
All_Directions[7] = ["Киевская", "Минская", "Матвеевская", "Аминьевская", "Очаково", 
                    "Мещерская", "Солнечная", "Переделкино", "Мичуринец",
                    "Внуково", "Толстопальцево", "Кокошкино", "Санино", "Апрелевка", "Алабино",
                    "Селятино", "Рассудово", "Ожигово", "Бекасово", "Нара"];
All_Directions[8] = ["Рижская", "Дмитровская", "Гражданская", "Стрешнево", "Щукинское", 
                    "Тушинская", "Трикотажная", "Волоколамская", "Пенягино",
                    "Павшино", "Красногорская", "Опалиха", "Аникеевка", "Нахабино", "Малиновка",
                    "Дедовск", "Снегири", "Манихино", "Троицкая", "Истра"];
All_Directions[9] = ["Савеловская", "Тимирязевская", "Окружная", "Дегунино", "Бескудниково", 
                    "Лианозово", "Марк", "Новодачная", "Долгопрудная",
                    "Водники", "Хлебниково", "Шереметьевская", "Лобня", "Луговая", "Некрасовская",
                    "Катуар", "Трудовая", "Икша", "Яхрома", "Дмитров"];


function parseLine(data, term, a, b){
    let str = '';
    str = data;

    let i = 6;

    let tt2 = 0;

    let pr = 0;
    let price = '';

    let tmp = "";
    let r = -1;
    let l = -1;
    for (let k = 0; k < 10; k++){
        for (let j = 0; j < 20; j++){
            if (All_Directions[k][j] === a){
                r = j;
            }
            if (All_Directions[k][j] === b){
                l = j;
            }
        }
    }
    if (r > l){
        tmp = a;
        a = b;
        b = tmp;
    }

    let check = false;
    for (let k = 0; k < 10; k++){
        for (let j = 0; j < 20; j++){
            if (All_Directions[k][j] === a){
                check = true;
            }
            if (check){
                if (All_Directions[k][j] !== b){
                    tt2 = tt2 + Math.floor(Math.random() * 3) + 3;
                    pr = pr + 10;
                }
                else{
                    check = false;
                }
            }
        }
    }

    price = '' + pr;
    let t2 = '';
    let hrs = Math.floor(tt2 / 60);
    let mnt = tt2 % 60;

    if (mnt < 10){
        t2 = "0" + hrs + ":0" + mnt;
    }
    else{
        t2 = "0" + hrs + ":" + mnt;
    }

    if (term === "t2"){
        return t2;
    }
    else if (term === "price"){
        return price;
    }
};

function isSuitable(a, b, from, to, wh){
    let d1 = -1, d2 = -1;
    for (let i = 0; i < 20; i++){
        if (All_Directions[wh][i] === from){
            d1 = i;
        }
        if (All_Directions[wh][i] === to){
            d2 = i;
        }
    }
    if (a < b){
        if ((a >= d1) && (b <= d2)){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        if ((b >= d2) && (a <= d1)){
            return true;
        }
        else{
            return false;
        }
    }
};

function checkDayOfWeek(currentdate){
    if ((currentdate.getDay() === 0) || (currentdate.getDay() === 6)){
        return "выходные";
    }
    else{
        return "будни";
    }
};

function isValid(a){
    let tmp = false;
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 20; j++){
            if (All_Directions[i][j] === a){
                tmp = true;
            }
        }
    }
    return tmp;
};

document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('Посмотреть');
    
    changeColorBtn.addEventListener('click', function() {
        
        var a = document.getElementById('field1').value.trim();
        var b = document.getElementById('field2').value.trim();
        
        var currentdate = new Date(); 
        var hour = Number(currentdate.getHours()) + 3;
        if (hour > 23){
            hour = hour - 24;
        }
        var minute = Number(currentdate.getMinutes());
        
        const image = document.querySelector('img');
        if (image) {
            image.style.display = 'none';
        }

        var t = document.getElementById('extable');
        var d = document.getElementById('dtable');
        if (t){
            t.remove();
        }
        if (d){
            d.remove();
        }

        let div = document.createElement('div');
        div.id = 'dtable';
        div.style.fontSize = '30px';
        div.innerHTML = "Расписание от станции " + a + " до станции " + b;

        document.body.append(div);

        let file = "direction";
        let r = -1, l = -1;
        let s1 = -1, s2 = -1;
        for (let i = 0; i < 10; i++){
            for (let j = 0; j < 20; j++){
                if (All_Directions[i][j] === a){
                    r = i;
                    s1 = j;
                }
                if (All_Directions[i][j] === b){
                    l = i;
                    s2 = j;
                }
            }
        }

        if ((r === l) && (s1 > s2)){
            file = file + "" + r + "1.txt";
        }
        else if ((r===l) && (s1 < s2)){
            file = file + "" + r + "0.txt";
        }

        let where = "direction/" + file;
        var request = new XMLHttpRequest();
        request.open('GET', where, false);
        request.send();
        var textfileContent = request.responseText;
        var lines = new Array(60);
        lines = textfileContent.split('\n');

        var table  = document.createElement('table');
        table.id = "extable";
        const header = document.createElement('tr');
        header.id = "head";
        const headerCells = ['Время отправления', 'Время прибытия', 'Режим движения', 'Маршрут следования', 'Цена'];
        headerCells.forEach(cell => {
            const th = document.createElement('th');
            th.textContent = cell;
            header.appendChild(th);
        });
          
        table.appendChild(header);
        
        for (let i = 0; i < lines.length; i++){
            var check = 0;
            var ex = false;

            if (a === b){
                div.innerHTML = "Упс... Что-то пошло не так, проверьте названия станций";
                var t = document.getElementById('extable');
                if (t){
                    t.remove();
                }
                check = -1;
                ex = true;
            }
            if (r !== l){
                div.innerHTML = "Упс... Похоже, прямого пути между этими станциями нет";
                var t = document.getElementById('extable');
                if (t){
                    t.remove();
                }
                check = -1;
                ex = true;
            }
            if (!isValid(a) || !isValid(b)){
                div.innerHTML = "Упс... Похоже, что такой(таких) станций не существует";
                var t = document.getElementById('extable');
                if (t){
                    t.remove();
                }
                check = -1;
                ex = true;
            }

            var str = new Array(4);
            str = lines[i].split(" ");
            
            let temp = str[0];
            if (hour < Number(temp[0]+temp[1])){
                check = check + 1;
            }
            else if (hour === Number(temp[0]+temp[1])){
                if (minute < Number(temp[3]+temp[4])){
                    check = check + 1;
                }
            }
            
            let from = str[2];
            let to = str[3];

            if (isSuitable(s1, s2, from, to, r) && (r===l)){
                check = check + 1;
            }

            if (str[1] !== "ежедневно"){
                if (checkDayOfWeek(currentdate) === str[1]){
                    check = check + 1;
                }
            }
            else{
                check = check + 1;
            }

            if (check === 3){
                let arriveTime = '';

                let deph = Number(str[0][0] + str[0][1]);
                let depm = Number(str[0][3] + str[0][4]);

                let arriveh = deph + Number(parseLine(lines[i], "t2", a, b)[1]);
                let arrivem = depm + Number(parseLine(lines[i], "t2", a, b)[3] + parseLine(lines[i], "t2", a, b)[4]);

                if (arrivem > 59){
                    arriveh = arriveh + 1;
                    arrivem = arrivem - 60;

                }
                if ((arriveh > 23) && (arrivem < 10)){
                    arriveTime = "0" + Math.floor(arriveh-24) + ":0" + arrivem;
                }
                if ((arriveh > 23) && (arrivem >= 10)){
                    arriveTime = "0" + Math.floor(arriveh-24) + ":" + arrivem;
                }
                if ((arriveh <= 23) && (arrivem < 10)){
                    arriveTime = arriveh + ":0" + arrivem;
                }
                if ((arriveh <= 23) && (arrivem >= 10)){
                    arriveTime = arriveh + ":" + arrivem;
                }

                var row = document.createElement('tr');
                var temprow = [str[0], arriveTime, str[1], str[2] + "-->" + str[3], parseLine(lines[i], "price", a, b)];
                temprow.forEach(cell => {
                    var td = document.createElement('td');
                    td.textContent = cell;
                    row.appendChild(td);
                });
                table.appendChild(row);
            }
        }
        table.style.paddingTop = "1%";
        table.style.borderSpacing = "30px 15px";
        table.style.textAlign = "center";
        if (!ex){
            document.body.append(table);
            document.getElementById('field1').value = '';
            document.getElementById('field2').value = '';
        }
    });
});