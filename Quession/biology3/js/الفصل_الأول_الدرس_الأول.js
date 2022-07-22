(function() {
  "use strict";

  let questions = [
    {
      question: "العامل الأساسي لاستقامة ساق نبات النعناع بعد عملية الري هو وجود .........",
      answers: ["الفجوات العصارية","الأنوية","الجدر الخلوية","الميتوكوندريا"],
      correctAnswer: 3
    },
    {
      question: " يرجع انتفاع خلايا النبات عند الري بالماء إلى",
      answers: ["دخول الماء إليها بالخاصية الاسموزي"," خروج السكر منها بخاصية الانتشار"," دخول الماء إليها بخاصية الانتشار"," خروج السكر منها بالخاصية الأسموزية"],
      correctAnswer: 3
    },
    {
      question: " أي الخلايا التالية تكتسب دعامة فسيولوجية عند ري النبات ؟",
      answers: ["الأنابيب الغربالية"," أوعية الخشب"," الخلايا الحجرية","الخلايا البارانشيمية"],
      correctAnswer: 3
    },
    {
      question: " توتر جدي خلايا النبات دليل على ",
      answers: ["اكتساب النبات الدعامة الفسيولوجية"," فقد النبات الدعامة الفسيولوجية"," اكتساب النبات الدعامة التركيبية","فقد النبات الدعامة التركيبية"],
      correctAnswer: 3
    },
    {
      question: "تم نقل أحد أنواع الطحالب من بيئة مياه عذبة إلى بيئة مياه مالحة، فما التغير الذي يحدث في خلايا الطحلب ؟",
      answers: ["تنتفخ خلايا الطحلب","يتمدد الغشاء البلازمي"," يتحرك الغشاء البلازمي للداخل","يحدث أي تغير"],
      correctAnswer: 3
    },
    {
      question: "  ينشأ ضغط الامتلاء في الخلية النباتية بالتأثير الأساسي ل",
      answers: ["الجدار الخلوي","العشاء البلازمي "," الفجوة العصارية","السيتوبلازم"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلي تتاثر به الدعامة الفسيولوجية بشكل مباشر ؟",
      answers: ["عملية النتح فقط"," عملية الامتصاص فقط"," عمليتي النتح والامتصاص"," عمليتي النقل النشط والنتح"],
      correctAnswer: 3
    },
    {
      question: "    في إحدى التجارب العملية تم استخدام ثلاث قطع متساوية الأبعاد من الجزر، حيث تم غلى القطعة الأولى في الماء، ووضعت   القطعة الثانية في ماء مقطر، أما القطعة الثالثة فوضعت في محلول سکری مرکزأي من هذه القطع فقدت الدعامة الفسيولوجية ؟ ",
      answers: ["الأولى فقط","الثالثة فقط"," الأولى والثانية"," الثانية والثالثة"],
      correctAnswer: 3
    },
    {
      question: "  هل تلعب البلاستيدات الخضراء دورا في إكساب الطحلب دعامة فسيولوجية ؟",
      answers: ["نعم، لأن البلاستيدات الخضراء ينتج عنها سكريات بسيطة"," نعم، لأن البلاستيدات الخضراء تمتص الماء اللازم لعملية البناء الضوئي","لا، لأن البلاستيدات الخضراء لا تغير في أسموزية الخلية","لاء لأن البلاستيدات الخضراء لا تؤثر في حجم الفجوات العصارية"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلى يصاحب اكتساب الخلية النباتية دعامة فسيولوجية ؟",
      answers: ["صغر حجم الفجوة العصارية"," نقص كمية المحلول داخل الفجوة العصارية","نقص تركيز المحلول داخل الفجوة العصارية","زيادة تركيز المحلول داخل الفجوة العصارية"],
      correctAnswer: 3
    },
    {
      question: " ا مدى صحة العبارتين التاليتين، تحتوى معظم الخلايا النباتية الحية الناضجة على فجوات عصارية    كبيرة الحجم ، هذه الفجوات تساعد الخلايا على امتصاص الماء بالانتشار  ",
      answers: ["العباراتان صحيحتان وبينهم علاقة","العبارتان صحيحتان وليس بينهما علاقه ","العبارة الأولى صحيحة والعبارة الثانية خطأ"," العبارة الأولى خطأ والعبارة الثانية صحيحة"],
      correctAnswer: 3
    },
    {
      question: "  ما سبب عدم انتقال الماء إلى داخل الخلايا الإسكلر نشيمية بالخاصية الاسموزية ",
      answers: [" وجود الكيوتين"," غياب البروتوبلازم"," وجود السليلوز","وجود اللجنين"],
      correctAnswer: 3
    },
    {
      question: "  إذا حدث ترسيب لمادة الكيوتين على بشرة المجموع الجذري لنبات ما ماذا تتوقع أن يحدث لهذا النبات",
      answers: ["تفقد خلاياه الدعامة التركيبية","تكتسب خلاياه الدعامة الفسيولوجية"," لا يمتص النبات الماء فتفقد خلاياه الدعامة الفسيولوجية"," يمتص النبات الماء فتكتسب خلاياه دعامة فسيولوجية وتركيبية"],
      correctAnswer: 3
    },
    {
      question: " ما المادة التي تغطى بشرة سيقان وأوراق نبات القول ؟",
      answers: ["السيوبرين","اللجنين","الكيوتين","السليلوز"],
      correctAnswer: 3
    },
    {
      question: " تزداد قوة جدر الخلايا النباتية نتيجة ترسيب ",
      answers: ["الكيوتين فقط","السليلوز فقط"," السيوبرين فقط"," السليلوز واللجنين"],
      correctAnswer: 3
    },
    {
      question: "أي من البوليمرات التالية يتواجد في النسيج الوعائي للنبات ويوفر له المزيد من الدعامة التركيبية ؟",
      answers: ["اللجنين","الكيوتين","السليلوز","الكيراتين"],
      correctAnswer: 3
    },
    {
      question: "  أي البدائل التالية لا يتفق مع بقية البدائل بالنسبة لحدوث الدعامة في النبات ؟",
      answers: ["السليلوز","الكيتين","اللحنين","السيويرين"],
      correctAnswer: 3
    },
    {
      question: "  في أي الحالات التالية تكون فيها الدعامة لفسيولوجية وتركيبية معا ؟",
      answers: ["ترسيب الجنين على جدر الخلايا الحجرية لثمرة الكمثرى"," انتفاخ بذور نبات الفول الجافة عند وضعها في الماء","استقامة نبات النعناع بعد ريه بالماء","ترسيب الكيوتين على جدر خلايا بشرة التين الشوكي"],
      correctAnswer: 3
    },
    {
      question: " أي المواد التالية وجودها في جدر خلايا النبات يزيد من مرونتها وصلابتها ولكن لا يمنع نفاذ الماء ؟",
      answers: ["الكيوتين","السيوبرين","اللجنين"," السليلوز"],
      correctAnswer: 3
    },
    {
      question: "   أي مما يلي يعمل على الحفاظ على الأنسجة الداخلية لنبات الصنوبر ؟",
      answers: [" السليلوز واللجنين"," الكيوتين والسليلوز","الكيوتين والسيوبرين","اللجنين والسيوبرين"],
      correctAnswer: 3
    },
    {
      question: " تحافظ ثمار البرقوق على محتواها من الماء لاحتواء الطبقة الخارجية لها على مادة .",
      answers: ["السوبرين","السليلوز","الكيوتين","اللجنين"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلي يمثل الدور الأساسي للكيوتين والسيويرين في النباتات ؟",
      answers: ["توفير الدعامة للأنسجة الوعائية","الحفاظ على شكل الجدران الخلوية"," العمل كحواجز غير منفذة للماء"," تحديد المواد التي تدخل الخلايا النباتية أو تخرج منها"],
      correctAnswer: 3
    },
    {
      question: "  أكبر الفقرات القطنية حجما في الفقرة رقم ",
      answers: ["21","22","23","24"],
      correctAnswer: 3
    },
    {
      question: "حجم الفقرة رقم (20) بالنسبة لحجم الفقرة رقم (19) من فقرات العمود الفقري للإنسان يكون",
      answers: [" أصغر منها"," مساو لها"," أكبر منها قليلا"," أكبر منها كثيرا"],
      correctAnswer: 3
    },
    {
      question: " الفقرة المنصفة للعمود الفقري توجد في المنطقة",
      answers: ["العنقية","الظهرية"," القطنية","العجزية"],
      correctAnswer: 3
    },
    {
      question: " كم عدد عظام العمود الفقري في الإنسان ؟",
      answers: ["24","26","28","33"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلي صحيح بالنسبة لآخر مجموعتين من فقرات العمود الفقرى ؟",
      answers: ["تتشابهان في عدد العظام"," تتشابهان في عدد الفقرات"," تتصلان بالحرقفتين","ذات أحجام متساوية"],
      correctAnswer: 3
    },
    {
      question: " ماذا تمثل الفقرة رقم (27) من العمود الفقري ؟",
      answers: ["القطنية الثانية"," العجزية الثالثة","العصعصية الرابعة","العجزية الثانية"],
      correctAnswer: 3
    },
    {
      question: " الفقرة رقم (18) تتبع الفقرات ",
      answers: ["القطنية","العصعصية","العجزية","الصدرية"],
      correctAnswer: 3
    },
    {
      question: " فیم تشابه الفقرات الصدرية مع الفقرات القطنية ؟",
      answers: ["العدد","الحجم"," اتجاه الانحناء"," عدد النتوءات في الفقرة"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلي يمثل اتجاه انحناء مجموعات الفقرات العنقية والصدرية والقطنية على الترتيب ؟",
      answers: ["للأمام / للخلف / للأمام"," للخلف / للأمام / للأمام","للأمام / للأمام / الخلف","  الخلف / للخلف / للأمام"],
      correctAnswer: 3
    },
    {
      question: "   بتصل زوج الضلوع رقم (5) بالفقرة رقم",
      answers: ["12","13","14","15"],
      correctAnswer: 3
    },
    {
      question: " ما رقم الفقرة التي تتصل بالزوج العاشر الضلوع ",
      answers: ["15","16","17","18"],
      correctAnswer: 3
    },
    {
      question: " الفقرة المنصفة للفقرات العنقية في الفقرة رقم",
      answers: ["3","4","5","7"],
      correctAnswer: 3
    },
    {
      question: " أثناء ممارسة رياضة رفع الأثقال يرتكز الجزء العلوي من الجسم على الفقرات ",
      answers: ["القطنية","العنقية","العصعصية","الصدرية"],
      correctAnswer: 3
    },
    {
      question: " الفقرة التي تنصف العمود الفقري عدديا هي الفقرة التي .",
      answers: ["تسبق الفقرة المتصلة بزوج الضلوع العائم الثاني"," تلي الفقرة المتصلة بزوج الضلوع العالم الثاني","  تسبق الفقرة المتصلة بروج الضلوع العائم الأول","تلي الفقرة المتصلة بزوج الضلوع العائم الأول"],
      correctAnswer: 3
    },
    {
      question: "   كم عدد النتوءات المزدوجة في الفقرة العظمية الصدرية ؟",
      answers: ["2","3","6","7"],
      correctAnswer: 3
    },
    {
      question: " كم عدد عظام الجمجمة وملحقاتها في إنسان بالغ ",
      answers: ["22","29","33","48"],
      correctAnswer: 3
    },
    {
      question: " فيم تتشابة الفقرات العنقية مع الفقرات القطنية ؟",
      answers: ["الشكل","الحجم","التنفصل","العدد"],
      correctAnswer: 3
    },
    {
      question: " أي من البدائل التالية تمثل فقرتين تختلفان في الشكل العام ",
      answers: ["1,2","6,7","18,19","20,21"],
      correctAnswer: 3
    },
    {
      question: " ما النسبة بين عدد الفقرات المتمفصلة إلى عدد الفقرات الملتحمة ؟",
      answers: ["3:8","9:7","8:3","3:5"],
      correctAnswer: 3
    },
    {
      question: " كم عدد الفقرات المتمفصلة في منطقة جذع الإنسان ؟",
      answers: ["24","17","12","5"],
      correctAnswer: 3
    },
    {
      question: " يمكن رؤية الثقب الكبير للجمجمة من خلال منظر الجمجمة",
      answers: ["الجانبي","الأمامي","الخلفي","السفلى"],
      correctAnswer: 3
    },
    {
      question: "  كم عدد عظام الهيكل المحوري ؟ ",
      answers: ["80","126","153","51"],
      correctAnswer: 3
    },
    {
      question: " ما عدد عظام طرف علوى واحد في الإنسان ؟",
      answers: ["15","20","25","30"],
      correctAnswer: 3
    },
    {
      question: " ما عدد عظام قدم الإنسان في طرف واحد ؟",
      answers: ["12","17","26","27"],
      correctAnswer: 3
    },
    {
      question: " أي الأجزاء التالية يختلف تناظرها عدديا بين الطرف العلوى والطرف السفلي ؟",
      answers: ["الساعد والساق","رسغ اليد ورسغ القدم","راحة اليد ومشط القدم","  سلاميات اليد وسلاميات القدم"],
      correctAnswer: 3
    },
    {
      question: " فيم تتشابه عظام رسغ اليد مع عظام رسغ القدم ؟",
      answers: ["العدد","التركيب","الشكل","الحجم"],
      correctAnswer: 3
    },
    {
      question: " أي الترتيبات التالية صحيح للعظام حسب أطوالها من الأطول إلى الاقصر ؟",
      answers: ["العضد - الفخذ - الزند"," الزيد – الفخد - العضد"," الفخذ - العضد - الزند","الزند - العضد - الفخذ "],
      correctAnswer: 3
    },
    {
      question: " إذا كان عدد عظام الطرف العلوى يساوى (س)، فكم عدد عظام الطرف السفلي ؟",
      answers: ["س","س + ١","س - ١","س + ٢"],
      correctAnswer: 3
    },
    {
      question: "قيم تختلف عظام راحة اليد عن عظام مشط القدم ؟",
      answers:["عدد العظام"," طول العظام"," تركب العظام"," نوع الهيكل التي تنتمى إليه"],
      correctAnswer: 3
    },
    {
      question: " كم عدد تجاويف الهيكل الطرفي ؟",
      answers: ["2","4","6","8"],
      correctAnswer: 3
    },
    {
      question: " كم عدد عظام القفص الصدري والحزام الصدري",
      answers: ["25","29","37","41"],
      correctAnswer: 3
    },
    {
      question: " في الوضع التشريحي لعظام الطرف العلوي للإنسان، أي مما يلي صحيح ؟",
      answers: ["عظمة الكعبرة أعلى عظمة الزند","عظمة الكعبرة أسفل عظمة الزند"," عظمة الكعبرة في وضع خارجي بالنسبة لعظمة الزند"," عظمة الكعبرة في وضع داخلي بالنسبة لعظمة الزند"],
      correctAnswer: 3
    },
    {
      question: " يوجد ما يزيد عن نصف عدد عظام الجسم في ",
      answers: ["الأحزمة والضلوع","الطرفين العلويين والطرفين السفليين","العمود الفقري والضلوع"," العمود الفقرى والأحزمة"],
      correctAnswer: 3
    },
    {
      question: "  ما أطول وأثقل عظمة في الجسم ؟",
      answers: ["العضد","الفخر","القصبة","العصعص"],
      correctAnswer: 3
    },
    {
      question: "  أي مما يأتي يتكون من أقل عدد من العظام ؟",
      answers: ["رسغ القدم","الساعد","الحزام الصدري"," الجمجمة"],
      correctAnswer: 3
    },
    {
      question: " كم عدد عظام الهيكل الطرفي التي تتصل بالهيكل المحوري ؟",
      answers: ["4","6","8","10"],
      correctAnswer: 3
    },
    {
      question: " أي العظام التالية ليست من العظام المسطحة ؟",
      answers: ["الحرقفة","القص","القصبة","لوح الكتف"],
      correctAnswer: 3
    },
    {
      question: " كم عدد عظام الهيكل الطرفي ",
      answers: ["80","126","206","300"],
      correctAnswer: 3
    },
    {
      question: " مما يتكون مفصل الكتف ",
      answers: ["عظمه العضد وعظمتي لوح الكتفوالترقوه","عظمه العضد وعظمتي الزندوالكعبره","عظمه العضدوعظمه الترقوه فقط","عظمه العضد وعظمه لوح الكتف فقط"],
      correctAnswer: 3
    },
    {
      question: " لماذا يشعر مرضى خشونة المفاصل بالم عند الحركة والمشي ؟",
      answers: ["لزيادة السائل الزلالي في هذه المفاصل ","لتأكل المادة الغضروفية في المفصل"," لتمزق الأربطة التي تربط عظام المفصل","لالتهاب الأوتار عند المفاصل"],
      correctAnswer: 3
    },
    {
      question: "   ما مدى صحة العبارتين التاليتين، مفصل الفخذ أكثر تثبيتا من مفصل الكتف، لأن التجويف الحقى أكثرعمقا من التجويف الأروح ؟ ",
      answers: ["العبارتان صحيحتان وبينهما علاقة","العبارتان صحیحتان وليس بينهما علاقة","العبارتان صحیحتان وليس بينهما علاقة"," العبارة الأولى صحيحة والعبارة الثانية خطأ","  العبارة الأولى خطأ والعبارة الثانية صحيحة"],
      correctAnswer: 3
    },
 ,
    {
      question: " تتمفصل الفقرة العظمية رقم (17) مع الفقرة العظمية رقم (18) عن طريق اتصال .",
      answers: ["النتوءين المفصليين الأماميين للفقرة رقم (17) بالنتوءين المفصليين الخلفيين للفقرة رقم (18)","النتوءين المفصليين الخلفيين للفقرة رقم (17) بالنتوءين المفصليين الأماميين للفقرة رقم (18)"," النتوءين المفصليين الأماميين لكل من الفقرتين رقمی (17) ، (18)"," النتوءين المفصليين الخلفيين لكل من الفقرتين رقمی (17) ، (18)"],
      correctAnswer: 3
    },
    {
      question: " من الفقرات التي لا توجد بينها مفاصل غضروفية",
      answers: ["3 , 4","16 , 17","24 , 25","26 , 27"],
      correctAnswer: 3
    },
    {
      question: "يتطلب اتصال ثلاث فقرات قطنية مع بعضها تمفصل ",
      answers: ["4 نتوءات","8 نتوءات","12 نتوء","16 نتوء"],
      correctAnswer: 3
    },
    {
      question: "أي العظام التالية تبدأ بمفصل زلالي واسع الحركة وتنتهى بمفصل زلالی محدود الحركة ؟",
      answers: ["القصبة","العضد","الكعبرة","الزند"],
      correctAnswer: 3
    },
    {
      question: "  كم عدد الأربطة الذي يصل بين عظمة الفخذ وعظمة القصبة ؟",
      answers: ["1","2","3","4"],
      correctAnswer: 3
    },
    {
      question: " كم عدد الأربطة الذي يصل عظمة الفخذ بعظمة الشظية",
      answers: ["1","2","3","4"],
      correctAnswer: 3
    },
    {
      question: "ما سبب قدرة لاعبي الجمباز على أداء الحركات في اتجاهات مختلفة ؟",
      answers: ["زيادة مرونة العضلات"," زيادة مرونة الأربطة"," زيادة مرونة الأوتار"," زيادة السائل الزلالي في المفاصل"],
      correctAnswer: 3
    },
    {
      question: " تتشابه الأوتار مع الأربطة في كل مما يلي ماعدا أنها",
      answers: [" قوية ومتينة","تتكون من نسيج ضام","علي درجه عاليه من المرونه"," تتصل بالعظام"],
      correctAnswer: 3
    },
    {
      question: "  أي مما يلى يمثل أداة اتصال بين الجهاز الهيكلي والجهاز العضلي ؟ ",
      answers: ["الأوتار فقط","الغضاريف فقط","الأوتار والأربطة","  الأربطة والغضاريف"],
      correctAnswer: 3
    },
  

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