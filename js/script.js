// أسئلة تحليل الشخصية المهنية الاحترافية
const questions = [
  {
    text: "عندما تواجه مشروعاً معقداً بموارد محدودة ووقت ضيق، كيف تتعامل مع هذا التحدي؟",
    answers: [
      { text: "أضع استراتيجية شاملة وأعيد تقييم الأولويات وأبتكر حلولاً بديلة", value: 3 },
      { text: "أحلل المتطلبات وأركز على العناصر الأساسية مع تفويض المهام", value: 2 },
      { text: "أحاول تنظيم العمل قدر الإمكان وأطلب المساعدة عند الحاجة", value: 1 },
      { text: "أشعر بالإرهاق وأحتاج لتوجيه مستمر من الإدارة", value: 0 },
    ],
  },
  {
    text: "كيف تتعامل مع موقف يتطلب اتخاذ قرار استراتيجي مهم دون وجود بيانات كافية؟",
    answers: [
      { text: "أجمع المعلومات المتاحة وأستخدم التحليل التنبؤي والخبرة السابقة", value: 3 },
      { text: "أستشير الخبراء وأقيم المخاطر المحتملة قبل اتخاذ القرار", value: 2 },
      { text: "أحاول الحصول على مزيد من الوقت لجمع معلومات إضافية", value: 1 },
      { text: "أفضل تأجيل القرار حتى توفر بيانات كاملة", value: 0 },
    ],
  },
  {
    text: "عند إدارة فريق متنوع الخبرات والشخصيات، ما هو أسلوبك في تحقيق الأهداف؟",
    answers: [
      { text: "أطور استراتيجية فردية لكل عضو وأبني على نقاط قوته الفريدة", value: 3 },
      { text: "أضع معايير واضحة وأوفر التدريب والدعم المناسب لكل فرد", value: 2 },
      { text: "أحاول التوازن بين احتياجات الفريق والأهداف المطلوبة", value: 1 },
      { text: "أواجه صعوبة في التعامل مع الاختلافات وأفضل الفرق المتجانسة", value: 0 },
    ],
  },
  {
    text: "كيف تتعامل مع عميل غاضب يهدد بإنهاء تعاقد مهم مع الشركة؟",
    answers: [
      { text: "أستمع بعمق لفهم المشكلة الجذرية وأقدم حلولاً مبتكرة ومرضية", value: 3 },
      { text: "أتعامل بهدوء وأعرض بدائل عملية لحل المشكلة", value: 2 },
      { text: "أحاول تهدئة الموقف وأطلب المساعدة من المدير المباشر", value: 1 },
      { text: "أشعر بالتوتر الشديد وأحتاج لتدخل فوري من الإدارة العليا", value: 0 },
    ],
  },
  {
    text: "عندما تكتشف خطأً جوهرياً في مشروع على وشك التسليم، كيف تتصرف؟",
    answers: [
      { text: "أبلغ فوراً وأضع خطة طوارئ لإصلاح الخطأ مع تقليل التأثير", value: 3 },
      { text: "أقيم حجم المشكلة وأعمل على إيجاد حل سريع وفعال", value: 2 },
      { text: "أخبر المسؤولين وأنتظر التوجيهات حول كيفية التعامل", value: 1 },
      { text: "أشعر بالقلق الشديد وأحتاج لمساعدة عاجلة في اتخاذ القرار", value: 0 },
    ],
  },
  {
    text: "كيف تتعامل مع تغيير جذري في استراتيجية الشركة يؤثر على عملك؟",
    answers: [
      { text: "أدرس التغيير بعمق وأطور خطة للاستفادة من الفرص الجديدة", value: 3 },
      { text: "أتكيف مع التغيير وأعدل خططي وفقاً للاستراتيجية الجديدة", value: 2 },
      { text: "أحتاج وقتاً للتأقلم وأطلب التوضيحات اللازمة", value: 1 },
      { text: "أجد صعوبة في التكيف وأفضل الاستقرار في طرق العمل", value: 0 },
    ],
  },
  {
    text: "عند تلقي نقد حاد من العملاء حول جودة عملك، كيف تتفاعل؟",
    answers: [
      { text: "أحلل النقد بموضوعية وأحوله لخطة تحسين شاملة", value: 3 },
      { text: "أتقبل النقد وأعمل على معالجة النقاط المثارة بجدية", value: 2 },
      { text: "أشعر بالانزعاج لكنني أحاول الاستفادة من الملاحظات", value: 1 },
      { text: "يؤثر النقد على معنوياتي ويصعب علي التعامل معه", value: 0 },
    ],
  },
  {
    text: "كيف تدير أولوياتك عندما تواجه عدة مشاريع عاجلة في نفس الوقت؟",
    answers: [
      { text: "أطبق مصفوفة الأولويات وأستخدم تقنيات إدارة المشاريع المتقدمة", value: 3 },
      { text: "أقيم الأهمية النسبية وأوزع الوقت والموارد بذكاء", value: 2 },
      { text: "أحاول التوازن بين المشاريع حسب المواعيد النهائية", value: 1 },
      { text: "أشعر بالإرباك وأحتاج مساعدة في تحديد الأولويات", value: 0 },
    ],
  },
  {
    text: "عند قيادة مشروع يتطلب تعاوناً مع أقسام متعددة، كيف تضمن النجاح؟",
    answers: [
      { text: "أبني شراكات استراتيجية وأضع آليات تواصل وتنسيق متقدمة", value: 3 },
      { text: "أنسق بفعالية مع جميع الأطراف وأتابع التقدم بانتظام", value: 2 },
      { text: "أحاول التواصل مع الأقسام المختلفة حسب الحاجة", value: 1 },
      { text: "أجد صعوبة في التنسيق وأفضل العمل داخل قسمي فقط", value: 0 },
    ],
  },
  {
    text: "كيف تتعامل مع موظف متميز في فريقك يظهر سلوكاً سلبياً يؤثر على الآخرين؟",
    answers: [
      { text: "أجري محادثة استراتيجية لفهم الأسباب وأضع خطة تطوير شخصية", value: 3 },
      { text: "أتحدث معه بصراحة وأوضح تأثير سلوكه على الفريق", value: 2 },
      { text: "أحاول معالجة الموضوع تدريجياً مع مراقبة التحسن", value: 1 },
      { text: "أشعر بالحيرة وأفضل تجنب المواجهة المباشرة", value: 0 },
    ],
  },
]

let currentQuestion = 0
let score = 0
const userData = { name: "", phone: "", email: "" }
const userAnswers = []

// تهيئة الصفحة
window.onload = () => {
  document.getElementById("quizContent").style.display = "none"
  document.getElementById("thankYouMessage").style.display = "none"
  document.getElementById("totalQuestions").textContent = questions.length

  // معالج إرسال النموذج
  document.getElementById("userForm").onsubmit = (e) => {
    e.preventDefault()

    // جمع بيانات المستخدم
    userData.name = document.getElementById("userName").value.trim()
    userData.phone = document.getElementById("userPhone").value.trim()
    userData.email = document.getElementById("userEmail").value.trim()

    // التحقق من صحة البيانات
    if (!userData.name || !userData.phone || !userData.email) {
      alert("يرجى ملء جميع الحقول المطلوبة")
      return
    }

    // إخفاء النموذج وعرض الاختبار
    document.getElementById("userForm").style.display = "none"
    document.getElementById("quizContent").style.display = "block"
    showQuestion()
  }
}

// عرض السؤال الحالي
function showQuestion() {
  const q = questions[currentQuestion]
  document.getElementById("question").textContent = q.text
  document.getElementById("questionNumber").textContent = currentQuestion + 1

  // إنشاء أزرار الإجابات
  const answersDiv = document.getElementById("answers")
  answersDiv.innerHTML = ""

  q.answers.forEach((ans, idx) => {
    const btn = document.createElement("button")
    btn.className = "answer-btn"
    btn.textContent = ans.text
    btn.onclick = () => handleAnswer(ans.value, ans.text)
    answersDiv.appendChild(btn)
  })

  // تحديث شريط التقدم
  updateProgress()
}

// تحديث شريط التقدم
function updateProgress() {
  const progressPercent = (currentQuestion / questions.length) * 100
  document.getElementById("progress").style.width = progressPercent + "%"
}

// معالجة اختيار الإجابة
function handleAnswer(value, answerText) {
  score += value
  userAnswers.push({
    question: questions[currentQuestion].text,
    answer: answerText,
    score: value,
  })

  // تعطيل جميع الأزرار
  const buttons = document.querySelectorAll(".answer-btn")
  buttons.forEach((btn) => {
    btn.disabled = true
    btn.style.opacity = "0.6"
  })

  // تأثير الانتقال
  setTimeout(() => {
    document.getElementById("question").classList.add("fade-out")
    document.getElementById("answers").classList.add("fade-out")

    setTimeout(() => {
      currentQuestion++
      if (currentQuestion < questions.length) {
        showQuestion()
        document.getElementById("question").classList.remove("fade-out")
        document.getElementById("answers").classList.remove("fade-out")
        document.getElementById("question").classList.add("fade-in")
        document.getElementById("answers").classList.add("fade-in")
      } else {
        showThankYou()
        sendResultByEmail()
      }
    }, 500)
  }, 1000)
}

// عرض رسالة الشكر
function showThankYou() {
  document.getElementById("progress").style.width = "100%"
  document.getElementById("quizContent").style.display = "none"
  document.getElementById("thankYouMessage").style.display = "block"
}

// إرسال النتيجة بالبريد الإلكتروني
function sendResultByEmail() {
  const serviceID = "service_pov79vw"
  const templateID = "template_np0b5yp"
  const userID = "KShcuTLxPbI-B4cZ3"

  // حساب النسبة المئوية
  const maxScore = questions.length * 3
  const percentage = Math.round((score / maxScore) * 100)

  // تحليل مفصل للشخصية
  const personalityAnalysis = generatePersonalityAnalysis(percentage)

  // تحليل نقاط القوة والضعف
  const strengthsWeaknesses = analyzeStrengthsWeaknesses()

  // التوصيات المهنية
  const careerRecommendations = generateCareerRecommendations(percentage)

  // تحليل الإجابات بالتفصيل
  const detailedAnswers = generateDetailedAnswers()

  // إنشاء الرسالة المفصلة مع تحسين التنسيق
  const detailedMessage = `
  <div style="direction: rtl; text-align: right; font-family: 'Segoe UI', Tahoma, Arial, sans-serif; font-size: 15px; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
    
    <div style="background-color: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px;">
      <h1 style="color: #2c3e50; font-size: 22px; margin-bottom: 15px; text-align: center; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
        تقرير تحليل شخصية الأستاذ ${userData.name} المهنية
      </h1>
    </div>

    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px;">
      <h2 style="color: #34495e; font-size: 18px; margin-bottom: 12px; border-right: 3px solid #e74c3c; padding-right: 12px;">
        البيانات الشخصية
      </h2>
      <div style="background-color: #f8f9fa; padding: 12px; border-radius: 6px;">
        <p style="margin: 5px 0; font-size: 15px;">• الاسم: ${userData.name}</p>
        <p style="margin: 5px 0; font-size: 15px;">• الهاتف: ${userData.phone}</p>
        <p style="margin: 5px 0; font-size: 15px;">• البريد الإلكتروني: ${userData.email}</p>
        <p style="margin: 5px 0; font-size: 15px;">• تاريخ التقييم: ${new Date().toLocaleDateString("ar-EG")}</p>
      </div>
    </div>

    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px;">
      <h2 style="color: #34495e; font-size: 18px; margin-bottom: 12px; border-right: 3px solid #f39c12; padding-right: 12px;">
        النتيجة العامة
      </h2>
      <div style="background-color: #fff3cd; padding: 12px; border-radius: 6px;">
        <p style="margin: 5px 0; font-size: 16px; font-weight: bold;">• النقاط المحققة: ${score} من ${maxScore}</p>
        <p style="margin: 5px 0; font-size: 16px; font-weight: bold; color: #e67e22;">• النسبة المئوية: ${percentage}%</p>
        <p style="margin: 5px 0; font-size: 16px; font-weight: bold; color: #27ae60;">• مستوى الأداء: ${getPerformanceLevel(percentage)}</p>
      </div>
    </div>

    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px;">
      <h2 style="color: #34495e; font-size: 18px; margin-bottom: 12px; border-right: 3px solid #9b59b6; padding-right: 12px;">
        تحليل شخصية الأستاذ ${userData.name} المهنية
      </h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px;">
        ${personalityAnalysis}
      </div>
    </div>

    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px;">
      <h2 style="color: #34495e; font-size: 18px; margin-bottom: 12px; border-right: 3px solid #1abc9c; padding-right: 12px;">
        نقاط القوة ومجالات التطوير للأستاذ ${userData.name}
      </h2>
      <div style="background-color: #e8f8f5; padding: 15px; border-radius: 6px;">
        ${strengthsWeaknesses}
      </div>
    </div>

    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px;">
      <h2 style="color: #34495e; font-size: 18px; margin-bottom: 12px; border-right: 3px solid #e74c3c; padding-right: 12px;">
        التوصيات المهنية للأستاذ ${userData.name}
      </h2>
      <div style="background-color: #fdedec; padding: 15px; border-radius: 6px;">
        ${careerRecommendations}
      </div>
    </div>

    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px;">
      <h2 style="color: #34495e; font-size: 18px; margin-bottom: 12px; border-right: 3px solid #3498db; padding-right: 12px;">
        تحليل إجابات الأستاذ ${userData.name} التفصيلي
      </h2>
      <div style="background-color: #ebf3fd; padding: 15px; border-radius: 6px;">
        ${detailedAnswers}
      </div>
    </div>

    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px;">
      <h2 style="color: #34495e; font-size: 18px; margin-bottom: 12px; border-right: 3px solid #f39c12; padding-right: 12px;">
        خطة التطوير المقترحة للأستاذ ${userData.name}
      </h2>
      <div style="background-color: #fef9e7; padding: 15px; border-radius: 6px;">
        ${generateDevelopmentPlan(percentage)}
      </div>
    </div>

    <div style="background-color: #2c3e50; color: #ffffff; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;">
      <p style="margin: 3px 0; font-size: 14px;">تم إنشاء هذا التقرير في: ${new Date().toLocaleString("ar-EG")}</p>
    </div>

  </div>
`

  // إعداد معاملات الإرسال
  const templateParams = {
    to_email: "banoobnagy@gmail.com",
    message: detailedMessage,
    name: userData.name,
    phone: userData.phone,
    email: userData.email,
    score: score,
    maxScore: maxScore,
    percentage: percentage,
  }

  // إرسال البريد الإلكتروني باستخدام EmailJS
  if (window.emailjs) {
    window.emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("تم إرسال التقرير بنجاح:", response.status, response.text)
      },
      (error) => {
        console.error("خطأ في إرسال التقرير:", error)
      },
    )
  }
}

// توليد تحليل الشخصية المفصل
function generatePersonalityAnalysis(percentage) {
  const name = userData.name
  if (percentage >= 85) {
    return `
      <p style="margin: 8px 0; font-size: 15px;">• يتمتع الأستاذ ${name} بقدرات قيادية استثنائية ومهارات إدارية متقدمة</p>
      <p style="margin: 8px 0; font-size: 15px;">• لديه القدرة على اتخاذ القرارات الصعبة تحت الضغط</p>
      <p style="margin: 8px 0; font-size: 15px;">• يمتلك مهارات تواصل متميزة وقدرة على إلهام الآخرين</p>
      <p style="margin: 8px 0; font-size: 15px;">• مناسب للمناصب القيادية العليا والمشاريع الاستراتيجية</p>
      <p style="margin: 8px 0; font-size: 15px;">• يظهر مرونة عالية في التعامل مع التحديات المعقدة</p>
    `
  } else if (percentage >= 70) {
    return `
      <p style="margin: 8px 0; font-size: 15px;">• يمتلك الأستاذ ${name} مهارات مهنية قوية ومتوازنة</p>
      <p style="margin: 8px 0; font-size: 15px;">• لديه قدرة جيدة على التعامل مع التحديات وحل المشكلات</p>
      <p style="margin: 8px 0; font-size: 15px;">• يتميز بالانضباط والالتزام في العمل</p>
      <p style="margin: 8px 0; font-size: 15px;">• قادر على التكيف مع البيئات المهنية المختلفة</p>
      <p style="margin: 8px 0; font-size: 15px;">• مناسب للأدوار التخصصية والإشرافية</p>
    `
  } else if (percentage >= 55) {
    return `
      <p style="margin: 8px 0; font-size: 15px;">• يمتلك الأستاذ ${name} أساساً جيداً من المهارات المهنية</p>
      <p style="margin: 8px 0; font-size: 15px;">• لديه قدرة معقولة على التعامل مع المسؤوليات</p>
      <p style="margin: 8px 0; font-size: 15px;">• يحتاج لتعزيز بعض المهارات الأساسية</p>
      <p style="margin: 8px 0; font-size: 15px;">• مناسب للأدوار التنفيذية مع التوجيه المناسب</p>
      <p style="margin: 8px 0; font-size: 15px;">• لديه إمكانية جيدة للتطوير والنمو المهني</p>
    `
  } else {
    return `
      <p style="margin: 8px 0; font-size: 15px;">• يحتاج الأستاذ ${name} إلى تطوير المهارات الأساسية للعمل المهني</p>
      <p style="margin: 8px 0; font-size: 15px;">• يُنصح بالتركيز على بناء الثقة بالنفس</p>
      <p style="margin: 8px 0; font-size: 15px;">• يحتاج لتعلم مهارات إدارة الوقت والتواصل</p>
      <p style="margin: 8px 0; font-size: 15px;">• مع التدريب المناسب، يمكنه تحقيق تطور ملحوظ</p>
      <p style="margin: 8px 0; font-size: 15px;">• مناسب للأدوار التدريبية والمساعدة</p>
    `
  }
}

// تحليل نقاط القوة والضعف
function analyzeStrengthsWeaknesses() {
  const strengths = []
  const improvements = []
  const weaknesses = []

  // تحليل كل مجال بناءً على الإجابات
  const categories = [
    { name: "إدارة المشاريع المعقدة", index: 0 },
    { name: "اتخاذ القرارات الاستراتيجية", index: 1 },
    { name: "قيادة الفرق المتنوعة", index: 2 },
    { name: "إدارة العلاقات مع العملاء", index: 3 },
    { name: "إدارة الأزمات", index: 4 },
    { name: "التكيف مع التغيير", index: 5 },
    { name: "التعامل مع النقد", index: 6 },
    { name: "إدارة الأولويات", index: 7 },
    { name: "التنسيق بين الأقسام", index: 8 },
    { name: "إدارة الأداء", index: 9 },
  ]

  categories.forEach((category) => {
    const answerScore = userAnswers[category.index]?.score || 0
    if (answerScore >= 2) {
      strengths.push(`• ${category.name}`)
    } else if (answerScore === 1) {
      improvements.push(`• ${category.name}`)
    } else {
      weaknesses.push(`• ${category.name}`)
    }
  })

  let result = ""

  if (strengths.length > 0) {
    result += `<p style="margin: 10px 0; font-size: 16px; font-weight: bold; color: #27ae60;">نقاط قوتك:</p>`
    strengths.forEach((strength) => {
      result += `<p style="margin: 5px 0; font-size: 15px; color: #27ae60;">${strength}</p>`
    })
  }

  if (improvements.length > 0) {
    result += `<p style="margin: 10px 0; font-size: 16px; font-weight: bold; color: #f39c12;">مجالات التحسين:</p>`
    improvements.forEach((improvement) => {
      result += `<p style="margin: 5px 0; font-size: 15px; color: #f39c12;">${improvement}</p>`
    })
  }

  if (weaknesses.length > 0) {
    result += `<p style="margin: 10px 0; font-size: 16px; font-weight: bold; color: #e74c3c;">مجالات التطوير:</p>`
    weaknesses.forEach((weakness) => {
      result += `<p style="margin: 5px 0; font-size: 15px; color: #e74c3c;">${weakness}</p>`
    })
  }

  return result || `<p style="margin: 8px 0; font-size: 15px;">• تحتاج لتقييم أكثر تفصيلاً</p>`
}

// توليد التوصيات المهنية
function generateCareerRecommendations(percentage) {
  const name = userData.name
  if (percentage >= 85) {
    return `
      <p style="margin: 10px 0; font-size: 16px; font-weight: bold;">المسارات المهنية المناسبة للأستاذ ${name}:</p>
      <p style="margin: 5px 0; font-size: 15px;">• المناصب القيادية العليا (مدير عام، نائب رئيس)</p>
      <p style="margin: 5px 0; font-size: 15px;">• إدارة المشاريع الاستراتيجية الكبرى</p>
      <p style="margin: 5px 0; font-size: 15px;">• الاستشارات الإدارية والتطوير التنظيمي</p>
      <p style="margin: 5px 0; font-size: 15px;">• ريادة الأعمال وتأسيس الشركات</p>
      
      <p style="margin: 10px 0; font-size: 16px; font-weight: bold;">فرص التطوير المقترحة:</p>
      <p style="margin: 5px 0; font-size: 15px;">• برامج القيادة التنفيذية المتقدمة</p>
      <p style="margin: 5px 0; font-size: 15px;">• ماجستير إدارة الأعمال التنفيذي</p>
      <p style="margin: 5px 0; font-size: 15px;">• شهادات إدارة المشاريع الدولية</p>
    `
  } else if (percentage >= 70) {
    return `
      <p style="margin: 10px 0; font-size: 16px; font-weight: bold;">المسارات المهنية المناسبة للأستاذ ${name}:</p>
      <p style="margin: 5px 0; font-size: 15px;">• المناصب الإشرافية والتنسيقية</p>
      <p style="margin: 5px 0; font-size: 15px;">• إدارة الفرق والأقسام المتوسطة</p>
      <p style="margin: 5px 0; font-size: 15px;">• التخصصات الفنية المتقدمة</p>
      <p style="margin: 5px 0; font-size: 15px;">• مسؤول التطوير والتحسين</p>
      
      <p style="margin: 10px 0; font-size: 16px; font-weight: bold;">فرص التطوير المقترحة:</p>
      <p style="margin: 5px 0; font-size: 15px;">• دورات القيادة والإدارة المتوسطة</p>
      <p style="margin: 5px 0; font-size: 15px;">• تطوير المهارات الفنية المتخصصة</p>
      <p style="margin: 5px 0; font-size: 15px;">• شهادات مهنية في مجال التخصص</p>
    `
  } else if (percentage >= 55) {
    return `
      <p style="margin: 10px 0; font-size: 16px; font-weight: bold;">المسارات المهنية المناسبة للأستاذ ${name}:</p>
      <p style="margin: 5px 0; font-size: 15px;">• الأدوار التنفيذية والتشغيلية</p>
      <p style="margin: 5px 0; font-size: 15px;">• المساعدة الإدارية والتنسيق</p>
      <p style="margin: 5px 0; font-size: 15px;">• خدمة العملاء والمبيعات</p>
      <p style="margin: 5px 0; font-size: 15px;">• الدعم الفني والتقني</p>
      
      <p style="margin: 10px 0; font-size: 16px; font-weight: bold;">فرص التطوير المقترحة:</p>
      <p style="margin: 5px 0; font-size: 15px;">• دورات المهارات الأساسية</p>
      <p style="margin: 5px 0; font-size: 15px;">• تطوير مهارات التواصل</p>
      <p style="margin: 5px 0; font-size: 15px;">• تعلم أدوات التنظيم والإدارة</p>
    `
  } else {
    return `
      <p style="margin: 10px 0; font-size: 16px; font-weight: bold;">المسارات المهنية المناسبة للأستاذ ${name}:</p>
      <p style="margin: 5px 0; font-size: 15px;">• الأدوار التدريبية والتعليمية</p>
      <p style="margin: 5px 0; font-size: 15px;">• المساعدة والدعم الإداري</p>
      <p style="margin: 5px 0; font-size: 15px;">• العمل تحت الإشراف المباشر</p>
      <p style="margin: 5px 0; font-size: 15px;">• الأعمال الروتينية والمحددة</p>
      
      <p style="margin: 10px 0; font-size: 16px; font-weight: bold;">فرص التطوير المقترحة:</p>
      <p style="margin: 5px 0; font-size: 15px;">• برامج التدريب الأساسية</p>
      <p style="margin: 5px 0; font-size: 15px;">• دورات الثقة بالنفس</p>
      <p style="margin: 5px 0; font-size: 15px;">• تطوير المهارات الشخصية</p>
    `
  }
}

// توليد تحليل الإجابات المفصل
function generateDetailedAnswers() {
  let analysis = ""
  userAnswers.forEach((answer, index) => {
    const questionNum = index + 1
    const scoreText = getScoreText(answer.score)
    analysis += `
      <div style="margin: 10px 0; padding: 10px; background-color: #f8f9fa; border-radius: 5px;">
        <p style="margin: 5px 0; font-size: 14px; font-weight: bold;">السؤال ${questionNum}:</p>
        <p style="margin: 5px 0; font-size: 14px;">${answer.question}</p>
        <p style="margin: 5px 0; font-size: 14px; color: #2c3e50;">إجابتك: ${answer.answer}</p>
        <p style="margin: 5px 0; font-size: 14px; color: #e67e22;">التقييم: ${scoreText} (${answer.score}/3)</p>
      </div>
    `
  })
  return analysis
}

// الحصول على نص التقييم
function getScoreText(score) {
  switch (score) {
    case 3:
      return "ممتاز"
    case 2:
      return "جيد"
    case 1:
      return "مقبول"
    case 0:
      return "يحتاج تحسين"
    default:
      return "غير محدد"
  }
}

// الحصول على مستوى الأداء
function getPerformanceLevel(percentage) {
  if (percentage >= 85) return "ممتاز"
  if (percentage >= 70) return "جيد جداً"
  if (percentage >= 55) return "جيد"
  if (percentage >= 40) return "مقبول"
  return "يحتاج تحسين"
}

// توليد خطة التطوير
function generateDevelopmentPlan(percentage) {
  const name = userData.name
  if (percentage >= 85) {
    return `
      <p style="margin: 5px 0; font-size: 15px;">• يُنصح الأستاذ ${name} بالمحافظة على مستوى الأداء العالي والتميز</p>
      <p style="margin: 5px 0; font-size: 15px;">• تطوير مهارات القيادة الاستراتيجية المتقدمة</p>
      <p style="margin: 5px 0; font-size: 15px;">• بناء شبكة علاقات مهنية قوية ومؤثرة</p>
      <p style="margin: 5px 0; font-size: 15px;">• المشاركة في المؤتمرات والفعاليات القيادية</p>
      <p style="margin: 5px 0; font-size: 15px;">• تطوير مهارات التوجيه والإرشاد للآخرين</p>
    `
  } else if (percentage >= 70) {
    return `
      <p style="margin: 5px 0; font-size: 15px;">• يُنصح الأستاذ ${name} بتعزيز مهارات التواصل والعرض التقديمي</p>
      <p style="margin: 5px 0; font-size: 15px;">• تطوير القدرة على اتخاذ القرارات المعقدة</p>
      <p style="margin: 5px 0; font-size: 15px;">• تعلم أدوات إدارة المشاريع المتقدمة</p>
      <p style="margin: 5px 0; font-size: 15px;">• تحسين مهارات إدارة الوقت والأولويات</p>
      <p style="margin: 5px 0; font-size: 15px;">• المشاركة في دورات القيادة المتوسطة</p>
    `
  } else if (percentage >= 55) {
    return `
      <p style="margin: 5px 0; font-size: 15px;">• يُنصح الأستاذ ${name} بتطوير مهارات التنظيم والترتيب الشخصي</p>
      <p style="margin: 5px 0; font-size: 15px;">• تحسين القدرة على التعامل مع ضغوط العمل</p>
      <p style="margin: 5px 0; font-size: 15px;">• تعلم مهارات التواصل الفعال والواضح</p>
      <p style="margin: 5px 0; font-size: 15px;">• تطوير الثقة بالنفس والمبادرة</p>
      <p style="margin: 5px 0; font-size: 15px;">• الممارسة العملية مع التوجيه المناسب</p>
    `
  } else {
    return `
      <p style="margin: 5px 0; font-size: 15px;">• يُنصح الأستاذ ${name} بالبدء بدورات المهارات الأساسية للعمل</p>
      <p style="margin: 5px 0; font-size: 15px;">• تطوير مهارات إدارة الوقت الشخصي</p>
      <p style="margin: 5px 0; font-size: 15px;">• تعلم أساسيات التواصل المهني</p>
      <p style="margin: 5px 0; font-size: 15px;">• العمل مع مرشد أو مدرب متخصص</p>
      <p style="margin: 5px 0; font-size: 15px;">• الممارسة العملية تحت الإشراف المباشر</p>
    `
  }
}

// تهيئة إضافية عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  // إضافة تأثيرات بصرية للنماذج
  const inputs = document.querySelectorAll(".custom-input")
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused")
    })

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused")
    })
  })
})
