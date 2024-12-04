$(document).ready(function () {
    // Dinamikus érték frissítése a range sliderhez
    $("#elasticity").on("input", function () {
        let value = $(this).val();
        $("#elasticity-value").text(value);
    });

    // Profitkalkulátor működése
    $("#profit-calculation").on("input", function () {
        let revenue = $(this).val(); // Bevétel lekérése
        let cost = 100; // Alapértelmezett költség
        if (revenue) {
            let profit = revenue - cost; // Profit kiszámítása
            if ($("#profit-result").length === 0) {
                $("<p id='profit-result'></p>").insertAfter("#profit-calculation");
            }
            $("#profit-result").text(`Profit: ${profit} egység`);
            // Helyesség ellenőrzése
            if (profit == 50) {
                $("#profit-result").css("color", "green");
            } else {
                $("#profit-result").css("color", "red");
            }
        } else {
            $("#profit-result").text("Adjon meg érvényes bevételi értéket!");
        }
    });

    // Checkbox helyességének ellenőrzése
    $("input[type='checkbox']").on("change", function () {
        let selected = [];
        $("input[type='checkbox']:checked").each(function () {
            selected.push($(this).val());
        });
        console.log("Kiválasztott jellemzők:", selected);

        if ($("#checkbox-result").length === 0) {
            $("<p id='checkbox-result'></p>").insertAfter("input[type='checkbox']:last");
        }
        $("#checkbox-result").text(`Kiválasztott jellemzők: ${selected.join(", ")}`);

        // Ellenőrzés, hogy a "Magas indulóköltség" szerepel-e
        if (selected.includes("magas_indulokoltseg")) {
            $("#checkbox-result").css("color", "green");
        } else {
            $("#checkbox-result").css("color", "red");
        }
    });

    // Legördülő lista helyességének ellenőrzése
    $("#industry").on("change", function () {
        let selectedIndustry = $(this).val();
        console.log(`Kiválasztott iparág: ${selectedIndustry}`);

        if ($("#industry-result").length === 0) {
            $("<p id='industry-result'></p>").insertAfter("#industry");
        }
        $("#industry-result").text(`Kiválasztott iparág: ${selectedIndustry}`);

        // Ellenőrzés, hogy az "Energiaipar" lett-e kiválasztva
        if (selectedIndustry === "energia") {
            $("#industry-result").css("color", "green");
        } else {
            $("#industry-result").css("color", "red");
        }
    });

    // Fájl feltöltése
    $("#file-upload").on("change", function () {
        let fileName = $(this).val().split("\\").pop();
        console.log(`Kiválasztott fájl: ${fileName}`);
        if ($("#file-result").length === 0) {
            $("<p id='file-result'></p>").insertAfter("#file-upload");
        }
        $("#file-result").text(`Kiválasztott fájl: ${fileName}`);
    });

    // Esszémező változásának kezelése
    $("#monopoly-essay").on("input", function () {
        let essayContent = $(this).val();
        if ($("#essay-result").length === 0) {
            $("<p id='essay-result'></p>").insertAfter("#monopoly-essay");
        }
        $("#essay-result").text(`Esszé tartalma: ${essayContent}`);
    });

    // Kvíz logika
    $("#quiz-form").on("submit", function (event) {
        event.preventDefault(); // Az alapértelmezett formázás megakadályozása

        let correctAnswers = {
            question1: "c",
            question2: "c",
            question3: "b",
            question4: "a",
            question5: "c",
            question6: "b"
        };

        let score = 0; // Pontszám inicializálása

        // Válaszok ellenőrzése
        for (let question in correctAnswers) {
            let userAnswer = $(`input[name=${question}]:checked`).val(); // Felhasználói válasz lekérése
            if (userAnswer === correctAnswers[question]) {
                score++;
            }
        }

        // Ha nincs eredmény mező, hozzuk létre
        if (!$('#quiz-result').length) {
            $("<p id='quiz-result'></p>").insertAfter("#quiz-form");
        }

        // Eredmény megjelenítése
        $("#quiz-result")
            .text(`Az eredményed: ${score}/6`)
            .css({
                color: score === 6 ? "green" : "red",
                fontSize: "1.5em",
                textAlign: "center",
                marginTop: "20px"
            });
    });
});
