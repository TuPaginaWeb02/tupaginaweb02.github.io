const colorRange = document.getElementById("colorRange");
        const caja6 = document.querySelector(".caja6");

        colorRange.addEventListener("input", () => {
            let valor = parseInt(colorRange.value);
            caja6.style.backgroundColor = `rgb(${valor}, ${255 - valor}, ${valor * 2 % 255})`;
        });