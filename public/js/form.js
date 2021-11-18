import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCFbdQIkPm_T4WTS6iWJerrTJXifFC-wx0",
    authDomain: "ecellvssut-64800.firebaseapp.com",
    projectId: "ecellvssut-64800",
    storageBucket: "ecellvssut-64800.appspot.com",
    messagingSenderId: "650463574767",
    appId: "1:650463574767:web:738e138aa6244669c8391a"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


const form = document.querySelector('#contactForm');
const formSubmit = document.querySelector('#form-message-success');
const formWarning = document.querySelector('#form-message-warning');
form.addEventListener('submit', e => {
    e.preventDefault();
    try {
        if (form.name.value === "")
            throw "Name can't be empty";
        else if (form.email.value === "")
            throw "Email can't be empty";
        else if (form.subject.value === "")
            throw "Subject can't be empty";
        else if (form.message.value === "")
            throw "Message can't be empty";
        const docRef = addDoc(collection(db, "messages"), {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
            timestamp: serverTimestamp()
        });
        formSubmit.style.display = 'block';
        formWarning.style.display = 'none';
        console.log("Document written with ID: ", docRef.id);
        form.reset();
    } catch (e) {
        formWarning.innerHTML = `${e}`;
        formWarning.style.display = 'block';
        console.error("Error adding document: ", e);
    }
});