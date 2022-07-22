(function() {
  "use strict";

  let questions = [
    {
      question: " أي مما يلي صحيح بالنسبة لاستجابة النبات المؤثرات التي شب حدوث الانتحاء ؟",
      answers: ["يتأثر النبات ولا ينمو مطلقاً", " لا يتأثر النبات وينمو بصورة طبيعية", " يتاثر النبات وينمو في اتجاه معي", "يتاثر النبات وينمو أسرع من المعدل الطبيعي"],
      correctAnswer: 3
  },
  {
      question: "أي مما يلي لا ينطبق في الأوكات ؟",
      answers: ["مواد كيميائية تكون في خلايا البراعم", "تنتقل من منطقة الاستجابة إلى منطقة الاستقبال ", "تسبب ذبول أوراق بعض النباتات", "تأثيرها يختلف باختلاف أجزاء النبات"],
      correctAnswer: 3
  },
  {
      question: " أي مما يلي من العوامل الخارجية التي تؤثر على عملية الإزهار في النبات ؟",
      answers: ["عمر النبات عبر", " تغيرات درجة الحرارة ", " الهرمونات النباتية ", "المعلومات الوراثية النبات"],
      correctAnswer: 3
  },
  {
      question: "  أي مما يلي من خصائص الأوكسينات ؟",
      answers: [" مواد غير عضوية", "مواد مثبطة أحيانا", "مواد مثبطة دائما", "مواد بروتينية دائما"],
      correctAnswer: 3
  },
  {
      question: " فيم تتفق الإنزيمات مع الهرمونات ؟",
      answers: ["آنها مواد بروتينية", " آنها مواد تفرز من عدد صماء", "  أنها مواد عضوية ", "أنها مواد تذوب في بلازما الدم"],
      correctAnswer: 3
  },
  {
      question: "  قيم تشترك الهرمونات الستيرويدية مع الببتيدية ؟",
      answers: ["النقل عبر مجرى الدم ", "الوحدات الأساسية المكونة لكل منهما", "القابلية للذوبان في أغشية الخلايا", "الاعتماد على وجود نفس المستقبلات في الخلية المستهدفة"],
      correctAnswer: 3
  },
  {
      question: " أي مما يلي ليس من خصائص الهرمونات ؟",
      answers: [" جميعها مواد عضوية", "بعضها يذوب في بلازما الدم", " بعضها يتكون من البروتينات", "كل هرمون يؤثر على كل خلايا الجـه"],
      correctAnswer: 3
  },
  {
      question: " أي مما يلي ليس هرمونا ؟",
      answers: [" بروتين يغير من وظيفة العضو الأصلية", " بروتين يفرز في النهايات العصيبة كموصل ", " بروتين يفرز في الدم استجابة لتغير في فسيولوجيا الجسم", " بروتين مفرز له خلايا هدف"],
      correctAnswer: 3
  },
  {
      question: " الهرمون (س) يستهدف نسيج بالجسم مباشرة، بينما الهرمون (ص) يستهدف عدة مؤثرة على نفس النسيج، أي مما يلي صحيح بالنسبة للهرمونين (س) ، (ص) :",
      answers: ["يعملان على نفس العضو", " داد تأثيرهما معا", " لا يتأثران بالتنبيه العصبي ", " ينقلان خلال نفس الوسط"],
      correctAnswer: 3
  },
  {
      question: " ما سبب قدرة الهرمونات على حفظ الاتزان الداخلي للجسم ؟",
      answers: [" تحكمها في الأنشطة الحيوية", " تنوع تركيبها الكيميائي", " إفرازها تحت تأثير عصبی", "ضآلة انتاجها"],
      correctAnswer: 3
  },
  {
      question: "  أي عن العبارات التالية غير صحيحة حول خصائص الهرمونات ؟",
      answers: [" تنتقل خلال مجرى الدم", " تفرز في أوقات مختلفة", " يتم استخدامها كوسيلة للتواصل داخل الجسم", "لها نفس التركيب الكيميائي"],
      correctAnswer: 3
  },
  {
      question: "   في تجربة ستـارلـنـج بعد أن قطع الاتصال العصبي عن الاثني عشر والبنكرياس، ماذا حدث لإفراز  العصارة البنكرياسية ؟ ",
      answers: ["زاد", "تأخر", "توقف", " لم يتأثر"],
      correctAnswer: 3
  },
  {
      question: "   أي الاستنتاجات التالية التي توصل إليها كلود برنار لا تتفق مع الدراسات الحديثة ؟",
      answers: ["الكبد يحتوى على خلايا غدية قنوية  الكبد يحتوي على خلايا غدية صماء", " الكبد يحتوى على خلايا غدية قنوية وأخرى صماء ", " الكبد لا يحتوى على خلايا غدية قنوية أو صماء", "أي العبارات التالية غير صحيحة عن الهرمون ؟"],
      correctAnswer: 3
  },
  {
      question: " أي العبارات التالية غير صحيحة عن الهرمون ؟",
      answers: ["يمكن تنظيم تركيز الهرمون بواسطة هرمون آخر", "  قد يكون لتركيز الهرمون تأثير محفز أو مثبط", "( يتحكم التركيب الكيميائي للهرمون في تركيزه", " يفرز بكميات محددة ويؤدى اختلاله لحدوث خلل في الجسم"],
      correctAnswer: 3
  },
  {
      question: "  أي مما يلي يجعل الهرمون يؤثر على الخلايا المستهدفة فقط دون غيرها من خلايا الجسم ؟ ",
      answers: [" وجود قنوات خاصة تصل الهرمون بالخلايا المستهدفةتفرز الخلايا المستهدفة مواد تجذب الهرمون لها", " وجود الخلايا المستهدفة قريبة جدا من الخلايا المفرزة الهرمون", "وجود مستقبلات الهرمون على سطح الخلايا المستهدفة ", "تفرز الخلايا المستهدفة مواد تجذب الهرمون لها"],
      correctAnswer: 3
  },
  {
      question: "  أنواع الغدد في جسم الإنسان تعتبر الغدد الثديية من الغدد",
      answers: ["  القنوية ذات إفراز داخل الجسم", "الصماء", "المشتركة", "       القنوية ذات إفراز خارج الجسم"],
      correctAnswer: 3
  },
  {
      question: " أي مما يلي يميز الخلايا الحويصلية الموجودة في الغدة الدرقية ؟",
      answers: ["ذات إفراز خارجي خارج الجسم ", "ذات إفراز خارجی داخل الجسم", " ذات إفراز خارجی و داخلی", "ذات إفراز داخلی فقط"],
      correctAnswer: 3
  },
  {
      question: " ما مدى صحة العبارتين التاليتين، جميع الغدد الصماء تفرز هرمونات، وتتخللها شبكة كثيفة من الشعيرات الدموية ؟",
      answers: [" العبارتان صحيحتان وبينهما علاقة", " العبارتان صحیحتان وليس بينهما علاقة", "العبارة الأولى صحيحة والعبارة الثانية خطة", " العبارة الأولى خطأ والعبارة الثانية صحيحة"],
      correctAnswer: 3
  },
  {
      question: " البنكرياس غدة مختلطة لأنها ",
      answers: ["مزدوجة الوظيفة", "قنوية ولاقنوية", "بها نوعين من الخلايا", "تفرز نوعين من الهرمونات"],
      correctAnswer: 3
  },
  {
      question: "أي من الغدد التالية تصب إفرازها في الدم فقط ؟",
      answers: ["الغدد اللبنية", "البنكرياس", " الغدة الدرقية", "الخصبة"],
      correctAnswer: 3
  },
  {
      question: " أي الغدد التالية لا تعمل تحت سيطرة الغدة النخامية ؟",
      answers: ["الغدة الدرقية", "المعدة", "الغدد اللبنية", "قشرة الغدة الكظرية"],
      correctAnswer: 3
  },
  {
      question: "  ما الحالة التي تنتج عن فشل الغدة النخامية في تقليل إفرازها لهرمون النمو للوصول للمعدل الطبيعي له في مرحلة الطفولة ؟ ",
      answers: [" القماءة ", "القزامة", "الاكروميجالي", " العملقة"],
      correctAnswer: 3
  },
  {
      question: " ما الهرمون الذي يؤثر في عمل الكليتين بشكل مباشر ؟",
      answers: ["ACTH", "ADH", "TSH", "FSH"],
      correctAnswer: 3
  },
  {
      question: "  أي مما يلى صحيح بالنسبة للهرمونات التي تؤثر في إفراز لبن الأم ",
      answers: [" تفرز من الجزء الغدى للغدة النخامية", " تفرز من الجزء العصبي للغدة النخامية", "  أحد الهرمونات يفرز من الجزء الغدى للغدة النخامية والآخر يفرز من الخلايا العصبية المقررة", "أحد الهرمونات يفرز من الجزء الغدى للغدة النخامية والآخر يفرز من الغدة الكظرية"],
      correctAnswer: 3
  },
  {
      question: ") أي الهرمونات التالية تفرزها الغدة النخامية في كل من الذكور والإناث ولكن يتضح أثرها أكثر عن الامان",
      answers: [" الهرمون المنبه لتكوين الحويصلة", "الهرمون المنبه لتكوين الجسم الأصفر", " الهرمون المضاد لإدرار البول", "هرمون البرولاكتين"],
      correctAnswer: 3
  },
  {
      question: " اي مما يلي غير صحيح في العلاقة بين الغدة والهرمون الذي يؤثر فيها ؟",
      answers: ["نخاع الغدة الكظرية و ACTH", " غدة النشاط و TSH", "المبيض و FSH", " المبيض و LH"],
      correctAnswer: 3
  },
  {
      question: " أي الغدد التالية يؤثر فيها هرمون يفرز من منطقة تحت المهاد ؟",
      answers: ["الغدد التناسلية المذكرة", "الغدد التناسلية المؤنثة", "الغدد الثديية", "الغدة الدرقية"],
      correctAnswer: 3
  },
  {
      question: "  عندما تشرب كمية كبيرة من الماء يؤدي ذلك إلى ",
      answers: ["زيادة إفراز هرمون TSH", "زيادة إفراز هرمون ADH", "نقص إفراز هرمون TSH", "نقص إفراز هرمون VH"],
      correctAnswer: 3
  },
  {
      question: " أي مما يلي صحيح بالنسبة للقص الخلفي للغدة النخامية ؟",
      answers: ["يفرز هرموني الأوكسيتوسين و ADH في الدم ", " يقوم بالتخزين فقط لهرموني ADH والأوكسيتوسين ", " يقوم فقط بتحرير هرمونی ADH والأوكسيتوسين للدم ", "يقوم بتخزين وتحرير هرموني ADH والأوكسيتوسين"],
      correctAnswer: 3
  },
  {
      question: "يؤثر هرمون LH على خلايا",
      answers: ["عشاء بطانة الرحم", "سرتولی", "حويصلة جراف في المبيض", "المشيمة"],
      correctAnswer: 3
  },
  {
      question: " عند انسداد الأوعية الدموية الصادرة من الغدة النخامية، أي مما يلى لا يتأثر بهذا الانسداد ",
      answers: ["الغدة الدرقية", " قشرة الغدة الكظرية", " خصيتي شخص بالغ", " مبيضي طفلة"],
      correctAnswer: 3
  },
  {
      question: "  مصطلح الغدة المايسترو يمكن إطلاقه بدقة على",
      answers: ["الفص الأمامي للغدة النخامية", "منطقة تحت المهاد", " الفص الخلفي للغدة النخامية", " العنق العصبية للغدة النخامية"],
      correctAnswer: 3
  },
  {
      question: " ما الهرمون الذي يمكن استخدامه عقب إجراء بعض العمليات الجراحية مباشرة ؟",
      answers: ["GH", "TSH", "VH", "FSH"],
      correctAnswer: 3
  },
  {
      question: " أي مما يلى لا يتأثر عند استئصال جزء من القص الأمامي للغدة النخامية في أنثى فأر تجارب ؟",
      answers: [" إفراز هرمون الكورتيزون", "فراز هرمون الثيروكسين ", "الخصية", "تركيز الأنسولين في الدم"],
      correctAnswer: 3
  },
  {
      question: " ما الهرمون المسئول عن تنظيم أسموزية الدم بشكل مباشر ؟",
      answers: ["الثيروكسين", "ADH", "TSH", "ACTH"],
      correctAnswer: 3
  },
  {
      question: " ماذا يحدث عند زيادة هرمون ADH",
      answers: ["ارتفاع تركيز الصوديوم في الدم", " زيادة أسموزية البول", " إصابة الجسم بالجفاف", " انخفاض ضغط الدم"],
      correctAnswer: 3
  },
  {
      question: "  أي من الهرمونات التالية يسبب انقباض العضلات الملساء ؟",
      answers: ["البرولاكتين و VH", "الأوكسيتوسين و ADH", "GH والأوكسيتوسين", "LH  والأوكسيتوسين"],
      correctAnswer: 3
  },
  {
      question: " عند إجراء تحليل عينة من دم أنثى عقيمة وجد أن تركيز كل من هرموني TSH - ACTH طبیعی ولكن تركيز كل من هرموني LH - FSH يختلف عن النسبة الطبيعية، يمكن تفسير ذلك لحدوث خلل في خلايا",
      answers: ["الفص الأمامي للغدة النخامية", " الفص الخلفي للغدة النخامية ", "منطقة تحت المهار", "المبيضين"],
      correctAnswer: 3
  },
  {
      question: " ماذا تتوقع أن يحدث في حالة نقص إفراز هرمونی LH  و FSH ",
      answers: ["عقم الإناث فقط", "عقم الذكور فقط", " عقم كل من الذكور والإناث", " لا تناثر أي من خصوبة الذكور و الإناث"],
      correctAnswer: 3
  },
  {
      question: "  أي من الهرمونات التالية يؤثر في الأنسجة غير الغدية ؟        ",
      answers: ["TSH", "ACTH", "LH", "ADH"],
      correctAnswer: 3
  },
  {
      question: "  ما الهرمون الذي يؤثر في عمل الكليتين بشكل غير مباشر ؟",
      answers: ["ACTH", "ADH", "TSH", "GH"],
      correctAnswer: 3
  },
  {
      question: " أي مما يلى يمثل السبب الأكثر شيوعا لحدوث حالة الأكروميجالي ؟",
      answers: ["تضخم عنق الغدة النخامية", "زيادة نشاط خلايا الفص الأمامي للغدة النخامية", "توقف الخلايا العصبية عن الإفراز", " غياب المستقبلات من الخلايا المستهدفة"],
      correctAnswer: 3
  },
  {
      question: "  أي الهرمونات الآتية يتم إفرازها تحت تاثیر هرمونی ؟",
      answers: ["الباراثورمون", "الثيروكسين", "الأوكسيتوسين", "الأنسولين"],
      correctAnswer: 3
  },
  {
      question: " ترجع البدانة لدى بعض الأشخاص البالغين إلى نقص إفراز هرمون   ",
      answers: ["الثيروكسين", "الجلوكاجون", "الأنسولين", "الكورتيزون"],
      correctAnswer: 3
  },
  {
      question: " قد يتأثر مستوى التحصيل الدراسي لدى بعض تلاميذ المرحلة الابتدائية نتيجة نقص هرمون ",
      answers: ["النمو", "الثيروكسين", "FSH", "ADH"],
      correctAnswer: 3
  },
  {
      question: " رغم ارتفاع نسبة اليود في دم شخص إلا أنه مصاب بالتضخم البسيط، ما السبب في ذلك ؟",
      answers: ["حدوث خلل في الفص الخلفي في الغدة النخامية", "حدوث خلل في خلايا الغدة الدرقية", " نشاط خلايا الفص الأمامي للغدة النخامية", " نشاط خلايا الغدد جارات الدرقية"],
      correctAnswer: 3
  },
  {
      question: "  أي مما يلى يحتوى على خلايا حويصلية تعمل كغدة لاقنوية ؟",
      answers: ["البنكرياس", "الغدة الدرقية", " الغدد جارات الدرقية", " الغدة النخامية"],
      correctAnswer: 3
  },
  {
      question: "  تغير النسبة الطبيعية بالارتفاع للهرمون المنبه للغدة الدرقية والانخفاض لهرمون الثيروكسين ينتج عن خلل في خلايا ",
      answers: ["الغدة الدرقية أدى إلى فرط نشاطها", " الغدة الدرقية أدى إلى قلة نشاطها", " الغدة النخامية أدى إلى فرط نشاط الغدة الدرقية", "الغدة النخامية أدى إلى قلة نشاط الغدة الدرقية"],


      correctAnswer: 3
  },
  {
      question: " أي من العمليات الآتية تحفزها زيادة إفراز هرمون الثيروكسين ؟",
      answers: ["زيادة إنتاج جزيئات ATP", "انخفاض سرعة توصيل السيال العصبي", " زيادة كمية الجليكوجين المخزنة بالكبد", " انخفاض مستوى الصوديوم بالدم"],
      correctAnswer: 3
  },
  {
      question: "   ما النتائج المترتبة على زيادة نشاط الغدة الدرقية ؟",
      answers: ["زيادة استهلاك الأكسجين", "انخفاض درجة حرارة الجسم", "زيادة معدل إنتاج الجليكوجين", " انخفاض تركيز ثاني أكسيد الكربون"],
      correctAnswer: 3
  },
  {
      question: "  أي مما يلي ينظم إفراز هرمون الباراثورمون ؟",
      answers: ["الخلايا العصبية المفرزة", " القص الأمامي للغدة النخامية", " تركيز أيونات الكالسيوم في بلازما الدم", " تركيز أيونات الصوديوم في بلازما الدم"],
      correctAnswer: 3
  },
  {
      question: " أي البدائل الآتية متضادين في عملهما ؟   ",
  answers: ["LH. FSH","VH. TSH","الأوكسيتوسين، البرولاكتين"," الكالسيتونين، الباراثورمون"],
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