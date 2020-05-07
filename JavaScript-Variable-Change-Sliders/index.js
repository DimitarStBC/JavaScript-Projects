const inputs = document.querySelectorAll('.home input');

function Updates() {
    const suffix = this.dataset.sizing;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    if (this.name === 'blur' && this.value > 5) {
        document.getElementById('imageBeforeAfter').src = "./images/after.jpg";
    } else {
        document.getElementById('imageBeforeAfter').src = "./images/before.jpg";
    }

    if (this.name === 'size') {
        let constant = +this.value + 20;
        document.getElementById('headTitle').style.fontSize = `${constant}px`;

    }
}

inputs.forEach(input => input.addEventListener('change', Updates));
inputs.forEach(input => input.addEventListener('mousemove', Updates));
