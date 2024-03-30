const incomeInput = document.getElementById('income');
const expensesInput = document.getElementById('expenses');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

let userData = {
    income: 0,
    expenses: 0,
    balance: 0
};

// Recuperar datos desde localStorage
const storedData = JSON.parse(localStorage.getItem('userData'));
if (storedData) {
    populateFields(storedData);
}

// Función para llenar los campos con los datos almacenados
function populateFields(data) {
    incomeInput.value = data.income || '';
    expensesInput.value = data.expenses || '';
    calculateBalance(data.income || 0, data.expenses || 0);
}

// Función para calcular el saldo
function calculateBalance(income, expenses) {
    const balance = income - expenses;
    const message = balance > 0 ? 'Tienes un saldo positivo' : 'Tienes un saldo negativo';
    resultDiv.textContent = 'Saldo: $' + balance + ' - ' + message;

    const newUserData = {
        income: income.toString(),
        expenses: expenses.toString(),
        balance: balance.toString()
    };
    userData = newUserData;
    localStorage.setItem('userData', JSON.stringify(newUserData));

    // Almacenar datos en localStorage
    localStorage.setItem('userData', JSON.stringify(newUserData));
}

// Evento click del botón "Calcular"
calculateButton.addEventListener('click', () => {
    const { value: income } = incomeInput;
    const { value: expenses } = expensesInput;

    // Validar que los campos no estén vacíos
    if (income === '' || expenses === '') {
        resultDiv.textContent = 'Por favor, ingresa tus ingresos y gastos.';
        return;
    }

    calculateBalance(parseFloat(income), parseFloat(expenses));
});