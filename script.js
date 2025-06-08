// تب‌ها
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
      });
    });


    // مبدل دما
    const tempInput = document.getElementById("tempInput");
    const tempFrom = document.getElementById("tempFrom");
    const tempTo = document.getElementById("tempTo");
    const tempResult = document.getElementById("tempResult");

    function convertTemp() {
      const val = parseFloat(tempInput.value);
      if (isNaN(val)) {
        tempResult.textContent = "عدد وارد کنید";
        return;
      }

      let celsius;
      switch (tempFrom.value) {
        case "celsius": celsius = val; break;
        case "fahrenheit": celsius = (val - 32) * 5 / 9; break;
        case "kelvin": celsius = val - 273.15; break;
      }

      let result;
      switch (tempTo.value) {
        case "celsius": result = celsius; break;
        case "fahrenheit": result = (celsius * 9 / 5) + 32; break;
        case "kelvin": result = celsius + 273.15; break;
      }

      tempResult.textContent = `${result.toFixed(2)} ${tempTo.options[tempTo.selectedIndex].text}`;
    }

    tempInput.addEventListener("input", convertTemp);
    tempFrom.addEventListener("change", convertTemp);
    tempTo.addEventListener("change", convertTemp);

    // مبدل طول
    const lengthInput = document.getElementById("lengthInput");
    const lengthFrom = document.getElementById("lengthFrom");
    const lengthTo = document.getElementById("lengthTo");
    const lengthResult = document.getElementById("lengthResult");

    function convertLength() {
      const val = parseFloat(lengthInput.value);
      if (isNaN(val)) {
        lengthResult.textContent = "عدد وارد کنید";
        return;
      }

      let meter;
      switch (lengthFrom.value) {
        case "meter": meter = val; break;
        case "kilometer": meter = val * 1000; break;
        case "foot": meter = val * 0.3048; break;
        case "centimeter": meter = val / 100; break;
        case "mile": meter = val * 1609.34; break; 
      }

      let result;
      switch (lengthTo.value) {
        case "meter": result = meter; break;
        case "kilometer": result = meter / 1000; break;
        case "foot": result = meter / 0.3048; break;
        case "centimeter": result = meter * 100; break;
        case "mile": result = meter / 1609.34; break; 
      }

      lengthResult.textContent = `${result.toFixed(2)} ${lengthTo.options[lengthTo.selectedIndex].text}`;
    }

    lengthInput.addEventListener("input", convertLength);
    lengthFrom.addEventListener("change", convertLength);
    lengthTo.addEventListener("change", convertLength);


    // مبدل وزن
    const weightInput = document.getElementById("weightInput");
    const weightFrom = document.getElementById("weightFrom");
    const weightTo = document.getElementById("weightTo");
    const weightResult = document.getElementById("weightResult");

    function convertWeight() {
    const val = parseFloat(weightInput.value);
    if (isNaN(val)) {
        weightResult.textContent = "عدد وارد کنید";
        return;
    }

    let gram;
    switch (weightFrom.value) {
        case "kilogram": gram = val * 1000; break;
        case "gram": gram = val; break;
        case "pound": gram = val * 453.592; break;
        case "ounce": gram = val * 28.3495; break;
    }

    let result;
    switch (weightTo.value) {
        case "kilogram": result = gram / 1000; break;
        case "gram": result = gram; break;
        case "pound": result = gram / 453.592; break;
        case "ounce": result = gram / 28.3495; break;
    }

    weightResult.textContent = `${result.toFixed(2)} ${weightTo.options[weightTo.selectedIndex].text}`;
    }

    weightInput.addEventListener("input", convertWeight);
    weightFrom.addEventListener("change", convertWeight);
    weightTo.addEventListener("change", convertWeight);

    // مبدل زمان
    const timeInput = document.getElementById("timeInput");
    const timeFrom = document.getElementById("timeFrom");
    const timeTo = document.getElementById("timeTo");
    const timeResult = document.getElementById("timeResult");

    function convertTime() {
    const val = parseFloat(timeInput.value);
    if (isNaN(val)) {
        timeResult.textContent = "عدد وارد کنید";
        return;
    }

    let seconds;
    switch (timeFrom.value) {
        case "second": seconds = val; break;
        case "minute": seconds = val * 60; break;
        case "hour": seconds = val * 3600; break;
        case "day": seconds = val * 86400; break;
    }

    let result;
    switch (timeTo.value) {
        case "second": result = seconds; break;
        case "minute": result = seconds / 60; break;
        case "hour": result = seconds / 3600; break;
        case "day": result = seconds / 86400; break;
    }

    timeResult.textContent = `${result.toFixed(2)} ${timeTo.options[timeTo.selectedIndex].text}`;
    }

    timeInput.addEventListener("input", convertTime);
    timeFrom.addEventListener("change", convertTime);
    timeTo.addEventListener("change", convertTime);

    // مبدل حجم
    const volumeInput = document.getElementById("volumeInput");
    const volumeFrom = document.getElementById("volumeFrom");
    const volumeTo = document.getElementById("volumeTo");
    const volumeResult = document.getElementById("volumeResult");

    function convertVolume() {
    const val = parseFloat(volumeInput.value);
    if (isNaN(val)) {
        volumeResult.textContent = "عدد وارد کنید";
        return;
    }

    let liter;
    switch (volumeFrom.value) {
        case "liter": liter = val; break;
        case "milliliter": liter = val / 1000; break;
        case "cubic_meter": liter = val * 1000; break;
        case "gallon": liter = val * 3.78541; break;
    }

    let result;
    switch (volumeTo.value) {
        case "liter": result = liter; break;
        case "milliliter": result = liter * 1000; break;
        case "cubic_meter": result = liter / 1000; break;
        case "gallon": result = liter / 3.78541; break;
    }

    volumeResult.textContent = `${result.toFixed(2)} ${volumeTo.options[volumeTo.selectedIndex].text}`;
    }

    volumeInput.addEventListener("input", convertVolume);
    volumeFrom.addEventListener("change", convertVolume);
    volumeTo.addEventListener("change", convertVolume);

    // محاسبه BMI
    function calculateBMI() {
    const weight = parseFloat(document.getElementById("bmiWeight").value);
    const heightCm = parseFloat(document.getElementById("bmiHeight").value);

    if (isNaN(weight) || isNaN(heightCm) || heightCm === 0) {
        document.getElementById("bmiResult").textContent = "اطلاعات معتبر وارد کنید";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    let status = "";

    if (bmi < 18.5) {
        status = "کم‌وزن";
    } else if (bmi < 24.9) {
        status = "نرمال";
    } else if (bmi < 29.9) {
        status = "اضافه‌وزن";
    } else {
        status = "چاق";
    }

    document.getElementById("bmiResult").textContent =
        `BMI شما: ${bmi.toFixed(2)} - ${status}`;
    }