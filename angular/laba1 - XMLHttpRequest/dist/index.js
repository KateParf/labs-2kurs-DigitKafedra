function clicked() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', // HTTP-метод
    'data2.json', // URL, куда отправляется запрос
    false // async – если указать false, тогда запрос будет выполнен синхронно
    );
    xhr.send();
    if (xhr.status !== 200) { // статус 200 = OK – запрос получен и успешно обработан;
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    }
    else {
        // вывод считанного
        alert(xhr.responseText);
    }
}
clicked();
