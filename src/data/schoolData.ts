export interface SchoolInfo {
  name: string;
  npsn: string;
  akreditasi: string;
  address: string;
  subdistrict: string;
  regency: string;
  province: string;
  postalCode: string;
  phone: string;
  email: string;
  website: string;
  totalStudents: number;
  totalTeachers: number;
  totalStaff: number;
  landArea: string;
  totalFacilities: number;
  logoUrl: string;
  mapsUrl: string;
  documentationDriveUrl: string;
  disiplinPegawaiDriveUrl: string;
  socialMedia: {
    instagram: string;
    tiktok: string;
    youtube: string;
  };
}

export interface PrincipalProfile {
  name: string;
  nip: string;
  rank: string;
  position: string;
  unit: string;
  photoUrl: string;
  quote: string;
  visionSnippet: string;
  leadershipPillars: {
    title: string;
    description: string;
  }[];
  trainingHistory: {
    title: string;
    organizer: string;
    date: string;
    venue: string;
    focus: string;
  }[];
}

export const SMAN_KREMBUNG_INFO: SchoolInfo = {
  name: 'SMA Negeri 1 Krembung',
  npsn: '20501846',
  akreditasi: 'A (Unggul)',
  address: 'Jl. Raya Kecamatan No. 2 Krembung, Mojoruntut',
  subdistrict: 'Kecamatan Krembung',
  regency: 'Kabupaten Sidoarjo',
  province: 'Jawa Timur',
  postalCode: '61275',
  phone: '(031) 8850565 / 8853865',
  email: 'krembungsman@gmail.com',
  website: 'www.sman1krembung.sch.id',
  totalStudents: 1287,
  totalTeachers: 75,
  totalStaff: 10,
  landArea: '22.771 m²',
  totalFacilities: 32,
  logoUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjhEe7DsQaweQWtckuBY0QdRPB_J0RbHqfSXb0fFnNGOQYwfzbn9SyTV1WORteNpd7S3rcGj3FYpaCf0X7tjQpcXoDfErD-aWPD9kTf-6auJIoAZ3ETmXpvuoVydS7H87HO-vidqv4ECyayUG4dFJNZNMuVWD2lUyaMaF7ox5BYCfAksicgx7ryvy6V56Z/s1600/LOGO%20SMANIKRE%20(1).png',
  mapsUrl: 'https://maps.app.goo.gl/61nZTPRGBBmZABHa9',
  documentationDriveUrl: 'https://drive.google.com/drive/folders/1m8d66YArWoyIqdPGg5ldCDu8u0K5kwge?usp=drive_link',
  disiplinPegawaiDriveUrl: 'https://drive.google.com/drive/folders/1EIQBeSbjOK-M7e_UUf2MLNfsW4g7WvFd?usp=drive_link',
  socialMedia: {
    instagram: 'https://instagram.com/sman1krembung',
    tiktok: 'https://tiktok.com/@smankrez.krembung',
    youtube: 'https://youtube.com/@sman1krembung564'
  }
};

export const PRINCIPAL_PROFILE: PrincipalProfile = {
  name: 'Siwi Kuntarsih, S.Pd., M.Pd.',
  nip: '1977100520060420127',
  rank: 'Pembina / Gol. IV.a (Guru Ahli Madya)',
  position: 'Kepala Sekolah SMA Negeri 1 Krembung',
  unit: 'SMA Negeri 1 Krembung - Dinas Pendidikan Provinsi Jawa Timur',
  photoUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEins399VuoKFRXVSynkUCHXsCJbF58TF3eDQQ9-dLm7RK_hT-pmOZp1Bih0iX8iU65x9JcNDeW27sqRAs2Oya0ZHnsmn6z4gkegK2iewpA7xaJkB0iv9QY7usJtRBWVHrc_quxdSEObY_RYo6vyOjfoTTT-0FgqdQk0inCdzMM0yO7PoondQXUQDvaqS2Xu/s4219/Salinan%20dari%20Dokumentasi_20260702_110826_0000.png',
  quote: 'Kepemimpinan pembelajaran yang efektif berakar pada keberanian membaca data secara objektif, menindaklanjutinya dengan program nyata yang memuliakan martabat guru dan menumbuhkan potensi setiap murid.',
  visionSnippet: 'Mewujudkan SMAN 1 Krembung yang Unggul dalam Prestasi, Kokoh dalam Karakter Berbasis Nilai Moderasi, dan Berkelanjutan dalam Budaya Mutu.',
  leadershipPillars: [
    {
      title: 'Kepemimpinan Instruksional (Instructional Leadership)',
      description: 'Menggeser peran kepala sekolah dari sekadar pengawas administratif menjadi fasilitator utama supervisi klinis, coaching reflektif, dan penggerak komunitas belajar guru.'
    },
    {
      title: 'Perencanaan Berbasis Data (PBD)',
      description: 'Menjadikan Rapor Pendidikan sebagai kompas strategis dalam siklus Identifikasi, Refleksi, dan Benahi demi intervensi program yang presisi dan akuntabel.'
    },
    {
      title: 'Pembelajaran Mendalam (Deep Learning)',
      description: 'Mengawal pedagogi yang mindful, meaningful, dan joyful pada seluruh mata pelajaran, melatih daya nalar kritis (HOTS), kolaborasi, serta karakter Pelajar Pancasila.'
    },
    {
      title: 'Sinergi Ekosistem & Kemitraan Strategis',
      description: 'Merangkul Komite Sekolah, orang tua siswa (paguyuban), Koramil, Polsek, Puskesmas, dan Balai Pelatihan Vokasi untuk menciptakan lingkungan belajar yang aman dan berdaya saing.'
    }
  ],
  trainingHistory: [
    {
      title: 'Pelatihan PM KKA Berbasis Kelompok Kerja (Review Visi Misi, Kepemimpinan Pembelajaran Mendalam)',
      organizer: 'Balai Besar Guru dan Tenaga Kependidikan (BBGTK) Jatim & Universitas Negeri Malang (UM)',
      date: '12 September s.d. 6 November 2026',
      venue: 'SMAN 2 Sidoarjo & Sesi Daring LMS',
      focus: 'Penyelarasan visi-misi sekolah berbasis evaluasi diri, supervisi klinis coaching reflektif, dan desain modul deep learning lintas disiplin.'
    },
    {
      title: 'Workshop Penguatan Sekolah Moderasi Beragama',
      organizer: 'Kementerian Agama Kabupaten Sidoarjo',
      date: 'Tahun 2025 - 2026',
      venue: 'Sidoarjo',
      focus: 'Internalisasi Trilogi Kerukunan dan 9 Kata Kunci Moderasi Beragama (Tasamuh, Tawassuth, I’tidal, Muwathenah).'
    },
    {
      title: 'Penguatan Implementasi Kurikulum Merdeka & Perencanaan Berbasis Data (PBD)',
      organizer: 'Cabang Dinas Pendidikan Wilayah Sidoarjo',
      date: 'Tahun Ajaran 2025/2026',
      venue: 'Cabang Dinas Pendidikan Sidoarjo',
      focus: 'Pemanfaatan data Asesmen Nasional dan Sulingjar untuk penyusunan RKT & rancangan ARKAS sekolah.'
    }
  ]
};

export const VISION_MISSION = {
  vision: 'Terwujudnya Peserta Didik yang Beriman dan Bertakwa, Unggul dalam Prestasi Akademik dan Non-Akademik, Berkarakter Pancasila, Berbudaya Lingkungan, serta Berwawasan Global.',
  missions: [
    'Meningkatkan keimanan dan ketakwaan terhadap Tuhan Yang Maha Esa melalui pembiasaan ibadah rutin, toleransi, dan moderasi beragama.',
    'Mewujudkan proses pembelajaran mendalam (Deep Learning) yang berpusat pada murid, interaktif, menyenangkan, dan melatih nalar kritis.',
    'Mendorong optimalisasi capaian literasi, numerasi, dan prestasi bakat minat siswa di tingkat kabupaten, provinsi, hingga nasional.',
    'Menciptakan iklim sekolah yang aman, inklusif, sehat jasmani dan rohani, bebas dari segala bentuk perundungan dan kekerasan fisik.',
    'Membangun budaya peduli lingkungan hidup melalui program Sekolah Adiwiyata, pengurangan sampah plastik, dan Gerakan Sekolah Sehat.',
    'Menjalin sinergi kemitraan strategis yang harmonis dengan orang tua, komite sekolah, dunia usaha, dunia industri, dan instansi kedinasan.'
  ],
  schoolGoals: [
    'Peningkatan rata-rata kompetensi literasi dan numerasi siswa mencapai predikat Baik (>90%) secara berkelanjutan.',
    'Pencapaian Nol Kasus (Zero Tolerance) kekerasan, hukuman fisik, dan intoleransi di seluruh lingkungan sekolah.',
    'Penguatan kompetensi 100% guru dalam pembelajaran berdiferensiasi dan pemanfaatan teknologi digital terbarukan.',
    'Tersedianya sarana prasarana modern yang ramah lingkungan, sehat, dan menunjang seluruh aktivitas kokurikuler serta ekstrakurikuler.',
    'Terserapnya lulusan pada perguruan tinggi favorit negeri/swasta serta kesiapan kerja mandiri dan vokasi tersertifikasi BNSP.'
  ]
};

export const SCHOOL_DEMOGRAPHICS = {
  totalStudents: 1287,
  classesDistribution: [
    { grade: 'Kelas X', classes: 12, count: 424, note: 'Rombel X-1 s.d. X-12' },
    { grade: 'Kelas XI', classes: 12, count: 432, note: 'Rombel XI-1 s.d. XI-12' },
    { grade: 'Kelas XII', classes: 12, count: 431, note: 'Rombel XII-1 s.d. XII-12' }
  ],
  gtkComposition: {
    totalTeachers: 75,
    totalStaff: 10,
    educationLevel: {
      s2: 12,
      s1: 63,
      diplomaD3: 4,
      sma: 6
    },
    employmentStatus: {
      pns: 28,
      pppk: 38,
      gttGtkHonor: 19
    }
  },
  facilitiesSummary: [
    { name: 'Masjid Al-Hikmah & 2 Musholla', desc: 'Pusat ibadah sholat fardhu berjamaah, istighosah, dan literasi Al-Quran' },
    { name: 'Laboratorium Terpadu', desc: 'Lab Komputer IFP, Lab Biologi, Lab Fisika, Lab Kimia, Lab Bahasa' },
    { name: '6 Gazebo Diskusi Asri', desc: 'Ruang interaksi inklusif terbuka di bawah rindang pohon rindang bernaung' },
    { name: 'Kantin Sehat Halal & Eco-Canteen', desc: '6 stand makanan sehat bebas 3P dan bebas kantong plastik sekali pakai' },
    { name: 'Ruang UKS & Perawat Siaga', desc: 'Fasilitas observasi P3K dan pelayanan kesehatan siswa dengan Puskesmas' },
    { name: 'Ruang BK & Konseling Sebaya', desc: 'Ruang konsultasi psikologis privat yang nyaman dan humanis' },
    { name: 'Gamelan Pelestarian Budaya', desc: 'Seperangkat gamelan lengkap dari BOS Kinerja untuk ekstrakurikuler karawitan' }
  ]
};
