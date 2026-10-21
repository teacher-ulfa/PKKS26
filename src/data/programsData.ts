export interface FeaturedProgram {
  id: number;
  title: string;
  category: 'Pembiasaan & Karakter' | 'Literasi & Numerasi' | 'Kesehatan & Lingkungan' | 'GTK & Kepemimpinan' | 'Kesiswaan & Prestasi' | 'Sarpras & Kemitraan';
  pic: string;
  target: string;
  schedule: string;
  progressPercentage: number;
  status: 'Terealisasi Penuh' | 'Berjalan Rutin' | 'Tahap Lanjutan';
  objective: string;
  implementation: string;
  impact: string;
  pdfPath?: string;
  externalLink?: string;
  highlightPoints: string[];
}

export const FEATURED_PROGRAMS: FeaturedProgram[] = [
  {
    id: 1,
    title: 'Pembiasaan 5S (Salam, Senyum, Sapa, Sopan, Santun)',
    category: 'Pembiasaan & Karakter',
    pic: 'Tim Kurikulum & Mohammad Suyatno, M.Pd.',
    target: 'Seluruh Siswa (Kelas X, XI, XII) & 77 Dewan Guru SMAN 1 Krembung',
    schedule: 'Pagi: 06.00-06.45 WIB & Sore: 14.45-15.15 WIB di Selasar Gerbang Utama',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Membentuk karakter santun, ramah, dan membudayakan etika komunikasi 5 bahasa (Indonesia, Inggris, Jepang, Jawa, Arab).',
    implementation: 'Penjadwalan piket bergilir 77 guru per kelas rombel setiap pagi dan sore hari, disertai pengukuhan Duta 5S dan piala bergilir Kelas Ter-5S.',
    impact: 'Penurunan signifikan kasus perselisihan antarsiswa dan perundungan; 90%+ warga sekolah menyatakan kepuasan tinggi pada iklim ramah sekolah.',
    pdfPath: '/assets/aistudio/1._Pembiasaan_5S_SMAN_1_Krembung_Tahun_2026_f752372b.pdf',
    highlightPoints: [
      'Menyapa dalam 5 bahasa multi-budaya (Indonesia, Inggris, Jepang, Jawa Krama, Arab)',
      'Keterlibatan aktif 100% dari 77 tenaga pendidik dalam jadwal piket resmi',
      'Piala bergilir Kelas Ter-5S bulanan untuk memotivasi budaya positif'
    ]
  },
  {
    id: 2,
    title: 'Pembiasaan Sholat Fardhu Berjamaah & Kartu Surga',
    category: 'Pembiasaan & Karakter',
    pic: 'Tim Guru PAI / Mohammad Suyatno, M.Pd.',
    target: 'Seluruh Peserta Didik Muslim Kelas X, XI, XII',
    schedule: 'Setiap hari Senin s.d. Jumat (Dzuhur & Ashar) di Masjid Al-Hikmah',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Meningkatkan kedisiplinan beribadah harian secara terukur dan mempererat ukhuwah islamiyah.',
    implementation: 'Distribusi Kartu Tanda Selesai Sholat Berjamaah (Kartu Surga) berstempel resmi, divalidasi guru PAI & wali kelas sebagai prasyarat pengambilan HP sore hari.',
    impact: 'Presensi jamaah sholat terpantau teratur, terjalin transparansi evaluasi dengan orang tua murid, dan kedisiplinan waktu beribadah meningkat pesat.',
    pdfPath: '/assets/aistudio/2_KARTU_SURGA__KARTU_SHOLAT__1f7cc09f.pdf',
    highlightPoints: [
      'Inovasi integrasi absensi sholat dengan syarat pengambilan ponsel di loker kelas',
      'Masjid Al-Hikmah menampung seluruh jamaah fardhu dan khotmil quran',
      'Kartu kontrol fisik terstempel resmi sebagai portofolio penilaian karakter'
    ]
  },
  {
    id: 3,
    title: 'Jumat Sehat (Senam SKJ, Sarapan Isi Piringku & Jalan Sehat)',
    category: 'Kesehatan & Lingkungan',
    pic: 'Rohmat Hidayat, S.Pd. & Tim Guru PJOK',
    target: 'Seluruh Siswa Kelas X, XI, XII dan Dewan Guru/Staf GTK',
    schedule: 'Setiap Jumat terakhir setiap bulan (06.30 - 08.00 WIB) di Lapangan Utama',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Meningkatkan kebugaran jasmani, mengedukasi gizi seimbang, dan mempererat kebersamaan antarjenjang.',
    implementation: 'Senam aerobik/SKJ bersama selama 45 menit, dilanjutkan edukasi prinsip "Isi Piringku" dan makan bekal sehat bergizi bersama non-instan.',
    impact: 'Tingkat kehadiran peserta >95%, siswa lebih segar dan bugar, serta terbangun budaya membawa bekal bergizi dan tumbler dari rumah.',
    pdfPath: '/assets/aistudio/3_JUMAT_SEHAT.docx_b44b0c45.pdf',
    highlightPoints: [
      'Senam kesegaran jasmani dipandu instruktur profesional dan guru PJOK',
      'Makan bersama bekal bergizi seimbang "Isi Piringku"',
      'Pemeriksaan HB siswi putri secara berkala bekerja sama dengan Puskesmas Krembung'
    ]
  },
  {
    id: 4,
    title: 'Jumat Keputrian: Muslimah Cerdas, Sehat, dan Berakhlak',
    category: 'Pembiasaan & Karakter',
    pic: 'Ulfatul Husna, S.Ag., M.Pd. & Tim Kolaborator PAI, Biologi, Penjaskes',
    target: 'Seluruh Siswi Putri Kelas X, XI, XII (266 Siswi Kelas X Fase Perdana)',
    schedule: 'Setiap Jumat pekan pertama (06.40 – 07.40 WIB) di Aula SMAN 1 Krembung',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Pendekatan Deep Learning lintas disiplin mengupas syariat thaharah/haid, sains anatomi siklus reproduksi, dan personal hygiene.',
    implementation: 'Kolaborasi 3 disiplin ilmu (PAI, Biologi, Penjaskes), bedah mitos tradisional (keramas/kuku), edukasi pencegahan dismenore dan anemia.',
    impact: '89,5% siswi memahami tuntas tata cara bersuci; 58,7% terbebas dari mitos keliru dan berkomitmen merawat kesehatan reproduksi secara saintifik.',
    pdfPath: '/assets/aistudio/4_JUMAT_KEPUTRIAN_dea600be.pdf',
    highlightPoints: [
      'Integrasi 3 disiplin ilmu sekaligus (PAI, Biologi, Penjaskes)',
      'Menjawab 69 pertanyaan titipan privat siswi seputar kesehatan dan hukum fikih',
      'Pemberdayaan toilet ramah perempuan dan penyediaan sanitasi tertutup'
    ]
  },
  {
    id: 5,
    title: 'Jumat Berling (Bersih Lingkungan Sekitar Kelas & Sekolah)',
    category: 'Kesehatan & Lingkungan',
    pic: 'Ahmad Bashori, S.Si., M.Pd. & Tim Adiwiyata',
    target: 'Seluruh Warga Sekolah (Siswa 36 Rombel, Wali Kelas, Petugas Kebersihan)',
    schedule: 'Minggu ke-4 dan ke-5 setiap bulan, serta aksi massal tiap 3 bulan',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Mewujudkan lingkungan sekolah yang asri, hijau, bersih, dan mendukung program Sekolah Adiwiyata Mandiri.',
    implementation: 'Piket kebersihan koridor, teras, pembersihan saluran air, perawatan taman kelas, dan pemilahan sampah organik-anorganik.',
    impact: 'Kawasan sekolah seluas 22.771 m² terpelihara hijau, indah, dan nyaman dengan kesadaran gotong royong peserta didik.',
    pdfPath: '/assets/aistudio/5._Bersih_Lingkungan_aac6fcd1.pdf',
    highlightPoints: [
      'Pemeliharaan taman kelas dan kebun toga oleh regu piket',
      'Pembersihan massal triwulan mencakup seluruh area fasilitas bersama',
      'Integrasi edukasi pengurangan sampah plastik dengan program Adiwiyata'
    ]
  },
  {
    id: 6,
    title: 'Pembiasaan Kebersihan Guru dan Siswa',
    category: 'Kesehatan & Lingkungan',
    pic: 'Tim Sarpras & Tim Kesiswaan',
    target: '75 Dewan Guru, 10 Staf, dan 1.287 Siswa SMANIKRE',
    schedule: 'Harian sebelum KBM (06.30) dan setelah jam pelajaran berakhir (15.00)',
    progressPercentage: 98,
    status: 'Berjalan Rutin',
    objective: 'Menanamkan budaya menjaga kerapian ruang belajar dan ruang kerja sebagai cerminan akhlak mulia.',
    implementation: 'Piket harian kelas, inspeksi ruang guru, dan penyediaan fasilitas tempat cuci tangan berair mengalir di depan setiap ruangan.',
    impact: 'Ruang kelas selalu dalam kondisi higienis dan siap pakai untuk mendukung konsentrasi pembelajaran.',
    pdfPath: '/assets/aistudio/5._Bersih_Lingkungan_aac6fcd1.pdf',
    highlightPoints: [
      'Piket kelas sebelum bel masuk dan menjelang pulang sekolah',
      'Kondisi ruang guru rapi dan tertata untuk kolaborasi yang nyaman',
      'Wastafel cuci tangan pakai sabun (CTPS) di setiap depan rombel'
    ]
  },
  {
    id: 7,
    title: 'Berbagi Praktik Baik (Komunitas Belajar Guru)',
    category: 'GTK & Kepemimpinan',
    pic: 'Tim Pengembang Kurikulum & Kepala Sekolah',
    target: 'Seluruh Pendidik dan Tenaga Kependidikan SMAN 1 Krembung',
    schedule: 'Setiap hari Jumat sore (Pekan ke-2 dan ke-3)',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Meningkatkan kompetensi pedagogik guru melalui diseminasi strategi mengajar interaktif dan berdiferensiasi.',
    implementation: 'Guru mempresentasikan modul ajar inspiratif, studi kasus penanganan siswa, pemanfaatan AI/teknologi, dan refleksi pembelajaran.',
    impact: 'Terciptanya budaya kolaborasi profesional antarguru, tidak ada guru yang merasa sendiri dalam menghadapi kendala kelas.',
    pdfPath: '/assets/aistudio/7__Rapor__Laporan_Pelatihan_Kompetensi_KS_64d99958.pdf',
    highlightPoints: [
      'Wadah diseminasi metode pembelajaran inovatif dan berpusat pada murid',
      'Mendukung langsung Rapor Pendidikan indikator D.1 (Kualitas Pembelajaran)',
      'Refleksi bersama catatan observasi supervisi klinis kepala sekolah'
    ]
  },
  {
    id: 8,
    title: 'MGMPS (Musyawarah Guru Mata Pelajaran Sekolah)',
    category: 'GTK & Kepemimpinan',
    pic: 'Siswati, S.Kom., M.Pd. & Koordinator Rumpun Mapel',
    target: 'Seluruh Rumpun Mata Pelajaran (Informatika, MIPA, IPS, Bahasa, PJOK, PAI, BK)',
    schedule: 'Jumat Pekan ke-2 (15.00 – 16.00 WIB) di LabKom 1 / Ruang Rapat',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Penyelarasan CP, TP, ATP, modul ajar Deep Learning, dan penyusunan instrumen soal STS berbasis Tes Kemampuan Akademik (TKA).',
    implementation: 'Rapat koordinasi rumpun mata pelajaran, bedah kisi-kisi asesmen sumatif, integrasi literasi-numerasi dalam LKPD, dan notulensi tertib.',
    impact: 'Perangkat pembelajaran 100% tervalidasi sebelum semester berjalan; mutu soal asesmen memenuhi standar nalar tingkat tinggi (HOTS).',
    pdfPath: '/assets/aistudio/8-LAPORAN_MGMPS_5bca4040.pdf',
    highlightPoints: [
      'Penyusunan soal Asesmen Sumatif Tengah Semester (STS) terstandar TKA',
      'Implementasi sintaks Deep Learning (mindful, meaningful, joyful)',
      'Dokumentasi notulensi, daftar hadir, dan pengesahan kepala sekolah lengkap'
    ]
  },
  {
    id: 9,
    title: 'Literasi Digital & Content Creator bersama Glow and Lovely',
    category: 'Literasi & Numerasi',
    pic: 'Evita Erryc Agustin, S.Pd., Gr. & Tim Kesiswaan',
    target: '400 Peserta Didik Perwakilan Kelas X, XI, dan XII',
    schedule: 'Jumat, 18 September 2026 (08.00 - 10.00 WIB) di Aula SMAN 1 Krembung',
    progressPercentage: 100,
    status: 'Terealisasi Penuh',
    objective: 'Membekali peserta didik dengan kecakapan literasi digital, etika bermedia sosial, dan keterampilan produksi konten kreatif positif.',
    implementation: 'Workshop interaktif bersama narasumber industri kreatif Glow and Lovely (Unilever), pemaparan strategi konten, dan praktik digital campaign.',
    impact: 'Siswa termotivasi memanfaatkan platform digital secara produktif, mengikis perilaku siber negatif, dan melahirkan bibit kreator muda sekolah.',
    pdfPath: '/assets/aistudio/9_Laporan_Kegitan_GLow_and_Lovely_5ffcdf20.pdf',
    highlightPoints: [
      'Menghadirkan narasumber profesional dari PT Unilever / Glow & Lovely',
      'Dihadiri 400 siswa terpilih yang antusias belajar personal branding',
      'Penanaman etika digital dan pembuatan konten edukatif di media sosial'
    ]
  },
  {
    id: 10,
    title: 'Literasi Bahasa Inggris: English Immersion Program (Native Speakers)',
    category: 'Literasi & Numerasi',
    pic: 'Ulfatul Husna, M.Pd., Mohammad Suyatno, M.Pd. & Tim Literasi-Numerasi',
    target: 'Peserta Didik Kelas X dan XI SMAN 1 Krembung',
    schedule: 'Jumat, 18 September 2026 (09.00 – 11.00 WIB) di Aula SMAN 1 Krembung',
    progressPercentage: 100,
    status: 'Terealisasi Penuh',
    objective: 'Mengikis kecemasan berbahasa (language anxiety), melatih listening aksen internasional, dan memperluas wawasan lintas budaya.',
    implementation: 'Menghadirkan 2 pemateri foreigners asal Nigeria (Mr. Isah Salihu & Mr. Abdulrashid Lawal dari UNUSIDA), dialog interaktif, live debate, dan kuis literasi.',
    impact: 'Peningkatan rasa percaya diri berbicara bahasa Inggris tanpa takut salah grammar; siswa antusias berinteraksi dengan penutur internasional.',
    pdfPath: '/assets/aistudio/10_Laporan_Literasi_Bahasa_Inggris_Immersion_13eb6495.pdf',
    highlightPoints: [
      'Hadir 2 narasumber internasional Nigeria (Mr. Isah Salihu & Mr. Abdulrashid Lawal)',
      'Sesi Public Speaking Workshop & Fun Games berprinsip fluency-first',
      'Pengenalan Global Englishes dan Cross-Cultural Understanding'
    ]
  },
  {
    id: 11,
    title: 'Literasi & Inklusi Keuangan Simpanan Pelajar (SimPel) bersama BCA',
    category: 'Literasi & Numerasi',
    pic: 'Ika Dwi Handayani, S.Pd. & Manajemen Bakti BCA KCP Rungkut Megah',
    target: '450+ Siswa Kelas X, XI, XII SMAN 1 Krembung',
    schedule: 'Kamis, 30 Juli 2026 (13.00 – 15.00 WIB) di Aula SMAN 1 Krembung',
    progressPercentage: 100,
    status: 'Terealisasi Penuh',
    objective: 'Mengedukasi kecerdasan finansial sejak dini, pencegahan pinjol/investasi ilegal, dan pembiasaan menabung mandiri.',
    implementation: 'Seminar literasi finansial interaktif bersama pimpinan BCA KCP Rungkut Megah, sosialisasi OJK 2025, dan fasilitasi pembukaan rekening SimPel Rp5.000.',
    impact: 'Ratusan siswa memiliki rekening tabungan bank resmi sendiri dan memahami skala prioritas antara kebutuhan versus keinginan.',
    pdfPath: '/assets/aistudio/11._LIterasi_Keuangan_BCA_bb68d720.pdf',
    highlightPoints: [
      'Kemitraan strategis dengan Bank Central Asia (BCA) KCP Rungkut Megah',
      'Pembukaan rekening tabungan SimPel dengan setoran awal ringan Rp5.000,-',
      'Edukasi proteksi data privasi finansial dan bahaya judi/pinjol ilegal'
    ]
  },
  {
    id: 12,
    title: 'Bimbingan Mental & PBB Kerja Sama Koramil Krembung',
    category: 'Pembiasaan & Karakter',
    pic: 'Abdul Munif, S.Pd. & Komandan Rayon Militer (Danramil) Krembung',
    target: '1.279 Siswa SMAN 1 Krembung (Kelas X, XI, XII)',
    schedule: '13, 14, 20 Juli 2026 (07.00 – 11.00 WIB) di Lapangan Utama',
    progressPercentage: 100,
    status: 'Terealisasi Penuh',
    objective: 'Melatih ketangguhan mental, patriotisme, kedisiplinan baris-berbaris (PBB), dan membangun jiwa korsa antarsiswa.',
    implementation: 'Pembagian siswa ke dalam peleton-peleton yang dipandu instruktur TNI Koramil Krembung, materi wawasan kebangsaan, dan penegakan tata tertib upacara.',
    impact: 'Peningkatan signifikan kerapian barisan upacara bendera hari Senin, ketepatan waktu datang ke sekolah, dan sikap hormat kepada guru.',
    pdfPath: '/assets/aistudio/12._BIMBINGAN_MENTAL_95e2c6b1.pdf',
    highlightPoints: [
      'Pelibatan 1.279 siswa secara terstruktur dalam peleton terpadu',
      'Instruktur lapangan resmi dari jajaran personel TNI Koramil Kecamatan Krembung',
      'Penyegaran formasi baris-berbaris untuk petugas upacara bendera'
    ]
  },
  {
    id: 13,
    title: 'Bimbingan Psikotes & Peminatan Studi Karier',
    category: 'Kesiswaan & Prestasi',
    pic: 'Agustin Nur Widianti, S.Pd. & Tim Bimbingan Konseling (BK)',
    target: 'Seluruh Siswa Kelas X (Penjurusan Minat) & Kelas XII (Studi Lanjut)',
    schedule: 'Awal Semester Ganjil & Sesi Konseling Berkelanjutan',
    progressPercentage: 96,
    status: 'Berjalan Rutin',
    objective: 'Mengidentifikasi modalitas belajar, potensi kecerdasan majemuk, dan memberikan rekomendasi karier berbasis data psikologis.',
    implementation: 'Tes psikotes terstandarisasi, analisis minat bakat, konsultasi individual siswa dan orang tua, serta pemetaan jalur seleksi PTN/Kedinasan/Kerja.',
    impact: 'Siswa memiliki orientasi masa depan yang mantap dan terarah tanpa tekanan keraguan.',
    highlightPoints: [
      'Pemetaan komprehensif gaya belajar dan kecerdasan siswa',
      'Konsultasi privat bersama guru BK bersertifikasi',
      'Landasan data untuk pembagian rombel peminatan Kurikulum Merdeka'
    ]
  },
  {
    id: 14,
    title: 'Kantin Sekolah Sehat Bebas 3P & Eco-Canteen',
    category: 'Kesehatan & Lingkungan',
    pic: 'Sri Handastuti, S.Pd. & Tim Pengelola Kantin Sekolah',
    target: '6 Stan Penjual Kantin & 1.300+ Warga SMANIKRE',
    schedule: 'Operasional Harian saat Jam Istirahat (Pemeriksaan Higiene Tiap Pekan)',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Menyediakan asupan pangan sehat bergizi, bebas bahan pengawet/pewarna sintetis, dan menghilangkan kemasan plastik sekali pakai.',
    implementation: 'Pemberlakuan SOP Kantin Sehat, larangan styrofoam/plastik, penggunaan daun pisang/piring keramik, sertifikasi halal, dan checklist berkala.',
    impact: 'Ketercapaian air bersih 95%, bebas bahan berbahaya 92%, kepatuhan eco-canteen 85%; angka kesakitan pencernaan siswa menurun drastis.',
    pdfPath: '/assets/aistudio/14._kantin_sehat_b913c3d3.pdf',
    highlightPoints: [
      'Bebas 3P (Pengawet, Pewarna sintetis, Pemanis buatan)',
      'Larangan kantong plastik & styrofoam; wajib tumbler dan kotak makan',
      'Instrumen kartu pantauan tata tertib kantin 10 poin diverifikasi mingguan'
    ]
  },
  {
    id: 15,
    title: 'Pengendalian Gawai (Loker Handphone Ruang Kelas)',
    category: 'Pembiasaan & Karakter',
    pic: 'Dwi Surya Arifian, S.Pd., Tim Tatib & Seluruh Wali Kelas',
    target: 'Seluruh Siswa Kelas X, XI, XII (36 Ruang Kelas)',
    schedule: 'Setiap hari sekolah mulai pukul 06.45 s.d. 15.00 WIB',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Membatasi screen-time berlebihan di sekolah, mengembalikan interaksi sosial nyata, dan mempertajam konsentrasi belajar di kelas.',
    implementation: 'Siswa mengumpulkan HP di pagi hari ke keranjang, dimasukkan ke loker kaca kelas berkunci yang dipegang wali kelas; hanya dibuka saat pembelajaran berbasis riset/CBT.',
    impact: 'Gangguan notifikasi ponsel di kelas turun 100%; siswa aktif berdialog saat istirahat dan bermain di gazebo/lapangan.',
    pdfPath: '/assets/aistudio/16._PROGRAM_PENGENDALIAN_GAWAI_f9210ea9.pdf',
    highlightPoints: [
      'Implementasi nyata Surat Edaran Dinas Pendidikan Provinsi Jawa Timur',
      'Loker penyimpanan khusus kokoh dengan gembok di tiap ruang kelas',
      'Syarat pengambilan sore hari terintegrasi dengan Kartu Surga sholat berjamaah'
    ]
  },
  {
    id: 16,
    title: 'Program SIKAP (Sistem Informasi Karakter Positif)',
    category: 'Pembiasaan & Karakter',
    pic: 'Tim IT Sekolah & Kesiswaan',
    target: 'Seluruh Siswa dan Wali Kelas SMAN 1 Krembung',
    schedule: 'Pemantauan Berkelanjutan Sepanjang Tahun Ajaran',
    progressPercentage: 92,
    status: 'Berjalan Rutin',
    objective: 'Mencatat rekam jejak perilaku positif, ketertiban, dan keaktifan ekstrakurikuler peserta didik secara transparan.',
    implementation: 'Sistem pencatatan digital poin kebaikan siswa, apresiasi bulanan bagi siswa teladan, dan konseling restoratif bagi pelanggaran disiplin.',
    impact: 'Peralihan paradigma dari hukuman punitif menjadi penguatan disiplin positif yang memanusiakan siswa.',
    highlightPoints: [
      'Pencatatan apresiatif berbasis poin kebaikan (merit system)',
      'Akses informasi terpadu untuk wali kelas dan guru BK',
      'Mendukung indikator iklim keamanan sekolah tanpa hukuman fisik'
    ]
  },
  {
    id: 17,
    title: 'Sekolah Adiwiyata (Konservasi & Kepedulian Lingkungan)',
    category: 'Kesehatan & Lingkungan',
    pic: 'Ahmad Bashori, S.Si., M.Pd. & Kader Adiwiyata',
    target: 'Ekosistem Sekolah dan Masyarakat Sekitar Krembung',
    schedule: 'Aktivitas Harian & Agenda Tematik Lingkungan Hidup',
    progressPercentage: 95,
    status: 'Berjalan Rutin',
    objective: 'Mengintegrasikan nilai-nilai pelestarian alam ke dalam kurikulum pembelajaran dan budaya keseharian warga sekolah.',
    implementation: 'Penghijauan lahan 22.771 m², pembuatan biopori, kompos daun kering, taman hidroponik, dan bank sampah sekolah.',
    impact: 'Udara sekolah tetap sejuk dan asri di tengah iklim tropis, membiasakan gaya hidup hemat energi dan minim limbah.',
    pdfPath: '/assets/aistudio/5._Bersih_Lingkungan_aac6fcd1.pdf',
    highlightPoints: [
      'Pemanfaatan lahan hijau luas untuk laboratorium alam',
      'Kader Adiwiyata siswa aktif mengelola kompos dan bank sampah',
      'Menanamkan kepedulian ekologis sebagai bagian dari keimanan'
    ]
  },
  {
    id: 18,
    title: 'Gerakan Sekolah Sehat (GSS) - 5 Pilar Sehat',
    category: 'Kesehatan & Lingkungan',
    pic: 'Tim Pembina UKS, Tim PJOK, Puskesmas Krembung',
    target: 'Seluruh Siswa, Guru, dan Karyawan SMAN 1 Krembung',
    schedule: 'Terprogram Harian, Mingguan, dan Semesteran',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Mewujudkan peserta didik yang sehat bergizi, sehat fisik, sehat imunisasi, sehat jiwa, dan sehat lingkungan.',
    implementation: 'Pelaksanaan menyeluruh 5 pilar: pembiasaan minum air putih, skipping & peregangan alfa saat pergantian jam, skrining jiwa psikiater, dan kawasan bebas rokok/vape.',
    impact: 'Terciptanya profil siswa SMANIKRE yang bugar, berdaya tahan fisik kuat, dan memiliki ketenangan mental dalam belajar.',
    pdfPath: '/assets/aistudio/18_PELAKSANAAN_GSS_a7a681f9.pdf',
    highlightPoints: [
      '5 Pilar Lengkap: Sehat Bergizi, Fisik, Imunisasi, Jiwa, dan Lingkungan',
      'Peregangan relaksasi otak (alfa wave) saat pergantian jam pelajaran',
      'Pemeriksaan rutin Hemoglobin (Hb) remaja putri & tablet tambah darah'
    ]
  },
  {
    id: 19,
    title: 'Disiplin Pegawai (Monitoring Jam Kedatangan & Kepulangan)',
    category: 'GTK & Kepemimpinan',
    pic: 'Kepala Sekolah & Tim Tata Usaha / Kepegawaian',
    target: '75 Dewan Guru dan 10 Tenaga Kependidikan',
    schedule: 'Harian Terintegrasi Sistem Absensi Fingerprint & Jurnal Cloud',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Menegakkan integritas waktu kedinasan, keteladanan jam mengajar guru, dan akuntabilitas jam kerja ASN/GTK.',
    implementation: 'Pencatatan real-time kehadiran, rekapitulasi keterlambatan, pengawasan langsung oleh pimpinan, dan pengarsipan data di Google Drive dinas.',
    impact: 'Tingkat kehadiran GTK mencapai 99,4%; tidak ada jam kosong tanpa penugasan terstruktur.',
    externalLink: 'https://drive.google.com/drive/folders/1EIQBeSbjOK-M7e_UUf2MLNfsW4g7WvFd?usp=drive_link',
    highlightPoints: [
      'Rekap data kehadiran transparan dapat diakses tim penilai via Google Drive',
      'Keteladanan guru piket penyambutan pagi hadir sebelum pukul 06.00 WIB',
      'Sinkronisasi kinerja SKP dengan kehadiran riil di kelas'
    ]
  },
  {
    id: 20,
    title: 'Disiplin Siswa: Penertiban Kosmetik Berlebih (Razia Humanis)',
    category: 'Pembiasaan & Karakter',
    pic: 'Abdul Munif, S.Pd. & Tim Ketertiban / Guru BK',
    target: 'Peserta Didik Kelas X, XI, dan XII',
    schedule: 'Pemeriksaan Berkala & Insidental (14 September & 6 Oktober 2026)',
    progressPercentage: 100,
    status: 'Terealisasi Penuh',
    objective: 'Menjaga kesederhanaan, mencegah bahaya kosmetik ilegal/merkuri, serta mengembalikan fokus belajar murni peserta didik.',
    implementation: 'Pemeriksaan persuasif tas siswa oleh guru pendamping putri, penyitaan barang terdata, pengembalian saat penerimaan rapor, dan edukasi skincare aman.',
    impact: 'Penampilan siswa menjadi sopan, rapi, dan seragam; siswa memahami bahaya produk kecantikan tanpa izin edar BPOM.',
    pdfPath: '/assets/aistudio/20_Disiplin_SIswa__Razia_Kosmetik__26a716d3.pdf',
    highlightPoints: [
      'Pemeriksaan tas secara humanis dan menjaga privasi siswi',
      'Edukasi dermatologi kesehatan kulit remaja bekerja sama dengan tenaga medis',
      'Pemusnahan dan pengembalian barang sitaan transparan diketahui orang tua'
    ]
  },
  {
    id: 21,
    title: 'Menanamkan Nilai Perjuangan: Anjangsana Veteran Seroja',
    category: 'Pembiasaan & Karakter',
    pic: 'Sri Handastuti, S.Pd., Waka Humas, Waka Kesiswaan & OSMEKA',
    target: 'Perwakilan Pengurus OSIS/MPK dan Peserta Didik SMANIKRE',
    schedule: 'Jumat, 14 Agustus 2026 (Peringatan Hari Pramuka) di Kediaman Veteran',
    progressPercentage: 100,
    status: 'Terealisasi Penuh',
    objective: 'Meneladani pengorbanan pejuang bangsa, menumbuhkan jiwa nasionalisme, dan rasa hormat kepada para pahlawan kemerdekaan.',
    implementation: 'Kunjungan silaturahmi ke kediaman Bapak Abdillah (Veteran Penugasan Seroja Timor Timur), menyimak kesaksian sejarah otentik, dan pemberian tali asih.',
    impact: 'Peserta didik memahami arti penting menjaga keutuhan NKRI dan memiliki rasa syukur atas nikmat perdamaian saat ini.',
    pdfPath: '/assets/aistudio/21._Veteran_Seroja_SMANKRES_46aced14.',
    highlightPoints: [
      'Pembelajaran sejarah langsung dari saksi hidup operasi Seroja Timor Timur',
      'Menguatkan dimensi Profil Pelajar Pancasila: Berkebinekaan Global & Patriotisme',
      'Pemberian bingkisan tali asih sebagai bentuk kepedulian generasi muda'
    ]
  },
  {
    id: 22,
    title: 'Penguatan Karakter Nobar Film "Jangan Buang Ibu" & Surat Kasih',
    category: 'Pembiasaan & Karakter',
    pic: 'Sri Handastuti, S.Pd. & 26 Guru Pendamping PPK',
    target: '864 Siswa Kelas X dan XI SMAN 1 Krembung',
    schedule: 'Rabu, 14 Oktober 2026 (11.00 – 13.00 WIB) di Cinepolis Lippo Plaza Sidoarjo',
    progressPercentage: 100,
    status: 'Terealisasi Penuh',
    objective: 'Menyentuh emosi moral siswa akan besarnya jasa ibu, membiasakan sikap birrul walidain, dan mengikis egoisme remaja.',
    implementation: 'Penayangan serentak di Cinema 1 (286 kursi) & Cinema 3 (110 kursi), dilanjutkan tugas refleksi menulis surat permohonan maaf dan terima kasih kepada ibu.',
    impact: 'Terjadi rekonsiliasi batin yang mengharukan antara siswa dan orang tua; umpan balik orang tua sangat positif atas perubahan sikap anak di rumah.',
    pdfPath: '/assets/aistudio/22._Laporan_Nobar-Jangan_Buang_Ibu_b4291051.pdf',
    highlightPoints: [
      'Pemanfaatan media audio-visual bioskop modern untuk pembelajaran afektif',
      'Lembar kerja siswa: surat ungkapan hati untuk ibu yang wajib ditandatangani orang tua',
      'Dukungan penuh 26 guru pendamping mengawal keselamatan perjalanan siswa'
    ]
  },
  {
    id: 23,
    title: 'Revitalisasi SARPRAS Sekolah (Kamar Mandi, Paving, Pagar, Ruang KS, Aula)',
    category: 'Sarpras & Kemitraan',
    pic: 'Waka Sarana Prasarana & Komite Sekolah',
    target: 'Seluruh Fasilitas Infrastruktur Pembelajaran SMAN 1 Krembung',
    schedule: 'Realisasi Berkala Tahun Anggaran 2025/2026',
    progressPercentage: 94,
    status: 'Tahap Lanjutan',
    objective: 'Mewujudkan sarana prasarana yang representatif, aman, bersih, dan mendukung kenyamanan proses belajar-mengajar.',
    implementation: 'Renovasi toilet siswa terpisah laki-perempuan dengan tandon air baru, pavingisasi halaman upacara, peremajaan pagar keliling, pembenahan ruang KS, dan pintu aula.',
    impact: 'Fasilitas sanitasi beroperasi optimal tanpa kendala air, halaman luas bersih bebas genangan air, dan keamanan sekolah semakin terjaga.',
    highlightPoints: [
      'Pembenahan sanitasi toilet siswa terpisah higienis dengan pasokan air lancar',
      'Pavingisasi halaman upacara dan akses koridor kelas yang nyaman',
      'Dukungan pendanaan sinergis dari BOS Reguler, BOS Kinerja, dan PSM Komite'
    ]
  },
  {
    id: 24,
    title: 'Sinergi Komite Sekolah dan GTK (Rapat Kerja Harmoni Tretes)',
    category: 'Sarpras & Kemitraan',
    pic: 'Kepala Sekolah & Moch. Dhamroni Chudlori, M.Si. (Ketua Komite)',
    target: 'Pengurus Komite, Kepala Sekolah, Dewan Guru & Seluruh Wali Kelas',
    schedule: 'Jumat - Sabtu, 4-5 September 2026 di Tanjung Plaza Hotel Tretes, Pasuruan',
    progressPercentage: 100,
    status: 'Terealisasi Penuh',
    objective: 'Membangun teamwork harmonis, menyamakan persepsi program kerja, dan mengukuhkan peran wali kelas sebagai ujung tombak humas paguyuban.',
    implementation: 'Rapat kerja sinergis, pembekalan penanganan paguyuban kelas, transparansi alokasi dana Peran Serta Masyarakat (PSM), dan perumusan komitmen bersama.',
    impact: 'Dukungan komite sekolah 100% solid mem-back up seluruh program sekolah; komunikasi dengan orang tua murid berlangsung kondusif dan transparan.',
    pdfPath: '/assets/aistudio/24._Sinergi_GTK_512b0406.pdf',
    highlightPoints: [
      'Wali kelas difungsikan sebagai duta humas sekolah di grup paguyuban kelas',
      'Komite sekolah siap mengawal dan melindungi guru dari benturan komunikasi eksternal',
      'Sinkronisasi pendanaan PSM untuk pembiayaan program unggulan siswa'
    ]
  },
  {
    id: 25,
    title: 'Pelestarian Budaya: Pengadaan Gamelan & Ekskul Karawitan',
    category: 'Pembiasaan & Karakter',
    pic: 'Ahmad Bashori, S.Si., M.Pd. & Pembina Seni Budaya',
    target: 'Siswa Kelas X, XI, XII & Guru Pencinta Seni Tradisional',
    schedule: 'Latihan Rutin Mingguan di Ruang Karawitan SMAN 1 Krembung',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Mengenalkan dan melestarikan warisan adiluhung seni karawitan Jawa, melatih kepekaan rasa, serta kerja sama tim yang harmonis.',
    implementation: 'Realisasi pengadaan 1 set instrumen gamelan lengkap berbahan perunggu melalui BOS Kinerja, perekrutan pelatih profesional, dan pembentukan tim karawitan.',
    impact: 'Gamelan digunakan rutin untuk latihan siswa dan guru; tim karawitan tampil pada acara resmi sekolah dan upacara adat.',
    pdfPath: '/assets/aistudio/25._Pelestarian_Budaya_e7783677.pdf',
    highlightPoints: [
      'Pengadaan instrumen gamelan Jawa lengkap didanai oleh BOS Kinerja Kemdikbud',
      'Melibatkan kolaborasi latihan antara dewan guru dan kelompok siswa',
      'Menanamkan kecintaan pada kearifan lokal di tengah serbuan budaya asing'
    ]
  },
  {
    id: 26,
    title: 'Sekolah Moderasi Beragama (Penghargaan Kemenag Sidoarjo & Role Model 2026)',
    category: 'Pembiasaan & Karakter',
    pic: 'Siwi Kuntarsih, S.Pd., M.Pd. & Ulfatul Husna, S.Ag., M.Pd.',
    target: 'Seluruh Ekosistem Sekolah (Pendidik, Tenaga Kependidikan, dan 1.287 Siswa)',
    schedule: 'Pelaksanaan Sepanjang Tahun (Sertifikasi & Portofolio Tahap I)',
    progressPercentage: 100,
    status: 'Terealisasi Penuh',
    objective: 'Menginternalisasikan 9 Kata Kunci Moderasi Beragama (Toleransi, Keadilan, Keseimbangan, Cinta Tanah Air) dan Trilogi Kerukunan.',
    implementation: 'Penyusunan portofolio 38 komponen penilaian, peresmian Pojok Moderasi Beragama, mural toleransi, liputan Radar Jatim sebagai role model SMB 2026, dan iklim belajar inklusif tanpa diskriminasi.',
    impact: 'SMAN 1 Krembung meraih predikat Sekolah Moderasi Beragama dari Kantor Kemenag Kabupaten Sidoarjo dan diliput media massa sebagai Role Model SMB 2026.',
    pdfPath: '/assets/aistudio/26._SMB_SMAN_1_Krembung__2__46ce99a3.pdf',
    externalLink: 'https://radarjatim.id/sma-negeri-1-krembung-jadi-role-model-smb-2026/',
    highlightPoints: [
      'Penghargaan resmi Sekolah Moderasi Beragama dari Kementerian Agama Sidoarjo',
      'Liputan Radar Jatim: "SMA Negeri 1 Krembung Jadi Role Model SMB 2026"',
      'Pojok Moderasi Beragama dan Mading Toleransi sebagai pusat literasi damai',
      'Penguatan nilai Tasamuh (toleransi) membentengi siswa dari paham radikalisme'
    ]
  },
  {
    id: 27,
    title: 'Program Kunjungan Industri Vokasi ke BPVP Sidoarjo (Kemnaker)',
    category: 'Kesiswaan & Prestasi',
    pic: 'Mohamad Suyatno, S.Kom., M.Pd., Agustin Nur Widianti, S.Pd. & Tim BK',
    target: '68 Siswa Kelas XII (Fokus Persiapan Kerja Mandiri & Wirausaha)',
    schedule: 'Kamis, 16 April 2026 (08.00 - 14.30 WIB) di BPVP Sidoarjo, Tulangan',
    progressPercentage: 100,
    status: 'Terealisasi Penuh',
    objective: 'Membekali siswa yang tidak melanjutkan kuliah dengan wawasan vokasi nyata, pelatihan gratis APBN, dan sertifikasi kompetensi BNSP.',
    implementation: 'Workshop tour 6 kejuruan (Listrik, AC/Pendingin, Otomotif Mobil/Motor, Las Welding, Menjahit Garmen, TIK), simulasi akun SIAPkerja, dan pembekalan instruktur.',
    impact: '52 dari 68 siswa (76,5%) langsung memetakan pilihan kursus vokasi gratis; rasa percaya diri lulusan SMA untuk bersaing di dunia industri meningkat pesat.',
    pdfPath: '/assets/aistudio/27_Laporan_Kunjungan_BPVP_c426477d.pdf',
    highlightPoints: [
      'Kemitraan langsung dengan Balai Pelatihan Vokasi Kemnaker RI Sidoarjo',
      'Informasi beasiswa pelatihan kerja 100% gratis berfasilitas uang saku & sertifikat BNSP',
      'Peluang penempatan kerja industri regional Jawa Timur dan magang ke Jepang'
    ]
  },
  {
    id: 28,
    title: 'Bimbingan Intensif TKA & UTBK-SNBT Sukses Masuk PTN',
    category: 'Kesiswaan & Prestasi',
    pic: 'Tim Sukses PTN, Guru Mata Pelajaran Ujian & Bimbingan Konseling',
    target: 'Seluruh Siswa Kelas XII Calon Pendaftar SNBP dan SNBT',
    schedule: 'Semester Genap (Oktober – April) Terjadwal di Luar Jam Reguler',
    progressPercentage: 95,
    status: 'Berjalan Rutin',
    objective: 'Mendongkrak daya serap lulusan SMAN 1 Krembung masuk ke Perguruan Tinggi Negeri favorit melalui pembinaan tes skolastik dan TKA.',
    implementation: 'Bedah soal TPS dan TKA mendalam, tryout berkala berbasis komputer (CBT), pendampingan analisis peluang passing grade prodi oleh guru BK.',
    impact: 'Peningkatan persentase siswa lolos SNBP dan UTBK SNBT di Unair, ITS, Unesa, UPN, Brawijaya, dan politeknik negeri.',
    highlightPoints: [
      'Tryout berkala dengan sistem skoring IRT (Item Response Theory) riil UTBK',
      'Konsultasi rasionalisasi nilai rapor untuk penentuan program studi SNBP',
      'Penyusunan bank soal komprehensif oleh forum guru MGMPS'
    ]
  },
  {
    id: 29,
    title: 'Expo Kampus SMANKREZ: Inspiring Your Future',
    category: 'Kesiswaan & Prestasi',
    pic: 'Agustin Nur Widianti, S.Pd. & Pengurus OSIS / MPK SMANIKRE',
    target: 'Seluruh Siswa SMANIKRE dan Undangan Siswa SMA Sekitar Krembung',
    schedule: 'Rabu, 26 November 2025 (07.00 – 13.00 WIB) di Aula SMAN 1 Krembung',
    progressPercentage: 100,
    status: 'Terealisasi Penuh',
    objective: 'Membuka cakrawala pilihan perguruan tinggi negeri dan swasta, beasiswa kuliah, serta prospek karier masa depan.',
    implementation: 'Pameran pendidikan menghadirkan 26 PTS dan 6 PTN, booth konsultasi langsung tiap prodi, talkshow beasiswa, dan photobooth interaktif.',
    impact: 'Siswa memperoleh informasi resmi tangan pertama mengenai syarat pendaftaran kuliah, biaya, dan beasiswa tanpa harus bepergian jauh.',
    pdfPath: '/assets/aistudio/29_EXPO_KAMPUS_021f5f5b.pdf',
    highlightPoints: [
      'Diikuti 32 Perguruan Tinggi terkemuka (6 PTN dan 26 PTS Jawa Timur)',
      'Konsultasi tatap muka langsung di masing-masing stan universitas',
      'Dihadiri ribuan siswa termasuk perwakilan sekolah rekanan sekitar Sidoarjo-Mojokerto'
    ]
  },
  {
    id: 30,
    title: 'Skrining Kesehatan Berkala, Perawat Siaga UKS & Donor Darah PMI',
    category: 'Kesehatan & Lingkungan',
    pic: 'Dinda Nur Damayanti, S.Pd., Tenaga Medis UKS & PMR Wira',
    target: 'Seluruh Siswa Kelas X (Skrining 424 Siswa) & Seluruh Warga Sekolah',
    schedule: 'Skrining Rabu 9 Sep 2026, Perawat Siaga Harian, Donor Darah Tiap Semester',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Deteksi dini gangguan penglihatan/gigi/anemia, pertolongan pertama cepat di sekolah, dan aksi kemanusiaan donor darah.',
    implementation: 'Skrining 4 Pos (TB/BB, Fisik/Mata Snellen, Gigi Mulut, Cek Hb Anemia) oleh Puskesmas Krembung; Perawat Siaga 100% jam sekolah; Donor Darah PMI (30 kantong darah terkumpul).',
    impact: 'Profil rekam medis 397 siswa terpetakan; 91% siswa sakit tertangani tuntas di UKS dan dapat kembali belajar.',
    pdfPath: '/assets/aistudio/30._Laporan_Skrining_Kesehatan_UKS_SMAN_1_Krembung_6ff6b322.pdf',
    highlightPoints: [
      'Skrining terpadu 4 Pos oleh dokter & paramedis Puskesmas Krembung',
      'Layanan Perawat Siaga UKS mencakup 100% jam operasional sekolah',
      'Aksi donor darah berkala bekerja sama dengan UTD PMI Kabupaten Sidoarjo'
    ]
  },
  {
    id: 31,
    title: 'Sekolah Tangguh & Penanggulangan Bencana (SPAB)',
    category: 'Kesehatan & Lingkungan',
    pic: 'Tim Tanggap Darurat & Pembina Pramuka / PMR',
    target: 'Seluruh Warga Sekolah SMAN 1 Krembung',
    schedule: 'Simulasi Terjadwal Tiap Awal Semester Baru',
    progressPercentage: 92,
    status: 'Berjalan Rutin',
    objective: 'Meningkatkan kesiapsiagaan menghadapi potensi bencana alam gempa bumi, angin puting beliung, dan kebakaran.',
    implementation: 'Penetapan titik kumpul (assembly point) di lapangan utama, pemasangan rambu jalur evakuasi, penyediaan APAR di titik strategis, dan simulasi evakuasi mandiri.',
    impact: 'Warga sekolah tanggap dan tenang dalam mengambil tindakan penyelamatan diri tanpa kepanikan saat terjadi getaran gempa.',
    highlightPoints: [
      'Rambu jalur evakuasi jelas terpasang di setiap gedung lantai 1 dan 2',
      'Penyediaan Alat Pemadam Api Ringan (APAR) siap pakai di laboratorium dan ruang staf',
      'Simulasi evakuasi bencana bekerja sama dengan BPBD Kabupaten Sidoarjo'
    ]
  },
  {
    id: 32,
    title: 'Ruang Bertumbuh (Konseling Sebaya & Pendampingan Mental)',
    category: 'Pembiasaan & Karakter',
    pic: 'Tim Bimbingan Konseling & Kader Peer Counselor Siswa',
    target: 'Peserta Didik yang Memerlukan Dukungan Afektif dan Psikologis',
    schedule: 'Layanan Fleksibel Setiap Hari Kerja di Ruang BK Reflektif',
    progressPercentage: 95,
    status: 'Berjalan Rutin',
    objective: 'Menyediakan ruang aman untuk mendengarkan curahan hati, mengurai kecemasan akademik, dan mencegah stres remaja.',
    implementation: 'Pengadaan sofa konseling nyaman dari dana BOS/PSM, pembinaan konselor sebaya dari unsur OSIS/PMR, dan layanan konsultasi privat terjaga rahasia.',
    impact: 'Siswa merasa didengar dan dihargai tanpa rasa takut dihakimi; kesejahteraan psikologis (well-being) siswa meningkat.',
    highlightPoints: [
      'Fasilitas ruang konseling BK yang nyaman dan representatif',
      'Kader konselor sebaya (peer counselor) menjangkau curhat antarteman',
      'Pendekatan restoratif tanpa pelabelan negatif'
    ]
  },
  {
    id: 33,
    title: 'Peningkatan Prestasi Siswa & Pembinaan Talenta Berkelanjutan',
    category: 'Kesiswaan & Prestasi',
    pic: 'Waka Kesiswaan, Pembina Ekstrakurikuler & Pelatih Khusus',
    target: 'Siswa Berbakat di Bidang Sains, Olahraga, Seni Budaya, dan E-Sport',
    schedule: 'Klinik Pembinaan Rutin & Delegasi Kompetisi Sepanjang Tahun',
    progressPercentage: 100,
    status: 'Berjalan Rutin',
    objective: 'Mengasah potensi siswa untuk meraih prestasi gemilang di ajang O2SN, FLS3N, OSN, PORKAB, dan kejuaraan terbuka.',
    implementation: 'Pembiayaan transportasi & pendaftaran lomba, pendampingan intensif oleh pelatih spesialis, dan penghargaan bagi siswa berprestasi pada upacara bendera.',
    impact: 'Meraih 51+ kejuaraan tingkat Kabupaten, Provinsi hingga Nasional (Pencak Silat, Karate, Kickboxing, Selam, Essai Nasional, Biologi UM, FLS3N, OSN).',
    pdfPath: '/assets/aistudio/33._Data_Prestasi_Akademik___Non_Akademik_Siswa_Tahun_2026_2555fb35.pdf',
    highlightPoints: [
      'Rekor 51 capaian juara dalam kurun waktu satu tahun ajaran 2026',
      'Dominasi medali emas pada cabor beladiri (Pencak Silat, Karate, Ju-Jitsu, Kickboxing)',
      'Penghargaan Juara I Lomba Menulis Essai Tingkat Nasional di Universitas 17 Agustus 1945'
    ]
  },
  {
    id: 34,
    title: 'Branding Sekolah: Video Profil, Media Sosial & Portal Resmi',
    category: 'GTK & Kepemimpinan',
    pic: 'Tim Humas, IT SMANIKRE & Tim Ekstrakurikuler Jurnalistik/Multimedia',
    target: 'Masyarakat Luas, Calon Peserta Didik Baru, dan Pemangku Kebijakan',
    schedule: 'Pembaruan Berkala Mingguan di Web, Instagram, TikTok, YouTube',
    progressPercentage: 98,
    status: 'Berjalan Rutin',
    objective: 'Mempublikasikan keunggulan, budaya positif, dan prestasi SMAN 1 Krembung secara kredibel dan menarik di ruang publik digital.',
    implementation: 'Produksi video profil profesional, publikasi konten harian kegiatan sekolah di TikTok @smankrez.krembung, liputan kegiatan di YouTube, dan pengelolaan web resmi.',
    impact: 'Reputasi SMAN 1 Krembung kian harum di mata masyarakat Jawa Timur sebagai sekolah berprestasi, ramah anak, dan berbudaya.',
    highlightPoints: [
      'Kanal media sosial resmi aktif dengan ribuan pengikut (TikTok, YouTube, IG)',
      'Dokumentasi video profil sinematik mencerminkan ekosistem pembelajaran modern',
      'Transparansi publikasi seluruh kegiatan dan dokumen akuntabilitas sekolah'
    ]
  }
];
