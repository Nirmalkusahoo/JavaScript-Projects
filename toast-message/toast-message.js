let toastBox = document.getElementById('toast-box');
let successMsg = "<i class=\"fa-solid fa-circle-check\"></i> This is success message."
let failureMsg = "<i class=\"fa-solid fa-circle-xmark\"></i> This is failure message."
let warningMsg = "<i class=\"fa-solid fa-circle-exclamation\"></i> This is warning message."

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('failure')) {
        toast.classList.add('failure');
    } else if (msg.includes('warning')) {
        toast.classList.add('warning');
    }
    setTimeout(() => {
        toast.remove();
    }, 5000)
}