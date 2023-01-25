let name = prompt("Как вас зовут").toLowerCase().trim();

if (name === 'alex') {
    let money = +prompt('Номер счёта').toLowerCase().trim();
    if (money === 7777) {
        let account = prompt('Сколько обноличить?').toLowerCase().trim();
        if (account >= 0 && account <= 10000) {
            alert('Всё отлично')

        } else { alert('Не достаточно средств') }
        let balance = 10000
        let cashe = balance - account
        alert("Вы сняли со счёта" + account)
        alert('Ваш баланс' + cashe)


    } else {
        alert('Пользователь не найден досвидули')
    }

} else {
    alert('Пользователь не найден досвидули')
}

