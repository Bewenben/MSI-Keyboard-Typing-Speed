function HandleSubmit() {
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;

    sessionStorage.setItem('Name', name);
    sessionStorage.setItem('Email', email);

    return;
}

function getIp(callback) {
    fetch('https://ipinfo.io/json?token=778ec842f63fc8', { headers: { 'Accept': 'application/json' }})
      .then((resp) => resp.json())
      .catch(() => {
        return {
          country: 'eg',
        };
      })
      .then((resp) => callback(resp.country));
   }

const phoneInputField = document.querySelector("#Number");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "auto",
    geoIpLookup: getIp,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });