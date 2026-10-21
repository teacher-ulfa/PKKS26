export interface PresentationSlide {
  id: number;
  slideNumber: string;
  badge: string;
  title: string;
  subtitle: string;
  talkingPoints: string[];
  keyMetrics: { label: string; value: string; note: string }[];
  highlightBox: {
    title: string;
    description: string;
  };
  presenterNotes: string; // Specific persuasive notes for Ibu Siwi Kuntarsih
}

export const PKKS_PRESENTATION_SLIDES: PresentationSlide[] = [
  {
    id: 1,
    slideNumber: '01',
    badge: 'PENILAIAN KINERJA KEPALA SEKOLAH (PKKS)',
    title: 'Praktik Kepemimpinan Berbasis Data untuk Peningkatan Mutu Pembelajaran',
    subtitle: 'SMA Negeri 1 Krembung · Ruang GTK · Tahun Pelajaran 2026/2027',
    talkingPoints: [
      'Selamat datang Bapak/Ibu Pengawas Sekolah di Ruang GTK SMAN 1 Krembung.',
      'Presentasi ini menguraikan kepemimpinan pembelajaran (Instructional Leadership) berbasis data riil Rapor Pendidikan.',
      'Penyelarasan visi-misi "Sekolah Unggul, Berkarakter & Berbudaya Lingkungan" menjadi 34 program kerja terukur.',
      'Bukti fisik digital dan dokumen pertanggungjawaban terintegrasi secara transparan dan akuntabel.'
    ],
    keyMetrics: [
      { label: 'Indikator Utama', value: 'PKKS 2026', note: 'Presentasi Program Berbasis Data' },
      { label: 'Peserta Didik', value: '1.287', note: 'Terbagi dalam 36 rombongan belajar' },
      { label: 'Pendidik (GTK)', value: '75 Guru', note: '100% aktif dalam komunitas belajar' },
      { label: 'Akreditasi', value: 'Grade A', note: 'NPSN 20501846 Kab. Sidoarjo' }
    ],
    highlightBox: {
      title: 'Pernyataan Komitmen Kepemimpinan',
      description: '"Data bukan sekadar angka di atas kertas, melainkan cermin nurani untuk memetakan kebutuhan nyata setiap murid dan memandu langkah strategis seluruh dewan guru demi menghadirkan pembelajaran yang bermakna dan memerdekakan."'
    },
    presenterNotes: 'Awali dengan menyapa Pengawas secara takzim. Tegaskan bahwa seluruh inovasi di SMAN 1 Krembung bermuara pada data Rapor Pendidikan (PBD), bukan intuisi sepihak.'
  },
  {
    id: 2,
    slideNumber: '02',
    badge: 'PROFIL KEPEMIMPINAN INSTRUKSIONAL',
    title: 'Transformasi Peran Kepala Sekolah Menjadi Penggerak Budaya Reflektif',
    subtitle: 'Fokus pada Supervisi Klinis, Komunitas Belajar (Kombel), dan Pembelajaran Mendalam (Deep Learning)',
    talkingPoints: [
      'Peningkatan kompetensi berkelanjutan: Mengikuti Pelatihan PM KKA & Deep Learning kerja sama BBGTK Jatim dan Universitas Negeri Malang di SMAN 2 Sidoarjo.',
      'Mengubah supervisi konvensional administratif menjadi supervisi klinis berbasis coaching reflektif.',
      'Memberikan catatan observasi yang mendukung guru melakukan refleksi mendalam pasca-mengajar di kelas.',
      'Mengukuhkan peran seluruh 75 guru sebagai teladan adab, kedisiplinan, dan fasilitator belajar aktif.'
    ],
    keyMetrics: [
      { label: 'Partisipasi Pelatihan', value: '100%', note: 'Sesi Luring & LMS Daring Tuntas' },
      { label: 'Supervisi Klinis', value: '36 Rombel', note: 'Coaching reflektif guru berkala' },
      { label: 'Kombel Sekolah', value: 'Rutin', note: 'Berbagi Praktik Baik Jumat Sore' },
      { label: 'Penghargaan', value: 'Inspiratif', note: 'Penggerak Moderasi Beragama' }
    ],
    highlightBox: {
      title: 'Dampak Perubahan Paradigma',
      description: 'Guru tidak lagi merasa dihakimi saat disupervisi, melainkan diajak berdialog reflektif untuk menemukan solusi terbaik atas kesulitan belajar siswa di ruang kelas.'
    },
    presenterNotes: 'Jelaskan bagaimana pelatihan dengan narasumber Prof. Budi (UM) dan fasilitator BBGTK Jatim langsung diimbaskan ke dalam program MGMPS dan Kombel sekolah.'
  },
  {
    id: 3,
    slideNumber: '03',
    badge: 'RAPOR PENDIDIKAN & PBD',
    title: 'Analisis Komprehensif Rapor Pendidikan: Identifikasi, Refleksi, dan Benahi',
    subtitle: 'Menjawab Tantangan Akar Masalah Menjadi Rencana Kegiatan Tahunan (RKT) Berdampak',
    talkingPoints: [
      'Literasi mencapai skor sempurna 100% (100% siswa tuntas kompetensi minimum membaca).',
      'Numerasi mencapai 93,33% (fokus penguatan domain geometri dan penalaran kontekstual).',
      'Iklim Keamanan sekolah meraih skor 79,00 (Kategori Baik) dengan komitmen pencegahan kekerasan fisik dan perundungan.',
      'Iklim Kebinekaan bertengger di skor 75,00 (Kategori Baik) dan dinobatkan sebagai Sekolah Moderasi Beragama (SMB) oleh Kemenag Sidoarjo.'
    ],
    keyMetrics: [
      { label: 'A.1 Literasi', value: '100%', note: 'Melampaui target provinsi' },
      { label: 'A.2 Numerasi', value: '93.33%', note: 'Domain geometri diperkuat' },
      { label: 'D.4 Iklim Keamanan', value: '79.00', note: 'Disiplin positif & tanpa kekerasan' },
      { label: 'D.8 Iklim Kebinekaan', value: '75.00', note: 'Penghargaan SMB Kemenag 2025' }
    ],
    highlightBox: {
      title: 'Fokus Intervensi PBD',
      description: 'Akar masalah utama yang diidentifikasi dari rapor pendidikan adalah "Dukungan untuk Refleksi Guru" (D.3.3) dan "Metode Pembelajaran Interaktif" (D.1.3). Keduanya langsung dijawab tuntas melalui optimalisasi MGMPS dan Berbagi Praktik Baik.'
    },
    presenterNotes: 'Tunjukkan ke Pengawas bahwa kita tidak hanya berpuas diri dengan skor 100% di literasi, tetapi terus membedah sub-indikator yang masih memerlukan lompatan (seperti geometri dan karakter nalar kritis).'
  },
  {
    id: 4,
    slideNumber: '04',
    badge: '34 PROGRAM UNGGULAN SEKOLAH',
    title: 'Implementasi 34 Program Kerja Unggulan Berkelanjutan di SMANIKRE',
    subtitle: 'Enam Klaster Strategis Pembiasaan, Karakter, Literasi, Kesehatan, Vokasi, dan Sarpras',
    talkingPoints: [
      'Klaster Pembiasaan 5S: Menyapa dalam 5 bahasa (Indonesia, Inggris, Jepang, Jawa, Arab) melibatkan 77 guru piket terstruktur.',
      'Klaster Religiusitas & Spiritual: Pembiasaan Sholat Fardhu Berjamaah dengan inovasi kontrol "Kartu Surga".',
      'Klaster Moderasi Beragama (SMB): Dipimpin langsung Ibu Siwi Kuntarsih & Ibu Ulfatul Husna, diliput Radar Jatim sebagai Role Model SMB 2026.',
      'Klaster Literasi Mendalam: English Immersion Program bersama 2 penutur asing Nigeria dan Literasi Keuangan bersama Bank BCA.',
      'Klaster Disiplin & Perlindungan: Pengendalian ponsel di loker kelas, razia kosmetik humanis, serta bimbingan mental Koramil.'
    ],
    keyMetrics: [
      { label: 'Total Program', value: '34 Program', note: 'Tersebar di 6 klaster strategis' },
      { label: 'Tingkat Keterlaksanaan', value: '100%', note: 'Memiliki SK & laporan fisik' },
      { label: 'Dukungan Anggaran', value: 'BOS & PSM', note: 'Tertuang dalam RKAS resmi' },
      { label: 'Keterlibatan Siswa', value: '100%', note: '36 rombel X, XI, XII aktif' }
    ],
    highlightBox: {
      title: 'Harmonisasi Program Sekolah',
      description: 'Setiap program kerja bukan sekadar agenda seremoni, melainkan saling menopang: misalnya pengumpulan HP di pagi hari mendukung fokus KBM, dan pengambilannya di sore hari disyaratkan dengan validasi Kartu Surga sholat ashar.'
    },
    presenterNotes: 'Tekankan sinergi antar-program kerja, bahwa program kedisiplinan dan religiusitas dibuat terpadu secara cerdas dan mendidik.'
  },
  {
    id: 5,
    slideNumber: '05',
    badge: 'PRESTASI & CAPAIAN MUTU',
    title: 'Panen Prestasi: 51 Kejuaraan Resmi Peserta Didik SMAN 1 Krembung',
    subtitle: 'Menumbuhkan Jiwa Juara di Bidang Akademik, Seni Sastra, Bela Diri, Olahraga, dan E-Sport',
    talkingPoints: [
      'Sebanyak 51 medali kejuaraan resmi diraih siswa SMAN 1 Krembung pada tahun 2026.',
      '8 Kejuaraan Tingkat Nasional: Juara 1 Essai Nasional UNTAG, Juara 2 Olimpiade Biologi UM, 4 Medali Emas & Perunggu Pencak Silat Batu Student Open.',
      'Dominasi cabor Akuatik (Raihan Muhammad Subandi memboyong 4 medali PORKAB & O2SN Selam) serta cabor beladiri Karate, Kickboxing & Jujitsu.',
      'Apresiasi berjenjang dan pembinaan minat bakat intensif difasilitasi penuh oleh pihak sekolah.'
    ],
    keyMetrics: [
      { label: 'Total Medali', value: '51 Medali', note: '16 Emas · 15 Perak · 20 Perunggu' },
      { label: 'Tingkat Nasional', value: '8 Juara', note: 'Sains, Essai & Pencak Silat' },
      { label: 'Tingkat Provinsi', value: '7 Juara', note: 'Kejurda Karate Korem 082' },
      { label: 'Tingkat Kab/Kota', value: '36 Juara', note: 'PORKAB, O2SN, FLS3N, Duta' }
    ],
    highlightBox: {
      title: 'Pemberian Apresiasi Terjadwal',
      description: 'Setiap siswa yang berprestasi diapresiasi langsung di hadapan seluruh warga sekolah saat upacara bendera hari Senin, diberikan sertifikat penghargaan dan dukungan pembinaan lanjutan.'
    },
    presenterNotes: 'Tunjukkan bahwa keberhasilan pembelajaran di kelas berdampak langsung pada kepercayaan diri dan mental kompetisi siswa di ajang bergengsi.'
  },
  {
    id: 6,
    slideNumber: '06',
    badge: 'PEMBELAJARAN MENDALAM & VOKASI',
    title: 'Menjawab Kebutuhan Beragam Murid: Dari TKA-UTBK hingga Vokasi BPVP',
    subtitle: 'Dukungan Penuh bagi Murid Melanjutkan ke Kampus Impian Maupun Kesiapan Kerja Mandiri',
    talkingPoints: [
      'Bimbingan Intensif TKA & UTBK-SNBT: Tryout berkala sistem IRT untuk membedah soal-soal penalaran skolastik.',
      'Expo Kampus SMANKREZ: Menghadirkan 32 perguruan tinggi (6 PTN dan 26 PTS) di aula sekolah melayani konsultasi beasiswa dan prodi.',
      'Kunjungan Edukasi Vokasi ke BPVP Sidoarjo: 68 siswa kelas XII dibekali keterampilan nyata di 6 bengkel (Listrik, AC, Otomotif, Las, Garmen, IT).',
      'Pelatihan 100% gratis APBN Kemnaker dengan fasilitas sertifikasi resmi BNSP dan peluang magang industri/Jepang.'
    ],
    keyMetrics: [
      { label: 'Peserta Expo Kampus', value: '1.200+', note: 'Siswa SMANIKRE & sekolah mitra' },
      { label: 'Kampus Terlibat', value: '32 PT', note: '6 PTN dan 26 PTS terkemuka' },
      { label: 'Peserta BPVP', value: '68 Siswa', note: 'Kelas XII fokus siap kerja/usaha' },
      { label: 'Pemetaan Vokasi', value: '76.5%', note: 'Siswa langsung memilih kejuruan' }
    ],
    highlightBox: {
      title: 'Prinsip Keadilan Pendidikan (No Child Left Behind)',
      description: 'SMAN 1 Krembung tidak hanya fokus pada siswa yang ingin kuliah. Siswa yang berencana langsung bekerja pun dirawat, didampingi, dan difasilitasi akses sertifikasi kompetensi nasional agar masa depannya tetap cerah.'
    },
    presenterNotes: 'Poin ini sangat disenangi pengawas sekolah karena mencerminkan prinsip Kurikulum Merdeka yang sejati: berpihak pada semua murid tanpa diskriminasi.'
  },
  {
    id: 7,
    slideNumber: '07',
    badge: 'KOLABORASI & KEMITRAAN',
    title: 'Sinergi Pentahelix: Komite Sekolah, TNI, Polri, DUDI, dan Puskesmas',
    subtitle: 'Membangun Ekosistem Pendidikan yang Aman, Sehat, dan Berdaya Dukung Penuh',
    talkingPoints: [
      'Sinergi Komite & GTK: Rapat kerja penyamaan visi di Tretes Pasuruan, mengukuhkan wali kelas sebagai tonggak humas paguyuban.',
      'Kemitraan Koramil Krembung dalam Bimbingan Mental & PBB membentuk karakter 1.279 siswa.',
      'Kemitraan Puskesmas Krembung dalam Skrining Kesehatan 4 Pos dan Perawat Siaga UKS.',
      'Kemitraan Perbankan (Bank BCA) dalam edukasi inklusi keuangan Simpanan Pelajar (SimPel).',
      'Pelestarian Budaya: Pengadaan Gamelan BOS Kinerja untuk ekstrakurikuler karawitan guru dan siswa.'
    ],
    keyMetrics: [
      { label: 'Dukungan Komite', value: '100% Solid', note: 'Mem-back up program & PSM' },
      { label: 'Mitra Instansi', value: '6+ Lembaga', note: 'TNI, Polri, Dinkes, Perbankan' },
      { label: 'Sarpras Terawat', value: '22.771 m²', note: 'Lahan sekolah hijau & aman' },
      { label: 'Pemberdayaan UKS', value: '100% Jam', note: 'Perawat siaga melayani siswa' }
    ],
    highlightBox: {
      title: 'Kekuatan Gotong Royong',
      description: 'Keberhasilan SMAN 1 Krembung adalah hasil kolaborasi erat antara pihak sekolah, komite, orang tua, dan masyarakat luas yang saling mendukung dengan penuh transparansi.'
    },
    presenterNotes: 'Sampaikan apresiasi kepada Komite Sekolah dan Muspika Krembung atas kerja sama sinergis yang terjalin erat.'
  },
  {
    id: 8,
    slideNumber: '08',
    badge: 'RENCANA TINDAK LANJUT (RTL)',
    title: 'Rencana Tindak Lanjut & Komitmen Keberlanjutan Mutu Sekolah',
    subtitle: 'Melangkah Maju dengan Inovasi Berkelanjutan demi Terus Melayani Masa Depan Generasi Bangsa',
    talkingPoints: [
      'Digitalisasi Jurnal Pemantauan Karakter: Integrasi presensi 5S, Kartu Surga, dan SIKAP ke dalam satu aplikasi terpadu.',
      'Penguatan Komunitas Belajar (Kombel) intra-sekolah sebagai laboratorium inovasi pedagogi mendalam.',
      'Peningkatan fasilitas laboratorium komputer dan perangkat interaktif untuk KBM digital.',
      'Perluasan jejaring MoU penempatan magang vokasi BPVP bagi lulusan siap kerja.',
      'Mempertahankan dan meningkatkan seluruh indikator Rapor Pendidikan menuju capaian Istimewa di tahun berikutnya.'
    ],
    keyMetrics: [
      { label: 'Target Literasi', value: '100%', note: 'Mempertahankan capaian puncak' },
      { label: 'Target Numerasi', value: '98%+', note: 'Penguatan penalaran matematika' },
      { label: 'Target Iklim Aman', value: 'Nol Kasus', note: 'Zero bullying & kekerasan' },
      { label: 'Kelulusan PTN', value: '+25% YoY', note: 'Target penembusan SNBP/SNBT' }
    ],
    highlightBox: {
      title: 'Kata Penutup & Terima Kasih',
      description: 'Kami menghaturkan terima kasih yang tulus kepada Pengawas Sekolah atas pembinaan dan arahannya. SMAN 1 Krembung siap melangkah lebih tinggi dengan semangat "Bersama Semangat Raih Prestasi".'
    },
    presenterNotes: 'Tutup presentasi dengan optimisme tinggi. Buka sesi dialog, klarifikasi, dan pemeriksaan bukti fisik dokumen bersama Tim Pengawas Sekolah.'
  }
];
