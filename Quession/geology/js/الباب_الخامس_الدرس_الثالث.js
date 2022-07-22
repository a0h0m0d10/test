(function() {
  "use strict";

  let questions = [
    {
      question: "يحدث تكسير الحصى في المناطق الصحراوية نتيجة",
      answers: [" التجوية الكيميائية", " التمدد الناتج عن تخفيف الحمل", "التمدد الحراري      ", "النشاط الحياتي للحيوانات      "],
      correctAnswer: 4
    },
    {
      question: "    أي مما يلى لا يتواجد في فتات من صخر الكوماتيت في حجم الحصى ؟       ",
      answers: ["الأرثوكليز ", " الأوليفين", "البيروكسين ", " البلاجيوكليز الكلسي"],
      correctAnswer: 4
    },
    {
      question: "      عند تفتيت قطعة من الجرانيت إلى قطع في حجم الحصى، فإن كل قطعة تتكون من      ",
      answers: ["معدن واحد      ", " معدنين", " 3 معادن      ", "4 معادن      "],
      correctAnswer: 4
    },
    {
      question: "    عند تفتيت قطعة من صخر الجابرو إلى حبيبات متوسط قطرها 3 مم، فإنها لا تحتوي على معدن       ",
      answers: [" الكوارتز", " الفلسيار البلاجيوكليزي الكلسي      ", " الأوليفين      ", " البيروكسين"],
      correctAnswer: 4
    },
    {
      question: "      عند تفتيت قطعة من صخر الجرانيت إلى حبيبات متوسط قطرها 1 مم، فإنها لا تحتوى على معدن       ",
      answers: [" الكوارتز", "الأرثوكليز ", " الأوليفين", " المسكوفيت"],
      correctAnswer: 4
    },
    {
      question: "    تراكم الفتات الصخري بجوار جبال الألب تكون نتيجة      ",
      answers: [" الاختلاف المتكرر في درجات الحرارة      ", " تكرار تجمد وذوبان المياه في الشقوق الصخرية      ", "اختلاف الأحمال على الصخور      ", " النشاط الحياتي للنبات والحيوان"],
      correctAnswer: 4
    },
    {
      question: "    عند صعود الجرانيت لسطح الأرض نتيجة عوامل تعرية يحدث له      ",
      answers: ["تحول ", "تقشر ", "تميؤ ", " أكسدة"],
      correctAnswer: 4
    },
    {
      question: "   يفضل عدم استخدام الصخور الجيرية في إقامة المباني في المناطق الصناعية الساحلية منعا لحدوث عملية      ",
      answers: [" تميؤ", " أكسدة", " تحلل وإذابة", " تكسير الصخور"],
      correctAnswer: 4
    },
    {
      question: "    أي مما يلي يعتبر مثال للتجوية الكيميائية ؟      ",
      answers: ["تساقط فتات من الصخور في حجم الرمال من الكوارتز والميكا والفلسبار      ", "تساقط فتات من الصخور في حجم الحصى من صخر جبلي      ", "تجمد المياه الظاهرة ثم تمدد المعادن وتفككها      ", "سقوط أمطار حمضية على الحجر الجيري      "],
      correctAnswer: 4
    },
    {
      question: "    صخر الكوماتيت أكثر عرضة للتجوية الكيميائية عن طريق عملية       ",
      answers: [" التميؤ", " الأكسدة", "الكرينة ", " التحل"],
      correctAnswer: 4
    },
    {
      question: "    الصخور الأكثر تأثرا بالأكسدة هي       ",
      answers: ["القاعدية ", " الحامضية", "المتوسطة ", "الغنية بالسيليكا      "],
      correctAnswer: 4
    },
    {
      question: "المعادن التي تتحلل بالتجوية الكيميائية وتتحول إلى معادن أقل صلابة هي      ",
      answers: ["الكوارتز والميكا       ", "الأرثوكليز والكوارتز      ", " الأرثوكليز والميكا      ", " البلاجيوكليز والكوارتز      "],
      correctAnswer: 4
    },
    {
      question: "إحدى المناطق ينتشر بها فئات من معادن الكاولينايت والكوارتز مما يدل على أن الصخر الأصلي هو الجرانيت وحدث له",
      answers: ["تجوية كيميائية      ", "تجوية ميكانيكية      ", " تقشر", "تحول "],
      correctAnswer: 4
    },
    {
      question: "      إحدى المناطق ينتشر بها فتات من معادن الفلسبار البوتاسي والكوارتز مما يدل على أن الصخر الأصلي هو الجرانيت وحدث له    ",
      answers: ["تجوية كيميائية      ", " تجوية ميكانيكية      ", " إحلال", " تحول"],
      correctAnswer: 4
    },
    {
      question: "أي الخواص التالية تظل ثابتة لكتلة ضخمة من الحجر الجيري تعرضت لعملية تحت شديدة ؟      ",
      answers: ["الشكل ", "الكتلة", "الحجم  ", " التركيب الكيميائي"],
      correctAnswer: 4
    },
    {
      question: "ناتج التجوية الكيميائية لجبال الأنديز قد يحتوى على      ",
      answers: ["أوليفين ", "کاولینایت ", "دولومیت ", "کالسیت "],
      correctAnswer: 4
    },
    {
      question: "أي عوامل التجوية تكون أكثر انتشارا في بيئة حارة وجافة ؟      ",
      answers: ["التمدد الحراري      ", "الكربنة ", " التمدد نتيجة تخفيف الحمل      ", "التميؤ "],
      correctAnswer: 4
    },
    {
      question: "     هبوب رياح محملة بالرمال واصطدامها بصخور صلبة مرتفعة يؤدى إلى تكوين       ",
      answers: ["مصاطب وكثبان رملية      ", " مصاطب وتموجات رملية      ", " تموجات وكثبان رملية      ", "مصاطب وجروف      "],
      correctAnswer: 4
    },
    {
      question: "الظاهرة الطبوغرافية التي تتكون نتيجة العمل البنائي للرياح       ",
      answers: [" الجروف", "الدلتا      ", " التموجات الرملية      ", "المصاطب "],
      correctAnswer: 4
    },
    {
      question: "     تنتج الحصوات ذات الوجه المصقول في الصحراء نتيجة الفعل      ",
      answers: [" البنائي للرياح", "البنائي للمياه الجوفية      ", "الهدمي للرياح      ", "الهدمي للأنهار      "],
      correctAnswer: 4
    },
    {
      question: "       تكونت الغرود المنتشرة بين الواحات البحرية وحتى الواحات الخارجة بتأثير       ",
      answers: [" العمل الهدمي للرياح      ", " العمل البنائي للرياح      ", " الأمواج البحرية الموازية للشاطئ      ", " البحرية العمودية على الشاطئ      "],
      correctAnswer: 4
    },
    {
      question: "  عملية النحت طبيعية بواسطة الرياح المحملة بالرمال لبعض الطبقات الصخرية متباينة الصلابة في المناطق الصحراوية تؤدى إلى تكوين",
      answers: [" حصى مثلث الأضلاع      ", "حصى مستدير      ", " كثبان مستطيلة      ", " المصاطب"],
      correctAnswer: 4
    },
    {
      question: "    متـوسـط عدد السـنـيـن الـذي تحتاج إليه الكثبان الرملية لتنتقل مسافة 100 متر      ",
      answers: [" 5 سنوات", "10 سنوات", "15 سنة", " 50 سنة"],
      correctAnswer: 4
    },
    {
      question: "ينتج عن مرور الرياح على صخر حجم حبيباته أقل من ٦٢ ميكرون يعلوه صخر يتكون من معدن الكالسيت تكوين       ",
      answers: ["مصاطب ", "كثبان رملية", " جروف", "حصی مصقول"],
      correctAnswer: 4
    },
    {
      question: "     الظاهرة الترسيبية المتوقع وجودها عندما تقل سرعة السيل هي      ",
      answers: [" المصاطب      ", "الدلتا الجافة      ", " الكثبان الرملية      ", "الغرود الرملية      "],
      correctAnswer: 4
    },
    {
      question: "    الممرات الضيقة التي تمر فيها المياه من أعلى الجبل تعرف بـ       ",
      answers: [" الجروف", "الأخوار ", "الأغوار ", " الأخاديد"],
      correctAnswer: 4
    },
    {
      question: "    الترتيب الأصوب لرواسب السيول من مخرج الخور لنهاية الترسيب هو       ",
      answers: ["حصی - جلاميد - طين - رمال      ", "حصی - رمال - طين - جلاميد      ", " جلاميد - رمال - صلصال - طين      ", " جلاميد - حصى - رمال - طين      "],
      correctAnswer: 4
    },
    {
      question: "     الدلتا الجافة من المظاهر الطبوغرافية الناتجة عن العمل       ",
      answers: ["البنائي للأمطار      ", " الهدمي للرياح      ", "الهدمي للسيول      ", " البنائي للسيول      "],
      correctAnswer: 4
    },
    {
      question: "    وجود أخاديد وجروف في سيناء يدل على      ",
      answers: [" مناخ جاف وحرارة شديدة      ", "سقوط أمطار شديدة      ", "رياح شديدة وارتفاع درجة الحرارة      ", "عدم وجود رياح وأمطار"],
      correctAnswer: 4
    },
    {
      question: "التربة التي تحتوي على نسبة كبيرة من الفراغات بين الحبيبات تتميز ب       ",
      answers: ["معامل نفاذية منخفض      ", "معامل تسرب منخفض      ", "مسامية عالية      ", "خاصية شعرية عالية      "],
      correctAnswer: 4
    },
    {
      question: "العوامل التي تتحكم في كمية المياه المتسربة في الصخور هي       ",
      answers: [" لون الصخر وسمكه      ", " مسامية الصخر ونفاذيته      ", " نسيج الصخر والمحتوى الحفري      ", " درجة حرارة تبلور الصخر وحجم البلورات      "],
      correctAnswer: 4
    },
    {
      question: "تتكون رواسب الهوابط من      ",
      answers: ["كبريتات الكالسيوم اللامائية      ", " كبريتات الكالسيوم المائية      ", "كربونات الكالسيوم والماغنيسيوم      ", " كربونات الكالسيوم"],
      correctAnswer: 4
    },
    {
      question: "وجود مغارة في قمة جبل دليل على أن القمة صخورها من       ",
      answers: [" الجرانيت", "الشيست ", "البازلت ", " الحجر الجيري      "],
      correctAnswer: 4
    },
    {
      question: "عند الحفر بالقرب من أحد جوانب النهر نجد       ",
      answers: [" ارتفاع منسوب الماء الجوفي العذب      ", " ارتفاع منسوب الماء الجوفي المالح      ", " انخفاض منسوب الماء الجوفي المالح      ", " انخفاض منسوب الماء الجوفي العذب      "],
      correctAnswer: 4
    },
    {
      question: "تستطيع العثور على المياه الجوفية بالقرب من البحار بسبب       ",
      answers: ["زيادة حمضيتها      ", " ارتفاع منسوبها       ", "انخفاض منسوبها      ", "زيادة قاعديتها "],
      correctAnswer: 4
    },
    {
      question: "العوامل التي تسبب ارتفاع منسوب المياه الأرضية هي      ",
      answers: [" التجوية وسرعة التيار      ", "القرب من البحار وكثرة الأمطار      ", " الدفن والترسيب      ", "التحجر والتكثف      "],
      correctAnswer: 4
    },
    {
      question: "يظهر تأثير التجوية الميكانيكية على جوانب السفوح الجبلية نتيجة لـ      ",
      answers: [" تميز الكتل الصخرية نتيجة الأمطار      ", "تشيع الكتل الصخرية المسامية بالماء الجوفي      ", " أكسدة الكتل الصخرية بالأكسجين المذاب في الماء      ", " كربنة الكتل الصخرية بـ CO2 المذاب في الماء"],
      correctAnswer: 4
    },
    {
      question: "الغابات المتحجرة في أبو رواش تكونت بسبب       ",
      answers: [" عمل هدمي نتيجة ذوبان ألياف الأشجار بالأحماض العضوية والمواد القلوية      ", "عمل هدمي نتيجة ذوبان السيليكا وترسيبي نتيجة إحلال السيليكا محل ألياف الأشجار      ", " عمل هدمي نتيجة ذوبان المواد الجيرية وترسيبي نتيجة إحلال المواد الجيزية محل ألياف الأشجار       ", "عمل بنائي نتيجة ذوبان السيليكا المكونة لألياف الأشجار "],
      correctAnswer: 4
    },
    {
      question: "الحصوات ذات الوجه المستدير المصقول تنتج بفعل      ",
      answers: [" العمل الهدمي للرياح      ", "العمل البنائي للرياح      ", " العمل الهدمي للأنهار      ", " العمل البنائي للأنهار"],
      correctAnswer: 4
    },
    {
      question: "الرواسب التي تختفي في مياه النهر عند سريانه هي ",
      answers: [" الملح الصخري", " الغرين", "الرمال", "الحصى "],
      correctAnswer: 4
    },
    {
      question: "العامل الأكثر تأثيرا في زيادة كمية المواد المنقولة خلال المجرى النهري هو       ",
      answers: [" انخفاض درجة حرارة الرواسب", "قلة ميل المجرى النهري      ", " زيادة حجم الرواسب", " زيادة سرعة المياه      "],
      correctAnswer: 4
    },
    {
      question: "تترسب الفتات عند دخول مياه النهر في بحيرة ما بسبب       ",
      answers: [" قلة سرعة النهر", "قلة قوة الجاذبية      ", "زيادة كمية المياه      ", "زيادة ميل النهر "],
      correctAnswer: 4
    },
    {
      question: "سبب زيادة معدل النحت في المجرى النهري هو       ",
      answers: [" زيادة صلابة الصخور", "قلة انحدار النهر", "نقص سرعة التيار", "نقص صلابة الصخور"],
      correctAnswer: 4
    },
    {
      question: "تزداد كمية رواسب الانهار عند",
      answers: ["المنبع ", "القاع ", " وسط النهر", " المصب"],
      correctAnswer: 4
    },
    {
      question: "عندما يزداد تقوس المياندرز تتكون      ",
      answers: [" بحيرات قوسية", "مساقط المياه", " أخاديد", " وديان"],
      correctAnswer: 4
    },
    {
      question: "تعتبر البحيرات القوسية مرحلة متطورة من      ",
      answers: [" الشرفات النهرية", "مساقط المياه", "الأسرة النهرية", "الالتواءات النهرية"],
      correctAnswer: 4
    },
    {
      question: "عامل التعرية المسئول عن تكوين شلالات أنجل في فنزويلا هو",
      answers: [" النحت المتباين للرياح", " العمل الهدمي للمياه الأرضية", " العمل الهدمي للسيول", " النحت المتباين للأنهار"],
      correctAnswer: 4
    },
    {
      question: "    الأشجار النامية على جانبي التواء نهري تتواجد غالبا نتيجة       ",
      answers: ["الترسيب في الجانب الداخلي للالتواء النهري      ", "الترسيب في الجانب الخارجي للالتواء النهري      ", " النحت في الجانب الداخلي للالتواء النهري      ", "النحت في الجانب الخارجي للالتواء النهري "],
      correctAnswer: 4
    },
    {
      question: "فيضان النهر يكون       ",
      answers: ["مخروط الدلتا", " بحيرات قوسية", "شرفات شهرية", " شلالات"],
      correctAnswer: 4
    },
    {
      question: "     تتميز مرحلة النضوج الشهري بوجود ظواهر مميزة، مثل      ",
      answers: [" مساقط المياء      ", "البحيرات      ", " الدلتا الجافة      ", "میاندرز النهر "],
      correctAnswer: 4
    },
    {
      question: "أي مما يلي يسبب زيادة معدل النحت بالنهر ؟",
      answers: ["الاقتراب من المصب", "قلة منسوب المياه بالنهر      ", "زيادة سرعة التيار النهري      ", "قلة انحدار المجرى النهري      "],
      correctAnswer: 4
    },
    {
      question: "ما الرواسب التي يمكن وجودها في عمق بحيرة يصب بها نهر ؟      ",
      answers: [" الصلصال", "الحصى", "الرمال", "الكونجلوميرات"],
      correctAnswer: 4
    },
    {
      question: "النهر (أ) أسرع من النهر (ب)، لأن النهر (أ) له      ",
      answers: [" أفرع طويلة      ", "تحت ضعیف      ", "نحت قوی      ", "مجرى غير عميق      "],
      correctAnswer: 4
    },
    {
      question: "عند التقاء النهر ببحر مغلق تتكون .      ",
      answers: [" دلتا", "دلتا جافة      ", "كثبان ساحلية      ", "شرفات نهرية      "],
      correctAnswer: 4
    },
    {
      question: "عندما يقابل الشهر العجوز طفح بركاني، فإنه غالبا ما يكون      ",
      answers: [" دلتا", "أسرة نهرية      ", "شلالات", "سهل فيضي      "],
      correctAnswer: 4
    },
    {
      question: "اختفاء عدة أفرع من نهر النيل قديما يرجع إلى      ",
      answers: [" تقدم البحر على الدلتا      ", "عمل بنائي للنهر      ", "تراجع البحر عن الدلتا      ", "عمل هدمي للنهر"],
      correctAnswer: 4
    },
    {
      question: "تؤثر جاذبية القمر على مياه البحار مصيبة       ",
      answers: ["تكوين الجروف", "تكوين العينات المدرجة", "تكوين المغارات الساحلية", "حدوث الأمواج"],
      correctAnswer: 4
    },
    {
      question: "منسوب المياه وقت المد تستدل عليه من",
      answers: [" قوة الأمواج", "المد والجزر", "العينات المدرجة", "قوة التيارات البحرية"],
      correctAnswer: 4
    },
    {
      question: "المنطقة التي تتميز بوجود البقايا السليسية مما يلي هي",
      answers: ["اللسان ", "منطقة المنحدر القاري", "المنطقة الشاطئية      ", "منطقة الرف القاري"],
      correctAnswer: 4
    },
    {
      question: "تسمى الرواسب الرملية المتكونة عند احتكاك تيارين مائيين يسيران في اتجاهين متضادين بـ",
      answers: ["الخلجان ", "الألسنة", "المغارات الساحلية", "الجروف"],
      correctAnswer: 4
    },
    {
      question: "الحواجز البحرية الضيقة المتكونة من الرمال والموجودة في المحيط ترسبت بفعل",
      answers: ["حركة الرياح", "مجری نهري", "المد والجزر", "التيارات البحرية"],
      correctAnswer: 4
    },
    {
      question: "المنطقة التي لا يتواجد بها رواسب رياح أو أنهار في منطقة",
      answers: [" الأعماق", "المنحدر القاري", "الرف القاري", "الشاطئ"],
      correctAnswer: 4
    },
    {
      question: "مجری ماني يصب في بحيرة، الرواسب التي تترسب أولا عند حواف البحيرة هي رواسب",
      answers: [" الصلصال", "الغرين", "الرمال", "الحصى"],
      correctAnswer: 4
    },
    {
      question: "أي من العوامل التالية لا يسبب تيارات بحرية ؟",
      answers: [" اختلاف كثافة الماء", "اختلاف درجة الحرارة", "اختلاف نسبة الاملاح", "اختلاف الضغط الواقع على الماء"],
      correctAnswer: 4
    },
    {
      question: "الحواجز البحرية قد تكون مرحلة متطورة لظاهرة",
      answers: [" المياندرز", "الألسنة", "البحيرات القوسية", "المغارات الساحلية"],
      correctAnswer: 4
    },
    {
      question: "تیار نهرى يصب حمولته من الرواسب في البحر، فإن الرواسب الأكثر ترسينا في المياه الأعمق كلما بعدنا عن الشاطئ هي رواسب",
      answers: ["الصلصال والغرين", "الغرين والحصى", "الرمال والجلاميد", "الحصى والرمال"],
      correctAnswer: 4
    },
    {
      question: "تتكون المغارات الساحلية نتيجة تأكل الطبقات الأقل صلابة من الصخور بسبب العمل الهدمي لـ         ",
      answers: [" الانهار", "المياه الأرضية", "البحار", "الرياح"],
      correctAnswer: 4
    },
    {
      question: "حفريات الشعاب المرجانية توجد في طبقات الحجر الجيري، فإن البيئة التي تزدهر فيها الشعاب المرجانية      ",
      answers: ["المياه البحرية الضحلة", "المنطقة الشاطئية", "الغابات الاستوائية", "مناطق الأعشاب"],
      correctAnswer: 4
    },
    {
      question: "عند نمو الشعاب المرجانية أمام الخليج تنشأ",
      answers: ["السنة ", "حواجز", "بحيرات ملحية", "دلتا"],
      correctAnswer: 4
    },
    {
      question: "الرواسب الموجودة في بحيرة إدكو تكونت نتيجة       ",
      answers: ["تبخر المياه من بحيرة بركانية", "رواسب نهرية", "تبخر المياه من بحيرات ملحية", "تبخر المياه من بحيرات قوسية      "],
      correctAnswer: 4
    },
    {
      question: "وصول المياه من المنحدرات إلى أماكن فوهات البراكين الخامدة يكون",
      answers: ["مخروط السيل", "دلتا جافة", "بحيرات عذبة", "أخوار عميقة"],
      correctAnswer: 4
    },
    {
      question: "أي مما يلي لا يسبب اندثار البحيرات ؟",
      answers: [" كثرة الترسيب", "ارتفاع درجة الحرارة", "انخفاض درجة الحرارة", "تسرب الماء في مسام الصخور      "],
      correctAnswer: 4
    },
    {
      question: "التربة التي يوجد بها الكونجلوميرات هي التربة",
      answers: [" الوضعية", "المنقولة", "متدرجة النسيج", "السطحية"],
      correctAnswer: 4
    },
    {
      question: "تكونت بحيرة إدكو نتيجة",
      answers: [" عمل هدمي في منطقة الرف القاري", "عمل ترسیبي في المنطقة الشاطئية", "عمل هدمي في المنطقة الشاطئية      ", "عمل ترسيبي في منطقة الرف القاري"],
      correctAnswer: 4
    },
    {
      question: "من أهم رواسب بحيرة إدكو بعد حدوث البخر",
      answers: ["كلوريد الصوديوم وكبريتات الكالسيوم المائية ", "كلوريد الصوديوم وكبريتات الكالسيوم اللامائية", "كربونات الصوديوم وكربونات الماغنسيوم", "كلوريد الكالسيوم وكربونات الماغنسيوم"],
      correctAnswer: 4
    }
   

    

  ];

  const shuffledquestions = questions.sort(() => 0.5 - Math.random());

  function createQuiz() {
    let currentQuiz = shuffledquestions[quizCount];
    questionEl.innerHTML = currentQuiz.question;
  
    answerContEl.innerHTML = ``;
  
    currentQuiz.choices
      .sort(() => 0.5 - Math.random())
      .forEach((choice) => {
        createQuizChoices(choice);
      });
  }
  
  let questionIndex,
    currentQuestion,
    score,
    wrong,
    timeSpent,
    quizTimer,
    questionIsAnswered,
    isQuizDone;
  let quiz = document.getElementById("quiz");

  function initQuiz() {
  

    questionIndex = 0;
    currentQuestion = 1;
    questionIsAnswered = 0;
    score = 0;
    wrong = 0;
    timeSpent = "00:00";

    quiz.innerHTML = `
    <div id="stats">
    <p> Q : <span id="questionNumber">${currentQuestion}/${
      questions.length
    }</span></p>
    <p> correct : <span class="score" id="score">${score}</span></p>
    <p> Wrong : <span class="wrong" id="wrong">${wrong}</span></p>

    <p> Time <span id="timer">00:00</span></p>
    </div>
    <div id="progress-container"><span id="progress"></span></div>
    <section id="answers"></section>
    
    `;

    displayQuestion();
    startTimer();
  }

  function displayQuestion() {
    let question = questions[questionIndex];
    let answers = document.getElementById("answers");
    let answerNumber = 0;
    let output = `<h2 class="text-center bold"> ${
      question.question
    }</h2>`;

    for (let i in question.answers) {
      answerNumber++;
      output += `<div class="answer">
      <input type="radio" id="answer-${answerNumber}" name="answers" value="${answerNumber}">
      <label for="answer-${answerNumber}">
      <span class="answer-number"></span> ${question.answers[i]}
      </label>
      </div>`;
    }

    answers.innerHTML = output;
  }

  function startTimer() {
    let s = 0;
    let m = 0;
    let h = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let timer = document.getElementById("timer");

    quizTimer = setInterval(function() {
      s++;

      if (s > 59) {
        s = 0;
        m++;
        seconds = "0" + s;
      }

      if (m > 59) {
        m = 0;
        h++;
        minutes = "00";
      }

      seconds = s > 9 ? s : "0" + s;
      minutes = m > 9 ? m : "0" + m;
      hours = h > 9 ? h : "0" + h;

      timeSpent = h
        ? hours + ":" + minutes + ":" + seconds
        : minutes + ":" + seconds;
      timer.textContent = timeSpent;
    }, 1000);
  }

  function displayResults() {
    let notification = document.getElementById("notification");
    notification.parentElement.removeChild(notification);
    quizTimer = null;
    isQuizDone = 1;

    let pageURL = window.location.href;
    let shareText = `I just finished this quiz and got ${score} out of ${
      questions.length
    } questions right.`;
    let fbShareURL = `https://www.facebook.com/sharer.php?u=${pageURL}&quote=${shareText}`;
    let twitterShareURL = `https://twitter.com/intent/tweet?text=${shareText} ${pageURL}`;

    quiz.innerHTML = `<section id="results" class="text-center">
    <h2 class="bold">إليك نتيجة الأختبار</h2>
    <p id="percentage">${scorePercentage()}%</p>
    <p>لقد أجبت على  <span class="bold">${score}</span> أسئلة من  <span class="bold">${
      questions.length
    }</span> </p>
    <p style="margin-top: 10px;">الوقت المستغرق : <span class="bold">${timeSpent}</span></p>


    <button type="button" id="start-over-btn" class="btn blue-btn"> حاول مرة أخرى</button>
    </section>`;
  }

  function goToNextQuestion() {
    currentQuestion++;
    questionIndex++;
    questionIsAnswered = 0;

    let notification = document.getElementById("notification");
    notification.parentElement.removeChild(notification);

    let questionNumber = document.getElementById("questionNumber");
    questionNumber.textContent = `${currentQuestion}/${questions.length}`;

    displayQuestion();
  }

  function submitAnswer(e) {
    let selectedAnswer = Number(e.target.value);
    let rightAnswer = questions[questionIndex].correctAnswer;
    let answers = document.getElementsByName("answers");
    let progress = document.getElementById("progress");

    questionIsAnswered = 1;

    progress.style.width = progressPercentage() + "%";

    let notification = document.createElement("div");
    let message = document.createElement("p");
    let label = e.target.nextElementSibling;
    notification.id = "notification";

    if (selectedAnswer === rightAnswer) {
      score++;
      message.textContent = " !إجابة صحيحة";
      label.classList.add("green-bg");
    } else {
      wrong++;
      message.textContent = "!إجابة خاطئة";
      label.classList.add("red-bg");

      answers.forEach(answer => {
        if (Number(answer.value) !== rightAnswer) return;

        answer.nextElementSibling.classList.add("green-bg");
      });
    }

    let button = document.createElement("button");
    button.classList.add("blue-btn");

    if (isLastQuestion()) {
      button.id = "show-results-btn";
      button.textContent = "أعرض النتيجة ";
      clearInterval(quizTimer);
      quizTimer = null;
    } else {
      button.id = "next-btn";
      button.textContent = "السؤال التالي";
    }

    notification.appendChild(message);
    notification.appendChild(button);
    quiz.insertAdjacentElement("afterend", notification);

    button.focus();

    answers.forEach(answer => (answer.disabled = "disabled"));

    document.getElementById("score").textContent = score;
    document.getElementById("wrong").textContent = wrong;

  }

  let scorePercentage = () => (score / questions.length * 100).toFixed(0);
  let progressPercentage = () =>
    (currentQuestion / questions.length * 100).toFixed(0);
  let isLastQuestion = () => currentQuestion === questions.length;

  function spaceBarHandler() {
    if (document.querySelector(".quiz-intro")) {
      initQuiz();
    }

    if (questionIsAnswered && quizTimer) {
      goToNextQuestion();
    }

    if (!quizTimer && !isQuizDone) {
      displayResults();
      console.log("last");
    }
  }

  function numericKeyHandler(e) {
    let answers = document.getElementsByName("answers");

    answers.forEach(answer => {
      if (answer.value === e.key) {
        if (questionIsAnswered) return;

        answer.checked = "checked";

        let event = new Event("change");
        answer.dispatchEvent(event);
        submitAnswer(event);

        questionIsAnswered = 1;
      }
    });
  }

  document.addEventListener("click", function(e) {
    if (
      e.target.matches("#start-quiz-btn") ||
      e.target.matches("#start-over-btn")
    )
      initQuiz();
    if (e.target.matches("#next-btn")) goToNextQuestion();
    if (e.target.matches("#show-results-btn")) displayResults();
  });

  document.addEventListener("change", function(e) {
    if (e.target.matches('input[type="radio"]')) submitAnswer(e);
  });

  document.addEventListener("keyup", function(e) {
    if (e.keyCode === 32) spaceBarHandler(); // init quiz / go to next question
    if (e.keyCode >= 48 && e.keyCode <= 57) numericKeyHandler(e); // choose an answer
  });

  document
    .getElementById("shortcuts-info-btn")
    .addEventListener("click", function() {
      let info = document.querySelector(".shortcuts-info");
      info.classList.toggle("display-block");
    });
})();