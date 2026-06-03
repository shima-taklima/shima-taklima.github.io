const ja = {
  // ── Nav ──────────────────────────────────────────────
  nav: {
    about: '自己紹介',
    skills: 'スキル',
    projects: 'プロジェクト',
    experience: '学習歴',
    contact: 'お問い合わせ',
    hire: '採用のご相談 →',
  },

  // ── Hero ─────────────────────────────────────────────
  hero: {
    badge: '求職中 · 2026年',
    line1: '学んで、',
    line2: '作って、',
    line3: '成長する。',
    roles: ['HTML & CSS', 'JavaScript', 'TypeScript', 'Reactエンジニア'],
    cta1: '作品を見る →',
    cta2: 'お問い合わせ',
    stat1n: '1年+',
    stat1l: '学習歴',
    stat2n: '4件+',
    stat2l: 'プロジェクト',
    stat3n: '3講座',
    stat3l: '修了コース',
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
    location: '学習歴1年 · 2025年',
    heading1: '熱意あるビギナー、',
    heading2: '本気で',
    heading3: 'コードと向き合う。',
    p1: 'はじめまして。<strong>フロントエンドエンジニアを目指して独学中</strong>です。Udemyで<strong>HTML・CSS・JavaScript・TypeScript・React</strong>を体系的に学び、複数のライブプロジェクトをリリースしました。',
    p2: 'コードを書いてアイデアを形にすることが大好きです。読みやすく保守しやすいコードを心がけており、<strong>フロントエンドエンジニアとしての最初のキャリア</strong>をスタートできる企業を積極的に探しています。',
    meta: [
      ['状況', '就職活動中'],
      ['専門', 'フロントエンド / React'],
      ['言語', '日本語（JLPT N2）· 英語'],
      ['雇用形態', '正社員 / アルバイト'],
    ],
    cv: '職務経歴書をDL ↓',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    twitter: 'Twitter',
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
    eyebrow: '学習ジャーニー',
    heading1: 'フロントエンドへの',
    heading2: '歩み',
    note: 'IT系の学位はありません。コツコツとした独学と実際のプロジェクト制作、そしてWebを作ることへの純粋な情熱で今の自分があります。',
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
        goal: '初就職',
        detail:
          '日本国内でジュニアエンジニアまたはインターンのポジションに積極的に応募しています。',
      },
    ],
    items: [
      {
        org: '独学',
        period: '2024年1月 — 現在',
        loc: 'オンライン / Udemy',
        role: 'フロントエンドエンジニア（学習中）',
        desc: '1年以上かけてフロントエンド教育を体系的に受講。HTML・CSS・JavaScript・TypeScript・Reactをカバーする4つのUdemyコースを修了しました。',
        tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
        isCurrent: true,
      },
      {
        org: 'Udemy',
        period: '2024年10月 — 12月',
        loc: 'Maximilian Schwarzmüller',
        role: 'React — The Complete Guide',
        desc: 'Reactをゼロから習得。コンポーネント、props、state、hooks、Context API、React Router、SPAプロジェクト構築を実践。',
        tags: ['React', 'Hooks', 'Context API', 'SPA'],
        isCurrent: false,
      },
      {
        org: 'Udemy',
        period: '2024年8月 — 10月',
        loc: 'Maximilian Schwarzmüller',
        role: 'Understanding TypeScript',
        desc: 'TypeScriptの基礎を習得：型、インターフェース、クラス、ジェネリクス、デコレータ、ReactとのTypeScript統合。',
        tags: ['TypeScript', 'ジェネリクス', 'インターフェース', 'OOP'],
        isCurrent: false,
      },
      {
        org: 'Udemy',
        period: '2024年4月 — 8月',
        loc: 'Jonas Schmedtmann',
        role: 'The Complete JavaScript Course',
        desc: 'JavaScriptを徹底的に学習：DOM操作、ES6+、async/await、Promise、クロージャ、プロトタイプ、OOP、イベントループ。',
        tags: ['JavaScript', 'ES6+', '非同期処理', 'OOP'],
        isCurrent: false,
      },
      {
        org: 'Udemy',
        period: '2024年1月 — 4月',
        loc: 'Jonas Schmedtmann',
        role: 'Build Responsive Websites（HTML & CSS）',
        desc: 'ここから旅が始まりました。セマンティックHTML5・モダンCSS3・Flexbox・CSS Grid・レスポンシブデザインを学び、初めてのライブサイトを公開。',
        tags: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'レスポンシブ'],
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
      '現在、<strong>フロントエンドエンジニアとしての最初のポジション</strong>（正社員・インターン・フリーランス案件）を探しています。ご興味をお持ちいただけましたら、ぜひご連絡ください！',
    quote:
      '「経験は少ないですが、強い好奇心と学習力、そして成長への強いモチベーションを持っています。」',
    links: [
      [
        'メール',
        'taklimakabir120@gmail.com',
        'mailto:taklimakabir120@gmail.com',
      ],
      ['GitHub', 'github.com/shima-taklima', '#'],
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
    tagline: 'Junior Frontend Developer · Open to work',
    copy: '· Built with React + Tailwind CSS · Deployed on GitHub Pages',
    socials: [
      { name: 'GitHub', url: 'https://github.com/shima-taklima' },
      { name: 'LinkedIn', url: '#' }, // TODO
      { name: 'Twitter', url: '' }, // TODO
    ],
  },
};

export default ja;
