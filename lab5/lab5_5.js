let currentDate = new Date();
let selectedDate = null;

initCalendar();

function updateHeader() {
    const monthYear = document.getElementById('monthYear');
    monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
}

function updateDays() {
    const daysContainer = document.getElementById('daysContainer');
    daysContainer.innerHTML = '';

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        daysContainer.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        dayDiv.className = 'day';

        if (selectedDate &&
            selectedDate.getFullYear() === currentDate.getFullYear() &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getDate() === day) {
            dayDiv.classList.add('selected');
        }

        dayDiv.onclick = () => selectDate(day);
        daysContainer.appendChild(dayDiv);
    }
}

function initCalendar() {
    updateHeader();
    updateDays();
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    updateHeader();
    updateDays();
    console.log(`Місяць змінено на ${currentDate.toLocaleString('default', { month: 'long' })}`);
}

function changeYear(direction) {
    currentDate.setFullYear(currentDate.getFullYear() + direction);
    updateHeader();
    updateDays();
    console.log(`Рік змінено на ${currentDate.getFullYear()}`);
}

function selectDate(day) {
    selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    console.log(`Вибрана дата: ${selectedDate.toLocaleDateString()}`);
    updateDays();
}

function resetToCurrentDate() {
    currentDate = new Date();
    selectDate = null;
    updateHeader();
    updateDays();
    console.log('Дата скинута на поточну');
}

function cancelSelection() {
    selectedDate = null;
    updateDays();
    console.log('Вибір дати скасовано');
}