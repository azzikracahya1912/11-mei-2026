import express from 'express';

const app = express();

// endpoint home
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Home</title>

            <style>
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body{
                    font-family: Arial, sans-serif;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    background: linear-gradient(to bottom, #050816, #0b1026, #111b3a);
                    color: white;
                    position: relative;
                }

                /* bintang */
                body::before{
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-image:
                        radial-gradient(white 1px, transparent 1px),
                        radial-gradient(white 1px, transparent 1px),
                        radial-gradient(white 2px, transparent 2px);
                    background-size: 120px 120px, 180px 180px, 250px 250px;
                    background-position: 0 0, 40px 60px, 130px 90px;
                    opacity: 0.6;
                    animation: blink 4s infinite alternate;
                }

                @keyframes blink{
                    from{
                        opacity: 0.4;
                    }
                    to{
                        opacity: 0.9;
                    }
                }

                .box{
                    position: relative;
                    z-index: 1;
                    background: rgba(255,255,255,0.08);
                    backdrop-filter: blur(10px);
                    padding: 45px;
                    border-radius: 20px;
                    text-align: center;
                    box-shadow: 0 0 25px rgba(0, 183, 255, 0.5);
                    border: 1px solid rgba(255,255,255,0.2);
                    width: 400px;
                }

                h1{
                    font-size: 34px;
                    margin-bottom: 15px;
                    color: #8be9fd;
                    text-shadow: 0 0 10px #00d9ff;
                }

                p{
                    margin-bottom: 25px;
                    color: #dcdcdc;
                    line-height: 1.6;
                }

                a{
                    text-decoration: none;
                    background: linear-gradient(90deg, #00c6ff, #0072ff);
                    color: white;
                    padding: 14px 24px;
                    border-radius: 12px;
                    font-weight: bold;
                    transition: 0.3s;
                    box-shadow: 0 0 15px rgba(0,198,255,0.6);
                }

                a:hover{
                    transform: scale(1.05);
                    background: linear-gradient(90deg, #0072ff, #00c6ff);
                    box-shadow: 0 0 25px rgba(0,198,255,0.9);
                }
            </style>
        </head>

        <body>

            <div class="box">
                <h1>🚀 Welcome To Space</h1>

                <p>
                    Jelajahi portofolio dengan tema luar angkasa 
                    yang modern dan futuristik.
                </p>

                <a href="/about">Lihat Portofolio</a>
            </div>

        </body>
        </html>
    `);
});

// endpoint about
app.get('/about', (req, res) => {
    res.send(`
        <html>

        <head>
            <title>Portofolio Mila</title>

            <style>
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body{
                    font-family: Arial, sans-serif;
                    background: linear-gradient(to bottom, #050816, #0b1026, #111b3a);
                    color: white;
                    padding: 40px;
                    min-height: 100vh;
                    position: relative;
                    overflow-x: hidden;
                }

                body::before{
                    content: "";
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-image:
                        radial-gradient(white 1px, transparent 1px),
                        radial-gradient(white 1px, transparent 1px),
                        radial-gradient(#8be9fd 2px, transparent 2px);
                    background-size: 120px 120px, 200px 200px, 300px 300px;
                    opacity: 0.5;
                    z-index: -1;
                }

                .container{
                    background: rgba(255,255,255,0.08);
                    backdrop-filter: blur(10px);
                    max-width: 850px;
                    margin: auto;
                    padding: 40px;
                    border-radius: 25px;
                    border: 1px solid rgba(255,255,255,0.2);
                    box-shadow: 0 0 30px rgba(0,183,255,0.4);
                }

                h1{
                    text-align: center;
                    margin-bottom: 25px;
                    color: #8be9fd;
                    font-size: 40px;
                    text-shadow: 0 0 15px #00d9ff;
                }

                h2, h3{
                    margin-top: 30px;
                    margin-bottom: 15px;
                    color: #00d9ff;
                    border-bottom: 2px solid rgba(255,255,255,0.2);
                    padding-bottom: 8px;
                }

                p{
                    line-height: 1.8;
                    margin-bottom: 18px;
                    color: #e6e6e6;
                    text-align: justify;
                }

                ul{
                    padding-left: 25px;
                }

                li{
                    margin-bottom: 12px;
                    line-height: 1.7;
                    color: #f1f1f1;
                }

                .motto{
                    margin-top: 35px;
                    background: rgba(0, 217, 255, 0.15);
                    padding: 20px;
                    border-radius: 15px;
                    text-align: center;
                    font-style: italic;
                    color: #8be9fd;
                    box-shadow: 0 0 20px rgba(0,217,255,0.3);
                }

                .btn{
                    display: inline-block;
                    margin-top: 30px;
                    text-decoration: none;
                    background: linear-gradient(90deg, #00c6ff, #0072ff);
                    color: white;
                    padding: 12px 22px;
                    border-radius: 12px;
                    transition: 0.3s;
                    box-shadow: 0 0 15px rgba(0,198,255,0.5);
                }

                .btn:hover{
                    transform: scale(1.05);
                    box-shadow: 0 0 25px rgba(0,198,255,0.8);
                }
            </style>
        </head>

        <body>

            <div class="container">

                <h1>🌌 PORTOFOLIO</h1>

                <p>
                    Halo, saya <b>Azzikra Cahya Kamila</b>, 
                    mahasiswi aktif DIV Teknik Elektronika Industri 
                    Jurusan Teknik Elektro Politeknik Negeri Padang 
                    angkatan 2023.
                </p>

                <p>
                    Saya alumnus dari SMA Negeri 2 Pariaman.
                    Biasa dipanggil Mila atau Azzikra.
                </p>

                <p>
                    Selain mengikuti kegiatan perkuliahan, saya juga aktif 
                    dalam organisasi Himpunan Mahasiswa Poros Mahasiswa Elektronika 
                    Politeknik Negeri Padang dan menjabat sebagai Sekretaris OR.
                </p>

                <p>
                    Saya memiliki minat pada bidang otomasi industri, PLC, 
                    Internet of Things (IoT), pemrograman, dan robotika.
                </p>

                <h2>🚀 Data Diri</h2>

                <ul>
                    <li>Nama : Azzikra Cahya Kamila</li>
                    <li>NIM : 2311011004</li>
                    <li>Tempat, Tanggal Lahir : Lakitan, 19 Desember 2004</li>
                    <li>Pendidikan : Politeknik Negeri Padang</li>
                    <li>Jurusan : Teknik Elektro</li>
                    <li>Program Studi : DIV Teknik Elektronika Industri</li>
                </ul>

                <h3>🛰 Pengalaman</h3>

                <ul>
                    <li>
                        Himpunan Mahasiswa Poros Mahasiswa Elektronika 
                        Politeknik Negeri Padang
                    </li>

                    <li>Sekretaris OR</li>
                </ul>

                <h3>🤖 Bidang Minat</h3>

                <ul>
                    <li>Otomasi Industri</li>
                    <li>PLC</li>
                    <li>Internet of Things (IoT)</li>
                    <li>Pemrograman</li>
                    <li>Robotika</li>
                </ul>

                <div class="motto">
                    "Belajar tanpa henti, berkembang dengan teknologi,
                    dan berkarya untuk masa depan."
                </div>

                <a href="/" class="btn">⬅ Kembali ke Home</a>

            </div>

        </body>
        </html>
    `);
});

app.listen(5000, () => {
    console.log('Server berjalan di http://localhost:5000');
});