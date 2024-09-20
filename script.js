const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);


    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            // Show success alert with SweetAlert
            await Swal.fire({
                title: 'Success!',
                text: json.message,
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            // Show error alert with SweetAlert
            await Swal.fire({
                title: 'Error!',
                text: json.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    })
    .catch(error => {
        console.log(error);
        // Show error alert with SweetAlert
        Swal.fire({
            title: 'Error!',
            text: 'Something went wrong!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    })
    .then(function() {
        form.reset();
        setTimeout(() => {

        }, 3000);
    });
});
