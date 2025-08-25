<script>
// --- V8: Final Monetization & Engagement Script ---
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Dynamic Quote Generator ---
    const quotes = [
        { text: "العلم هو الترياق المضاد للتسمم بالجهل والخرافات.", author: "ابن سينا" },
        { text: "النجاح ليس نهاية، والفشل ليس قاتلاً: إنما الشجاعة لمواصلة المسير هي التي تحسب.", author: "ونستون تشرشل" },
        { text: "اطلبوا العلم من المهد إلى اللحد.", author: "حديث شريف" },
        { text: "العقل ليس وعاءً يجب ملؤه، بل ناراً يجب إيقادها.", author: "بلوتارخ" },
        { text: "التعليم هو أقوى سلاح يمكنك استخدامه لتغيير العالم.", author: "نيلسون مانديلا" },
        { text: "لا تخش الفشل، بل اخش ألا تحاول.", author: "روي تي بينيت" },
        { text: "من يفتح باب مدرسة يغلق باب سجن.", author: "فيكتور هوجو" },
        { text: "الاستثمار في المعرفة يحقق أفضل الفوائد.", author: "بنجامين فرانكلين" },
        { text: "العبقرية هي واحد بالمئة إلهام وتسعة وتسعون بالمئة عرق.", author: "توماس إديسون" },
        { text: "الطريقة الوحيدة لعمل أشياء عظيمة هي أن تحب ما تفعله.", author: "ستيف جوبز" },
        { text: "إن العقل الذي يتوسع بفكرة جديدة لا يعود أبداً إلى أبعاده الأصلية.", author: "أوليفر و Wendell Holmes" },
        { text: "لا يهم كم تسير ببطء طالما أنك لا تتوقف.", author: "كونفوشيوس" },
        { text: "التعليم جواز السفر إلى المستقبل.", author: "مالكوم إكس" },
        { text: "إذا أردت أن ترفع نفسك، ارفع شخصاً آخر.", author: "بوكر تي واشنطن" },
        { text: "أفضل وقت لزراعة شجرة كان قبل 20 عامًا. ثاني أفضل وقت هو الآن.", author: "مثل صيني" },
        { text: "التحديات هي ما تجعل الحياة مثيرة للاهتمام، والتغلب عليها هو ما يجعل الحياة ذات معنى.", author: "جوشوا ج. مارين" },
        { text: "أنا لم أفشل. لقد وجدت 10000 طريقة لا تعمل.", author: "توماس إديسون" },
        { text: "آمن بأنك تستطيع، وستكون في منتصف الطريق.", author: "ثيودور روزفلت" },
        { text: "لا تنتظر الفرصة، اصنعها.", author: "جورج برنارد شو" },
        { text: "الفرق بين العادي والاستثنائي هو تلك اللمسة الإضافية الصغيرة.", author: "جيمي جونسون" },
        { text: "الرجل الذي لا يقرأ ليس له ميزة على الرجل الذي لا يستطيع القراءة.", author: "مارك توين" },
        { text: "المعرفة قوة.", author: "فرانسيس بيكون" },
        { text: "التعلم لا يرهق العقل أبداً.", author: "ليوناردو دافنشي" },
        { text: "العمل الجاد يهزم الموهبة عندما لا تعمل الموهبة بجد.", author: "تيم نوتكي" },
        { text: "كن التغيير الذي تريد أن تراه في العالم.", author: "المهاتما غاندي" },
        { text: "المستقبل ملك لأولئك الذين يؤمنون بجمال أحلامهم.", author: "إليانور روزفلت" },
        { text: "لا تدع ما لا تستطيع فعله يتعارض مع ما تستطيع فعله.", author: "جون وودن" },
        { text: "السر في المضي قدمًا هو البدء.", author: "مارك توين" },
        { text: "كلما قرأت أكثر، كلما عرفت أشياء أكثر. كلما تعلمت أكثر، كلما ذهبت إلى أماكن أكثر.", author: "دكتور سوس" },
        { text: "التعليم هو أساس كل شيء.", author: "مثل" },
        { text: "الهدف من التعليم هو استبدال العقل الفارغ بعقل منفتح.", author: "مالكولم فوربس" },
        { text: "لا يمكنك استنفاد الإبداع. كلما استخدمت أكثر، كلما امتلكت أكثر.", author: "مايا أنجيلو" },
        { text: "الأمر لا يتعلق بمدى سوء رغبتك فيه. إنه يتعلق بمدى صعوبة استعدادك للعمل من أجله.", author: "مجهول" },
        { text: "إذا سمعت صوتًا بداخلك يقول 'لا يمكنك الرسم'، فبكل الوسائل ارسم، وسيصمت هذا الصوت.", author: "فينسنت فان جوخ" },
        { text: "ابدأ من حيث أنت. استخدم ما لديك. افعل ما تستطيع.", author: "آرثر آش" },
        { text: "التعليم ليس استعدادًا للحياة؛ التعليم هو الحياة نفسها.", author: "جون ديوي" },
        { text: "الخبراء في أي شيء كانوا ذات يوم مبتدئين.", author: "هيلين هايز" },
        { text: "لا يوجد مصعد للنجاح، عليك أن تصعد الدرج.", author: "زيج زيجلار" },
        { text: "لا تتوقف عن التعلم لأن الحياة لا تتوقف عن التعليم.", author: "مجهول" },
        { text: "الشيء الجميل في التعلم هو أن لا أحد يستطيع أن يأخذه منك.", author: "بي. بي. كينج" },
        { text: "المثابرة ليست سباقًا طويلاً؛ إنها العديد من السباقات القصيرة واحدًا تلو الآخر.", author: "والتر إليوت" },
        { text: "الدافع هو ما يجعلك تبدأ. العادة هي ما تبقيك مستمراً.", author: "جيم رون" },
        { text: "النجاح هو مجموع الجهود الصغيرة التي تتكرر يومًا بعد يوم.", author: "روبرت كولير" },
        { text: "كن طالبًا ما دمت على قيد الحياة.", author: "هنري ل. دوهرتي" },
        { text: "التعليم هو القدرة على الاستماع إلى أي شيء تقريبًا دون أن تفقد أعصابك أو ثقتك بنفسك.", author: "روبرت فروست" },
        { text: "التعلم كنز سيتبع صاحبه في كل مكان.", author: "مثل صيني" },
        { text: "لا يوجد بديل للعمل الجاد.", author: "توماس إديسون" },
        { text: "الأحلام لا تعمل إلا إذا فعلت أنت.", author: "جون سي ماكسويل" },
        { text: "اجعل كل يوم تحفة فنية.", author: "جون وودن" },
        { text: "إذا كانت الفرصة لا تطرق، فابنِ بابًا.", author: "ميلتون بيرل" },
        { text: "العلم بلا فضيلة سيف في يد مجنون.", author: "مثل عربي" }
    ];
    const quoteBox = document.getElementById('sp-quote-box');
    if (quoteBox) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteBox.querySelector('.quote-text').textContent = `"${randomQuote.text}"`;
        quoteBox.querySelector('.quote-author').textContent = `- ${randomQuote.author} -`;
    }

    // --- 2. Automatic Topic Counter ---
    const allToggles = document.querySelectorAll('.sp-semester-toggle');
    allToggles.forEach(toggle => {
        const topicList = toggle.nextElementSibling;
        if (topicList && topicList.classList.contains('sp-topic-list')) {
            const topicCount = topicList.getElementsByTagName('a').length;
            const countSpan = toggle.querySelector('.sp-topic-count');
            if (countSpan) {
                countSpan.textContent = topicCount > 0 ? `${topicCount} مواضيع` : "قريباً";
            }
        }
    });

    // --- 3. Main Accordion Functionality ---
    const spMainAccordions = document.querySelectorAll('.sp-accordion');
    spMainAccordions.forEach(accordion => {
        const header = accordion.querySelector('.sp-subject-header');
        header.addEventListener('click', () => {
            const isActive = accordion.classList.contains('active');
            spMainAccordions.forEach(acc => {
                if (acc !== accordion) {
                    acc.classList.remove('active');
                    acc.querySelector('.sp-panel').style.maxHeight = null;
                    acc.querySelectorAll('.sp-semester-toggle.active').forEach(t => {
                        t.classList.remove('active');
                        t.nextElementSibling.style.maxHeight = null;
                    });
                }
            });
            accordion.classList.toggle('active');
            const panel = accordion.querySelector('.sp-panel');
            if (accordion.classList.contains('active')) {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } else {
                panel.style.maxHeight = null;
            }
        });
    });

    // --- 4. Sub-Accordion Functionality ---
    const spSemesterToggles = document.querySelectorAll('.sp-semester-toggle');
    spSemesterToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const topicList = toggle.nextElementSibling;
            const parentPanel = toggle.closest('.sp-panel');
            toggle.classList.toggle('active');
            if (topicList.style.maxHeight) {
                topicList.style.maxHeight = null;
            } else {
                topicList.style.maxHeight = topicList.scrollHeight + "px";
            }
            setTimeout(() => {
                if(parentPanel.style.maxHeight !== "0px"){
                    parentPanel.style.maxHeight = parentPanel.scrollHeight + "px";
                }
            }, 500);
        });
    });
    
    // --- 5. Interstitial Ad Logic ---
    const interstitial = document.getElementById('sp-interstitial-backdrop');
    const closeBtn = document.getElementById('sp-interstitial-close-btn');
    const timerDisplay = document.getElementById('sp-interstitial-timer');
    let adShown = false;

    function showInterstitial() {
        if (!interstitial || adShown) return;
        adShown = true; // Ensure it only shows once per page load
        interstitial.style.display = 'flex';
        let timeLeft = 30; // 30 seconds timer
        timerDisplay.textContent = `يمكنك إغلاق الإعلان بعد ${timeLeft} ثانية`;
        
        const countdown = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `يمكنك إغلاق الإعلان بعد ${timeLeft} ثانية`;
            if (timeLeft <= 0) {
                clearInterval(countdown);
                timerDisplay.style.display = 'none';
                closeBtn.style.display = 'inline-block';
            }
        }, 1000);
    }

    // Trigger ad after the user scrolls 50% of the page
    window.addEventListener('scroll', function() {
        const scrollPercentage = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage > 50) {
            showInterstitial();
        }
    }, { once: true }); // {once: true} ensures the event listener is removed after it runs once

    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            interstitial.style.display = 'none';
        });
    }

    // --- 6. Site-Wide Progress Bar Script (Merged) ---
    const siteProgressBar = document.getElementById('site-progress-bar');
    if(siteProgressBar) {
        window.addEventListener('scroll', () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalHeight) * 100;
            siteProgressBar.style.width = progress + '%';
        });
    }

});
</script>
