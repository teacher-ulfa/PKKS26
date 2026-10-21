export interface PbdIndicator {
  no: number;
  indicatorCode: string;
  indicatorName: string;
  category: 'Kualitas Pembelajaran' | 'Hasil Belajar Siswa' | 'Iklim Lingkungan Belajar' | 'Tata Kelola';
  score: number | string;
  scoreFormatted: string;
  status: 'Baik' | 'Sedang' | 'Kurang';
  badgeColor: string;
  rootCauseL1: string;
  rootCauseL2: string;
  rootCauseDesc: string;
  benahiKemdikbud: string;
  programSmankre: string[];
  evidenceFiles: string[];
  impactDescription: string;
}

export const RAPOR_PENDIDIKAN_INDICATORS: PbdIndicator[] = [
  {
    no: 1,
    indicatorCode: 'A.1',
    indicatorName: 'Kemampuan Literasi',
    category: 'Hasil Belajar Siswa',
    score: 100,
    scoreFormatted: '100% Kompetensi Minimum',
    status: 'Baik',
    badgeColor: 'emerald',
    rootCauseL1: 'A.1 Kemampuan Literasi & D.3 Kepemimpinan Instruksional',
    rootCauseL2: 'A.1.1 Kompetensi membaca teks informasi & D.3.3 Dukungan untuk refleksi guru',
    rootCauseDesc: 'Kemampuan memahami teks informasi dan wawasan global berkaitan erat dengan perluasan bahan bacaan serta pembiasaan membaca analitis.',
    benahiKemdikbud: 'Peningkatan kompetensi GTK dan kepala sekolah dalam literasi teks informasi serta supervisi pembelajaran reflektif.',
    programSmankre: [
      'Pembiasaan Literasi setiap Jum’at pagi pekan pertama',
      'English Immersion Program (menghadirkan 2 native speaker asal Nigeria)',
      'Literasi Digital Kreatif "Kenapa Harus Jadi Content Creator" bersama Glow & Lovely',
      'Pojok Baca Inklusif dan Majalah Dinding Edukatif di tiap kelas'
    ],
    evidenceFiles: [
      '/public/assets/aistudio/10_Laporan_Literasi_Bahasa_Inggris_Immersion_13eb6495.pdf',
      '/public/assets/aistudio/9_Laporan_Kegitan_GLow_and_Lovely_5ffcdf20.pdf'
    ],
    impactDescription: 'Seluruh peserta didik (100%) telah melampaui batas kompetensi minimum literasi dengan kemampuan komunikasi verbal dan digital yang kuat.'
  },
  {
    no: 2,
    indicatorCode: 'A.2',
    indicatorName: 'Kemampuan Numerasi',
    category: 'Hasil Belajar Siswa',
    score: 93.33,
    scoreFormatted: '93,33% Kompetensi Minimum',
    status: 'Baik',
    badgeColor: 'emerald',
    rootCauseL1: 'A.2 Kemampuan Numerasi & D.3 Kepemimpinan Instruksional',
    rootCauseL2: 'A.2.3 Kompetensi pada domain Geometri & D.3.3 Dukungan refleksi guru',
    rootCauseDesc: 'Pemahaman domain geometri dan penalaran spasial logis membutuhkan penguatan metode pembelajaran matematika kontekstual dan aplikasi nyata.',
    benahiKemdikbud: 'Pelatihan guru matematika dalam mendesain strategi pembelajaran interaktif dan pengenalan konsep finansial/kuantitatif praktis.',
    programSmankre: [
      'Pembiasaan Numerasi terjadwal pada Jum’at ke-3',
      'Program Literasi & Inklusi Keuangan Simpanan Pelajar (SimPel) bersama Bank BCA KCP Rungkut',
      'MGMPS Matematika intensif penyusunan instrumen soal berbasis TKA (Tes Kemampuan Akademik)',
      'Bimbingan TKA & Tryout UTBK-SNBT berkala'
    ],
    evidenceFiles: [
      '/public/assets/aistudio/11._LIterasi_Keuangan_BCA_bb68d720.pdf',
      '/public/assets/aistudio/8-LAPORAN_MGMPS_5bca4040.pdf'
    ],
    impactDescription: '93,33% peserta didik menguasai kompetensi dasar matematika logis dan pengelolaan finansial cerdas sejak usia sekolah.'
  },
  {
    no: 3,
    indicatorCode: 'A.3',
    indicatorName: 'Karakter Pelajar',
    category: 'Hasil Belajar Siswa',
    score: 65.3,
    scoreFormatted: '65,30 (Kategori Baik)',
    status: 'Baik',
    badgeColor: 'blue',
    rootCauseL1: 'A.3 Karakter & D.3 Kepemimpinan Instruksional',
    rootCauseL2: 'A.3.3 Kreativitas & Nalar Kritis (A.3.4)',
    rootCauseDesc: 'Kesenangan dan pengalaman menghasilkan karya baru serta kepekaan rasa empati sosial memperkokoh integritas dan dimensi Profil Pelajar Pancasila.',
    benahiKemdikbud: 'Menciptakan ruang belajar afektif yang menumbuhkan rasa syukur, empati kepada orang tua, serta ketangguhan mental siswa.',
    programSmankre: [
      'Penguatan Karakter Nobar Film "Jangan Buang Ibu" di Cinepolis (864 siswa menulis surat refleksi ibu)',
      'Bimbingan Mental & PBB bersama Koramil Krembung (1.279 siswa membentuk jiwa korsa dan disiplin)',
      'Pembiasaan 5S (Salam, Senyum, Sapa, Sopan, Santun) dengan 5 bahasa setiap pagi dan sore',
      'Pembiasaan Ibadah Sholat Fardhu Berjamaah & monitoring via Kartu Surga'
    ],
    evidenceFiles: [
      '/public/assets/aistudio/22._Laporan_Nobar-Jangan_Buang_Ibu_b4291051.pdf',
      '/public/assets/aistudio/12._BIMBINGAN_MENTAL_95e2c6b1.pdf',
      '/public/assets/aistudio/1._Pembiasaan_5S_SMAN_1_Krembung_Tahun_2026_f752372b.pdf',
      '/public/assets/aistudio/2_KARTU_SURGA__KARTU_SHOLAT__1f7cc09f.pdf'
    ],
    impactDescription: 'Terwujudnya adab kesopanan, penurunan drastis konflik antarsiswa, dan kedekatan emosional anak dengan orang tua melalui pembiasaan rutin.'
  },
  {
    no: 4,
    indicatorCode: 'D.1',
    indicatorName: 'Kualitas Pembelajaran',
    category: 'Kualitas Pembelajaran',
    score: 68.0,
    scoreFormatted: '68,00 (Kategori Baik)',
    status: 'Baik',
    badgeColor: 'blue',
    rootCauseL1: 'D.1 Kualitas Pembelajaran & D.3 Kepemimpinan Instruksional',
    rootCauseL2: 'D.1.3 Metode Pembelajaran Interaktif & D.3.3 Dukungan untuk refleksi guru',
    rootCauseDesc: 'Peralihan paradigma dari guru satu arah menuju pembelajaran mendalam (Deep Learning: mindful, meaningful, joyful) menuntut supervisi klinis berbasis coaching.',
    benahiKemdikbud: 'Fasilitasi komunitas belajar guru (Kombel) dan supervisi akademik berkala oleh kepala sekolah dengan umpan balik konstruktif.',
    programSmankre: [
      'Berbagi Praktik Baik rutin setiap Jum’at sore pekan ke-2 & ke-3',
      'MGMPS (Musyawarah Guru Mata Pelajaran Sekolah) pekan ke-4 dengan fokus modul ajar & asesmen TKA',
      'Pemanfaatan Interactive Flat Panel (IFP) dan proyektor di ruang kelas',
      'Pelatihan PM KKA & Deep Learning Kepala Sekolah bersama BBGTK Jatim & UM di SMAN 2 Sidoarjo'
    ],
    evidenceFiles: [
      '/public/assets/aistudio/8-LAPORAN_MGMPS_5bca4040.pdf',
      '/public/assets/aistudio/7__Rapor__Laporan_Pelatihan_Kompetensi_KS_64d99958.pdf'
    ],
    impactDescription: 'Peningkatan keterampilan pedagogik 75 guru dalam mengelola kelas berdiferensiasi dan supervisi klinis yang memberdayakan guru.'
  },
  {
    no: 5,
    indicatorCode: 'D.4',
    indicatorName: 'Iklim Keamanan Satuan Pendidikan',
    category: 'Iklim Lingkungan Belajar',
    score: 79.0,
    scoreFormatted: '79,00 (Kategori Baik)',
    status: 'Baik',
    badgeColor: 'emerald',
    rootCauseL1: 'D.4 Iklim Keamanan & E.5 Program dan Kebijakan Satuan Pendidikan',
    rootCauseL2: 'D.4.5 Pemahaman & sikap terhadap hukuman fisik, E.5.5 Kesetaraan gender & pencegahan perundungan',
    rootCauseDesc: 'Ketiadaan kekerasan fisik dan kenyamanan psikologis peserta didik menciptakan rasa aman penuh dalam proses belajar-mengajar.',
    benahiKemdikbud: 'Penguatan regulasi pencegahan dan penanganan kekerasan (PPK Permendikbud 46/2023) serta kemitraan dengan aparat berwenang.',
    programSmankre: [
      'Kebijakan Pengendalian Gawai/HP melalui Loker Kelas (06.45 - 15.00 WIB) sesuai edaran Dindik Jatim',
      'Penertiban Humanis Razia Kosmetik & edukasi skincare remaja oleh Tim BK dan Tatib',
      'Sosialisasi TPPK dan deklarasi sekolah bebas perundungan (Anti-Bullying)',
      'Kerja sama dengan Polsek Krembung (edukasi tertib lalu lintas) dan program asuransi perlindungan siswa'
    ],
    evidenceFiles: [
      '/public/assets/aistudio/16._PROGRAM_PENGENDALIAN_GAWAI_f9210ea9.pdf',
      '/public/assets/aistudio/20_Disiplin_SIswa__Razia_Kosmetik__26a716d3.pdf'
    ],
    impactDescription: 'Terciptanya lingkungan belajar kondusif dengan nol insiden perundungan berat dan fokus belajar tinggi tanpa distraksi ponsel.'
  },
  {
    no: 6,
    indicatorCode: 'D.8',
    indicatorName: 'Iklim Kebinekaan',
    category: 'Iklim Lingkungan Belajar',
    score: 75.0,
    scoreFormatted: '75,00 (Kategori Baik)',
    status: 'Baik',
    badgeColor: 'blue',
    rootCauseL1: 'D.8 Iklim Kebinekaan & E.5 Program dan Kebijakan Satuan Pendidikan',
    rootCauseL2: 'D.8.1 Toleransi agama dan budaya & E.5.5 Kebijakan kesetaraan gender',
    rootCauseDesc: 'Meskipun populasi GTK homogen suku Jawa dan muslim, sekolah aktif membangun wawasan inklusif, menghormati tradisi nusantara, dan memupuk toleransi universal.',
    benahiKemdikbud: 'Pengembangan kurikulum dan kokurikuler bermuatan moderasi beragama, kesetaraan hak bersuara, serta pelestarian warisan budaya.',
    programSmankre: [
      'Pemberian Penghargaan Sekolah Moderasi Beragama (SMB) dari Kemenag Sidoarjo (9 Kata Kunci Moderasi)',
      'Pelestarian Budaya: Pengadaan Gamelan BOS Kinerja & Ekstrakurikuler Karawitan siswa & guru',
      'Anjangsana Edukatif Sejarah ke Veteran Seroja Timor Timur (Bapak Abdillah)',
      'Karnaval Budaya Nusantara & Demokrasi Pemilihan Ketua OSIS yang adil dan inklusif gender'
    ],
    evidenceFiles: [
      '/public/assets/aistudio/26._SMB_SMAN_1_Krembung__2__46ce99a3.pdf',
      '/public/assets/aistudio/25._Pelestarian_Budaya_e7783677.pdf',
      '/public/assets/aistudio/21._Veteran_Seroja_SMANKRES_46aced14.'
    ],
    impactDescription: 'Siswa memiliki pemahaman mendalam tentang toleransi aktif, cinta tanah air, dan kebanggaan atas warisan seni tradisional gamelan Jawa.'
  }
];

export const PBD_SUMMARY_STATS = {
  totalIndicatorsAnalyzed: 12,
  priorityFocusAreas: 6,
  achievedProgramsRate: '100% Berjalan',
  qualityIndex: 'Baik (Rata-rata 80,1)',
  strategicBudgetRealization: 'Rp 210.500.000+ (BOS & PSM Komite)',
  keyMilestones: [
    { label: 'Capaian Literasi', value: '100%', trend: '+4.2% YoY' },
    { label: 'Capaian Numerasi', value: '93.33%', trend: '+8.1% YoY' },
    { label: 'Iklim Keamanan', value: '79.00', trend: 'Kategori Baik' },
    { label: 'Iklim Kebinekaan', value: '75.00', trend: 'Predikat SMB Kemenag' }
  ]
};
