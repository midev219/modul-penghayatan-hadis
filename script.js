
// =========================
// HADIS DATA
// =========================
const hadisList = [];

const hadisContent = {
    1: {
        title: "Keutamaan dan Niat",
        description: "Setiap amalan dinilai berdasarkan niat dan tujuan seseorang melakukannya.",
        arabic: `
عَنْ أَمِيرِ الْمُؤْمِنِينَ أَبِي حَفْصٍ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوْ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ.
رَوَاهُ إِمَامَا الْمُحَدِّثِينَ أَبُو عَبْدِ اللَّهِ مُحَمَّدُ بْنُ إِسْمَاعِيلَ بْنِ إِبْرَاهِيمَ بْنِ الْمُغِيرَةِ بْنِ بَرْدِزْبَهْ الْبُخَارِيُّ، وَأَبُو الْحُسَيْنِ مُسْلِمُ بْنُ الْحَجَّاجِ بْنِ مُسْلِمٍ الْقُشَيْرِيُّ النَّيْسَابُورِيُّ رَضِيَ اللَّهُ عَنْهُمَا فِي صَحِيحَيْهِمَا اللَّذَيْنِ هُمَا أَصَحُّ الْكُتُبِ الْمُصَنَّفَةِ.
`,
        translation: `Daripada Amirul Mukminin Abu Hafs Saiyidina Umar bin al-Khattab r.a., beliau berkata: "Aku telah mendengar Rasulullah SAW bersabda: Sesungguhnya, segala amalan bergantung kepada niat. Sesungguhnya, setiap orang akan memperoleh apa yang dia niatkan. Maka, sesiapa yang berhijrah semata-mata kerana Allah dan rasul-Nya, hijrahnya adalah kepada Allah dan rasul-Nya. Sesiapa yang berhijrah kerana habuan dunia yang hendak diperoleh atau kerana wanita yang hendak dikahwininya, maka hijrahnya dikira mengikut apa yang dia niatkan."`,
        lessons: [
            "Niat membezakan antara ibadah dengan adat. Sesuatu kebiasaan yang dilakukan seperti makan dan minum, menuntut ilmu boleh menjadi ibadah dan mendapat pahala daripada Allah SWT sekiranya dilakukan dengan niat untuk mendapat keredaan-Nya.",
            "Sesiapa yang berniat untuk mengerjakan amalan yang baik seperti menuntut ilmu, tetapi tidak dapat dilaksanakan kerana sesuatu halangan seperti sakit, maka niatnya sudah dikira pahala di sisi Allah SWT.",
            "Penghijrahan sikap dan tindakan merupakan faktor utama kejayaan seseorang dalam apa jua lapangan yang diceburi. Penghijrahan di sini bermaksud berubah kepada keadaan yang lebih baik. Niat dan tindakan hendaklah seiring dalam kehidupan seharian."
        ]
    },

    2: {
        title: "Islam, Iman dan Ihsan",
        description: "Memahami asas Islam, iman, ihsan serta tanda-tanda hari kiamat.",
        arabic: `
عَنْ عُمَرَ رَضِيَ اللهُ عَنْهُ أَيْضًا قَالَ: بَيْنَمَا نَحْنُ عِنْدَ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ ذَاتَ يَوْمٍ، إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيدُ بَيَاضِ الثِّيَابِ، شَدِيدُ سَوَادِ الشَّعَرِ، لاَ يُرَى عَلَيْهِ أَثَرُ السَّفَرِ، وَلاَ يَعْرِفُهُ مِنَّا أَحَدٌ، حَتَّى جَلَسَ إِلَى النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، فَأَسْنَدَ رُكْبَتَيْهِ إِلَى رُكْبَتَيْهِ، وَوَضَعَ كَفَّيْهِ عَلَى فَخِذَيْهِ، وَقَالَ: يَا مُحَمَّدُ، أَخْبِرْنِي عَنِ الإِسْلاَمِ. فَقَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: الإِسْلاَمُ أَنْ تَشْهَدَ أَنْ لاَ إِلَهَ إِلاَّ اللهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللهِ، وَتُقِيمَ الصَّلاَةَ، وَتُؤْتِيَ الزَّكَاةَ، وَتَصُومَ رَمَضَانَ، وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلاً. قَالَ: صَدَقْتَ. فَعَجِبْنَا لَهُ يَسْأَلُهُ وَيُصَدِّقُهُ! قَالَ: فَأَخْبِرْنِي عَنِ الإِيمَانِ. قَالَ: أَنْ تُؤْمِنَ بِاللهِ وَمَلاَئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ. قَالَ: صَدَقْتَ.
قَالَ: فَأَخْبِرْنِي عَنِ الإِحْسَانِ. قَالَ: أَنْ تَعْبُدَ اللهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ. قَالَ: فَأَخْبِرْنِي عَنِ السَّاعَةِ. قَالَ: مَا الْمَسْئُولُ عَنْهَا بِأَعْلَمَ مِنَ السَّائِلِ. قَالَ: فَأَخْبِرْنِي عَنْ أَمَارَاتِهَا. قَالَ: أَنْ تَلِدَ الأَمَةُ رَبَّتَهَا، وَأَنْ تَرَى الْحُفَاةَ الْعُرَاةَ الْعَالَةَ رِعَاءَ الشَّاءِ يَتَطَاوَلُونَ فِي الْبُنْيَانِ. ثُمَّ انْطَلَقَ، فَلَبِثْتُ مَلِيًّا. ثُمَّ قَالَ: يَا عُمَرُ، أَتَدْرِي مَنِ السَّائِلُ؟ قُلْتُ: اللهُ وَرَسُولُهُ أَعْلَمُ. قَالَ: فَإِنَّهُ جِبْرِيلُ، أَتَاكُمْ يُعَلِّمُكُمْ دِينَكُمْ.
رَوَاهُ مُسْلِمٌ.
`,
        translation: `Terjemahan: Daripada Saiyidina Umar r.a. juga, beliau berkata: "Pada suatu hari ketika kami sedang bersama-sama Rasulullah SAW, tiba-tiba muncul di hadapan kami seorang lelaki yang berpakaian sangat putih, rambutnya sangat hitam serta tidak kelihatan padanya kesan perjalanan jauh dan tiada seorang pun dalam kalangan kami yang mengenalnya. Lalu dia duduk begitu hampir dengan baginda SAW, dia merapatkan kedua-dua lututnya dengan lutut baginda SAW dan meletakkan kedua-dua tapak tangannya di atas paha baginda SAW lalu berkata, "Wahai Muhammad, khabarkan kepadaku tentang Islam." Maka Rasulullah SAW bersabda, "Islam itu ialah kamu bersaksi bahawa tiada tuhan yang berhak disembah selain Allah dan bahawa Muhammad itu ialah utusan Allah, kamu mendirikan solat, menunaikan zakat, berpuasa di bulan Ramadan dan menunaikan haji di Baitullah sekiranya mampu sampai ke sana." Dia berkata, "Kamu benar."
        Maka kami merasa hairan kerana dia yang bertanya kemudian dia pula yang membenarkan jawapan itu. Dia bertanya lagi, "Khabarkan kepadaku tentang iman." Baginda SAW bersabda, "Iman itu ialah kamu beriman kepada Allah, para malaikat-Nya, kitab-kitab-Nya, para rasul-Nya, hari akhirat dan beriman dengan takdir sama ada yang baik atau yang buruk." Dia berkata, "Kamu benar." Dia berkata lagi, "Khabarkan kepadaku tentang ihsan." Baginda SAW bersabda, "Ihsan ialah kamu beribadah kepada Allah (dengan penuh tumpuan) seolah-olah kamu melihat-Nya. Sekiranya kamu tidak dapat merasakan seperti melihat-Nya maka sesungguhnya, Dia sentiasa melihat kamu."
        Dia berkata, "Khabarkan kepadaku tentang hari kiamat." Baginda SAW bersabda, "Tidaklah orang yang ditanya lebih mengetahui berbanding yang bertanya." Dia berkata, "Maka khabarkan kepadaku tentang tandanya." Baginda SAW bersabda, "(Antara tandanya) ialah seorang hamba perempuan melahirkan tuannya sendiri dan kamu akan melihat orang yang berkaki ayam, tidak berpakaian (sempurna), berasal daripada golongan miskin serta bekerja sebagai penggembala kambing, Mereka berlumba-lumba mendirikan bangunan yang tinggi (megah)." Kemudian lelaki itu beredar. Selang beberapa ketika baginda SAW bertanya kepadaku, "Wahai Umar, adakah kamu tahu siapa yang datang bertanya tempoh hari?" Aku menjawab, "Allah dan rasul-Nya lebih mengetahui." Baginda SAW bersabda, "Sesungguhnya dia ialah malaikat Jibril. Dia datang untuk mengajarkan kepada kamu mengenai urusan agama kamu."`,
        lessons: [
            "Para sahabat sentiasa mendampingi Rasulullah SAW dengan memberi tumpuan terhadap pengajaran baginda.",
            "Pertanyaan tidak hanya diajukan untuk memperoleh jawapan, tetapi juga bertujuan memberikan manfaat kepada mereka yang hadir.",
            "Penghayatan kepada Islam, iman dan ihsan ialah kesempurnaan bagi seseorang Muslim.",
            "Setiap Muslim hendaklah mengambil iktibar pesanan Rasullullah SAW berkaitan dengan tanda-tanda kiamat."
        ]
    },

    3: {
        title: "Rukun Islam",
        description: "Islam dibina atas lima rukun utama yang menjadi asas kehidupan Muslim.",
        arabic: `
عَنْ أَبِي عَبْدِ الرَّحْمَنِ عَبْدِ اللَّهِ بْنِ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ.
رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Abdul Rahman Abdullah bin Umar bin al-Khattab r.a., beliau berkata: "Aku mendengar Rasulullah SAW bersabda, "Islam dibina di atas lima rukun; bersaksi bahawa tiada tuhan selain Allah dan bahawa Muhammad adalah hamba-Nya dan utusan-Nya, mendirikan solat, menunaikan zakat, mengerjakan haji di Baitullah dan berpuasa pada bulan Ramadan."`,
        lessons: [
            "Islam merupakan cara hidup sempurna yang menjamin kesejahteraan hidup di dunia dan akhirat.",
            "Dalam rukun Islam terdapat hubungan antara manusia dengan Allah SWT iaitu mengucapkan dua kalimah syahadah, solat, puasa, zakat dan haji. Malahan ibadah zakat menunjukkan terdapat nilai hubungan sesama manusia melalui bantuan terhadap golongan yang berhak menerimanya.",
            "Orang yang berpuasa, berzakat dan menunaikan haji tetapi tidak mendirikan solat ialah orang yang meninggalkan ibadah yang utama. Hal ini disebabkan oleh solat merupakan tiang agama seperti yang disabdakan oleh Rasulullah SAW:  “Solat adalah tiang agama”",
            "Setiap orang yang beriman mestilah patuh melaksanakan segalatuntutan rukun Islam bagi mendapat keredaan Allah SWT. Apa yang diyakini hendaklah dibuktikan dengan tindakan dalam bentuk ketaatan terhadap perintah Allah SWT dan ajaran Rasullah SAW."
        ]
    },

    4: {
        title: "Penciptaan Manusia: Ketetapan Rezeki, Ajal, Amalan dan Ketentuan Syurga atau Neraka",
        description: "Memahami proses penciptaan manusia, ketentuan Allah dan pengakhiran kehidupan.",
        arabic: `
عَنْ أَبِي عَبْدِ الرَّحْمَنِ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: حَدَّثَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَهُوَ الصَّادِقُ الْمَصْدُوقُ: إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا، ثُمَّ يَكُونُ عَلَقَةً مِثْلَ ذَلِكَ، ثُمَّ يَكُونُ مُضْغَةً مِثْلَ ذَلِكَ، ثُمَّ يُرْسَلُ الْمَلَكُ، فَيَنْفُخُ فِيهِ الرُّوحَ، وَيُؤْمَرُ بِأَرْبَعِ كَلِمَاتٍ: بِكَتْبِ رِزْقِهِ، وَأَجَلِهِ، وَعَمَلِهِ، وَشَقِيٌّ أَوْ سَعِيدٌ. فَوَالَّذِي لَا إِلَهَ غَيْرُهُ، إِنَّ أَحَدَكُمْ لَيَعْمَلُ بِعَمَلِ أَهْلِ الْجَنَّةِ حَتَّى مَا يَكُونُ بَيْنَهُ وَبَيْنَهَا إِلَّا ذِرَاعٌ، فَيَسْبِقُ عَلَيْهِ الْكِتَابُ، فَيَعْمَلُ بِعَمَلِ أَهْلِ النَّارِ، فَيَدْخُلُهَا. وَإِنَّ أَحَدَكُمْ لَيَعْمَلُ بِعَمَلِ أَهْلِ النَّارِ حَتَّى مَا يَكُونُ بَيْنَهُ وَبَيْنَهَا إِلَّا ذِرَاعٌ، فَيَسْبِقُ عَلَيْهِ الْكِتَابُ، فَيَعْمَلُ بِعَمَلِ أَهْلِ الْجَنَّةِ، فَيَدْخُلُهَا.
رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.
`,
        translation: `Terjemahan: Daripada Abu Abdul Rahman Saiyidina Abdullah bin Mas'ud r.a., beliau berkata, Rasulullah SAW - yang sangat sentiasa berkata benar lagi diakui kebenarannya - telah memberitahu kami: "Sesungguhnya, dihimpunkan (unsur) penciptaan setiap kamu di dalam rahim ibunya selama 40 hari, kemudian bertukar menjadi segumpal darah selama itu juga, kemudian bertukar menjadi seketul daging selama itu juga. Kemudian diutuskan malaikat lalu dia pun meniup roh padanya. Dan malaikat itu diperintahkan agar menulis empat ketetapan: rezeki, ajal, amal perbuatannya dan (sama ada dia menjadi orang yang) celaka atau bahagia. Maka, demi Zat yang tiada tuhan selain-Nya, sesungguhnya ada antara kamu orang yang melakukan amalan ahli syurga sehingga jarak dia dengan syurga hanya satu hasta tetapi takdir telah mendahuluinya. Lalu, dia melakukan amalan ahli neraka sehingga dia dimasukkan ke dalam neraka. Sesungguhnya, ada antara kamu orang yang melakukan amalan ahli neraka sehingga jarak dia dengan neraka hanya satu hasta, tetapi takdir telah mendahuluinya lalu dia melakukan amalan ahli syurga sehingga dia dimasukkan ke dalam syurga.`,
        lessons: [
            "Manusia perlu menjauhkan diri daripada sifat sombong, angkuh dan bongkak kerana asal kejadian manusia bermula dari tanah.",
            "Proses kejadian manusia secara berperingkat membuktikan kebesaran dan kekuasaan Allah SWT.",
            "Setiap peristiwa yang berlaku bukan secara kebetulan tetapi menurut takdir yang ditentukan oleh Allah SWT.",
            "Sentiasa berusaha mengajak orang kepada kebaikan dan tidak menghukum orang yang melakukan kejahatan sebagai ahli neraka.",
            "Kemungkinan mereka akan melakukan kebaikan di akhir hayatnya dan masuk ke syurga."
        ]
    },

    5: {
        title: "Amalan yang Tertolak",
        description: "Amalan yang diada-adakan dalam urusan agama tanpa asas yang dibenarkan adalah tertolak.",
        arabic: `
عَنْ أُمِّ الْمُؤْمِنِينَ أُمِّ عَبْدِ اللَّهِ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ. رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ. وَفِي رِوَايَةٍ لِمُسْلِمٍ: مَنْ عَمِلَ عَمَلًا لَيْسَ عَلَيْهِ أَمْرُنَا فَهُوَ رَدٌّ.
`,
        translation: `Terjemahan: Daripada Ummul Mukminin Ummu Abdillah Saidatina 'Aisyah r.a. berkata, Rasulullah SAW bersabda: "Sesiapa yang mereka-reka dalam urusan (agama) kami ini perkara yang tiada asas (dalilnya) daripada agama maka ia tertolak."
Hadis ini diriwayatkan oleh Imam al-Bukhari dan Imam Muslim.
Dalam satu riwayat yang lain daripada Imam Muslim, "Sesiapa yang melakukan sesuatu amalan yang tidak berasaskan ajaran agama kami maka ia tertolak."
`,
        lessons: [
            "Islam ialah agama yang telah sempurna seperti yang diajar oleh Rasulullah SAW.",
            "Setiap Muslim mestilah menjauhkan diri daripada perbuatan yang bercanggah dengan syariat Allah SWT supaya tidak menjadi fitnah terhadap kesucian Islam.",
            "Setiap Muslim hendaklah memastikan amalan yang dilakukan bersandarkan petunjuk al-Quran dan al-Sunah."
        ]
    },

    6: {
        title: "Berhati-hati Terhadap Pekara Syubhah",
        description: "Menjauhi perkara syubhah membantu memelihara agama dan maruah diri.",
        arabic: `
عَنْ أَبِي عَبْدِ اللَّهِ النُّعْمَانِ بْنِ بَشِيرٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: إِنَّ الْحَلَالَ بَيِّنٌ، وَإِنَّ الْحَرَامَ بَيِّنٌ، وَبَيْنَهُمَا مُشْتَبِهَاتٌ لَا يَعْلَمُهُنَّ كَثِيرٌ مِنَ النَّاسِ، فَمَنِ اتَّقَى الشُّبُهَاتِ اسْتَبْرَأَ لِدِينِهِ وَعِرْضِهِ، وَمَنْ وَقَعَ فِي الشُّبُهَاتِ وَقَعَ فِي الْحَرَامِ، كَالرَّاعِي يَرْعَى حَوْلَ الْحِمَى يُوشِكُ أَنْ يَرْتَعَ فِيهِ، أَلَا وَإِنَّ لِكُلِّ مَلِكٍ حِمًى، أَلَا وَإِنَّ حِمَى اللَّهِ تَعَالَى مَحَارِمُهُ، أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً، إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ، وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ، أَلَا وَهِيَ الْقَلْبُ.
رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.
`,
        translation: `Terjemahan: Daripada Abu 'Abdullah al-Nu'man bin Basyir r.a. beliau berkata, aku mendengar Rasulullah SAW bersabda: "Sesungguhnya perkara yang halal itu jelas dan perkara yang haram itu jelas dan di antara kedua-duanya terdapat perkara yang syubhah (tidak jelas hukumnya), yang kebanyakan orang tidak mengetahuinya. Sesiapa yang berhati-hati terhadap perkara yang syubhah, maka dia telah memelihara agamanya dan maruahnya. Namun sesiapa yang terjebak dengan perkara yang syubhah maka dia terjerumus ke dalam perkara haram. (Keadaannya) seperti penggembala yang membawa binatang gembalaannya berhampiran kawasan larangan, lambat laun dikhuatiri dia akan mekerasukinya. Ketahuilah sesungguhnya setiap raja mempunyai kawasan larangan. Ketahuilah sesungguhnya kawasan larangan Allah ialah perkara yang diharamkan-Nya. Ketahuilah sesungguhnya di dalam jasad manusia ada seketul daging, apabila ia baik maka seluruh jasad akan baik. Dan apabila ia rosak maka seluruh jasad akan rosak. Ketahuilah bahawa ia adalah hati."`,
        lessons: [
            "Mengambil berat tentang perkara yang berkaitan halal, haram dan syubhah.",
            "Tidak peka terhadap perkara halal, haram dan syubhah akan memberi kesan negatif kepada kehidupan.",
            "Melakukan perkara haram dan syubhah akan menjejaskan kesucian hati."
        ]
    },

    7: {
        title: "Nasihat Tonggak Agama",
        description: "Agama Islam menekankan nasihat yang ikhlas kepada Allah, kitab-Nya, Rasul-Nya, pemimpin dan umat Islam.",
        arabic: `
عَنْ أَبِي رُقَيَّةَ تَمِيمِ بْنِ أَوْسٍ الدَّارِيِّ رَضِيَ اللَّهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ الدِّينُ النَّصِيحَةُ، قُلْنَا لِمَنْ؟ قَالَ: لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ.
رَوَاهُ مُسْلِمٌ.
`,
        translation: `Terjemahan: Daripada Saiyidina Abu Ruqayyah Tamim bin Aus al-Dari r.a. bahawa Rasulullah SAW bersabda: "Agama itu nasihat (tulus dan setia menunaikan tanggungjawab)." Kami bertanya, "Kepada siapa?" Baginda SAW bersabda, "Kepada Allah, kitab-Nya, rasul-Nya dan pemimpin kaum Muslimin serta kesemua orang Islam."
Hadis ini diriwayatkan oleh Imam Muslim.
`,
        lessons: [
            "Memberi nasihat adalah tuntutan daripada Allah SWT. Mereka yang melaksanakannya akan mendapat ganjaran daripada Allah SWT.",
            "Menjadikan al-Quran dan al-Sunah sebagai panduan dalam amalan harian.",
            "Kita perlu menzahirkan kasih sayang sesama insan melalui amalan saling menasihati.",
            "Masyarakat yang harmoni akan terbentuk apabila setiap individu berlapang dada menerima peringatan dan membaiki diri."
        ]
    },

    8: {
        title: "Kehormatan Seoarang Muslim",
        description: "Menjelaskan kewajipan agama serta perlindungan terhadap darah dan harta seseorang Muslim.",
        arabic: `
عَنْ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا، أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَيُقِيمُوا الصَّلَاةَ، وَيُؤْتُوا الزَّكَاةَ، فَإِذَا فَعَلُوا ذَلِكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وَأَمْوَالَهُمْ إِلَّا بِحَقِّ الْإِسْلَامِ، وَحِسَابُهُمْ عَلَى اللَّهِ تَعَالَى.
رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Ibn Umar r.a. bahawa Rasulullah SAW bersabda: "Aku diperintahkan supaya memerangi (penentangan) manusia sehingga mereka (sendiri) bersaksi bahawa tiada tuhan melainkan Allah SWT dan bahawa Muhammad ialah pesuruh Allah SWT, mereka mendirikan solat dan menunaikan zakat. Apabila mereka menunaikan perkara tersebut, maka mereka telah memelihara darah dan harta mereka daripada (tindakan yang diperintahkan kepada) aku melainkan dengan hak (yang dibenarkan oleh) Islam. Selebihnya, perhitungan terhadap mereka diserahkan kepada Allah SWT."`,
        lessons: [
            "Islam menekankan kepentingan dakwah secara berhikmah tanpa sebarang paksaan mahupun tekanan.",
            "Kehormatan manusia wajib dipelihara kerana Allah SWT telah mengangkat kemuliaan insan dalam kalangan manusia.",
            "Semangat masyarakat majmuk yang harmoni menuntut kita menyantuni kepelbagaian dengan penuh kemesraan berpandukan syariat.",
            "Setiap Muslim hendaklah memelihara nyawa dan harta saudara Muslim yang lain selagi mereka menunaikan tanggungjawab dan kewajipan dalam Islam.",
            "Setiap manusia hanyalah dihukum berdasarkan perkara yang zahir pada diri mereka."
        ]
    },

    9: {
        title: "Larangan Pernyataan dan Pertikaian Melampau",
        description: "Menjauhi larangan agama, melaksanakan perintah mengikut kemampuan dan mengelakkan pertikaian yang berlebihan.",
        arabic: `
عَنْ أَبِي هُرَيْرَةَ عَبْدِ الرَّحْمَنِ بْنِ صَخْرٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوهُ، وَمَا أَمَرْتُكُمْ بِهِ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ، فَإِنَّمَا أَهْلَكَ الَّذِينَ مِنْ قَبْلِكُمْ كَثْرَةُ مَسَائِلِهِمْ وَاخْتِلَافُهُمْ عَلَى أَنْبِيَائِهِمْ.
رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Hurairah 'Abdul Rahman bin Sakhr r.a. beliau berkata, aku mendengar Rasulullah SAW bersabda: "Apa-apa sahaja yang aku larang kamu daripada melakukannya, maka jauhilah dan apa sahaja yang aku perintahkan kamu melakukannya, maka tunaikanlah sedaya upaya kamu. Kerana sesungguhnya, perkara yang membinasakan umat yang terdahulu adalah banyak bertanya dan mempertikai para nabi mereka."`,
        lessons: [
            "Suruhan dalam agama merupakan peraturan yang menyusun kehidupan manusia menuju kejayaan.",
            "Larangan dalam agama bukanlah perkara yang menyekat kebebasan bahkan memberi kebaikan kepada manusia.",
            "Tidak mempertikaikan perkara yang telah ditetapkan dalam agama.",
            "Soalan yang dilontarkan hendaklah memberi manfaat dan maslahah buat individu demi kepentingan umum."
        ]
    },

    10: {
        title: "Rezeki Halal Asas Penerimaan Doa",
        description: "Rezeki yang halal dan baik merupakan perkara penting dalam penerimaan amalan dan doa.",
        arabic: `
عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنَّ اللَّهَ تَعَالَى طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا، وَإِنَّ اللَّهَ أَمَرَ الْمُؤْمِنِينَ بِمَا أَمَرَ بِهِ الْمُرْسَلِينَ، فَقَالَ تَعَالَى: ﴿يَاأَيُّهَا الرُّسُلُ كُلُوا مِنَ الطَّيِّبَاتِ وَاعْمَلُوا صَالِحًا﴾، وَقَالَ تَعَالَى: ﴿يَاأَيُّهَا الَّذِينَ آمَنُوا كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ﴾. ثُمَّ ذَكَرَ الرَّجُلَ يُطِيلُ السَّفَرَ أَشْعَثَ أَغْبَرَ، يَمُدُّ يَدَيْهِ إِلَى السَّمَاءِ: يَا رَبِّ، يَا رَبِّ، وَمَطْعَمُهُ حَرَامٌ، وَمَشْرَبُهُ حَرَامٌ، وَمَلْبَسُهُ حَرَامٌ، وَغُذِيَ بِالْحَرَامِ، فَأَنَّى يُسْتَجَابُ لِذَلِكَ؟
رَوَاهُ مُسْلِمٌ.
`,
        translation: `Terjemahan: Daripada Saiyidina Abu Hurairah r.a. beliau berkata, Rasulullah SAW bersabda: "Sesungguhnya Allah Maha Baik, Dia tidak menerima kecuali sesuatu yang baik. Dan sesungguhnya, Allah telah memerintahkan kepada orang yang beriman dengan perintah yang sama kepada para rasul-Nya. Allah berfirman yang bermaksud, "Wahai para rasul! Makanlah daripada perkara yang baik dan kerjakanlah amalan yang soleh." (al-Mukminun: 51) Allah juga berfirman yang bermaksud, "Wahai orang yang beriman! Makanlah daripada perkara yang baik yang Kami kurniakan kepada kamu" (al-Baqarah: 172). Kemudian baginda SAW menceritakan perihal seorang yang menempuh perjalanan jauh, rambutnya kusut masai dan berdebu, dia menadah kedua-dua tangannya ke langit seraya berdoa, "Wahai Tuhanku! Wahai Tuhanku! Sedangkan makanannya haram, minumannya haram, pakaiannya haram dan dia diberi makan dengan makanan yang haram. Bagaimanakah diperkenankan doa orang yang sedemikian?"`,
        lessons: [
            "Meyakini bahawa Allah SWT Maha Baik lagi Maha Sempurna dan tidak menerima kecuali perkara yang baik.",
            "Sentiasa berusaha mencari sesuatu yang halal lagi baik dan menjauhkan diri daripada perkara yang haram.",
            "Kita hendaklah bersungguh-sungguh dalam berdoa dan memahami doa dengan sepenuh hati.",
            "Mengangkat tangan dalam berdoa merupakan satu daripada adab ketika berdoa."
        ]
    },

    11: {
        title: "Meninggalkan Keraguan adalah Ciri Rawak",
        description: "Meninggalkan perkara yang meragukan dan memilih perkara yang lebih meyakinkan.",
        arabic: `
عَنْ أَبِي مُحَمَّدٍ الْحَسَنِ بْنِ عَلِيِّ بْنِ أَبِي طَالِبٍ سِبْطِ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَرَيْحَانَتِهِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: حَفِظْتُ مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: دَعْ مَا يَرِيبُكَ إِلَى مَا لَا يَرِيبُكَ.
رَوَاهُ التِّرْمِذِيُّ وَالنَّسَائِيُّ، وَقَالَ التِّرْمِذِيُّ: حَدِيثٌ حَسَنٌ صَحِيحٌ.
`,
        translation: `Terjemahan: Daripada Saiyidina Abu Muhammad al-Hasan bin Ali bin Abu Talib—cucunda Rasulullah SAW dan kesayangan baginda SAW, beliau berkata, aku menghafaz sabda Rasulullah SAW, "Tinggalkanlah perkara yang meragukanmu dan ambillah perkara yang tidak meragukanmu." 
Hadis ini diriwayatkan oleh Imam al-Tirmizi dan Imam al-Nasa'i. Imam al-Tirmizi berkata, "Hadis ini hasan sahih." 
`,
        lessons: [
            "Hadis ini mengingatkan setiap individu mengenai keperluan membina kehidupan yang baik dengan menjauhi segala perkara yang meragukan diri.",
            "Sekiranya bertembung antara keyakinan dengan syak, maka seseorang seharusnya berpegang pada perkara yang diyakini olehnya.",
            "Meninggalkan sesuatu yang meragukan kerana ingin menjaga maruah diri dan kehormatan agama adalah sifat yang terpuji."
        ]
    },

    12: {
        title: "Meninggalkan Pekara yang Tidak Berfaedah",
        description: "Antara tanda kebaikan Islam seseorang ialah meninggalkan perkara yang tidak berkaitan dengannya.",
        arabic: `
عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ.
حَدِيثٌ حَسَنٌ، رَوَاهُ التِّرْمِذِيُّ وَغَيْرُهُ.
`,
        translation: `Terjemahan: Daripada Saiyidina Abu Hurairah r.a., beliau berkata, "Rasulullah SAW bersabda: "Antara keindahan Islam seseorang ialah dia meninggalkan sesuatu yang tidak berkaitan dengan dirinya."
Hadis hasan. Hadis ini diriwayatkan oleh Imam al-Tirmizi dan imam yang lain.
`,
        lessons: [
            "Sentiasa muhasabah diri terhadap amalan harian.",
            "Seorang Muslim seharusnya mengutamakan dirinya dengan urusan diri sendiri dan tidak campur tangan dalam urusan orang lain melainkan yang dibenarkan oleh Islam.",
            "Seorang Muslim sentiasa mengisi ruang waktu dengan mempelajari ilmu dan kemahiran baharu yang memberi manfaat."
        ]
    },

    13: {
        title: "Menyukai Kebaikan Sesama Muslim Tanda Kesempurnaan Iman",
        description: "Kesempurnaan iman menuntut seseorang menyukai kebaikan untuk saudaranya sebagaimana untuk dirinya sendiri.",
        arabic: `
عَنْ أَبِي حَمْزَةَ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ خَادِمِ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ.
رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.
`,
        translation: `Terjemahan: Daripada Saiyidina Abu Hamzah Anas bin Malik r.a., pembantu Rasulullah SAW, bahawa baginda SAW bersabda: "Tidak sempurna iman seseorang kamu sehingga dia menyukai saudaranya memperoleh apa-apa (kebaikan) yang dia sukakan untuk dirinya sendiri."
Hadis ini diriwayatkan oleh Imam al-Bukhari dan Imam Muslim.
`,
        lessons: [
            "Iman meningkat apabila kita melakukan kebaikan dan menurun apabila melakukan maksiat.",
            "Menasihatkan seseorang rakan dengan nasihat yang baik merupakan tanda kasih sayang.",
            "Menyukai kebaikan sesama Muslim ialah tanda kesempurnaan iman.",
            "Seorang Muslim yang mendapat sesuatu nikmat kebaikan perlu berharap agar kebaikan yang sama diterima oleh saudaranya.",
            "Persekitaran sosial yang baik dapat mewujudkan sifat berlumba-lumba melakukan kebaikan."
        ]
    },

    14: {
        title: "Kesan Jenayah Berat dalam Islam",
        description: "Menjelaskan keseriusan beberapa jenayah berat dan ketetapan hukum dalam Islam.",
        arabic: `
عَنْ ابْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: لَا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ إِلَّا بِإِحْدَى ثَلَاثٍ: الثَّيِّبُ الزَّانِي، وَالنَّفْسُ بِالنَّفْسِ، وَالتَّارِكُ لِدِينِهِ الْمُفَارِقُ لِلْجَمَاعَةِ.
رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.
`,
        translation: `Terjemahan: Daripada Saiyidina Ibnu Mas'ud r.a berkata, Rasulullah SAW bersabda: "Tidak halal (menumpahkan) darah seorang Muslim kecuali disebabkan satu daripada tiga perkara; berzina setelah berkahwin, membunuh orang (tanpa hak), dan meninggalkan agama serta memisahkan diri daripada jemaah orang Islam."
Hadis ini diriwayatkan oleh Imam al-Bukhari dan Imam Muslim.
`,
        lessons: [
            "Agama Islam menekankan pentingnya menjaga akidah, maruah dan nyawa.",
            "Zina merupakan dosa besar dalam Islam. Perbuatan zina setelah berkahwin adalah jenayah berat yang boleh dikenakan hukuman bunuh.",
            "Membunuh manusia secara sengaja merupakan kesalahan berat yang menyebabkan boleh dihukum bunuh, kecuali pembunuh telah dimaafkan oleh keluarga mangsa.",
            "Orang yang murtad hendaklah diberikan peluang untuk kembali kepada Islam. Jika dia menolak, boleh dikenakan hukuman bunuh."
        ]
    },

    15: {
        title: "Berkata Baik serta Menghormati Jiran dan Tetamu",
        description: "Orang beriman hendaklah berkata baik, menghormati jiran dan memuliakan tetamu.",
        arabic: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ عَنْ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: مَنْ كَانَ يُؤْمِنُ بِاللهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ. رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Hurairah r.a. daripada Rasulullah SAW bersabda: "Sesiapa yang beriman kepada Allah dan hari akhirat hendaklah dia berkata yang baik atau diam. Sesiapa yang beriman kepada Allah dan hari akhirat hendaklah dia memuliakan jirannya. Sesiapa yang beriman kepada Allah dan hari akhirat hendaklah dia memuliakan tetamunya."
Hadis ini diriwayatkan oleh Imam al-Bukhari dan Imam Muslim.`,
        lessons: [
            "Orang beriman sentiasa menjaga lidah dan hak jiran serta tetamu.",
            "Apabila tidak mampu bercakap atau menulis dengan baik, diam adalah lebih baik.",
            "Mukmin yang baik sentiasa menjaga akhlak dan tingkah laku terhadap jiran dan tetamu.",
            "Memelihara hubungan sesama makhluk adalah sebahagian daripada ajaran Islam."
        ]
    },

    16: {
        title: "Jauhi sifat Pemarah",
        description: "Mengawal kemarahan merupakan nasihat penting dalam membentuk akhlak yang baik.",
        arabic: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ أَنَّ رَجُلًا قَالَ لِلنَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: أَوْصِنِي، قَالَ: لاَ تَغْضَبْ. فَرَدَّدَ مِرَارًا، قَالَ: لاَ تَغْضَبْ. رَوَاهُ الْبُخَارِيُّ.`,
        translation: `Daripada Saiyidina Abu Hurairah r.a. bahawa seorang sahabat telah berkata kepada Nabi SAW, "Berilah pesanan kepadaku." Baginda SAW bersabda, "Janganlah kamu marah." Sahabat itu mengulangi pertanyaannya berkali-kali. Baginda tetap bersabda, "Janganlah kamu marah."
Hadis ini diriwayatkan oleh Imam al-Bukhari.
`,
        lessons: [
            "Muslim dituntut menjaga kesejahteraan emosi.",
            "Menahan kemarahan adalah tuntutan agama demi kebaikan dan kemaslahatan umat.",
            "Marah yang dibolehkan apabila kehormatan diri dan kemuliaan agama Islam dihina, namun mestilah menyelesaikannya dengan cara berhikmah.",
            "Meluahkan perasaan marah secara wajar dan terkawal.",
            "Berzikir kepada Allah SWT dapat membantu seseorang mengawal perilaku luaran dan tindak balas dalaman."
        ]
    },

    17: {
        title: "Kesempurnaan dalam Pekara Kebaikan",
        description: "Islam menuntut ihsan dan kesempurnaan dalam setiap perkara, termasuk ketika menyembelih haiwan.",
        arabic: `عَنْ أَبِي يَعْلَى شَدَّادِ بْنِ أَوْسٍ رَضِيَ اللهُ تَعَالَى عَنْهُ عَنْ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: إِنَّ اللهَ كَتَبَ الإِحْسَانَ عَلَى كُلِّ شَيْءٍ، فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ، وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذِّبْحَةَ، وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ، وَلْيُرِحْ ذَبِيحَتَهُ. رَوَاهُ مُسْلِمٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Ya'la Syaddad bin Aus r.a. bahawa Rasulullah SAW bersabda: "Sesungguhnya Allah telah menuntut berlaku ihsan (berbuat kebaikan secara sempurna) dalam setiap perkara. Maka, apabila kamu membunuh hendaklah dilakukan dengan cara yang baik. Dan apabila kamu menyembelih hendaklah dilakukan dengan cara yang baik. Hendaklah seseorang menajamkan pisau sembelihannya dan memberi kerehatan (menyegerakan kematian) kepada binatang sembelihannya."
Hadis ini diriwayatkan oleh Imam Muslim.
`,
        lessons: [
            "Setiap orang mestilah menghayati nilai ihsan bagi melahirkan manusia yang cemerlang dan bertamadun.",
            "Islam merupakan agama yang sentiasa menganjurkan kesempurnaan dalam setiap perkara.",
            "Kita mesti meyakini bahawa setiap hukum syariat adalah demi untuk kebaikan dan kemaslahatan umat.",
            "Setiap orang hendaklah mempunyai jiwa yang murni agar dapat menilai sesuatu perkara baik atau buruk.",
            "Islam amat mementingkan ihsan dalam setiap perkara sekalipun dalam peperangan atau pelaksanaan hukuman.",
            "Individu yang membudayakan ihsan dalam kehidupan akan menjadikan proses penambahbaikan berlaku secara berterusan."
        ]
    },

    18: {
        title: "Takwa dan Akhlak Mulia",
        description: "Bertakwa kepada Allah, mengiringi keburukan dengan kebaikan dan bergaul dengan manusia melalui akhlak yang baik.",
        arabic: ` عَنْ أَبِي ذَرٍّ جُنْدُبِ بْنِ جُنَادَةَ، وَأَبِي عَبْدِ الرَّحْمَنِ مُعَاذِ بْنِ جَبَلٍ رَضِيَ اللهُ عَنْهُمَا، عَنْ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: اتَّقِ اللهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ. رَوَاهُ التِّرْمِذِيُّ وَقَالَ: حَدِيثٌ حَسَنٌ، وَفِي بَعْضِ النُّسَخِ: حَسَنٌ صَحِيحٌ.`,
        translation: `Terjemahan:Daripada Saiyidina Abu Zar Jundub bin Junadah dan Saiyidina Abu Abdul Rahman Muaz bin Jabal r.a., bahawa Rasulullah SAW bersabda, "Bertakwalah kamu kepada Allah di mana sahaja kamu berada, susulkanlah kejahatan dengan kebaikan nescaya kebaikan akan menghapuskannya dan bergaullah sesama manusia dengan budi pekerti yang baik."`,
        lessons: [
            "Takwa ialah mengawasi tindak tanduk diri agar sentiasa selari dengan perintah Allah SWT.",
            "Akhlak yang mulia merupakan tonggak kepada kesejahteraan kehidupan manusia di dunia dan akhirat.",
            "Setiap perbuatan dosa mestilah disusuli dengan istighfar dan bertaubat serta mengerjakan amal soleh.",
            "Pergaulan yang baik akan merapatkan lagi hubungan silaturahim dengan semua pihak."
        ]
    },

    19: {
        title: "Panduan Pengukuhan Iman bagi Anak Muda",
        description: "Bergantung kepada Allah, memohon pertolongan-Nya dan meyakini ketentuan serta pertolongan-Nya.",
        arabic: `عَنْ أَبِي العَبَّاسِ عَبْدِ اللهِ بْنِ عَبَّاسٍ رَضِيَ اللهُ تَعَالَى عَنْهُمَا قَالَ: كُنْتُ خَلْفَ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَوْمًا فَقَالَ: يَا غُلَامُ! إِنِّي أُعَلِّمُكَ كَلِمَاتٍ: احْفَظِ اللهَ يَحْفَظْكَ، احْفَظِ اللهَ تَجِدْهُ تُجَاهَكَ، إِذَا سَأَلْتَ فَاسْأَلِ اللهَ، وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللهِ، وَاعْلَمْ أَنَّ الأُمَّةَ لَوْ اجْتَمَعَتْ عَلَى أَنْ يَنْفَعُوكَ بِشَيْءٍ لَمْ يَنْفَعُوكَ إِلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللهُ لَكَ، وَإِنِ اجْتَمَعُوا عَلَى أَنْ يَضُرُّوكَ بِشَيْءٍ لَمْ يَضُرُّوكَ إِلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللهُ عَلَيْكَ، رُفِعَتِ الأَقْلَامُ وَجَفَّتِ الصُّحُفُ. رَوَاهُ التِّرْمِذِيُّ وَقَالَ: حَدِيثٌ حَسَنٌ صَحِيحٌ.وَفِي رِوَايَةِ غَيْرِ التِّرْمِذِيِّ: احْفَظِ اللهَ تَجِدْهُ أَمَامَكَ، تَعَرَّفْ إِلَى اللهِ فِي الرَّخَاءِ يَعْرِفْكَ فِي الشِّدَّةِ، وَاعْلَمْ أَنَّ مَا أَخْطَأَكَ لَمْ يَكُنْ لِيُصِيبَكَ، وَمَا أَصَابَكَ لَمْ يَكُنْ لِيُخْطِئَكَ، وَاعْلَمْ أَنَّ النَّصْرَ مَعَ الصَّبْرِ، وَأَنَّ الفَرَجَ مَعَ الكَرْبِ، وَأَنَّ مَعَ العُسْرِ يُسْرًا.`,
        translation: `Terjemahan: Daripada Saiyidina Abi al-'Abbas Abdullah bin 'Abbas r.a., beliau berkata, pada suatu hari aku berada di belakang Nabi SAW lalu baginda SAW bersabda: "Wahai anak muda, sesungguhnya aku akan mengajar kamu beberapa perkara yang sangat penting. Peliharalah (hak) Allah nescaya Allah akan menjagamu. Peliharalah (hak) Allah nescaya kamu akan mendapati-Nya sentiasa di hadapanmu (membela kamu). Apabila kamu meminta sesuatu, mintalah kepada Allah. Apabila kamu memohon pertolongan, mohonlah kepada Allah. Ketahuilah bahawa sekiranya seluruh makhluk berhimpun untuk memberi manfaat kepada kamu, mereka tidak akan mampu untuk memberi sebarang manfaat melainkan apa yang Allah telah tentukan untuk kamu. Sekiranya mereka berhimpun untuk mendatangkan mudarat kepada kamu, mereka tidak akan mampu untuk mendatangkan sebarang mudarat kepada kamu melainkan apa yang Allah telah tentukan ke atas kamu. Pena-pena (pencatat takdir) telah diangkat dan lembaran-lembaran (catatan takdir) telah kering." Dalam riwayat selain Imam al-Tirmizi ada disebutkan: "Peliharalah (hak) Allah nescaya kamu akan mendapati Allah di hadapanmu, Kenalilah Allah ketika senang, nescaya Dia akan mengenalimu ketika susah. Yakinlah bahawa sesuatu yang tidak ditakdirkan mengenaimu sekali-kali tidak akan menimpamu, dan sesuatu yang ditakdirkan menimpamu sekali-kali tidak akan tersasar daripadamu. Yakinlah bahawa pertolongan Allah sentiasa bersama sifat sabar, kelapangan akan datang selepas kesempitan, dan bersama kesusahan ada kesenangan."`,
        lessons: [
            `Mengingati Allah SWT dalam semua urusan kehidupan dengan cara:
            1. Menjaga batas agama dalam semua sudut jasmani dan rohani.
            2. Sentiasa memohon pertolongan dan perlindungan daripada Allah SWT.
            3. Sentiasa bertawakal kepada Allah SWT selepas berusaha dan berdoa.`,
            "Orang yang sentiasa mengingati Allah SWT dalam setiap urusan kehidupannya, maka Allah SWT akan sentiasa mengingati dan bersama-samanya dalam setiap keadaan.",
            "Sentiasa mengharapkan bantuan daripada Allah SWT dan meyakini bahawa setiap kesusahan ada kesenangan.",
            "Sesuatu kemenangan dan kemudahan akan dapat diraih setelah menempuh kesusahan dan kepayahan."
        ]
    },

    20: {
        title: "Keutamaan Sifat Malu",
        description: "Sifat malu menjadi panduan yang menghalang seseorang daripada melakukan perbuatan buruk.",
        arabic: ` عَنْ أَبِي مَسْعُودٍ عُقْبَةَ بْنِ عَمْرٍو الأَنْصَارِيِّ الْبَدْرِيِّ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: "إِنَّ مِمَّا أَدْرَكَ النَّاسُ مِنْ كَلاَمِ النُّبُوَّةِ الأُولَى: إِذَا لَمْ تَسْتَحْيِ فَاصْنَعْ مَا شِئْتَ." رَوَاهُ الْبُخَارِيُّ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Mas'ud 'Uqbah bin 'Amr al-Ansari al-Badri r.a., beliau berkata, Rasulullah SAW bersabda: "Sesungguhnya antara ungkapan yang diterima oleh manusia (turun temurun) daripada para Nabi yang terdahulu ialah: "Jika kamu sudah tiada sifat malu maka buatlah apa sahaja yang kamu mahu."
Hadis ini diriwayatkan oleh Imam al-Bukhari.
`,
        lessons: [
            "Malu adalah sebahagian cabang iman dan salah satu sifat utama seorang mukmin.",
            "Sifat malu akan mendorong manusia melakukan kebaikan dan perisai daripada melakukan kejahatan.",
            "Meninggalkan apa yang diperintahkan Allah SWT atau melakukan apa yang dilarang-Nya adalah dikeji.",
            "Berfikir dahulu sebelum bercakap atau melakukan sesuatu agar tidak terjebak dalam perkara yang dilarang oleh agama."
        ]
    },

    21: {
        title: "Iman dan Istiqamah",
        description: "Beriman kepada Allah hendaklah disertai dengan istiqamah dalam menjalani kehidupan.",
        arabic: ` عَنْ أَبِي عَمْرٍو وَقِيلَ أَبِي عَمْرَةَ سُفْيَانَ بْنِ عَبْدِ اللهِ الثَّقَفِيِّ رَضِيَ اللهُ عَنْهُ قَالَ: قُلْتُ: يَا رَسُولَ اللهِ، قُلْ لِي فِي الإِسْلاَمِ قَوْلاً لاَ أَسْأَلُ عَنْهُ أَحَدًا غَيْرَكَ. قَالَ: قُلْ آمَنْتُ بِاللهِ ثُمَّ اسْتَقِمْ. رَوَاهُ مُسْلِمٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu 'Amr dan dikatakan Abu 'Amrah Sufyan bin Abdullah al-Thaqafi r.a. berkata, "Aku berkata, 'Wahai Rasulullah SAW, beritahulah kepadaku satu perkataan (berkenaan ajaran Islam) yang aku tidak perlu bertanya kepada sesiapa selain tuan mengenainya.' Sabda Rasulullah SAW: 'Katakanlah, aku beriman kepada Allah, kemudian beristiqamahlah (atas perkara tersebut).'"
Hadis ini diriwayatkan oleh Imam Muslim.`,
        lessons: [
            "Hadis ini menghimpunkan banyak perkara penting dalam lafaz yang ringkas, iaitu pesanan Rasulullah SAW berkaitan iman dan istiqamah yang merupakan tunjang ajaran Islam.",
            "Istiqamah ialah mengikhlaskan amal kerana Allah SWT dan bersegera mentaati-Nya dengan mengikuti syariat yang ditetapkan.",
            "Istiqamah juga ialah berterusan mentaati Allah SWT dari aspek akidah, perkataan dan perbuatan.",
            "Istiqamah memerlukan kepada ilmu, kefahaman mengenai fadilat amalan, usaha dan mujahadah. Istiqamah tidak memadai dengan hanya meniru amalan orang lain."
        ]
    },

    22: {
        title: "Syarat Asas Masuk Syurga",
        description: "Menunaikan solat fardu, berpuasa Ramadan, menghalalkan yang halal dan menjauhi yang haram.",
        arabic: `عَنْ أَبِي عَبْدِ اللهِ جَابِرِ بْنِ عَبْدِ اللهِ الأَنْصَارِيِّ رَضِيَ اللهُ عَنْهُ أَنَّ رَجُلاً سَأَلَ رَسُولَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: أَرَأَيْتَ إِذَا صَلَّيْتُ المَكْتُوبَاتِ، وَصُمْتُ رَمَضَانَ، وَأَحْلَلْتُ الحَلاَلَ، وَحَرَّمْتُ الحَرَامَ، وَلَمْ أَزِدْ عَلَى ذَلِكَ شَيْئًا، أَأَدْخُلُ الجَنَّةَ؟ قَالَ: نَعَمْ. رَوَاهُ مُسْلِمٌ. وَمَعْنَى حَرَّمْتُ الحَرَامَ: اجْتَنَبْتُهُ، وَمَعْنَى أَحْلَلْتُ الحَلاَلَ: فَعَلْتُهُ مُعْتَقِدًا حِلَّهُ.`,
        translation: `Terjemahan:Daripada Saiyidina Abu Abdullah Jabir bin Abdullah al-Ansari r.a. bahawa seorang lelaki bertanya kepada Rasulullah SAW, beliau berkata: "Apa pandangan tuan sekiranya aku mengerjakan solat fardu, berpuasa pada bulan Ramadan, menghalalkan perkara yang halal serta mengharamkan perkara yang haram dan aku tidak melakukan lebih daripada itu, adakah aku akan masuk syurga?" Baginda SAW bersabda: "Ya."`,
        lessons: [
            "Berusaha bersungguh-sungguh melaksanakan ibadah terutama solat fardu dan puasa pada bulan Ramadan.",
            "Melaksanakan perkara yang halal dan meninggalkan perkara yang haram.",
            "Melakukan amalan yang harus seperti bersukan, berhibur dan hobi yang tidak mengabaikan kewajipan.",
            "Meyakini syariat Islam adalah yang terbaik."
        ]
    },

    23: {
        title: "Ganjaran dan Hakikat Amalan Kebaikan",
        description: "Amalan seperti bersuci, berzikir, solat, bersedekah dan bersabar mempunyai ganjaran serta nilai yang besar.",
        arabic: ` عَنْ أَبِي مَالِكٍ الْحَارِثِ بْنِ عَاصِمٍ الْأَشْعَرِيِّ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: "الطَّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ، وَسُبْحَانَ اللهِ وَالْحَمْدُ لِلَّهِ تَمْلَآَنِ – أَوْ تَمْلَأُ – مَا بَيْنَ السَّمَاوَاتِ وَالْأَرْضِ، وَالصَّلَاةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ، وَالْقُرْآنُ حُجَّةٌ لَكَ أَوْ عَلَيْكَ، كُلُّ النَّاسِ يَغْدُو، فَبَائِعٌ نَفْسَهُ فَمُعْتِقُهَا أَوْ مُوبِقُهَا." رَوَاهُ مُسْلِمٌ.`,
        translation: `Terjemahan:Daripada Saiyidina Abu Malik al-Harith bin 'Asim al-Asy'ari r.a., beliau berkata, Rasulullah SAW bersabda: "Kesucian adalah sebahagian daripada iman. Ucapan 'Alhamdulillah' memenuhi timbangan (mizan). Ucapan 'Subhanallah' dan 'Alhamdulillah' memenuhi ruang di antara langit dan bumi. Solat adalah cahaya. Sedekah adalah bukti (keimanan). Sabar adalah sinaran. Al-Quran adalah hujah yang membela atau menentang kamu. Setiap orang yang memulakan harinya (dengan berusaha seumpama) menjual jiwanya, sama ada dia membebaskannya atau membinasakannya."
Hadis ini diriwayatkan oleh Imam Muslim.`,
        lessons: [
            "Orang mukmin hendaklah sentiasa memelihara wuduk, kerana kelebihannya sangat besar. Namun begitu, konsep bersuci dalam Islam tidak terbatas kepada kesucian anggota zahir semata-mata, bahkan Islam sangat mementingkan penyucian jiwa daripada sifat yang buruk dan mengisinya dengan ketaatan kepada Allah SWT.",
            "Berzikir adalah amalan mudah dilakukan, pahalanya amat besar di sisi Allah SWT sehingga memenuhi ruang langit dan bumi.",
            "Solat diumpamakan cahaya yang menerangi hati manusia dengan hidayah untuk membezakan antara perkara yang hak dan batil.",
            "Amalan bersedekah adalah bukti keimanan seseorang kerana hanya mereka yang meyakini pulangan akhirat sanggup mengorbankan sesuatu yang disayangi.",
            `Sifat sabar perlu dipraktikkan dalam beberapa keadaan:
            1.Sabar melakukan ketaatan kepada Allah SWT.
            2.Sabar meninggalkan maksiat.
            3.Sabar menghadapi musibah.`,
            "Al-Quran akan menjadi pembela kepada seorang hamba di akhirat dengan syarat dia mempelajarinya, beramal dengan tuntutan dan meninggalkan larangannya.",
            "Urusan harian seorang hamba dengan Allah SWT ibarat suatu perniagaan. Ada yang meraih keuntungan dengan selamat daripada azab neraka dan ada juga yang rugi lalu terjerumus ke dalamnya."
        ]
    },

    24: {
        title: "Keluasan Limpah Kurnia Allah SWT Kepada Hamba-Nya",
        description: "Allah melarang kezaliman dan menjelaskan keluasan rahmat serta keadilan-Nya terhadap hamba-hamba-Nya.",
        arabic: ` عَنْ أَبِي ذَرٍّ رَضِيَ اللهُ عَنْهُ عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فِيمَا رَوَى عَنِ اللهِ عَزَّ وَجَلَّ أَنَّهُ قَالَ: يَا عِبَادِي، إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي، وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا، فَلَا تَظَالَمُوا.
 يَا عِبَادِي، كُلُّكُمْ ضَالٌّ إِلَّا مَنْ هَدَيْتُهُ، فَاسْتَهْدُونِي أَهْدِكُمْ. يَا عِبَادِي، كُلُّكُمْ جَائِعٌ إِلَّا مَنْ أَطْعَمْتُهُ، فَاسْتَطْعِمُونِي أُطْعِمْكُمْ. يَا عِبَادِي، كُلُّكُمْ عَارٍ إِلَّا مَنْ كَسَوْتُهُ، فَاسْتَكْسُونِي أَكْسُكُمْ. يَا عِبَادِي، إِنَّكُمْ تُخْطِئُونَ بِاللَّيْلِ وَالنَّهَارِ، وَأَنَا أَغْفِرُ الذُّنُوبَ جَمِيعًا، فَاسْتَغْفِرُونِي أَغْفِرْ لَكُمْ. يَا عِبَادِي، إِنَّكُمْ لَنْ تَبْلُغُوا ضَرِّي فَتَضُرُّونِي، وَلَنْ تَبْلُغُوا نَفْعِي فَتَنْفَعُونِي. يَا عِبَادِي، لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوا عَلَى أَتْقَى قَلْبِ رَجُلٍ وَاحِدٍ مِنْكُمْ، مَا زَادَ ذَلِكَ فِي مُلْكِي شَيْئًا. يَا عِبَادِي، لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوا عَلَى أَفْجَرِ قَلْبِ رَجُلٍ وَاحِدٍ، مَا نَقَصَ ذَلِكَ مِنْ مُلْكِي شَيْئًا. يَا عِبَادِي، لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ قَامُوا فِي صَعِيدٍ وَاحِدٍ فَسَأَلُونِي، فَأَعْطَيْتُ كُلَّ إِنْسَانٍ مَسْأَلَتَهُ، مَا نَقَصَ ذَلِكَ مِمَّا عِنْدِي إِلَّا كَمَا يَنْقُصُ الْمِخْيَطُ إِذَا أُدْخِلَ الْبَحْرَ. يَا عِبَادِي، إِنَّمَا هِيَ أَعْمَالُكُمْ أُحْصِيهَا لَكُمْ، ثُمَّ أُوَفِّيكُمْ إِيَّاهَا، فَمَنْ وَجَدَ خَيْرًا فَلْيَحْمَدِ اللهَ، وَمَنْ وَجَدَ غَيْرَ ذَلِك فَلَا يَلُومَنَّ إِلَّا نَفْسَهُ. رَوَاهُ مُسْلِمٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Zar r.a. daripada Nabi SAW sebagaimana yang diriwayatkan daripada Allah Azza wa Jalla bahawa Dia berfirman: "Wahai hamba-hamba-Ku! Sesungguhnya Aku telah mengharamkan kezaliman ke atas diri-Ku dan Aku meletakkannya sebagai haram di antara kamu, maka janganlah kamu saling menzalimi."
"Wahai hamba-hamba-Ku! Kamu sekalian adalah sesat melainkan orang yang Aku berikan petunjuk, maka mintalah petunjuk daripada-Ku, nescaya Aku akan memberi petunjuk kepada kamu. Wahai hamba-hamba-Ku! Kamu sekalian adalah lapar melainkan orang yang Aku berikan makanan, maka mintalah makanan daripada-Ku, nescaya Aku akan memberi makanan kepada kamu. Wahai hamba-hamba-Ku! Kamu sekalian adalah bertelanjang (tiada pakaian) melainkan orang yang Aku berikan pakaian, maka mintalah pakaian daripada-Ku, nescaya Aku akan memberi pakaian kepada kamu."
"Wahai hamba-hamba-Ku! Sesungguhnya kamu sentiasa melakukan dosa pada waktu malam dan siang, sedangkan Aku mengampunkan segala dosa, maka mintalah keampunan daripada-Ku, nescaya Aku akan mengampunkan kamu. Wahai hamba-hamba-Ku! Sesungguhnya kamu tidak akan mampu mendatangkan mudarat kepada-Ku lalu kamu memudaratkan-Ku, dan kamu tidak akan mampu mendatangkan manfaat kepada-Ku lalu kamu memberi manfaat kepada-Ku. Wahai hamba-hamba-Ku! Sekiranya orang yang awal dan akhir dalam kalangan kamu, manusia dan jin dalam kalangan kamu, semuanya berada pada tingkat hati orang yang paling bertakwa di antara kamu, perkara itu tidak akan menambah sedikit pun dalam kerajaan-Ku. Wahai hamba-hamba-Ku! Sekiranya orang yang awal dan akhir dalam kalangan kamu, manusia dan jin dalam kalangan kamu, semuanya berada pada tingkat hati orang yang paling jahat di antara kamu, perkara itu tidak akan mengurangkan sedikit pun daripada kerajaan-Ku."
"Wahai hamba-hamba-Ku! Sekiranya orang yang awal dan akhir dalam kalangan kamu, manusia dan jin dalam kalangan kamu, berdiri di atas satu tanah lapang lalu memohon (sesuatu) daripada-Ku, kemudian Aku berikan kepada setiap orang apa yang dimohonnya, perkara itu tidak mengurangkan apa yang ada di sisi-Ku melainkan seperti berkurangnya air laut apabila dimasukkan sebatang jarum padanya. Wahai hamba-hamba-Ku! Sesungguhnya ia hanyalah amalan kamu yang Aku hitungkan untuk kamu, kemudian Aku sempurnakan balasan amalan kamu itu. Sesiapa yang mendapati kebaikan maka hendaklah dia memuji Allah, dan sesiapa yang mendapati selain daripada itu maka janganlah dia mencela melainkan dirinya sendiri."`,
        lessons: [
            "Hadis ini sangat penting kerana menghimpunkan tiga perkara besar dalam Islam iaitu pengharaman perbuatan zalim, kepentingan doa yang merupakan intipati utama ibadah kepada Allah SWT, serta penegasan kesempurnaan sifat Allah SWT dan kekuasaan-Nya.",
            "Kezaliman yang dilakukan akan menyebabkan manusia berada dalam kegelapan pada hari akhirat. Rasulullah SAW bersabda, “Takutlah kamu daripada melakukan kezaliman, kerana kezaliman itu (mengakibatkan) kegelapan pada hari kiamat.” (Riwayat Muslim)",
            "Manusia bergantung harap sepenuhnya kepada Allah SWT. Amalan ketaatan atau maksiat sedikit pun tidak menambah atau mengurangkan kemuliaan dan kehebatan Allah SWT.",
            "Umat Islam perlu meyakini bahawa kekuasaan dan perbendaharaan milik Allah SWT adalah sangat sempurna. Jika semua permintaan ditunaikan oleh Allah SWT, ini tidak mengurangkan perbendaharaan-Nya walau sedikit pun.",
            "Setiap amalan manusia sama ada baik atau buruk pasti akan dihitung dan diberikan pembalasannya di akhirat."
        ]
    },

    25: {
        title: "Persaingan dalam Kebaikan",
        description: "Pelbagai amalan seperti zikir, mengajak kepada kebaikan dan mencegah kemungkaran menjadi jalan memperoleh pahala.",
        arabic: `عَنْ أَبِي ذَرٍّ رَضِيَ اللهُ عَنْهُ أَيْضًا أَنَّ نَاسًا مِنْ أَصْحَابِ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالُوا لِلنَّبِيِّ: يَا رَسُولَ اللهِ، ذَهَبَ أَهْلُ الدُّثُورِ بِالأُجُورِ، يُصَلُّونَ كَمَا نُصَلِّي، وَيَصُومُونَ كَمَا نَصُومُ، وَيَتَصَدَّقُونَ بِفُضُولِ أَمْوَالِهِمْ. قَالَ: أَوَلَيْسَ قَدْ جَعَلَ اللهُ لَكُمْ مَا تَصَّدَّقُونَ؟ إِنَّ بِكُلِّ تَسْبِيحَةٍ صَدَقَةً، وَكُلِّ تَكْبِيرَةٍ صَدَقَةً، وَكُلِّ تَحْمِيدَةٍ صَدَقَةً، وَكُلِّ تَهْلِيلَةٍ صَدَقَةً، وَأَمْرٌ بِالْمَعْرُوفِ صَدَقَةٌ، وَنَهْيٌ عَنْ مُنْكَرٍ صَدَقَةٌ، وَفِي بُضْعِ أَحَدِكُمْ صَدَقَةٌ. قَالُوا: يَا رَسُولَ اللهِ، أَيَأْتِي أَحَدُنَا شَهْوَتَهُ وَيَكُونُ لَهُ فِيهَا أَجْرٌ؟ قَالَ: أَرَأَيْتُمْ لَوْ وَضَعَهَا فِي حَرَامٍ، أَكَانَ عَلَيْهِ وِزْرٌ؟ فَكَذَلِكَ إِذَا وَضَعَهَا فِي الْحَلاَلِ، كَانَ لَهُ أَجْرٌ. رَوَاهُ مُسْلِمٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Zar r.a. juga bahawa sekumpulan sahabat Rasulullah SAW telah mengadu kepada Rasulullah SAW. Mereka berkata: "Wahai Rasulullah, golongan kaya telah membolot semua ganjaran pahala. Mereka mengerjakan solat seperti kami, mereka berpuasa seperti kami, namun mereka dapat bersedekah dengan harta kekayaan mereka." Baginda SAW bersabda: "Bukankah Allah telah menjadikan untuk kamu sesuatu yang dapat kamu bersedekah dengannya? Sesungguhnya, setiap lafaz tasbih ialah sedekah, setiap lafaz takbir ialah sedekah, setiap lafaz tahmid ialah sedekah dan setiap lafaz tahlil ialah sedekah. Mengajak kepada kebaikan juga sedekah. Mencegah kemungkaran pun sedekah. Mengadakan hubungan kelamin juga dikira sedekah." Para sahabat bertanya, "Wahai Rasulullah, adakah jika seseorang itu memenuhi kehendak nafsunya pun dia mendapat ganjaran pahala?" Baginda SAW bertanya, "Apa pandangan kamu sekiranya dia melakukannya dengan cara yang haram, bukankah dia akan berdosa? Maka, begitulah juga apabila dia melakukannya dengan cara yang halal pasti dia mendapat pahala."`,
        lessons: [
            "Hadis ini menunjukkan betapa para sahabat sangat berlumba-lumba dalam membuat kebaikan.",
            `Rasulullah SAW menganjurkan agar membanyakkan zikir dengan pelbagai lafaz terutamanya:
            1. Tasbih iaitu Subhanallah
            2. Tahmid iaitu Alhamdulillah
            3. Tahlil iaitu Lailahaillallah
            4. Takbir iaitu Allahuakbar`,
            "Persoalan yang diajukan oleh para sahabat yang miskin tentang keadaan mereka yang tidak mempunyai harta untuk bersedekah bukanlah dalam kategori hasad yang dicela, bahkan merupakan satu contoh berlumba-lumba dalam mengerjakan kebaikan.",
            "Amalan sedekah dalam Islam bukan sahaja melibatkan wang ringgit, bahkan maksudnya sangat luas merangkumi segala bentuk perbuatan baik.",
            "Mengajak ke arah kebaikan dan melarang daripada berbuat kejahatan akan mendapat pahala sedekah."
        ]
    },

    26: {
        title: "Pelbagai Sarana Sedekah",
        description: "Sedekah bukan hanya melalui harta, malah termasuk membantu orang lain, berkata baik dan melakukan kebaikan.",
        arabic: ` عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: "كُلُّ سُلاَمَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ، تَعْدِلُ بَيْنَ الاِثْنَيْنِ صَدَقَةٌ، وَتُعِينُ الرَّجُلَ فِي دَابَّتِهِ فَتَحْمِلُهُ عَلَيْهَا، أَوْ تَرْفَعُ لَهُ عَلَيْهَا مَتَاعَهُ صَدَقَةٌ، وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ، وَبِكُلِّ خُطْوَةٍ تَمْشِيهَا إِلَى الصَّلاَةِ صَدَقَةٌ، وَتُمِيطُ الأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ." رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Hurairah r.a. beliau berkata, Rasulullah SAW bersabda, "Setiap sendi manusia dituntut supaya bersedekah pada setiap kali terbitnya matahari. Perbuatan mendamaikan antara dua orang ialah sedekah dan menolong seseorang untuk naik ke atas binatang tunggangannya atau mengangkat barang ke atas kenderaannya ialah sedekah. Perkataan yang baik adalah sedekah. Setiap langkah yang dimเดินnya untuk pergi menunaikan solat ialah sedekah dan perbuatan mengalihkan perkara yang mengganggu orang ramai dari jalan juga ialah sedekah."
Hadis ini diriwayatkan oleh Imam al-Bukhari dan Imam Muslim.`,
        lessons: [
            "Sedekah boleh dilaksanakan dalam pelbagai bentuk seperti menggunakan kekuatan fizikal, perkataan yang baik, idea, kepakaran dan sebagainya.",
            "Hadis ini juga menunjukkan keutamaan mendamaikan pihak yang berselisih dan dikira mendapat pahala sedekah.",
            "Memberikan pertolongan kepada orang lain ialah perbuatan yang tinggi nilainya di sisi Allah SWT, walaupun sekadar membantu untuk mengangkat barang-barangnya.",
            "Dalam hadis ini juga menjelaskan mengenai keutamaan berjalan kaki ke masjid dan mengalihkan sesuatu yang mendatangkan bahaya kepada orang lain juga dikira mendapat pahala bersedekah."
        ]
    },

    27: {
        title: "Tanda Kebaikan dan Dosa",
        description: "Kebaikan membawa ketenangan jiwa, manakala dosa menimbulkan keresahan dan keraguan dalam hati.",
        arabic: ` عَنْ النَّوَاسِ بْنِ سَمْعَانَ رَضِيَ اللهُ عَنْهُ عَنْ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: الْبِرُّ حُسْنُ الْخُلُقِ، وَالْإِثْمُ مَا حَاكَ فِي نَفْسِكَ، وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ. رَوَاهُ مُسْلِمٌ. وَعَنْ وَابِصَةَ بْنِ مَعْبَدٍ قَالَ: أَتَيْتُ رَسُولَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، فَقَالَ: جِئْتَ تَسْأَلُ عَنْ الْبِرِّ؟ قُلْتُ: نَعَمْ. فَقَالَ: اسْتَفْتِ قَلْبَكَ، الْبِرُّ مَا اطْمَأَنَّتْ إِلَيْهِ النَّفْسُ، وَاطْمَأَنَّ إِلَيْهِ الْقَلْبُ، وَالْإِثْمُ مَا حَاكَ فِي النَّفْسِ وَتَرَدَّدَ فِي الصَّدْرِ، وَإِنْ أَفْتَاكَ النَّاسُ وَأَفْتَوْكَ. حَدِيثٌ حَسَنٌ، رُوَيْنَاهُ فِي مُسْنَدَيِ الْإِمَامَيْنِ أَحْمَدَ بْنِ حَنْبَلٍ وَالدَّارِمِيِّ رَضِيَ اللهُ عَنْهُمَا بِإِسْنَادٍ حَسَنٍ.`,
        translation: `Terjemahan: Daripada Saiyidina al-Nawwas bin Sam'an r.a. bahawa Nabi SAW bersabda: "Kebaikan itu ialah berakhlak mulia. Dosa itu pula ialah sesuatu yang menimbulkan keresahan dalam jiwa dan kamu tidak suka diketahui oleh orang lain." Hadis ini diriwayatkan oleh Imam Muslim. Daripada Saiyidina Wabisah bin Ma'bad r.a. beliau berkata, aku bertemu Rasulullah SAW lalu Baginda SAW bersabda: "Adakah kamu datang untuk bertanya tentang kebaikan?" Aku menjawab, "Ya." Baginda SAW bersabda, "Tanyalah hati kamu sendiri. Kebaikan itu ialah perkara yang membawa ketenangan jiwa dan hati kamu. Dosa itu pula ialah sesuatu yang meresahkan jiwa dan menimbulkan keraguan dalam dada, walaupun orang ramai memberi pandangan berbeza denganmu."
Hadis hasan. Kami merawatkannya dengan sanad hasan daripada dua kitab Musnad, masing-masing merupakan karangan dua orang imam hadis iaitu Imam Ahmad bin Hanbal dan al-Darimi.`,
        lessons: [
            "Akhlak mulia adalah petunjuk kepada suatu penilaian terhadap ketinggian peribadi seseorang.",
            "Akhlak mulia adalah perkara yang paling berat di neraca timbangan amalan.",
            "Dosa menyebabkan hati orang yang beriman gelisah dan resah.",
            "Keruntuhan akhlak mendorong kepada kemusnahan bangsa dan kehancuran tamadun sesebuah negara.",
            "Warak adalah sifat mahmudah yang dituntut pada hati seorang hamba."
        ]
    },

    28: {
        title: "Pesanan Takwa, Taat dan Iltizam dengan Sunah",
        description: "Berpegang teguh pada takwa, ketaatan dan sunah Rasulullah SAW serta menjauhi perkara yang bercanggah dengannya.",
        arabic: ` عَنْ أَبِي نَجِيحٍ العِرْبَاضِ بْنِ سَارِيَةَ رَضِيَ اللهُ تَعَالَى عَنْهُ قَالَ: وَعَظَنَا رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مَوْعِظَةً وَجِلَتْ مِنْهَا القُلُوبُ، وَذَرَفَتْ مِنْهَا العُيُونُ، فَقُلْنَا: يَا رَسُولَ اللهِ، كَأَنَّهَا مَوْعِظَةُ مُوَدِّعٍ فَأَوْصِنَا. قَالَ: أُوصِيكُمْ بِتَقْوَى اللهِ، وَالسَّمْعِ وَالطَّاعَةِ وَإِنْ تَأَمَّرَ عَلَيْكُمْ عَبْدٌ، فَإِنَّهُ مَنْ يَعِشْ مِنْكُمْ فَسَيَرَى اخْتِلاَفًا كَثِيرًا، فَعَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الخُلَفَاءِ الرَّاشِدِينَ المَهْدِيِّينَ، عَضُّوا عَلَيْهَا بِالنَّوَاجِذِ، وَإِيَّاكُمْ وَمُحْدَثَاتِ الأُمُورِ، فَإِنَّ كُلَّ بِدْعَةٍ ضَلاَلَةٌ. رَوَاهُ أَبُو دَاوُدَ وَالتِّرْمِذِيُّ وَقَالَ: حَدِيثٌ حَسَنٌ صَحِيحٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Najih al-'Irbad bin Sariyah r.a., beliau berkata, Rasulullah SAW telah menyampaikan kepada kami mau'izah (peringatan) yang menggetarkan hati dan menitiskan air mata. Maka, kami berkata: "Wahai Rasulullah, ini seolah-olah ucapan perpisahan. Maka, berilah kami wasiat (pesanan penting)." Baginda SAW bersabda: "Aku mewasiatkan kamu supaya bertakwa kepada Allah serta dengar dan taat kepada pemimpin walaupun yang menjadi pemimpin kamu seorang hamba. Sesungguhnya sesiapa dalam kalangan kamu yang terus hidup (selepas kewafatanku), maka dia akan melihat banyak perselisihan yang berlaku. Oleh itu, hendaklah kamu berpegang teguh dengan sunahku dan sunah al-Khulafa al-Rasyidin yang diberi petunjuk dan gigitlah dengan gigi geraham. Hindarilah perkara yang direka-reka dalam agama (bidaah) kerana setiap bidaah (yang bertentangan dengan asas syariat) ialah sesat."`,
        lessons: [
            "Kelaziman berpegang teguh kepada al-Quran dan al-Sunah terutama ketika berlaku perselisihan dan perpecahan.",
            "Melakukan perkara yang tidak ada asas dalam agama akan mengakibatkan amalan tidak diterima oleh Allah SWT.",
            "Ketakwaan kepada Allah SWT, menghindari perkara maksiat, taat dan patuh kepada pemimpin selagi tidak menyeru kepada melakukan perbuatan mungkar merupakan faktor kebahagiaan hidup di dunia dan akhirat.",
            "Peringatan yang disampaikan dengan berhikmah dan ikhlas boleh memberi kesan kepada orang yang mendengar."
        ]
    },

    29: {
        title: "Jalan ke Syurga",
        description: "Menjelaskan amalan yang membawa ke syurga, termasuk ibadah, ketaatan dan menjaga lidah.",
        arabic: ` عَنْ مُعَاذِ بْنِ جَبَلٍ رَضِيَ اللهُ عَنْهُ قَالَ: قُلْتُ يَا رَسُولَ اللهِ، أَخْبِرْنِي بِعَمَلٍ يُدْخِلُنِي الجَنَّةَ، وَيُبَاعِدُنِي مِنَ النَّارِ، قَالَ: لَقَدْ سَأَلْتَ عَنْ عَظِيمٍ، وَإِنَّهُ لَيَسِيرٌ عَلَى مَنْ يَسَّرَهُ اللهُ تَعَالَى عَلَيْهِ: تَعْبُدُ اللهَ لاَ تُشْرِكُ بِهِ شَيْئًا، وَتُقِيمُ الصَّلاَةَ، وَتُؤْتِي الزَّكَاةَ، وَتَصُومُ رَمَضَانَ، وَتَحُجُّ البَيْتَ. ثُمَّ قَالَ: أَلاَ أَدُلُّكَ عَلَى أَبْوَابِ الخَيْرِ؟ الصَّوْمُ جُنَّةٌ، وَالصَّدَقَةُ تُطْفِئُ الخَطِيئَةَ كَمَا يُطْفِئُ المَاءُ النَّارَ، وَصَلاَةُ الرَّجُلِ مِنْ جَوْفِ اللَّيْلِ. ثُمَّ تَلاَ: ﴿تَتَجَافَى جُنُوبُهُمْ عَنِ المَضَاجِعِ﴾ حَتَّى بَلَغَ ﴿يَعْمَلُونَ﴾. 
         ثُمَّ قَالَ: أَلاَ أُخْبِرُكَ بِرَأْسِ الأَمْرِ وَعَمُودِهِ وَذِرْوَةِ سَنَامِهِ؟ قُلْتُ: بَلَى، يَا رَسُولَ اللهِ. قَالَ: رَأْسُ الأَمْرِ الإِسْلاَمُ، وَعَمُودُهُ الصَّلاَةُ، وَذِرْوَةُ سَنَامِهِ الجِهَادُ. ثُمَّ قَالَ: أَلاَ أُخْبِرُكَ بِمَلاَكِ ذَلِك كُلِّهِ؟ قُلْتُ: بَلَى، يَا رَسُولَ اللهِ. فَأَخَذَ بِلِسَانِهِ ثُمَّ قَالَ: كُفَّ عَلَيْكَ هَذَا. قُلْتُ: يَا نَبِيَّ اللهِ، وَإِنَّا لَمُؤَاخَذُونَ بِمَا نَتَكَلَّمُ بِهِ؟ فَقَالَ: ثَكِلَتْكَ أُمُّكَ! وَهَلْ يَكُبُّ النَّاسَ فِي النَّارِ عَلَى وُجُوهِهِمْ—أَوْ: عَلَى مَنَاخِرِهِمْ—إِلاَّ حَصَائِدُ أَلْسِنَتِهِمْ؟ رَوَاهُ التِّرْمِذِيُّ وَقَالَ: حَدِيثٌ حَسَنٌ صَحِيحٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Mu'az bin Jabal r.a berkata: "Aku bertanya, "Wahai Rasulullah, beritahulah kepadaku amalan yang dapat memasukkan aku ke dalam syurga dan menjauhkan aku daripada neraka." Baginda SAW bersabda: "Sesungguhnya, kamu telah bertanya tentang perkara yang amat besar. Namun, sebenarnya ia mudah bagi sesiapa yang dimudahkan oleh Allah SWT. Kamu menyembah Allah Taala, tidak menyekutukan-Nya dengan sesuatu apa pun, mendirikan solat, mengeluarkan zakat, berpuasa pada bulan Ramadan dan mengerjakan haji di Baitullah."
        Kemudian Baginda SAW bersabda: "Mahukah aku tunjukkan kepadamu pintu-pintu kebaikan? Puasa itu perisai, sedekah itu menghapuskan dosa sebagaimana air memadamkan api dan solat seseorang yang didirikan pada tengah malam." Kemudian Baginda membacakan ayat: (Teta-jaafa junuubuhum 'anil-madaaji'i) sehingga sampai (ya'maluun).
        Kemudian Baginda bersabda: "Mahukah aku beritahu kepadamu pokok bagi urusan agama, tiangnya dan kemuncak kegemilangannya?" Aku menjawab: "Bahkan, wahai Rasulullah." Baginda bersabda: "Pokok bagi urusan agama ialah Islam, tiangnya ialah solat dan kemuncak kegemilangannya ialah jihad." Kemudian Baginda bersabda: "Mahukah aku beritahu kepadamu pemelihara (kunci) bagi semua perkara tersebut?" Aku menjawab: "Bahkan, wahai Rasulullah." Lalu Baginda memegang lidahnya kemudian bersabda: "Jagalah ini." Aku bertanya: "Wahai Nabi Allah, adakah kita akan dihukum disebabkan apa yang kita tuturkan?" Baginda bersabda: "Ibumu kehilanganmu (ungkapan hairan)! Bukankah manusia disungkurkan wajah mereka—atau hidung mereka—ke dalam neraka melainkan disebabkan oleh hasil tuaian lidah mereka?"`,
        lessons: [
            "Tanggungjawab utama bagi seorang Muslim ialah menyembah Allah SWT Yang Maha Esa dan tidak menyekutukan-Nya.",
            "Allah SWT menurunkan rahmat dengan begitu luas kepada hamba-Nya dengan membuka pintu kebaikan untuk meraih pahala dan keampunan dosa.",
            "Sifat yang terpuji sebagai seorang hamba ialah mengutamakan perintah Allah SWT melebihi kepentingan diri sendiri.",
            "Rasulullah SAW memberi peringatan supaya sentiasa memelihara lidah. Setiap perkataan yang dituturkan akan dipersoalkan di hadapan Allah SWT."
        ]
    },

    30: {
        title: "Larangan Melampaui Batasan Syarak",
        description: "Menunaikan kewajipan, mematuhi batasan syarak dan menjauhi perkara yang diharamkan.",
        arabic: ` عَنْ أَبِي ثَعْلَبَةَ الْخُشَنِيِّ جُرْثُومِ بْنِ نَاشِرٍ رَضِيَ اللهُ عَنْهُ، عَنْ رَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: "إِنَّ اللهَ تَعَالَى فَرَضَ فَرَائِضَ فَلَا تُضَيِّعُوهَا، وَحَدَّ حُدُودًا فَلَا تَعْتَدُوهَا، وَحَرَّمَ أَشْيَاءَ فَلَا تَنْتَهِكُوهَا، وَسَكَتَ عَنْ أَشْيَاءَ رَحْمَةً لَكُمْ غَيْرَ نِسْيَانٍ فَلَا تَبْحَثُوا عَنْهَا." حَدِيثٌ حَسَنٌ، رَوَاهُ الدَّارَقُطْنِيُّ وَغَيْرُهُ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Tha'labah al-Khusyani Jurthum bin Nasyir r.a., bahawa Rasulullah SAW bersabda: "Sesungguhnya, Allah Taala telah menetapkan perkara fardu, maka janganlah kamu mengabaikannya. Dia telah meletakkan batasan (syarak), maka janganlah kamu melampauinya. Dia telah mengharamkan beberapa perkara, maka janganlah kamu melanggarnya. Dia telah diam daripada (menerangkan hukum) beberapa perkara sebagai rahmat kepada kamu, bukannya kerana terlupa, maka janganlah kamu bertanya (sehingga menimbulkan kesukaran)."`,
        lessons: [
            "Mengamalkan segala bentuk kefarduan dan meninggalkan larangan dalam agama akan memudahkan jalan ke syurga.",
            "Allah SWT bersifat Maha Mengetahui dan tidak ada sebarang amalan hamba yang terlepas daripada pengetahuan dan perhitungan-Nya.",
            "Allah SWT telah mewajibkan beberapa kefarduan yang mempunyai pelbagai hikmah dan dijanjikan ganjaran yang besar kepada pelakunya.",
            "Umat Islam hendaklah melaksanakan kewajipan dengan sebaik mungkin iaitu menunaikan solat dengan sempurna pada rukun dan syarat, menunaikannya pada waktu yang ditetapkan dan tidak menokok tambah apa yang telah ditetapkan syarak.",
            "Sesuatu hukum yang tidak dinyatakan merupakan rahmat Allah SWT kepada manusia. Hal ini memberi peluang kepada ulama untuk berijtihad mengikut keperluan semasa."
        ]
    },

    31: {
        title: "Konsep dan Faedah Zuhud",
        description: "Zuhud terhadap dunia dan perkara yang dimiliki orang lain menjadi sebab memperoleh kasih sayang Allah dan manusia.",
        arabic: ` عَنْ أَبِي العَبَّاسِ سَهْلِ بْنِ سَعْدٍ السَّاعِدِيِّ رَضِيَ اللهُ عَنْهُ قَالَ: جَاءَ رَجُلٌ إِلَى النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: يَا رَسُولَ اللهِ، دُلَّنِي عَلَى عَمَلٍ إِذَا عَمِلْتُهُ أَحَبَّنِيَ اللهُ وَأَحَبَّنِيَ النَّاسُ. فَقَالَ: "ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللهُ، وَازْهَدْ فِيمَا عِنْدَ النَّاسِ يُحِبَّكَ النَّاسُ." حَدِيثٌ حَسَنٌ، رَوَاهُ ابْنُ مَاجَه وَغَيْرُهُ بِأَسَانِيدَ حَسَنَةٍ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu al-'Abbas Sahl bin Sa'ad al-Sa'idi r.a. beliau berkata, seorang sahabat telah datang kepada Nabi SAW seraya berkata: "Wahai Rasulullah, tunjukkan kepadaku suatu amalan yang apabila aku mengamalkannya aku akan dicintai oleh Allah dan juga manusia." Maka Baginda SAW bersabda: "Zuhudlah dalam perkara dunia nescaya kamu akan dicintai oleh Allah dan zuhudlah terhadap apa-apa yang ada pada manusia nescaya manusia akan menyukai kamu."`,
        lessons: [
            "Kasih sayang sesama manusia hendaklah kerana Allah SWT bukan kerana harta, pangkat dan darjat.",
            "Keterlaluan dalam mencintai dunia boleh membawa kepada kelalaian dan dosa.",
            "Seorang hamba akan memperoleh cinta Allah SWT apabila dia mengutamakan Allah SWT melebihi cinta kepada dunia."
        ]
    },

    32: {
        title: "Menghindari Mudarat",
        description: "Islam melarang perbuatan yang memudaratkan diri sendiri atau orang lain.",
        arabic: ` عَنْ أَبِي سَعِيدٍ سَعْدِ بْنِ مَالِكِ بْنِ سِنَانٍ الْخُدْرِيِّ رَضِيَ اللهُ عَنْهُ أَنَّ رَسُولَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: "لَا ضَرَرِ وَلَا ضِرَارَ." حَدِيثٌ حَسَنٌ، رَوَاهُ ابْنُ مَاجَه وَالدَّارَقُطْنِيُّ وَغَيْرُهُمَا مُسْنَدًا. وَرَوَاهُ مَالِكٌ رَحِمَهُ اللهُ تَعَالَى فِي الْمُوَطَّأِ عَنْ عَمْرِو بْنِ يَحْيَى عَنْ أَبِيهِ عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مُرْسَلًا، فَأَسْقَطَ أَبَا سَعِيدٍ، وَلَهُ طُرُقٌ يُقَوِّي بَعْضُهَا بَعْضًا.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Said Sa'ad bin Malik bin Sinan al-Khudri r.a. bahawa Rasulullah SAW bersabda, "Tidak boleh memudaratkan diri sendiri dan tidak boleh memudaratkan orang lain."
Hadis hasan. Diriwayatkan oleh Imam Ibn Majah, al-Daraqutni dan imam yang lain secara musnad.
Manakala Imam Malik meriwatkatkannya dalam kitab al-Muwatta' daripada 'Amr bin Yahya daripada ayahya daripada Nabi SAW secara mursal. Imam Malik telah menggugurkan Saiyidina Abu Said daripada jalur sanad. Namun, hadis ini mempunyai pelbagai jalur riwayat, sebahagiannya menguatkan sebahagian yang lain.`,
        lessons: [
            "Hakikatnya, tiada kesusahan dan kemudaratan dalam syariat Islam. Setiap suruhan Allah SWT mendatangkan banyak manfaat manakala sebarang larangan mempunyai banyak kemudaratan kepada diri, masyarakat dan negara.",
            "Orang yang zalim berkemungkinan menjadi muflis di akhirat kerana pahalanya akan diberi kepada orang yang dizalimi. Bahkan, dosa orang yang dizalimi akan ditanggung oleh orang yang zalim sekiranya kehabisan pahala.",
            "Berusahalah untuk mencegah kemudaratan daripada berlaku dan menghilangkan kemudaratan yang sedang berlaku.",
            "Kita perlu sentiasa berlaku belas kasihan sesama manusia, kepada haiwan dan tumbuh-tumbuhan."
        ]
    },

    33: {
        title: "Asas Penghakiman dalam Islam",
        description: "Sesuatu dakwaan perlu disertakan bukti, manakala pihak yang menafikan dakwaan perlu bersumpah.",
        arabic: ` عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللهُ عَنْهُمَا أَنَّ رَسُولَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: "لَوْ يُعْطَى النَّاسُ بِدَعْوَاهُمْ لَادَّعَى رِجَالٌ أَمْوَالَ قَوْمٍ وَدِمَاءَهُمْ، لَكِنِ الْبَيِّنَةُ عَلَى الْمُدَّعِي، وَالْيَمِينُ عَلَى مَنْ أَنْكَرَ." حَدِيثٌ حَسَنٌ، رَوَاهُ الْبَيْهَقِيُّ وَغَيْرُهُ هَكَذَا، وَبَعْضُهُ فِي الصَّحِيحَيْنِ.`,
        translation: `Daripada Saiyidina Ibn 'Abbas r.a. bahawa Rasulullah SAW bersabda, "Sekiranya sesiapa sahaja dibenarkan tuntutannya berdasarkan dakwaan semata-mata, nescaya ramai orang akan menuntut harta orang lain dan berhadapan terhadap nyawa. Akan tetapi, pihak yang mendakwa mesti mengemukakan bukti dan pihak yang menafikan dakwaan pula mesti bersumpah."
Hadis hasan. Diriwayatkan oleh Imam al-Baihaqi dan imam yang lain seperti lafaz yang dinyatakan. Sebahagian lafaz hadis ini diriwayatkan dalam Sahih al-Bukhari dan Sahih Muslim.
`,
        lessons: [
            "Kita hendaklah menyedari bahawa Islam amat mengambil berat tentang kemuliaan insan, integriti, hak terhadap harta benda dan nyawa.",
            "Menjaga batasan dan akur dengan peraturan dapat menjamin kerukunan hidup bermasyarakat dan keamanan negara.",
            "Kita ditegah daripada mengambil hak orang lain secara salah.",
            "Setiap individu dididik agar mencari kebenaran sekalipun dalam sekecil-kecil perkara.",
            "Setiap dakwaan mestilah disertakan dengan bukti yang menyokong dakwaan tersebut. Oleh itu, jangan menuduh seseorang melakukan apa jua salah laku tanpa bukti.",
            "Sumpah diakui sebagai kaedah mempertahankan diri apabila dituduh."
        ]
    },

    34: {
        title: "Tanggungjawab Mengubah Kemungkaran",
        description: "Kemungkaran hendaklah diubah mengikut kemampuan melalui tindakan, perkataan atau hati.",
        arabic: ` عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ رَضِيَ اللهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: "مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الْإِيمَانِ." رَوَاهُ مُسْلِمٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Sa'id al-Khudri r.a. berkata, "Aku mendengar Rasulullah SAW bersabda, "Sesiapa dalam kalangan kamu melihat sesuatu kemungkaran, maka hendaklah dia mengubahnya dengan tangan. Sekiranya dia tidak mampu, maka hendaklah dia mengubahnya dengan lidah. Sekiranya dia tidak mampu, maka hendaklah dia mengubahnya dengan hati. Demikian itu selemah-lemah iman."
Hadis ini diriwayatkan oleh Imam Muslim.
`,
        lessons: [
            "Kita perlu mengajak kepada kebaikan dan mencegah kemungkaran dengan penuh tanggungjawab, sambil memberi nasihat dengan perkataan yang lembut dan sopan.",
            "Setiap individu berhak menyampaikan seruan dakwah sesuai dengan kemampuannya. Dakwah harus disampaikan dengan penuh hikmah, disertai nasihat yang benar dan tidak menggunakan cara yang dilarang oleh agama.",
            "Selalu berdoa untuk kebaikan diri sendiri, keluarga dan umat Islam.",
            "Kita hendaklah menyediakan perancangan yang teratur dan berstrategik dalam melaksanakan amar makruf dan nahi mungkar."
        ]
    },

    35: {
        title: "Hak Persaudaraan Sesama Muslim",
        description: "Umat Islam hendaklah menjauhi permusuhan dan menjaga kehormatan, harta serta hak sesama Muslim.",
        arabic: ` عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: "لَا تَحَاسَدُوا وَلَا تَنَاجَشُوا وَلَا تَبَاغَضُوا وَلَا تَدَابَرُوا وَلَا يَبِعْ بَعْضُكُمْ عَلَى بَيْعِ بَعْضٍ، وَكُونُوا عِبَادَ اللهِ إِخْوَانًا. الْمُسْلِمُ أَخُو الْمُسْلِمِ، لَا يَظْلِمُهُ وَلَا يَخْذُلُهُ وَلَا يَكْذِبُهُ وَلَا يَحْقِرُهُ. التَّقْوَى هَاهُنَا—وَيُشِيرُ إِلَى صَدْرِهِ ثَلَاثَ مِرَارٍ—بِحَسْبِ امْرِئٍ مِنَ الشَّرِّ أَنْ يَحْقِرَ أَخَاهُ الْمُسْلِمَ. كُلُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ حَرَامٌ: دَمُهُ وَمَالُهُ وَعِرْضُهُ. رَوَاهُ مُسْلِمٌ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Hurairah r.a. berkata, Rasulullah SAW bersabda, "Janganlah kamu saling berdengki. Janganlah kamu saling menipu dan memperdaya. Janganlah kamu saling membenci. Janganlah kamu saling memulaukan antara satu sama lain. Janganlah sebahagian kamu memintas jualan orang lain. Jadilah kamu para hamba Allah yang bersaudara. Setiap Muslim ialah saudara kepada Muslim yang lain. Dia tidak boleh menzalimi, mengabaikan, membohongi atau menghinanya. Takwa itu di sini."
(Perawi berkata:) "Baginda SAW mengisyaratkan ke dadanya tiga kali."
"Sudah dianggap buruk apabila seseorang memandang rendah kepada saudara Muslim. Haram bagi setiap Muslim menumpahkan darah saudaranya, mengambil harta atau mencemarkan maruahnya."`,
        lessons: [
            "Rasulullah SAW berpesan agar umat Islam prihatin terhadap hubungan sesama manusia kerana merupakan ibadah yang dituntut dalam Islam.",
            "Umat Islam ialah umat yang memberi manfaat kepada semua manusia tanpa melihat latar belakang agama.",
            "Hadis ini adalah berkaitan prinsip hidup berakhlak. Akhlak yang mulia menyempurnakan akidah dan syariat. Ini perlu dipupuk bagi menjamin kesejahteraan hidup bermasyarakat."
        ]
    },

    36: {
        title: "Menunaikan Keperluan Saudara Muslim dan Keutamaan Ilmu",
        description: "Membantu orang yang kesusahan, menutup keaiban, menuntut ilmu dan mempelajari al-Quran membawa ganjaran besar.",
        arabic: `
عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ. وَمَنْ يَسَّرَ عَلَى مُعْسِرٍ يَسَّرَ اللَّهُ عَلَيْهِ فِي الدُّنْيَا وَالْآخِرَةِ. وَمَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ. وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ. وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ. وَمَا اجْتَمَعَ قَوْمٌ فِي بَيْتٍ مِنْ بُيُوتِ اللَّهِ يَتْلُونَ كِتَابَ اللَّهِ وَيَتَدَارَسُونَهُ بَيْنَهُمْ إِلَّا نَزَلَتْ عَلَيْهِمُ السَّكِينَةُ، وَغَشِيَتْهُمُ الرَّحْمَةُ، وَحَفَّتْهُمُ الْمَلَائِكَةُ، وَذَكَرَهُمُ اللَّهُ فِيمَنْ عِنْدَهُ. وَمَنْ بَطَّأَ بِهِ عَمَلُهُ لَمْ يُسْرِعْ بِهِ نَسَبُهُ.
رَوَاهُ مُسْلِمٌ بِهَذَا اللَّفْظِ.
`,
        translation: `Terjemahan: Daripada Saiyidina Abu Hurairah r.a bahawa Nabi SAW bersabda, "Sesiapa yang melapangkan kesempitan dunia seorang mukmin, Allah akan melapangkan kesempitannya pada hari kiamat. Sesiapa yang mempermudah urusan orang yang dalam kesusahan, Allah akan mempermudah urusannya di dunia dan akhirat. Sesiapa yang menutup keaiban saudara Muslim, Allah akan menutup keaibannya di dunia dan akhirat. Allah akan sentiasa membantu hamba-Nya selagi dia membantu saudaranya. Sesiapa yang menempuh suatu jalan untuk menuntut ilmu, 
        maka Allah akan mempermudah baginya jalan ke syurga dengan ilmu tersebut. Tidak berhimpun sekumpulan Muslim dalam mana-mana rumah Allah dalam keadaan membaca dan mempelajari al-Quran sesama mereka melainkan ketenangan akan turun kepada mereka, rahmat akan meliputi mereka, para malaikat akan menaungi mereka dan Allah akan menyebut perihal mereka kepada para makhluk di sisi-Nya. Sesiapa yang amal solehnya sedikit, maka nasab keturunan tidak boleh mengangkat darjatnya."`,
        lessons: [
            "Hadis ini adalah sebagai satu galakan untuk bersegera membantu orang yang berada dalam kesusahan, memudahkan perkara yang susah dan menutup keaiban orang lain.",
            "Seseorang yang membantu orang lain, hakikatnya dia sedang membantu dirinya sendiri. Tiada istilah rugi dalam membantu orang lain tetapi sebaliknya ketenangan dan kebahagiaan yang akan diperoleh di dunia dan di akhirat.",
            "Melalui ilmu pengetahuan, seseorang itu mampu mengubah cara pandang dan gaya hidupnya ke arah yang lebih baik. Dengan ilmu juga kita mampu menjadi manusia yang bertakwa apabila mengamalkan ilmu tersebut."
        ]
    },

    37: {
        title: "Rahmat Allah SWT Berkaitan Pahala dan Dosa",
        description: "Allah melipatgandakan ganjaran kebaikan dan menetapkan balasan dengan rahmat serta keadilan-Nya.",
        arabic: ` عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا، عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِيمَا يَرْوِيهِ عَنْ رَبِّهِ تَبَارَكَ وَتَعَالَى قَالَ: إِنَّ اللَّهَ تَعَالَى كَتَبَ الْحَسَنَاتِ وَالسَّيِّئَاتِ، ثُمَّ بَيَّنَ ذَلِكَ. فَمَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللَّهُ عِنْدَهُ عَشْرَ حَسَنَاتٍ إِلَى سَبْعِ مِائَةِ ضِعْفٍ إِلَى أَضْعَافٍ كَثِيرَةٍ.
         وَإِنْ هَمَّ بِسَيِّئَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللَّهُ سَيِّئَةً وَاحِدَةً. رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ فِي صَحِيحَيْهِمَا بِهَذِهِ الْحُرُوفِ. فَانْظُرْ يَا أَخِي، وَفَّقَنَا اللَّهُ وَإِيَّاكَ إِلَى عِظَمِ لُطْفِ اللَّهِ تَعَالَى، وَتَأَمَّلْ هَذِهِ الْأَلْفَاظَ. وَقَوْلُهُ (عِنْدَهُ): إِشَارَةٌ إِلَى الْاِعْتِنَاءِ بِهَا. وَقَوْلُهُ (كَامِلَةً): لِلتَّأْكِيدِ وَشِدَّةِ الْاِعْتِنَاءِ بِهَا. وَقَالَ فِي السَّيِّئَةِ الَّتِي هَمَّ بِهَا ثُمَّ تَرَكَهَا (كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً)، فَأَكَّدَهَا بـ(كَامِلَةً). وَإِنْ عَمِلَهَا كَتَبَهَا اللَّهُ سَيِّئَةً وَاحِدَةً فَأَكَّدَ تَقْلِيلَهَا بـ(وَاحِدَةً) وَلَمْ يُؤَكِّدْهَا بـ(كَامِلَةً) فَلِلَّهِ الْحَمْدُ وَالْمِنَّةُ سُبْحَانَهُ لَا نُحْصِي ثَنَاءً عَلَيْهِ وَبِاللَّهِ التَّوْفِيقُ.`,
        translation: `Terjemahan: Daripada Saiyidina Ibn ‘Abbas r.a bahawa Rasulullah SAW meriwayatkan hadis Qudsi daripada Tuhannya, Baginda SAW bersabda, “Sesungguhnya, Allah telah (memerintahkan malaikat) menulis segala kebaikan dan kejahatan. Kemudian, Dia menerangkan hal tersebut. Sesiapa yang berniat melakukan suatu kebaikan tetapi dia tidak menyempurnakan niatnya, maka Allah menetapkan untuknya satu kebaikan yang sempurna. Sekiranya dia berniat melakukan kebaikan lalu dia mengerjakannya, maka Allah akan menetapkan untuknya sepuluh kebaikan (dan digandakan) sehingga 700 kali ganda, bahkan sehingga gandaan yang tidak terkira banyaknya.
        Sekiranya dia berniat untuk melakukan kejahatan tetapi dia tidak melakukannya, maka Allah menetapkan untuknya satu kebaikan yang sempurna. Sekiranya dia berniat melakukan kejahatan lalu dia melakukannya, maka Allah akan menetapkan untuknya satu dosa sahaja.” Hadis ini diriwayatkan oleh Imam al-Bukhari dan Muslim dalam kitab sahih mereka dengan lafaz-lafaz ini secara tepat.`,
        lessons: [
            "Seorang Muslim sentiasa berniat untuk melakukan kebaikan agar beroleh pahala kebaikan.",
            "Seorang Muslim yang meninggalkan maksiat dengan ikhlas dan taat kepada Allah SWT akan mendapat ganjaran pahala.",
            "Ketentuan balasan baik dan buruk adalah daripada Allah SWT. Pahala dan dosa juga hak milik Allah SWT."
        ]
    },

    38: {
        title: "Kedudukan Wali Allah SWT",
        description: "Mendekatkan diri kepada Allah melalui kewajipan dan amalan sunat menjadi sebab memperoleh kasih sayang-Nya.",
        arabic: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنَّ اللَّهَ تَعَالَى قَالَ: مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ، وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُهُ عَلَيْهِ، وَمَا يَزَالُ عَبْدِي يَتَقَرَّبُ إِلَيَّ بِالنَّوَافِلِ حَتَّى أُحِبَّهُ، فَإِذَا أَحْبَبْتُهُ كُنْتُ سَمْعَهُ الَّذِي يَسْمَعُ بِهِ، وَبَصَرَهُ الَّذِي يُبْصِرُ بِهِ، وَيَدَهُ الَّتِي يَبْطِشُ بِهَا، وَرِجْلَهُ الَّتِي يَمْشِي بِهَا، وَلَئِنْ سَأَلَنِي لأُعْطِيَنَّهُ، وَلَئِنْ اسْتَعَاذَنِي لأُعِيذَنَّهُ. رَوَاهُ الْبُخَارِيُّ.`,
        translation: `Terjemahan: Daripada Saiyidina Abu Hurairah r.a. beliau berkata, Rasulullah SAW bersabda: "Sesungguhnya Allah SWT berfirman, 'Sesiapa yang memusuhi mana-mana wali-Ku, maka Aku mengisytiharkan perang terhadapnya. Tiada perkara yang hamba-Ku lakukan untuk menghampirkan dirinya kepada-Ku yang lebih Aku sukai daripada perkara yang Aku fardukan kepadanya. Hamba-Ku sentiasa menghampirkan dirinya kepada-Ku melalui amalan sunat sehinggalah Aku mengasihinya. Apabila Aku mengasihinya, maka Aku akan menjadi pendengaran yang dia mendengar dengannya. Aku akan menjadi penglihatan yang dia melihat dengannya. Aku akan menjadi tangan yang dia bertindak dengannya. Aku akan menjadi kaki yang dia berjalan dengannya. Demi sesungguhnya, jika dia meminta sesuatu daripada-Ku, pasti Aku akan mengurniakannya dan jika dia meminta perlindungan daripada-Ku, pasti Aku akan melindunginya.'"`,
        lessons: [
            "Wali Allah SWT mendapat kedudukan yang tinggi di sisi-Nya dan merupakan golongan yang wajib dikasihi.",
            "Allah SWT memberi amaran keras kepada golongan yang memusuhi wali Allah SWT.",
            "Hamba Allah SWT hendaklah menggunakan seluruh anggotanya untuk mentaati perintah Allah SWT dan menjauhi segala larangan-Nya.",
            "Setiap Muslim yang istiqamah dalam melaksanakan ketaatan akan dikurniakan doa yang mustajab oleh Allah SWT."
        ]
    },

    39: {
        title: "Kesalahan yang Dimaafkan",
        description: "Kesalahan akibat terlupa, tersilap dan paksaan termasuk perkara yang dimaafkan oleh Allah terhadap umat ini.",
        arabic: `عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: إِنَّ اللَّهَ تَجَاوَزَ لِي عَنْ أُمَّتِي الْخَطَأَ وَالنِّسْيَانَ وَمَا اسْتُكْرِهُوا عَلَيْهِ. 
حَدِيثٌ حَسَنٌ، رَوَاهُ ابْنُ مَاجَهْ وَالْبَيْهَقِيُّ وَغَيْرُهُمَا. `,
        translation: `Terjemahan: Daripada Saiyidina Ibn ‘Abbas r.a. bahawa Rasulullah SAW bersabda: “Sesungguhnya, kerana aku, Allah memaafkan kesalahan umatku yang dilakukan secara tersilap, terlupa atau dipaksa.” 
Hadis hasan. Diriwayatkan oleh Imam Ibn Majah, Imam al-Baihaqi dan imam yang lain. `,
        lessons: [
            "Maksiat yang dilakukan secara sengaja adalah dosa.",
            "Perbuatan tersalah kerana lupa, tidaklah menyebabkan dosa.",
            "Allah Maha Pengampun dan Maha Menyayangi hamba-Nya.",
            "Seorang mukmin yang baik sedia memaafkan kesalahan orang lain kerana sifat terpuji."
        ]
    },

    40: {
        title: "Merebut Peluang Beramal",
        description: "Menganggap kehidupan dunia sebagai persinggahan dan memanfaatkan kesihatan serta masa sebelum terlambat.",
        arabic: `
عَنْ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: أَخَذَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بِمَنْكِبِيَّ فَقَالَ: كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ. وَكَانَ ابْنُ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا يَقُولُ: إِذَا أَمْسَيْتَ فَلَا تَنْتَظِرِ الصَّبَاحَ، وَإِذَا أَصْبَحْتَ فَلَا تَنْتَظِرِ الْمَسَاءَ، وَخُذْ مِنْ صِحَّتِكَ لِمَرَضِكَ، وَمِنْ حَيَاتِكَ لِمَوْتِكَ.
رَوَاهُ الْبُخَارِيُّ.`,
        translation: `Terjemahan: Daripada Saiyidina Ibn Umar r.a. katanya, "Rasulullah SAW memegang bahuku lalu bersabda: 'Hiduplah kamu di dunia ini seperti orang asing atau musafir.'" 
Ibn Umar r.a. berkata, "Apabila kamu berada pada waktu petang, janganlah kamu menanti pagi. Apabila kamu berada pada waktu pagi, janganlah kamu menanti petang. Rebutlah peluang sihatmu, sebelum sakitmu dan rebutlah peluang hidupmu sebelum kematianmu." `,
        lessons: [
            "Dunia bukanlah tempat tinggal yang hakiki, kerana ia sebuah persinggahan dan jambatan menuju negeri akhirat yang kekal abadi.",
            "Orang yang tahu menilai waktu dan masa tidak akan melepaskan peluang keemasan untuk mencari sebanyak mungkin bekalan untuk dibawa ke akhirat.",
            "Beramal sebelum datangnya waktu kesusahan, kesempitan, kesakitan apatah lagi kematian yang tidak diketahui masanya dengan memanfaatkan umur, waktu dan tenaga.",
            "Berhati-hati dengan tipu daya dunia terutama pada zaman kini yang amat mencabar keimanan dan kekuatan amal seseorang."
        ]
    },

    41: {
        title: "Keutamaan Sunah Nabi SAW",
        description: "Kesempurnaan iman menuntut seseorang menyesuaikan keinginannya dengan ajaran yang dibawa oleh Rasulullah SAW.",
        arabic: `
عَنْ أَبِي مُحَمَّدٍ عَبْدِ اللَّهِ بْنِ عَمْرِو بْنِ الْعَاصِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يَكُونَ هَوَاهُ تَبَعًا لِمَا جِئْتُ بِهِ.
حَدِيثٌ صَحِيحٌ، رُوَيْنَاهُ فِي كِتَابِ "الْحُجَّةِ" بِإِسْنَادٍ صَحِيحٍ.
`,
        translation: `Terjemahan: Daripada Saiyidina Abu Muhammad Abdullah bin ‘Amr bin al-‘As r.a. beliau berkata, Rasulullah SAW bersabda: "Tidak sempurna iman seseorang kamu sehinggalah keinginan dirinya mengikuti apa-apa (ajaran) yang aku bawa."
Hadis sahih. Kami meriwayatkannya dalam kitab al-Hujjah (oleh Imam Nasr bin Ibrahim al-Maqdisi) dengan sanad yang sahih.`,
        lessons: [
            "Menjadi kewajipan setiap orang Islam untuk mengikuti segala ajaran Rasulullah SAW sahaja.",
            "Keimanan seseorang tidak sempurna sehingga kehendak nafsunya selaras dengan ajaran Rasulullah SAW.",
            "Sentiasa menjaga diri daripada kehendak syahwat terutamanya remaja pada zaman ini yang mudah terdedah kepada perkara maksiat sama ada dalam pergaulan atau melalui media sosial yang tidak terkawal."
        ]
    },

    42: {
        title: "Mengharapkan Pengampunan dan Rahmat Allah SWT",
        description: "Allah menjanjikan pengampunan kepada hamba yang berdoa, memohon keampunan dan tidak menyekutukan-Nya.",
        arabic: `
عَنْ أَنَسٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: قَالَ اللَّهُ تَعَالَى: يَا ابْنَ آدَمَ، إِنَّكَ مَا دَعَوْتَنِي وَرَجَوْتَنِي غَفَرْتُ لَكَ عَلَى مَا كَانَ مِنْكَ وَلَا أُبَالِي، يَا ابْنَ آدَمَ، لَوْ بَلَغَتْ ذُنُوبُكَ عَنَانَ السَّمَاءِ ثُمَّ اسْتَغْفَرْتَنِي غَفَرْتُ لَكَ، يَا ابْنَ آدَمَ، إِنَّكَ لَوْ أَتَيْتَنِي بِقُرَابِ الْأَرْضِ خَطَايَا ثُمَّ لَقِيتَنِي لَا تُشْرِكُ بِي شَيْئًا لَأَتَيْتُكَ بِقُرَابِهَا مَغْفِرَةً.
رَوَاهُ التِّرْمِذِيُّ رحمه الله وَقَالَ: حَدِيثٌ حَسَنٌ.
`,
        translation: `Terjemahan: Daripada Saiyidina Anas r.a. beliau berkata, aku mendengar Rasulullah SAW bersabda: "Allah Taala berfirman, 'Wahai anak Adam, sesungguhnya, selagi engkau berdoa dan berharap kepada-Ku, pasti Aku akan mengampuni dosa-dosa engkau walau banyak sekali pun dan Aku tidak peduli. Wahai anak Adam, sekiranya dosa engkau begitu banyak sehingga mencecah langit kemudian engkau meminta ampun kepada-Ku, pasti Aku mengampunkan dosa engkau. Wahai anak Adam, sekiranya engkau datang kepada-Ku dengan dosa sepenuh isi bumi, kemudian engkau bertemu dengan-Ku dalam keadaan engkau tidak mensyirikkan Aku dengan sesuatu, nescaya Aku akan memberikan kepada engkau sepenuh itu juga pengampunan.'"
Hadis ini diriwayatkan oleh Imam al-Tirmizi. Hadis hasan.`,
        lessons: [
            "Rahmat dan pengampunan Allah SWT tiada batasnya. Menjadi kewajipan kita agar meyakini perkara ini sebagai dorongan untuk terus bertaubat dan memohon keampunan Allah SWT.",
            "Allah SWT pasti akan mengampunkan dosa hamba-Nya yang bertaubat walau sebesar mana dosa yang dilakukan dengan syarat tidak mensyirikkan-Nya."
        ]
    }
};

for (let number = 1; number <= 42; number++) {
    let section;

    if (number <= 10) {
        section = "1-10";
    } else if (number <= 20) {
        section = "11-20";
    } else if (number <= 30) {
        section = "21-30";
    } else {
        section = "31-42";
    }

    const content = hadisContent[number];

    hadisList.push({
        number: number,
        section: section,
        title: content.title || `Tajuk Hadis ${number}`,
        description: content.description ||
            "Kandungan akan dikemaskini berdasarkan bahan asal sekolah.",
        arabic: content.arabic,
        translation: content.translation,
        lessons: content.lessons
    });
}

// =========================
// READING PROGRESS SUMMARY
// =========================

const readingCount = document.getElementById("reading-count");
const readingProgressBar = document.getElementById("reading-progress-bar");

function getReadHadis() {
    return JSON.parse(localStorage.getItem("hadisReadProgress") || "[]");
}

function updateReadingSummary() {
    if (!readingCount || !readingProgressBar) return;

    const readHadis = getReadHadis();
    const totalRead = readHadis.length;
    const percentage = (totalRead / 42) * 100;

    readingCount.textContent =
        `${totalRead} daripada 42 Hadis telah dibaca`;

    readingProgressBar.style.width = `${percentage}%`;
}

updateReadingSummary();


// =========================
// DISPLAY HADIS
// =========================

const hadisContainer = document.getElementById("hadis-list");
const filterButtons = document.querySelectorAll(".filter-button");

let currentSection = "all";
let currentSearch = "";

function displayHadis() {
    if (!hadisContainer) return;

    hadisContainer.innerHTML = "";

    let filteredHadis = hadisList;

    // Filter by section
    if (currentSection !== "all") {
        filteredHadis = filteredHadis.filter(
            hadis => hadis.section === currentSection
        );
    }

    // Filter by search
    if (currentSearch.trim() !== "") {
        const searchTerm = currentSearch.toLowerCase().trim();

        filteredHadis = filteredHadis.filter(hadis =>
            hadis.number.toString().includes(searchTerm) ||
            hadis.title.toLowerCase().includes(searchTerm) ||
            hadis.description.toLowerCase().includes(searchTerm)
        );
    }

    // Display results
    filteredHadis.forEach(hadis => {
        const card = document.createElement("article");
        card.className = "hadis-card";

        card.innerHTML = `
            <span class="hadis-card-number">HADIS ${hadis.number}</span>
            <h3>${hadis.title}</h3>
            <p>${hadis.description}</p>
            <a href="hadis-detail.html?number=${hadis.number}">
                Baca Hadis →
            </a>
        `;

        hadisContainer.appendChild(card);
    });

    // Show message if there are no results
    if (filteredHadis.length === 0) {
        hadisContainer.innerHTML = `
            <div class="no-results">
                <h3>Tiada Hadis Ditemui</h3>
                <p>Cuba cari dengan nombor atau kata kunci yang lain.</p>
            </div>
        `;
    }
}

// =========================
// FILTER INTERACTION
// =========================

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentSection = button.dataset.section;

        filterButtons.forEach(filter => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        displayHadis();
    });
});

const searchInput = document.getElementById("hadis-search");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        currentSearch = searchInput.value;
        displayHadis();
    });
}

// Check if a section was selected from the homepage
const sectionParam =
    new URLSearchParams(window.location.search).get("section");

if (
    sectionParam &&
    ["1-10", "11-20", "21-30", "31-42"].includes(sectionParam)
) {
    currentSection = sectionParam;

    filterButtons.forEach(button => {
        button.classList.remove("active");

        if (button.dataset.section === sectionParam) {
            button.classList.add("active");
        }
    });
}

displayHadis();


// =========================
// HADIS DETAIL PAGE
// =========================

const hadisTitle = document.getElementById("hadis-title");

if (hadisTitle) {
    const params = new URLSearchParams(window.location.search);
    const requestedNumber = Number(params.get("number"));

    const currentNumber =
        Number.isInteger(requestedNumber) &&
        requestedNumber >= 1 &&
        requestedNumber <= 42
            ? requestedNumber
            : 1;

    const currentHadis = hadisList.find(
        hadis => hadis.number === currentNumber
    );

    
    // READING PROGRESS
    const readingStatus = document.getElementById("reading-status");
    const markReadButton = document.getElementById("mark-read-button");

    const storageKey = "hadisReadProgress";

    function getReadHadis() {
        return JSON.parse(localStorage.getItem(storageKey) || "[]");
    }

    function updateReadingStatus() {
        const readHadis = getReadHadis();
        const isRead = readHadis.includes(currentNumber);

        readingStatus.textContent = isRead
            ? "✓ Hadis ini telah dibaca"
            : "Belum ditandakan sebagai dibaca";

        markReadButton.textContent = isRead
            ? "Tandakan belum dibaca"
            : "Tandakan telah dibaca";
    }

    if (readingStatus && markReadButton) {
        updateReadingStatus();

        markReadButton.addEventListener("click", () => {
            let readHadis = getReadHadis();

            if (readHadis.includes(currentNumber)) {
                readHadis = readHadis.filter(
                    number => number !== currentNumber
                );
            } else {
                readHadis.push(currentNumber);
            }

            localStorage.setItem(
                storageKey,
                JSON.stringify(readHadis)
            );

            updateReadingStatus();
        });
    }


    const sectionNames = {
        "1-10": "Bahagian Hadis 1–10",
        "11-20": "Bahagian Hadis 11–20",
        "21-30": "Bahagian Hadis 21–30",
        "31-42": "Bahagian Hadis 31–42"
    };

    document.title = `Hadis ${currentNumber} | Modul Penghayatan Hadis`;

    hadisTitle.textContent = currentHadis.title || `Hadis ${currentNumber}`;

    document.getElementById("hadis-section").textContent =
        sectionNames[currentHadis.section];

    
    // Display Hadis content
    document.getElementById("hadis-arabic").textContent =
        currentHadis.arabic || "Teks Arab akan dikemaskini.";

    document.getElementById("hadis-translation").textContent =
        currentHadis.translation || "[Terjemahan akan dikemaskini]";

    const lessonsList = document.getElementById("hadis-lessons");

    lessonsList.innerHTML = "";

    if (currentHadis.lessons.length > 0) {
        currentHadis.lessons.forEach(lesson => {
            const listItem = document.createElement("li");
            listItem.textContent = lesson;
            lessonsList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement("li");
        listItem.textContent = "Pengajaran akan dikemaskini berdasarkan bahan asal sekolah.";
        lessonsList.appendChild(listItem);
    }
    // Previous Hadis
    const previousButton =
        document.getElementById("previous-hadis");

    if (currentNumber === 1) {
        previousButton.classList.add("disabled");
        previousButton.removeAttribute("href");
    } else {
        previousButton.href =
            `hadis-detail.html?number=${currentNumber - 1}`;
    }

    // Next Hadis
    const nextButton =
        document.getElementById("next-hadis");

    if (currentNumber === 42) {
        nextButton.classList.add("disabled");
        nextButton.removeAttribute("href");
    } else {
        nextButton.href =
            `hadis-detail.html?number=${currentNumber + 1}`;
    }
}

//=========================
//   QUIZ
//=========================

// Quiz selection elements

const quizSelection =
    document.getElementById("quiz-selection");

const quizOptions =
    document.querySelectorAll(".quiz-option");

const quizCard =
    document.getElementById("quiz-card");


// Quiz question sets

const quizSets = {

    "1-10": [
        {
            question: "Apakah yang menentukan nilai sesuatu amalan menurut Hadis 1?",
            answers: [
                "Umur seseorang",
                "Niat seseorang",
                "Kekayaan seseorang",
                "Bilangan orang yang melihat amalan itu"
            ],
            correct: 1,
            explanation:
                "Hadis 1 menyatakan bahawa segala amalan bergantung pada niat."
        },

        {
            question: "Apakah maksud ihsan menurut Hadis 2?",
            answers: [
                "Beribadah kepada Allah seolah-olah melihat-Nya",
                "Mengumpulkan kekayaan sebanyak mungkin",
                "Melakukan amalan supaya dipuji",
                "Mengutamakan pendapat manusia"
            ],
            correct: 0,
            explanation:
                "Hadis 2 menerangkan bahawa ihsan ialah beribadah kepada Allah seolah-olah kita melihat-Nya."
        },

        {
            question: "Berapakah bilangan Rukun Islam menurut Hadis 3?",
            answers: [
                "Tiga",
                "Empat",
                "Lima",
                "Enam"
            ],
            correct: 2,
            explanation:
                "Hadis 3 menerangkan bahawa Islam dibina atas lima perkara."
        },

        {
            question: "Apakah yang perlu dilakukan terhadap amalan yang bercanggah dengan ajaran agama menurut Hadis 5?",
            answers: [
                "Meneruskannya jika ramai orang melakukannya",
                "Mengikutinya jika mudah",
                "Menerimanya tanpa menilai",
                "Menolaknya kerana amalan tersebut tertolak"
            ],
            correct: 3,
            explanation:
                "Hadis 5 menerangkan bahawa amalan dalam urusan agama yang tidak menepati ajaran Islam adalah tertolak."
        },

        {
            question: "Apakah yang perlu dilakukan apabila menghadapi perkara syubhah menurut Hadis 6?",
            answers: [
                "Mengabaikan hukum agama",
                "Berhati-hati terhadap perkara yang tidak jelas halal atau haram",
                "Memilih perkara yang paling menguntungkan",
                "Mengikut keputusan orang ramai sahaja"
            ],
            correct: 1,
            explanation:
                "Hadis 6 mengajar umat Islam supaya berhati-hati terhadap perkara yang tidak jelas halal atau haram."
        }
    ],

    "11-20": [
        {
            question: "Apakah tindakan yang dianjurkan apabila menghadapi perkara yang meragukan menurut Hadis 11?",
            answers: [
                "Mengikuti perkara yang meragukan",
                "Mengabaikan keraguan",
                "Meninggalkan perkara yang meragukan",
                "Memilih perkara berdasarkan keuntungan"
            ],
            correct: 2,
            explanation:
                "Hadis 11 mengajar supaya seseorang meninggalkan perkara yang meragukan dan berpegang pada perkara yang diyakini."
        },

        {
            question: "Apakah pengajaran utama Hadis 12?",
            answers: [
                "Mengutamakan urusan orang lain",
                "Mencampuri semua urusan masyarakat",
                "Mengelakkan diri daripada mempelajari ilmu baharu",
                "Meninggalkan perkara yang tidak berfaedah"
            ],
            correct: 3,
            explanation:
                "Hadis 12 mengajar umat Islam supaya meninggalkan perkara yang tidak berfaedah dan mengisi masa dengan ilmu yang bermanfaat."
        },

        {
            question: "Apakah tanda kesempurnaan iman menurut Hadis 13?",
            answers: [
                "Menyukai kebaikan untuk saudara Muslim",
                "Mengutamakan diri sendiri sahaja",
                "Berasa iri hati terhadap kejayaan orang lain",
                "Membantu orang lain hanya untuk mendapat pujian"
            ],
            correct: 0,
            explanation:
                "Hadis 13 menerangkan bahawa menyukai kebaikan untuk saudara Muslim merupakan tanda kesempurnaan iman."
        },

        {
            question: "Apakah yang perlu dilakukan jika tidak mempunyai perkara yang baik untuk diperkatakan menurut Hadis 15?",
            answers: [
                "Mengkritik orang lain",
                "Berdiam diri",
                "Menyebarkan khabar angin",
                "Bercakap tanpa berfikir"
            ],
            correct: 1,
            explanation:
                "Hadis 15 mengajar supaya berkata perkara yang baik atau berdiam diri."
        },

        {
            question: "Apakah kepentingan sifat malu menurut Hadis 20?",
            answers: [
                "Menghalang seseorang daripada melakukan semua aktiviti",
                "Membolehkan seseorang mengabaikan tanggungjawab",
                "Mendorong manusia melakukan kebaikan dan menjauhi kejahatan",
                "Menyebabkan seseorang berhenti menuntut ilmu"
            ],
            correct: 2,
            explanation:
                "Hadis 20 menerangkan bahawa sifat malu merupakan sebahagian daripada iman dan menjadi perisai daripada melakukan kejahatan."
        }
    ],

    "21-30": [
        {
            question: "Apakah maksud istiqamah menurut Hadis 21?",
            answers: [
                "Melakukan kebaikan hanya apabila dipuji",
                "Mengikuti amalan orang lain tanpa memahami sebabnya",
                "Beribadah hanya pada waktu tertentu",
                "Berterusan mentaati Allah dalam akidah, perkataan dan perbuatan"
            ],
            correct: 3,
            explanation:
                "Hadis 21 menerangkan bahawa istiqamah ialah berterusan mentaati Allah dari aspek akidah, perkataan dan perbuatan."
        },

        {
            question: "Apakah contoh amalan harus yang dibenarkan menurut pengajaran Hadis 22?",
            answers: [
                "Bersukan tanpa mengabaikan kewajipan",
                "Meninggalkan solat demi hiburan",
                "Melakukan perkara yang haram",
                "Mengabaikan puasa Ramadan"
            ],
            correct: 0,
            explanation:
                "Hadis 22 menerangkan bahawa amalan harus seperti bersukan, berhibur dan melakukan hobi dibenarkan selagi tidak mengabaikan kewajipan."
        },

        {
            question: "Apakah yang ditunjukkan oleh amalan bersedekah menurut Hadis 23?",
            answers: [
                "Keinginan untuk mendapat pujian",
                "Bukti keimanan seseorang",
                "Kewajipan untuk menjadi kaya",
                "Kepentingan mengumpulkan harta"
            ],
            correct: 1,
            explanation:
                "Hadis 23 menerangkan bahawa bersedekah merupakan bukti keimanan seseorang."
        },

        {
            question: "Apakah prinsip utama Hadis 26 berkaitan perbuatan baik?",
            answers: [
                "Kebaikan hanya dilakukan kepada keluarga",
                "Kebaikan perlu dibalas dengan wang",
                "Pelbagai perbuatan baik boleh dikira sebagai sedekah",
                "Sedekah hanya dilakukan dalam bentuk wang"
            ],
            correct: 2,
            explanation:
                "Hadis 26 menerangkan bahawa pelbagai perbuatan baik juga dikira sebagai sedekah."
        },

        {
            question: "Apakah yang ditekankan dalam Hadis 30 tentang kewajipan agama?",
            answers: [
                "Kewajipan boleh diabaikan apabila sibuk",
                "Seseorang boleh menambah hukum sesuka hati",
                "Semua perkara yang diingini dibenarkan",
                "Melaksanakan kewajipan dan mematuhi batas syarak"
            ],
            correct: 3,
            explanation:
                "Hadis 30 menekankan kepentingan melaksanakan kefarduan, meninggalkan larangan dan tidak menokok tambah perkara yang telah ditetapkan oleh syarak."
        }
    ],

    "31-42": [
        {
            question: "Apakah kesan keterlaluan mencintai dunia menurut Hadis 31?",
            answers: [
                "Membawa kepada kelalaian dan dosa",
                "Menjamin seseorang mendapat keampunan",
                "Menghapuskan semua tanggungjawab",
                "Menjadikan seseorang sentiasa istiqamah"
            ],
            correct: 0,
            explanation:
                "Hadis 31 menerangkan bahawa keterlaluan dalam mencintai dunia boleh membawa kepada kelalaian dan dosa."
        },

        {
            question: "Apakah yang perlu dilakukan untuk menghindari kemudaratan menurut Hadis 32?",
            answers: [
                "Membiarkan kemudaratan berlaku",
                "Mencegah dan menghilangkan kemudaratan",
                "Mengutamakan keuntungan sendiri",
                "Mengabaikan penderitaan orang lain"
            ],
            correct: 1,
            explanation:
                "Hadis 32 mengajar supaya kita mencegah kemudaratan daripada berlaku dan menghilangkan kemudaratan yang sedang berlaku."
        },

        {
            question: "Menurut Hadis 33, siapakah yang perlu mengemukakan bukti dalam sesuatu tuntutan?",
            answers: [
                "Orang yang tidak terlibat",
                "Saksi yang tidak mengetahui perkara tersebut",
                "Pihak yang membuat tuntutan",
                "Orang yang mendengar cerita itu"
            ],
            correct: 2,
            explanation:
                "Hadis 33 menerangkan bahawa pihak yang membuat tuntutan perlu mengemukakan bukti."
        },

        {
            question: "Bagaimanakah dakwah dan nasihat perlu disampaikan menurut Hadis 34?",
            answers: [
                "Dengan menghina orang lain",
                "Dengan memaksa tanpa penjelasan",
                "Dengan menyebarkan aib seseorang",
                "Dengan perkataan yang lembut, sopan dan berhikmah"
            ],
            correct: 3,
            explanation:
                "Hadis 34 mengajar supaya amar makruf dan nahi mungkar dilakukan dengan penuh tanggungjawab, nasihat yang lembut dan hikmah."
        },

        {
            question: "Apakah yang digalakkan dalam Hadis 36?",
            answers: [
                "Membantu orang yang dalam kesusahan dan menutup keaiban mereka",
                "Menyebarkan kesalahan orang lain",
                "Mengabaikan orang yang memerlukan bantuan",
                "Membantu hanya apabila mendapat ganjaran"
            ],
            correct: 0,
            explanation:
                "Hadis 36 menggalakkan umat Islam membantu orang yang menghadapi kesusahan, memudahkan urusan dan menutup keaiban orang lain."
        }
    ]

};


// Overall quiz
const overallQuizQuestions = [
    {
        question: "Apakah yang perlu dilakukan apabila seseorang meninggalkan maksiat dengan ikhlas menurut Hadis 37?",
        answers: [
            "Dia tidak mendapat sebarang ganjaran",
            "Dia mendapat ganjaran pahala",
            "Dia perlu mengulangi maksiat tersebut",
            "Dia tidak perlu menjaga amalannya"
        ],
        correct: 1,
        explanation:
            "Hadis 37 menerangkan bahawa seseorang yang meninggalkan maksiat dengan ikhlas dan taat kepada Allah akan mendapat ganjaran pahala."
    },

    {
        question: "Apakah yang perlu dilakukan oleh seorang Muslim menurut Hadis 41?",
        answers: [
            "Mengikuti semua kehendak nafsu",
            "Mengutamakan kehendak sendiri daripada ajaran Rasulullah SAW",
            "Mengikuti ajaran Rasulullah SAW",
            "Mengabaikan Sunah Nabi SAW"
        ],
        correct: 2,
        explanation:
            "Hadis 41 menerangkan bahawa umat Islam perlu mengikuti ajaran Rasulullah SAW dan menyelaraskan kehendak diri dengan ajaran Baginda."
    },

    {
        question: "Apakah yang perlu diyakini tentang keampunan Allah menurut Hadis 42?",
        answers: [
            "Allah hanya mengampunkan dosa yang kecil",
            "Manusia tidak perlu bertaubat",
            "Dosa tidak boleh diampunkan",
            "Rahmat dan keampunan Allah sangat luas bagi hamba yang bertaubat"
        ],
        correct: 3,
        explanation:
            "Hadis 42 menerangkan bahawa rahmat dan pengampunan Allah tiada batasnya bagi hamba yang bertaubat dengan memenuhi syaratnya."
    },

    {
        question: "Apakah yang perlu dilakukan selepas melakukan dosa menurut Hadis 18?",
        answers: [
            "Beristighfar, bertaubat dan melakukan amal soleh",
            "Berputus asa daripada rahmat Allah",
            "Menyalahkan orang lain",
            "Mengulangi dosa tanpa rasa bersalah"
        ],
        correct: 0,
        explanation:
            "Pengajaran Hadis 18 menyatakan bahawa setiap perbuatan dosa hendaklah disusuli dengan istighfar, taubat dan amal soleh."
    },

    {
        question: "Bagaimanakah seseorang dapat menguatkan iman menurut pengajaran Hadis 19?",
        answers: [
            "Bergantung pada diri sendiri sahaja",
            "Mengingati Allah, memohon pertolongan-Nya dan bertawakal selepas berusaha",
            "Mengelakkan semua usaha",
            "Mengabaikan doa"
        ],
        correct: 1,
        explanation:
            "Hadis 19 mengajar supaya seseorang mengingati Allah, memohon pertolongan-Nya dan bertawakal selepas berusaha serta berdoa."
    },

    {
        question: "Apakah maksud kebaikan menurut Hadis 27?",
        answers: [
            "Melakukan sesuatu demi pujian",
            "Mengutamakan keuntungan peribadi",
            "Kebaikan berkaitan akhlak yang baik, manakala dosa menimbulkan keresahan dalam hati",
            "Mengikut semua perkara yang dilakukan orang ramai"
        ],
        correct: 2,
        explanation:
            "Hadis 27 menerangkan bahawa kebaikan berkaitan dengan akhlak yang baik, manakala dosa boleh menimbulkan keresahan dalam hati."
    },

    {
        question: "Apakah yang perlu dilakukan oleh seseorang Muslim apabila menerima nikmat kebaikan menurut Hadis 13?",
        answers: [
            "Menyimpannya daripada orang lain",
            "Berasa lebih baik daripada orang lain",
            "Menghalang orang lain daripada mendapat nikmat yang sama",
            "Berharap agar saudaranya turut menerima kebaikan"
        ],
        correct: 3,
        explanation:
            "Hadis 13 mengajar supaya seorang Muslim turut berharap agar saudaranya memperoleh kebaikan yang sama."
    },

    {
        question: "Apakah yang menjadi asas penerimaan doa menurut pengajaran Hadis 10?",
        answers: [
            "Mencari rezeki yang halal dan baik",
            "Memiliki kekayaan yang banyak",
            "Meminta sesuatu tanpa berusaha",
            "Mendapat pujian daripada orang lain"
        ],
        correct: 0,
        explanation:
            "Hadis 10 menekankan kepentingan mencari rezeki yang halal dan baik serta menjauhkan diri daripada perkara haram."
    },

    {
        question: "Apakah manfaat ilmu pengetahuan menurut Hadis 36?",
        answers: [
            "Membolehkan seseorang merendahkan orang lain",
            "Membantu mengubah cara pandang dan gaya hidup ke arah yang lebih baik",
            "Menghapuskan keperluan untuk beramal",
            "Menjadikan seseorang tidak perlu membantu orang lain"
        ],
        correct: 1,
        explanation:
            "Hadis 36 menerangkan bahawa ilmu membantu mengubah cara pandang dan gaya hidup ke arah yang lebih baik apabila diamalkan."
    },

    {
        question: "Apakah yang perlu dilakukan untuk merebut peluang beramal menurut Hadis 40?",
        answers: [
            "Menunggu sehingga datang kesusahan",
            "Menangguhkan semua amalan",
            "Memanfaatkan umur, masa dan tenaga sebelum terlambat",
            "Mengutamakan dunia tanpa memikirkan akhirat"
        ],
        correct: 2,
        explanation:
            "Hadis 40 mengajar supaya manusia memanfaatkan umur, masa dan tenaga untuk beramal sebelum datangnya kesusahan atau kematian."
    }
];


// Quiz variables

let selectedQuiz = null;
let activeQuizQuestions = [];

const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question-text");

const answerContainer =
    document.getElementById("answer-container");

const nextButton =
    document.getElementById("next-button");

const quizResult =
    document.getElementById("quiz-result");

const scoreText =
    document.getElementById("score-text");

const resultMessage =
    document.getElementById("result-message");

const restartButton =
    document.getElementById("restart-button");

const retryButton =
    document.getElementById("retry-button");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];


// Quiz selection

quizOptions.forEach(option => {

    option.addEventListener("click", () => {

        selectedQuiz =
            option.dataset.quiz;

        if (selectedQuiz === "overall") {

            activeQuizQuestions =
                overallQuizQuestions;

        } else {

            activeQuizQuestions =
                quizSets[selectedQuiz];

        }


        quizSelection.classList.add("hidden");

        quizCard.classList.remove("hidden");


        currentQuestion = 0;
        score = 0;
        selectedAnswer = null;
        userAnswers = [];


        displayQuestion();

    });

});


// Display question

function displayQuestion() {

    if (!questionText) return;


    const question =
        activeQuizQuestions[currentQuestion];


    questionNumber.textContent =
        `Soalan ${currentQuestion + 1} daripada ${activeQuizQuestions.length}`;

    // Update quiz progress bar
const progressBar =
    document.getElementById("quiz-progress-bar");

const progress =
    ((currentQuestion + 1) / activeQuizQuestions.length) * 100;

if (progressBar) {
    progressBar.style.width = `${progress}%`;
}


    questionText.textContent =
        question.question;


    answerContainer.innerHTML = "";


    selectedAnswer = null;

    nextButton.disabled = true;


    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");


        button.className =
            "answer-button";


        button.textContent =
            answer;


        button.addEventListener("click", () => {

            selectedAnswer = index;


            const allButtons =
                answerContainer.querySelectorAll(
                    ".answer-button"
                );


            allButtons.forEach(button => {

                button.classList.remove("selected");

            });


            button.classList.add("selected");


            nextButton.disabled = false;

        });


        answerContainer.appendChild(button);

    });

}


// Next button

if (nextButton) {

    nextButton.addEventListener("click", () => {

        const question =
            activeQuizQuestions[currentQuestion];


        if (selectedAnswer === question.correct) {

            score++;

        }


        userAnswers.push(selectedAnswer);

        currentQuestion++;


        if (
            currentQuestion <
            activeQuizQuestions.length
        ) {

            displayQuestion();

        } else {

            showResult();

        }

    });

}


// Show result

function showResult() {

    quizCard.classList.add("hidden");

    quizResult.classList.remove("hidden");


    scoreText.textContent =
        `${score} / ${activeQuizQuestions.length}`;


    if (
        score ===
        activeQuizQuestions.length
    ) {

        resultMessage.textContent =
            "Tahniah! Anda berjaya menjawab semua soalan dengan betul.";

    } else if (score >= 3) {

        resultMessage.textContent =
            "Bagus! Anda mempunyai pemahaman yang baik. Teruskan ulang kaji.";

    } else {

        resultMessage.textContent =
            "Jangan risau! Cuba ulang kaji kandungan Hadis dan cuba lagi.";

    }


    const reviewContainer =
        document.getElementById("answer-review");


    reviewContainer.innerHTML = `
        <h3>Semakan Jawapan</h3>
    `;


    activeQuizQuestions.forEach(
        (question, index) => {

            const userAnswer =
                userAnswers[index];


            const isCorrect =
                userAnswer === question.correct;


            const reviewItem =
                document.createElement("div");


            reviewItem.className =
                `review-item ${
                    isCorrect
                        ? "review-correct"
                        : "review-wrong"
                }`;


            reviewItem.innerHTML = `
                <div class="review-question">

                    <span>
                        Soalan ${index + 1}
                    </span>

                    <strong>
                        ${
                            isCorrect
                                ? "Betul"
                                : "Salah"
                        }
                    </strong>

                </div>


                <p class="review-question-text">
                    ${question.question}
                </p>


                <p>
                    <strong>Jawapan anda:</strong>
                    ${question.answers[userAnswer]}
                </p>


                <p>
                    <strong>Jawapan betul:</strong>
                    ${question.answers[question.correct]}
                </p>


                ${
                    !isCorrect
                        ? `
                            <div class="review-explanation">

                                <strong>
                                    Penjelasan
                                </strong>

                                <p>
                                    ${question.explanation}
                                </p>

                            </div>
                        `
                        : ""
                }

            `;


            reviewContainer.appendChild(
                reviewItem
            );

        }
    );

}

// Retry the same quiz

if (retryButton) {

    retryButton.addEventListener(
        "click",
        () => {

            currentQuestion = 0;
            score = 0;
            selectedAnswer = null;
            userAnswers = [];

            quizResult.classList.add("hidden");
            quizCard.classList.remove("hidden");

            displayQuestion();

        }
    );

}


// Return to quiz selection

if (restartButton) {

    restartButton.addEventListener(
        "click",
        () => {

            currentQuestion = 0;
            score = 0;
            selectedAnswer = null;
            userAnswers = [];
            selectedQuiz = null;


            quizResult.classList.add("hidden");

            quizCard.classList.add("hidden");

            quizSelection.classList.remove("hidden");

        }
    );

}

// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}


const themeToggle = document.getElementById("theme-toggle");

// Load the saved theme when the page opens
const savedTheme = localStorage.getItem("themePreference");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Update the button text
function updateThemeButton() {
    if (!themeToggle) return;

    const isDark = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDark
        ? "☀️ Mod Cerah"
        : "🌙 Mod Gelap";
}

updateThemeButton();

// Switch themes when the button is clicked
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "themePreference",
            isDark ? "dark" : "light"
        );

        updateThemeButton();
    });
}
