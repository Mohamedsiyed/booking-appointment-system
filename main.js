// Get all the buttons and sections
let log = document.getElementById('log');
let aboutusBtn = document.getElementById('aboutusBtn');
let bookingBtn = document.getElementById('bookingBtn');
let bookingBtn2 = document.getElementById('bookingBtn2');
let servisesBtn = document.getElementById('servisesBtn');
let DoctorsBtn = document.getElementById('DoctorsBtn');
let contactBtn = document.getElementById('contactBtn');
let registerBtn = document.getElementById('registerBtn');
let registerBtn2 = document.getElementById('registerBtn2');
let loginBtn = document.getElementById('log-inBtn');
let loginBtn2 = document.getElementById('loginBtn2');
let doctor1Btn = document.getElementById('doctor1Btn');
let doctor2Btn = document.getElementById('doctor2Btn');
let doctor3Btn = document.getElementById('doctor3Btn');
let doctor4Btn = document.getElementById('doctor4Btn');
let doctor5Btn = document.getElementById('doctor5Btn');
let doctor6Btn = document.getElementById('doctor6Btn');
let doctor7Btn = document.getElementById('doctor7Btn');
let doctor8Btn = document.getElementById('doctor8Btn');
let doctor9Btn = document.getElementById('doctor9Btn');
let doctor10Btn = document.getElementById('doctor10Btn');
let doctor11Btn = document.getElementById('doctor11Btn');
let doctor12Btn = document.getElementById('doctor12Btn');

let home = document.getElementById('home');
let register = document.getElementById('register');
let login = document.getElementById('log-in');
let booking = document.getElementById('booking');
let aboutus = document.getElementById('about-us');
let servises = document.getElementById('servises');
let Specialty = document.getElementById('Specialty');
let doctor1 = document.getElementById('doctor1');
let doctor2 = document.getElementById('doctor2');
let doctor3 = document.getElementById('doctor3');
let doctor4 = document.getElementById('doctor4');
let doctor5 = document.getElementById('doctor5');
let doctor6 = document.getElementById('doctor6');
let doctor7 = document.getElementById('doctor7');
let doctor8 = document.getElementById('doctor8');
let doctor9 = document.getElementById('doctor9');
let doctor10 = document.getElementById('doctor10');
let doctor11 = document.getElementById('doctor11');
let doctor12 = document.getElementById('doctor12');
let contact = document.getElementById('contact');
let contentendsection = document.getElementById('content-end-section');

// Function to hide all sections
function hideAllSections() {
    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "none";
    });
}

// Function to show a specific section
function showSection(section) {
    hideAllSections();
    section.style.display = "flex"; // or "block" depending on your layout
}

// Add event listeners to the buttons
log.onclick = () => showSection(home);
aboutusBtn.onclick = () => showSection(aboutus);
bookingBtn.onclick = () => showSection(booking);
bookingBtn2.onclick = () => showSection(booking);
servisesBtn.onclick = () => showSection(servises);
DoctorsBtn.onclick = () => showSection(Specialty);
contactBtn.onclick = () => showSection(contact);
registerBtn.onclick = () => showSection(register);
registerBtn2.onclick = () => showSection(register);
loginBtn.onclick = () => showSection(login);
loginBtn2.onclick = () => showSection(login);
doctor1Btn.onclick = () => showSection(doctor1);
doctor2Btn.onclick = () => showSection(doctor2);
doctor3Btn.onclick = () => showSection(doctor3);
doctor4Btn.onclick = () => showSection(doctor4);
doctor5Btn.onclick = () => showSection(doctor5);
doctor6Btn.onclick = () => showSection(doctor6);
doctor7Btn.onclick = () => showSection(doctor7);
doctor8Btn.onclick = () => showSection(doctor8);
doctor9Btn.onclick = () => showSection(doctor9);
doctor10Btn.onclick = () => showSection(doctor10);
doctor11Btn.onclick = () => showSection(doctor11);
doctor12Btn.onclick = () => showSection(doctor12);

// Initially show the home section
showSection(home);

// جلب السمة المحفوظة من localStorage
const savedTheme = localStorage.getItem('theme');
const themeToggle = document.getElementById('theme-toggle');
const bodyElement = document.body; // تحديد عنصر body

// تطبيق الوضع المحفوظ عند تحميل الصفحة
if (savedTheme === 'dark') {
    bodyElement.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
} else {
    bodyElement.setAttribute('data-theme', 'light');
    themeToggle.checked = false;
}

// دالة تبديل الوضع
function toggleTheme() {
    if (themeToggle.checked) {
        bodyElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        bodyElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// إضافة حدث التبديل عند النقر على الزر
themeToggle.addEventListener('change', toggleTheme);