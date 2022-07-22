(function() {
  "use strict";

  let questions = [
    {
      question: "العمليات التي تؤدي مباشرة إلى تكوين الصخور النارية هي ",
      answers: ["النحت والترسيب ","التماسك والتلاحم" ,"الضغط والحرارة","الانصهار والتجمد"],
      correctAnswer: 4
    },
     { question: "في دورة الصخور يتحول الجرانيت والبازلت إلى فتات صخري عن طريق ",
      answers: ["الترسيب   ","التبريد"," التعرية","الحركات الأرضية الهابطة"],
      correctAnswer: 3
    },
    {question: " إذا رجعت بالزمن إلى الماضي عند بداية تكوين كوكب الأرض، نجد أن معظم سطح الأرض مغطى بـ ",
      answers: ["الماء"," المواد المنصهرة"," الصخور الصلبة"," الجليد"],
      correctAnswer: 2
    },
    {  question: " الصخور المكونة لقشرة الأرض الخارجية عند بداية تكوين الأرض غالبا تكونت نتيجة",
      answers: ["انخفاض حرارة مكوناتها","ارتفاع حرارة مكوناتها"," ثبات درجة حرارة مكوناتها"," انخفاض ثم ارتفاع درجة حرارة مكوناتها"],
      correctAnswer: 1
    },
    { question: "عندما يتعرض الحجر الجيري لحرارة عالية قد تحدث له عملية ",
      answers: ["تحول","نقل"," ترسیب","تحجر"],
      correctAnswer: 1
    },
    { question: "الصخر الكتلي الذي يحتوي على أمونيتات غير واضحة المعالم مما يلى على الأرجح هو",
      answers: ["الحجر الجيري","الحجر الرملي","الرخام","الميكروجرانيت"],
      correctAnswer: 3
    },
    { question: " العامل الذي يقدم دليلا على أن الصخور النارية كانت منصهرة في السابق هو وجود ",
      answers: ["نسيج متبلور","حفريات","فحم","کالسيت"],
      correctAnswer: 1
    },
    { question: "لا تحتوى الصخور النارية على حفريات لأنها",
      answers: ["صخور غير مسامية"," تتكون نتيجة تبلور الصهير"," أول صخور تكونت في القشرة الأرضية","المعادن المكونة لها شديدة الصلابة"],
      correctAnswer: 2
    },
    { question: "لا تحتوى بعض الصخور المتحولة على حفريات لأنها ",
    answers: ["تتكون تحت سطح الأرض","تتحول من صخور نارية"," تتحول بفعل الحرارة"," نسيجها متورق"],
    correctAnswer: 2

    },
    { question: "أول عملية تحدث الفتات الصخري عندما نقل سرعة عامل النقل هي عملية ",
      answers: ["التحجر","الترسيب","التحول","التضاغط"],
      correctAnswer: 2
    },
    { question: "تحدث دورة الصخور نتيجة ",
      answers: ["تكرار العمليات الجيولوجية على سطح الأرض"," زيادة الجاذبية الأرضية","التشابه في التركيب المعدني للصخور","تعدد أنواع الصخور المكونة للقشرة الأرضية "],
      correctAnswer: 1
    },
     {question: "التفاعل المتصل في متسلسلة بوين أول المعادن تبلورا من الصهير هو ",
      answers: ["الأوليفين","الفلسبار البوتاسي"," الفلسبار الكلسي","الفلسبار الصودي"],
      correctAnswer: 3
    },
      {question: " التفاعل المتصل في متسلسلة بوين آخر المعادن تبلورا من الصهير هو ",
      answers: ["الكوارتز"," الفلسبار البوتاسي"," الفلسبار الكسي"," الفلسبار الصودي"],
      correctAnswer: 4
    },
      {question: " آخر المعادن تبلورا في التفاعل غير المتصل لبوين هي ",
      answers: ["الأمغيبول","الأوليفين","الكوارتز","البيوتيت"],
      correctAnswer: 4
    },
     { question: " أكبر نسبة حديد توجد في معادن     ",
      answers: [" الأوليفين والكوارتز  "," الأوليفين والمسكوفيت      "," الأوليفين والبيروكسين","الأوليفين والأرثوكليز"],
      correctAnswer: 3
    },
    {  question: "عناصر سائل الماجما تكون معادن ",
      answers: ["الكربونات","الكبريتيدات","الكبريتات"," السيليكات"],
      correctAnswer: 4
    },
     { question: " بلورات الأوليفين والبيروكسين تكونت نتيجة ",
      answers: [" تبريد الصهير الحامضي","تبريد اللافا الحامضية"," تبريد الماجما القاعدية","انصهار الصخور"],
      correctAnswer: 3
    },
     { question: " العناصر التي تزيد نسبة وجودها في الصخر الناري مع زيادة نسبة الحديد هي",
      answers: ["الماغنيسيوم والكالسيوم"," الصوديوم والبوتاسيوم ","الصوديوم والكالسيوم","البوتاسيوم والماغنيسيوم"],
      correctAnswer: 1
    },
     { question: "مع انخفاض درجة حرارة الصهير",
      answers: ["تزداد نسبة الحديد وتقل نسبة السيليكون"," تقل نسبة الماغنيسيوم وتزداد نسبة الصوديوم","تقل نسبة الماغنيسيوم ونقل نسبة البوتاسيوم","تزداد نسبة الكالسيوم وتقل نسبة الماغنيسيوم"],
      correctAnswer: 2
    },
     { question: "من خلال دراستك لمتسلسلة تفاعلات بوين نجد أن ",
      answers: [" معظم المعادن تتبلور عند نفس درجة الحرارة"," معظم المعادن المكونة للصخور الحمضية تتبلور قبل المعادن المكونة لصخور القاعدية"," معدني المسكوفيت والكوارتز هما أخر المعادن تبلورا عند تبريد الماجما"," معدن البيوتيت هو أول المعادن تبلورا عند تبريد الماجما"],
      correctAnswer: 3
    },
      {question: "العلاقة بين نسبة السيليكا في الصهير ودرجـة حـرارة تبلور المعادن من الصهير علاقة",
      answers: ["طردية"," تناقصية ثم تزايدية","عكسية"," تزايدية ثم تناقصية"],
      correctAnswer: 3
    },
     { question: " عندما تتبلور نصف كمية الصهير تكون الكمية المتبقية لا تحتوي على عنصر ",
      answers: ["الكالسيوم","السيليكون","السيليكون","البوتاسيوم"],
      correctAnswer: 1
    },
     { question: "مقارنة بالتركيب الكيميائي للفلسبار الموجود في الصخور الحمضية، فإن الفلسبار الموجود في الصخور",
      answers: ["غنى بالكالسيوم والصوديوم والبوتاسيوم","غنى بالكالسيوم وفقير بالصوديوم والبوتاسيوم","  فقير بالكالسيوم وغنى بالصوديوم والبوتاسيوم"," فقير بالكالسيوم والصوديوم والبوتاسيوم"],
      correctAnswer: 2
    },
     { question: "الصخر الذي يعتبر من الصخور الأولية مما يلي هو",
      answers: [" الحجر الرملي"," الحجر الجيري","البيريدوتيت","الرخام"],
      correctAnswer: 3
    },
     { question: "الخواص الفيزيائية الأفضل الوصف صفر البيومي هي أن له نسيج ",
      answers: ["دقيق مع فراغات هوائية","فتاتي مع حبيبات حادة الحواف"," فتأتي مع أصداف متلاصقة","متورق مع فراغات هوائية"],
      correctAnswer: 1
    },
     { question: "يصنف صخر الجرانيت من الصخور النارية الجوفية لأنه",
      answers: ["غنى بمعادن الكوارتز والفلسيار","نسیجه خشن وله بلورات كبيرة الحجم  "," يتكون نتيجة تبريد اللافا","شديد الصلابة ويتميز بألوان فاتحة"],
      correctAnswer: 2
    },
     { question: "الصخر الذي يحتوى على البلورات الأكبر حجما فيما يلي هو صخر ",
      answers: ["البيريدونيت","البازلت","الأنديزيت","الرايوليت"],
      correctAnswer: 3
    },
     { question: "المعدن الذي يمكن تواجده في جميع العينات الصخرية للرايوليت والأنديزيت هو ",
      answers: ["البيروكسين","الكوارتز","البلاجيوكليز الكلسي","الأوليفين"],
      correctAnswer: 2
    },
     { question: "عند تبريد اللافا القاعدية قد يتكون صخر ",
      answers: ["الجابري","البازلت","الانديزيت","الرايوليت"],
      correctAnswer: 2
    },
     { question: "عند تبريد الماجما المتوسطة قد يتكون صخر",
      answers: ["الجابرو","الميكرودايورایت","الدايورايت","البيومس"],
      correctAnswer: 3
    },
     { question: "عند تبريد اللافا الحامضية قد يتكون صخر",
      answers: ["الجابرو","البازلت","الجرانيت","البيومس"],
      correctAnswer: 4
    },
    {  question: "صخر الدوليرايت من الصخور",
      answers: ["المتوسطة الجوفية","القاعدية المتداخلة","القاعدية السطحية","المتوسطة السطحية"],
      correctAnswer: 2
    },
     { question: "الصخر الذي يحتوي على بعض البلورات كبيرة الحجم وسط أخرى صغيرة الحجم مما يلي هو صخر",
      answers: ["الميكروجرانيت","الجابرو"," الجرانيت","الأنديزيت"],
      correctAnswer: 1
    },
     { question: "صخر الجرانيت غني بعنصر",
      answers: ["البوتاسيوم","الحديد","الماغنيسيوم","الكالسيوم"],
      correctAnswer: 1
    },
     { question: "الصخور الغنية بالكوارتز والأرثوكليز هي صخور",
      answers: [" الجرانيت والجابرو","الجابري والبازلت"," البازلت والرايوليت","الرايوليت والجرانيت"],
      correctAnswer: 4
    },
     { question: "الخاصية التي تعطي أفضل الشواهد على أن صخر الجرانيت تجمد على أعماق كبيرة تحت سطح الأرض",
      answers: ["الكثافة القليلة","تركيبه الكيميائي"," حامضية المعادن","النسيج الخشن  "],
      correctAnswer: 4
    },
     { question: "الجابرو صخر ناري، على الأرجح أنه تكون من صهير تعرض لتبريد",
      answers: [" سريع على سطح الأرض","بطىء على سطح الأرض","سريع على أعماق كبيرة من سطح الأرض","بطيء على أعماق كبيرة من سطح الأرض"],
      correctAnswer: 4
    },
    { question: "الصخر الناري السطحي الذي تبلغ نسبة السيليكا فيه حوالي ۷۰ ٪ هو",
      answers: ["الجرانيت","الرايوليت","الميكروجرانيت","الدوليرايت"],
      correctAnswer: 2
    },
    { question: "يتميز صخر البازلت بلون أسود غامق بسبب زيادة نسبة ",
      answers: ["النحاس","السيليكا","الحديد","الصوديوم"],
      correctAnswer: 3
    },
    { question: "المكافئ ذو النسيج الفقاعي لصخر الميكروجرانيت هو صخر ",
      answers: [" الأنديزيت","البازلت"," الأوبيسيديان","البيومس"],
      correctAnswer: 4
    },
    { question: "صخر بلوراته واضحة يتكون من فلسبار رمادي وأوليفين أخضر وبيروكسين أخضر وأمفيبول أسود هو صخر",
      answers: ["البيريدونيت"," الجابرو","الجرانيت","البازلت"],
      correctAnswer: 2
    },
    { question: " صخر الكومانيت فقير بعنصر ",
      answers: ["الحديد","الماغنيسيوم","الكالسيوم","الصوديوم"],
      correctAnswer: 4
    },
     { question: "يتشابه كل من البازلت والرابوليت  في ",
      answers: ["مكان التبلور"," نسبة السيليكا ","درجة حرارة التبلور","نسبة الكالسيوم"],
      correctAnswer: 1
    },
     { question: " صخر ناری يبرد بسرعة على سطح الأرض ويتكون أساسا من بلاجيوكليز وأوليفين وبيروكسين وأمفيبول",
      answers: ["الكومانيت"," الرايولت ","الجابرو","البازلت"],
      correctAnswer: 4
    },
     { question: "العبارة الأدق لتفسير عدم وجود الأوليفين ضمن المكونات المعدنية لصخر الجرانيت هي أن ",
      answers: ["الأوليفين يتبلور عند درجة حرارة منخفضة والجرانيت عند درجة حرارة مرتفعة"," الأوليفين يتبلور عند درجة حرارة مرتفعة والجرانيت عند درجة حرارة منخفضة","  الأوليفين يتبلور ضمن الصخور البركانية فقط والجرانيت صخر ناری جوفی ","الأوليفين والجرانيت يتبلورا عند نفس درجة الحرارة"],
      correctAnswer: 2
    },
    {  question: "الصخور التي تكون الجزر البركانية الموجودة في القشرة المحيطية تتكون عادة من بلورات ",
      answers: ["دقيقة من صهير حمضي غامق اللون","  دقيق من صهير قاعدي غامق اللون"," خشنة من صهير حمضي فاتح اللون","  خشنة من صهير قاعدي فاتح اللون   "],
      correctAnswer: 2
    },
     { question: " صخر الجرانيت فقير جدا بالحديد لأن",
      answers: [" الجرانيت يتبلور في باطن الأرض"," الجرانيت آخر الصخور تبلورا"," الجرانيت صخر قاعدی"," الجرانيت أول الصخور تبلورا"],
      correctAnswer: 2
    },
     { question: "بلورات الكوارتز والبيوتيت والأمفيبول تكونت أساسا نتيجة ",
      answers: ["تفاعلات كيميائية بين العناصر في مياه البحار"," تبريد وتجمد الصهير","ترسيب الرواسب بفعل الثلاجات","تلاحم رواسب البحيرات"],
      correctAnswer: 2
    },
     { question: "الصخر الناتج من اندفاع صهير نسبة السيليكا به 60 ٪ داخل الصخور المحيطة هو صخر",
      answers: ["الدولبرايت","الدايورايت"," الميكرودايورایت","الأنديزيت"],
      correctAnswer: 3
    },
     { question: "عند تبريد اللافا الغنية بالحديد قد يتكون صخر ",
      answers: ["الكوماتيت","الأنديزيت"," البيريدوتيت","الرابوليت"],
      correctAnswer: 1
    },
     { question: "صخر البيومس نسيجه فقاعي بسبب ",
      answers: ["درجة حرارة تبلره","ارتفاع نسبة السيليكا"," وجود الحديد أثناء التبلر","وجود غازات أثناء التبلر"],
      correctAnswer: 4
    },
     { question: "عند تبريد الماجما الغنية بالسيليكا يتكون صخر ",
      answers: ["الكومانيت","البازلت","الجرانيت","الرايوليت"],
      correctAnswer: 3
    },
     { question: "العملية التي تؤدي مباشرة إلى تكوين صخر البيومس هي",
      answers: ["ترسب الفتات المنقول في قاع البحر","تحول الصخور نتيجة التعرض للضغط والحرارة"," تبريد الماجما في باطن الأرض","اندفاع اللاقا أثناء ثورة بركان"],
      correctAnswer: 4
    },
      {question: "الصغر الناري السطحي الذي يتبلور في درجات حرارة أقل من ٧٥٠ م هو",
      answers: ["البيوس ","الانديزيت","الانديزيت"," البيريدوتيت"],
      correctAnswer: 1
    },
     { question: " الصخر الناري المتداخل ذو اللون الوردي الفاتح هو",
      answers: ["الجرانيت","الميكروجرانيت","الرايوليت","الكومانيت"],
      correctAnswer: 2
    },
     { question: "الصخر الناري الجوفي الذي يحتوى على الكوارتز بنسبة ٢٥٪ من تركيبه هو ",
      answers: ["الرايوليت","الدايورايت","الأويسيديان","الجرانيت"],
      correctAnswer: 4
    },
     { question: "يؤدي الاصطدام المفاجئ للماجما بمياه البحر إلى تكون صخر",
      answers: ["الجرانيت","البازلت","الدوليرايت","الدوليرايت"],
      correctAnswer: 2
    },
     { question: "صخر نسیجه بورفيري ونسبة السيليكا به ۷۰٪ هو صخر ",
      answers: ["الدايورايت","الميكروجرانيت","الدوليرايت","الميكرودايورایت"],
      correctAnswer: 2
    },
      {uestion: "المعدن الأكثر وجودا في البيريدوتيت مما يلي هو معدن ",
      answers: ["البيروكسين","الميكا","الأمفيبول","البلاجيوكليز الصودي"],
      correctAnswer: 1
    },
     { question: "عند تبريد اللاقا فإن أول الصخور التالية تكونا هو ",
      answers: ["البازلت","الجرانيت","الأنديزيت","البيريدوتيت"],
      correctAnswer: 1
    },
     { question: "صخر متوسط اللون ومتنوع في حجم البلورات هو",
      answers: ["الدايورايت","الأنديزيت","الميكرودايورایت","الدوليرايت"],
      correctAnswer: 3
    },
     { question: "أكبر نسبة بوتاسيوم توجد في صخور",
      answers: ["الرايوليت والأوبسيديان","الجرانيت والأنديزيت"," الرايوليت والأنديزيت"," الجرانيت والجابرو"],
      correctAnswer: 3
    },
     { question: " الترتيب التنازلي الصحيح للصخور الناتجة من تبلر الصهير تبعا لدرجة حرارة التيلر هو ",
      answers: ["بازلت ثم رايوليت ثم جرانيت","بازلت ثم رايوليت ثم أنديزيت"," بازات ثم أنديزيت ثم رايوليت"," بازلت ثم كوماتيت ثم جابرو"],
      correctAnswer: 3
    },
     { question: "أحد المكونات الأساسية لصخر الكوماتيت مما يلي هو ",
      answers: ["الكوارتز"," الأوليفين","الأمفيبول","البلاجيوكليز"],
      correctAnswer: 2
    },
      {question: "المكافئ للصخر البركاني فوق القاعدي هو صخر",
      answers: ["الدابورايت","الدوليرايت","البيريدوتيت","الكوماتيت"],
      correctAnswer: 3
    },
     { question: "الصخر ذو النسيج البورفيري الذي تصل نسبة السيليكا فيه من ٤٥ : ٥٥% هو صخر",
      answers: ["الدوليرايت","الميكروجرانيت","البازلت","الجابرو"],
      correctAnswer: 1
    },
     { question: "المعدن الذي لا يتواجد في مخاريط البراكين الأنديزيتية مما يلي هو ",
      answers: ["الاوليفين","البيروكسين"," البلاچیوکلیز","الميكا"],
      correctAnswer: 1
    },
     { question: "الصخر البركاني الذي يحتوي على جميع الفصائل المعدنية عدا الأوليفين هو صخر",
      answers: ["البازلت"," الأنديزيت","الرايوليت","الكومانيت"],
      correctAnswer: 2
    },
     { question: "المعدن الذي يدخل في تركيب كل من الجابري والدايورايت والرايوليت من المعادن التالية هو ",
      answers: ["الكوارتز","الأمفيبول","الأوليفين","الأرثوكليز"],
      correctAnswer: 2
    },
     { question: "الصخور النارية التي تتبلور معانتها عند أعلى درجات حرارة من الصخور التالية هي الصخور",
      answers: ["الجوفية الحامضية","السطحية المتوسطة"," الجوفية القاعدية","السطحية فوق القاعدية"],
      correctAnswer: 4
    },
     { question: " لدينا عينة يدوية لصخر الدوليرايت، أي العبارات التالية تتناسب مع العينة ؟",
      answers: ["تحتوى على بلورات كبيرة الحجم بسبب التبريد البطىء للماجما"," تحتوى على بلورات كبيرة وأخرى صغيرة، نسبة السيليكا 60%","تحتوى على بلورات كبيرة وأخرى صغيرة، نسبة السيليكا 50%","تحتوى على بلورات كبيرة الحجم بسبب التبريد السريع للماجما "],
      correctAnswer: 3
    },
     { question: "البيوتيت والمسكوفيت من معادن الميكا ويختلفا في التركيب الكيميائي، مقارنة بالماجما التي يتكون منها",
      answers: ["معدن البيوتيت فإن الماجسا التي يتكون منها معدن المسكوفيت تكون غالبا"," أكثر قاعدية وأقل كثافة"," أكثر حامضية وأقل كثافة","أكثر قاعدية وأكثر كثافة"," أكثر حامضية وأكثر كثافة"],
      correctAnswer: 2
    },
     { question: "الصخـر النـاري الخشـن الـذي يتكون تقريبا من 60% بيروكسين، 25% بلاچیوکلین، 10% أوليفين و 5% أمفيبول هو ",
      answers: ["الكومانيت"," البيريدونيت","الجابرو","البازلت"],
      correctAnswer: 3
    },
     { question: "العبارة الأدق للتعبير عن وجه التشابه والاختلاف بين الدايورايت والأنديزيت هي أنهما",
      answers: ["يتشابهان في التركيب المعدني ويختلفان في نسبة السيليكا","يتشابهان في التركيب المعدني ويختلفان في النسيج","  يتشابهان في نسبة السيليكا ويختلفان في التركيب المعدني"," يتشابهان في النسيج ويختلفان في التركيب المعدني"],
      correctAnswer: 2
    },
     { question: " التواء الصخور لأعلى قد ينتج عن ",
      answers: ["القبة العادية"," القبة المقلوبة"," العروق القاطعة"," الجدد الموازية"],
      correctAnswer: 1
    },
     { question: "قد تكون الصخور النارية طية تحت تأثير ",
      answers: ["الباثوليت","الجدد","اللوبوليث"," الطفوح البركانية"],
      correctAnswer: 3
    },
     { question: "يتسبب اللاكوليت في تكوين",
      answers: ["فالق ذو حركة أفقية","فالق تتكرر فيه الطبقات رأسيا","طية أقدم طبقاتها عند المركز ","طية أحدث طبقاتها عند المركز"],
      correctAnswer: 3
    },
      {uestion: "التركيب الناري الذي يمتد حوالی ۲۰۰ کم تحت سطح الأرض يعرف بـ ",
      answers: ["اللاكوليث","اللوبوليث","الباثوليث"," الطفوح البركانية"],
      correctAnswer: 3
    },
     { question: "يؤدى تصلب اللاقا المكونة لجبال فوق سطح الأرض إلى تكون الصخور النارية ",
      answers: ["المتداخلة"," الجوفية","خشنة التبلور"," زجاجية النسيج"],
      correctAnswer: 4
    },
     { question: " الصهارة التي تكون تراكيب تكتونية عند تبلورها تعرف بـ ",
      answers: ["الجدد","العروق","القباب","الباثوليث"],
      correctAnswer: 3
    },
     { question: "تعتبر الجدد الموازية من نواتج ",
      answers: [" تصلب الطفوح","اللاقا","تداخل الصهير","تكسير أعناق البراكين"],
      correctAnswer: 3
    },
     { question: "الماجما (أ) عالية اللزوجة والماجما (ب) قليلة اللزوجة يكون شكلهما بعد التصلد وتأثيرهما على الصخور المحيطة على الترتيب هـو ",
      answers: ["قبة عادية مع طية مقعرة وقبة مقلوبة مع طية محدبة"," قبة مقلوبة مع طية مقعرة وقبة عادية مع طية محدبة","قبة عادية مع طية محدبة وقبة مقلوبة مع طية مقعرة"," قبة مقلوبة مع طية محدبة وقبة عادية مع طية مقعرة"],
      correctAnswer: 3
    },
     { question: "الترتيب الصحيح الصخور الناتجة عن تبلر الجدد تدريجيا مكونة صخور نسيجها بورفيري هو ",
      answers: ["دولیرایت - بازلت ــ جابرو","دولیرایت ــ میكر وجرانيت ـ میکرودایورایت"," دولیرایت ــ میکرودايورایت - ميكروجرانيت","دولبرايت ــــــ بازلت ـــــ جراثیت"],
      correctAnswer: 3
    },
     { question: "عند تصلد اللافا على سطح الأرض تأخذ أشكال ",
      answers: ["فواصل وطيات","لاکولیث ولوبوليث","جدد وعروق","حبال ووسائد"],
      correctAnswer: 4
    },
     { question: "الحطام الصخري المدبب الذي ينتج من عنق البراكين يسمى ",
      answers: [" البريشيا البركانية"," اللافا المتصلدة"," المقذوفات البركانية","الرماد البركاني"],
      correctAnswer: 1
    },
     { question: "يتصاعد الرماد البركاني من فوهات البراكين ويتطاير منتشرا في الجو حتى يسقط مكونا",
      answers: ["جزر بركانية"," تربة خصبة"," جبال بركانية","صخور متحولة"],
      correctAnswer: 2
    },
     { question: "نسيج صخور المخروط البركاني قد يكون",
      answers: ["بورفیری","زجاجي","خشن","متوسط"],
      correctAnswer: 2
    },
     { question: " الرماد البركاني من أشكال الصخور النارية ",
      answers: [" تحت السطحية","الجوفية","السطحية"," المتداخلة"],
      correctAnswer: 3
    },
     { question: "ثورة بركان بحرى لفترة طويلة ثم يخمد يؤدي لتكوين",
      answers: ["بحيرة بركانية"," جزيرة بركانية","جدد","لاکولیث"],
      correctAnswer: 2
    },
     { question: "تظهر بعض المناطق الأرضية محاطة بمياه البحار نتيجة",
      answers: ["ترسیب مياه البحار لحمولتها","ثوران البركان أسفل البحار","مخلفات السفن في البحار","الصرف الصناعي في البحار"],
      correctAnswer: 2
    },
     { question: "أي العبارات التالية تعد السبب الأرجح لحدوث الثورات البركانية ؟",
      answers: ["التغيرات المناخية"," حفر آبار النفط","ضغط الغازات في الأسينوسفير"," انصهار اللب الخارجي"],
      correctAnswer: 3
    },
    {  question: " أهم فرق بين صخور البريشيا وصخور الكونجلوميرات هو ",
      answers: ["حجم الحبيبات"," شكل الحبيبات","الصلابة","مكان التواجد"],
      correctAnswer: 2
    },
     { question: "معظم الحجر الرملي الموجود في أسوان تكون",
      answers: ["داخل الأرض حيث درجة الحرارة تزيد عن درجة حرارة انصهار الكوارتز"," على سطح الأرض من تبريد اللاقا"," في الصحراء من حبيبات الرمل المترسبة والتي دفنت ثم تلاصقت الحبيبات معا بمواد معدنية","في الجبال حيث تسبب التحول بالضغط والحرارة في تلاحم بلورات الكوارتز معا"],
      correctAnswer: 3
    },
      {question: "غالبية الصخور الرسوبية تتكون من ",
      answers: ["زلط ورمل وطين","جير ورمل وطين","زلط وجير وجبس","طين وجبس وزلط"],
      correctAnswer: 2
    },
      {question: "يتوقع أن يكون الرمل الناعم قطر حبيباته حوالي ",
      answers: ["500 میکرون","100 میکرون","1.5 امم","2.5 مم"],
      correctAnswer: 2
    },
     { question: "الفتات الصخري الذي يقع فوق سطح عدم التوافق مباشرة يكون قطر حبيباته ",
      answers: ["أكبر من 2 مم"," يتراوح بين 2 مم و 62 ميكرون","يتراوح بين 62 ميكرون و4 ميكرون","أقل من 4 ميكرون"],
      correctAnswer: 1
    },
     { question: "الصخر الرسوبي الذي يظهر به التورق هو ",
      answers: [" الشيست الميكائي"," الصخر الطيني"," الطفل النفطي","الطفل"],
      correctAnswer: 4
    },
     { question: "الصخر الرسوبي المستخدم في الزينة هو صخر ",
      answers: ["الكونجلوميرات","الرخام","الجرانيت","البريشيا"],
      correctAnswer: 4
    },
     { question: "تتكون الصخور المكونة للصواعد والهوابط من معدن ",
      answers: ["الجبس","الانهيدريت","الكالسيت","الكوارتز"],
      correctAnswer: 3
    },
     { question: "أي الصخور التالية غير رسوبي ؟",
      answers: ["البريشيا","الدولومیت","الصوان"," الدوليرايت"],
      correctAnswer: 4
    },
     { question: "المعدن الذي لا يمكن وجوده في الصخور النارية هو معدن ",
      answers: ["الكالسيت","الأرثوكليز","الأوليفين","الكوارتز"],
      correctAnswer: 1
    },
     { question: "الصخر الرسوبي الذي تكون نتيجة عمليات كيميائية هو صخر ",
      answers: ["الجرانيت","الطفل","البريشيا"," الحجر الجيري"],
      correctAnswer: 4
    },
     { question: "العملية التي تؤدى إلى تكوين رواسب سميكة من الملح الصخري في بعض المناطق هي",
      answers: ["الانصهار","السيول","التكات","البخر"],
      correctAnswer: 4
    },
     { question: "قد يتواجد البترول في صخور",
      answers: ["الحجر الجيري","البازلت","الجرانيت","الجابرو"],
      correctAnswer: 1
    },
     { question: "أي الصخور الآتية تعتبر مصايد للبترول ؟",
      answers: ["الطفل والحجر الجيري"," الزلط والطين"," الرمل والطين","الرمل والحجر الجيري"],
      correctAnswer: 4
    },
     { question: "بعض الصخور غير الرسوبية تتكون نتيجة ",
      answers: ["تصلب المواد المنصهرة","التبخير والترسيب","تماسك الحبيبات","ترسيب الحبيبات"],
      correctAnswer: 1
    },
    {  question: "صخر يتواجد به اکثر عنصرين شيوعا في القشرة الأرضية هو ",
      answers: [" الحجر الجيري"," الحجر الرملي","الأنهيدريت","الدولوميت"],
      correctAnswer: 2
    },
     { question: "المعدن الذي قد ينتج من تبريد الصهارة ويدخل أيضا في تكوين صخر رسوبي هو معدن ",
      answers: ["الكوارتز","الكالسيت","الجبس","الهالیت"],
      correctAnswer: 1
    },
      {question: " الصخـر الـذي ينتمى لمجموعة الكربونات والذي يتكون نتيجة تبخر مياه البحر هو ",
      answers: ["الحجر الجيري","الانهيدريت","الجبس","الملح الصخري"],
      correctAnswer: 1
    },
      {question: "يمكن الاستدلال على وجود بيئة بحرية شديدة الحرارة عند العثور على رواسـب مـن",
      answers: ["الطفل","الأنهيدريت","القحم","البريشيا"],
      correctAnswer: 2
    },
     { question: "ترجع قدرة الحجر الرملي على تخزين البترول والغاز الطبيعي والمياه الجوفية إلى كونه صخر",
      answers: ["رسویی","فتاتی","مسامي","غنى بالكوارتز"],
      correctAnswer: 3
    },
     { question: "الصخر الرسوبي الذي قد يصاحب الفوالق مما يلي هو صخر ",
      answers: ["الفوسفات ","البريشيا"," الملح الصخري"," الكونجلوميرات"],
      correctAnswer: 2
    },
     { question: "تتحول المواد الهيدروكربونية من أصل بحري في الطين للحالة السائلة عند درجة حرارة حوالي",
      answers: ["50م","80 م","500م","2000م"],
      correctAnswer: 2
    },
     { question: "المعدن المتكون من تفاعل أيوني بين الكلور والصوديوم يكون صخر يتبع صخور",
      answers: ["الكربونات"," السيليكات","المتبخرات"," خامات الحديد"],
      correctAnswer: 3
    },
      {question: " العبارة الأفضل والتي تدعم الاستنتاج أن معظم سطح الأرض الظاهر حاليا كان يوما مغطى تماما بالماء هي أن ",
      answers: [" الشعاب المرجانية التي تكونت في الماضي توجد على حواف الكثير من القارات ","الثورات البركانية تحتوى كمية كبيرة من بخار الماء"," اتساع قاع البحار أدى إلى سحب كتل اليابس بعيدا ثم دفعهم في اتجاه البعض"," الصخور الرسوبية ذات الأصل البحري تغطى مناطق شاسعة من القارات"],
      correctAnswer: 4
    },
     { question: " تكونت معظم صخور الجبس نتيجة ",
      answers: [" تسخين صخور سبق تعرضها لعملية التحول"," تبريد وتصخر اللافا "," تضاغط وتلاحم بقايا أصداف وهياكل حيوانات بحرية"," ترسيب كيميائي للمعادن من مياه البحر"],
      correctAnswer: 4
    },
     { question: "نسيج صخر الرخام يكون ",
      answers: ["متورق","زجاجی","حبیبی","رقيق"],
      correctAnswer: 3
    },
     { question: "عند ملامسة الماجما للرمل يتكون صخر ",
      answers: ["الرخام","الحجر الرملي","الكوارتزايت","النيس"],
      correctAnswer: 3
    },
     { question: "الصخر الذي يحتوي على حفريات كاملة مما يلي هو ",
      answers: ["الرخام","البازلت","الجرانيت","الطفل"],
      correctAnswer: 4
    },
    {  question: "الصخور التي يمكن أن تتواجد بها حفريات واضحة هي ",
      answers: ["النارية الحمضية","النارية القاعدية","  الرسوبية الفتاتية"," المتحولة الكتلية"],
      correctAnswer: 3
    },
     { question: " الصخر الذي يختلف في التصنيف عن باقي الصخور مما يلي هو ",
      answers: ["الجبس","الحجر الرملي","الرخام"," الحجر الجيري"],
      correctAnswer: 3
    },
     { question: "الصخر الذي تتوقع أن يتواجد به حفريات مما يلي هو ",
      answers: ["الجرانيت","الطفل"," الأوبسيديان","النيس"],
      correctAnswer: 2
    },
   
     { question: "الصخر الذي تكون نتيجة التحول بالضغط والحرارة هو صخر ",
      answers: ["الاردواز","الرخام","الطفل"," الكوارتزايت"],
      correctAnswer: 1
    },
   
     { question: " الصخر المختلف في الصخور الآتية من حيث عامل التحول هو صخر",
      answers: ["الرخام"," الإردواز","النيس","الشيست"],
      correctAnswer: 1
    },
   
     { question: "عندما تضغط الماجما المكونة للاكوليت على الجرانيت يتكون ",
      answers: ["مصهور الجرانيت","النيس"," الميكا والفلسبار والكوارتز"," الشيست الميكاني"],
      correctAnswer: 2
    },
   
     { question: " يختلف النيس عن الشيست في",
      answers: [" أسباب التحول"," ظروف التحول"," طريقة ترتيب البلورات"," نسيج الصخر"],
      correctAnswer: 3
    },
   
     { question: " عند تعرض صخر رسویی قطر حبيباته (1 مم) لحرارة شديدة جدا يتكون صخر",
      answers: ["الرخام","الكوارتزايت","الإردواز","النيس"],
      correctAnswer: 2
    },
   
     { question: "الصخر الذي يحتوى على نسبة كبيرة من معدن الأرثوكليز من الصخور الآتية هو صخر",
      answers: ["الإردواز","الرخام","النيس","الشيست"],
      correctAnswer: 3
    },
   
     { question: " أي مما يلى يظل دون تغير أثناء تحول الصخر ؟",
      answers: ["النسيج"," نوع المعادن"," ترتيب المعادن","التركيب الكيميائي"],
      correctAnswer: 4
    },
   
     { question: "وجود المادة اللاحمة في الصخر يدل على أنه صخر ",
      answers: ["ناری برکانی","رسوبی فتانی"," ناری جوفی","متحول متورق"],
      correctAnswer: 2
    },
   
     { question: "الصخر الذي يحتوي على الميكا بنسبة أكبر من الصخور التالية هو ",
      answers: ["البازلت"," الحجر الجيري","الشيست","الحجر الرملي"],
      correctAnswer: 3
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