function toast() {
    let toast = document.querySelector('.toast');
    toast.classList.add("toast-visible");
    console.log('clicou')
}

function closeToast () {
   let toast = document.querySelector('.toast');
    toast.classList.remove("toast-visible");
}

function testAction(event) {
    event.preventDefault()
}