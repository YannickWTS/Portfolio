function generateQR() {
    const ssid = document.getElementById('ssid').value;
    const password = document.getElementById('password').value;

    const qrDiv = document.getElementById('qr');
    qrDiv.innerHTML = '';

    if (!ssid) {
        alert("Geef een wifi-naam in.");
        return;
    }

    const wifiString = `WIFI:T:WPA;S:${ssid};P:${password};;`;

    QRCode.toCanvas(wifiString, { width: 190 }, function (err, canvas) {
        if (err) console.error(err);
        else qrDiv.appendChild(canvas);
    });
}

function downloadQR() {
    const canvas = document.querySelector('#qr canvas');
    if (!canvas) {
        alert("Genereer eerst een QR-code.");
        return;
    }
    const link = document.createElement('a');
    link.download = 'wifi-qr.png';
    link.href = canvas.toDataURL();
    link.click();
}
