import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>PORTOFOLIO</h1>
        <h2>Azzikra Cahya Kamila</h2>

        <p>
            Saya Azzikra Cahya Kamila, mahasiswi aktif 
            DIV Teknik Elektronika Industri Jurusan Teknik Elektro 
            Politeknik Negeri Padang angkatan 2023.
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

        <hr>

        <h3>Data Diri</h3>
        <ul>
            <li>Nama : Azzikra Cahya Kamila</li>
            <li>NIM : 2311011004</li>
            <li>Tempat, Tanggal Lahir : Lakitan, 19 Desember 2004</li>
            <li>Pendidikan : Politeknik Negeri Padang</li>
            <li>Jurusan : Teknik Elektro</li>
            <li>Program Studi : DIV Teknik Elektronika Industri</li>
        </ul>

        <h3>Pengalaman</h3>
        <ul>
            <li>
                Himpunan Mahasiswa Poros Mahasiswa Elektronika 
                Politeknik Negeri Padang
            </li>
            <li>Sekretaris OR</li>
        </ul>

        <h3>Bidang Minat</h3>
        <ul>
            <li>Otomasi Industri</li>
            <li>PLC</li>
            <li>Internet of Things (IoT)</li>
            <li>Pemrograman</li>
            <li>Robotika</li>
        </ul>

        <p>
            <b>Motto:</b> 
            "Belajar tanpa henti, berkembang dengan teknologi, 
            dan berkarya untuk masa depan."
        </p>
    `);
});

app.get('/about', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Tentang Saya',
        data: {
            nama: 'Azzikra Cahya Kamila',
            nim: '2311011004',
            ttl: 'Lakitan, 19 Desember 2004',
            kampus: 'Politeknik Negeri Padang',
            jurusan: 'Teknik Elektro',
            prodi: 'DIV Teknik Elektronika Industri',
            organisasi: 'Himpunan Mahasiswa Poros Mahasiswa Elektronika Politeknik Negeri Padang',
            jabatan: 'Sekretaris OR'
        }
    });
});

app.listen(5000, () => {
    console.info('Aplikasi jalan di http://localhost:5000')
});