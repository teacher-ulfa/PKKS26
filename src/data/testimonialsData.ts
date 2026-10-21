export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  institution: string;
  avatarText: string;
  badge: string;
  comment: string;
  highlight: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Dr. Taufik Churahman, M.Ag.',
    role: 'Pengawas PAI & Tim Penilai SMB',
    institution: 'Kementerian Agama Kabupaten Sidoarjo',
    avatarText: 'TC',
    badge: 'Penilai Moderasi Beragama',
    comment: 'SMAN 1 Krembung sangat layak menyandang predikat Sekolah Moderasi Beragama. Nilai-nilai toleransi, penghargaan terhadap tradisi lokal seperti gamelan Jawa, dan pembiasaan sholat berjamaah dengan kontrol Kartu Surga mencerminkan penanaman karakter akhlak karimah yang holistik.',
    highlight: 'Sekolah Moderasi Beragama yang membumikan nilai toleransi dan kebinekaan secara nyata.'
  },
  {
    id: 2,
    name: 'Moch. Dhamroni Chudlori, M.Si.',
    role: 'Ketua Komite Sekolah',
    institution: 'Komite SMA Negeri 1 Krembung',
    avatarText: 'DC',
    badge: 'Mitra Strategis Komite',
    comment: 'Sinergi antara pengurus komite, kepala sekolah, dan para wali kelas di SMAN 1 Krembung terjalin luar biasa hangat. Kami sangat mendukung alokasi dana Peran Serta Masyarakat (PSM) karena transparansi dan dampaknya langsung dirasakan oleh kemajuan fasilitas, kegiatan siswa, serta kenyamanan ruang belajar anak-anak kami.',
    highlight: 'Komite sekolah 100% mendukung program strategis kepala sekolah demi sekolah unggul.'
  },
  {
    id: 3,
    name: 'Perwakilan Paguyuban / Wali Murid',
    role: 'Wali Murid Kelas X & XI',
    institution: 'Paguyuban Kelas SMAN 1 Krembung',
    avatarText: 'WM',
    badge: 'Wali Murid',
    comment: 'Kami sebagai orang tua sangat bersyukur anak-anak kami bersekolah di SMAN 1 Krembung. Dari pembiasaan sholat dengan Kartu Surga hingga kepedulian bapak/ibu guru saat mendampingi klaim asuransi siswa yang sakit atau cedera, sekolah ini betul-betul menjaga dan membimbing putra-putri kami dengan penuh kehangatan keluarga.',
    highlight: 'Perlindungan siswa, transparansi asuransi, dan pembiasaan akhlak anak dirasakan nyata di rumah.'
  },
  {
    id: 4,
    name: 'Sauqiyah Ruhainah Najahah',
    role: 'Siswa Kelas XI-8 · Juara 1 Essai Nasional & Medali Perak Olimpiade Biologi UM',
    institution: 'Peserta Didik SMAN 1 Krembung',
    avatarText: 'SR',
    badge: 'Siswa Berprestasi Nasional',
    comment: 'Sekolah memberikan ruang dan bimbingan yang luar biasa bagi pengembangan minat akademik kami. Program literasi, modul ajar yang menantang, serta fasilitas perpustakaan inklusif dan gazebo diskusi membuat kami termotivasi untuk terus berani berkarya hingga tingkat nasional.',
    highlight: 'Bimbingan guru yang tulus membakar semangat kami untuk menembus juara tingkat nasional.'
  },
  {
    id: 5,
    name: 'Raihan Muhammad Subandi',
    role: 'Siswa Kelas XI-7 · Peraih 4 Medali Emas & Perak PORKAB / O2SN Selam & Renang',
    institution: 'Atlet Akuatik SMAN 1 Krembung',
    avatarText: 'RS',
    badge: 'Atlet Berprestasi',
    comment: 'SMAN 1 Krembung memberikan dispensasi dan dukungan penuh saat kami berlatih dan bertanding membela nama sekolah dan kabupaten. Disiplin mental yang diajarkan dalam pembiasaan pagi dan bimbingan guru PJOK sangat membantu performa fisik saya di kolam renang.',
    highlight: 'Dukungan sekolah yang seimbang antara akademik dan karier olahraga membuat kami percaya diri.'
  }
];
