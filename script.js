// 내용 수정 위치: 아래 portfolioData만 수정하면 전체 문서가 갱신됩니다.
const portfolioData = {
  header: {
    name: '김효식',
    role: '신입 백엔드 엔지니어',
    oneLine: '정합성과 운영 관측성을 우선해 서비스 흐름을 설계하는 백엔드 엔지니어입니다.',
    contact: {
      email: 'gytlr339@gmail.com',
      github: 'https://github.com/hyosikKim98',
      blog: 'https://www.notion.so/22509bd4b28c8099a3edcedc03db4905?source=copy_link',
      portfolio: 'https://www.notion.so/22509bd4b28c8099a3edcedc03db4905?source=copy_link',
    },
  },
  toc: [
    { label: 'About', href: '#about-section' },
    { label: 'Tech Stack', href: '#tech-stack-section' },
    { label: 'Projects', href: '#projects-section' },
    {
      label: 'Engineering Highlights',
      href: '#engineering-highlights-section',
    },
    { label: 'Experience', href: '#experience-section' },
    { label: 'Education / Certificates / Awards', href: '#education-section' },
    { label: 'Contact', href: '#contact-section' },
  ],
  summary: {
    lines: [
      '동시성 제어, 인증 흐름, 운영 관측성처럼 백엔드 서비스의 신뢰성을 좌우하는 문제를 구조적으로 정의하고 해결해 왔습니다.',
      'Spring Boot 기반 API 서버를 설계하며 트랜잭션 경계, 데이터 정합성, 예외 응답 표준화를 함께 고려했습니다.',
      '문제 해결을 코드 단위에만 두지 않고 테스트 시나리오, 문서화, 모니터링까지 연결해 운영 가능한 형태로 마무리하는 것을 중요하게 생각합니다.',
    ],
    keywords: [
      '데이터 정합성',
      '운영 안정성',
      '문제 해결',
      '성능 개선',
      '협업',
    ],
    metrics: [
      { key: '프로젝트 수', value: '2개 메인 백엔드 프로젝트' },
      { key: '주요 기술', value: 'Spring Boot, Redis, PostgreSQL, Kafka' },
      { key: '관심 분야', value: '동시성 제어, 인증/인가, 운영 관측성' },
      { key: '협업 경험', value: '팀 프로젝트, API 문서화, Git 기반 협업 경험' },
    ],
  },
  about: {
    paragraphs: [
      '복잡한 요구사항을 그대로 구현하기보다, 먼저 상태 변화와 책임 경계를 나눠 문제를 단순한 흐름으로 정리하는 개발자입니다.',
      '백엔드 구현에서 특히 중요하게 보는 기준은 데이터가 언제, 어떤 조건에서, 누구에 의해 변경되는지 설명 가능한 구조를 만드는 것입니다.',
      '동시성 제어, 인증 흐름, 장애 대응, 모니터링처럼 실제 운영에서 시스템 신뢰성을 높이는 기술 영역에 관심이 많습니다.',
    ],
  },
  techStack: [
    {
      category: 'Language',
      skills: '[예: Java, Kotlin, SQL]',
      note: '[언어 선택 기준 또는 활용 경험 한 줄 설명]',
    },
    {
      category: 'Backend',
      skills: '[예: Spring Boot, JPA, QueryDSL]',
      note: '[API 서버 설계 및 비즈니스 로직 구현 경험]',
    },
    {
      category: 'Database',
      skills: '[예: MySQL, PostgreSQL, Redis]',
      note: '[데이터 모델링/트랜잭션/정합성 고려 경험]',
    },
    {
      category: 'Infra / DevOps',
      skills: '[예: Docker, AWS EC2, Nginx, GitHub Actions]',
      note: '[배포 자동화 및 운영 안정성 관점의 경험]',
    },
    {
      category: 'Tools / Collaboration',
      skills: '[예: Git, Jira, Notion, Slack]',
      note: '[협업 프로세스/문서화/코드리뷰 경험]',
    },
  ],
  projects: [
    {
      title: 'Shopping API Server',
      period: '2026.02',
      type: '개인 프로젝트',
      oneLine: '동시성 제어와 재고 무결성에 집중한 Spring Boot 쇼핑몰 백엔드',
      links: {
        github: 'https://github.com/hyosikKim98',
        demo: '#',
        docs: '#',
        architecture: '#',
      },
      architectureImage: {
        src: '',
        alt: 'Shopping API Server 아키텍처 이미지',
        caption: 'API 서버, PostgreSQL, Redis 캐시/락, 모니터링 구성을 한눈에 보여주는 아키텍처 자리입니다.',
      },
      overview: {
        description:
          'JWT 인증, 상품 관리, 주문/취소를 제공하는 쇼핑몰 백엔드입니다. Redis 락과 조건부 재고 차감으로 동시 주문 상황에서도 재고 무결성을 유지하도록 설계했습니다.',
        role: '백엔드 설계 및 구현, 인증/인가, 주문 동시성 제어, 문서화, 테스트와 모니터링 구성을 담당했습니다.',
        tech: 'Java 21, Spring Boot, Spring Security, JWT, MyBatis, PostgreSQL, Redis, JUnit 5, Prometheus, Grafana',
        feature:
          '회원가입/로그인, 상품 관리, 상품 조회 캐싱, 주문 생성/취소, refresh 토큰 재발급',
      },
      parrl: {
        problem:
          '동일 상품에 동시 주문이 몰릴 때 oversell이 발생할 수 있었습니다.',
        approach:
          '상품별 Redis 락과 DB 조건부 재고 차감을 함께 적용하고, 락 실패를 429 응답으로 분리했습니다.',
        result:
          '동시성 테스트에서 재고 100개, 요청 140건 기준 성공 100건, 실패 40건, 최종 재고 0개로 oversell 없이 검증했습니다.',
        learned:
          '운영 안정성은 락만이 아니라 트랜잭션, 예외 설계, 테스트 검증까지 함께 설계해야 확보된다는 점을 배웠습니다.',
      },
      engineeringPoints: [
        '주문 생성/취소 트랜잭션 처리',
        'Redis 락 기반 동시성 제어',
        '주문/상품/인증 중심 DB 모델링',
        '상품 조회 Redis 캐싱',
        '초기 데이터 및 마이그레이션 관리',
        'OpenAPI 및 기술 문서화',
        '전역 예외 처리와 에러 코드 표준화',
      ],
      notes: {
        troubleshooting:
          'Redis 장애나 락 경합 상황을 서버 오류가 아니라 제어 가능한 실패 흐름으로 다뤘습니다.',
        architecture:
          'Auth/Product/Order API, MyBatis, PostgreSQL, Redis 캐시/락, JWT 인증 구조로 구성했습니다.',
        metric:
          'initial=100, requests=140, success=100, rejected=40, finalStock=0',
      },
    },
    {
      title: 'Ticketing Server',
      period: '2026.03',
      type: '개인 프로젝트',
      oneLine:
        'Redis 대기열과 Kafka 비동기 결제로 트래픽 피크를 제어한 티켓팅 백엔드',
      links: {
        github: 'https://github.com/hyosikKim98',
        demo: '#',
        docs: '#',
        architecture: '#',
      },
      architectureImage: {
        src: '',
        alt: 'Ticketing Server 아키텍처 이미지',
        caption: '대기열, 결제, 재고 차감, 모니터링 경로를 문서형 다이어그램으로 넣을 공간입니다.',
      },
      overview: {
        description:
          '대규모 요청이 몰리는 티켓 예매 상황을 가정해, 대기열 제어와 비동기 결제를 중심으로 설계한 Spring Boot 백엔드 프로젝트입니다.',
        role: '백엔드 전반 구현',
        tech: 'Java, Spring Boot, Spring Security, JPA, PostgreSQL, Redis, Kafka, Flyway, Prometheus, Grafana, JMeter',
        feature:
          'JWT 로그인, Redis 대기열, 20-slot 입장 제어, Kafka 결제 요청 처리, 재고 차감, 운영 메트릭 수집',
      },
      parrl: {
        problem:
          '동시 접속이 몰리는 예매 환경에서는 서버 병목, 중복 결제, 재고 불일치가 발생할 수 있었습니다.',
        approach:
          'Redis ZSET으로 대기열과 활성 슬롯을 관리하고, 결제 요청은 Kafka로 비동기 분리해 재고 차감을 트랜잭션으로 처리했습니다.',
        result:
          '활성 슬롯 20개 제어와 200-user JMeter 시나리오 기반으로 혼잡 상황을 재현·관측할 수 있는 구조를 구축했습니다.',
        learned:
          '고트래픽 환경에서는 처리 속도보다 상태 일관성과 운영 관측성을 함께 설계하는 것이 중요하다는 점을 배웠습니다.',
      },
      engineeringPoints: [
        'Kafka consumer 트랜잭션 기반 재고 차감',
        'Redis 대기열 및 활성 슬롯 동시성 제어',
        'PaymentRequest 중심 DB 정합성 설계',
        'Redis 기반 대기열 캐싱',
        '만료 슬롯 정리 스케줄러 구현',
        'OpenAPI 3.0 문서화',
        '공통 예외 응답 처리',
      ],
      notes: {
        troubleshooting:
          '토큰 만료 후 슬롯이 반환되지 않는 문제를 스케줄러 기반 정리 로직으로 보완했습니다.',
        architecture:
          'Spring Boot API가 Redis, PostgreSQL, Kafka를 연계해 예매 대기열과 결제 흐름을 분리 처리하는 구조입니다.',
        metric:
          '활성 슬롯 20개, JMeter 200-user mixed-flow 테스트 기준으로 검증했습니다.',
      },
    },
  ],
  highlights: [
    {
      title: 'Redis 락 기반 재고 차감 구조화',
      problem: '동시 주문 시 상품 재고가 음수로 내려가거나 중복 차감될 수 있는 위험이 있었습니다.',
      cause: '애플리케이션 단의 단순 조회 후 차감 방식만으로는 경쟁 상태를 제어하기 어려웠습니다.',
      solution: '상품별 Redis 락 획득 후 조건부 차감 쿼리를 실행하고, 실패 케이스를 명확한 API 응답으로 분리했습니다.',
      result: '동시성 테스트에서 oversell 없이 재고 0으로 정확히 종료되는 흐름을 확인했습니다.',
    },
    {
      title: '대기열과 활성 슬롯 분리 운영',
      problem: '예매 요청이 한번에 몰릴 경우 모든 사용자가 동시에 결제 로직으로 들어가 병목이 발생할 수 있었습니다.',
      cause: '입장 제어가 없으면 서버 리소스가 급격히 소모되고, 결제/재고 처리 구간의 안정성이 떨어집니다.',
      solution: 'Redis ZSET으로 대기열과 활성 사용자 슬롯을 분리하고, 일정 수만 결제 단계로 진입하도록 설계했습니다.',
      result: '활성 슬롯 20개 기준으로 혼잡 상황을 안정적으로 재현·관측할 수 있는 구조를 마련했습니다.',
    },
    {
      title: '상품 조회 캐싱으로 반복 읽기 비용 절감',
      problem: '자주 조회되는 상품 상세/목록 요청이 모두 DB로 직접 전달되면 읽기 부하가 집중될 수 있었습니다.',
      cause: '읽기 비율이 높은 데이터에 대한 캐싱 계층이 없어서 동일 쿼리가 반복 실행됐습니다.',
      solution: '상품 조회 결과를 Redis에 캐싱하고, 변경 시 캐시 무효화 정책을 함께 적용했습니다.',
      result: '읽기 성능 최적화와 함께 캐시-원본 데이터 불일치 가능성을 줄이는 운영 기준을 정리했습니다.',
    },
  ],
  experience: [
    {
      period: '2025.09 - 2026.03',
      title: '백엔드 중심 개인 프로젝트 수행',
      org: '개인 학습 및 포트폴리오 프로젝트',
      description:
        '쇼핑몰/티켓팅 서버를 직접 설계·구현하며 인증, 동시성 제어, 트랜잭션, 모니터링 구조를 실험하고 문서화했습니다.',
    },
    {
      period: '2024.03 - 2024.06',
      title: 'ESG 서비스 팀 프로젝트',
      org: '부트캠프 팀 프로젝트',
      description:
        '대시보드, 기업 정보 관리, 보고서 보조 도구 프로젝트에서 백엔드 및 데이터 구조 설계 경험을 쌓았습니다.',
    },
    {
      period: '2023.12 - 2024.07',
      title: '풀스택 개발 부트캠프 수료',
      org: '실무형 개발 교육 과정',
      description:
        'Java/Spring, JavaScript/Next.js, 데이터베이스, 협업 툴을 기반으로 웹 서비스 전반을 학습했습니다.',
    },
  ],
  education: {
    education: [
      '풀스택 개발 부트캠프 수료',
      'Spring Boot, 데이터베이스, 운영 관측성 중심의 백엔드 심화 학습 진행',
    ],
    certificates: ['정보처리기사', 'SQLD'],
    awards: ['팀 프로젝트 기반 서비스 구현 경험', '기술 문서 및 아키텍처 정리 습관 보유'],
  },
  contact: {
    name: '김효식',
    email: 'gytlr339@gmail.com',
    github: 'https://github.com/hyosikKim98',
    blog: 'https://www.notion.so/22509bd4b28c8099a3edcedc03db4905?source=copy_link',
    message: '문제의 원인을 구조로 설명하고, 운영 가능한 백엔드를 만드는 개발자로 성장하고 있습니다.',
  },
};

function renderHeader() {
  const data = portfolioData.header;
  document.getElementById('header').innerHTML = `
    <div class="doc-header" id="top">
      <div class="doc-header-top">
        <div>
          <h1 class="doc-title">${data.name}</h1>
          <p class="role">${data.role}</p>
          <p class="intro">${data.oneLine}</p>
        </div>
        <ul class="meta-list" aria-label="연락처 및 링크">
          <li><span class="meta-label">Email</span><span class="meta-value">${data.contact.email}</span></li>
          <li><span class="meta-label">GitHub</span><span class="meta-value">${data.contact.github}</span></li>
          <li><span class="meta-label">Blog</span><span class="meta-value"><a href="${data.contact.blog}" target="_blank" rel="noopener">[Notion_Blog]</a></span></li>
          <li><span class="meta-label">Portfolio</span><span class="meta-value"><a href="${data.contact.portfolio}" target="_blank" rel="noopener">[Portfolio]</a></span></li>
        </ul>
      </div>
    </div>
  `;
}

function renderToc() {
  const items = portfolioData.toc
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join('');

  document.getElementById('toc').innerHTML = `
    <div class="section">
      <h2 class="section-title">Table of Contents</h2>
      <p class="section-desc">각 항목을 클릭하면 해당 섹션으로 이동합니다.</p>
      <ol class="toc-list" id="tocList">${items}</ol>
    </div>
  `;
}

function renderSummary() {
  const data = portfolioData.summary;
  document.getElementById('summary').innerHTML = `
    <div class="section">
      <h2 class="section-title">Executive Summary</h2>
      <p class="section-desc">지원자 핵심 역량을 빠르게 파악할 수 있는 요약 영역입니다.</p>
      ${data.lines.map((line) => `<p class="paragraph">${line}</p>`).join('')}
      <ul class="tag-list" aria-label="핵심 키워드">
        ${data.keywords.map((word) => `<li class="tag">${word}</li>`).join('')}
      </ul>
      <dl class="summary-grid" aria-label="요약 메타 정보">
        ${data.metrics
          .map(
            (m) => `
            <div class="summary-item">
              <dt>${m.key}</dt>
              <dd>${m.value}</dd>
            </div>
          `,
          )
          .join('')}
      </dl>
    </div>
  `;
}

function renderAbout() {
  const data = portfolioData.about;
  document.getElementById('about').innerHTML = `
    <div class="section" id="about-section">
      <h2 class="section-title">About Me</h2>
      <p class="section-desc">어떤 개발자인지, 어떤 기준으로 설계하고 구현하는지 작성합니다.</p>
      <article>${data.paragraphs.map((p) => `<p class="paragraph">${p}</p>`).join('')}</article>
    </div>
  `;
}

function renderTechStack() {
  const rows = portfolioData.techStack
    .map(
      (s) => `
      <tr>
        <th scope="row">${s.category}</th>
        <td>${s.skills}<span class="stack-note">${s.note}</span></td>
      </tr>
    `,
    )
    .join('');

  document.getElementById('tech-stack').innerHTML = `
    <div class="section" id="tech-stack-section">
      <h2 class="section-title">Tech Stack</h2>
      <p class="section-desc">기술 목록과 실제 활용 맥락을 함께 정리합니다.</p>
      <table class="key-value-table" aria-label="기술 스택 표"><tbody>${rows}</tbody></table>
    </div>
  `;
}

function renderProjects() {
  const entries = portfolioData.projects
    .map(
      (p) => `
      <article class="project-entry">
        <div class="project-header">
          <div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-one-line">${p.oneLine}</p>
          </div>
          <p class="project-meta">기간: ${p.period} | 형태: ${p.type}</p>
        </div>
        <div class="link-row" aria-label="프로젝트 링크">
          <a class="link-pill" href="${p.links.github}">GitHub</a>
          <a class="link-pill" href="${p.links.demo}">Demo</a>
          <a class="link-pill" href="${p.links.docs}">Docs</a>
          <a class="link-pill" href="${p.links.architecture}">Architecture</a>
        </div>

        <h4 class="subsection-title">Architecture</h4>
        <figure class="architecture-figure">
          ${
            p.architectureImage.src
              ? `<img class="architecture-image" src="${p.architectureImage.src}" alt="${p.architectureImage.alt}">`
              : `<div class="architecture-placeholder" aria-label="${p.architectureImage.alt}">Architecture Image Placeholder</div>`
          }
          <figcaption class="architecture-caption">${p.architectureImage.caption}</figcaption>
        </figure>

        <h4 class="subsection-title">Project Overview</h4>
        <div class="project-grid">
          <div class="project-block"><strong>프로젝트 설명</strong>${p.overview.description}</div>
          <div class="project-block"><strong>담당 역할</strong>${p.overview.role}</div>
          <div class="project-block"><strong>사용 기술</strong>${p.overview.tech}</div>
          <div class="project-block"><strong>핵심 기능 요약</strong>${p.overview.feature}</div>
        </div>

        <h4 class="subsection-title">Problem / Approach / Result / What I Learned</h4>
        <div class="project-grid">
          <div class="project-block"><strong>Problem</strong>${p.parrl.problem}</div>
          <div class="project-block"><strong>Approach</strong>${p.parrl.approach}</div>
          <div class="project-block"><strong>Result</strong>${p.parrl.result}</div>
          <div class="project-block"><strong>What I Learned</strong>${p.parrl.learned}</div>
        </div>

        <h4 class="subsection-title">Backend Engineering Points</h4>
        <ul class="tag-list">
          ${p.engineeringPoints.map((point) => `<li class="tag">${point}</li>`).join('')}
        </ul>

        <h4 class="subsection-title">Optional Notes</h4>
        <p class="paragraph">${p.notes.troubleshooting}</p>
        <p class="paragraph">${p.notes.architecture}</p>
        <p class="paragraph">${p.notes.metric}</p>
      </article>
    `,
    )
    .join('');

  document.getElementById('projects').innerHTML = `
    <div class="section" id="projects-section">
      <h2 class="section-title">Projects</h2>
      <p class="section-desc">기능 나열보다 문제 정의, 설계 근거, 결과를 중심으로 작성합니다.</p>
      ${entries}
    </div>
  `;
}

function renderHighlights() {
  const items = portfolioData.highlights
    .map(
      (h, i) => `
      <article class="highlight-item">
        <h3 class="ordered-title">${i + 1}. ${h.title}</h3>
        <p class="paragraph"><strong>문제:</strong> ${h.problem}</p>
        <p class="paragraph"><strong>원인/고려사항:</strong> ${h.cause}</p>
        <p class="paragraph"><strong>해결:</strong> ${h.solution}</p>
        <p class="paragraph"><strong>결과:</strong> ${h.result}</p>
      </article>
    `,
    )
    .join('');

  document.getElementById('engineering-highlights').innerHTML = `
    <div class="section" id="engineering-highlights-section">
      <h2 class="section-title">Engineering Highlights</h2>
      <p class="section-desc">면접관이 빠르게 기술 포인트를 확인할 수 있도록 핵심 사례를 요약합니다.</p>
      ${items}
    </div>
  `;
}

function renderExperience() {
  const items = portfolioData.experience
    .map(
      (e) => `
      <li>
        <div class="period">${e.period}</div>
        <p class="activity-title">${e.title}</p>
        <p class="paragraph">소속: ${e.org}</p>
        <p class="paragraph">${e.description}</p>
      </li>
    `,
    )
    .join('');

  document.getElementById('experience').innerHTML = `
    <div class="section" id="experience-section">
      <h2 class="section-title">Experience / Activities</h2>
      <p class="section-desc">부트캠프, 팀 프로젝트, 동아리, 운영, 인턴 경험을 시간순으로 정리합니다.</p>
      <ul class="timeline" aria-label="경험 타임라인">${items}</ul>
    </div>
  `;
}

function renderEducation() {
  const data = portfolioData.education;
  document.getElementById('education').innerHTML = `
    <div class="section" id="education-section">
      <h2 class="section-title">Education / Certificates / Awards</h2>
      <p class="section-desc">학력, 자격증, 수상/기타를 구분해 작성합니다.</p>
      <div class="triple-grid">
        <article class="info-block">
          <h3>Education</h3>
          <ul class="plain-list">${data.education.map((v) => `<li>${v}</li>`).join('')}</ul>
        </article>
        <article class="info-block">
          <h3>Certificates</h3>
          <ul class="plain-list">${data.certificates.map((v) => `<li>${v}</li>`).join('')}</ul>
        </article>
        <article class="info-block">
          <h3>Awards / Others</h3>
          <ul class="plain-list">${data.awards.map((v) => `<li>${v}</li>`).join('')}</ul>
        </article>
      </div>
    </div>
  `;
}

function renderContact() {
  const c = portfolioData.contact;
  document.getElementById('contact').innerHTML = `
    <div class="footer section" id="contact-section">
      <h2 class="section-title">Contact</h2>
      <p><strong>${c.name}</strong></p>
      <p>Email: <a href="mailto:${c.email}">${c.email}</a></p>
      <p>GitHub: <a href="${c.github}">${c.github}</a></p>
      <p>Blog: <a href="${c.blog}">${c.blog}</a></p>
      <p>${c.message}</p>
    </div>
  `;
}

function setupEvents() {
  document
    .getElementById('tocList')
    ?.addEventListener('click', function (event) {
      const target = event.target;
      if (!(target instanceof HTMLAnchorElement)) return;
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const section = document.querySelector(href);
      if (!section) return;
      event.preventDefault();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

  document.getElementById('printBtn')?.addEventListener('click', function () {
    window.print();
  });
}

function init() {
  renderHeader();
  renderToc();
  renderSummary();
  renderAbout();
  renderTechStack();
  renderProjects();
  renderHighlights();
  renderExperience();
  renderEducation();
  renderContact();
  setupEvents();
}

document.addEventListener('DOMContentLoaded', init);
