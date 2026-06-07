export interface Office {
  division: string;
  district: string;
  thana: string;
  lat: number;
  lng: number;
  label: string;
  value: string;
}

export const banbeisOffices: Office[] = [
  // Khulna Division
  { division: 'Khulna', district: 'Jhenaidah', thana: 'Maheshpur', lat: 23.0548, lng: 88.8926, label: 'Jhenaidah - Maheshpur', value: 'jhenaidah-maheshpur' },
  { division: 'Khulna', district: 'Jhenaidah', thana: 'Shailkupa', lat: 23.1545, lng: 89.0034, label: 'Jhenaidah - Shailkupa', value: 'jhenaidah-shailkupa' },
  { division: 'Khulna', district: 'Khulna', thana: 'Dumuria', lat: 22.8177, lng: 89.4279, label: 'Khulna - Dumuria', value: 'khulna-dumuria' },
  { division: 'Khulna', district: 'Khulna', thana: 'Dighalia', lat: 22.6973, lng: 89.5739, label: 'Khulna - Dighalia', value: 'khulna-dighalia' },
  { division: 'Khulna', district: 'Khulna', thana: 'Paikgachha', lat: 22.5297, lng: 89.3522, label: 'Khulna - Paikgachha', value: 'khulna-paikgachha' },
  { division: 'Khulna', district: 'Kushtia', thana: 'Daulatpur', lat: 23.7296, lng: 89.1644, label: 'Kushtia - Daulatpur', value: 'kushtia-daulatpur' },
  { division: 'Khulna', district: 'Kushtia', thana: 'Kumarkhali', lat: 23.7446, lng: 89.2512, label: 'Kushtia - Kumarkhali', value: 'kushtia-kumarkhali' },
  { division: 'Khulna', district: 'Magura', thana: 'Mohammadpur', lat: 23.2987, lng: 89.4324, label: 'Magura - Mohammadpur', value: 'magura-mohammadpur' },
  { division: 'Khulna', district: 'Meherpur', thana: 'Gangni', lat: 23.7525, lng: 88.9533, label: 'Meherpur - Gangni', value: 'meherpur-gangni' },
  { division: 'Khulna', district: 'Norail', thana: 'Lohagara', lat: 23.0965, lng: 89.2258, label: 'Norail - Lohagara', value: 'norail-lohagara' },
  { division: 'Khulna', district: 'Bagerhat', thana: 'Morrelganj', lat: 22.4544, lng: 89.8555, label: 'Bagerhat - Morrelganj', value: 'bagerhat-morrelganj' },
  { division: 'Khulna', district: 'Satkhira', thana: 'Kaliganj', lat: 22.4579, lng: 89.1321, label: 'Satkhira - Kaliganj', value: 'satkhira-kaliganj' },
  { division: 'Khulna', district: 'Jashore', thana: 'Bagher Para', lat: 23.1664, lng: 89.2115, label: 'Jashore - Bagher Para', value: 'jashore-bagherpara' },
  { division: 'Khulna', district: 'Chuadanga', thana: 'Damurhuda', lat: 23.5431, lng: 88.8614, label: 'Chuadanga - Damurhuda', value: 'chuadanga-damurhuda' },
  { division: 'Khulna', district: 'Bagerhat', thana: 'Rampal', lat: 22.7072, lng: 89.6058, label: 'Bagerhat - Rampal', value: 'bagerhat-rampal' },
  { division: 'Khulna', district: 'Jashore', thana: 'Jhikargachha', lat: 23.1029, lng: 89.0995, label: 'Jashore - Jhikargachha', value: 'jashore-jhikargachha' },
  { division: 'Khulna', district: 'Jashore', thana: 'Manirampur', lat: 23.0371, lng: 89.2247, label: 'Jashore - Manirampur', value: 'jashore-manirampur' },

  // Rangpur Division
  { division: 'Rangpur', district: 'Thakurgaon', thana: 'Baliadangi', lat: 25.9984, lng: 88.3815, label: 'Thakurgaon - Baliadangi', value: 'thakurgaon-baliadangi' },
  { division: 'Rangpur', district: 'Dinajpur', thana: 'Birganj', lat: 25.6176, lng: 88.6219, label: 'Dinajpur - Birganj', value: 'dinajpur-birganj' },
  { division: 'Rangpur', district: 'Dinajpur', thana: 'Biral', lat: 25.4988, lng: 88.6097, label: 'Dinajpur - Biral', value: 'dinajpur-biral' },
  { division: 'Rangpur', district: 'Dinajpur', thana: 'Nawabganj', lat: 25.0724, lng: 88.2853, label: 'Dinajpur - Nawabganj', value: 'dinajpur-nawabganj' },
  { division: 'Rangpur', district: 'Dinajpur', thana: 'Parbatipur', lat: 25.6624, lng: 88.9378, label: 'Dinajpur - Parbatipur', value: 'dinajpur-parbatipur' },
  { division: 'Rangpur', district: 'Gaibandha', thana: 'Gobindaganj', lat: 25.1151, lng: 89.2379, label: 'Gaibandha - Gobindaganj', value: 'gaibandha-gobindaganj' },
  { division: 'Rangpur', district: 'Gaibandha', thana: 'Sadullapur', lat: 25.385414562599344, lng: 89.46863226592738, label: 'Gaibandha - Sadullapur', value: 'gaibandha-sadullapur' },
  { division: 'Rangpur', district: 'Rangpur', thana: 'Kaunia', lat: 25.6357, lng: 89.3264, label: 'Rangpur - Kaunia', value: 'rangpur-kaunia' },
  { division: 'Rangpur', district: 'Kurigram', thana: 'Nageshwari', lat: 25.9582, lng: 89.6904, label: 'Kurigram - Nageshwari', value: 'kurigram-nageshwari' },
  { division: 'Rangpur', district: 'Kurigram', thana: 'Ulipur', lat: 25.6372, lng: 89.8432, label: 'Kurigram - Ulipur', value: 'kurigram-ulipur' },
  { division: 'Rangpur', district: 'Lalmonirhat', thana: 'Kaliganj', lat: 25.6291, lng: 89.1368, label: 'Lalmonirhat - Kaliganj', value: 'lalmonirhat-kaliganj' },
  { division: 'Rangpur', district: 'Nilphamari', thana: 'Dimla Upazila', lat: 26.1068, lng: 88.9094, label: 'Nilphamari - Dimla', value: 'nilphamari-dimla' },
  { division: 'Rangpur', district: 'Nilphamari', thana: 'Kishoreganj Upazila', lat: 25.9747, lng: 88.7885, label: 'Nilphamari - Kishoreganj', value: 'nilphamari-kishoreganj' },
  { division: 'Rangpur', district: 'Panchagarh', thana: 'Debiganj', lat: 26.3281, lng: 88.6412, label: 'Panchagarh - Debiganj', value: 'panchagarh-debiganj' },
  { division: 'Rangpur', district: 'Rangpur', thana: 'Badarganj', lat: 25.6766, lng: 89.0537, label: 'Rangpur - Badarganj', value: 'rangpur-badarganj' },
  { division: 'Rangpur', district: 'Rangpur', thana: 'Pirganj', lat: 25.9638, lng: 88.9413, label: 'Rangpur - Pirganj', value: 'rangpur-pirganj' },
  { division: 'Rangpur', district: 'Thakurgaon', thana: 'Ranisankail', lat: 26.0458, lng: 88.5371, label: 'Thakurgaon - Ranisankail', value: 'thakurgaon-ranisankail' },

  // Sylhet Division
  { division: 'Sylhet', district: 'Habiganj', thana: 'Chunarughat', lat: 24.1822, lng: 91.6714, label: 'Habiganj - Chunarughat', value: 'habiganj-chunarughat' },
  { division: 'Sylhet', district: 'Sylhet', thana: 'Beani Bazar', lat: 24.8139, lng: 91.9808, label: 'Sylhet - Beani Bazar', value: 'sylhet-beanibazar' },
  { division: 'Sylhet', district: 'Sunamganj', thana: 'Jamalganj', lat: 25.1413, lng: 91.1758, label: 'Sunamganj - Jamalganj', value: 'sunamganj-jamalganj' },
  { division: 'Sylhet', district: 'Habiganj', thana: 'Baniachong', lat: 24.5187, lng: 91.2156, label: 'Habiganj - Baniachong', value: 'habiganj-baniachong' },
  { division: 'Sylhet', district: 'Maulvibazar', thana: 'Kulaura', lat: 24.4538, lng: 92.0466, label: 'Maulvibazar - Kulaura', value: 'maulvibazar-kulaura' },
  { division: 'Sylhet', district: 'Maulvibazar', thana: 'Rajnagar', lat: 24.1396, lng: 91.7588, label: 'Maulvibazar - Rajnagar', value: 'maulvibazar-rajnagar' },
  { division: 'Sylhet', district: 'Sunamganj', thana: 'Chhatak', lat: 25.0383, lng: 91.6697, label: 'Sunamganj - Chhatak', value: 'sunamganj-chhatak' },
  { division: 'Sylhet', district: 'Sylhet', thana: 'Sylhet Sadar', lat: 24.8949, lng: 91.8687, label: 'Sylhet - Sylhet Sadar', value: 'sylhet-sylhetsadar' },

  // Chattogram Division
  { division: 'Chattogram', district: 'Brahamanbaria', thana: 'Nabinagar', lat: 23.8878, lng: 90.9675, label: 'Brahamanbaria - Nabinagar', value: 'brahamanbaria-nabinagar' },
  { division: 'Chattogram', district: 'Rangamati', thana: 'Rangamati Sadar Up', lat: 22.7324, lng: 92.2985, label: 'Rangamati - Rangamati Sadar', value: 'rangamati-rangamatisadar' },
  { division: 'Chattogram', district: 'Brahamanbaria', thana: 'Sarail', lat: 23.7512, lng: 90.9751, label: 'Brahamanbaria - Sarail', value: 'brahamanbaria-sarail' },
  { division: 'Chattogram', district: 'Chandpur', thana: 'Faridganj', lat: 23.1821, lng: 90.7835, label: 'Chandpur - Faridganj', value: 'chandpur-faridganj' },
  { division: 'Chattogram', district: 'Chandpur', thana: 'Matlab Dakshin', lat: 23.0954, lng: 90.7932, label: 'Chandpur - Matlab Dakshin', value: 'chandpur-matlabdakshin' },
  { division: 'Chattogram', district: 'Chattogram', thana: 'Chandanaish', lat: 22.2453, lng: 91.9758, label: 'Chattogram - Chandanaish', value: 'chattogram-chandanaish' },
  { division: 'Chattogram', district: 'Chattogram', thana: 'Patiya', lat: 22.3053, lng: 91.9792, label: 'Chattogram - Patiya', value: 'chattogram-patiya' },
  { division: 'Chattogram', district: 'Chattogram', thana: 'Raozan', lat: 22.5333, lng: 91.9000, label: 'Chattogram - Raozan', value: 'chattogram-raozan' },
  { division: 'Chattogram', district: 'Chattogram', thana: 'Sitakunda', lat: 22.6236, lng: 91.6697, label: 'Chattogram - Sitakunda', value: 'chattogram-sitakunda' },
  { division: 'Chattogram', district: 'Cumilla', thana: 'Burichang', lat: 23.2246, lng: 91.1755, label: 'Cumilla - Burichang', value: 'cumilla-burichang' },
  { division: 'Chattogram', district: 'Cumilla', thana: 'Chandina', lat: 23.2527, lng: 91.0607, label: 'Cumilla - Chandina', value: 'cumilla-chandina' },
  { division: 'Chattogram', district: 'Cumilla', thana: 'Chauddagram', lat: 23.6333, lng: 91.1000, label: 'Cumilla - Chauddagram', value: 'cumilla-chauddagram' },
  { division: 'Chattogram', district: 'Cumilla', thana: 'Daudkandi', lat: 23.4895, lng: 90.7654, label: 'Cumilla - Daudkandi', value: 'cumilla-daudkandi' },
  { division: 'Chattogram', district: 'Coxs Bazar', thana: 'Chakaria', lat: 21.8667, lng: 92.0167, label: 'Coxs Bazar - Chakaria', value: 'coxsbazar-chakaria' },
  { division: 'Chattogram', district: 'Coxs Bazar', thana: 'Ramu', lat: 21.3333, lng: 92.2000, label: 'Coxs Bazar - Ramu', value: 'coxsbazar-ramu' },
  { division: 'Chattogram', district: 'Feni', thana: 'Chhagalnaiya', lat: 23.0386, lng: 91.5097, label: 'Feni - Chhagalnaiya', value: 'feni-chhagalnaiya' },
  { division: 'Chattogram', district: 'Noakhali', thana: 'Companiganj', lat: 22.8759, lng: 91.1991, label: 'Noakhali - Companiganj', value: 'noakhali-companiganj' },
  { division: 'Chattogram', district: 'Khagrachhari', thana: 'Khagrachhari Sadar', lat: 23.1193, lng: 91.9847, label: 'Khagrachhari - Khagrachhari Sadar', value: 'khagrachhari-khagrachhharisadar' },
  { division: 'Chattogram', district: 'Lakshmipur', thana: 'Roypur', lat: 22.9445, lng: 90.7695, label: 'Lakshmipur - Roypur', value: 'lakshmipur-roypur' },
  { division: 'Chattogram', district: 'Noakhali', thana: 'Chatkhil', lat: 22.8451, lng: 91.2274, label: 'Noakhali - Chatkhil', value: 'noakhali-chatkhil' },

  // Rajshahi Division
  { division: 'Rajshahi', district: 'Bogura', thana: 'Gabtali', lat: 24.9181, lng: 89.4814, label: 'Bogura - Gabtali', value: 'bogura-gabtali' },
  { division: 'Rajshahi', district: 'Bogura', thana: 'Nandigram', lat: 24.7167, lng: 89.6000, label: 'Bogura - Nandigram', value: 'bogura-nandigram' },
  { division: 'Rajshahi', district: 'Bogura', thana: 'Shibganj', lat: 25.0023, lng: 89.3293, label: 'Bogura - Shibganj', value: 'bogura-shibganj' },
  { division: 'Rajshahi', district: 'Joypurhat', thana: 'Khetlal', lat: 25.4653, lng: 89.1789, label: 'Joypurhat - Khetlal', value: 'joypurhat-khetlal' },
  { division: 'Rajshahi', district: 'Pabna', thana: 'Atgharia', lat: 24.1847, lng: 89.2514, label: 'Pabna - Atgharia', value: 'pabna-atgharia' },
  { division: 'Rajshahi', district: 'Pabna', thana: 'Sujanagar', lat: 24.0742, lng: 89.8403, label: 'Pabna - Sujanagar', value: 'pabna-sujanagar' },
  { division: 'Rajshahi', district: 'Naogaon', thana: 'Manda', lat: 24.9833, lng: 88.6667, label: 'Naogaon - Manda', value: 'naogaon-manda' },
  { division: 'Rajshahi', district: 'Naogaon', thana: 'Patnitala', lat: 24.8976, lng: 88.9367, label: 'Naogaon - Patnitala', value: 'naogaon-patnitala' },
  { division: 'Rajshahi', district: 'Naogaon', thana: 'Porsha', lat: 25.0333, lng: 88.9167, label: 'Naogaon - Porsha', value: 'naogaon-porsha' },
  { division: 'Rajshahi', district: 'Natore', thana: 'Bagatipara', lat: 24.5000, lng: 89.0500, label: 'Natore - Bagatipara', value: 'natore-bagatipara' },
  { division: 'Rajshahi', district: 'Natore', thana: 'Gurudaspur', lat: 24.4500, lng: 89.2167, label: 'Natore - Gurudaspur', value: 'natore-gurudaspur' },
  { division: 'Rajshahi', district: 'Nawabganj', thana: 'Nachole', lat: 24.6833, lng: 88.3000, label: 'Nawabganj - Nachole', value: 'nawabganj-nachole' },
  { division: 'Rajshahi', district: 'Nawabganj', thana: 'Shibganj', lat: 24.7000, lng: 88.1833, label: 'Nawabganj - Shibganj', value: 'nawabganj-shibganj' },
  { division: 'Rajshahi', district: 'Rajshahi', thana: 'Baghmara', lat: 24.3841, lng: 88.7055, label: 'Rajshahi - Baghmara', value: 'rajshahi-baghmara' },
  { division: 'Rajshahi', district: 'Rajshahi', thana: 'Paba', lat: 24.4167, lng: 88.6000, label: 'Rajshahi - Paba', value: 'rajshahi-paba' },
  { division: 'Rajshahi', district: 'Rajshahi', thana: 'Puthia', lat: 24.3333, lng: 88.8500, label: 'Rajshahi - Puthia', value: 'rajshahi-puthia' },
  { division: 'Rajshahi', district: 'Rajshahi', thana: 'Tanore', lat: 24.5167, lng: 88.5333, label: 'Rajshahi - Tanore', value: 'rajshahi-tanore' },
  { division: 'Rajshahi', district: 'Sirajganj', thana: 'Kazipur', lat: 24.4667, lng: 89.6167, label: 'Sirajganj - Kazipur', value: 'sirajganj-kazipur' },
  { division: 'Rajshahi', district: 'Sirajganj', thana: 'Shahjadpur', lat: 24.5167, lng: 89.6833, label: 'Sirajganj - Shahjadpur', value: 'sirajganj-shahjadpur' },
  { division: 'Rajshahi', district: 'Sirajganj', thana: 'Ullah Para', lat: 24.7167, lng: 89.6833, label: 'Sirajganj - Ullah Para', value: 'sirajganj-ullahpara' },

  // Barisal Division
  { division: 'Barisal', district: 'Barguna', thana: 'Amtali', lat: 22.1143, lng: 90.2308, label: 'Barguna - Amtali', value: 'barguna-amtali' },
  { division: 'Barisal', district: 'Barguna', thana: 'Bamna', lat: 22.1833, lng: 90.1667, label: 'Barguna - Bamna', value: 'barguna-bamna' },
  { division: 'Barisal', district: 'Barisal', thana: 'Muladi', lat: 22.6667, lng: 90.3833, label: 'Barisal - Muladi', value: 'barisal-muladi' },
  { division: 'Barisal', district: 'Barisal', thana: 'Wazirpur', lat: 22.5833, lng: 90.1667, label: 'Barisal - Wazirpur', value: 'barisal-wazirpur' },
  { division: 'Barisal', district: 'Bhola', thana: 'Burhanuddin', lat: 22.4954, lng: 90.7341, label: 'Bhola - Burhanuddin', value: 'bhola-burhanuddin' },
  { division: 'Barisal', district: 'Bhola', thana: 'Char Fasson', lat: 22.2167, lng: 90.7333, label: 'Bhola - Char Fasson', value: 'bhola-charfasson' },
  { division: 'Barisal', district: 'Jhalokati', thana: 'Kanthalia', lat: 22.5667, lng: 90.2333, label: 'Jhalokati - Kanthalia', value: 'jhalokati-kanthalia' },
  { division: 'Barisal', district: 'Jhalokati', thana: 'Nalchity', lat: 22.6333, lng: 90.2667, label: 'Jhalokati - Nalchity', value: 'jhalokati-nalchity' },
  { division: 'Barisal', district: 'Patuakhali', thana: 'Bauphal', lat: 22.3595, lng: 90.3538, label: 'Patuakhali - Bauphal', value: 'patuakhali-bauphal' },
  { division: 'Barisal', district: 'Patuakhali', thana: 'Galachipa', lat: 22.1656, lng: 90.4044, label: 'Patuakhali - Galachipa', value: 'patuakhali-galachipa' },
  { division: 'Barisal', district: 'Pirojpur', thana: 'Bhandaria', lat: 22.4891, lng: 90.0625, label: 'Pirojpur - Bhandaria', value: 'pirojpur-bhandaria' },
  { division: 'Barisal', district: 'Barisal', thana: 'Bakerganj', lat: 22.6667, lng: 90.1167, label: 'Barisal - Bakerganj', value: 'barisal-bakerganj' },

  // Dhaka Division
  { division: 'Dhaka', district: 'Dhaka', thana: 'Nawabganj', lat: 23.9899, lng: 90.1682, label: 'Dhaka - Nawabganj', value: 'dhaka-nawabganj' },
  { division: 'Dhaka', district: 'Dhaka', thana: 'Savar', lat: 23.8583, lng: 90.2667, label: 'Dhaka - Savar', value: 'dhaka-savar' },
  { division: 'Dhaka', district: 'Faridpur', thana: 'Boalmari', lat: 23.3667, lng: 89.7833, label: 'Faridpur - Boalmari', value: 'faridpur-boalmari' },
  { division: 'Dhaka', district: 'Faridpur', thana: 'Sadarpur', lat: 23.5475, lng: 90.0791, label: 'Faridpur - Sadarpur', value: 'faridpur-sadarpur' },
  { division: 'Dhaka', district: 'Gazipur', thana: 'Kaliganj', lat: 24.0333, lng: 90.3667, label: 'Gazipur - Kaliganj', value: 'gazipur-kaliganj' },
  { division: 'Dhaka', district: 'Gazipur', thana: 'Sreepur', lat: 24.3071, lng: 90.4572, label: 'Gazipur - Sreepur', value: 'gazipur-sreepur' },
  { division: 'Dhaka', district: 'Gopalganj', thana: 'Muksudpur', lat: 23.1667, lng: 89.9167, label: 'Gopalganj - Muksudpur', value: 'gopalganj-muksudpur' },
  { division: 'Dhaka', district: 'Gopalganj', thana: 'Tungipara', lat: 22.9017, lng: 89.9036, label: 'Gopalganj - Tungipara', value: 'gopalganj-tungipara' },
  { division: 'Dhaka', district: 'Kishoreganj', thana: 'Bajitpur', lat: 24.2136, lng: 90.9503, label: 'Kishoreganj - Bajitpur', value: 'kishoreganj-bajitpur' },
  { division: 'Dhaka', district: 'Kishoreganj', thana: 'Karimganj', lat: 24.3667, lng: 90.9333, label: 'Kishoreganj - Karimganj', value: 'kishoreganj-karimganj' },
  { division: 'Dhaka', district: 'Kishoreganj', thana: 'Pakundia', lat: 24.3167, lng: 90.6500, label: 'Kishoreganj - Pakundia', value: 'kishoreganj-pakundia' },
  { division: 'Dhaka', district: 'Madaripur', thana: 'Kalkini', lat: 23.0333, lng: 90.1333, label: 'Madaripur - Kalkini', value: 'madaripur-kalkini' },
  { division: 'Dhaka', district: 'Munshiganj', thana: 'Tongibari', lat: 23.4594, lng: 90.4372, label: 'Munshiganj - Tongibari', value: 'munshiganj-tongibari' },
  { division: 'Dhaka', district: 'Narayanganj', thana: 'Sonargaon', lat: 23.6500, lng: 90.6167, label: 'Narayanganj - Sonargaon', value: 'narayanganj-sonargaon' },
  { division: 'Dhaka', district: 'Narsingdi', thana: 'Manohardi', lat: 24.3500, lng: 90.6333, label: 'Narsingdi - Manohardi', value: 'narsingdi-manohardi' },
  { division: 'Dhaka', district: 'Narsingdi', thana: 'Roypura', lat: 23.9667, lng: 90.5833, label: 'Narsingdi - Roypura', value: 'narsingdi-roypura' },
  { division: 'Dhaka', district: 'Rajbari', thana: 'Baliakandi', lat: 23.6333, lng: 89.7833, label: 'Rajbari - Baliakandi', value: 'rajbari-baliakandi' },
  { division: 'Dhaka', district: 'Shariatpur', thana: 'Naria', lat: 23.2167, lng: 90.6000, label: 'Shariatpur - Naria', value: 'shariatpur-naria' },
  { division: 'Dhaka', district: 'Tangail', thana: 'Ghatail', lat: 24.3667, lng: 90.0167, label: 'Tangail - Ghatail', value: 'tangail-ghatail' },
  { division: 'Dhaka', district: 'Tangail', thana: 'Kalihati', lat: 24.3667, lng: 89.9667, label: 'Tangail - Kalihati', value: 'tangail-kalihati' },
  { division: 'Dhaka', district: 'Tangail', thana: 'Mirzapur', lat: 24.1000, lng: 90.1000, label: 'Tangail - Mirzapur', value: 'tangail-mirzapur' },

  // Mymensingh Division
  { division: 'Mymensingh', district: 'Mymensingh', thana: 'Haluaghat', lat: 24.7692, lng: 90.0642, label: 'Mymensingh - Haluaghat', value: 'mymensingh-haluaghat' },
  { division: 'Mymensingh', district: 'Jamalpur', thana: 'Islampur', lat: 24.7667, lng: 89.8333, label: 'Jamalpur - Islampur', value: 'jamalpur-islampur' },
  { division: 'Mymensingh', district: 'Jamalpur', thana: 'Madarganj', lat: 24.8667, lng: 89.8167, label: 'Jamalpur - Madarganj', value: 'jamalpur-madarganj' },
  { division: 'Mymensingh', district: 'Mymensingh', thana: 'Gaffargaon', lat: 24.4333, lng: 90.5667, label: 'Mymensingh - Gaffargaon', value: 'mymensingh-gaffargaon' },
  { division: 'Mymensingh', district: 'Mymensingh', thana: 'Gauripur', lat: 24.9000, lng: 90.2500, label: 'Mymensingh - Gauripur', value: 'mymensingh-gauripur' },
  { division: 'Mymensingh', district: 'Mymensingh', thana: 'Trishal', lat: 24.5667, lng: 90.4000, label: 'Mymensingh - Trishal', value: 'mymensingh-trishal' },
  { division: 'Mymensingh', district: 'Netrakona', thana: 'Atpara', lat: 24.8833, lng: 90.6167, label: 'Netrakona - Atpara', value: 'netrakona-atpara' },
  { division: 'Mymensingh', district: 'Netrakona', thana: 'Purbadhala', lat: 25.0500, lng: 90.7333, label: 'Netrakona - Purbadhala', value: 'netrakona-purbadhala' },
  { division: 'Mymensingh', district: 'Sherpur', thana: 'Nalitabari', lat: 25.1667, lng: 90.1833, label: 'Sherpur - Nalitabari', value: 'sherpur-nalitabari' },
];

export const headOfficeCoords = {
  lat: 23.728611100002393,
  lng: 90.38802676625458,
  name: 'BANBEIS Head Office',
  address: 'Zahir Raihan Road, Palashi-Nilkhet, Dhaka'
};

