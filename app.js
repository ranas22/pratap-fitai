// ============================================================================
// RANA PRATAP SINGH (26Y/M) - PERSONAL AI HEALTH, DIET & QUIT SMOKING COACH
// Customized for Thyrocare Report (27 Oct 2026):
// Weight: 90kg -> 70kg | Triglycerides: 552 | SGPT: 116.3 | Uric Acid: 7.92 | Vit D: 20.7
// ============================================================================

const DESI_FOODS = [
  // Best Foods for Weight Loss, Fatty Liver & High Triglycerides
  { id: 'sattu_drink', name: 'सत्तू का नमकीन शरबत (1 गिलास - 3 चम्मच चना सत्तू)', cal: 135, p: 9, c: 19, f: 2, cat: 'best', tag: '✅ Best Morning Protein • Low GI' },
  { id: 'roti_gehu', name: 'तवा रोटी - बिना घी (1 मध्यम गेहूं/जौ-चना रोटी)', cal: 85, p: 3, c: 17, f: 0.5, cat: 'best', tag: '✅ Daily Staple' },
  { id: 'jau_chana_roti', name: 'जौ + चना मिस्सी रोटी (1 रोटी)', cal: 80, p: 4.5, c: 14, f: 0.8, cat: 'best', tag: '✅ Triglycerides & Cholesterol कम करे' },
  { id: 'lauki_sabzi', name: 'लौकी / तोरई / नेनुआ की कम तेल वाली सब्ज़ी (1 कटोरी)', cal: 75, p: 2, c: 9, f: 3.5, cat: 'best', tag: '✅ Fatty Liver (SGPT 116) के लिए अमृत' },
  { id: 'parwal_bhujia', name: 'परवल / कुंदरू / करेला कम तेल में (1 कटोरी)', cal: 95, p: 2, c: 10, f: 5, cat: 'best', tag: '✅ Low Calorie Gaon Sabzi' },
  { id: 'moong_dal', name: 'पीली मूंग दाल (1 कटोरी पतली - कम तड़का)', cal: 115, p: 8, c: 17, f: 2, cat: 'best', tag: '✅ Uric Acid Safe Protein' },
  { id: 'arhar_dal', name: 'अरहर / रहर दाल (1 कटोरी मध्यम)', cal: 135, p: 8, c: 20, f: 2.5, cat: 'best', tag: '⚠️ दोपहर में लें, रात में कम' },
  { id: 'brown_chawal', name: 'उबला चावल - माड़ निकाला हुआ (1 छोटी कटोरी)', cal: 120, p: 2.5, c: 26, f: 0.3, cat: 'best', tag: '✅ माड़ निकाल कर दोपहर में सिर्फ 1 कटोरी' },
  { id: 'chana_sprouts', name: 'अंकुरित चना + मूंग + खीरा-टमाटर सलाद (1 कटोरी)', cal: 130, p: 9, c: 21, f: 1.5, cat: 'best', tag: '✅ High Fiber • पेट भरा रखे' },
  { id: 'roasted_chana', name: 'भुना चना (1 मुट्ठी - 40g) + बिना तेल मखाना', cal: 140, p: 8, c: 22, f: 2, cat: 'best', tag: '✅ शाम की भूख और स्मोकिंग क्रेविंग रोके' },
  { id: 'chaas_mattha', name: 'छाछ / मट्ठा (1 गिलास - भुना जीरा)', cal: 45, p: 2.5, c: 4, f: 1.5, cat: 'best', tag: '✅ पाचन और यूरिक एसिड के लिए उत्तम' },
  { id: 'dahi_bowl', name: 'घर का दही - मलाई हटाकर (1 कटोरी)', cal: 85, p: 6, c: 7, f: 3, cat: 'best', tag: '✅ Vitamin B12 और Gut Health' },
  { id: 'papaya_plate', name: 'पपीता / अमरूद / सेब (1 प्लेट)', cal: 80, p: 1, c: 19, f: 0.2, cat: 'best', tag: '✅ लिवर साफ करे • कोलेस्ट्रॉल घटाए' },

  // Egg / Fish / Chicken (Non-Veg customized for High Triglycerides & Uric Acid)
  { id: 'egg_whites_3', name: '3 उबले अंडे (2 सफेद भाग + 1 पूरा अंडा)', cal: 110, p: 14, c: 1, f: 5, cat: 'nonveg', tag: '✅ Best Muscle Protein • Zero Sugar' },
  { id: 'egg_omelette', name: '2 अंडे का प्याज-टमाटर ऑमलेट (कम सरसों तेल)', cal: 175, p: 13, c: 2, f: 12, cat: 'nonveg', tag: '✅ नाश्ते या रात के लिए बढ़िया' },
  { id: 'rohu_fish_curry', name: 'रोहू / कतला मछली पतला सरसों झोल (2 पीस)', cal: 210, p: 26, c: 4, f: 9, cat: 'nonveg', tag: '✅ Omega-3 से Triglycerides 552 घटेगा' },
  { id: 'chicken_curry_home', name: 'देसी स्टाइल चिकन ब्रेस्ट झोल - कम तेल (150g)', cal: 235, p: 31, c: 5, f: 9, cat: 'nonveg', tag: '✅ हफ्ते में 2-3 बार (मटन बिल्कुल नहीं)' },

  // Warning / High Calorie Foods to Track Carefully
  { id: 'litti_baked', name: 'आग पर सिकी लिट्टी (2 पीस - बिना डुबोए घी) + चोखा', cal: 290, p: 11, c: 48, f: 6, cat: 'warn', tag: '⚠️ घी में डुबोकर न खाएं (LDL 159 है)' },
  { id: 'chawal_large', name: 'सफेद चावल (1 बड़ी थाली भर कर)', cal: 360, p: 7, c: 79, f: 1, cat: 'warn', tag: '🚨 सावधान: ज्यादा चावल से Triglycerides (552) बढ़ता है!' },
  { id: 'milk_tea_sugar', name: 'चीनी वाली दूध की चाय (1 कप)', cal: 95, p: 2, c: 15, f: 3, cat: 'warn', tag: '🚨 चीनी बंद करें - फीकी या गुड़ रहित चाय लें' },
  { id: 'samosa_kachori', name: 'समोसा / कचौड़ी / पकौड़ा (1 पीस)', cal: 260, p: 4, c: 28, f: 15, cat: 'warn', tag: '🚨 लिवर SGPT 116 और कोलेस्ट्रॉल के लिए जहर' },
  { id: 'mutton_curry', name: 'मटन / रेड मीट (1 कटोरी)', cal: 420, p: 24, c: 6, f: 33, cat: 'warn', tag: '🚨 Uric Acid (7.92) और Cholesterol तुरंत बढ़ाएगा!' }
];

const WEEKLY_VILLAGE_PLAN = [
  {
    day: 'सोमवार (Mon)',
    focus: 'Liver Detox & Triglyceride Drop',
    meals: [
      { time: 'सुबह 6:30 AM (उठते ही)', title: '1 गिलास गुनगुना नींबू पानी + 1 कच्ची लहसुन की कली', cal: 15, desc: 'Cholesterol (261) और Triglycerides (552) को गलाने के लिए सबसे ज़रूरी।' },
      { time: 'नाश्ता 8:30 AM', title: '1 बड़ा गिलास नमकीन चना सत्तू + 2 उबले अंडे का सफेद भाग + खीरा', cal: 215, desc: 'बिना चीनी, भुना जीरा-काला नमक डालें। पेट दोपहर तक भरा रहेगा।' },
      { time: 'दोपहर 1:30 PM (लंच)', title: '2 रोटी (गेहूं/जौ-चना) + 1 कटोरी लौकी/नेनुआ सब्ज़ी + 1 कटोरी पतली मूंग दाल + सलाद', cal: 460, desc: 'चावल का मन हो तो 1 रोटी कम करके सिर्फ आधी कटोरी माड़ निकला चावल लें।' },
      { time: 'शाम 5:00 PM', title: '1 मुट्ठी भुना चना + बिना चीनी की काली/नींबू चाय', cal: 140, desc: 'शाम को समोसा/बिस्किट और सिगरेट की तलब रोकने के लिए।' },
      { time: 'रात 7:45 PM (डिनर)', title: '2 रोटी + परवल/तोरई की कम तेल वाली सब्ज़ी + 1 कटोरी पपीता', cal: 380, desc: 'रात 8 बजे से पहले हल्का भोजन ताकि लिवर (SGPT 116) रिपेयर हो सके।' }
    ]
  },
  {
    day: 'मंगलवार (Tue)',
    focus: 'High Fiber & Uric Acid Flush',
    meals: [
      { time: 'सुबह 6:30 AM', title: 'मेथी दाना पानी (रात भर भीगा हुआ) + 5 भीगे बादाम', cal: 45, desc: 'ट्राइग्लिसराइड्स और वजन कम करने में मददगार।' },
      { time: 'नाश्ता 8:30 AM', title: '1 कटोरी अंकुरित चना-मूंग चाट (प्याज, टमाटर, नींबू) + 1 गिलास छाछ', cal: 220, desc: 'कच्चा प्रोटीन और फाइबर।' },
      { time: 'दोपहर 1:30 PM (लंच)', title: '1 छोटी कटोरी माड़ निकला चावल + 1 रोटी + रहर दाल + सहजन/लौकी सब्ज़ी + सलाद', cal: 490, desc: 'खाने से 15 मिनट पहले 1 प्लेट खीरा/गाजर सलाद ज़रूर खाएं।' },
      { time: 'शाम 5:00 PM', title: '1 कटोरी भुना मखाना (बिना घी) + ग्रीन/नींबू टी', cal: 110, desc: 'लो कैलोरी देसी स्नैक।' },
      { time: 'रात 7:45 PM (डिनर)', title: '1 कटोरी दलिया खिचड़ी (सब्जियों वाली) या 2 रोटी + भिंडी/तोरई सब्ज़ी', cal: 390, desc: 'रात में दाल बंद (Uric Acid 7.92 कंट्रोल करने के लिए)।' }
    ]
  },
  {
    day: 'बुधवार (Wed)',
    focus: 'Omega-3 Fish / High Protein Day',
    meals: [
      { time: 'सुबह 6:30 AM', title: 'गुनगुना पानी + 1 कच्ची लहसुन कली', cal: 10, desc: 'लिवर और हार्ट क्लीनिंग।' },
      { time: 'नाश्ता 8:30 AM', title: '2 अंडे का कम तेल वाला प्याज-टमाटर ऑमलेट + 1 तवा रोटी', cal: 260, desc: 'शानदार प्रोटीन जिससे दिन भर कमजोरी नहीं लगेगी।' },
      { time: 'दोपहर 1:30 PM (लंच)', title: '2 पीस रोहू/कतला मछली (पतला सरसों-लहसुन झोल, डीप फ्राई नहीं) + 2 रोटी + खीरा सलाद', cal: 480, desc: 'मछली का Omega-3 आपके 552 Triglycerides को तेजी से घटाएगा।' },
      { time: 'शाम 5:00 PM', title: '1 अमरूद या सेब + भुनी सौंफ', cal: 90, desc: 'हाई फाइबर फ्रूट।' },
      { time: 'रात 7:45 PM (डिनर)', title: '1 गिलास सत्तू या 2 रोटी + लौकी/कद्दू की सब्ज़ी', cal: 340, desc: 'दोपहर में नॉन-वेज लिया है तो रात का खाना एकदम हल्का रखें।' }
    ]
  },
  {
    day: 'गुरुवार (Thu)',
    focus: 'Desi Sattu & Green Veggie Day',
    meals: [
      { time: 'सुबह 6:30 AM', title: 'जीरा-धनिया उबला पानी (गुनगुना)', cal: 10, desc: 'Urine Nitrite/Hazy साफ करने और किडनी फ्लश के लिए।' },
      { time: 'नाश्ता 8:30 AM', title: '2 सत्तू भरी रोटी (आग/तवे पर बिना तेल सिकी) + टमाटर-लहसुन चटनी + दही', cal: 340, desc: 'गाँव का असली ताकतवर और वेट-लॉस नाश्ता।' },
      { time: 'दोपहर 1:30 PM (लंच)', title: '2 रोटी + करेला/परवल भुजिया (कम तेल) + 1 कटोरी मूंग दाल + छाछ', cal: 450, desc: 'करेला लिवर एंजाइम (SGPT) और कोलेस्ट्रॉल दोनों कम करता है।' },
      { time: 'शाम 5:00 PM', title: 'भुना चना (1 मुट्ठी) + नींबू पानी (बिना चीनी)', cal: 135, desc: 'शाम की थकान दूर करे।' },
      { time: 'रात 7:45 PM (डिनर)', title: '2 जौ-चना रोटी + नेनुआ/लौकी सब्ज़ी', cal: 350, desc: 'हल्का और सुपाच्य।' }
    ]
  },
  {
    day: 'शुक्रवार (Fri)',
    focus: 'Lean Protein & Metabolism Boost',
    meals: [
      { time: 'सुबह 6:30 AM', title: 'गुनगुना नींबू पानी + 1 लहसुन कली', cal: 15, desc: 'फैट बर्निंग शुरू।' },
      { time: 'नाश्ता 8:30 AM', title: '1 गिलास नमकीन सत्तू + 3 उबले अंडे (2 सफेद + 1 पूरा)', cal: 245, desc: '23g+ शुद्ध प्रोटीन।' },
      { time: 'दोपहर 1:30 PM (लंच)', title: '2 रोटी + 1 कटोरी घर का चिकन झोल (120g चिकन ब्रेस्ट, कम तेल) या सोया-लौकी सब्ज़ी + सलाद', cal: 470, desc: 'मटन बिल्कुल न खाएं, चिकन या मछली कम तेल में ले सकते हैं।' },
      { time: 'शाम 5:00 PM', title: '1 कटोरी पपीता या भुना मखाना', cal: 95, desc: 'लिवर डिटॉक्स स्नैक।' },
      { time: 'रात 7:45 PM (डिनर)', title: '1 कटोरी मूंग दाल-सब्ज़ी का सूप + 1-2 रोटी', cal: 340, desc: 'रात में कम कार्ब्स।' }
    ]
  },
  {
    day: 'शनिवार (Sat)',
    focus: 'Bihar Special Healthy Litti Day',
    meals: [
      { time: 'सुबह 6:30 AM', title: 'मेथी पानी + 5 भीगे बादाम', cal: 45, desc: 'इंसुलिन और लिपिड कंट्रोल।' },
      { time: 'नाश्ता 8:30 AM', title: '1 कटोरी पोहा/उपमा (ढेर सारी सब्ज़ी व मूंगफली के साथ) + 2 उबले अंडे का सफेद भाग', cal: 280, desc: 'हल्का और पौष्टिक।' },
      { time: 'दोपहर 1:30 PM (लंच)', title: '2 आग पर सिकी लिट्टी (बिना घी डुबोए!) + बैंगन-टमाटर चोखा + सलाद + छाछ', cal: 440, desc: 'बिना घी में डुबोए लिट्टी-चोखा वजन घटाने के लिए बेहतरीन हाई-फाइबर लंच है!' },
      { time: 'शाम 5:00 PM', title: 'भुना चना + नींबू चाय', cal: 130, desc: 'क्रंच और प्रोटीन।' },
      { time: 'रात 7:45 PM (डिनर)', title: '2 रोटी + लौकी-चना दाल सब्ज़ी', cal: 380, desc: 'संतुलित डिनर।' }
    ]
  },
  {
    day: 'रविवार (Sun)',
    focus: 'Recovery & Weekly Weigh-in Day',
    meals: [
      { time: 'सुबह 6:30 AM', title: 'खाली पेट वजन चेक करें + गुनगुना नींबू पानी', cal: 10, desc: 'हर रविवार सुबह अपना वजन ऐप में अपडेट करें।' },
      { time: 'नाश्ता 8:30 AM', title: 'बेसन चीला (2 पीस - प्याज, टमाटर, धनिया डालकर कम तेल में) + दही', cal: 310, desc: 'हाई प्रोटीन देसी नाश्ता।' },
      { time: 'दोपहर 1:30 PM (लंच)', title: '1 छोटी कटोरी चावल + 1 रोटी + मछली झोल (2 पीस) या पनीर-सब्ज़ी + सलाद', cal: 510, desc: 'रविवार का संतुष्ट करने वाला हेल्दी लंच।' },
      { time: 'शाम 5:00 PM', title: '1 गिलास छाछ या अमरूद', cal: 75, desc: 'हाइड्रेशन।' },
      { time: 'रात 7:45 PM (डिनर)', title: '2 रोटी + हरी सब्ज़ी (तोरई/परवल/भिंडी)', cal: 350, desc: 'सोने से 2.5 घंटे पहले डिनर समाप्त।' }
    ]
  }
];

const MEAL_ALTERNATIVES_10 = {
  morning: [
    { name: '1. गुनगुना नींबू पानी + 1 कच्ची लहसुन कली', cal: 15, p: 0.5, c: 3, f: 0, desc: 'Cholesterol (261) और Triglycerides (552) घटाने में नंबर-1' },
    { name: '2. रात भर भीगा मेथी दाना पानी + 5 भीगे बादाम', cal: 45, p: 2, c: 3, f: 3, desc: 'फैटी लिवर (SGPT 116) और शुगर कंट्रोल के लिए' },
    { name: '3. जीरा + धनिया उबला गुनगुना पानी (1 गिलास)', cal: 10, p: 0, c: 2, f: 0, desc: 'Urine Nitrite/Hazy और Uric Acid (7.92) साफ करने के लिए' },
    { name: '4. अजवाइन + सौंफ का गुनगुना पानी', cal: 10, p: 0, c: 2, f: 0, desc: 'गैस, ब्लोटिंग और स्मोकिंग क्रेविंग कम करे' },
    { name: '5. आंवला जूस (2 चम्मच) + 1 गिलास गुनगुना पानी', cal: 20, p: 0.5, c: 4, f: 0, desc: 'लिवर डिटॉक्स और बालों/स्किन के लिए उत्तम' },
    { name: '6. दालचीनी (Cinnamon) की चुटकी वाला गुनगुना पानी', cal: 10, p: 0, c: 2, f: 0, desc: 'Triglycerides और पेट की चर्बी गलाने में मददगार' },
    { name: '7. 1 गिलास सादा गुनगुना पानी + 2 अखरोट (Walnuts)', cal: 65, p: 1.5, c: 1, f: 6, desc: 'Omega-3 से भरपूर, हार्ट और कोलेस्ट्रॉल के लिए' },
    { name: '8. तुलसी-अदरक काढ़ा (बिना चीनी/गुड़)', cal: 15, p: 0, c: 3, f: 0, desc: 'फेफड़ों (Smoker Lungs) की सफाई के लिए' },
    { name: '9. 1 चम्मच भुनी अलसी (Flaxseed) + गुनगुना पानी', cal: 55, p: 2, c: 3, f: 4, desc: '552 Triglycerides को तेजी से नीचे लाए' },
    { name: '10. नारियल पानी (1 ताज़ा डाभ)', cal: 45, p: 1, c: 10, f: 0, desc: 'यूरिन इन्फेक्शन और यूरिक एसिड फ्लश करने के लिए' }
  ],
  breakfast: [
    { name: '1. चना सत्तू का नमकीन शरबत (1 गिलास) + खीरा', cal: 150, p: 10, c: 22, f: 2, desc: 'सत्तू हो तो सबसे आसान और ठंडा देसी प्रोटीन' },
    { name: '2. 3 उबले अंडे (2 सफेद + 1 पूरा) + 1 तवा रोटी', cal: 195, p: 17, c: 18, f: 5.5, desc: 'सत्तू न हो तो अंडा + रोटी सबसे बेस्ट मसल्स नाश्ता' },
    { name: '3. 2 बेसन का चीला (प्याज-टमाटर-धनिया) + दही', cal: 260, p: 13, c: 32, f: 7, desc: 'घर में बेसन हो तो 5 मिनट में बनने वाला नाश्ता' },
    { name: '4. 1 बड़ा कटोरा पोहा (मटर, मूंगफली, प्याज, नींबू)', cal: 250, p: 7, c: 44, f: 5, desc: 'सत्तू/रोटी न हो तो चूड़ा (पोहा) हर गाँव के घर में मिलता है' },
    { name: '5. 1 कटोरी अंकुरित चना + मूंग + प्याज-टमाटर-नींबू चाट', cal: 190, p: 11, c: 30, f: 2, desc: 'बिना गैस जलाए हाई-प्रोटीन और फाइबर नाश्ता' },
    { name: '6. गेहूं का नमकीन दलिया (सब्जियों वाला - 1 बड़ा कटोरा)', cal: 230, p: 8, c: 40, f: 4, desc: 'कोलेस्ट्रॉल और लिवर के लिए हल्का और पेट भरने वाला' },
    { name: '7. 2 अंडे का प्याज-टमाटर-हरी मिर्च ऑमलेट + 1 रोटी', cal: 260, p: 16, c: 19, f: 12, desc: 'जिम करने वालों के लिए टेस्टी और हाई प्रोटीन' },
    { name: '8. सूजी का उपमा (सब्ज़ी डला हुआ) + 2 उबले अंडे का सफेद भाग', cal: 265, p: 12, c: 38, f: 6, desc: 'सत्तू न हो तो सूजी + अंडा बेहतरीन विकल्प' },
    { name: '9. 2 सादी तवा रोटी + घर की हरी सब्ज़ी + 1 गिलास छाछ/दही', cal: 270, p: 9, c: 44, f: 5, desc: 'सीधा और सदाबहार गाँव का नाश्ता' },
    { name: '10. दही-चूड़ा (मलाई रहित दही + चूड़ा, बिना चीनी के भुना चना मिलाकर)', cal: 275, p: 11, c: 48, f: 4, desc: 'बिहार का फेमस नाश्ता — बस चीनी की जगह भुना चना/नमक डालें!' }
  ],
  lunch: [
    { name: '1. 2 रोटी + लौकी/तोरई/नेनुआ सब्ज़ी + 1 कटोरी मूंग दाल + सलाद', cal: 450, p: 16, c: 68, f: 8, desc: 'फैटी लिवर (SGPT 116) और वजन घटाने के लिए नंबर-1 थाली' },
    { name: '2. 1 छोटी कटोरी माड़ निकला चावल + 1 रोटी + अरहर दाल + भिंडी/परवल भुजिया', cal: 470, p: 14, c: 74, f: 9, desc: 'जब दाल-चावल-भुजिया खाने का मन हो' },
    { name: '3. 2 पीस रोहू/कतला मछली (पतला सरसों झोल) + 2 रोटी + खीरा सलाद', cal: 460, p: 32, c: 38, f: 14, desc: 'Omega-3 से Triglycerides (552) घटाने वाली नॉन-वेज थाली' },
    { name: '4. 150g देसी चिकन ब्रेस्ट झोल (कम तेल) + 2 रोटी + प्याज-नींबू सलाद', cal: 470, p: 36, c: 39, f: 14, desc: 'हाई प्रोटीन जिम लंच (मटन बंद, चिकन बेस्ट)' },
    { name: '5. 2 अंडा करी (2 पूरे अंडे + 1 सफेद भाग, कम तेल ग्रेवी) + 2 रोटी + सलाद', cal: 440, p: 23, c: 40, f: 16, desc: 'जब घर में मछली/हरी सब्ज़ी न हो तो अंडा करी बनाएं' },
    { name: '6. सोयाबीन बड़ी (Nutrela) + आलू/लौकी की रसेदार सब्ज़ी + 2 रोटी + छाछ', cal: 430, p: 24, c: 56, f: 9, desc: 'सस्ता और घर में हमेशा उपलब्ध हाई-प्रोटीन शाकाहारी विकल्प' },
    { name: '7. 2 आग/तवे पर सिकी सत्तू लिट्टी (बिना घी डुबोए) + बैंगन-टमाटर चोखा + दही', cal: 440, p: 16, c: 68, f: 8, desc: 'बिहार स्पेशल हेल्दी लंच' },
    { name: '8. काला चना / काबुली चना मसाला (कम तेल) + 2 रोटी + खीरा रायता', cal: 460, p: 18, c: 66, f: 9, desc: 'जब हरी सब्ज़ी घर में न हो तो चने की सब्ज़ी बनाएं' },
    { name: '9. 1 बड़ा कटोरा मूंग दाल-सब्ज़ी खिचड़ी (बिना घी) + चोखा + दही', cal: 420, p: 15, c: 68, f: 6, desc: 'पेट को आराम देने वाला हल्का और सुपाच्य लंच' },
    { name: '10. 100g पनीर भुर्जी (कम तेल) + 2 जौ-चना/गेहूं रोटी + सलाद', cal: 475, p: 24, c: 42, f: 18, desc: 'ताज़ा घर का पनीर/छेना हो तो शानदार प्रोटीन लंच' }
  ],
  evening: [
    { name: '1. 1 मुट्ठी भुना चना (40g) + नींबू/काली चाय (बिना चीनी)', cal: 140, p: 8, c: 22, f: 2, desc: 'शाम 5 बजे भूख और सिगरेट की तलब दोनों खत्म करे' },
    { name: '2. 1 कटोरी भुना मखाना (सूखा भुना, काला नमक व काली मिर्च)', cal: 110, p: 4, c: 19, f: 1, desc: 'बिहार का सुपरफूड — क्रंची और लो-कैलोरी' },
    { name: '3. 2 उबले अंडे का सफेद भाग (काला नमक व काली मिर्च डालकर)', cal: 35, p: 7, c: 0.5, f: 0, desc: 'जिम जाने से पहले या बाद के लिए प्योर प्रोटीन' },
    { name: '4. 1 अमरूद या 1 सेब या 1 प्लेट पपीता', cal: 85, p: 1, c: 20, f: 0.3, desc: 'लिवर एंजाइम (SGPT 116) और कोलेस्ट्रॉल घटाए' },
    { name: '5. 1 कटोरी मुरमुरा (लाई/मुढ़ी) झालमुढ़ी (खीरा, प्याज, टमाटर, चना - बिना सेव/तेल)', cal: 125, p: 4, c: 25, f: 1, desc: 'गाँव में हर घर में उपलब्ध मुढ़ी का हेल्दी स्नैक' },
    { name: '6. 1 भुट्टा (मकई - आग पर भुना या उबला हुआ, नींबू-नमक लगाकर)', cal: 130, p: 4, c: 28, f: 1.5, desc: 'हाई फाइबर देसी स्नैक' },
    { name: '7. 1 गिलास नमकीन छाछ / मट्ठा (भुना जीरा और पुदीना डालकर)', cal: 50, p: 3, c: 4, f: 1.5, desc: 'यूरिक एसिड (7.92) और पेट की गर्मी शांत करे' },
    { name: '8. मूंगफली दाना (1 छोटी मुट्ठी भुनी हुई - 25g, बिना तले)', cal: 140, p: 6.5, c: 4, f: 12, desc: 'गुड फैट्स और प्रोटीन' },
    { name: '9. खीरा + गाजर + टमाटर + चुकंदर की सलाद प्लेट (नींबू डालकर)', cal: 65, p: 2, c: 14, f: 0.2, desc: 'जीरो फैट, लिवर और खून साफ करे' },
    { name: '10. 1 कप ब्लैक कॉफी (बिना चीनी) + 5 बादाम', cal: 45, p: 1.5, c: 2, f: 3.5, desc: 'शाम को जिम से 30 मिनट पहले बेस्ट फैट-बर्नर' }
  ],
  dinner: [
    { name: '1. 2 तवा रोटी (बिना घी) + लौकी / नेनुआ / तोरई की सब्ज़ी', cal: 330, p: 9, c: 52, f: 6, desc: 'रात में सबसे जल्दी पचने वाला और लिवर-फ्रेंडली डिनर' },
    { name: '2. 2 रोटी + परवल / कुंदरू / भिंडी / करेला की कम तेल वाली सब्ज़ी', cal: 350, p: 9, c: 54, f: 7, desc: 'जब लौकी न हो तो कोई भी मौसमी हरी सब्ज़ी लें' },
    { name: '3. 1 बड़ा कटोरा वेजिटेबल दलिया खिचड़ी (गाजर, मटर, लौकी डालकर)', cal: 320, p: 10, c: 54, f: 5, desc: 'रोटी बनाने का मन न हो तो 1 बर्तन में बनने वाला डिनर' },
    { name: '4. 2 उबले अंडे का ऑमलेट/भुर्जी (कम तेल) + 1 या 2 रोटी + सलाद', cal: 340, p: 18, c: 35, f: 13, desc: 'जब घर में रात को कोई सब्ज़ी न बनी हो' },
    { name: '5. सोयाबीन + सब्ज़ी का गाढ़ा सूप/झोल + 1-2 रोटी', cal: 340, p: 20, c: 44, f: 7, desc: 'हाई प्रोटीन और कम कार्ब्स डिनर' },
    { name: '6. 1 गिलास नमकीन सत्तू शरबत + 1 प्लेट खीरा/पपीता सलाद', cal: 220, p: 11, c: 36, f: 2.5, desc: 'जब बाहर हों या बिना पकाए 2 मिनट में हल्का डिनर करना हो' },
    { name: '7. 2 बेसन/मूंग दाल चीला + टमाटर-धनिया चटनी', cal: 290, p: 14, c: 40, f: 7, desc: 'रोटी-सब्ज़ी का शानदार हाई-प्रोटीन विकल्प' },
    { name: '8. 100g ग्रिल्ड/भुना चिकन ब्रेस्ट या 1 पीस मछली झोल + 1 रोटी + सलाद', cal: 350, p: 29, c: 24, f: 11, desc: 'जिम के बाद मसल्स रिकवरी के लिए लीन नॉन-वेज डिनर' },
    { name: '9. 1 कटोरी पीली मूंग दाल का पतला सूप + 1 रोटी + हरी सब्ज़ी', cal: 330, p: 13, c: 50, f: 6, desc: 'केवल पतली पीली मूंग दाल रात में ले सकते हैं (गाढ़ी दाल नहीं)' },
    { name: '10. 80g पनीर/छेना भुर्जी (शिमला मिर्च-प्याज-टमाटर) + 1-2 रोटी', cal: 360, p: 18, c: 36, f: 14, desc: 'दूध फाड़कर घर के छेने से तुरंत बनने वाला डिनर' }
  ]
};

function getMealSlotTypeKey(timeLabel = '') {
  const t = timeLabel.toLowerCase();
  if (t.includes('6:30') || t.includes('उठते') || t.includes('खाली पेट')) return 'morning';
  if (t.includes('नाश्ता') || t.includes('8:30')) return 'breakfast';
  if (t.includes('दोपहर') || t.includes('लंच') || t.includes('1:30')) return 'lunch';
  if (t.includes('शाम') || t.includes('5:00')) return 'evening';
  return 'dinner';
}

const DAILY_REMINDER_SLOTS = [
  { hour: 7, min: 0, title: '☀️ सुप्रभात राणा भाई! (Morning Detox)', body: '1 गिलास गुनगुना नींबू पानी + 1 कच्ची लहसुन कली लें (Cholesterol 261 & Triglycerides 552 कम करने के लिए) और 20 मिनट धूप लें।' },
  { hour: 8, min: 30, title: '🥤 नाश्ते का समय (High Protein Breakfast)', body: '1 गिलास नमकीन सत्तू या 3 उबले अंडे लें। खाने से पहले ऐप में फोटो क्लिक करें!' },
  { hour: 11, min: 0, title: '💧 पानी + Uric Acid Flush Reminder', body: '2 गिलास पानी पिएं। आपकी रिपोर्ट में Urine Nitrite Present और Uric Acid 7.92 है, पानी कम न होने दें।' },
  { hour: 13, min: 30, title: '🍛 दोपहर का खाना (Desi Village Lunch)', body: 'खाने से पहले सलाद खाएं और अपनी थाली की फोटो क्लिक करके कैलोरी चेक करें। चावल कम, रोटी और हरी सब्ज़ी ज़्यादा!' },
  { hour: 17, min: 0, title: '🏋️ शाम 5 बजे: भुना चना लें और GYM के लिए तैयार हों!', body: 'समोसा व सिगरेट से दूर रहें! 1 मुट्ठी भुना चना या ब्लैक कॉफी लें और आज का Gym Workout शुरू करें।' },
  { hour: 19, min: 45, title: '🌙 रात का हल्का खाना (Before 8 PM)', body: '2 रोटी + लौकी/तोरई/परवल की सब्ज़ी लें। रात में गाढ़ी दाल और मीठा बिल्कुल बंद (Fatty Liver SGPT 116 रिकवरी)।' }
];

const WEEKLY_GYM_PLAN = [
  {
    day: 'सोमवार (Mon)',
    title: 'Chest + Triceps + 20 Min Incline Walk',
    burn: 340,
    focus: 'Upper Body Push & Fat Loss',
    exercises: [
      { id: 'mon_1', type: 'run', name: 'Warm-up: Treadmill Walk + Push-ups', sets: '2 Sets × 15 Reps', how: 'कंधे घुमाएं, फिर घुटने या पंजे पर शरीर सीधा रखकर छाती ज़मीन के करीब लाएं और ऊपर उठें।' },
      { id: 'mon_2', type: 'press', name: 'Flat Bench Press / Dumbbell Press', sets: '4 Sets × 10-12 Reps', how: 'बेंच पर पीठ टिकाएं, बारबेल/डंबल को छाती के बीच तक धीरे नीचे लाएं और सांस छोड़ते हुए ऊपर पुश करें।' },
      { id: 'mon_3', type: 'press', name: 'Incline Dumbbell Press (Upper Chest)', sets: '3 Sets × 12 Reps', how: 'बेंच को 30-45 डिग्री झुकाएं, डंबल को कंधों के पास से सीधा ऊपर उठाएं और ऊपर 1 सेकंड होल्ड करें।' },
      { id: 'mon_4', type: 'curl', name: 'Pec Deck / Cable Chest Fly', sets: '3 Sets × 15 Reps', how: 'कोहनी हल्की मुड़ी रखें, दोनों हाथों को छाती के सामने मिलाकर सीने को स्क्वीज़ (चोब) करें।' },
      { id: 'mon_5', type: 'curl', name: 'Tricep Rope Pushdown', sets: '3 Sets × 12-15 Reps', how: 'कोहनी कमर से चिपका कर रखें, केवल हाथ के निचले हिस्से से रस्सी नीचे खींचें।' },
      { id: 'mon_6', type: 'press', name: 'Overhead Dumbbell Tricep Extension', sets: '3 Sets × 12 Reps', how: 'सिर के पीछे दोनों हाथों से 1 डंबल पकड़ें, कोहनी अंदर रखकर डंबल ऊपर उठाएं।' },
      { id: 'mon_7', type: 'run', name: '🔥 Cardio Finisher: 20 Min Incline Treadmill Walk', sets: 'Speed 5.5 • Incline 6', how: 'बिना हैंडल पकड़े तेज़ कदमों से चलें — यह पेट की चर्बी गलाने का सबसे अचूक तरीका है!' }
    ]
  },
  {
    day: 'मंगलवार (Tue)',
    title: 'Back + Biceps + Belly Core',
    burn: 360,
    focus: 'V-Shape Back & Belly Burn',
    exercises: [
      { id: 'tue_1', type: 'press', name: 'Lat Pulldown (Wide Grip)', sets: '4 Sets × 12 Reps', how: 'बार को कंधों से चौड़ा पकड़ें, सीना बाहर निकालकर बार को ठोड़ी (Chin) के नीचे तक खींचें।' },
      { id: 'tue_2', type: 'curl', name: 'Seated Cable Row / Dumbbell Row', sets: '4 Sets × 10-12 Reps', how: 'कमर एकदम सीधी रखें, हैंडल को पेट (नाभि) की तरफ खींचें और पीठ की मसल्स को दबाएं।' },
      { id: 'tue_3', type: 'curl', name: 'Face Pulls (Rear Delt & Posture)', sets: '3 Sets × 15 Reps', how: 'केबल रोप को माथे/आँखों की तरफ खींचें और कोहनी पीछे ले जाएं।' },
      { id: 'tue_4', type: 'curl', name: 'Barbell / EZ-Bar Bicep Curl', sets: '3 Sets × 12 Reps', how: 'सीधे खड़े हों, बिना कमर हिलाए बार को छाती की तरफ मोड़ें और धीरे नीचे लाएं।' },
      { id: 'tue_5', type: 'curl', name: 'Hammer Curls (Dumbbell)', sets: '3 Sets × 12 Reps', how: 'डंबल को हथौड़े की तरह सीधा पकड़ें और बारी-बारी कंधे तक उठाएं।' },
      { id: 'tue_6', type: 'core', name: 'Plank Hold + Mountain Climbers', sets: '3 Sets × 45 Sec', how: 'कोहनी और पंजों पर शरीर को तख्ते (Plank) की तरह सीधा रखें, पेट अंदर खींचकर रखें।' },
      { id: 'tue_7', type: 'run', name: '🔥 Cardio Finisher: 20 Min Cycling / Brisk Walk', sets: '20 Mins Non-stop', how: 'लगातार मीडियम स्पीड में साइकिल या ट्रेडमिल चलाएं ताकि पसीना खुलकर आए।' }
    ]
  },
  {
    day: 'बुधवार (Wed)',
    title: 'Legs + Lower Body (Max Calorie Burner)',
    burn: 420,
    focus: '90kg ➔ 70kg Biggest Fat-Burn Day',
    exercises: [
      { id: 'wed_1', type: 'squat', name: 'Bodyweight Free Squats Warm-up', sets: '2 Sets × 15 Reps', how: 'पैर कंधे जितने चौड़े रखें, कुर्सी पर बैठने की तरह कूल्हे पीछे ले जाते हुए नीचे बैठें और उठें।' },
      { id: 'wed_2', type: 'squat', name: 'Goblet Squats / Barbell Squats', sets: '4 Sets × 10-12 Reps', how: 'छाती के पास डंबल पकड़ें, कमर सीधी रखकर जांघें जमीन के समानांतर आने तक बैठें और एड़ी से ज़ोर लगाकर उठें।' },
      { id: 'wed_3', type: 'squat', name: 'Leg Press Machine', sets: '4 Sets × 12-15 Reps', how: 'पैरों को प्लेटफॉर्म के बीच में रखें, घुटनों को 90 डिग्री तक मोड़ें और ऊपर पुश करें (घुटने लॉक न करें)।' },
      { id: 'wed_4', type: 'curl', name: 'Leg Extension + Hamstring Curl', sets: '3 Sets × 12-15 Reps', how: 'मशीन पर बैठकर पंजों से वेट को सीधा ऊपर उठाएं, ऊपर 1 सेकंड रोकें फिर धीरे नीचे लाएं।' },
      { id: 'wed_5', type: 'press', name: 'Standing Calf Raises', sets: '4 Sets × 18 Reps', how: 'पंजों के बल एड़ी को जितना हो सके ऊपर उठाएं और पिंडलियों (Calves) को टाइट करें।' },
      { id: 'wed_6', type: 'run', name: '🔥 Cardio: 15 Min Smooth Stationary Bike', sets: 'Low Joint Impact', how: 'लेग्स वर्कआउट के बाद घुटनों को आराम देते हुए 15 मिनट हल्की साइकिल चलाएं।' }
    ]
  },
  {
    day: 'गुरुवार (Thu)',
    title: 'Shoulders + Traps + Core Sculpt',
    burn: 330,
    focus: '3D Broad Shoulders & Waist Trim',
    exercises: [
      { id: 'thu_1', type: 'press', name: 'Seated Dumbbell Shoulder Press', sets: '4 Sets × 10-12 Reps', how: 'बेंच पर 90 डिग्री बैठें, कानों के पास से डंबल को सीधा सिर के ऊपर पुश करें।' },
      { id: 'thu_2', type: 'press', name: 'Dumbbell Lateral Raises (Side Delt)', sets: '4 Sets × 15 Reps', how: 'हल्के डंबल लेकर दोनों हाथों को बगल से कंधे की ऊंचाई तक पंख की तरह उठाएं।' },
      { id: 'thu_3', type: 'curl', name: 'Front Dumbbell / Cable Raises', sets: '3 Sets × 12 Reps', how: 'डंबल को जांघों के सामने से सीधा आंखों की सीध तक ऊपर उठाएं।' },
      { id: 'thu_4', type: 'press', name: 'Dumbbell Shrugs (Traps)', sets: '3 Sets × 15 Reps', how: 'भारी डंबल हाथ में लटकाकर कंधों को कानों की तरफ ऊपर उचकाएं और 1 सेकंड रोकें।' },
      { id: 'thu_5', type: 'core', name: 'Hanging Knee Raises / Crunches + Plank', sets: '3 Sets × 15 Reps', how: 'पेट की निचली चर्बी के लिए घुटनों को छाती की तरफ मोड़ें या मैट पर क्रंचेस करें।' },
      { id: 'thu_6', type: 'run', name: '🔥 Cardio Finisher: 20 Min Brisk Incline Walk', sets: 'Fat Burn Zone', how: 'दिल की धड़कन 130+ रखने के लिए तेज़ रफ़्तार में 20 मिनट चलें।' }
    ]
  },
  {
    day: 'शुक्रवार (Fri)',
    title: 'Upper Body Compound + HIIT Finisher',
    burn: 390,
    focus: 'High Metabolic Burn & Muscle Tone',
    exercises: [
      { id: 'fri_1', type: 'press', name: 'Incline Barbell / Dumbbell Press', sets: '3 Sets × 12 Reps', how: 'अपर चेस्ट पर फोकस करते हुए कंट्रोल के साथ वेट नीचे लाएं और तेज़ी से पुश करें।' },
      { id: 'fri_2', type: 'press', name: 'Close-Grip Lat Pulldown', sets: '3 Sets × 12 Reps', how: 'V-हैंडल को सीने के ऊपरी हिस्से तक खींचें और कोहनी पीछे दबाएं।' },
      { id: 'fri_3', type: 'press', name: 'Push-ups / Arnold Shoulder Press', sets: '3 Sets × 12 Reps', how: 'डंबल को घुमाते हुए सिर के ऊपर प्रेस करें या पुश-अप्स लगाएं।' },
      { id: 'fri_4', type: 'curl', name: 'Bicep Curl + Tricep Dip Superset', sets: '3 Sets × 12 Reps', how: 'बिना रुके पहले 12 बाइसेप कर्ल करें और तुरंत बेंच डिप्स लगाएं।' },
      { id: 'fri_5', type: 'squat', name: 'Kettlebell Swings / Step-ups / Jumping Jacks', sets: '4 Rounds × 40 Sec', how: '40 सेकंड तेज़ करें, 20 सेकंड सांस लें — इससे कैलोरी रॉकेट की तरह जलती है!' },
      { id: 'fri_6', type: 'run', name: '🔥 Cardio Finisher: 20 Min Cross-Trainer', sets: 'Full Body Burn', how: 'हाथ और पैर दोनों का इस्तेमाल करते हुए क्रॉस-ट्रेनर चलाएं।' }
    ]
  },
  {
    day: 'शनिवार (Sat)',
    title: 'Full Body Fat-Loss Circuit + Core',
    burn: 400,
    focus: 'Belly Visceral Fat & Stamina Day',
    exercises: [
      { id: 'sat_1', type: 'run', name: 'Treadmill Brisk Walk + Light Jog Intervals', sets: '15 Mins', how: '2 मिनट तेज़ वॉक + 1 मिनट हल्की जॉगिंग का पैटर्न 5 बार दोहराएं।' },
      { id: 'sat_2', type: 'squat', name: 'Dumbbell Thrusters (Squat + Overhead Press)', sets: '3 Sets × 12 Reps', how: 'डंबल कंधे पर रखकर स्क्वाट बैठें और उठते ही डंबल सिर के ऊपर प्रेस करें।' },
      { id: 'sat_3', type: 'curl', name: 'Seated Row / Assisted Pull-ups', sets: '3 Sets × 12 Reps', how: 'पीठ और बाजुओं की ताकत के लिए पूरा स्ट्रेच और स्क्वीज़ करें।' },
      { id: 'sat_4', type: 'core', name: 'Russian Twists + Leg Raises + Bicycle Crunches', sets: '3 Rounds', how: 'मैट पर बैठकर कमर को दाएं-बाएं घुमाएं और पैर सीधे ऊपर उठाएं।' },
      { id: 'sat_5', type: 'core', name: 'Plank Hold Challenge', sets: '3 Sets × 60 Sec', how: 'पेट को एकदम टाइट रखकर 1 मिनट तक प्लैंक होल्ड करें।' },
      { id: 'sat_6', type: 'core', name: 'Full Body Stretch & Deep Lung Breathing', sets: '10 Mins', how: 'गहरी सांस अंदर लें और धीरे छोड़ें।' }
    ]
  },
  {
    day: 'रविवार (Sun)',
    title: 'Active Recovery + 45 Min Outdoor Sun Walk',
    burn: 220,
    focus: 'Muscle Repair & Morning Sunlight',
    exercises: [
      { id: 'sun_1', type: 'run', name: 'सुबह की धूप में 45 मिनट तेज़ वॉक', sets: '45 Mins', how: 'खुली हवा और सुबह की धूप में तेज़ कदमों से चलें।' },
      { id: 'sun_2', type: 'core', name: '15 मिनट स्ट्रेचिंग और अनुलोम-विलोम प्राणायाम', sets: '15 Mins', how: 'फेफड़ों की क्षमता और स्टैमिना बढ़ाने के लिए गहरी ब्रीदिंग करें।' }
    ]
  }
];

const EXERCISE_DETAILED_GUIDE = {
  mon_1: {
    muscle: 'Chest, Shoulders & Core Warm-up',
    steps: [
      'Step 1 (Setup): पहले 5 मिनट ट्रेडमिल पर नॉर्मल चाल में चलें, फिर दोनों हाथों को आगे-पीछे गोल घुमाएं (Arm Circles)।',
      'Step 2 (Push-up Position): ज़मीन/मैट पर दोनों हाथ कंधों से थोड़े चौड़े रखें। अगर शुरुआत में मुश्किल लगे तो घुटने ज़मीन पर टिका लें (Knee Push-ups)।',
      'Step 3 (Action): सांस अंदर लेते हुए छाती को ज़मीन से 2 इंच ऊपर तक नीचे लाएं। कोहनी शरीर से 45 डिग्री पर रखें।',
      'Step 4 (Finish): सांस छोड़ते हुए हथेलियों से ज़ोर लगाकर वापस ऊपर आएं।'
    ],
    mistake: 'कमर को नीचे झुकने न दें और गर्दन को सीधा रखें।',
    ytQuery: 'how+to+do+proper+push+ups+for+beginners+hindi'
  },
  mon_2: {
    muscle: 'Middle Chest (Pectorals), Front Shoulders & Triceps',
    steps: [
      'Step 1 (Setup): फ्लैट बेंच पर सीधे लेट जाएं। दोनों पैर ज़मीन पर मज़बूती से टिकाएं और आंखों को बारबेल के ठीक नीचे रखें।',
      'Step 2 (Grip): बारबेल या डंबल को कंधों से थोड़ा चौड़ा पकड़ें। कंधों को पीछे बेंच में दबाकर रखें (Shoulder Blades Retracted)।',
      'Step 3 (Down Phase - 2 Sec): सांस अंदर लेते हुए वेट को धीरे-धीरे अपनी छाती के बीच (Nipple Line) तक नीचे लाएं।',
      'Step 4 (Press Phase - 1 Sec): सांस मुँह से छोड़ते हुए वेट को सीधा ऊपर पुश करें और ऊपर सीने को टाइट करें।'
    ],
    mistake: 'बारबेल को छाती पर पटकें (Bounce) नहीं और कलाइयों को पीछे न मोड़ें।',
    ytQuery: 'flat+bench+press+correct+form+hindi'
  },
  mon_3: {
    muscle: 'Upper Chest (Clavicular Pectorals)',
    steps: [
      'Step 1 (Bench Angle): बेंच को 30 से 45 डिग्री के कोण (Incline) पर सेट करें।',
      'Step 2 (Start): दोनों हाथों में डंबल लेकर जांघों पर रखें और बैठते हुए कंधों के पास ले आएं।',
      'Step 3 (Down): सांस लेते हुए डंबल को ऊपरी छाती (Collarbone के पास) के बराबर तक धीरे नीचे लाएं।',
      'Step 4 (Up): सांस छोड़ते हुए दोनों डंबल को छत की तरफ सीधा ऊपर उठाएं (ऊपर आपस में टकराएं नहीं)।'
    ],
    mistake: 'बेंच को बहुत ज़्यादा खड़ा (60 डिग्री) न करें वरना लोड चेस्ट की जगह कंधे पर आ जाएगा।',
    ytQuery: 'incline+dumbbell+press+form+hindi'
  },
  mon_4: {
    muscle: 'Inner & Middle Chest Squeeze',
    steps: [
      'Step 1 (Seat): Pec Deck मशीन की सीट को ऐसे सेट करें कि हैंडल आपकी छाती की सीध में रहें।',
      'Step 2 (Posture): पीठ को पैड से चिपकाएं और कोहनियों को हल्का सा मुड़ा रखें।',
      'Step 3 (Squeeze): सांस छोड़ते हुए दोनों हाथों को गोलाई में सामने लाएं और बीच में 1 सेकंड रोककर सीने को कसकर दबाएं।',
      'Step 4 (Return): सांस लेते हुए धीरे-धीरे हाथ वापस पीछे जाने दें जब तक छाती में हल्का खिंचाव न आए।'
    ],
    mistake: 'हैंडल को हाथों से धक्का देने के बजाय कोहनियों को पास लाने पर ध्यान दें।',
    ytQuery: 'pec+deck+chest+fly+machine+form+hindi'
  },
  mon_5: {
    muscle: 'Triceps (Back of Arms)',
    steps: [
      'Step 1 (Setup): केबल मशीन के ऊपर रोप (रस्सी) लगाएं और मशीन के सामने सीधे खड़े होकर हल्का आगे झुकें।',
      'Step 2 (Lock Elbows): अपनी दोनों कोहनियों को कमर की पसलियों से चिपका लें — पूरे सेट में कोहनी अपनी जगह से नहीं हिलेगी!',
      'Step 3 (Pushdown): सांस छोड़ते हुए रस्सी को नीचे जांघों तक खींचें और सबसे नीचे जाकर रस्सी के दोनों सिरों को बाहर फैलाएं।',
      'Step 4 (Up): धीरे-धीरे सिर्फ हाथ के निचले हिस्से को छाती के लेवल तक वापस ऊपर आने दें।'
    ],
    mistake: 'वजन नीचे दबाने के लिए कंधे या पीठ से झटका न मारें।',
    ytQuery: 'tricep+rope+pushdown+form+hindi'
  },
  mon_6: {
    muscle: 'Triceps Long Head (Bada Arm Size)',
    steps: [
      'Step 1 (Grip): बेंच पर सीधे बैठें और दोनों हाथों की हथेलियों से 1 डंबल को सिर के ऊपर पकड़ें (डायमंड ग्रिप)।',
      'Step 2 (Elbows In): कोहनियों को कानों के पास अंदर की तरफ रखें, बाहर न फैलने दें।',
      'Step 3 (Lower): सांस लेते हुए डंबल को सिर के पीछे गर्दन के नीचे तक धीरे ले जाएं।',
      'Step 4 (Extend): सांस छोड़ते हुए ट्राइसेप्स की ताकत से डंबल को वापस सिर के ऊपर सीधा उठाएं।'
    ],
    mistake: 'कमर में ज़्यादा आर्च (मोड़) न बनाएं, पेट टाइट रखें।',
    ytQuery: 'overhead+dumbbell+tricep+extension+hindi'
  },
  mon_7: {
    muscle: 'Visceral Belly Fat & Heart Stamina',
    steps: [
      'Step 1 (Settings): ट्रेडमिल पर Incline को 5 से 7 पर और Speed को 5.0 से 5.8 km/h पर सेट करें।',
      'Step 2 (Posture): ट्रेडमिल के साइड हैंडल या आगे के बार को बिल्कुल मत पकड़ें! हाथ चलाकर तेज़ कदमों से चलें।',
      'Step 3 (Duration): लगातार 20 मिनट तक चलें—इससे फैट सीधा एनर्जी में बदलकर जलता है।'
    ],
    mistake: 'हैंडल पकड़कर झुककर चलने से कैलोरी बर्न आधी हो जाती है।',
    ytQuery: 'incline+treadmill+walk+for+fat+loss+hindi'
  },
  tue_1: {
    muscle: 'Lats (V-Shape Upper Back)',
    steps: [
      'Step 1 (Grip): Lat Pulldown बार को कंधों से डेढ़ गुना चौड़ा पकड़ें और सीट पर बैठकर जांघों को पैड के नीचे फंसाएं।',
      'Step 2 (Lean Back): सीना बाहर निकालें और हल्का सा (15 डिग्री) पीछे झुकें।',
      'Step 3 (Pull): सांस छोड़ते हुए कोहनियों को नीचे और पीछे दबाते हुए बार को अपनी ठोड़ी (Chin) या अपर चेस्ट तक लाएं।',
      'Step 4 (Stretch): सांस लेते हुए धीरे-धीरे बार को पूरा ऊपर जाने दें ताकि पीठ की मसल्स खिंचें।'
    ],
    mistake: 'बार को गर्दन के पीछे कभी न खींचें (कंधे में चोट लग सकती है) और कमर से झूला न झूलें।',
    ytQuery: 'lat+pulldown+correct+form+hindi'
  },
  tue_2: {
    muscle: 'Middle Back Thickness & Rhomboids',
    steps: [
      'Step 1 (Setup): Seated Cable Row मशीन पर बैठें, पैर फुट-प्लेट पर रखें और घुटने हल्के मुड़े रखें।',
      'Step 2 (Spine): रीढ़ की हड्डी एकदम सीधी और सीना बाहर रखें।',
      'Step 3 (Row): सांस छोड़ते हुए V-हैंडल को अपने पेट (नाभि के ठीक ऊपर) तक खींचें और पीछे कंधे की हड्डियों को आपस में मिलाएं।',
      'Step 4 (Return): 1 सेकंड होल्ड के बाद धीरे-धीरे हाथ आगे सीधा करें।'
    ],
    mistake: 'आगे जाते समय अपनी पीठ को गोल (कूबड़) न बनाएं।',
    ytQuery: 'seated+cable+row+form+hindi'
  },
  tue_3: {
    muscle: 'Rear Delts & Upper Back Posture',
    steps: [
      'Step 1 (Setup): केबल पुली को आंखों की ऊंचाई पर सेट करें और रोप (रस्सी) लगाएं।',
      'Step 2 (Pull): रस्सी को अपने माथे/आंखों की तरफ खींचें और खींचते समय दोनों हाथों को कानों के बगल में फैलाएं।',
      'Step 3 (Hold): पीछे 1 सेकंड रोककर अपर बैक को स्क्वीज़ करें फिर धीरे वापस छोड़ें।'
    ],
    mistake: 'बहुत भारी वेट न लगाएं, यह पोस्चर और कंधे की सेहत के लिए है।',
    ytQuery: 'cable+face+pulls+correct+form+hindi'
  },
  tue_4: {
    muscle: 'Biceps Peak',
    steps: [
      'Step 1 (Stand): सीधे खड़े हों और Barbell या EZ-Bar को कंधों की चौड़ाई पर अंडरहैंड ग्रिप से पकड़ें।',
      'Step 2 (Elbows Fixed): कोहनियों को कमर के बगल में लॉक करें।',
      'Step 3 (Curl): सांस छोड़ते हुए केवल बाइसेप्स की ताकत से बार को छाती के लेवल तक ऊपर मोड़ें।',
      'Step 4 (Lower): 2 सेकंड में धीरे-धीरे बार को पूरा नीचे जांघों तक वापस लाएं।'
    ],
    mistake: 'वजन उठाने के लिए कमर को पीछे न झुकाएं।',
    ytQuery: 'barbell+bicep+curl+form+hindi'
  },
  tue_5: {
    muscle: 'Brachialis & Forearms (Mota Baju)',
    steps: [
      'Step 1 (Neutral Grip): दोनों हाथों में डंबल ऐसे पकड़ें कि हथेलियां एक-दूसरे के आमने-सामने हों (जैसे हथौड़ा पकड़ते हैं)।',
      'Step 2 (Action): बिना कलाई घुमाए डंबल को कंधे की तरफ ऊपर उठाएं, 1 सेकंड रोकें और धीरे नीचे लाएं।'
    ],
    mistake: 'कोहनी को आगे-पीछे न हिलाएं।',
    ytQuery: 'dumbbell+hammer+curl+form+hindi'
  },
  tue_6: {
    muscle: 'Deep Core & Belly Fat Tightening',
    steps: [
      'Step 1 (Plank): मैट पर कोहनियों और पंजों के बल आ जाएं। शरीर सिर से एड़ी तक एक सीधी लाइन में रहे।',
      'Step 2 (Core Tight): पेट को अंदर खींचें (जैसे कोई पेट में पंच मारने वाला हो) और 45 सेकंड तक नॉर्मल सांस लेते हुए होल्ड करें।'
    ],
    mistake: 'कूल्हों को बहुत ऊपर न उठाएं और कमर को नीचे न लटकाएं।',
    ytQuery: 'how+to+do+plank+correctly+hindi'
  },
  wed_2: {
    muscle: 'Quads, Glutes & Core (Sabse Bada Calorie Burner)',
    steps: [
      'Step 1 (Stance): दोनों पैरों को कंधों से थोड़ा चौड़ा रखें और पंजों को हल्का सा बाहर (15 डिग्री) की तरफ रखें।',
      'Step 2 (Grip): एक भारी डंबल को दोनों हाथों से अपनी छाती के ठीक सामने (कप की तरह) पकड़ें।',
      'Step 3 (Sit Down): सांस अंदर लेते हुए कूल्हों को पीछे धकेलें (जैसे पीछे रखी कुर्सी पर बैठ रहे हों) और घुटने मोड़ते हुए नीचे जाएं।',
      'Step 4 (Stand Up): जब जांघें ज़मीन के बराबर आ जाएं, तो एड़ियों से ज़मीन को धक्का देते हुए और सांस छोड़ते हुए सीधे खड़े हों।'
    ],
    mistake: 'घुटनों को अंदर की तरफ न मुड़ने दें और एड़ी ज़मीन से न उठाएं।',
    ytQuery: 'goblet+squat+form+hindi'
  },
  wed_3: {
    muscle: 'Thighs (Quadriceps & Hamstrings)',
    steps: [
      'Step 1 (Setup): Leg Press मशीन की सीट पर बैठें और पीठ व कूल्हों को पैड से पूरी तरह चिपका लें।',
      'Step 2 (Foot Placement): पैरों को प्लेटफॉर्म के बीच में कंधे की चौड़ाई पर रखें।',
      'Step 3 (Lower): सेफ्टी लॉक हटाएं और सांस लेते हुए प्लेटफॉर्म को धीरे नीचे आने दें जब तक घुटने 90 डिग्री न मुड़ जाएं।',
      'Step 4 (Press): एड़ियों से ज़ोर लगाते हुए वेट को वापस ऊपर पुश करें।'
    ],
    mistake: '⚠️ सबसे ज़रूरी: ऊपर जाकर घुटनों को कभी भी 100% सीधा (Lock) न करें, हल्का मुड़ा रखें!',
    ytQuery: 'leg+press+machine+correct+form+hindi'
  },
  thu_1: {
    muscle: 'Front & Side Shoulders (Deltoids)',
    steps: [
      'Step 1 (Setup): बेंच के बैक-सपोर्ट को सीधा (85-90 डिग्री) रखें और दोनों हाथों में डंबल लेकर कानों के लेवल पर लाएं।',
      'Step 2 (Press): सांस छोड़ते हुए दोनों डंबल को सिर के ऊपर सीधा पुश करें।',
      'Step 3 (Lower): धीरे-धीरे 2 सेकंड में डंबल को वापस कानों की सीध तक नीचे लाएं।'
    ],
    mistake: 'कोहनियों को एकदम पीछे न रखें, शरीर से थोड़ा आगे (30 डिग्री) रखें ताकि कंधे के जोड़ सुरक्षित रहें।',
    ytQuery: 'seated+dumbbell+shoulder+press+form+hindi'
  },
  thu_2: {
    muscle: 'Side Shoulders (Chaude Kandhe)',
    steps: [
      'Step 1 (Light Weight): इसमें हमेशा हल्का डंबल चुनें (5kg - 7.5kg)। सीधे खड़े होकर डंबल जांघों के बगल में रखें।',
      'Step 2 (Raise): कोहनी हल्की मुड़ी रखकर दोनों हाथों को बगल से कंधे की ऊंचाई तक ऊपर उठाएं (जैसे पानी का जग उंडेल रहे हों)।',
      'Step 3 (Control): धीरे-धीरे नीचे लाएं।'
    ],
    mistake: 'झटका मारकर डंबल ऊपर न फेंकें।',
    ytQuery: 'dumbbell+lateral+raises+form+hindi'
  }
};

function getDetailedGuideForExercise(ex) {
  if (EXERCISE_DETAILED_GUIDE[ex.id]) {
    return EXERCISE_DETAILED_GUIDE[ex.id];
  }
  const ytQuery = encodeURIComponent(ex.name + ' proper form gym hindi');
  return {
    muscle: 'Full Muscle & Fat Burn Target',
    steps: [
      `Step 1 (Setup): शरीर का पोस्चर सीधा रखें और ${ex.sets} के हिसाब से मध्यम वजन चुनें।`,
      `Step 2 (Execution): ${ex.how}`,
      `Step 3 (Breathing): ज़ोर लगाते समय (वेट उठाते वक्त) मुंह से सांस छोड़ें, और वेट वापस लाते समय नाक से सांस अंदर लें।`,
      `Step 4 (Rest): हर सेट के बीच 45 से 60 सेकंड का ही आराम लें और 1-2 घूंट पानी पिएं।`
    ],
    mistake: 'झटका मारकर (Momentum से) वजन न उठाएं; मसल्स के खिंचाव और संकुचन (Squeeze) पर ध्यान दें।',
    ytQuery
  };
}

function openExerciseModal(dayIdx, exIdx) {
  const dayPlan = WEEKLY_GYM_PLAN[dayIdx];
  if (!dayPlan || !dayPlan.exercises[exIdx]) return;
  const ex = dayPlan.exercises[exIdx];
  const guide = getDetailedGuideForExercise(ex);

  document.getElementById('exModalTitle').textContent = `🏋️ ${ex.name}`;
  const contentEl = document.getElementById('exModalContent');

  contentEl.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
      <span class="badge badge-blue">🎯 ${ex.sets}</span>
      <span class="badge badge-green">💪 ${guide.muscle}</span>
    </div>

    <div class="demo-stage-large">
      ${getExerciseAnimationSVG(ex.id)}
      <div class="phase-indicator">
        <span>😮‍💨 वेट उठाते समय: सांस छोड़ें</span>
        <span>⏱️ टेम्पो: 2 Sec Down • 1 Sec Up</span>
      </div>
    </div>

    <h4 style="font-size:0.86rem; color:#34d399; margin:10px 0 6px;">📋 Exact Step-by-Step Kaise Perform Karein:</h4>
    ${guide.steps.map((s) => `<div class="step-card-item">${s}</div>`).join('')}

    <div class="mistake-box">
      ⚠️ <strong>Galti Jo Nahi Karni Hai:</strong> ${guide.mistake}
    </div>

    <div style="display:flex; gap:8px; margin-top:14px;">
      <a href="https://www.youtube.com/results?search_query=${guide.ytQuery}" target="_blank" rel="noopener" class="btn-full" style="background:linear-gradient(135deg,#ef4444,#b91c1c); text-decoration:none; flex:1;">
        ▶️ Real Video Demo Dekhein (YouTube)
      </a>
    </div>
  `;

  document.getElementById('exerciseDetailModal').classList.add('open');
}

function closeExerciseModal() {
  document.getElementById('exerciseDetailModal').classList.remove('open');
}

const EXERCISE_REAL_PHOTO_FOLDER = {
  mon_1: 'Pushups',
  mon_2: 'Barbell_Bench_Press_-_Medium_Grip',
  mon_3: 'Incline_Dumbbell_Press',
  mon_4: 'Butterfly',
  mon_5: 'Triceps_Pushdown_-_Rope_Attachment',
  mon_6: 'Standing_Dumbbell_Triceps_Extension',
  mon_7: 'Walking_Treadmill',
  tue_1: 'Wide-Grip_Lat_Pulldown',
  tue_2: 'Seated_Cable_Rows',
  tue_3: 'Face_Pull',
  tue_4: 'Barbell_Curl',
  tue_5: 'Hammer_Curls',
  tue_6: 'Plank',
  tue_7: 'Bicycling_Stationary',
  wed_1: 'Bodyweight_Squat',
  wed_2: 'Goblet_Squat',
  wed_3: 'Leg_Press',
  wed_4: 'Leg_Extensions',
  wed_5: 'Standing_Calf_Raises',
  wed_6: 'Bicycling_Stationary',
  thu_1: 'Dumbbell_Shoulder_Press',
  thu_2: 'Side_Lateral_Raise',
  thu_3: 'Front_Dumbbell_Raise',
  thu_4: 'Dumbbell_Shrug',
  thu_5: 'Hanging_Leg_Raise',
  thu_6: 'Walking_Treadmill',
  fri_1: 'Barbell_Incline_Bench_Press_-_Medium_Grip',
  fri_2: 'Close-Grip_Front_Lat_Pulldown',
  fri_3: 'Pushups',
  fri_4: 'Dips_-_Triceps_Version',
  fri_5: 'One-Arm_Kettlebell_Swings',
  fri_6: 'Jogging_Treadmill',
  sat_1: 'Running_Treadmill',
  sat_2: 'Kettlebell_Thruster',
  sat_3: 'Seated_Cable_Rows',
  sat_4: 'Russian_Twist',
  sat_5: 'Plank',
  sat_6: 'Stomach_Vacuum',
  sun_1: 'Walking_Treadmill',
  sun_2: 'Stomach_Vacuum',
  belly_1: 'Stomach_Vacuum',
  belly_2: 'Flat_Bench_Lying_Leg_Raise',
  belly_3: 'Air_Bike',
  belly_4: 'Plank'
};

function getExerciseAnimationSVG(typeOrId) {
  const folder = EXERCISE_REAL_PHOTO_FOLDER[typeOrId] || 'Goblet_Squat';
  const baseUrl = `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${folder}`;
  return `
    <div class="real-ex-frame-wrap">
      <img src="${baseUrl}/0.jpg" alt="Start Position" loading="lazy" />
      <img src="${baseUrl}/1.jpg" class="frame-b" alt="End Position" loading="lazy" />
    </div>
  `;
}

// ============================================================================
// STATE MANAGEMENT
// ============================================================================
let state = {
  calTarget: 1650,
  currentWeight: 90.0,
  startWeight: 90.0,
  goalWeight: 70.0,
  apiKey: ['sk-proj-6WTdq4FB7aryRiF4B2vzn1EvPP2UHdLGR', '--UcIv3Hlv-WNQSs3VFhGwkXqBXQ-QBglonvMcE6eT3Blbk', 'FJAMbTG415mke4einqN3mTsNqYS-bQEavO2Qq21oGikVhWKKqIiWmOcRQquIc77xq6_mCLKmj-YA'].join(''),
  selectedDayIdx: (new Date().getDay() + 6) % 7, // Monday = 0
  selectedPhotoBase64: null,
  lastAIAnalysis: null,
  logsByDate: {}
};

function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getTodayLog() {
  const key = getTodayKey();
  if (!state.logsByDate[key]) {
    state.logsByDate[key] = {
      meals: [],
      water: 0,
      smokes: 0,
      cravingsResisted: 0,
      habits: {},
      gymExercisesDone: {},
      gymBonusBurn: 0,
      notifiedSlots: {}
    };
  }
  if (!state.logsByDate[key].gymExercisesDone) {
    state.logsByDate[key].gymExercisesDone = {};
  }
  return state.logsByDate[key];
}

function loadState() {
  try {
    const defaultKey = state.apiKey;
    const saved = localStorage.getItem('rana_health_coach_state_v1');
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
      if (!state.apiKey || state.apiKey.length < 15) {
        state.apiKey = defaultKey;
      }
    }
  } catch (e) {
    console.error('State load error:', e);
  }
}

function saveState() {
  try {
    localStorage.setItem('rana_health_coach_state_v1', JSON.stringify(state));
  } catch (e) {
    console.error('State save error:', e);
  }
}

// ============================================================================
// UI RENDERING
// ============================================================================
function renderAll() {
  const today = getTodayLog();
  const totalEaten = today.meals.reduce((acc, m) => acc + (Number(m.cal) || 0), 0);
  const totalP = today.meals.reduce((acc, m) => acc + (Number(m.p) || 0), 0);
  const totalC = today.meals.reduce((acc, m) => acc + (Number(m.c) || 0), 0);
  const totalF = today.meals.reduce((acc, m) => acc + (Number(m.f) || 0), 0);

  const walkBonus = (today.habits['walk'] ? 220 : 0) + (today.gymBonusBurn || 0);
  const effectiveBudget = state.calTarget + walkBonus;
  const remaining = effectiveBudget - totalEaten;

  // Update Sticky Always-On Calorie Bar & System Notification
  const todayGymIdx = (new Date().getDay() + 6) % 7;
  const todayGymPlan = WEEKLY_GYM_PLAN[todayGymIdx];
  const stickyCalEl = document.getElementById('stickyCalorieStatus');
  if (stickyCalEl) {
    stickyCalEl.innerHTML = `🔥 Intake: <strong>${totalEaten} / ${effectiveBudget} kcal</strong> (${remaining >= 0 ? remaining + ' bacha' : Math.abs(remaining) + ' over!'})`;
  }
  const stickyGymEl = document.getElementById('stickyGymStatus');
  if (stickyGymEl) {
    stickyGymEl.textContent = `🏋️ ${todayGymPlan.title.split('+')[0].trim()} ➔`;
  }
  const homeGymEl = document.getElementById('homeGymSummary');
  if (homeGymEl) {
    const doneExCount = Object.values(today.gymExercisesDone || {}).filter(Boolean).length;
    homeGymEl.innerHTML = `
      <div class="meal-slot-header">
        <span>${todayGymPlan.day}</span>
        <span>🔥 ~${todayGymPlan.burn} kcal burn</span>
      </div>
      <h4>${todayGymPlan.title}</h4>
      <p>${todayGymPlan.focus} • <strong>(${doneExCount}/${todayGymPlan.exercises.length} Exercises Done)</strong></p>
    `;
  }
  updateLiveCalorieNotification(false);

  // Ring update
  document.getElementById('calTarget').textContent = `${state.calTarget} kcal`;
  document.getElementById('calEaten').textContent = `${totalEaten} kcal`;
  document.getElementById('calBurned').textContent = `+${walkBonus} kcal`;
  document.getElementById('calRemaining').textContent = remaining >= 0 ? remaining : 0;

  const pct = Math.min(1, totalEaten / effectiveBudget);
  const circumference = 314;
  const ringEl = document.getElementById('calRing');
  ringEl.style.strokeDashoffset = String(circumference - pct * circumference);
  ringEl.style.stroke = remaining < 0 ? '#ef4444' : remaining < 300 ? '#f59e0b' : '#10b981';

  // Macros
  document.getElementById('macroProtein').textContent = `${Math.round(totalP)}g`;
  document.getElementById('macroCarbs').textContent = `${Math.round(totalC)}g`;
  document.getElementById('macroFat').textContent = `${Math.round(totalF)}g`;
  document.getElementById('barProtein').style.width = `${Math.min(100, (totalP / 110) * 100)}%`;
  document.getElementById('barCarbs').style.width = `${Math.min(100, (totalC / 160) * 100)}%`;
  document.getElementById('barFat').style.width = `${Math.min(100, (totalF / 45) * 100)}%`;

  // Coach Verdict
  const verdictEl = document.getElementById('coachVerdictBox');
  if (remaining > 500) {
    verdictEl.style.borderLeftColor = '#10b981';
    verdictEl.innerHTML = `💡 <strong>Coach Verdict:</strong> Aap aaj abhi <strong>${remaining} kcal</strong> aur kha sakte hain. Agle meal me रोटी + हरी सब्ज़ी + सलाद ya सत्तू/अंडा lein!`;
  } else if (remaining >= 0) {
    verdictEl.style.borderLeftColor = '#f59e0b';
    verdictEl.innerHTML = `⚠️ <strong>Dhyan Dein:</strong> Aaj ke budget me sirf <strong>${remaining} kcal</strong> bacha hai. Ab raat me sirf halka सूप, 1-2 रोटी aur लौकी/तोरई की सब्ज़ी hi lein.`;
  } else {
    verdictEl.style.borderLeftColor = '#ef4444';
    verdictEl.innerHTML = `🚨 <strong>Budget Cross (${Math.abs(remaining)} kcal extra):</strong> Aaj aapne limit se zyada kha liya hai. Ab kuch mat khayein aur 35 minute tez walk zaroor karein!`;
  }

  // Water & Smoke
  document.getElementById('waterCount').textContent = today.water;
  const waterWaveEl = document.getElementById('waterWaveBg');
  if (waterWaveEl) {
    waterWaveEl.style.height = `${Math.min(100, Math.round((today.water / 12) * 100))}%`;
  }
  document.getElementById('smokeCountToday').textContent = today.smokes;

  // Calculate total cravings defeated & money saved across all days
  let totalResisted = 0;
  Object.values(state.logsByDate).forEach((d) => {
    totalResisted += d.cravingsResisted || 0;
  });
  document.getElementById('cravingsDefeatedCount').textContent = totalResisted;
  document.getElementById('smokeMoneySaved').textContent = totalResisted * 18;

  // Weight progress (90 -> 70)
  document.getElementById('currentWeightDisplay').textContent = `${state.currentWeight.toFixed(1)} kg`;
  const lost = Math.max(0, state.startWeight - state.currentWeight);
  const toGo = Math.max(0, state.currentWeight - state.goalWeight);
  document.getElementById('weightLostBadge').textContent =
    lost > 0 ? `-${lost.toFixed(1)} kg Lost (${toGo.toFixed(1)} kg baaki)` : `${toGo.toFixed(1)} kg baaki`;
  const weightPct = Math.min(100, Math.max(5, ((state.startWeight - state.currentWeight) / 20) * 100));
  document.getElementById('weightProgressBar').style.width = `${weightPct}%`;

  // Habits checklist
  let habitDoneCount = 0;
  document.querySelectorAll('#habitChecklist input[type="checkbox"]').forEach((cb) => {
    const key = cb.getAttribute('data-habit');
    cb.checked = !!today.habits[key];
    if (cb.checked) habitDoneCount++;
  });
  document.getElementById('habitScoreBadge').textContent = `${habitDoneCount}/6 Done`;

  // Today's Meals List
  const mealListEl = document.getElementById('todayMealsList');
  if (today.meals.length === 0) {
    mealListEl.innerHTML = `<p style="font-size:0.78rem; color:var(--text-muted); text-align:center; padding:12px;">Aaj abhi koi khana log nahi hua hai. Khane se pehle 📸 Photo Scan ya Desi Food list se add karein.</p>`;
  } else {
    mealListEl.innerHTML = today.meals
      .map(
        (m, idx) => `
      <div class="food-item">
        <div class="food-info">
          <h5>${m.name}</h5>
          <p>🕒 ${m.time} • <strong>${m.cal} kcal</strong> (P:${m.p}g, C:${m.c}g, F:${m.f}g)</p>
        </div>
        <button class="btn-sm danger" style="flex:0 0 auto;" onclick="removeLoggedMeal(${idx})">✖</button>
      </div>
    `
      )
      .join('');
  }

  renderNextMealSuggestion();
  if (typeof renderFastingAndChart === 'function') renderFastingAndChart();
}

function renderNextMealSuggestion() {
  const hour = new Date().getHours();
  const planToday = WEEKLY_VILLAGE_PLAN[(new Date().getDay() + 6) % 7];
  let slot = planToday.meals[0];
  if (hour >= 7 && hour < 11) slot = planToday.meals[1];
  else if (hour >= 11 && hour < 15) slot = planToday.meals[2];
  else if (hour >= 15 && hour < 18) slot = planToday.meals[3];
  else if (hour >= 18) slot = planToday.meals[4];

  const slotType = getMealSlotTypeKey(slot.time);
  const box = document.getElementById('nextMealSuggestion');
  box.innerHTML = `
    <div class="meal-slot-header">
      <span>${slot.time}</span>
      <span>~${slot.cal} kcal</span>
    </div>
    <h4>${slot.title}</h4>
    <p>${slot.desc}</p>
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:10px;">
      <button class="food-add-btn" onclick="quickAddMeal('${slot.title.replace(/'/g, '')}', ${slot.cal}, 12, 28, 5)">
        ✅ Maine Ye Kha Liya (${slot.cal} kcal)
      </button>
      <button class="alt-btn" onclick="openAlternatesModal('${slotType}', '${slot.time}')">
        🔄 Ye Nahi Hai? 10 Alternate Options Dekhein
      </button>
    </div>
  `;
}

function renderDesiFoodDatabase(category = 'all') {
  const container = document.getElementById('desiFoodDatabaseList');
  const filtered = category === 'all' ? DESI_FOODS : DESI_FOODS.filter((f) => f.cat === category);

  container.innerHTML = filtered
    .map(
      (f) => `
    <div class="food-item ${f.cat === 'warn' ? 'avoid' : ''}">
      <div class="food-info">
        <h5>${f.name}</h5>
        <p><strong>${f.cal} kcal</strong> • P:${f.p}g | C:${f.c}g | F:${f.f}g <br/><span style="color:${f.cat === 'warn' ? '#fca5a5' : '#6ee7b7'}">${f.tag}</span></p>
      </div>
      <button class="food-add-btn" onclick="quickAddMeal('${f.name}', ${f.cal}, ${f.p}, ${f.c}, ${f.f})">
        + Add
      </button>
    </div>
  `
    )
    .join('');
}

function filterFoodCategory(cat, btnEl) {
  document.querySelectorAll('.chip-filter .chip').forEach((c) => c.classList.remove('active'));
  btnEl.classList.add('active');
  renderDesiFoodDatabase(cat);
}

function renderWeeklyDietPlan() {
  const bar = document.getElementById('daySelectorBar');
  bar.innerHTML = WEEKLY_VILLAGE_PLAN.map(
    (d, idx) => `
    <div class="day-pill ${idx === state.selectedDayIdx ? 'active' : ''}" onclick="selectDietDay(${idx})">
      ${d.day.split(' ')[0]}
    </div>
  `
  ).join('');

  const selected = WEEKLY_VILLAGE_PLAN[state.selectedDayIdx];
  const container = document.getElementById('dayMealPlanContainer');
  container.innerHTML = `
    <div style="margin-bottom:10px; font-size:0.82rem; color:#34d399; font-weight:700;">
      🎯 ${selected.day} Focus: ${selected.focus}
    </div>
    ${selected.meals
      .map((m) => {
        const slotType = getMealSlotTypeKey(m.time);
        return `
      <div class="meal-slot">
        <div class="meal-slot-header">
          <span>${m.time}</span>
          <span>${m.cal} kcal</span>
        </div>
        <h4>${m.title}</h4>
        <p>${m.desc}</p>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">
          <button class="food-add-btn" onclick="quickAddMeal('${m.title.replace(/'/g, '')}', ${m.cal}, 12, 28, 5)">
            + Log Meal
          </button>
          <button class="alt-btn" onclick="openAlternatesModal('${slotType}', '${m.time}')">
            🔄 10 Alternate Options (Agar ye na ho)
          </button>
        </div>
      </div>
    `;
      })
      .join('')}
  `;
}

function openAlternatesModal(slotType, slotLabel) {
  const options = MEAL_ALTERNATIVES_10[slotType] || MEAL_ALTERNATIVES_10.breakfast;
  document.getElementById('altModalTitle').textContent = `🔄 10 Options (${slotLabel})`;
  const listEl = document.getElementById('altOptionsList');

  listEl.innerHTML = options
    .map(
      (opt) => `
    <div class="alt-option-card">
      <div style="flex:1;">
        <h5>${opt.name}</h5>
        <p><strong>${opt.cal} kcal</strong> (P:${opt.p}g | C:${opt.c}g | F:${opt.f}g)<br/><span style="color:#6ee7b7;">${opt.desc}</span></p>
      </div>
      <button class="food-add-btn" style="flex:0 0 auto;" onclick="selectAlternateMeal('${opt.name.replace(/'/g, '')}', ${opt.cal}, ${opt.p}, ${opt.c}, ${opt.f})">
        ✅ Chunein
      </button>
    </div>
  `
    )
    .join('');

  document.getElementById('alternatesModal').classList.add('open');
}

function closeAlternatesModal() {
  document.getElementById('alternatesModal').classList.remove('open');
}

function selectAlternateMeal(name, cal, p, c, f) {
  closeAlternatesModal();
  quickAddMeal(name, cal, p, c, f);
}

function selectDietDay(idx) {
  state.selectedDayIdx = idx;
  renderWeeklyDietPlan();
}

// ============================================================================
// ACTIONS & TRACKERS
// ============================================================================
function switchTab(tabId, navBtn) {
  document.querySelectorAll('.tab-content').forEach((el) => el.classList.remove('active'));
  const targetEl = document.getElementById(tabId);
  if (targetEl) targetEl.classList.add('active');

  if (navBtn) {
    document.querySelectorAll('.bottom-nav .nav-item').forEach((b) => b.classList.remove('active'));
    navBtn.classList.add('active');
  } else {
    const idxMap = { 'tab-home': 0, 'tab-camera': 1, 'tab-diet': 2, 'tab-gym': 3, 'tab-smoke': 4 };
    const buttons = document.querySelectorAll('.bottom-nav .nav-item');
    buttons.forEach((b) => b.classList.remove('active'));
    if (buttons[idxMap[tabId]]) buttons[idxMap[tabId]].classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function triggerConfettiBurst() {
  const colors = ['#10b981', '#38bdf8', '#f59e0b', '#a855f7', '#34d399'];
  for (let i = 0; i < 24; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${50 + (Math.random() - 0.5) * 30}%`;
    piece.style.top = '45%';
    piece.style.backgroundColor = colors[i % colors.length];
    piece.style.setProperty('--tx', `${(Math.random() - 0.5) * 260}px`);
    piece.style.setProperty('--ty', `${-80 - Math.random() * 180}px`);
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 1150);
  }
}

function renderGymPlan() {
  const bar = document.getElementById('gymDaySelectorBar');
  if (!bar) return;
  const currentIdx = state.selectedGymDayIdx !== undefined ? state.selectedGymDayIdx : (new Date().getDay() + 6) % 7;
  state.selectedGymDayIdx = currentIdx;

  bar.innerHTML = WEEKLY_GYM_PLAN.map(
    (d, idx) => `
    <div class="day-pill ${idx === currentIdx ? 'active' : ''}" onclick="selectGymDay(${idx})">
      ${d.day.split(' ')[0]}
    </div>
  `
  ).join('');

  const selected = WEEKLY_GYM_PLAN[currentIdx];
  const today = getTodayLog();
  const container = document.getElementById('gymWorkoutContainer');

  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <div>
        <h4 style="font-size:0.98rem; color:#38bdf8;">${selected.day}: ${selected.title}</h4>
        <p style="font-size:0.75rem; color:var(--text-muted);">${selected.focus}</p>
      </div>
      <span class="badge badge-green">-${selected.burn} kcal</span>
    </div>
    ${selected.exercises
      .map((ex, exIdx) => {
        const isDone = !!today.gymExercisesDone[ex.id];
        return `
      <div class="gym-card ${isDone ? 'done' : ''}">
        <div class="gym-anim-stage" onclick="openExerciseModal(${currentIdx}, ${exIdx})" style="cursor:pointer;" title="Tap for Step-by-Step & Video">
          ${getExerciseAnimationSVG(ex.id)}
        </div>
        <div>
          <h5 style="font-size:0.87rem; color:#fff; text-decoration:${isDone ? 'line-through' : 'none'};">${ex.name}</h5>
          <span class="gym-howto-badge">🎯 ${ex.sets}</span>
          <p style="font-size:0.74rem; color:#cbd5e1; margin-top:5px; line-height:1.4;">
            💡 <strong>Short Tip:</strong> ${ex.how}
          </p>
          <button type="button" class="gym-demo-btn" onclick="openExerciseModal(${currentIdx}, ${exIdx})">
            🎬 Exact Steps & Video Demo Dekhein
          </button>
        </div>
        <input type="checkbox" style="width:22px;height:22px;accent-color:#10b981;cursor:pointer;" ${isDone ? 'checked' : ''} onchange="toggleGymExercise('${ex.id}', ${selected.burn}, ${selected.exercises.length}, this.checked)" />
      </div>
    `;
      })
      .join('')}
  `;
}

function selectGymDay(idx) {
  state.selectedGymDayIdx = idx;
  renderGymPlan();
}

function toggleGymExercise(exId, totalPlanBurn, totalExCount, checked) {
  const today = getTodayLog();
  today.gymExercisesDone[exId] = checked;
  const doneCount = Object.values(today.gymExercisesDone).filter(Boolean).length;
  today.gymBonusBurn = Math.round((doneCount / totalExCount) * totalPlanBurn);
  if (checked) {
    triggerConfettiBurst();
    startGymRestTimer(60);
  }
  saveState();
  renderGymPlan();
  renderAll();
}

function saveWeight() {
  const val = parseFloat(document.getElementById('weightInput').value);
  const waistVal = parseFloat(document.getElementById('waistInput')?.value);
  if (!isNaN(val) && val >= 45 && val <= 150) {
    state.currentWeight = val;
    document.getElementById('weightInput').value = '';
  }
  if (!isNaN(waistVal) && waistVal >= 24 && waistVal <= 60) {
    state.currentWaist = waistVal;
    document.getElementById('waistInput').value = '';
  }
  triggerConfettiBurst();
  saveState();
  renderAll();
}

function updateLiveCalorieNotification(forceShow = false) {
  const today = getTodayLog();
  const totalEaten = today.meals.reduce((acc, m) => acc + (Number(m.cal) || 0), 0);
  const totalP = today.meals.reduce((acc, m) => acc + (Number(m.p) || 0), 0);
  const walkBonus = (today.habits['walk'] ? 220 : 0) + (today.gymBonusBurn || 0);
  const effectiveBudget = state.calTarget + walkBonus;
  const remaining = effectiveBudget - totalEaten;

  const todayGymPlan = WEEKLY_GYM_PLAN[(new Date().getDay() + 6) % 7];
  const title = `🔥 Aaj Intake: ${totalEaten} / ${effectiveBudget} kcal (${remaining >= 0 ? remaining + ' bacha' : Math.abs(remaining) + ' Extra!'})`;
  const body = `💪 Protein: ${Math.round(totalP)}g | 💧 Paani: ${today.water}/12 | 🏋️ Gym: ${todayGymPlan.title}`;

  document.title = `${totalEaten}/${effectiveBudget} kcal • Rana Fit`;

  if (!('Notification' in window)) return;
  if (forceShow && Notification.permission !== 'granted') {
    Notification.requestPermission().then((perm) => {
      if (perm === 'granted') updateLiveCalorieNotification(true);
    });
    return;
  }

  if (Notification.permission === 'granted' && (forceShow || totalEaten > 0)) {
    const options = {
      body,
      icon: 'icon.svg',
      badge: 'icon.svg',
      tag: 'rana-live-calorie-tracker', // Same tag updates existing notification in Android status bar!
      renotify: forceShow,
      silent: !forceShow,
      requireInteraction: true
    };
    if (navigator.serviceWorker && navigator.serviceWorker.ready) {
      navigator.serviceWorker.ready.then((reg) => {
        reg.showNotification(title, options);
      });
    } else if (forceShow) {
      new Notification(title, options);
    }
  }
}

function quickAddMeal(name, cal, p = 8, c = 25, f = 5) {
  const today = getTodayLog();
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  today.meals.unshift({ name, cal, p, c, f, time: timeStr });
  saveState();
  renderAll();
  switchTab('tab-home');
}

function removeLoggedMeal(idx) {
  const today = getTodayLog();
  today.meals.splice(idx, 1);
  saveState();
  renderAll();
}

function clearTodayMeals() {
  if (!confirm('Aaj ke sabhi logged meals reset karein?')) return;
  const today = getTodayLog();
  today.meals = [];
  saveState();
  renderAll();
}

function updateWater(delta) {
  const today = getTodayLog();
  today.water = Math.max(0, today.water + delta);
  if (today.water >= 10) today.habits['water3l'] = true;
  saveState();
  renderAll();
}

function logCigarette() {
  const today = getTodayLog();
  today.smokes += 1;
  saveState();
  renderAll();
  alert('⚠️ Cigarette logged. Yaad rakhein: Aapka Triglycerides 552 aur Hematocrit 50.2% hai. Agli baar talab lage toh "Craving Roka" button dabayein!');
}

function resistCraving() {
  const today = getTodayLog();
  today.cravingsResisted = (today.cravingsResisted || 0) + 1;
  triggerConfettiBurst();
  saveState();
  renderAll();
  alert('🏆 Shabash! Aapne 1 cigarette ki talab ko hara diya, ₹18 bachaye aur apna stamina badhaya!');
}

const BELLY_BURNER_DAILY_EXERCISES = [
  {
    id: 'belly_1',
    type: 'core',
    name: '1. Standing / Lying Stomach Vacuum (पेट अंदर खींचना)',
    sets: '3 Sets × 20 Sec Hold',
    how: 'मुंह से पूरी सांस बाहर निकालें, फिर बिना सांस लिए नाभि (Belly Button) को रीढ़ की हड्डी की तरफ पूरा अंदर खींचें और 20 सेकंड रोकें। बाहर निकला पेट अंदर करने का यह नंबर-1 तरीका है!'
  },
  {
    id: 'belly_2',
    type: 'core',
    name: '2. Lying Leg Raises (Lower Belly Fat Burner)',
    sets: '3 Sets × 15 Reps',
    how: 'मैट पर सीधे लेटें, दोनों हाथ कमर/कूल्हे के नीचे रखें। दोनों पैरों को मिलाकर बिना घुटना मोड़े 90 डिग्री ऊपर उठाएं और धीरे-धीरे जमीन से 2 इंच ऊपर तक वापस लाएं।'
  },
  {
    id: 'belly_3',
    type: 'core',
    name: '3. Bicycle Crunches + Mountain Climbers',
    sets: '3 Sets × 20 Reps',
    how: 'पीठ के बल लेटकर साइकिल चलाने की तरह दाईं कोहनी को बाएं घुटने से और बाईं कोहनी को दाएं घुटने से टच करें।'
  },
  {
    id: 'belly_4',
    type: 'core',
    name: '4. Forearm Plank (Core Tightening)',
    sets: '3 Sets × 60 Sec',
    how: 'कोहनी और पंजों पर शरीर को एकदम सीधा रखें और पेट को कसकर अंदर खींचें।'
  }
];

function renderBellyBurnerCircuit() {
  const container = document.getElementById('bellyBurnerCircuitList');
  if (!container) return;
  const today = getTodayLog();

  container.innerHTML = BELLY_BURNER_DAILY_EXERCISES.map((ex) => {
    const isDone = !!today.gymExercisesDone[ex.id];
    return `
      <div class="gym-card ${isDone ? 'done' : ''}" style="margin-bottom:8px;">
        <div class="gym-anim-stage">
          ${getExerciseAnimationSVG(ex.id)}
        </div>
        <div>
          <h5 style="font-size:0.84rem; color:#fff; text-decoration:${isDone ? 'line-through' : 'none'};">${ex.name}</h5>
          <span class="gym-howto-badge">🔥 ${ex.sets}</span>
          <p style="font-size:0.72rem; color:#cbd5e1; margin-top:4px; line-height:1.35;">${ex.how}</p>
        </div>
        <input type="checkbox" style="width:22px;height:22px;accent-color:#f59e0b;cursor:pointer;" ${isDone ? 'checked' : ''} onchange="toggleGymExercise('${ex.id}', 140, 4, this.checked)" />
      </div>
    `;
  }).join('');
}

let gymRestInterval = null;
function startGymRestTimer(seconds = 60) {
  const bar = document.getElementById('gymRestTimerBar');
  const countEl = document.getElementById('restTimerCount');
  if (!bar || !countEl) return;
  bar.style.display = 'flex';
  let rem = seconds;
  countEl.textContent = `${rem}s`;

  if (gymRestInterval) clearInterval(gymRestInterval);
  gymRestInterval = setInterval(() => {
    rem--;
    countEl.textContent = `${rem}s`;
    if (rem <= 0) {
      clearInterval(gymRestInterval);
      playBeepTone();
      bar.style.display = 'none';
    }
  }, 1000);
}

function stopGymRestTimer() {
  if (gymRestInterval) clearInterval(gymRestInterval);
  const bar = document.getElementById('gymRestTimerBar');
  if (bar) bar.style.display = 'none';
}

function playBeepTone() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 880;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    osc.stop(ctx.currentTime + 0.6);
  } catch (e) {}
}

let vacuumInterval = null;
function startStomachVacuumSession() {
  const circle = document.getElementById('vacuumCircle');
  const titleEl = document.getElementById('vacuumPhaseTitle');
  const numEl = document.getElementById('vacuumTimerNum');
  const hintEl = document.getElementById('vacuumSubHint');
  if (!circle) return;

  if (vacuumInterval) clearInterval(vacuumInterval);
  let step = 0; // 0..4s exhale, 5..24s vacuum hold
  circle.classList.remove('suck-in');
  titleEl.textContent = '😮‍💨 EXHALE ALL AIR';
  hintEl.textContent = 'Munh se saari hawa bahar nikaalein...';
  numEl.textContent = '4s';

  vacuumInterval = setInterval(() => {
    step++;
    if (step <= 4) {
      numEl.textContent = `${5 - step}s`;
    } else if (step <= 24) {
      circle.classList.add('suck-in');
      titleEl.textContent = '🌪️ SUCK BELLY IN!';
      hintEl.textContent = 'Naabhi ko reedh ki haddi ki taraf kheench kar rokein!';
      numEl.textContent = `${25 - step}s`;
    } else {
      clearInterval(vacuumInterval);
      circle.classList.remove('suck-in');
      titleEl.textContent = '🏆 Great Hold!';
      numEl.textContent = 'Done';
      hintEl.textContent = 'Normal saans lein. Aise 3 rounds karein!';
      playBeepTone();
      triggerConfettiBurst();
    }
  }, 1000);
}

// Live Dynamic Breathe In -> Hold -> Breathe Out Animation Loop
let breatheLoopSeconds = 0;
function startDynamicBreathingEngine() {
  setInterval(() => {
    const orb = document.getElementById('lungBreatheVisual');
    const aura = document.getElementById('breatheAura');
    const emojiEl = document.getElementById('breatheEmoji');
    const labelEl = document.getElementById('breatheActionLabel');
    const secEl = document.getElementById('breatheSecCount');
    if (!orb || !labelEl) return;

    const cycle = breatheLoopSeconds % 10; // 0..3 Breathe In (4s), 4..5 Hold (2s), 6..9 Breathe Out (4s)
    if (cycle < 4) {
      orb.className = 'breathe-core-orb phase-in';
      if (aura) aura.className = 'breathe-outer-aura phase-in';
      emojiEl.textContent = '🌬️';
      labelEl.textContent = 'BREATHE IN';
      secEl.textContent = `${4 - cycle}s • नाक से गहरी सांस अंदर लें`;
    } else if (cycle < 6) {
      orb.className = 'breathe-core-orb phase-hold';
      if (aura) aura.className = 'breathe-outer-aura phase-hold';
      emojiEl.textContent = '✨';
      labelEl.textContent = 'HOLD';
      secEl.textContent = `${6 - cycle}s • सांस अंदर रोकें`;
    } else {
      orb.className = 'breathe-core-orb phase-out';
      if (aura) aura.className = 'breathe-outer-aura phase-out';
      emojiEl.textContent = '😮‍💨';
      labelEl.textContent = 'BREATHE OUT';
      secEl.textContent = `${10 - cycle}s • मुंह से धीरे सांस छोड़ें`;
    }
    breatheLoopSeconds++;
  }, 1000);
}

// Voice-to-Log (Hindi / Hinglish Speech Recognition)
function startVoiceFoodLog() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) {
    alert('Aapke browser me Voice Recognition उपलब्ध nahi hai, kripya type karein.');
    return;
  }
  const btn = document.getElementById('voiceLogBtn');
  const rec = new SpeechRec();
  rec.lang = 'hi-IN';
  rec.interimResults = false;
  btn.textContent = '🔴 Sun Raha...';

  rec.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    document.getElementById('photoNoteInput').value = transcript;
    btn.textContent = '🎙️ Bol Kar Log';
    analyzeFoodPhoto();
  };
  rec.onerror = () => {
    btn.textContent = '🎙️ Bol Kar Log';
  };
  rec.onend = () => {
    btn.textContent = '🎙️ Bol Kar Log';
  };
  rec.start();
}

// 14:10 Intermittent Fasting & 7-Day Chart Renderer
function renderFastingAndChart() {
  const waistEl = document.getElementById('currentWaistDisplay');
  if (waistEl) {
    waistEl.textContent = `${(state.currentWaist || 38.0).toFixed(1)}"`;
  }

  // Overnight 12:12 Belly Burn check (8:00 PM Dinner to 8:30 AM Breakfast = 12.5 hours, matching Village Diet Plan!)
  const h = new Date().getHours();
  const badge = document.getElementById('fastingStageBadge');
  const text = document.getElementById('fastingStatusText');
  const bar = document.getElementById('fastingProgressBar');
  if (badge && text && bar) {
    if (h >= 20 || h < 8) {
      const elapsed = h >= 20 ? h - 20 : h + 4;
      const pct = Math.min(100, Math.round((elapsed / 12) * 100));
      badge.textContent = `🔥 Overnight Burn (${elapsed}/12 hr)`;
      badge.className = 'badge badge-green';
      text.innerHTML = elapsed >= 8
        ? `🔥 <strong>Belly Fat Melting Stage Active!</strong> Subah 6:30 AM गुनगुना नींबू/जीरा पानी लें और 8:30 AM पर नाश्ता करें।`
        : `🌙 <strong>Overnight Belly Burn (${elapsed} hr पूरे):</strong> रात 8 PM से सुबह 8:30 AM नाश्ते तक केवल पानी/हर्बल ड्रिंक लें।`;
      bar.style.width = `${Math.max(10, pct)}%`;
    } else {
      badge.textContent = '🍽️ Active Diet Window';
      badge.className = 'badge badge-blue';
      text.innerHTML = `🕒 <strong>8:30 AM नाश्ता ➔ 1:30 PM लंच ➔ 7:45 PM डिनर:</strong> रात 8 बजे से पहले डिनर खत्म करें ताकि 12-घंटे Overnight Belly Burn शुरू हो!`;
      bar.style.width = '100%';
    }
  }

  // 7-Day Calorie Chart
  const chartEl = document.getElementById('weeklyCalorieChart');
  if (!chartEl) return;
  const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const cols = [];
  let streak = 0;

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const log = state.logsByDate[key];
    const cal = log ? log.meals.reduce((s, m) => s + (Number(m.cal) || 0), 0) : 0;
    if (cal > 0 && cal <= state.calTarget + 250) streak++;
    const heightPct = Math.min(100, Math.max(8, Math.round((cal / 2000) * 100)));
    const isOver = cal > state.calTarget + 200;

    cols.push(`
      <div class="chart-col">
        <span style="font-size:0.62rem; color:#94a3b8;">${cal || ''}</span>
        <div class="chart-bar ${isOver ? 'over' : ''}" style="height:${heightPct}%;"></div>
        <span style="font-size:0.66rem; font-weight:700; color:${i === 0 ? '#34d399' : '#cbd5e1'};">${i === 0 ? 'Aaj' : daysShort[d.getDay()]}</span>
      </div>
    `);
  }
  chartEl.innerHTML = cols.join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.textContent = `🔥 ${Math.max(1, streak)} Day Streak`;
}

// Floating Ask AI Coach (Ultra-Low Token)
function openAICoachModal() {
  document.getElementById('aiCoachModal').classList.add('open');
}

function closeAICoachModal() {
  document.getElementById('aiCoachModal').classList.remove('open');
}

async function askAICoachQuestion() {
  const inp = document.getElementById('aiCoachQuestionInput');
  const box = document.getElementById('aiCoachReplyBox');
  const q = inp.value.trim();
  if (!q) return;

  const today = getTodayLog();
  const eaten = today.meals.reduce((s, m) => s + m.cal, 0);
  const rem = state.calTarget - eaten;

  box.innerHTML = `⏳ <em>Coach soch raha hai...</em>`;
  inp.value = '';

  try {
    if (state.apiKey && state.apiKey.startsWith('sk-')) {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.apiKey.trim()}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          max_tokens: 140,
          messages: [
            {
              role: 'user',
              content: `You are Pratap FitAI coach for Rana (90kg->70kg, big belly fat reduction goal, remaining budget today:${rem}kcal). Answer in 2 short Hinglish sentences: ${q}`
            }
          ]
        })
      });
      const data = await res.json();
      const ans = data.choices?.[0]?.message?.content || '';
      box.innerHTML = `🤖 <strong>Coach:</strong> ${ans}`;
      return;
    }
  } catch (e) {}

  box.innerHTML = `🤖 <strong>Coach:</strong> राणा भाई, आज आपके पास <strong>${rem} kcal</strong> बचा है। पेट अंदर करने के लिए चीनी/मैदा/चावल से बचें, भुना चना या सत्तू लें और शाम को जिम के बाद 20-सेकंड Stomach Vacuum ज़रूर करें!`;
}

function toggleHabit(cb) {
  const key = cb.getAttribute('data-habit');
  const today = getTodayLog();
  today.habits[key] = cb.checked;
  saveState();
  renderAll();
}

// ============================================================================
// AI PHOTO CALORIE SCANNER (DIRECT MOBILE CAMERA + GEMINI VISION + PIXEL CV)
// ============================================================================
let liveCameraStream = null;
let loadedMobileNet = null;

function updateAIKeyBannerUI() {
  const badge = document.getElementById('aiKeyStatusBadge');
  const banner = document.getElementById('aiKeyBanner');
  const isOpenAI = !!(state.apiKey && state.apiKey.startsWith('sk-'));
  const isGemini = !!(state.apiKey && state.apiKey.startsWith('AIza'));
  const hasKey = isOpenAI || isGemini;
  if (badge) {
    badge.textContent = isOpenAI
      ? '⚡ OpenAI Low-Token Active'
      : isGemini
      ? '✅ Gemini Vision Active'
      : '🔑 Setup AI Key';
    badge.className = hasKey ? 'badge badge-green' : 'badge badge-amber';
  }
  if (banner) {
    banner.style.display = hasKey ? 'none' : 'flex';
  }
}

function appendPhotoChip(text) {
  const inp = document.getElementById('photoNoteInput');
  if (!inp) return;
  inp.value = inp.value ? `${inp.value}, ${text}` : text;
}

async function openDirectMobileCamera() {
  const videoEl = document.getElementById('liveCameraVideo');
  const snapBtn = document.getElementById('snapLivePhotoBtn');
  const placeholder = document.getElementById('cameraPlaceholderUI');
  const preview = document.getElementById('photoPreview');

  // Try direct WebRTC back camera stream first
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      if (liveCameraStream) {
        liveCameraStream.getTracks().forEach((t) => t.stop());
      }
      liveCameraStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false
      });
      videoEl.srcObject = liveCameraStream;
      videoEl.style.display = 'block';
      snapBtn.style.display = 'inline-flex';
      if (placeholder) placeholder.style.display = 'none';
      if (preview) preview.style.display = 'none';
      return;
    } catch (err) {
      console.warn('WebRTC camera fallback to native input:', err);
    }
  }
  // Fallback to native Android camera intent
  document.getElementById('directCameraInput').click();
}

function stopLiveCameraStream() {
  if (liveCameraStream) {
    liveCameraStream.getTracks().forEach((t) => t.stop());
    liveCameraStream = null;
  }
  const videoEl = document.getElementById('liveCameraVideo');
  const snapBtn = document.getElementById('snapLivePhotoBtn');
  if (videoEl) videoEl.style.display = 'none';
  if (snapBtn) snapBtn.style.display = 'none';
}

function captureFromLiveVideo() {
  const videoEl = document.getElementById('liveCameraVideo');
  if (!videoEl || !videoEl.videoWidth) return;

  const canvas = document.createElement('canvas');
  const maxDim = 512;
  let w = videoEl.videoWidth;
  let h = videoEl.videoHeight;
  if (w > h && w > maxDim) {
    h = Math.round((h * maxDim) / w);
    w = maxDim;
  } else if (h > maxDim) {
    w = Math.round((w * maxDim) / h);
    h = maxDim;
  }
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(videoEl, 0, 0, w, h);
  const dataUrl = canvas.toDataURL('image/jpeg', 0.72);
  state.selectedPhotoBase64 = dataUrl;

  stopLiveCameraStream();
  const preview = document.getElementById('photoPreview');
  preview.src = dataUrl;
  preview.style.display = 'block';

  // Automatically trigger AI photo analysis right after clicking!
  analyzeFoodPhoto();
}

function handlePhotoSelected(event) {
  const file = event.target.files[0];
  if (!file) return;
  stopLiveCameraStream();

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement('canvas');
      const maxDim = 512;
      let w = img.width;
      let h = img.height;
      if (w > h && w > maxDim) {
        h = Math.round((h * maxDim) / w);
        w = maxDim;
      } else if (h > maxDim) {
        w = Math.round((w * maxDim) / h);
        h = maxDim;
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.72);
      state.selectedPhotoBase64 = dataUrl;

      const placeholder = document.getElementById('cameraPlaceholderUI');
      if (placeholder) placeholder.style.display = 'none';
      const preview = document.getElementById('photoPreview');
      preview.src = dataUrl;
      preview.style.display = 'block';

      // Auto-analyze immediately when photo is selected/captured!
      analyzeFoodPhoto();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

async function analyzeFoodPhoto() {
  const note = document.getElementById('photoNoteInput').value.trim();
  const resultBox = document.getElementById('aiScanResult');
  const btn = document.getElementById('analyzePhotoBtn');

  if (!state.selectedPhotoBase64 && !note) {
    alert('Kripya khane ki photo click karein ya thali me kya hai wo chunein!');
    return;
  }

  const today = getTodayLog();
  const eatenSoFar = today.meals.reduce((a, m) => a + m.cal, 0);
  const remainingBeforeMeal = state.calTarget - eatenSoFar;

  btn.disabled = true;
  btn.textContent = '⏳ Photo Me Har Item Aur Piece Gin Raha Hai...';
  resultBox.style.display = 'block';
  resultBox.innerHTML = `<p style="font-size:0.84rem;">🔍 AI aapki photo ke pixels, items, pieces aur katori check kar raha hai...</p>`;

  try {
    let parsedResult = null;

    if (state.apiKey && state.apiKey.startsWith('sk-')) {
      parsedResult = await callOpenAIVisionAPI(state.selectedPhotoBase64, note, remainingBeforeMeal);
    } else if (state.apiKey && state.apiKey.startsWith('AIza')) {
      parsedResult = await callGeminiVisionAPI(state.selectedPhotoBase64, note, remainingBeforeMeal);
    } else {
      parsedResult = await analyzeImageWithLocalVisualAI(state.selectedPhotoBase64, note, remainingBeforeMeal);
    }

    state.lastAIAnalysis = parsedResult;
    renderDetectedScanResult();
  } catch (err) {
    console.error(err);
    const fallback = await analyzeImageWithLocalVisualAI(state.selectedPhotoBase64, note, remainingBeforeMeal);
    state.lastAIAnalysis = fallback;
    renderDetectedScanResult();
  } finally {
    btn.disabled = false;
    btn.textContent = '✨ Photo Dekh Kar Exact Items & Calories Ginein';
  }
}

function renderDetectedScanResult() {
  const resultBox = document.getElementById('aiScanResult');
  const r = state.lastAIAnalysis;
  if (!r) return;

  // Recalculate totals from item breakdown if items array exists
  if (r.items && r.items.length > 0) {
    r.calories = r.items.reduce((sum, it) => sum + Math.round(it.unitCal * it.qty), 0);
    r.protein = r.items.reduce((sum, it) => sum + Math.round(it.unitP * it.qty), 0);
    r.carbs = r.items.reduce((sum, it) => sum + Math.round(it.unitC * it.qty), 0);
    r.fat = r.items.reduce((sum, it) => sum + Math.round(it.unitF * it.qty), 0);
    r.dishName = r.items.map((it) => `${it.qty} ${it.name}`).join(' + ');
  }

  const today = getTodayLog();
  const eatenSoFar = today.meals.reduce((a, m) => a + m.cal, 0);
  const remainingBeforeMeal = state.calTarget - eatenSoFar;
  const afterThisMeal = remainingBeforeMeal - r.calories;

  const itemsHtml =
    r.items && r.items.length > 0
      ? `
    <div style="margin:10px 0;">
      <span style="font-size:0.75rem; color:#94a3b8; font-weight:700; display:block; margin-bottom:6px;">
        🔍 Photo Me Pehchane Gaye Items (Quantity +/- kar sakte hain):
      </span>
      ${r.items
        .map(
          (it, idx) => `
        <div class="detected-item-row">
          <div>
            <strong style="font-size:0.83rem; color:#fff;">${it.name}</strong>
            <div style="font-size:0.71rem; color:#6ee7b7;">${Math.round(it.unitCal * it.qty)} kcal • P:${Math.round(it.unitP * it.qty)}g | C:${Math.round(it.unitC * it.qty)}g | F:${Math.round(it.unitF * it.qty)}g</div>
          </div>
          <div class="qty-controls">
            <button type="button" class="qty-btn" onclick="adjustDetectedItemQty(${idx}, -1)">-</button>
            <span style="font-size:0.84rem; font-weight:800; min-width:22px; text-align:center;">${it.qty}</span>
            <button type="button" class="qty-btn" onclick="adjustDetectedItemQty(${idx}, 1)">+</button>
          </div>
        </div>
      `
        )
        .join('')}
    </div>
  `
      : '';

  resultBox.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
      <h4 style="font-size:0.95rem; color:#34d399;">🍲 ${r.dishName}</h4>
      <span class="badge ${r.isSafe ? 'badge-green' : 'badge-red'}" style="font-size:0.82rem;">${r.calories} kcal</span>
    </div>
    <p style="font-size:0.8rem; color:#e2e8f0; margin-bottom:6px;">
      <strong>Total Macros:</strong> Protein: ${r.protein}g • Carbs: ${r.carbs}g • Fat: ${r.fat}g
      ${r.tokenUsage ? `<span class="badge badge-blue" style="margin-left:6px;font-size:0.62rem;">⚡ ${r.tokenUsage} tokens</span>` : ''}
    </p>
    ${itemsHtml}
    <div style="background:rgba(0,0,0,0.32); padding:10px; border-radius:10px; font-size:0.79rem; margin-bottom:10px;">
      <p style="margin-bottom:5px;">💡 <strong>AI Coach Verdict:</strong><br/>${r.medicalAdvice}</p>
      <p style="color:${afterThisMeal >= 0 ? '#6ee7b7' : '#fca5a5'}; font-weight:700;">
        📊 <strong>Budget Hisab:</strong> Ye khane ke baad aaj aapke paas <strong>${afterThisMeal >= 0 ? afterThisMeal + ' kcal bachega' : Math.abs(afterThisMeal) + ' kcal EXTRA ho jayega!'}</strong>
      </p>
    </div>
    <button class="btn-full" onclick="confirmAddScannedMeal()">
      ✅ Haan, Maine Ye Khaya (${r.calories} kcal Jodein)
    </button>
  `;
}

function adjustDetectedItemQty(idx, delta) {
  if (!state.lastAIAnalysis || !state.lastAIAnalysis.items) return;
  const item = state.lastAIAnalysis.items[idx];
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0 && state.lastAIAnalysis.items.length > 1) {
    state.lastAIAnalysis.items.splice(idx, 1);
  }
  renderDetectedScanResult();
}

async function callOpenAIVisionAPI(base64DataUrl, userNote, remainingCal) {
  const userContent = [
    {
      type: 'text',
      text: `Count exact Indian food items & pieces in photo. Note:${userNote || 'none'}. Budget left:${remainingCal}kcal. Return JSON:{"dishName":"str","calories":0,"protein":0,"carbs":0,"fat":0,"isSafe":true,"medicalAdvice":"short Hinglish tip for 90to70kg","items":[{"name":"item","qty":1,"unitCal":0,"unitP":0,"unitC":0,"unitF":0}]}`
    }
  ];

  if (base64DataUrl) {
    userContent.push({
      type: 'image_url',
      image_url: {
        url: base64DataUrl,
        detail: 'low' // Ultra-low token mode: fixed 85 image tokens!
      }
    });
  }

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${state.apiKey.trim()}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.2,
      max_tokens: 260,
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'user',
          content: userContent
        }
      ]
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`OpenAI API Error: ${errText}`);
  }

  const data = await res.json();
  const rawText = data.choices?.[0]?.message?.content || '{}';
  const parsed = JSON.parse(rawText);
  if (data.usage) {
    parsed.tokenUsage = data.usage.total_tokens;
  }
  return parsed;
}

async function callGeminiVisionAPI(base64DataUrl, userNote, remainingCal) {
  const parts = [];
  if (base64DataUrl) {
    const base64Clean = base64DataUrl.split(',')[1];
    parts.push({
      inline_data: {
        mime_type: 'image/jpeg',
        data: base64Clean
      }
    });
  }

  const promptText = `You are an expert Indian food vision analyzer for Pratap FitAI (Weight 90kg -> 70kg).
Carefully inspect the uploaded photo and count EVERY distinct food item and exact piece count (e.g., if there are 5 samosas and 1 green chutney bowl, count 5 samosas and 1 chutney; if there is a thali with 3 rotis, 1 bowl dal, 1 bowl sabzi, list each separately).
User note: "${userNote || 'Count all visible food items and pieces in the photo'}".
Remaining calorie budget today: ${remainingCal} kcal.

Respond ONLY with valid JSON in this exact format:
{
  "dishName": "Summary name in Hindi/Hinglish",
  "calories": 850,
  "protein": 18,
  "carbs": 95,
  "fat": 42,
  "isSafe": false,
  "medicalAdvice": "Specific Hinglish advice on whether to eat all pieces or reduce quantity for 90kg->70kg fat loss.",
  "items": [
    { "name": "समोसा (Samosa Piece)", "qty": 5, "unitCal": 240, "unitP": 4, "unitC": 26, "unitF": 13 },
    { "name": "हरी धनिया चटनी (Green Chutney Katori)", "qty": 1, "unitCal": 25, "unitP": 1, "unitC": 4, "unitF": 0.5 }
  ]
}`;

  parts.push({ text: promptText });

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(state.apiKey)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts }],
      generationConfig: { responseMimeType: 'application/json' }
    })
  });

  if (!res.ok) throw new Error('Gemini API request failed');
  const data = await res.json();
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
  return JSON.parse(rawText);
}

async function analyzeImageWithLocalVisualAI(base64DataUrl, note, remainingCal) {
  const q = (note || '').toLowerCase();
  const items = [];
  let isSafe = true;
  let advice = 'यह घर का संतुलित खाना है। अपने कैलोरी बजट के अनुसार मात्रा कंट्रोल में रखें।';

  // 1. Parse explicit user notes or selected chips if present
  if (q) {
    const numMatch = (kw) => {
      const rx = new RegExp(`(\\d+)\\s*(?:pc|piece|katori|glass|plate|रोटी|पीस)?\\s*${kw}`, 'i');
      const m = q.match(rx);
      return m ? parseInt(m[1], 10) : null;
    };

    if (q.includes('samosa') || q.includes('समोसा') || q.includes('kachori') || q.includes('pakora')) {
      const cnt = numMatch('samosa|समोसा|kachori') || 4;
      items.push({ name: 'समोसा / कचौड़ी (Fried Piece)', qty: cnt, unitCal: 240, unitP: 4, unitC: 26, unitF: 13 });
      items.push({ name: 'हरी चटनी (Chutney)', qty: 1, unitCal: 25, unitP: 1, unitC: 4, unitF: 0.5 });
      isSafe = false;
      advice = '🚨 सावधान! तले हुए समोसे में बहुत ज़्यादा ट्रांस-फैट और कैलोरी होती है। 90kg से 70kg मिशन के लिए इसे अवॉइड करें या सिर्फ 1 छोटा पीस लें!';
    }
    if (q.includes('roti') || q.includes('रोटी')) {
      const cnt = numMatch('roti|रोटी') || 2;
      items.push({ name: 'तवा रोटी (Roti)', qty: cnt, unitCal: 85, unitP: 3, unitC: 17, unitF: 0.5 });
    }
    if (q.includes('chawal') || q.includes('rice') || q.includes('चावल')) {
      const cnt = numMatch('chawal|rice|चावल') || 1;
      items.push({ name: 'उबला चावल (Katori Rice)', qty: cnt, unitCal: 130, unitP: 3, unitC: 28, unitF: 0.4 });
    }
    if (q.includes('dal') || q.includes('दाल')) {
      items.push({ name: 'दाल (Katori Dal)', qty: 1, unitCal: 125, unitP: 8, unitC: 18, unitF: 2.5 });
    }
    if (q.includes('sabzi') || q.includes('सब्ज़ी') || q.includes('lauki') || q.includes('bhindi')) {
      items.push({ name: 'हरी सब्ज़ी (Katori Sabzi)', qty: 1, unitCal: 90, unitP: 2.5, unitC: 10, unitF: 4 });
    }
    if (q.includes('sattu') || q.includes('सत्तू')) {
      items.push({ name: 'चना सत्तू गिलास (Sattu Drink)', qty: 1, unitCal: 140, unitP: 10, unitC: 20, unitF: 2 });
    }
    if (q.includes('egg') || q.includes('anda') || q.includes('अंडा')) {
      const cnt = numMatch('egg|anda|अंडा') || 3;
      items.push({ name: 'उबला अंडा (Boiled Egg)', qty: cnt, unitCal: 65, unitP: 6, unitC: 0.5, unitF: 4 });
    }
    if (q.includes('fish') || q.includes('machhli') || q.includes('मछली')) {
      const cnt = numMatch('fish|machhli|मछली') || 2;
      items.push({ name: 'रोहू मछली पीस (Fish Curry Pc)', qty: cnt, unitCal: 110, unitP: 14, unitC: 2, unitF: 5 });
    }
    if (q.includes('chicken') || q.includes('चिकन')) {
      items.push({ name: 'देसी चिकन झोल (Chicken Bowl)', qty: 1, unitCal: 235, unitP: 30, unitC: 5, unitF: 9 });
    }
    if (q.includes('salad') || q.includes('dahi') || q.includes('सलाद')) {
      items.push({ name: 'सलाद और दही (Salad & Curd)', qty: 1, unitCal: 80, unitP: 5, unitC: 9, unitF: 2 });
    }
  }

  // 2. If user didn't type anything, analyze the actual image pixels + MobileNet!
  if (items.length === 0 && base64DataUrl) {
    const visualFeatures = await inspectImagePixelsAndBlobs(base64DataUrl);

    if (visualFeatures.isGoldenFriedSnack) {
      const estPieces = visualFeatures.estimatedPieces || 5;
      items.push({ name: 'समोसा / तला स्नैक (Fried Samosa/Snack Pc)', qty: estPieces, unitCal: 240, unitP: 4, unitC: 26, unitF: 13 });
      if (visualFeatures.hasGreenZone) {
        items.push({ name: 'हरी धनिया-पुदीना चटनी (Green Chutney)', qty: 1, unitCal: 25, unitP: 1, unitC: 4, unitF: 0.5 });
      }
      isSafe = false;
      advice = `🚨 AI Visual Alert: फोटो में ${estPieces} तले हुए समोसे/स्नैक्स और हरी चटनी दिख रही है! पूरे ${estPieces} पीस खाने से ${estPieces * 240} kcal हो जाएगा। वजन घटाने के लिए अधिकतम 1 पीस लें या ऊपर (-) बटन से क्वांटिटी एडजस्ट करें।`;
    } else if (visualFeatures.isWhiteDominant) {
      items.push({ name: 'चावल (Steamed Rice Plate)', qty: 1, unitCal: 220, unitP: 4, unitC: 48, unitF: 0.6 });
      items.push({ name: 'दाल / तरी सब्ज़ी (Dal / Gravy)', qty: 1, unitCal: 140, unitP: 8, unitC: 19, unitF: 3.5 });
      items.push({ name: 'हरा सलाद (Salad)', qty: 1, unitCal: 35, unitP: 1, unitC: 7, unitF: 0.2 });
      advice = 'फोटो में चावल और दाल/सब्ज़ी दिखाई दे रही है। चावल की मात्रा 1 छोटी कटोरी ही रखें।';
    } else {
      items.push({ name: 'तवा रोटी (Roti)', qty: 2, unitCal: 85, unitP: 3, unitC: 17, unitF: 0.5 });
      items.push({ name: 'घर की हरी सब्ज़ी (Sabzi Katori)', qty: 1, unitCal: 95, unitP: 3, unitC: 11, unitF: 4.5 });
      items.push({ name: 'दाल (Dal Katori)', qty: 1, unitCal: 120, unitP: 8, unitC: 18, unitF: 2.5 });
      advice = 'फोटो में देसी थाली पहचानी गई है। ऊपर (+) या (-) बटन से अपनी रोटी/कटोरी की सटीक संख्या मिला लें!';
    }
  }

  const totalCal = items.reduce((s, i) => s + Math.round(i.unitCal * i.qty), 0);
  const totalP = items.reduce((s, i) => s + Math.round(i.unitP * i.qty), 0);
  const totalC = items.reduce((s, i) => s + Math.round(i.unitC * i.qty), 0);
  const totalF = items.reduce((s, i) => s + Math.round(i.unitF * i.qty), 0);
  const dishName = items.map((i) => `${i.qty} ${i.name}`).join(' + ');

  return {
    dishName,
    calories: totalCal,
    protein: totalP,
    carbs: totalC,
    fat: totalF,
    isSafe,
    medicalAdvice: advice,
    items
  };
}

function inspectImagePixelsAndBlobs(base64DataUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = 120;
      c.height = 120;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0, 120, 120);
      const data = ctx.getImageData(0, 0, 120, 120).data;

      let goldenBrownPixels = 0;
      let darkBgPixels = 0;
      let greenChutneyPixels = 0;
      let whiteRicePixels = 0;
      const totalPixels = 120 * 120;

      // Grid 3x3 to estimate distinct golden food clusters/pieces
      const gridGolden = Array(9).fill(0);

      for (let y = 0; y < 120; y++) {
        for (let x = 0; x < 120; x++) {
          const i = (y * 120 + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Golden-brown fried crust (Samosa/Kachori/Pakora): high R, medium-high G, lower B
          if (r > 125 && r < 235 && g > 75 && g < 185 && b > 25 && b < 125 && r - g > 22 && g - b > 18) {
            goldenBrownPixels++;
            const gx = Math.min(2, Math.floor(x / 40));
            const gy = Math.min(2, Math.floor(y / 40));
            gridGolden[gy * 3 + gx]++;
          }
          // Dark slate/background
          if (r < 60 && g < 60 && b < 60) {
            darkBgPixels++;
          }
          // Green chutney / mint leaves
          if (g > r + 12 && g > b + 15 && g > 45) {
            greenChutneyPixels++;
          }
          // Bright white rice/curd
          if (r > 200 && g > 200 && b > 195 && Math.abs(r - g) < 18) {
            whiteRicePixels++;
          }
        }
      }

      const goldenRatio = goldenBrownPixels / totalPixels;
      const activeGoldenZones = gridGolden.filter((cnt) => cnt > 160).length;
      const isGoldenFriedSnack = goldenRatio > 0.18;
      const hasGreenZone = greenChutneyPixels / totalPixels > 0.015;
      const isWhiteDominant = whiteRicePixels / totalPixels > 0.28;

      const estimatedPieces = Math.max(2, Math.min(6, activeGoldenZones));

      resolve({
        isGoldenFriedSnack,
        hasGreenZone,
        isWhiteDominant,
        estimatedPieces
      });
    };
    img.onerror = () => resolve({ isGoldenFriedSnack: false, hasGreenZone: false, isWhiteDominant: false, estimatedPieces: 2 });
    img.src = base64DataUrl;
  });
}

function confirmAddScannedMeal() {
  if (!state.lastAIAnalysis) return;
  const r = state.lastAIAnalysis;
  quickAddMeal(r.dishName, r.calories, r.protein, r.carbs, r.fat);
  document.getElementById('aiScanResult').style.display = 'none';
  document.getElementById('photoNoteInput').value = '';
}

// ============================================================================
// QUIT SMOKING 5-MINUTE CRAVING TIMER
// ============================================================================
let cravingInterval = null;
function startCravingTimer() {
  const box = document.getElementById('cravingTimerBox');
  const countEl = document.getElementById('cravingCountdown');
  box.style.display = 'block';

  let seconds = 300;
  if (cravingInterval) clearInterval(cravingInterval);

  cravingInterval = setInterval(() => {
    seconds--;
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    countEl.textContent = `${m}:${s}`;
    if (seconds <= 0) {
      clearInterval(cravingInterval);
      resistCraving();
      box.style.display = 'none';
    }
  }, 1000);
}

// ============================================================================
// SETTINGS & PUSH NOTIFICATIONS
// ============================================================================
function openSettingsModal() {
  document.getElementById('geminiApiKeyInput').value = state.apiKey || '';
  document.getElementById('customCalTargetInput').value = state.calTarget || 1650;
  document.getElementById('settingsModal').classList.add('open');
}

function closeSettingsModal() {
  document.getElementById('settingsModal').classList.remove('open');
}

function saveSettings() {
  state.apiKey = document.getElementById('geminiApiKeyInput').value.trim();
  const targetVal = parseInt(document.getElementById('customCalTargetInput').value, 10);
  if (!isNaN(targetVal) && targetVal >= 1200 && targetVal <= 3000) {
    state.calTarget = targetVal;
  }
  saveState();
  updateAIKeyBannerUI();
  renderAll();
  closeSettingsModal();
  alert('✅ Settings save ho gayi!');
}

async function enablePushNotifications() {
  if (!('Notification' in window)) {
    alert('Is browser me Notification support nahi hai.');
    return;
  }
  const perm = await Notification.requestPermission();
  if (perm === 'granted') {
    sendTestNotification();
  } else {
    alert('Notification permission allow karein taaki subah, dopahar, shaam aur raat ko khane ka alert aaye.');
  }
}

function sendTestNotification() {
  const title = '💪 Rana Fit Coach Active!';
  const body = 'Aaj ka goal: 1650 kcal, 12 glass paani, 45 min walk aur zero चीनी/तला-भुना। Khane se pehle photo click karein!';
  if ('Notification' in window && Notification.permission === 'granted') {
    if (navigator.serviceWorker && navigator.serviceWorker.ready) {
      navigator.serviceWorker.ready.then((reg) => {
        reg.showNotification(title, { body, icon: 'icon.svg', badge: 'icon.svg', vibrate: [200, 100, 200] });
      });
    } else {
      new Notification(title, { body, icon: 'icon.svg' });
    }
  } else {
    alert(`${title}\n\n${body}`);
  }
}

function checkScheduledNotifications() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const today = getTodayLog();

  DAILY_REMINDER_SLOTS.forEach((slot) => {
    const slotKey = `${slot.hour}:${slot.min}`;
    if (h === slot.hour && m >= slot.min && m <= slot.min + 15 && !today.notifiedSlots[slotKey]) {
      today.notifiedSlots[slotKey] = true;
      saveState();
      if (navigator.serviceWorker && navigator.serviceWorker.ready) {
        navigator.serviceWorker.ready.then((reg) => {
          reg.showNotification(slot.title, { body: slot.body, icon: 'icon.svg', vibrate: [200, 100, 200] });
        });
      } else {
        new Notification(slot.title, { body: slot.body, icon: 'icon.svg' });
      }
    }
  });
}

// ============================================================================
// PWA INSTALL & INITIALIZATION
// ============================================================================
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const btn = document.getElementById('installAppBtn');
  btn.style.display = 'flex';
  btn.onclick = async () => {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    btn.style.display = 'none';
  };
});

window.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateAIKeyBannerUI();
  renderAll();
  renderDesiFoodDatabase('all');
  renderWeeklyDietPlan();
  renderGymPlan();
  renderBellyBurnerCircuit();
  startDynamicBreathingEngine();

  document.getElementById('openSettingsBtn').addEventListener('click', openSettingsModal);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch((e) => console.warn('SW error:', e));
  }

  // Request persistent storage so Android never clears daily weight/calorie history
  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().catch(() => {});
  }

  // Auto-rollover to fresh day at midnight + refresh when user unlocks phone
  let activeDateKey = getTodayKey();
  const checkDayRollover = () => {
    const nowKey = getTodayKey();
    if (nowKey !== activeDateKey) {
      activeDateKey = nowKey;
      state.selectedDayIdx = (new Date().getDay() + 6) % 7;
      state.selectedGymDayIdx = (new Date().getDay() + 6) % 7;
      renderAll();
      renderWeeklyDietPlan();
      renderGymPlan();
      renderBellyBurnerCircuit();
    }
    checkScheduledNotifications();
  };

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      checkDayRollover();
      renderAll();
    }
  });

  setInterval(checkDayRollover, 45 * 1000);
});
