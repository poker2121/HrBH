// أسئلة تحليل الشخصية المهنية المحسنة
const questions = [
  {
    text: "كيف تتعامل مع المواقف الصعبة والضغوط في العمل؟",
    answers: [
      { text: "أتعامل بهدوء تام وأضع خطة واضحة لحل المشكلة", value: 3 },
      { text: "أحلل الموقف بسرعة وأجد البدائل المناسبة", value: 2 },
      { text: "أشعر بالتوتر أحياناً لكن أستطيع السيطرة على نفسي", value: 1 },
      { text: "أشعر بالارتباك وأحتاج للمساعدة من الآخرين", value: 0 }
    ]
  },
  {
    text: "ما هو أسلوبك المفضل في حل المشكلات المعقدة؟",
    answers: [
      { text: "أبتكر حلولاً جديدة وأفكر خارج الصندوق", value: 3 },
      { text: "أستخدم التحليل المنطقي والبيانات المتاحة", value: 2 },
      { text: "أستشير الخبراء والزملاء في المجال", value: 1 },
      { text: "أتبع الإجراءات المعتادة وأنتظر التوجيهات", value: 0 }
    ]
  },
  {
    text: "كيف تدير وقتك عند وجود مهام متعددة ومواعيد نهائية ضيقة؟",
    answers: [
      { text: "أضع أولويات واضحة وأستخدم أدوات التنظيم المتقدمة", value: 3 },
      { text: "أقسم المهام إلى أجزاء صغيرة وأنجزها تدريجياً", value: 2 },
      { text: "أحاول التوفيق بين المهام حسب الأهمية", value: 1 },
      { text: "أواجه صعوبة في التنظيم وأحتاج لمساعدة إضافية", value: 0 }
    ]
  },
  {
    text: "كيف تتعامل مع الزملاء الذين لديهم أساليب عمل مختلفة عنك؟",
    answers: [
      { text: "أتقبل الاختلاف بل وأستفيد منه لإثراء العمل", value: 3 },
      { text: "أحترم اختلافاتهم وأسعى للتعاون البناء", value: 2 },
      { text: "أحاول التكيف معهم حسب الموقف", value: 1 },
      { text: "أفضل العمل مع الأشخاص الذين يشبهونني في التفكير", value: 0 }
    ]
  },
  {
    text: "ما مدى قدرتك على الالتزام بالمواعيد النهائية والخطط المحددة؟",
    answers: [
      { text: "ملتزم بدقة عالية وأخطط دائماً مع هامش أمان", value: 3 },
      { text: "ملتزم في معظم الأوقات وأسعى لتحسين أدائي", value: 2 },
      { text: "أحياناً أتأخر لكن التزامي جيد بشكل عام", value: 1 },
      { text: "أواجه صعوبة في الالتزام بالمواعيد المحددة", value: 0 }
    ]
  },
  {
    text: "كيف تتعامل مع النقد والملاحظات حول عملك؟",
    answers: [
      { text: "أتقبله بصدر رحب وأعتبره فرصة للتطوير", value: 3 },
      { text: "أستمع بعناية وأحاول الاستفادة من الملاحظات", value: 2 },
      { text: "أتقبله أحياناً لكن قد أتأثر عاطفياً", value: 1 },
      { text: "يصعب علي تقبل النقد ويؤثر على معنوياتي", value: 0 }
    ]
  },
  {
    text: "ما هو أسلوبك المفضل في إنجاز المشاريع؟",
    answers: [
      { text: "أحب قيادة الفريق وتنسيق الجهود الجماعية", value: 3 },
      { text: "أفضل المشاركة النشطة في العمل الجماعي", value: 2 },
      { text: "أتكيف مع العمل الفردي والجماعي حسب الحاجة", value: 1 },
      { text: "أفضل العمل الفردي للتركيز بشكل أفضل", value: 0 }
    ]
  },
  {
    text: "كيف تتعامل مع التغييرات والتطورات في بيئة العمل؟",
    answers: [
      { text: "أتأقلم بسرعة وأبحث عن الفرص الجديدة", value: 3 },
      { text: "أتقبل التغيير وأسعى للتكيف معه بإيجابية", value: 2 },
      { text: "أحتاج بعض الوقت للتأقلم مع التغييرات", value: 1 },
      { text: "أجد صعوبة في التكيف مع التغيير المستمر", value: 0 }
    ]
  },
  {
    text: "ما هي طريقتك في التعامل مع العملاء أو الجمهور المستهدف؟",
    answers: [
      { text: "أتميز في التواصل وبناء علاقات قوية ومستدامة", value: 3 },
      { text: "أجيد التعامل معهم وأسعى لتلبية احتياجاتهم", value: 2 },
      { text: "أتعامل بأسلوب مهني لكن أحياناً أشعر بالتوتر", value: 1 },
      { text: "أفضل تجنب التعامل المباشر مع العملاء", value: 0 }
    ]
  },
  {
    text: "كيف تتعامل مع الأخطاء والمسؤوليات في العمل؟",
    answers: [
      { text: "أعترف بالخطأ فوراً وأضع خطة لتجنبه مستقبلاً", value: 3 },
      { text: "أتحمل مسؤولية أخطائي وأسعى لإصلاحها", value: 2 },
      { text: "أشعر بالضيق من الأخطاء لكن أحاول التعلم منها", value: 1 },
      { text: "أجد صعوبة في تحمل المسؤولية عن الأخطاء", value: 0 }
    ]
  }
];

let currentQuestion = 0;
let score = 0;
let userData = { name: "", phone: "", email: "" };
let userAnswers = [];

// تهيئة الصفحة
window.onload = function () {
  document.getElementById("quizContent").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "none";
  document.getElementById("totalQuestions").textContent = questions.length;
  
  // معالج إرسال النموذج
  document.getElementById("userForm").onsubmit = function (e) {
    e.preventDefault();
    
    // جمع بيانات المستخدم
    userData.name = document.getElementById("userName").value.trim();
    userData.phone = document.getElementById("userPhone").value.trim();
    userData.email = document.getElementById("userEmail").value.trim();
    
    // التحقق من صحة البيانات
    if (!userData.name || !userData.phone || !userData.email) {
      alert("يرجى ملء جميع الحقول المطلوبة");
      return;
    }
    
    // إخفاء النموذج وعرض الاختبار
    document.getElementById("userForm").style.display = "none";
    document.getElementById("quizContent").style.display = "block";
    showQuestion();
  };
};

// عرض السؤال الحالي
function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.text;
  document.getElementById("questionNumber").textContent = currentQuestion + 1;
  
  // إنشاء أزرار الإجابات
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  
  q.answers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = ans.text;
    btn.onclick = () => handleAnswer(ans.value, ans.text);
    answersDiv.appendChild(btn);
  });
  
  // تحديث شريط التقدم
  updateProgress();
}

// تحديث شريط التقدم
function updateProgress() {
  const progressPercent = (currentQuestion / questions.length) * 100;
  document.getElementById("progress").style.width = progressPercent + "%";
}

// معالجة اختيار الإجابة
function handleAnswer(value, answerText) {
  score += value;
  userAnswers.push({ 
    question: questions[currentQuestion].text, 
    answer: answerText,
    score: value
  });
  
  // تعطيل جميع الأزرار
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn) => {
    btn.disabled = true;
    btn.style.opacity = "0.6";
  });
  
  // تأثير الانتقال
  setTimeout(() => {
    document.getElementById("question").classList.add("fade-out");
    document.getElementById("answers").classList.add("fade-out");
    
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
        document.getElementById("question").classList.remove("fade-out");
        document.getElementById("answers").classList.remove("fade-out");
        document.getElementById("question").classList.add("fade-in");
        document.getElementById("answers").classList.add("fade-in");
      } else {
        showThankYou();
        sendResultByEmail();
      }
    }, 500);
  }, 1000);
}

// عرض رسالة الشكر
function showThankYou() {
  document.getElementById("progress").style.width = "100%";
  document.getElementById("quizContent").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
}

// إرسال النتيجة بالبريد الإلكتروني
function sendResultByEmail() {
  const serviceID = "service_pov79vw";
  const templateID = "template_np0b5yp";
  const userID = "KShcuTLxPbI-B4cZ3";
  
  // حساب النسبة المئوية
  const maxScore = questions.length * 3;
  const percentage = Math.round((score / maxScore) * 100);
  
  // تحليل مفصل للشخصية
  let personalityAnalysis = generatePersonalityAnalysis(percentage, score, maxScore);
  
  // تحليل نقاط القوة والضعف
  let strengthsWeaknesses = analyzeStrengthsWeaknesses();
  
  // التوصيات المهنية
  let careerRecommendations = generateCareerRecommendations(percentage);
  
  // تحليل الإجابات بالتفصيل
  let detailedAnswers = generateDetailedAnswers();
  
  // إنشاء الرسالة المفصلة
  const detailedMessage = `
🎯 تقرير تحليل الشخصية المهنية المفصل

👤 بيانات المتقدم:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
الاسم: ${userData.name}
الهاتف: ${userData.phone}
البريد الإلكتروني: ${userData.email}
تاريخ الاختبار: ${new Date().toLocaleDateString('ar-EG')}

📊 النتيجة العامة:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
النقاط المحققة: ${score} من ${maxScore}
النسبة المئوية: ${percentage}%
مستوى الأداء: ${getPerformanceLevel(percentage)}

🧠 تحليل الشخصية المهنية:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${personalityAnalysis}

💪 نقاط القوة والضعف:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${strengthsWeaknesses}

🎯 التوصيات المهنية:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${careerRecommendations}

📋 تحليل الإجابات بالتفصيل:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${detailedAnswers}

📈 خطة التطوير المقترحة:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${generateDevelopmentPlan(percentage)}

════════════════════════════════════════════════════════════════
هذا التقرير تم إنشاؤه تلقائياً من نظام تحليل الشخصية المهنية
تاريخ الإنشاء: ${new Date().toLocaleString('ar-EG')}
════════════════════════════════════════════════════════════════
  `;
  
  // إعداد معاملات الإرسال
  const templateParams = {
    to_email: "banoobnagy@gmail.com",
    message: detailedMessage,
    name: userData.name,
    phone: userData.phone,
    email: userData.email,
    score: score,
    maxScore: maxScore,
    percentage: percentage
  };
  
  // إرسال البريد الإلكتروني
  if (window.emailjs) {
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log('تم إرسال التقرير بنجاح:', response.status, response.text);
      },
      (error) => {
        console.error('خطأ في إرسال التقرير:', error);
      }
    );
  }
}

// توليد تحليل الشخصية المفصل
function generatePersonalityAnalysis(percentage, score, maxScore) {
  if (percentage >= 85) {
    return `🌟 شخصية قيادية متميزة: تتمتع بمهارات استثنائية في القيادة والإدارة. لديك قدرة عالية على اتخاذ القرارات الصحيحة تحت الضغط، وتتميز بالثقة بالنفس والمبادرة. تمتلك مهارات تواصل متقدمة وقدرة على إلهام الآخرين. مناسب للمناصب القيادية العليا والمشاريع الاستراتيجية.`;
  } else if (percentage >= 70) {
    return `⭐ شخصية مهنية متقدمة: تتمتع بمهارات مهنية قوية ومتوازنة. لديك قدرة جيدة على التعامل مع التحديات وحل المشكلات. تتميز بالانضباط والالتزام، مع قدرة على التكيف مع البيئات المختلفة. مناسب للأدوار التخصصية والإشرافية.`;
  } else if (percentage >= 55) {
    return `🔄 شخصية مهنية متوسطة: تمتلك أساساً جيداً من المهارات المهنية مع إمكانية للتطوير. لديك قدرة معقولة على التعامل مع المسؤوليات، لكن تحتاج لتعزيز بعض المهارات الأساسية. مناسب للأدوار التنفيذية مع التوجيه والتدريب.`;
  } else {
    return `🎯 شخصية مهنية مبتدئة: تحتاج إلى تطوير المهارات الأساسية للعمل المهني. يُنصح بالتركيز على بناء الثقة بالنفس وتعلم مهارات إدارة الوقت والتواصل. مع التدريب المناسب، يمكن تحقيق تطور ملحوظ. مناسب للأدوار التدريبية والمساعدة.`;
  }
}

// تحليل نقاط القوة والضعف
function analyzeStrengthsWeaknesses() {
  let strengths = [];
  let weaknesses = [];
  let suggestions = [];
  
  // تحليل كل مجال بناءً على الإجابات
  const categories = [
    { name: "إدارة الضغوط", index: 0 },
    { name: "حل المشكلات", index: 1 },
    { name: "إدارة الوقت", index: 2 },
    { name: "التعامل مع الآخرين", index: 3 },
    { name: "الالتزام والانضباط", index: 4 },
    { name: "تقبل النقد", index: 5 },
    { name: "العمل الجماعي", index: 6 },
    { name: "التكيف مع التغيير", index: 7 },
    { name: "خدمة العملاء", index: 8 },
    { name: "تحمل المسؤولية", index: 9 }
  ];
  
  categories.forEach(category => {
    const answerScore = userAnswers[category.index]?.score || 0;
    if (answerScore >= 2) {
      strengths.push(`✅ ${category.name}: مهارة قوية`);
    } else if (answerScore === 1) {
      suggestions.push(`⚠️ ${category.name}: يحتاج تحسين`);
    } else {
      weaknesses.push(`❌ ${category.name}: يحتاج تطوير كبير`);
    }
  });
  
  return `
🔸 نقاط القوة:
${strengths.length > 0 ? strengths.join('\n') : 'لا توجد نقاط قوة واضحة - يحتاج تطوير شامل'}

🔸 نقاط التحسين:
${suggestions.length > 0 ? suggestions.join('\n') : 'لا توجد'}

🔸 نقاط الضعف:
${weaknesses.length > 0 ? weaknesses.join('\n') : 'لا توجد نقاط ضعف واضحة'}`;
}

// توليد التوصيات المهنية
function generateCareerRecommendations(percentage) {
  if (percentage >= 85) {
    return `
🎯 المسارات المهنية المقترحة:
• المناصب القيادية العليا (مدير عام، رئيس قسم)
• إدارة المشاريع الاستراتيجية
• الاستشارات الإدارية والتطوير التنظيمي
• ريادة الأعمال وتأسيس الشركات
• التدريب والتطوير المهني

🚀 فرص التطوير:
• برامج القيادة التنفيذية
• ماجستير إدارة الأعمال (MBA)
• شهادات في إدارة المشاريع (PMP)`;
  } else if (percentage >= 70) {
    return `
🎯 المسارات المهنية المقترحة:
• المناصب الإشرافية والتنسيقية
• إدارة الفرق والأقسام
• التخصصات الفنية المتقدمة
• التطوير والتحسين المستمر
• العلاقات العامة والتواصل

🚀 فرص التطوير:
• دورات القيادة والإدارة
• تطوير المهارات الفنية المتخصصة
• شهادات مهنية في التخصص`;
  } else if (percentage >= 55) {
    return `
🎯 المسارات المهنية المقترحة:
• الأدوار التنفيذية والتشغيلية
• المساعدة الإدارية والتنسيق
• خدمة العملاء والمبيعات
• العمل الميداني والتطبيقي
• الدعم الفني والتقني

🚀 فرص التطوير:
• دورات المهارات الأساسية
• تطوير مهارات التواصل
• تعلم أدوات التنظيم والإدارة`;
  } else {
    return `
🎯 المسارات المهنية المقترحة:
• الأدوار التدريبية والتعليمية
• المساعدة والدعم الإداري
• العمل تحت الإشراف المباشر
• الأعمال الروتينية والمحددة
• التطوع والعمل الخيري (للخبرة)

🚀 فرص التطوير:
• برامج التدريب الأساسية
• دورات الثقة بالنفس
• تطوير المهارات الشخصية
• العمل مع مرشد مهني`;
  }
}

// توليد تحليل الإجابات المفصل
function generateDetailedAnswers() {
  let analysis = "";
  userAnswers.forEach((answer, index) => {
    const questionNum = index + 1;
    const scoreText = getScoreText(answer.score);
    analysis += `
${questionNum}. ${answer.question}
   الإجابة: ${answer.answer}
   التقييم: ${scoreText} (${answer.score}/3)
   `;
  });
  return analysis;
}

// الحصول على نص التقييم
function getScoreText(score) {
  switch(score) {
    case 3: return "ممتاز";
    case 2: return "جيد";
    case 1: return "مقبول";
    case 0: return "يحتاج تحسين";
    default: return "غير محدد";
  }
}

// الحصول على مستوى الأداء
function getPerformanceLevel(percentage) {
  if (percentage >= 85) return "ممتاز";
  if (percentage >= 70) return "جيد جداً";
  if (percentage >= 55) return "جيد";
  if (percentage >= 40) return "مقبول";
  return "يحتاج تحسين";
}

// توليد خطة التطوير
function generateDevelopmentPlan(percentage) {
  if (percentage >= 85) {
    return `
1. المحافظة على مستوى الأداء العالي
2. تطوير مهارات القيادة الاستراتيجية
3. بناء شبكة علاقات مهنية قوية
4. المشاركة في المؤتمرات والفعاليات المهنية
5. تطوير مهارات التوجيه والإرشاد للآخرين`;
  } else if (percentage >= 70) {
    return `
1. تعزيز مهارات التواصل والعرض
2. تطوير القدرة على اتخاذ القرارات
3. تعلم أدوات إدارة المشاريع
4. تحسين مهارات إدارة الوقت
5. المشاركة في دورات القيادة`;
  } else if (percentage >= 55) {
    return `
1. تطوير مهارات التنظيم والترتيب
2. تحسين القدرة على التعامل مع الضغوط
3. تعلم مهارات التواصل الفعال
4. تطوير الثقة بالنفس
5. ممارسة العمل الجماعي`;
  } else {
    return `
1. البدء بدورات المهارات الأساسية
2. تطوير مهارات إدارة الوقت
3. تعلم أساسيات التواصل المهني
4. العمل مع مرشد أو مدرب
5. الممارسة العملية تحت الإشراف`;
  }
}

// تهيئة إضافية عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  // إضافة تأثيرات بصرية للنماذج
  const inputs = document.querySelectorAll('.custom-input');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });
});