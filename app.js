const showButton = document.getElementById('showButton');
const answerDiv = document.querySelector('.answer');

function salcal() {
    const wd = parseFloat(document.getElementById("Working_days").value);
    const sal = parseFloat(document.getElementById("salary").value);
    const ot = parseFloat(document.getElementById("OT").value);

    if (isNaN(wd) || isNaN(sal) || isNaN(ot) || wd <= 0 || sal <= 0 || ot < 0) {
        alert("Please fill the empty boxes to proceed");  
    } 
    else {
        const result = (sal-(sal*0.12)-(sal0.0075))+(((sal/wd)/9)*ot)
        const one = wd*9+OT
        const two = (((sal/wd)/9)*OT)

        document.getElementById("result").textContent = "Result: " + result.toFixed(3);
        document.getElementById("one").textContent = "worked in hrs: " + one.toFixed(3);
        document.getElementById("two").textContent = "sal/hr: " + two.toFixed(3);
        answerDiv.style.display = 'block';   
    }  
     // Show the answer div
}




