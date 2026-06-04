const ja = {
  // ── Nav ──────────────────────────────────────────────
  nav: {
    about: '自己紹介',
    skills: 'スキル',
    projects: 'プロジェクト',
    experience: '経歴',
    contact: 'お問い合わせ',
    hire: '採用のご相談 →',
  },

  // ── Hero ─────────────────────────────────────────────
  hero: {
    badge: 'IT求職中 · 日本 · 2026年',
    line1: '学んで、',
    line2: '作って、',
    line3: '成長する。',
    roles: ['HTML & CSS', 'JavaScript', 'TypeScript', 'Reactエンジニア'],
    cta1: '作品を見る →',
    cta2: 'お問い合わせ',
    stat1n: '1年+',
    stat1l: 'デザイナー経験',
    stat2n: 'CSE',
    stat2l: '理工学士',
    stat3n: '4言語',
    stat3l: '対応可',
  },

  // ── Marquee ───────────────────────────────────────────
  marquee: {
    items: [
      'React',
      '✦',
      'TypeScript',
      '✦',
      'JavaScript',
      '✦',
      'HTML & CSS',
      '✦',
      'Git',
      '✦',
      'Figma',
      '✦',
      'レスポンシブデザイン',
      '✦',
      'Vite',
      '✦',
    ],
  },

  // ── About ─────────────────────────────────────────────
  about: {
    eyebrow: '自己紹介',
    badge: 'ジュニア\nエンジニア',
    location: '神奈川県川崎市 · 2026年',
    heading1: 'CSE卒、',
    heading2: '日本のIT業界',
    heading3: 'で貢献したい。',
    p1: 'はじめまして、<strong>Shima Taklima Kabir</strong>です。バングラデシュの<strong>ブリタニア大学コンピュータ理工学部（CSE）</strong>で<strong>理工学士号</strong>を取得。バングラデシュのe-Softにて<strong>ジュニアデザイナー</strong>として<strong>1年間</strong>、<strong>HTML・CSS・JavaScript</strong>を用いたWeb制作の実務経験があります。',
    p2: '現在は<strong>神奈川県川崎市</strong>在住で、<strong>日本国内のITポジション</strong>を積極的に探しています。TypeScript・Reactの学習と個人開発を継続し、UI/UXを意識した保守性の高いコードを書くことを心がけています。',
    meta: [
      ['状況', '日本国内のIT職を求職中'],
      ['所在地', '神奈川県川崎市'],
      ['専門', 'フロントエンド / Web開発'],
      ['言語', 'ベンガル語 · 英語 · 日本語 · ヒンディー語'],
    ],
    langBadges: [
      { icon: '🇧🇩', text: 'ベンガル語 · 母語' },
      { icon: '🇬🇧', text: '英語 · 流利' },
      { icon: '🇯🇵', text: '日本語 · プロフェッショナルな実務レベル' },
      { icon: '🇮🇳', text: 'ヒンディー語 · 日常業務レベル' },
    ],
    cv: '履歴書をDL ↓',
    socials: [
      { name: 'GitHub', url: 'https://github.com/shima-taklima' },
      { name: 'LinkedIn', url: '#' },
      { name: 'Twitter', url: '#' },
    ],
  },

  // ── Skills ────────────────────────────────────────────
  skills: {
    eyebrow: 'スキルと技術',
    note: '<strong>Udemyのコース</strong>と実際のプロジェクトを通じて習得したスキルです。数値は現時点での習熟度で、毎日向上中です。',
    heading1: '現在の',
    heading2: '技術スタック',
    group1: '言語・フレームワーク',
    group2: 'ツール・概念',
    alsoLabel: '使用経験のある技術',
    coursesLabel: '修了コース一覧',
    front: [
      { n: 'HTML5 & CSS3', v: 80 },
      { n: 'JavaScript (ES6+)', v: 70 },
      { n: 'TypeScript', v: 60 },
      { n: 'React', v: 65 },
    ],
    tools: [
      { n: 'Git & GitHub', v: 65 },
      { n: 'レスポンシブデザイン', v: 75 },
      { n: 'CSS Flexbox / Grid', v: 78 },
      { n: 'VS Code / 開発者ツール', v: 80 },
    ],
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Git',
      'GitHub',
      'Flexbox',
      'CSS Grid',
      'レスポンシブデザイン',
      'Vite',
      'npm',
      'Figma（基礎）',
    ],
    courses: [
      {
        name: 'The Complete JavaScript Course',
        platform: 'Udemy',
        instructor: 'Jonas Schmedtmann',
        status: '修了',
      },
      {
        name: 'React — The Complete Guide',
        platform: 'Udemy',
        instructor: 'Maximilian Schwarzmüller',
        status: '修了',
      },
      {
        name: 'Understanding TypeScript',
        platform: 'Udemy',
        instructor: 'Maximilian Schwarzmüller',
        status: '修了',
      },
      {
        name: 'Build Responsive Websites with HTML & CSS',
        platform: 'Udemy',
        instructor: 'Jonas Schmedtmann',
        status: '修了',
      },
    ],
  },

  // ── Projects ──────────────────────────────────────────
  projects: {
    eyebrow: 'プロジェクト',
    heading1: '実際に',
    heading2: '作ったもの',
    note: 'コース受講中に制作したプロジェクトです。それぞれが大切な学びの場でした。すべてライブ公開・GitHub掲載済みです。',
    github: 'GitHubプロフィール ↗',
    live: 'ライブ ↗',
    githubLink: 'GitHub ↗',
    items: [
      {
        num: '01',
        cat: 'HTML & CSS',
        year: '2024',
        title: 'Omnifood — ランディングページ',
        desc: '架空のフードデリバリー会社向けの完全レスポンシブなランディングページ。FlexboxとGridを使い純粋なHTML/CSSで構築。スムーズスクロール、スティッキーナビ、モバイルハンバーガーメニュー実装。',
        tags: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'レスポンシブ'],
        live: 'https://tarotaro.github.io/omnifood', // TODO
        github: 'https://github.com/tarotaro/omnifood', // TODO
      },
      {
        num: '02',
        cat: 'JavaScript',
        year: '2024',
        title: 'Bankist — バンキングアプリ',
        desc: 'ログイン認証・送金・ローン申請・口座閉鎖機能を持つ模擬オンラインバンキングUI。バニラJavaScriptで配列、DOM操作、タイマーを活用して構築。',
        tags: ['JavaScript', 'DOM', '配列', 'CSS3'],
        live: 'https://tarotaro.github.io/omnifood', // TODO
        github: 'https://github.com/tarotaro/omnifood', // TODO
      },
      {
        num: '03',
        cat: 'React',
        year: '2025',
        title: 'usePopcorn — 映画トラッカー',
        desc: 'OMDB APIを使って映画を検索・詳細表示・評価・ウォッチリスト管理できるReactアプリ。useState・useEffect・カスタムフック・localStorageを実践的に習得。',
        tags: ['React', 'Hooks', 'API', 'localStorage'],
        live: 'https://tarotaro.github.io/omnifood', // TODO
        github: 'https://github.com/tarotaro/omnifood', // TODO
      },
      {
        num: '04',
        cat: 'TypeScript & React',
        year: '2025',
        title: '支出管理アプリ',
        desc: 'ReactとTypeScriptで構築した家計簿アプリ。カテゴリ別に支出を追加・削除し、集計と日付フィルタ機能を実装。初めてのTypeScriptフルプロジェクト。',
        tags: ['TypeScript', 'React', 'Context API', 'Vite'],
        live: 'https://tarotaro.github.io/omnifood', // TODO
        github: 'https://github.com/tarotaro/omnifood', // TODO
      },
    ],
  },

  // ── Experience ────────────────────────────────────────
  experience: {
    eyebrow: '経歴',
    heading1: '学歴と',
    heading2: '職歴',
    note: 'CSE理工学士号取得。バングラデシュでジュニアデザイナー（HTML/CSS/JS）として1年の実務経験。日本語プロフェッショナルな実務レベル。現在もフロントエンド開発を継続しています。',
    ongoing: '進行中',
    nextLabel: '今後の目標',
    nexts: [
      {
        goal: 'Next.js',
        detail:
          'SSR/SSGを学ぶためにドキュメントを読み、ブログプロジェクトを構築中です。',
      },
      {
        goal: 'テスト',
        detail:
          'React Testing LibraryとJestで適切なテストを書けるよう学ぶ予定です。',
      },
      {
        goal: '日本でのIT就職',
        detail:
          '日本国内のIT・フロントエンド・Web開発ポジションに積極的に応募しています。',
      },
    ],
    items: [
      {
        org: '独学',
        period: '2024年1月 — 現在',
        loc: 'オンライン / Udemy',
        role: 'フロントエンドエンジニア（独学）',
        desc: 'HTML・CSS・JavaScript・TypeScript・Reactを体系的に学習。Udemyで4つのコースを修了し、複数のライブプロジェクトを公開しました。',
        tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
        isCurrent: true,
      },
      {
        org: '翰林日本語学院',
        period: '2024年4月 — 2025年6月',
        loc: '日本',
        role: '日本語プログラム',
        desc: '日本での就労に向けて全日制の日本語教育を修了。2025年6月卒業。',
        tags: ['日本語', 'JLPT N2', 'JLPT N3'],
        isCurrent: false,
      },
      {
        org: '外国人就労・定着支援研修',
        period: '2024年1月 — 2024年3月',
        loc: '日本',
        role: '就労・定着支援プログラム',
        desc: '外国人として日本で働き定着するための研修を修了。',
        tags: ['日本の職場文化', '就労支援'],
        isCurrent: false,
      },
      {
        org: '株式会社 e-Soft',
        period: '2021年1月 — 2022年2月',
        loc: 'バングラデシュ',
        role: 'ジュニアデザイナー',
        desc: 'HTML・CSS・JavaScriptを用いたWebインターフェースのデザイン・制作。IT企業での1年間のフロントエンド実務経験。',
        tags: ['HTML', 'CSS', 'JavaScript', 'UIデザイン'],
        isCurrent: false,
      },
      {
        org: 'ブリタニア大学 コンピュータ理工学部',
        period: '2016年6月 — 2020年6月',
        loc: 'バングラデシュ',
        role: 'コンピュータ理工学 学士（CSE）',
        desc: 'コンピュータサイエンス・エンジニアリング（CSE）の理工学士号を取得。プログラミングとソフトウェア開発の基礎を修得。',
        tags: ['CSE', 'コンピュータサイエンス', 'ソフトウェア工学'],
        isCurrent: false,
      },
    ],
  },

  // ── Contact ───────────────────────────────────────────
  contact: {
    eyebrow: 'お問い合わせ',
    heading1: 'ぜひ一緒に',
    heading2: '機会を',
    heading3: '作りましょう。',
    intro:
      '現在、<strong>日本国内のITポジション</strong>（フロントエンド開発・Webエンジニアリング等）を積極的に探しています。ご興味をお持ちいただけましたら、ぜひご連絡ください！',
    quote:
      '「CSE理工学士号、ジュニアデザイナーとして1年の実務経験、4言語対応（ベンガル語・英語・日本語・ヒンディー語）。日本でITエンジニアとして成長し、貢献したいと考えています。」',
    links: [
      [
        'メール',
        'taklimakabir120@gmail.com',
        'mailto:taklimakabir120@gmail.com',
      ],
      ['電話', '080-7672-9428', 'tel:08076729428'],
      [
        'GitHub',
        'github.com/shima-taklima',
        'https://github.com/shima-taklima',
      ],
      ['LinkedIn', 'linkedin.com/in/yourprofile', '#'],
    ],
    labelName: 'お名前',
    labelEmail: 'メールアドレス',
    labelMessage: 'メッセージ',
    placeholderName: 'お名前を入力してください',
    placeholderEmail: 'your@email.com',
    placeholderMessage:
      'ポートフォリオを拝見しました。ぜひお話しさせてください...',
    send: 'メッセージを送る →',
    sending: '送信中...',
    successTitle: 'ありがとうございます！',
    successBody: 'できるだけ早くご返信いたします。',
    another: 'もう一通送る',
    errorTitle: '送信に失敗しました',
    errorBody:
      'メッセージを送信できませんでした。もう一度お試しいただくか、直接メールでご連絡ください。',
    tryAgain: 'もう一度試す',
    spamNote: '入力情報は第三者に提供・販売されることはありません。',
  },

  // ── Footer ────────────────────────────────────────────
  footer: {
    tagline: 'ITエンジニア · CSE理工学士 · 日本で求職中',
    copy: '· Built with React + Tailwind CSS · Deployed on GitHub Pages',
    socials: [
      { name: 'GitHub', url: 'https://github.com/shima-taklima' },
      { name: 'LinkedIn', url: '#' }, // TODO
      { name: 'Twitter', url: '' }, // TODO
    ],
  },
};

export default ja;
