(function() {
  "use strict";

  let questions = [
    {
      question: " كم عدد أزواج الحوصلات المنوية الموجود في الجهاز التناسلي الذكري ؟",
      answers: ["0","1","2","3"],
      correctAnswer: 3
    },
    {
      question: "   يتعرض بعض الأطفال حديثي الولادة إلى عدم نزول إحدى الخصيتين في كيس الصفن فيما يسمى بالخصية   المعلقة، ماذا يحدث إذا لم يعالج هؤلاء الأطفال ؟  ",
      answers: ["عدم إنتاج المني عند البلوغ مسببا العقم"," إنتاج المني عند البلوغ بكمية أقل","  توقف عمل الغدد التناسلية الملحقة "," عدم قدرة الشخص على التزاوج عند البلوغ"],
      correctAnswer: 3
    },
    {
      question: " ما مدى صحة العبارتين التاليتين، «لا تستطيع الحيوانات المنوية العيش بدون وسط غذائی » ، «لا تخزن الحيوانات المنوية الغذاء بداخلها » ؟",
      answers: ["العبارتان صحیحتان"," العبارتان خطأ"," العبارة الأولى صحيحة والعبارة الثانية خطأ"," العبارة الأولى خطأ والعبارة الثانية صحيحة"],
      correctAnswer: 3
    },
    {
      question: "   أي مما يلي ليس له دور في إنجاح الحيوانات المنوية في الوصول إلى البويضة ؟",
      answers: ["غدة البروستاتا"," الحوصلتان المنويتان","الخصية","غدتا کوبر"],
      correctAnswer: 3
    },
    {
      question: "  أي المراحل التالية لا يتغير فيها المحتوى الصبغي للخلايا عن الخلايا الأصلية عند تكوين الحيوانات المنوية ؟",
      answers: [ "مرحلة التضاعف ومرحلة النمو","مرحلة النمو ومرحلة النضج"," مرحلة التضاعف ومرحلة النضج"," مرحلة النضج ومرحلة التشكل النهائي"],
      correctAnswer: 3
    },
    {
      question: "  كم عدد الحيوانات المنوية الناتج من انقسام ۱۰ خلايا من أمهات المني ؟",
      answers: ["10","20","40","80"],
      correctAnswer: 3
    },
    {
      question: " كم عدد الأمشاج الذكرية التي تنتج من ١٠ خلايا منوية ثانوية ؟",
      answers: ["10","20","30","40"],
      correctAnswer: 3
    },
    {
      question: "كم متوسط عدد البويضات الذي ينتجه كل مبيض في امرأة غير حامل كل سنة في الحالات الطبيعية ؟",
      answers: ["6","13","24","52"],
      correctAnswer: 3
    },
    {
      question: "    في سن الخمسين توقفت الدورة الشهرية لأنثى لم تتزوج وكانت قد وصلت لمرحلة البلوغ في الثانية عشر  من عمرها، فكم متوسط عدد البويضات التي نضجت خلال فترة حياتها ؟    ",
      answers: ["350","400","490","595"],
      correctAnswer: 3
    },
    {
      question: " أي مما يلي تكون بويضات إناثها صغيرة وقليلة الغذاء ؟",
      answers: ["العصفور","الضفدع","السلحفاة","الحوت"],
      correctAnswer: 3
    },
    {
      question: " أي الكائنات التالية ينتج إناثه بويضات بأعداد محدودة ؟",
      answers: ["الدولفين","البلطي","البوري","السلمندر"],
      correctAnswer: 3
    },
    {
      question: " أكبر البويضات حجما هي بويضات أنثى",
      answers: ["العصفور","الكلب","الفيل","الإنسان"],
      correctAnswer: 3
    },
    {
      question: " متى تتكون الخلايا البيضية الأولية في أنثي الإنسان ؟",
      answers: ["عند الإخصاب"," أثناء التكوين الجنيني","قبل البلوغ"," بعد البلوغ"],
      correctAnswer: 3
    },
    {
      question: "  مبتدئا بأربع خلايا من أمهات البيض في مبيض قطة، فكم يكون أقصى عدد من الخلايا المتكونة بعد نهاية الانقسامات ",
      answers: ["۱۲ بويضة و ٤ أجسام قطبية"," ٤ بويضات و ۱۲ جسم قطبی"," ٤ بويضات و ٤ أجسام قطبية","٦ بويضات و ۱۲ جسم قطبی"],
      correctAnswer: 3
    },
    {
      question: " تختلف البويضة عن الحيوان المنوي في الإنسان في ",
      answers: [" عدد الصبغيات"," حجم السيتوسول","وجود الميتوكوندريا","وجود الغشاء البلازمي"],
      correctAnswer: 3
    },
    {
      question: " ما المرحلة التي ينتهي فيها الانقسام الميوزي في مراحل تكوين البويضة لأنثى الإنسان ؟",
      answers: ["التبويض","الإخصاب","التضاعف","الطمث"],
      correctAnswer: 3
    },
    {
      question: "أين يحدث الانقسام الميوزي الأول عند تكوين البويضة لأنثى الإنسان ؟",
      answers: ["في حويصلة جراف"," في بطانة الرحم","في قناة فالوب"," في تجويف الرحم"],
      correctAnswer: 3
    },
    {
      question: "يتشابه الجسم القطبي مع الخلية الجسدية في ",
      answers: ["الحجم","حجم السيتوبلازم","العدد الصبغي"," وجود الغشاء البلازمي"],
      correctAnswer: 3
    },
    {
      question: "  أي الخلايا التالية لا يكون فيها الانقسام مشروطا ؟",
      answers: ["الخلية البيضية الثانوية","مع الزيجوسبور","الجراثيم","الزيجوت"],
      correctAnswer: 3
    },
    {
      question: "  أي المناسل التالية لا ينتج أمشاجه بالانقسام الميتوزي فقط ",
      answers: ["الأرشيجونيا"," مبيض أنثى الإنسان","الانثريديا","خصية ذكر النحل"],
      correctAnswer: 3
    },
    {
      question: " و كم عدد الأمشاج الأنثوية التي تنتج من ٥ خلايا بيضية أولية ؟",
      answers: ["5","6","8","10"],
      correctAnswer: 3
    },
    {
      question: " ماذا تسمى الخلايا الحويصلية المتبقية في المبيض بعد حدوث عملية التبويض ؟",
      answers: [" حويصلة جراف","خلايا بطانة المبيض"," الخلايا القطبية"," الجسم الأصفر"],
      correctAnswer: 3
    },
    {
      question: " ما الذي تحتوي عليه حويصلة جراف في اليوم الخامس من بدء الطمث ؟",
      answers: ["خلية بيضية أولية","خلية بيضية ثانوية","أمهات المبيض"," خلية جرثومية أمية"],
      correctAnswer: 3
    },
    {
      question: "  يتحرر من المبيض الواحد بويضة كل",
      answers: [" ١٠ أيام"," ١٤ يوم"," ٢٨ يوم"," ٥٦ يوم"],
      correctAnswer: 3
    },
    {
      question: " أي المراحل التالية تكون فيها أدنى مستوى لهرمونات المبيض عند المرأة ؟",
      answers: ["التبويض","نضج البويضة","الطمث","الإخصاب"],
      correctAnswer: 3
    },
    {
      question: "ما مصدر إفراز هرمون البروجسترون في الشهر الخامس من الحمل ؟",
      answers: ["الغدة النخامية","حويصلة جراف","الجسم الأصفر","المشيمة"],
      correctAnswer: 3
    },
    {
      question: "   إذا علمت أن الطمث عند أنثى إنسان بالغة حدث يوم ٢٠ من شهر سبتمبر، فإنه من المحتمل أن تتحرر البويضة من المبيض يوم   ",
      answers: ["٢٥ سبتمبر","۳۰ سبتمبر"," 3 أكتوبر"," ۱۰ اکتوبر"],
      correctAnswer: 3
    },
    {
      question: "  متى يزداد إفراز حويصلة جراف لهرمون الاستروجين ؟ ",
      answers: ["عندما يزداد مستوى هرمون البروجسترون في الدم"," عندما يقل مستوى هرمون FSH في الدم","  عندما يزداد مستوى هرمون LH في الدم"," عندما يقـل مستوى هرمون LH في الدم"],
      correctAnswer: 3
    },
    {
      question: "   أي مما يلى من مؤشرات الحمل عند المرأة ؟",
      answers: [" تـزايـد هرمون البروجسترون وتناقص هرمون FSH","تناقص هرمون البروجسترون وتزايد هرمون FSH"," تناقص هرمون البروجسترون وتناقص هرمون FSH"," تزايد هرمون البروجسترون وتزايد هرمون FSH  "],
      correctAnswer: 3
    },
    {
      question: " أي من العبارات التالية صحيحة فيما يتعلق بمرحلة الطمث ؟",
      answers: ["يستمر الطمث حوالي من (٥ : ٧) أيام"," خلال فترة الطمث يتم التخلص من بطانة الرحم بالكامل"," يشير غياب الطمث دائما إلى وجود حمل نشط"," يحدث نتيجة نقص هرمون البروجسترون"],
      correctAnswer: 3
    },
    {
      question: " في أي مرحلة من دورة الطمث يكون فيها الاحتمال الأكبر لحدوث الحمل عند المرأة ؟   ",
      answers: ["الأيام من (١ : ٥)","الأيام من (١٢ : ١٦)"," الأيام من (۱۷ : ۲۱)    "," الأيام من (۲۲ : ۲۸)"],
      correctAnswer: 3
    },
    {
      question: "  أي العبارات التالية غير صحيحة عن هرمون الإستروجين ؟",
      answers: ["يتسبب في إنماء بطانة الرحم"," يحفز نقصه زيادة إفراز هرمون LH","يتسبب نقصه في تهدم بطانة الرحم وتمرق الشعيرات الدموية"," تسبب زيادته المستمرة في عدم حدوث التبويض"],
      correctAnswer: 3
    },
    {
      question: "في أي الأيام التالية من بداية الدورة الشهرية للزوجة لا يؤدي التزاوج إلى حدوث حمل ؟",
      answers: ["اليوم العاشر"," اليوم الثاني عشر","اليوم الرابع عشر"," اليوم الخامس عشر"],
      correctAnswer: 3
    },
    {
      question: " السبب المباشر لعدم انتظام دورة الطمث عند إحدى الإناث هو حدوث اضطراب في إفراز هرموني ",
      answers: ["LH, FSH"," الإستروجين والريلاكسين"," الريلاكسين وFSH"," الأوكسيتوسين وLH"],
      correctAnswer: 3
    },
    {
      question: "  ما سبب انخفاض معدل الخصوبة عند أنثى عمرها ٢٥ سنة ",
      answers: ["استمرار إفراز الإستروجين"," نقص إفراز هرمون FSH","نقص إفراز البروجسترون","زيادة إفراز هرمون LH"],
      correctAnswer: 3
    },
    {
      question: " أي من الهرمونات التالية يوجد في العقاقير التي تستخدمها سيدة لتزيد من فرص الحمل ؟",
      answers: ["الإستروجين وFSH"," الإستروجين والبروجسترون","البروجسترون وLH","LH, FSH"],
      correctAnswer: 3
    },
    {
      question: " ماذا يحدث في اليوم الرابع عشر من بدء الطمث ؟",
      answers: [" انخفاض مستوى هرموني البروجسترون والإستروجين","ارتفاع مستوى هرموني البروجسترون والإستروجين","انخفاض مستوى هرمون البروجسترون وارتفاع مستوى هرمون الإستروجين","  انخفاض مستوى هرمون الإستروجين وارتفاع مستوى هرمون البروجسترون"],
      correctAnswer: 3
    },
    {
      question: "   أي مما يلى لا يسبب حدوث إجهاض المرأة الحامل ؟",
      answers: [" استئصال المبيض الذي أنتج البويضة التي تم إخصابها ","استئصال المبيض الذي لم ينتج البويضة التي تم إخصابها"," ضمور الجسم الأصفر في الشهر الأول للحمل ","ضمور الجسم الأصفر في الشهر الثاني للحمل"],
      correctAnswer: 3
    },
    {
      question: "متى يفرز القص الأمامي للغدة النخامية الهرمون المصفر (LH) ",
      answers: ["عندما يزداد مستوى هرمون الإستروجين في الدم"," عندما يقل مستوى هرمون الإستروجين في الدم"," عندما يقل مستوى هرمون الإستروجين في الدم ثم يزداد"," عندما يزداد مستوى هرمون الإستروجين في الدم ثم يقل"],
      correctAnswer: 3
    },
    {
      question: " متى يفرز الجسم الأصفر هرمون البروجسترون ؟",
      answers: [ "عندما يزداد مستوى هرمون LH في الدم","عندما يقل مستوى هرمون LH في الدم"," عندما يقل مستوى هرمون LH في الدم ثم يزداد","عندما يزداد مستوى هرمون LH في الدم ثم يقل"],
      correctAnswer: 3
    },
    {
      question: " أي الهرمونات التالية زيادة إفرازه المستمر تمنع تكوين الجسم الأصفر في مبيض أنثى إنسان بالغة ،",
      answers: ["FSH","LH","الأوكسيتوسين","الإستروجين"],
      correctAnswer: 3
    },
    {
      question: " يزيد إفراز هرمون FSH عند انخفاض هرمون   ",
      answers: ["LH","الإستروجين","البروجسترون","الريلاكسين"],
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