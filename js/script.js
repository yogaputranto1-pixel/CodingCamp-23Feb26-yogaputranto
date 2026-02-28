document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("loginForm");

    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();

            const nama = document.getElementById("nama").value;

            localStorage.setItem("userNama", nama);

            // Scroll ke Home Section
            document.getElementById("home-page").scrollIntoView({
                behavior: "smooth"
            });

            // Update teks sambutan
            const welcome = document.getElementById("welcomeText");
            welcome.innerHTML = "Hi, " + nama + " 👋";
        });
    }

});

document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // ambil nilai
    const nama = document.getElementById("name").value;
    const tanggal = document.getElementById("tanggal").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const pesan = document.getElementById("pesan").value;

    // waktu sekarang
    const now = new Date().toString();

    // tampilkan hasil
    document.getElementById("outputBox").innerHTML = `
        <p><strong>Current time :</strong> ${now}</p>
        <p>Nama : ${nama}</p>
        <p>Tanggal Lahir : ${tanggal}</p>
        <p>Jenis Kelamin : ${gender}</p>
        <p>Pesan : ${pesan}</p>
    `;

    // reset form
    this.reset();
});