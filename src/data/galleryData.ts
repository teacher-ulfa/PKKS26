export interface GalleryPhoto {
  id: number;
  title: string;
  category: 'Budaya & Karakter' | 'Adiwiyata & Lingkungan' | 'Prestasi & Siswa' | 'Religi & Spiritual' | 'Demokrasi & OSIS';
  imageUrl: string;
  description: string;
  date: string;
}

export interface PressCoverage {
  media: string;
  title: string;
  url: string;
  date: string;
  badge: string;
  lead: string;
  quote: string;
  points: string[];
}

export const PRESS_COVERAGE_SMB: PressCoverage = {
  media: 'Radar Jatim',
  title: 'SMA Negeri 1 Krembung Jadi Role Model SMB 2026',
  url: 'https://radarjatim.id/sma-negeri-1-krembung-jadi-role-model-smb-2026/',
  date: '2026',
  badge: 'Sorotan Media & Role Model',
  lead: 'SMA Negeri 1 Krembung (SMANIKRE) ditetapkan sebagai role model Sekolah Moderasi Beragama (SMB) di wilayah Jawa Timur berkat implementasi nyata budaya toleransi, iklim kebinekaan inklusif, dan pengawalan kepemimpinan sekolah yang solid.',
  quote: '"Moderasi beragama di SMAN 1 Krembung bukan sekadar wacana teoritis di ruang kelas, melainkan telah menjadi denyut nadi keseharian yang hidup—mulai dari pembiasaan sapa 5 bahasa, toleransi aktif, hingga penghormatan kearifan lokal."',
  points: [
    'Penghargaan resmi dari Kantor Kementerian Agama Kabupaten Sidoarjo tahun 2025',
    'Kepemimpinan kolaboratif: Kepala Sekolah Siwi Kuntarsih, S.Pd., M.Pd. dan Pembina Ulfatul Husna, S.Ag., M.Pd.',
    'Penyediaan sarana inklusif: Ruang Moderasi Beragama, Pojok Baca Kebinekaan, dan 6 Gazebo Diskusi Asri',
    'Praktik demokrasi sekolah adil gender pada Pemilihan Ketua OSIS (Pilketos) terpilih duet kepemimpinan perempuan dan laki-laki'
  ]
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    title: 'Para Juara Berprestasi SMANIKRE 2026',
    category: 'Prestasi & Siswa',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjunD85y9yjoSP-eoUKPMRteSo-SFsvgJWCDQdOY6sHSYVg9D8pnYk2kjfCQoNFU6TzAI9lecP7zhxVAb6mqVkTBQOgBWzmNqDOvamOf3DlAUpGivh8AnN8TpgiXqcb198B1KzQVG5BhCLp2mbYVUUc14xF8z-Zm9Npmj7fYU_uISGx581d7RGY3Qy1Quif/s1600/para%20juara.jpeg',
    description: 'Apresiasi dan foto bersama siswa-siswi peraih medali kejuaraan tingkat Kabupaten, Provinsi, dan Nasional saat upacara bendera.',
    date: 'Tahun Ajaran 2026'
  },
  {
    id: 2,
    title: 'Karnaval Budaya Nusantara - Kebinekaan Global',
    category: 'Budaya & Karakter',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim1NRwrtEtbcsxJfCNVvjwNjXz3TK_cdLhkYClcHd4dUHpOJy59sQ6Dwbz82m3o85ctjUJmFwk6EMnoAUY7hJ_eEIre-sqVaR983EDQkRpJI2XtE4utLFIRzxLxEYDNEg6mklhfSJAbzw3jU5fU1zUwC4MJ0IW-3niHLVlMunNx3LQ9AeQvL1VkOteCD_X/s1600/karnaval%20budaya.jpeg',
    description: 'Parade pakaian adat nusantara siswa SMAN 1 Krembung merayakan kekayaan budaya Indonesia dalam iklim toleransi dan persaudaraan.',
    date: 'Peringatan Hari Kemerdekaan 2026'
  },
  {
    id: 3,
    title: 'Kreativitas Kostum Tradisi Siswa Kelas X',
    category: 'Budaya & Karakter',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSM4pvE5kiygq7XAr6oLlm6AqqnC5Hs-J3xwPRY9fTvN-X6JnspMrWvY-Dc0zXKzO3vFPJgBsNQWNrY37k-58fn1iZEUnhYAb9Nhs1p5MfsAR-E5bN3FUjH8WpjiXbWnpzAme8R-VyqgQJ5JgT7Vxkm_7R5n8-oxAKacW4WpgZFmNkNhJBYH9eBssym82x/s1600/karnaval%20x2.jpeg',
    description: 'Peserta didik menampilkan ragam busana adat kreasi daerah sebagai penguatan P5 tema Kearifan Lokal Nusantara.',
    date: 'Agustus 2026'
  },
  {
    id: 4,
    title: 'Jumat Berling Bersama Kepala Sekolah Ibu Siwi Kuntarsih',
    category: 'Adiwiyata & Lingkungan',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUmdxycau9S-MYlxsMLwjUjnM_2Z6Q-4-mYbDjGjmyX-y3HGbr9jG2CLpPea8q9KYkbU9ZrUUDdyW0Nks80mGjysGZbRuTugYw1u1a15cfhXeBVhCPpPxyfW_bXyImvF998O0u59jcmjh-p5f3grAKcyRYbayTKJU-FjD7Va46JRxv6nH6Lf979lbDidc9/s1600/berling%20bu%20siwi.jpeg',
    description: 'Keteladanan langsung Kepala Sekolah turun ke lapangan merawat taman dan mengawal aksi Bersih Lingkungan bersama siswa.',
    date: 'Oktober 2026'
  },
  {
    id: 5,
    title: 'Panen Edukasi Kebun Adiwiyata & Lahan SIKAP',
    category: 'Adiwiyata & Lingkungan',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6W3sjCtDFYJala2sRHz9rYjjMsH_SLTs8G6DBGVuaGUdOq1JeVlr_vFC1mHbuhvz-JQNDWBl_FXLwWBP8H9VaPWOsC6955-6vt_9s96SxZAzSlYG4i28-7kdTUIHBT9EI2iwVzV8JOzfBwl-YVluOM7duah35RLg490yJIUVRL9tdsQkWRfgbspjb_EZn/s1600/panen%20lahan%20sikap.jpeg',
    description: 'Hasil panen sayur dan tanaman produktif program Adiwiyata dikelola secara mandiri oleh kader hijau siswa SMANIKRE.',
    date: 'September 2026'
  },
  {
    id: 6,
    title: 'Pemilihan Ketua OSIS (Pilketos) Demokratis & Inklusif',
    category: 'Demokrasi & OSIS',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3_fHLCHXyOderPtJk0as8SPomovBL8SqdEaIdicnqd9Gl-Rt7-QhZtAbyVYEYTAlHr1o1OPg81H6BQFeUNBwx4NeuObT9DZ1aczuoIPYSBY-Cmz0Sa_61U0x_Mj6e74pBE3QSo7QuRFtH5otIZDYmiZ_gpRf4f9y3NdUzQ0hHqCUbKZNVIQVqZ5WPpb2l/s1600/pilketos.jpeg',
    description: 'Simulasi pemilu raya jujur dan adil di lapangan sekolah mengedukasi budaya musyawarah dan kesetaraan hak bersuara.',
    date: 'Tahun 2026'
  },
  {
    id: 7,
    title: 'Bilik Suara & Tata Tertib Pemilos Siswa SMANIKRE',
    category: 'Demokrasi & OSIS',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgIvq0-nCCvegbuAiKCG1KuA5Ad3FYwtyXu1HpgB2XyCJKTo7BF5yhus5GwWm2emECThlOW91q4b_UJJbb2FNV6HwyaixKTQzT5iaxi52zKYo-UBLVwKl7wQVvuH3NWW2o-rUrZVBVglsopsNOnAHsl7wMduut_Or1566_-SNz9nwURRfC0bqnbgDsVKEI/s1600/pilketos.jpeg',
    description: 'Panitia pemilihan OSIS-MPK menyelenggarakan tahapan coblosan tertib, damai, dan menjunjung nilai sportivitas.',
    date: 'Tahun 2026'
  },
  {
    id: 8,
    title: 'Peringatan Maulid Nabi: Tausiyah Meneladani Akhlak',
    category: 'Religi & Spiritual',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidJ0tlqKHaEKZZzIFD5e1elG6MzRgo4XbPuU_4GF-jAfzknwjGSq6diMUN2OpoGXYxZTpIJWW-Jd5faNvPNewItxOOun_qCfQigcnfX8pavGb_uqfJgpWbsn5qetZktUumtMbnLsfG1rZFOWLW1TmT4MS9uPf0PH-3-0gM5rWoO-EIXm2UmUQkO7apUmLL/s1600/maulid%20nabi%20penceramah.jpeg',
    description: 'Penceramah menyampaikan pesan kasih sayang, akhlak terpuji, dan moderasi beragama di hadapan dewan guru dan siswa.',
    date: 'Rabiul Awal 1448 H / 2026 M'
  },
  {
    id: 9,
    title: 'Khidmat Shalawat Bersama Seluruh Siswa di Masjid Al-Hikmah',
    category: 'Religi & Spiritual',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYWv9RMQ2CiPv99BDLE-Qs3lCkY_iGLc6jc4f-bOD00Q9sbMeYhsMVGETyfiTQbQTVbClh8VBUMG8gBVa81JrMZgPGRANdIMX2XYEolpRn6mDLpqk-DB7nQC7a2c_lQSrYCnZVVhdBlWbrOVyOvyORHOR7oO6QdwF2fw9UNfj_wS2Ea4EQMJTZ9cx9eSFS/s1600/Maulid%20nabi.jpeg',
    description: 'Pembiasaan religiusitas memperkuat keimanan dan kebersamaan ukhuwah islamiyah seluruh peserta didik.',
    date: 'September 2026'
  },
  {
    id: 10,
    title: 'Pendampingan Wali Murid Klaim Asuransi Siswa',
    category: 'Budaya & Karakter',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiD6vUASWaZPUtTHyiZ8hd-Y92vMQ8kWTVE0t-1nFiENVLLv-nSmA-nm_5O5O38Ov4DL-K28nxj6chw1vD_1MAX5ARueOuIW6fYSF5DJr5keabwBO6iFAgQqa8s1KLPBZ51A7S9K6UukAvPbU1Hp15jGCE9UQ-gkbOiVMQJRefF9Wd_is6zqmxwKqqIsfBL/s1600/WhatsApp%20Image%202026-10-21%20at%2014.31.55.jpeg',
    description: 'Pelayanan perlindungan siswa saat wali murid melakukan klaim asuransi di sekolah. Didampingi oleh Bapak Abd. Munif, S.Pd. selaku Waka Kesiswaan (berseragam sebelah kiri) dan Ibu Dra. Fifa Musmulyati, S.Pd. selaku Wali Kelas (berseragam sebelah kanan).',
    date: '21 Oktober 2026'
  },
  {
    id: 11,
    title: 'Kegiatan Literasi & Diseminasi Praktik Baik',
    category: 'Prestasi & Siswa',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEha4QFjuIv587WxRNm1eQu_EmqQ2tth9L5A1qtsyWTRNU86_uHvwAWbVIUYuDMOYx-fMbpoKVHlKSDx6BPRoLCzK6EqN8Xw-jgscfQ_L9TWlQgm7Clm6j3GExGe1mJZciSqhrS27OUGh06R_nIvAPuCOG1B-EG4oJVEjHUTcA3CFhDLvNZNBwAkxTD72jLk/s1600/WhatsApp%20Image%202026-09-18%20at%2010.48.22.jpeg',
    description: 'Antusiasme peserta didik menyerap ilmu baru pada program literasi kebahasaan dan teknologi digital.',
    date: '18 September 2026'
  },
  {
    id: 12,
    title: 'Forum Diskusi Komunitas Belajar GTK SMANIKRE',
    category: 'Budaya & Karakter',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjifyabuF6J-qfuDop7OB15XVmBKTUVrLxDjhqw7kcVVhVEvIF782V7QWQf4wJ_RsVqTmHlYVL6tjh9196OE05v4dG-Vq3FITVxOCCMM2vT7jMS-MJyHFDhp4YYTCzqVtzwDvdV6SQkKm8KEAbNHc_5WgYvvgLRt0RHLl9pvF0mHdvBMvAfXWgVl5Q6uAcJ/s1536/WhatsApp%20Image%202026-09-17%20at%2015.05.01.jpeg',
    description: 'Pertemuan reflektif pendidik mengkaji asesmen kurikulum mendalam dan peningkatan kenyamanan belajar siswa.',
    date: '17 September 2026'
  }
];
