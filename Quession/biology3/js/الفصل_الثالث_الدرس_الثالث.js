(function() {
  "use strict";

  let questions = [
    {
      question: " أي مما يلى ليس من خصائص النباتات مغطاة البذور ؟.",
      answers: ["تتكاثر جنسيا ولاجنسيا","تنشأ بذورها داخل غلاف زهری"," تسمى نباتات بذرية","تسمى نباتات زهرية"],
      correctAnswer: 3
    },
    {
      question: "ماذا ينتج عن عملية الانقسام الميوري في إحدى خلايا مناسل النبات ؟.",
      answers: ["٤ حبوب لقاح","٤ بويضات","٤ جراثيم صغيرة"," بويضة واحدة أو ٤ حبوب لقاح"],
      correctAnswer: 3
    },
    {
      question: "كيف تتكون الخلايا السمتية أثناء نضج مبيض النبات الزهري ؟.",
      answers: ["بالانقسام الميتوزي فقط"," بالانقسام الميوزي فقط"," بالانقسام الميتوزي يليه الانقسام الميوزي"," بالانقسام الميوزي يليه الانقسام المبتوزي"],
      correctAnswer: 3
    },
    {
      question: "  اذا كان عدد الصبغيات في النواة المولودة = س فكم عدد الصبغيات في النواة الذكرية.",
      answers: ["١/٢ س","س","٢ س","٣ س"],
      correctAnswer: 3
    },
    {
      question: "  ما الخلايا الناتجة من الانقسام الميوزي  ثم الانقسام الميتوزي   للخلية الجرثومية الأمية في المناسل .",
      answers: ["الأمشاج في بلازموديوم الملاريا","البويضات في النبات","الحيوانات المنوية في نحل العسل","البويضات في الفوجير"],
      correctAnswer: 3
    },
    {
      question: " كيف تتكون حبوب اللقاح في النباتات الزهرية ؟.",
      answers: ["بالانقسام الميوزي","بالانقسام الميتوزي","بالانقسام الميتوزي يليه الانقسام الميوزي","بالانقسام الميوزي يليه الانقسام الميتوزي"],
      correctAnswer: 3
    },
    {
      question: " تتشابهة حبة اللقاح مع الزيجوسبور  في.",
      answers: ["عدد الأنوية","وجود جدار سميك","الظروف البيئية للتكوين","عدد المجموعات الصبغية"],
      correctAnswer: 3
    },
    {
      question: "كم يكون أقصي عدد من حبوب اللقاح في متك زهرة يحتوي كل كيس منه علی ۱۰۰ خلية جرثومية أمية .",
      answers: ["411","800","1600","3200"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلي ليس من الوظائف الأساسية الزهرة ؟.",
      answers: [" إنتاج حبوب اللقاح ","التكاثر اللاجنسي","  إنتاج البويضات","التكاثر جنسي"],
      correctAnswer: 3
    },
    {
      question: "ای ما يلی يمثل وظيفة القلم في الكربلة ؟.",
      answers: [" توجيه دخول أنبوبة اللقاح","يتعرف علی حبوب اللقاح المناسبة "," إنتاج الرحيك","تحفيز انقسام الخلايا المولدة"],
      correctAnswer: 3
    },
    {
      question: " اي مما يلي يحدث في بويضة النباتات مغطاة البذور ؟.",
      answers: ["تتکون جراثيم صغيرة من الخلية الجرثومية الأمية ","تنقسم الخلية الجرثومية الأمية انقسام اخترالي"," تنتج نواة البيضة من الانقسام الميوزي لنواة الكيس الجنيني"," يحط الاندوسبرم بالخلية الجرثومية الأمية"],
      correctAnswer: 3
    },
    {
      question: "  اذا علمت أن نصف عدد صبغيات خلية في ميسم زهرة الفول = ۲ س، فكم عدد صبغيات النواة الذكرية.",
      answers: ["س","٢س","٣س","٤س"],
      correctAnswer: 3
    },
    {
      question: "  كم يكون أقصى عدد من الأنوية الأنبوبية في حبوب اللقاح الناتجة بعد إنبات متك زهرة يحتوي كل كيس منهعلی ۱۲۰ خلية جرثومية أمية ؟ .",
      answers: ["840","960","1920","3840"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلي لا يعتبر جزء من المبيض الناضج ؟.",
      answers: ["الخلية الجرثومية الأمية","البيضة"," الأنوية القطبية"," النبوسيلة"],
      correctAnswer: 3
    },
    {
      question: "  إذا علمت أن نبات البطاطس يحتوي على ٤٨ كروه سوم، أي مما يلي يمثل عدد الكروموسومات في نواة   الكيس الجنيني .",
      answers: ["21","24","38","72"],
      correctAnswer: 3
    },
    {
      question: "  إذا كان أقصى عدد ينتج من الأنوية الذكرية في حبوب اللقاح يساوی ۲۲۰ نواة، فكم عدد الخلايا الجرثومية   الأمية الموجودة في متك الزهرة ؟.",
      answers: ["10","40","80","160"],
      correctAnswer: 3
    },
    {
      question: "كم عدد الخلايا الجرثومية الأمية التي ستنتج ۱۰۰۰ نواة مولدة ؟.",
      answers: ["125","200","250","500"],
      correctAnswer: 3
    },
    {
      question: "    كـم يكـون أقصى عدد من الخلايا السمتية التي تنتج عن انقسام ١٠ خلايا جرثومية أمية في مبيض نبات   زهری ؟",
      answers: ["10","20","30","40"],
      correctAnswer: 3
    },
    {
      question: "  كم يكون أقصى عدد من الجراثيم الصغيرة التي تنتج عن انقسام ١٠٠ خلية جرثومية أمية في متك   نبات زهري ؟.",
      answers: ["100","400","800","1600"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلي يمثل الاختلاف بين خطوات تكوين كل من حبوب اللقاح والبويضات في النباتات الزهرية ؟.",
      answers: [" ترتيب حدوث كل من الانقسام الميتوزي والميوزي","عدد مرات الانقسام المينوري","عدد مرات الانقسام الميوزي"," عدد الخلايا الناتجة من الانقسام الميوزي"],
      correctAnswer: 3
    },
    {
      question: "  ما مدى صحة العبارتين التاليتين، كل الأزهار الخنثي تحتوي على طلع ومتاع، ويكون التلقيح فيها دائما ذاتي ؟.",
      answers: [" العبارتان صحيحتان وبينهما علاقة","العبارة الأولى صحيحة والعبارة الثانية خطأ ","العبارة الأولى خطة والعبارة الثانية صحيحة"," العبارتان خطا"],
      correctAnswer: 3
    },
    {
      question: " ما الفرق بين التلقيح الخلطي والتلقيح الذاتي ؟.",
      answers: ["التلقيح الخلطي ينتج عنه بدوزا تعطى أفرادا تحمل نفس صفات الأبوين","التلقيح الذاتي مكلف بيولوجيا","    التلقيح الخلطي ينتج عنـه بـدورا تعطى أفرادا أكثر تكيفـا مـع التغيرات البيئية عن الناتجة من التلقيح الذاتي","التلقيح الذاتي يستهلك طاقة أكثر"],
      correctAnswer: 3
    },
    {
      question: "اى مما يلى ليس من حصائص النباتات مغطاة البذور ",
      answers: ["تتكاثرجنسياولاجنسيا", "تنشأبذورها داخل غلاف زهرى", "تسمى نباتات بذرية ", "تسمى نباتات زهرية"],
      correctAnswer: 3
    },
    {
      question: "ماذا ينتج عن عمليةالانقسام الميوزى فى احدى خلايا مناسل النبات",
      answers: ["٤ حبوب لقاح", "٤ بويضات", "٤جراثيم صغيرة", "بويضة واحدة او ٤ حبوب لقاح"],
      correctAnswer: 3
    },
    {
      question: "كيف تتكون الخلايا السمتية اثناء نضج مبيض النبات الزهرى",
      answers: ["بالانقسام الميتوزى فقط", "بالانقسام الميوزى فقط", "بالانقسام الميتوزى يليه الانقسام الميوزى", "بالانقسام الميوزى يليه الانقسام الميوزى"],
      correctAnswer: 3
    },
    {
      question: "اذا كان عدد الصبغيات فى النواة المولودة= س فكم عدد الصبغيات فى النواة الذكرية",
      answers: ["١/٢س", "س", "٢س", "٣س"],
      correctAnswer: 3
    },
    {
      question: "ما الخلايا من الانقسام الميوزى ثم الانقسام الميتوزى للخلية الجرثومية الامية فى المناسل",
      answers: ["امشاج فى يلازموديوم الملاريا", "البويضات فى النبات", "الحيوانات المنوية فى نحل العسل", "البويضات فى الفرجير"],
      correctAnswer: 3
    },
    {
      question: "كيف تتكون حبوب اللقاح فى النباتات الزهرية",
      answers: ["بالانقسام الميوزى ", "بالانقسام الميتوزى", "بالانقسام الميتوزى يليه الانقسام الميوزى", "بالانقسام الميوزى يليه الانقسام الميتوزى"],
      correctAnswer: 3
    },
    {
      question: "تتشابهة حبة اللقاح مع الزيجوسبور فى عدد الانوية",
      answers: ["عدد الانوية", " وجود جدار سميك", " الظروف البيئية للتكوين", "عدد المجموعات الصبغية"],
      correctAnswer: 3
    },
    {
      question: "كم يكون اقصى عدد من حبوب اللقاح فى متك زهرة يحتوى كل كيس منه  على  ١٠٠ خلية جرثومية أمية",
      answers: ["٤٠٠", "٨٠٠", "١٦٠٠", "٣٢٠٠"],
      correctAnswer: 3
    },
    {
      question: "اى مما يلى ليس من الوظائف الاساسية لزهرة",
      answers: ["انتاج حبوب اللقاح", "التكاثر اللاجنسى", "انتاج البويضات", "التكاثر جنسى"],
      correctAnswer: 3
    },
    {
      question: "اى ما يلى يمثل وظيفة القلم فى الكربلة",
      answers: ["تحفيز انقسام الخلايا المولدة","انتاج  الرحيك","تعرف على حبوب اللقاح المناسبة", "توجيه دخول أنبوبة اللقاح"],
      correctAnswer: 3
    },
    {
      question: "اى مما يلى يحدث فى البويضة النباتات مغطاة البذور",
      answers: ["يحط الاندوسبرم بالخلية الجرثومية ", "ينتج نواة البيضة من الانقسام الميوزى لنواة الكيس الجنينى", "تنقسم الخلية الجرثومية الامي انقسام اختزالى ", "تتكون جراثيم صغيرة من الخلية الجرثومية الامية"],
      correctAnswer: 3
    },
    {
      question: "اذا علمت ان نصف عدد الصبغيات خلية فى ميسم زهرة الفول = ٢س فكم عدد صبغيات النواة الذكرية ",
      answers: ["٤س", "٣س", "٢س", "س"],
      correctAnswer: 3
    },
    {
      question: "كم يكون اقصى عدد من الانوية الانبويية فى حبوب اللقاح الناتجة بعد انيات متك زهرة يحتوى كل كيس منه على  ١٢٠ خلية جرثومية أمية",
      answers: ["٣٨٤٠", "١٩٢٠", "٩٦٠", "٨٤٠"],
      correctAnswer: 3
    },
    {
      question: "اى مما يلى لا يعتبر جزء من المبيض الناضج",
      answers: ["النبوسيلة", "الانوية القطبية", "البيضة ", "الخلية الجرثومية الامية"],
      correctAnswer: 3
    },
    {
      question: "اذا علمت ان نبات البطاطس على ٤٨ كروموسوم اى مما يلى يمثل عدد الكروموسومات فى نواة الكيس الجنينى",
      answers: ["٧٢", "٤٨", "٢٤", "٢١"],
      correctAnswer: 3
    },
    {
      question: "اذا كان اقصى عدد ينتج من الانويةالذكرية فى حبوب اللقاح يساوى ٢٢٠ نواة فكم عدد الخلايا  الجرثومية الأمية الموجودة فى متك الزهرة",
      answers: ["١٦٠", "٨٠", "٤٠", "١٠"],
      correctAnswer: 3
    },
    {
      question: "كم عدد الخلايا الجرثومية الأمية التى ستنتج ١٠٠٠ نواة مولدة",
      answers: ["٥٠٠", "٢٥٠", "٢٠٠", "١٢٥"],
      correctAnswer: 3
    },
    {
      question: "كم  يكون اقصى عدد من الخلايا السمتية التى تنتج عن انقسام ١٠ خلايا جرثومية  امية فى مبيض نبات  زهرى",
      answers: ["٤٠", "٣٠ ", "٢٠", "١٠"],
      correctAnswer: 3
    },
    {
      question: "كم يكون اقصى عدد من الجراثيم الصغيرة التى تنتج عن انقسام١٠٠ خلية جرثومية أمية فى متك نبات زهرى ",
      answers: ["١٦٠٠", "٨٠٠", "٤٠٠", "١٠٠"],
      correctAnswer: 3
    },
    {
      question: "اى مما يلى يمثل الاختلاف بين خطوات تكوين كل من حبوب اللقاح والبويضات فى النباتات الزهرية",
      answers: ["عدد الخلايا الناتجة من الانقسام  الميوزى", "عدد نرات الانقسام الميوزى ", "عدد مرات الانقسام الميتوزى","ترتيب حدوث كل الانقسام الميتوزى والميوزى"],
      correctAnswer: 3
    },
    {
      question: "ما مدى صحة العبارتين التاليتين كل الازهار الخنثى تحتوى على طلع ومتاع ويكون التلقيح فيها دائما ذاتى",
      answers: ["العبارتان خطا", "العبارة الاولى خطأ والعبارة الثانية صحيحة", "العبارة الاولى صحيحة والعبارة الثانية خطأ", "العبارتان صحيحتان وبينهما علاقة "],
      correctAnswer: 3
    },
    {
      question: "ما الفرق بين التلقيح الخطى والتلقيح الذاتى ",
      answers: ["التلقيح الذاتى يستهلك طاقة اكبر", "التلقيح الخلطى ينتج عنه بدورا تعطى افراد اكثر تكيفا مع التغيرات البيئية عن الناتجة من التلقيح الذاتى ", "التلقيح الذاتى مكلف بيولوجيا ", "التلقيح الخلطى ينتج عنه بذورا تعطى افراد تحمل نفس  صفات الابوين "],
      correctAnswer: 3
    },
    {
      question: "اذا كان مبيض زهرة ما يحتوي على خمس بويضات ناضجة فكم عدد حبوب اللقاح اللازنة لاخصاب هذة  البويضات",
      answers: ["١٠", "٧", "٥","٢"],
      correctAnswer: 3
    },
    {
      question: "تحقق عملية التكاثر فى النباتات الزهرية اهدافها عند حدوث ",
      answers: ["اخصاب مزدوج", "اندماج ثلاثى", "اندماج نواة مذكرة مع نواة خلية البيضة داخل الكيس الجنينى فقط ", "تلقيح دون اخصاب"],
      correctAnswer: 3
    },
    {
      question: "تتشابهة النيوسيلة مع الاندوسيرم فى",
      answers: ["الوظيفة", "توقيت التكوين", "مكان وجودها ", "عدد المجموعات الصبغية"],
      correctAnswer: 3
    },
    {
      question: "التركيب الذى تندمج معه السابحة الذكرية فى سرخس الفوجير لاتمام عملية التكاثر يناظره فى النباتات الزهرية",
      answers: ["الكيس الجنينى", "نواتا الكيس الجنينى", "خلية البيضة ", "البويضة"],
      correctAnswer: 3
    },
    {
      question: "اى العبارات التالية غير صحيحة بالنسبة للاندوسيرم",
      answers: ["غنى بالعناصر الغذائية التى يوافرها للجنين", "يتطور من البيضة المخصبة ", "نواته ثلاثية المجموعة الصبغية", "ممكن استهلاكه اثناء تكوين الجنين"],
      correctAnswer: 3
    },
    {
      question: "اذا كان مجموع الكروموسومات التى تشارك فى تكوين حية نبات يساوى ٧٥ فكم عدد الكروموسومات فى نواة الاندوسيرم",
      answers: ["٤٥", "٣٠", "٢٠", "١٥"],
      correctAnswer: 3
    },
    {
      question: "اذا كان عدد الصبغيات فى خلية بتلة نبات البسلة ٧ ازواج من الصبغيات فكم عدد الصبغيات فى خلايا جنين بذرة البسلة ",
      answers: ["١٤ زوج صبغى", "٢١صبغى ", "١٤ صبغى", "٧ صبغيات"],
      correctAnswer: 3
    },
    {
      question: "كم عدد الخلايا الحية فى بويضة مبيض الزهرة الناضج",
      answers: ["٨", "٧", "٦", "٥"],
      correctAnswer: 3
    },
    {
      question: "وجد احد الباحثين نبات برى يحمل ازهار خنثى خالية من البتلات ولكنها تحمل العديد من الاسدية ماذا تتوقع ان تكون طريقة التلقيح فى هذا النبات",
      answers: ["خلطى بواسطة الرياح", "خلطى بواسطة الحشرات فقط", "ذاتى او خلطى بواسطة الرياح ", "ذاتى او خلطى بواسطة الحشرات"],
      correctAnswer: 3
    },
    {
      question: "اى من العبارات التالية  صحيحة ",
      answers: ["لكى تتكون بذرة لا بد من حدوث عملية اخصاب", "لكى تتكون حبة لابد من استهلاك الاندوسيرم ", "لكى تتكون ثمرة لابد ان تتكون بذرة ", "لكى تتكون ثمرة لابد من حدوث عملية اخصاب "],
      correctAnswer: 3
    },
    {
      question: "يحتوى الكيس الجنينى بعد الاخصاب المزدوج مباشرة على خلايا مجموعتها  الصبغية ",
      answers: ["احادية فقط", "ثنائية فقط", "ثنائية وثلاثية", "احادية وثنائية وثلاثية"],
      correctAnswer: 3
    },
    {
      question: "اى من النباتات  التالية لا يمكننا فيها فصل البذور عن الثمار",
      answers: ["البسلة والذرة", "البسلة والفول", "القمح والذرة", "القمح والفول"],
      correctAnswer: 3
    },
    {
      question: "اى من العلميات الحيوية التالية تحدث للبذرة فى المرحلة الاولى للانبات ",
      answers: ["التنفس الخلوى والبناء الضوئى", " الانقسام الميوزى يليه الانقسام الميتوزى", "البناء الضوئى", "التنفس الخلوى"],
      correctAnswer: 3
    },
    {
      question: "تتشابهة ثمرة الموز مع ثمرة الخوخ فى ان كلتيهما",
      answers: ["تنتج من البويضة", "تنتج من المبيض", "تتكون من عملية التلقيح فقط", "تتكون من عمليتى التلقيح والاخصاب"],
      correctAnswer: 3
    },
    {
      question: "اى النباتات التالية تتصلب فيه الاغلفة البيضية",
      answers: ["الشعير", "الترمس", "الذرة", "القمح"],
      correctAnswer: 3
    },
    {
      question: "يرجع تشقق بعض بذور الثمار الى تأثير الهرمونات النباتية على .... الزهرة",
      answers: ["الكيس الجنينى", "البيض ", "غلاف المبيض ", "اغلفة البويضة"],
      correctAnswer: 3
    },
    {
      question: "كيف يحصل جنين المشمش على الغذاء اللازم لنموه تحت سطح التربة عند بداية الانبات",
      answers: ["بالاملاح المعدنية فى التربة ", "بالتحلل المائى للبروتين فى الفلقتين ", "يتحلل النشا فى الاندوسيرم ", "عملية البناء الضوئى"],
      correctAnswer: 3
    },
    {
      question: "فى المبيض الناضج للزهرة كم عدد الخلايا التى تتحلل بعد الاخصاب المزدوج",
      answers: ["٨", "٧", "٦", "٥"],
      correctAnswer: 3
    },
    {
      question: "اى مما يلى يعبر عن اصلا القصرة",
      answers: ["اغلفة المبيض والبويضة معا", "غلاف البويضة فقط", "اغلفة البويضة فقط", "غلاف المبيض فقط "],
      correctAnswer: 3
    },
    {
      question: "اى مما يلى يحدث بعد عملية الاخصاب المزدوج فى النبات  ",
      answers: ["تذبل الزهرة وتسقط","تتحول البويضة الى ثمرة ويتحول كل مبيض مخصب الى بذرة","يتحول المبيض الى بذرة وتتحول كلبويضة الى ثمرة","يتحول المبيض الى ثمرة وتتحول البويضات المخصبة الى بذور "],
      correctAnswer: 3
    },
    {
      question: "كم  عدد الخلايا فى بويضة الزهرة الناضجة قبل حدوث الاخصاب المزدوج. وكم عددها بعد حدوث الاخصاب المزدوج",
      answers: ["٢-٦", "٢-٧", "٧-٣", "٧-٦"],
      correctAnswer: 3
    },
    {
      question: "تتشابهة اللائحة الجرثومية فى الاسبروجيرا مع بذرة فأن كلاهمها",
      answers: ["ناتج عن اندماج الامشاج", "يحدث له انقسام ميوزى قبل الانبات", "فى حالة الكمون", "وحيد الخلية"],
      correctAnswer: 3
    },
    {
      question: "الجرثوميةفى دورة حياة فطر البنسليوم تقابل ...فى النبات",
      answers: ["الزيجوت", "البذرة", "البيضة", "حبة اللقاح"],
      correctAnswer: 3
    },
    {
      question: "فى اى من النباتات التالية يستهلك فيها الجنين الاندوسبرم اثناء تكوينه ",
      answers: ["النخيل ", "التفاح", "الذرة", "البصل"],
      correctAnswer: 3
    },
    {
      question: "اى من أزواج المصطلحات التالية صحيح فى النباتات الزهرية ",
      answers: ["البذور= الزيجوت", "المبيض = الحقيقة", "الكيس الجنينى= المشيج الانثوى ", "المبيض = الثمرة الكاذبة"],
      correctAnswer: 3
    },
    {
      question: "كم عدد حبوب اللقاح اللازمة لاخصاب زهرة المانجو",
      answers: ["٤", "٣", "٢", "١"],
      correctAnswer: 3
    },
    {
      question: "كم عدد الانوية التى تشارك فى تكوين حبة القمح ",
      answers: ["٥", "٤", "٣", "٢"],
      correctAnswer: 3
    },
    {
      question: "اى مما يلى ليس من التأثيرات الطبيعة للهرمونات النباتية ",
      answers: ["التفاف المحلاق حول الدعامة ", "نمو المجموع الجذرى ", "ذبول النباتات الحوليه قبل اتمام التكاثر ", "نضج الثمار وكبر حجمها"],
      correctAnswer: 3
    },  ];

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