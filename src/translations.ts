export type Language = 'en' | 'pa';

export interface Translations {
  nav: {
    howItWorks: string;
    features: string;
    forParents: string;
    download: string;
    putNitnemFirst: string;
    languageName: string;
    switchLang: string;
    privacyLegal: string;
  };
  hero: {
    eyebrow: string;
    headlinePart1: string;
    waheguru: string;
    headlinePart2: string;
    subheading: string;
    solutionTitle: string;
    solutionDesc: string;
    privacyReassurance: string;
    ctaButton: string;
    freeToBegin: string;
    availableStores: string;
    interactiveHint: string;
  };
  phone: {
    title: string;
    windowLabel: string;
    routineProgress: string;
    completedOf: (done: number, total: number, pct: number) => string;
    banisRemaining: (count: number) => string;
    allCompleted: string;
    appsRestricted: string;
    appsUnlocked: string;
    tapPrompt: string;
    reset: string;
    requiredBanis: string;
    justNow: string;
    appsBlockedTitle: string;
    appsUnlockedTitle: string;
    readyForUse: string;
    pendingCount: (count: number) => string;
    greeting: string;
    date: string;
    allGoalsDone: string;
    goalsPending: (done: number, total: number) => string;
    streaksTitle: string;
    seeAll: string;
    dayStreak: string;
    longestStreak: string;
    daysCompleted: string;
    todaysProgress: string;
    readToday: string;
    dailyHukamnama: string;
    angLabel: string;
    hukamnamaGurmukhi: string;
    hukamnamaTranslation: string;
    simranMala: string;
    simranBeadsDone: string;
    morningNitnemGoal: string;
    morningNitnemBanis: string;
    eveningNitnemGoal: string;
    eveningNitnemSub: string;
    nightNitnemGoal: string;
    nightNitnemSub: string;
    continueReading: string;
    sggsTitle: string;
    angProgress: string;
    pctRead: string;
    continueFromAng: string;
    goToHomeScreen: string;
    readButton: string;
    shareButton: string;
    bottomNav: {
      home: string;
      simran: string;
      sggs: string;
      progress: string;
      settings: string;
    };
    banis: {
      japji: { name: string; punjabi: string };
      jaap: { name: string; punjabi: string };
      tavprasad: { name: string; punjabi: string };
      chaupai: { name: string; punjabi: string };
      anand: { name: string; punjabi: string };
    };
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stepCount: (current: number, total: number) => string;
    deviceNote: string;
    steps: {
      step1Title: string;
      step1Desc: string;
      step1Details: string;
      step2Title: string;
      step2Desc: string;
      step2Details: string;
      step3Title: string;
      step3Desc: string;
      step3Details: string;
    };
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Headline: string;
    card1Desc: string;
    card1Badge: string;
    card2Title: string;
    card2Headline: string;
    card2Desc: string;
    card2Badge: string;
    card3Title: string;
    card3Headline: string;
    card3Desc: string;
    card3Badge: string;
    card4Title: string;
    card4Headline: string;
    card4Desc: string;
    card4Badge: string;
    builtForSimplicity: string;
    learnMore: string;
  };
  parents: {
    eyebrow: string;
    title: string;
    description: string;
    imageCaption: string;
    childProfileLabel: string;
    supervisedMode: string;
    pinProtected: string;
    pendingBani: string;
    pendingStatus: string;
    cardFooter: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    deviceNote: string;
  };
  finalCta: {
    eyebrow: string;
    headline: string;
    supporting: string;
    ctaButton: string;
    downloadDirectly: string;
    reassurance: string;
  };
  footer: {
    tagline: string;
    fatehGreeting: string;
    navHeading: string;
    legalHeading: string;
    privacyPolicy: string;
    termsOfUse: string;
    childSafety: string;
    contactUs: string;
    rightsReserved: string;
    configureLinks: string;
  };
  contactModal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    directRecipient: string;
    sending: string;
    sendButton: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
    close: string;
  };
  waitlist: {
    badgeLaunchingSoon: string;
    title: string;
    description: string;
    iosBadge: string;
    androidBadge: string;
    emailLabel: string;
    emailPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    platformLabel: string;
    submitButton: string;
    submittingButton: string;
    noSpamNotice: string;
    successTitle: string;
    successMessage: (email: string) => string;
    successSub: string;
    closeButton: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      howItWorks: 'How It Works',
      features: 'Key Features',
      forParents: 'For Parents',
      download: 'Download',
      putNitnemFirst: 'Put Nitnem First',
      languageName: 'English',
      switchLang: 'ਪੰਜਾਬੀ',
      privacyLegal: 'Privacy & Legal',
    },
    hero: {
      eyebrow: 'Daily Spiritual Discipline · Sikh Nitnem, Bani & Path Habit',
      headlinePart1: 'Your phone is taking you away from ',
      waheguru: 'Waheguru',
      headlinePart2: '.',
      subheading: '“You open your phone for five minutes, and suddenly an hour is gone. Social media, reels and games distract you while your Nitnem gets postponed.”',
      solutionTitle: 'Block distractions. Complete your Nitnem. Put Waheguru first.',
      solutionDesc: 'Nitnem Tracker helps users build discipline by restricting selected distracting apps until they complete their required daily Nitnem prayers and Gurbani Path.',
      privacyReassurance: 'Respectful, private on-device restrictions using standard mobile screen time controls.',
      ctaButton: 'Put Nitnem First',
      freeToBegin: 'Free to begin your daily routine',
      availableStores: 'Available for iOS & Android',
      interactiveHint: 'Interactive preview · Tap goals to test live progress and app locking',
    },
    phone: {
      title: 'Morning Nitnem',
      windowLabel: 'Window: 4:00 AM – 9:00 AM',
      routineProgress: 'Routine Progress',
      completedOf: (done, total, pct) => `${done} of ${total} Banis (${pct}%)`,
      banisRemaining: (count) => `${count} Banis remaining`,
      allCompleted: 'All morning prayers completed',
      appsRestricted: 'Apps Restricted',
      appsUnlocked: 'Apps Unlocked',
      tapPrompt: 'Tap prayers to test app unlock',
      reset: 'Reset',
      requiredBanis: 'Required Morning Banis',
      justNow: 'Just now',
      appsBlockedTitle: 'Distracting Apps Restricted',
      appsUnlockedTitle: 'Selected Apps Unlocked',
      readyForUse: 'Ready for use',
      pendingCount: (count) => `Pending ${count} Banis`,
      greeting: 'Waheguru Ji 🙏',
      date: 'Monday, 26 October 2026',
      allGoalsDone: 'All goals done · your apps are unlocked',
      goalsPending: (done, total) => `${done} / ${total} goals done · distracting apps restricted`,
      streaksTitle: 'Streaks',
      seeAll: 'See all',
      dayStreak: 'Day Streak',
      longestStreak: 'Longest Streak',
      daysCompleted: 'Days Completed',
      todaysProgress: "Today's Progress",
      readToday: 'Read today',
      dailyHukamnama: 'Daily Hukamnama',
      angLabel: 'Ang 694',
      hukamnamaGurmukhi: 'ਹਮ ਸਰਿ ਦੀਨੁ ਦਇਆਲੁ ਨ ਤੁਮ ਸਰਿ ਅਬ ਪਤੀਆਰੁ ਕਿਆ ਕੀਜੈ ॥',
      hukamnamaTranslation: 'There is none as forlorn as I am, and none as compassionate as You; what need is there to test You any more?',
      simranMala: 'Simran Mala',
      simranBeadsDone: 'One round of 108 beads done.',
      morningNitnemGoal: 'Morning Nitnem (5 Banis)',
      morningNitnemBanis: 'Japji, Jaap, Savaiye, Chaupai, Anand Sahib',
      eveningNitnemGoal: 'Evening Nitnem (Rehras Sahib)',
      eveningNitnemSub: 'Sunset window · 6:00 PM – 8:30 PM',
      nightNitnemGoal: 'Night Nitnem (Kirtan Sohila)',
      nightNitnemSub: 'Bedtime window · Before sleeping',
      continueReading: 'Continue Reading',
      sggsTitle: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ',
      angProgress: 'Ang 9 of 1430',
      pctRead: '0% read',
      continueFromAng: 'Continue from Ang 9',
      goToHomeScreen: 'Go to home screen',
      readButton: 'Read',
      shareButton: 'Share',
      bottomNav: {
        home: 'Home',
        simran: 'Simran',
        sggs: 'SGGS',
        progress: 'Progress',
        settings: 'Settings',
      },
      banis: {
        japji: { name: 'Japji Sahib', punjabi: 'ਜਪੁਜੀ ਸਾਹਿਬ' },
        jaap: { name: 'Jaap Sahib', punjabi: 'ਜਾਪੁ ਸਾਹਿਬ' },
        tavprasad: { name: 'Tav-Prasad Savaiye', punjabi: 'ਤ੍ਵਪ੍ਰਸਾਦਿ ਸਵਯੇ' },
        chaupai: { name: 'Chaupai Sahib', punjabi: 'ਚੌਪਈ ਸਾਹਿਬ' },
        anand: { name: 'Anand Sahib', punjabi: 'ਅਨੰਦੁ ਸਾਹਿਬ' },
      },
    },
    howItWorks: {
      eyebrow: 'Simple 3-Step Routine',
      title: 'How Nitnem Tracker Works',
      subtitle: 'A gentle yet disciplined barrier between smartphone distractions and your spiritual devotion.',
      stepCount: (current, total) => `Step ${current} of ${total}`,
      deviceNote: '* App restriction functionality utilizes native iOS Screen Time API and Android Accessibility/Usage Access services on supported devices.',
      steps: {
        step1Title: 'Choose Your Banis',
        step1Desc: 'Select the Nitnem prayers and Gurbani Path you want to complete.',
        step1Details: 'Choose from Japji Sahib, Jaap Sahib, Tav-Prasad Savaiye, Chaupai Sahib, Anand Sahib, Rehras Sahib, and Kirtan Sohila according to your daily practice.',
        step2Title: 'Set Your Prayer Windows',
        step2Desc: 'Create Morning, Evening and Night routines, choosing which Banis must be completed in each window.',
        step2Details: 'Define your Amrit Vela, Sandhya (evening), and bedtime windows to match your schedule and keep your spiritual time protected.',
        step3Title: 'Complete Nitnem and Unlock Apps',
        step3Desc: 'Selected distracting apps remain restricted until the configured prayer requirements are fulfilled, subject to supported device capabilities.',
        step3Details: 'Social media, games, and video streams stay blocked so your mind remains focused on Gurbani first.',
      },
    },
    features: {
      eyebrow: 'Thoughtfully Crafted',
      title: 'Designed for Spiritual Focus and Digital Restraint',
      subtitle: 'No endless social feeds. No unnecessary gamification. Just honest tools to put your spiritual duties first every day.',
      card1Title: 'Custom Prayer Windows',
      card1Headline: 'Choose different Banis for Morning, Evening and Night.',
      card1Desc: 'Align your Nitnem with the rhythms of the day. Configure your Amrit Vela window for the 5 Banis, Evening window for Rehras Sahib, and Night window for Kirtan Sohila.',
      card1Badge: '3 Custom Routines',
      card2Title: 'App Blocking',
      card2Headline: 'Restrict selected distracting apps until the required prayers are completed.',
      card2Desc: 'You select which apps get locked (Instagram, YouTube, TikTok, games, or social feeds). They remain unavailable until you check off your prayers for that window.',
      card2Badge: 'Tailored App Lists',
      card3Title: 'Progress and Streaks',
      card3Headline: 'Track daily, weekly and monthly progress and celebrate consistency.',
      card3Desc: 'Build an unbroken chain of spiritual devotion. View calendar completion heatmaps, monthly completion percentages, and milestone celebrations.',
      card3Badge: 'Milestone Tracking',
      card4Title: 'Parental Guidance',
      card4Headline: 'Encourage children to develop a regular Nitnem routine through supported device restrictions and supervision.',
      card4Desc: 'Guide children to complete their morning or evening Banis before gaining screen time privileges on family or supervised devices.',
      card4Badge: 'Family Supervision',
      builtForSimplicity: 'Built for simplicity',
      learnMore: 'Learn more →',
    },
    parents: {
      eyebrow: 'Spiritual Upbringing',
      title: 'Help Your Children Connect With Waheguru.',
      description: '“Encourage your children to put Nitnem before distractions and develop healthy digital habits through daily prayer routines.”',
      imageCaption: 'Passing spiritual values and Nitnem habits to the next generation.',
      childProfileLabel: 'Child Profile: Kirpa Kaur',
      supervisedMode: 'Supervised Family Device Mode',
      pinProtected: 'PIN Protected',
      pendingBani: 'Chaupai Sahib (5 mins required)',
      pendingStatus: 'Pending',
      cardFooter: 'Tablet apps remain locked until Chaupai Sahib prayer check-in is complete.',
      benefit1Title: 'No Arguments Over Screen Time',
      benefit1Desc: 'Clear, automated boundaries replace daily friction. Children know entertainment apps unlock only after their spiritual duty is fulfilled.',
      benefit2Title: 'Forming Lifelong Nitnem Habits',
      benefit2Desc: 'By associating the start of each morning with Gurbani rather than algorithms, children build rooted spiritual resilience that stays with them for life.',
      benefit3Title: 'Supported Device Supervision',
      benefit3Desc: 'Configure restrictions directly on the child’s device with a parental PIN, or via supported OS family controls on iOS and Android.',
      deviceNote: '* Note: Parental controls operate via local device PIN protection and standard OS Screen Time / Accessibility frameworks supported on the child\'s phone or tablet.',
    },
    finalCta: {
      eyebrow: 'Begin Your Nitnem Journey',
      headline: 'Your phone can wait. Your Nitnem comes first.',
      supporting: '“Start building a consistent Nitnem routine, one day at a time.”',
      ctaButton: 'Put Nitnem First',
      downloadDirectly: 'Download directly for your mobile device',
      reassurance: 'Cancel Anytime · Respects your digital privacy · Designed for the Sikh Sangat',
    },
    footer: {
      tagline: 'Nitnem Tracker helps you build spiritual discipline by holding distracting apps behind your daily prayer commitments. Put Waheguru first every day.',
      fatehGreeting: 'ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ ॥ ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ ॥',
      navHeading: 'Navigation',
      legalHeading: 'Get the App & Legal',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      childSafety: 'Child Safety',
      contactUs: 'Contact Us',
      rightsReserved: 'Nitnem Tracker. All rights reserved. Built with reverence for the Sangat.',
      configureLinks: 'Configure Links & Logo',
    },
    contactModal: {
      title: 'Contact Us',
      subtitle: 'Have feedback, questions, or ideas for Nitnem Tracker?',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Harpreet Singh',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@domain.com',
      messageLabel: 'Message or Suggestion',
      messagePlaceholder: 'Share any thoughts, requests, or questions regarding Nitnem Tracker...',
      directRecipient: 'Direct recipient:',
      sending: 'Sending to info@nitnemtracker.com...',
      sendButton: 'Send to info@nitnemtracker.com',
      successTitle: 'Fateh! Message Delivered',
      successDesc: 'Your inquiry has been sent directly to info@nitnemtracker.com. We will review your message and reply to your email address promptly.',
      sendAnother: 'Send Another Message',
      close: 'Close',
    },
    waitlist: {
      badgeLaunchingSoon: 'Under Active Development · Launching Soon',
      title: 'Be First in Line for Nitnem Tracker',
      description: 'Nitnem Tracker is currently undergoing final beta testing and store approval to ensure the most respectful and seamless experience for the Sikh Sangat.',
      iosBadge: 'Apple App Store',
      androidBadge: 'Google Play Store',
      emailLabel: 'Your Email Address',
      emailPlaceholder: 'you@domain.com',
      nameLabel: 'Your Name (Optional)',
      namePlaceholder: 'e.g. Harpreet Singh',
      platformLabel: 'Preferred Device',
      submitButton: 'Get Early Access at Launch',
      submittingButton: 'Securing your spot...',
      noSpamNotice: 'Zero spam. We will only send you one notification with your direct download link the moment we launch.',
      successTitle: 'Fateh! You’re on the Launch List',
      successMessage: (email: string) => `We have registered ${email} for priority launch access. We will notify you immediately once the app is live.`,
      successSub: 'Thank you for supporting our mission to put Waheguru first every day.',
      closeButton: 'Back to Website',
    },
  },
  pa: {
    nav: {
      howItWorks: 'ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ',
      features: 'ਮੁੱਖ ਖੂਬੀਆਂ',
      forParents: 'ਮਾਪਿਆਂ ਲਈ',
      download: 'ਡਾਊਨਲੋਡ',
      putNitnemFirst: 'ਨਿਤਨੇਮ ਪਹਿਲਾਂ ਰੱਖੋ',
      languageName: 'ਪੰਜਾਬੀ',
      switchLang: 'English',
      privacyLegal: 'ਨਿੱਜਤਾ ਤੇ ਸ਼ਰਤਾਂ',
    },
    hero: {
      eyebrow: 'ਰੋਜ਼ਾਨਾ ਅਧਿਆਤਮਿਕ ਨੇਮ · ਨਿਤਨੇਮ, ਬਾਣੀ ਅਤੇ ਪਾਠ',
      headlinePart1: 'ਤੁਹਾਡਾ ਫ਼ੋਨ ਤੁਹਾਨੂੰ ',
      waheguru: 'ਵਾਹਿਗੁਰੂ',
      headlinePart2: ' ਤੋਂ ਦੂਰ ਕਰ ਰਿਹਾ ਹੈ।',
      subheading: '“ਤੁਸੀਂ ਪੰਜ ਮਿੰਟ ਲਈ ਫ਼ੋਨ ਖੋਲ੍ਹਦੇ ਹੋ, ਅਤੇ ਦੇਖਦੇ ਹੀ ਦੇਖਦੇ ਘੰਟਾ ਲੰਘ ਜਾਂਦਾ ਹੈ। ਸੋਸ਼ਲ ਮੀਡੀਆ, ਰੀਲਾਂ ਅਤੇ ਗੇਮਾਂ ਤੁਹਾਡਾ ਧਿਆਨ ਭਟਕਾਉਂਦੀਆਂ ਹਨ ਜਦੋਂ ਕਿ ਨਿਤਨੇਮ ਪਿੱਛੇ ਰਹਿ ਜਾਂਦਾ ਹੈ।”',
      solutionTitle: 'ਭਟਕਾਓ ਰੋਕੋ। ਨਿਤਨੇਮ ਪੂਰਾ ਕਰੋ। ਵਾਹਿਗੁਰੂ ਨੂੰ ਪਹਿਲਾਂ ਰੱਖੋ।',
      solutionDesc: 'Nitnem Tracker ਐਪ ਤੁਹਾਨੂੰ ਲੋੜੀਂਦਾ ਨਿਤਨੇਮ ਅਤੇ ਗੁਰਬਾਣੀ ਪਾਠ ਪੂਰਾ ਕਰਨ ਤੱਕ ਚੁਣੀਆਂ ਹੋਈਆਂ ਧਿਆਨ ਭਟਕਾਉਣ ਵਾਲੀਆਂ ਐਪਾਂ ਨੂੰ ਰੋਕ ਕੇ ਨੇਮ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।',
      privacyReassurance: 'ਸੁਰੱਖਿਅਤ ਅਤੇ ਨਿੱਜੀ — ਮੋਬਾਈਲ ਦੇ ਸਕ੍ਰੀਨ ਟਾਈਮ ਕੰਟਰੋਲ ਦੀ ਵਰਤੋਂ।',
      ctaButton: 'ਨਿਤਨੇਮ ਪਹਿਲਾਂ ਰੱਖੋ',
      freeToBegin: 'ਰੋਜ਼ਾਨਾ ਨੇਮ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਬਿਲਕੁਲ ਮੁਫ਼ਤ',
      availableStores: 'iOS ਅਤੇ Android ਲਈ ਉਪਲਬਧ',
      interactiveHint: 'ਅਜ਼ਮਾ ਕੇ ਦੇਖੋ · ਟੀਚਿਆਂ \'ਤੇ ਟੈਪ ਕਰਕੇ ਲੜੀ ਅਤੇ ਐਪਾਂ ਅਨਲੌਕ ਹੁੰਦੀਆਂ ਦੇਖੋ',
    },
    phone: {
      title: 'ਅੰਮ੍ਰਿਤ ਵੇਲਾ ਨਿਤਨੇਮ',
      windowLabel: 'ਸਮਾਂ: ਸਵੇਰੇ 4:00 – 9:00 ਵਜੇ',
      routineProgress: 'ਰੁਟੀਨ ਤਰੱਕੀ',
      completedOf: (done, total, pct) => `${total} ਵਿੱਚੋਂ ${done} ਬਾਣੀਆਂ ਪੂਰੀਆਂ (${pct}%)`,
      banisRemaining: (count) => `${count} ਬਾਣੀਆਂ ਬਾਕੀ ਹਨ`,
      allCompleted: 'ਸਵੇਰ ਦਾ ਸਾਰਾ ਨਿਤਨੇਮ ਪੂਰਾ ਹੋ ਗਿਆ',
      appsRestricted: 'ਐਪਾਂ ਬੰਦ ਹਨ',
      appsUnlocked: 'ਐਪਾਂ ਖੁੱਲ੍ਹ ਗਈਆਂ',
      tapPrompt: 'ਅਨਲੌਕ ਦੇਖਣ ਲਈ ਬਾਣੀ \'ਤੇ ਟੈਪ ਕਰੋ',
      reset: 'ਦੁਬਾਰਾ ਦੇਖੋ',
      requiredBanis: 'ਲੋੜੀਂਦੀਆਂ ਸਵੇਰ ਦੀਆਂ ਬਾਣੀਆਂ',
      justNow: 'ਹੁਣੇ',
      appsBlockedTitle: 'ਧਿਆਨ ਭਟਕਾਉਣ ਵਾਲੀਆਂ ਐਪਾਂ ਬੰਦ ਹਨ',
      appsUnlockedTitle: 'ਚੁਣੀਆਂ ਹੋਈਆਂ ਐਪਾਂ ਖੁੱਲ੍ਹ ਗਈਆਂ',
      readyForUse: 'ਵਰਤੋਂ ਲਈ ਤਿਆਰ',
      pendingCount: (count) => `${count} ਬਾਣੀਆਂ ਬਾਕੀ`,
      greeting: 'ਵਾਹਿਗੁਰੂ ਜੀ 🙏',
      date: 'ਸੋਮਵਾਰ, 26 ਅਕਤੂਬਰ 2026',
      allGoalsDone: 'ਸਾਰੇ ਟੀਚੇ ਪੂਰੇ · ਐਪਾਂ ਖੁੱਲ੍ਹ ਗਈਆਂ',
      goalsPending: (done, total) => `${total} ਵਿੱਚੋਂ ${done} ਟੀਚੇ ਪੂਰੇ · ਭਟਕਾਉਣ ਵਾਲੀਆਂ ਐਪਾਂ ਬੰਦ ਹਨ`,
      streaksTitle: 'ਲੜੀ (Streaks)',
      seeAll: 'ਸਭ ਦੇਖੋ',
      dayStreak: 'ਰੋਜ਼ਾਨਾ ਲੜੀ',
      longestStreak: 'ਸਭ ਤੋਂ ਲੰਮੀ ਲੜੀ',
      daysCompleted: 'ਕੁੱਲ ਪੂਰੇ ਦਿਨ',
      todaysProgress: 'ਅੱਜ ਦੀ ਤਰੱਕੀ',
      readToday: 'ਅੱਜ ਪੜ੍ਹਿਆ ਗਿਆ',
      dailyHukamnama: 'ਰੋਜ਼ਾਨਾ ਹੁਕਮਨਾਮਾ',
      angLabel: 'ਅੰਗ ੬੯੪',
      hukamnamaGurmukhi: 'ਹਮ ਸਰਿ ਦੀਨੁ ਦਇਆਲੁ ਨ ਤੁਮ ਸਰਿ ਅਬ ਪਤੀਆਰੁ ਕਿਆ ਕੀਜੈ ॥',
      hukamnamaTranslation: 'ਮੇਰੇ ਵਰਗਾ ਕੋਈ ਦੀਨ-ਦੁਖੀ ਨਹੀਂ ਅਤੇ ਤੇਰੇ ਵਰਗਾ ਕੋਈ ਦਿਆਲੂ ਨਹੀਂ, ਹੁਣ ਹੋਰ ਪਰਖਣ ਦੀ ਕੀ ਲੋੜ ਹੈ?',
      simranMala: 'ਸਿਮਰਨ ਮਾਲਾ',
      simranBeadsDone: '੧੦੮ ਮਣਕਿਆਂ ਦੀ ਇੱਕ ਮਾਲਾ ਪੂਰੀ।',
      morningNitnemGoal: 'ਸਵੇਰ ਦਾ ਨਿਤਨੇਮ (੫ ਬਾਣੀਆਂ)',
      morningNitnemBanis: 'ਜਪੁਜੀ, ਜਾਪੁ, ਸਵਯੇ, ਚੌਪਈ, ਅਨੰਦੁ ਸਾਹਿਬ',
      eveningNitnemGoal: 'ਸੰਧਿਆ ਨਿਤਨੇਮ (ਰਹਰਾਸਿ ਸਾਹਿਬ)',
      eveningNitnemSub: 'ਸੰਧਿਆ ਵੇਲਾ · ਸ਼ਾਮ 6:00 – 8:30 ਵਜੇ',
      nightNitnemGoal: 'ਰਾਤ ਦਾ ਨਿਤਨੇਮ (ਕੀਰਤਨ ਸੋਹਿਲਾ)',
      nightNitnemSub: 'ਸੌਣ ਵੇਲਾ · ਸੌਣ ਤੋਂ ਪਹਿਲਾਂ',
      continueReading: 'ਪੜ੍ਹਨਾ ਜਾਰੀ ਰੱਖੋ',
      sggsTitle: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ',
      angProgress: 'ਅੰਗ ੯ / ੧੪੩੦',
      pctRead: '੦% ਪੜ੍ਹਿਆ',
      continueFromAng: 'ਅੰਗ ੯ ਤੋਂ ਜਾਰੀ ਰੱਖੋ',
      goToHomeScreen: 'ਹੋਮ ਸਕ੍ਰੀਨ \'ਤੇ ਜਾਓ',
      readButton: 'ਪੜ੍ਹੋ',
      shareButton: 'ਸਾਂਝਾ ਕਰੋ',
      bottomNav: {
        home: 'ਹੋਮ',
        simran: 'ਸਿਮਰਨ',
        sggs: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ',
        progress: 'ਤਰੱਕੀ',
        settings: 'ਸੈਟਿੰਗਜ਼',
      },
      banis: {
        japji: { name: 'ਜਪੁਜੀ ਸਾਹਿਬ', punjabi: 'Japji Sahib' },
        jaap: { name: 'ਜਾਪੁ ਸਾਹਿਬ', punjabi: 'Jaap Sahib' },
        tavprasad: { name: 'ਤ੍ਵਪ੍ਰਸਾਦਿ ਸਵਯੇ', punjabi: 'Tav-Prasad Savaiye' },
        chaupai: { name: 'ਚੌਪਈ ਸਾਹਿਬ', punjabi: 'Chaupai Sahib' },
        anand: { name: 'ਅਨੰਦੁ ਸਾਹਿਬ', punjabi: 'Anand Sahib' },
      },
    },
    howItWorks: {
      eyebrow: '੩ ਸਰਲ ਕਦਮ',
      title: 'Nitnem Tracker ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ',
      subtitle: 'ਤੁਹਾਡੇ ਫ਼ੋਨ ਦੇ ਭਟਕਾਓ ਅਤੇ ਰੂਹਾਨੀ ਭਗਤੀ ਦੇ ਵਿਚਕਾਰ ਇੱਕ ਸ਼ਾਂਤ ਅਤੇ ਅਨੁਸ਼ਾਸਿਤ ਵਾੜ।',
      stepCount: (current, total) => `ਕਦਮ ${current} / ${total}`,
      deviceNote: '* ਐਪ ਰੋਕਣ ਦੀ ਸੁਵਿਧਾ ਫ਼ੋਨ ਦੇ ਅਧਿਕਾਰਤ iOS Screen Time API ਅਤੇ Android Accessibility ਸੇਵਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦੀ ਹੈ।',
      steps: {
        step1Title: 'ਆਪਣੀਆਂ ਬਾਣੀਆਂ ਚੁਣੋ',
        step1Desc: 'ਉਹ ਨਿਤਨੇਮ ਅਤੇ ਗੁਰਬਾਣੀ ਪਾਠ ਚੁਣੋ ਜੋ ਤੁਸੀਂ ਰੋਜ਼ਾਨਾ ਪੂਰੇ ਕਰਨੇ ਹਨ।',
        step1Details: 'ਆਪਣੀ ਰੋਜ਼ਾਨਾ ਮਰਯਾਦਾ ਅਨੁਸਾਰ ਜਪੁਜੀ ਸਾਹਿਬ, ਜਾਪੁ ਸਾਹਿਬ, ਤ੍ਵਪ੍ਰਸਾਦਿ ਸਵਯੇ, ਚੌਪਈ ਸਾਹਿਬ, ਅਨੰਦੁ ਸਾਹਿਬ, ਰਹਰਾਸਿ ਸਾਹਿਬ ਅਤੇ ਕੀਰਤਨ ਸੋਹਿਲਾ ਵਿੱਚੋਂ ਚੁਣੋ।',
        step2Title: 'ਪਾਠ ਦਾ ਸਮਾਂ ਤੈਅ ਕਰੋ',
        step2Desc: 'ਸਵੇਰ, ਸ਼ਾਮ ਅਤੇ ਰਾਤ ਦੇ ਨੇਮ ਬਣਾਓ, ਅਤੇ ਚੁਣੋ ਕਿ ਹਰੇਕ ਸਮੇਂ ਕਿਹੜੀਆਂ ਬਾਣੀਆਂ ਪੂਰੀਆਂ ਕਰਨੀਆਂ ਹਨ।',
        step2Details: 'ਆਪਣਾ ਅੰਮ੍ਰਿਤ ਵੇਲਾ, ਸੰਧਿਆ ਵੇਲਾ ਅਤੇ ਸੌਣ ਵੇਲੇ ਦਾ ਸਮਾਂ ਸੈੱਟ ਕਰੋ ਤਾਂ ਜੋ ਤੁਹਾਡਾ ਨਿਤਨੇਮ ਦਾ ਸਮਾਂ ਸੁਰੱਖਿਅਤ ਰਹੇ।',
        step3Title: 'ਨਿਤਨੇਮ ਪੂਰਾ ਕਰੋ ਅਤੇ ਐਪਾਂ ਖੋਲ੍ਹੋ',
        step3Desc: 'ਚੁਣੀਆਂ ਹੋਈਆਂ ਧਿਆਨ ਭਟਕਾਉਣ ਵਾਲੀਆਂ ਐਪਾਂ ਉਦੋਂ ਤੱਕ ਬੰਦ ਰਹਿੰਦੀਆਂ ਹਨ ਜਦੋਂ ਤੱਕ ਨਿਤਨੇਮ ਪੂਰਾ ਨਹੀਂ ਹੁੰਦਾ।',
        step3Details: 'ਸੋਸ਼ਲ ਮੀਡੀਆ, ਵੀਡੀਓ ਅਤੇ ਗੇਮਾਂ ਬੰਦ ਰਹਿੰਦੀਆਂ ਹਨ ਤਾਂ ਜੋ ਮਨ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਗੁਰਬਾਣੀ ਨਾਲ ਜੁੜਿਆ ਰਹੇ।',
      },
    },
    features: {
      eyebrow: 'ਸੋਚ-ਸਮਝ ਕੇ ਬਣਾਈ ਗਈ',
      title: 'ਰੂਹਾਨੀ ਧਿਆਨ ਅਤੇ ਡਿਜੀਟਲ ਅਨੁਸ਼ਾਸਨ ਲਈ ਤਿਆਰ',
      subtitle: 'ਕੋਈ ਬੇਲੋੜੀ ਭਟਕਣ ਨਹੀਂ। ਰੋਜ਼ਾਨਾ ਆਪਣੇ ਧਾਰਮਿਕ ਫ਼ਰਜ਼ਾਂ ਨੂੰ ਪਹਿਲ ਦੇਣ ਲਈ ਤੁਹਾਡਾ ਸੱਚਾ ਸਾਥੀ।',
      card1Title: 'ਆਪਣੀ ਮਰਜ਼ੀ ਦਾ ਸਮਾਂ',
      card1Headline: 'ਸਵੇਰ, ਸ਼ਾਮ ਅਤੇ ਰਾਤ ਲਈ ਵੱਖਰੀਆਂ ਬਾਣੀਆਂ ਚੁਣੋ।',
      card1Desc: 'ਆਪਣੇ ਨਿਤਨੇਮ ਨੂੰ ਦਿਨ ਦੇ ਪਹਿਰਾਂ ਨਾਲ ਜੋੜੋ। ਅੰਮ੍ਰਿਤ ਵੇਲੇ ੫ ਬਾਣੀਆਂ, ਸੰਧਿਆ ਵੇਲੇ ਰਹਰਾਸਿ ਸਾਹਿਬ ਅਤੇ ਰਾਤ ਨੂੰ ਕੀਰਤਨ ਸੋਹਿਲਾ ਸੈੱਟ ਕਰੋ।',
      card1Badge: '੩ ਕਸਟਮ ਰੁਟੀਨਾਂ',
      card2Title: 'ਐਪ ਬਲਾਕਿੰਗ',
      card2Headline: 'ਲੋੜੀਂਦਾ ਪਾਠ ਪੂਰਾ ਹੋਣ ਤੱਕ ਭਟਕਾਉਣ ਵਾਲੀਆਂ ਐਪਾਂ ਬੰਦ ਰੱਖੋ।',
      card2Desc: 'ਤੁਸੀਂ ਖ਼ੁਦ ਚੁਣਦੇ ਹੋ ਕਿ ਕਿਹੜੀਆਂ ਐਪਾਂ ਬੰਦ ਕਰਨੀਆਂ ਹਨ (ਇੰਸਟਾਗ੍ਰਾਮ, ਯੂਟਿਊਬ, ਗੇਮਾਂ)। ਜਦੋਂ ਤੱਕ ਤੁਸੀਂ ਬਾਣੀ ਪੂਰੀ ਨਹੀਂ ਕਰਦੇ, ਉਹ ਬੰਦ ਰਹਿਣਗੀਆਂ।',
      card2Badge: 'ਆਪਣੀ ਪਸੰਦ ਦੀਆਂ ਐਪਾਂ',
      card3Title: 'ਤਰੱਕੀ ਅਤੇ ਲੜੀ (Streaks)',
      card3Headline: 'ਰੋਜ਼ਾਨਾ, ਹਫ਼ਤਾਵਾਰੀ ਅਤੇ ਮਹੀਨਾਵਾਰ ਲੜੀ ਨੂੰ ਟਰੈਕ ਕਰੋ ਅਤੇ ਨੇਮ ਦਾ ਆਨੰਦ ਮਾਣੋ।',
      card3Desc: 'ਲਗਾਤਾਰ ਨਿਤਨੇਮ ਦੀ ਲੜੀ ਬਣਾਓ। ਕੈਲੰਡਰ ਵਿੱਚ ਆਪਣੀ ਰੋਜ਼ਾਨਾ ਹਾਜ਼ਰੀ ਅਤੇ ਮਹੀਨੇਵਾਰ ਤਰੱਕੀ ਦੇਖੋ।',
      card3Badge: 'ਰੋਜ਼ਾਨਾ ਹਾਜ਼ਰੀ',
      card4Title: 'ਮਾਪਿਆਂ ਲਈ ਮਾਰਗਦਰਸ਼ਨ',
      card4Headline: 'ਬੱਚਿਆਂ ਨੂੰ ਰੋਜ਼ਾਨਾ ਨਿਤਨੇਮ ਦੀ ਆਦਤ ਪਾਉਣ ਲਈ ਪ੍ਰੇਰਿਤ ਕਰੋ।',
      card4Desc: 'ਬੱਚਿਆਂ ਨੂੰ ਫ਼ੋਨ ਜਾਂ ਟੈਬਲੇਟ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਸਵੇਰ ਜਾਂ ਸ਼ਾਮ ਦਾ ਨਿਤਨੇਮ ਪੂਰਾ ਕਰਨ ਦੀ ਚੰਗੀ ਆਦਤ ਪਾਓ।',
      card4Badge: 'ਪਰਿਵਾਰਕ ਸੰਭਾਲ',
      builtForSimplicity: 'ਸਰਲਤਾ ਲਈ ਬਣਾਈ ਗਈ',
      learnMore: 'ਹੋਰ ਜਾਣੋ →',
    },
    parents: {
      eyebrow: 'ਬੱਚਿਆਂ ਦੀ ਸੰਭਾਲ',
      title: 'ਆਪਣੇ ਬੱਚਿਆਂ ਨੂੰ ਵਾਹਿਗੁਰੂ ਨਾਲ ਜੋੜਨ ਵਿੱਚ ਮਦਦ ਕਰੋ।',
      description: '“ਆਪਣੇ ਬੱਚਿਆਂ ਨੂੰ ਭਟਕਾਓ ਤੋਂ ਪਹਿਲਾਂ ਨਿਤਨੇਮ ਕਰਨ ਅਤੇ ਰੋਜ਼ਾਨਾ ਬਾਣੀ ਰਾਹੀਂ ਚੰਗੀਆਂ ਡਿਜੀਟਲ ਆਦਤਾਂ ਬਣਾਉਣ ਲਈ ਪ੍ਰੇਰਿਤ ਕਰੋ।”',
      imageCaption: 'ਅਗਲੀ ਪੀੜ੍ਹੀ ਨੂੰ ਰੂਹਾਨੀ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਅਤੇ ਨਿਤਨੇਮ ਦੀਆਂ ਆਦਤਾਂ ਦੇਣਾ।',
      childProfileLabel: 'ਬੱਚੇ ਦੀ ਪ੍ਰੋਫਾਈਲ: ਕਿਰਪਾ ਕੌਰ',
      supervisedMode: 'ਮਾਪਿਆਂ ਦੀ ਨਿਗਰਾਨੀ ਮੋਡ',
      pinProtected: 'ਪਿੰਨ (PIN) ਸੁਰੱਖਿਅਤ',
      pendingBani: 'ਚੌਪਈ ਸਾਹਿਬ (੫ ਮਿੰਟ ਲੋੜੀਂਦੇ)',
      pendingStatus: 'ਬਾਕੀ ਹੈ',
      cardFooter: 'ਚੌਪਈ ਸਾਹਿਬ ਦਾ ਪਾਠ ਪੂਰਾ ਹੋਣ ਤੱਕ ਟੈਬਲੇਟ ਦੀਆਂ ਐਪਾਂ ਬੰਦ ਰਹਿਣਗੀਆਂ।',
      benefit1Title: 'ਸਕ੍ਰੀਨ ਟਾਈਮ \'ਤੇ ਕੋਈ ਝਗੜਾ ਨਹੀਂ',
      benefit1Desc: 'ਸਪੱਸ਼ਟ ਨਿਯਮ ਰੋਜ਼-ਰੋਜ਼ ਦੀ ਬਹਿਸ ਨੂੰ ਖ਼ਤਮ ਕਰਦੇ ਹਨ। ਬੱਚਿਆਂ ਨੂੰ ਪਤਾ ਹੁੰਦਾ ਹੈ ਕਿ ਮਨੋਰੰਜਨ ਐਪਾਂ ਨਿਤਨੇਮ ਤੋਂ ਬਾਅਦ ਹੀ ਚੱਲਣਗੀਆਂ।',
      benefit2Title: 'ਜੀਵਨ ਭਰ ਲਈ ਨਿਤਨੇਮ ਦੀ ਆਦਤ',
      benefit2Desc: 'ਸਵੇਰ ਦੀ ਸ਼ੁਰੂਆਤ ਮੋਬਾਈਲ ਸਕ੍ਰੀਨ ਦੀ ਬਜਾਏ ਗੁਰਬਾਣੀ ਨਾਲ ਕਰਕੇ ਬੱਚੇ ਜੀਵਨ ਭਰ ਲਈ ਅਧਿਆਤਮਿਕ ਤੌਰ \'ਤੇ ਮਜ਼ਬੂਤ ਬਣਦੇ ਹਨ।',
      benefit3Title: 'ਡਿਵਾਈਸ \'ਤੇ ਸੁਰੱਖਿਅਤ ਕੰਟਰੋਲ',
      benefit3Desc: 'ਮਾਪਿਆਂ ਦੇ ਗੁਪਤ ਪਿੰਨ (PIN) ਕੋਡ ਰਾਹੀਂ ਬੱਚੇ ਦੇ ਫ਼ੋਨ ਜਾਂ ਟੈਬਲੇਟ \'ਤੇ ਆਸਾਨੀ ਨਾਲ ਸੈੱਟ ਕਰੋ।',
      deviceNote: '* ਨੋਟ: ਮਾਪਿਆਂ ਦੇ ਕੰਟਰੋਲ ਲੋਕਲ ਡਿਵਾਈਸ ਪਿੰਨ ਪ੍ਰੋਟੈਕਸ਼ਨ ਅਤੇ ਫ਼ੋਨ ਦੇ ਸਕ੍ਰੀਨ ਟਾਈਮ ਸਿਸਟਮ ਰਾਹੀਂ ਚੱਲਦੇ ਹਨ।',
    },
    finalCta: {
      eyebrow: 'ਆਪਣਾ ਨਿਤਨੇਮ ਸਫ਼ਰ ਸ਼ੁਰੂ ਕਰੋ',
      headline: 'ਤੁਹਾਡਾ ਫ਼ੋਨ ਉਡੀਕ ਕਰ ਸਕਦਾ ਹੈ। ਤੁਹਾਡਾ ਨਿਤਨੇਮ ਪਹਿਲਾਂ ਆਉਂਦਾ ਹੈ।',
      supporting: '“ਹਰ ਰੋਜ਼ ਇੱਕ ਕਦਮ ਵਧਾ ਕੇ, ਲਗਾਤਾਰ ਨਿਤਨੇਮ ਕਰਨ ਦੀ ਆਦਤ ਬਣਾਓ।”',
      ctaButton: 'ਨਿਤਨੇਮ ਪਹਿਲਾਂ ਰੱਖੋ',
      downloadDirectly: 'ਆਪਣੇ ਮੋਬਾਈਲ ਲਈ ਸਿੱਧਾ ਡਾਊਨਲੋਡ ਕਰੋ',
      reassurance: 'ਕਦੇ ਵੀ ਰੱਦ ਕਰੋ · ਤੁਹਾਡੀ ਨਿੱਜਤਾ ਦਾ ਪੂਰਾ ਸਤਿਕਾਰ · ਸਿੱਖ ਸੰਗਤ ਲਈ ਤਿਆਰ',
    },
    footer: {
      tagline: 'Nitnem Tracker ਤੁਹਾਡੇ ਰੋਜ਼ਾਨਾ ਪਾਠ ਨੂੰ ਪਹਿਲ ਦੇ ਕੇ ਧਿਆਨ ਭਟਕਾਉਣ ਵਾਲੀਆਂ ਐਪਾਂ ਨੂੰ ਰੋਕਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ। ਹਰ ਰੋਜ਼ ਵਾਹਿਗੁਰੂ ਨੂੰ ਪਹਿਲਾਂ ਰੱਖੋ।',
      fatehGreeting: 'ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ ॥ ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ ॥',
      navHeading: 'ਨੇਵੀਗੇਸ਼ਨ',
      legalHeading: 'ਐਪ ਡਾਊਨਲੋਡ ਤੇ ਨਿਯਮ',
      privacyPolicy: 'ਪ੍ਰਾਈਵੇਸੀ ਪਾਲਿਸੀ (Privacy)',
      termsOfUse: 'ਵਰਤੋਂ ਦੀਆਂ ਸ਼ਰਤਾਂ (Terms)',
      childSafety: 'ਬੱਚਿਆਂ ਦੀ ਸੁਰੱਖਿਆ',
      contactUs: 'ਸੰਪਰਕ ਕਰੋ',
      rightsReserved: 'Nitnem Tracker। ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ। ਸਿੱਖ ਸੰਗਤ ਲਈ ਸਤਿਕਾਰ ਸਹਿਤ ਤਿਆਰ।',
      configureLinks: 'ਲਿੰਕ ਤੇ ਲੋਗੋ ਸੈਟਿੰਗਜ਼',
    },
    contactModal: {
      title: 'ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ',
      subtitle: 'ਕੀ ਤੁਹਾਡੇ ਕੋਲ Nitnem Tracker ਲਈ ਕੋਈ ਸੁਝਾਅ, ਸਵਾਲ ਜਾਂ ਵਿਚਾਰ ਹੈ?',
      nameLabel: 'ਤੁਹਾਡਾ ਨਾਮ',
      namePlaceholder: 'ਜਿਵੇਂ: ਹਰਪ੍ਰੀਤ ਸਿੰਘ',
      emailLabel: 'ਈਮੇਲ ਪਤਾ',
      emailPlaceholder: 'you@domain.com',
      messageLabel: 'ਸੁਨੇਹਾ ਜਾਂ ਸੁਝਾਅ',
      messagePlaceholder: 'Nitnem Tracker ਬਾਰੇ ਆਪਣੇ ਵਿਚਾਰ ਜਾਂ ਸਵਾਲ ਲਿਖੋ...',
      directRecipient: 'ਸਿੱਧਾ ਈਮੇਲ ਪ੍ਰਾਪਤਕਰਤਾ:',
      sending: 'info@nitnemtracker.com ਨੂੰ ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ...',
      sendButton: 'info@nitnemtracker.com ਨੂੰ ਸੁਨੇਹਾ ਭੇਜੋ',
      successTitle: 'ਫ਼ਤਹਿ! ਸੁਨੇਹਾ ਭੇਜਿਆ ਗਿਆ',
      successDesc: 'ਤੁਹਾਡਾ ਸੁਨੇਹਾ ਸਿੱਧਾ info@nitnemtracker.com ਨੂੰ ਪਹੁੰਚ ਗਿਆ ਹੈ। ਅਸੀਂ ਛੇਤੀ ਹੀ ਤੁਹਾਡੀ ਈਮੇਲ \'ਤੇ ਜਵਾਬ ਦੇਵਾਂਗੇ।',
      sendAnother: 'ਇੱਕ ਹੋਰ ਸੁਨੇਹਾ ਭੇਜੋ',
      close: 'ਬੰਦ ਕਰੋ',
    },
    waitlist: {
      badgeLaunchingSoon: 'ਤਿਆਰੀ ਚੱਲ ਰਹੀ ਹੈ · ਜਲਦ ਹੀ ਲਾਂਚ ਹੋ ਰਹੀ ਹੈ',
      title: 'ਨਿਤਨੇਮ ਟਰੈਕਰ ਲਈ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਜੁੜੋ',
      description: 'ਸਿੱਖ ਸੰਗਤ ਲਈ ਸਭ ਤੋਂ ਸਤਿਕਾਰਤ ਅਤੇ ਸਰਲ ਅਨੁਭਵ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਨਿਤਨੇਮ ਟਰੈਕਰ ਐਪ ਦੀ ਅੰਤਿਮ ਟੈਸਟਿੰਗ ਚੱਲ ਰਹੀ ਹੈ।',
      iosBadge: 'Apple App Store',
      androidBadge: 'Google Play Store',
      emailLabel: 'ਤੁਹਾਡਾ ਈਮੇਲ ਪਤਾ',
      emailPlaceholder: 'you@domain.com',
      nameLabel: 'ਤੁਹਾਡਾ ਨਾਮ (ਮਰਜ਼ੀ ਮੁਤਾਬਕ)',
      namePlaceholder: 'ਜਿਵੇਂ: ਹਰਪ੍ਰੀਤ ਸਿੰਘ',
      platformLabel: 'ਤੁਹਾਡਾ ਫ਼ੋਨ',
      submitButton: 'ਲਾਂਚ ਵੇਲੇ ਸੂਚਿਤ ਕਰੋ',
      submittingButton: 'ਸੂਚੀ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...',
      noSpamNotice: 'ਕੋਈ ਬੇਲੋੜੀ ਈਮੇਲ ਨਹੀਂ। ਐਪ ਲਾਂਚ ਹੁੰਦੇ ਹੀ ਤੁਹਾਨੂੰ ਸਿੱਧਾ ਡਾਊਨਲੋਡ ਲਿੰਕ ਭੇਜਿਆ ਜਾਵੇਗਾ।',
      successTitle: 'ਫ਼ਤਹਿ! ਤੁਸੀਂ ਲਾਂਚ ਸੂਚੀ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋ ਗਏ ਹੋ',
      successMessage: (email: string) => `ਅਸੀਂ ${email} ਨੂੰ ਪਹਿਲ ਦੇ ਆਧਾਰ 'ਤੇ ਦਰਜ ਕਰ ਲਿਆ ਹੈ। ਐਪ ਲਾਂਚ ਹੁੰਦੇ ਹੀ ਤੁਹਾਨੂੰ ਤੁਰੰਤ ਸੂਚਿਤ ਕਰ ਦਿੱਤਾ ਜਾਵੇਗਾ।`,
      successSub: 'ਰੋਜ਼ਾਨਾ ਵਾਹਿਗੁਰੂ ਨੂੰ ਪਹਿਲਾਂ ਰੱਖਣ ਦੇ ਨੇਮ ਨਾਲ ਜੁੜਨ ਲਈ ਧੰਨਵਾਦ।',
      closeButton: 'ਵੈੱਬਸਾਈਟ \'ਤੇ ਵਾਪਸ ਜਾਓ',
    },
  },
};
