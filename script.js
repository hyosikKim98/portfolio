// 내용 수정 위치: 아래 portfolioData만 수정하면 전체 문서가 갱신됩니다.
const portfolioData = {
  header: {
    name: '김효식',
    role: '신입 백엔드 엔지니어',
    photo: {
      src: 'img/김효식_사진.png',
      alt: '김효식 프로필 사진',
    },
    contact: {
      email: 'gytlr339@gmail.com',
      github: 'https://github.com/hyosikKim98',
      blog: 'https://www.notion.so/22509bd4b28c8099a3edcedc03db4905?source=copy_link',
      portfolio:
        'https://www.notion.so/22509bd4b28c8099a3edcedc03db4905?source=copy_link',
    },
  },

  about: {
    paragraphs: [
      '복잡한 요구사항을 그대로 구현하기보다, 먼저 상태 변화와 책임 경계를 나눠 문제를 단순한 흐름으로 정리하는 개발자입니다.',
      '백엔드 구현에서 특히 중요하게 보는 기준은 데이터가 언제, 어떤 조건에서, 누구에 의해 변경되는지 설명 가능한 구조를 만드는 것입니다.',
      '동시성 제어, 인증 흐름, 장애 대응, 모니터링처럼 실제 운영에서 시스템 신뢰성을 높이는 기술 영역에 관심이 많습니다.',
    ],
  },

  projects: [
    {
      title: 'Shopping API Server',
      oneLine:
        '쇼핑몰의 기능에서 동시 주문 제어와 재고 무결성, 조회 캐시 기능에 집중했습니다.',
      links: {
        github: 'https://github.com/hyosikKim98/shoppingmall',
      },
      architectureImage: {
        src: 'img/Shopping_Architecture.png',
        alt: 'Shopping API Server 아키텍처 이미지',
        caption:
          'API 서버, PostgreSQL, Redis 캐시/락, JWT 인증 구성을 한눈에 보여주는 아키텍처 다이어그램',
      },
      overview: {
        description:
          'JWT 인증, 상품 관리, 주문/취소를 제공하는 쇼핑몰 백엔드입니다. 주문에는 Redis 락과 조건부 재고 차감을 적용해 동시 주문 상황에서도 재고 무결성을 유지하고, 상품 조회에는 Redis 캐시를 적용했습니다.',
        role: '백엔드 설계 및 구현, 인증/인가, 주문 동시성 제어, 상품 조회 캐시, 모니터링 구성을 담당했습니다.',
        tech: 'Backend:[Spring Boot, JWT, MyBatis], Database:[PostgreSQL, Redis], Tooling:[Flyway, JMeter], Monitoring:[Prometheus, Grafana]',
        feature:
          '회원가입/로그인, 상품 관리, 상품 목록/상세 조회 캐싱, 주문 생성/취소, refresh 토큰 재발급',
      },
      parrl: {
        problem:
          '동일 상품에 동시 주문이 몰릴 때 oversell이 발생할 가능성이 있고, 인기 상품들은 동일 요청이 DB에 집중될 수 있었습니다.',
        approach:
          '주문에는 상품별 Redis 락, DB에는 조건부 재고 차감을 함께 적용하고, 락 경합(429)과 재고 부족(409) 응답을 분리했습니다. 조회에는 상세/목록 조회 결과를 Redis에 캐싱하고, 상품 수정이나 삭제 시 캐시를 무효화했습니다.',
        result:
          '동시성 통합 테스트에서는 {재고=100, 요청=140 기준 성공=100, 실패=40, 최종 재고=0}으로 oversell 없이 검증했고, JMeter로 주문 경합 시나리오와 인기 상품 조회 시나리오를 Grafana 대시보드로 관측할 수 있게 구성했습니다.',
        learned:
          '안정적인 서비스를 위해 안정성을 중첩 설계해야 실제 운영 수준의 신뢰성을 확보할 수 있다는 점을 배웠습니다.',
      },
      engineeringPoints: [
        'Redis 락 기반 동시성 제어',
        'DB 조건부 재고 차감으로 oversell 방지',
        '상품 상세/목록 조회 Redis 캐싱',
      ],
    },
    {
      title: 'Ticketing Server',
      oneLine:
        '티켓팅에서 대기열 제어와 결제 흐름, 재고 정합성 확보에 집중했습니다.',
      links: {
        github: 'https://github.com/hyosikKim98/Ticketing-server',
      },
      architectureImage: {
        src: 'img/TIcket_Architecture.png',
        alt: 'Ticketing Server 아키텍처 이미지',
        caption:
          'Redis 대기열과 활성 슬롯, Kafka (결제 요청+재고 차감)트랜잭션, Prometheus/Grafana 관측 흐름을 정리한 아키텍처 다이어그램',
      },
      overview: {
        description:
          '대규모 요청이 몰리는 티켓 예매 상황을 가정해, Redis 기반 대기열 및 활성 슬롯 제어와 Kafka 비동기 결제 요청 처리를 중심으로 설계한 Spring Boot 백엔드 프로젝트입니다.',
        role: '백엔드 설계/구현',
        tech: 'Backend:[Spring Boot, JWT, JPA], Messaging:[Kafka], Database:[PostgreSQL, Redis], Tooling:[Flyway, JMeter], Monitoring:[Prometheus, Grafana]',
        feature:
          'JWT 로그인, Redis ZSET 대기열, 20-slot 입장 제어, 관리자 수동 발급, Kafka 결제 요청 처리, 재고 차감, 운영 메트릭 수집',
      },
      parrl: {
        problem:
          '동시 접속이 몰리는 예매 환경에서는 요청이 한 번에 결제 단계로 유입되면 병목과 정합성 문제가 발생할 수 있었습니다.',
        approach:
          '이벤트별 대기열과 활성 슬롯을 관리하고, 결제 요청은 비동기 분리해 DB 저장과 재고 차감을 트랜잭션으로 처리했습니다.',
        result:
          '대기열과 결제 흐름을 분리해 혼잡 상황에서도 활성 사용자 수와 재고 상태를 안정적으로 제어할 수 있는 구조를 검증했습니다.',
        learned:
          '고트래픽 환경에서는 모든 요청을 한 번에 처리하기보다, 요청 처리 순서를 제어함으로서 안정성을 확보할 수 있다는 점을 배웠습니다.',
      },
      engineeringPoints: [
        'Redis ZSET으로 대기열 진입과 순번 조회 구현',
        '활성 사용자 20명만 입장할 수 있도록 토큰 발급',
        '만료된 입장 토큰을 정리하는 스케줄러 구현',
        'Kafka consumer에서 결제 요청 저장과 재고 차감을 트랜잭션으로 처리',
      ],
    },
  ],
  highlights: [
    {
      title: 'Redis 락 + 조건부 재고 차감으로 oversell 방지',
      problem:
        '같은 상품에 주문이 동시에 몰리면 재고가 음수가 되거나 한 재고가 두 번 차감될 수 있었습니다.',
      cause:
        '먼저 재고를 조회하고 그다음 차감하는 방식만으로는 동시에 들어오는 주문을 안전하게 막기 어려웠습니다.',
      solution:
        '상품마다 Redis 락을 먼저 잡고, DB에서는 재고가 남아 있을 때만 차감되는 조건부 쿼리를 사용했습니다. 또 락 때문에 실패한 경우(429)와 재고가 없어서 실패한 경우(409)를 나눠서 확인할 수 있게 했습니다.',
      result:
        '주문이 몰릴수록 Redis 사용량과 응답 시간이 같이 올라갔고, 후반에는 성공 주문보다 재고 부족 응답이 더 많이 나타났습니다. 중요한 점은 oversell 없이, 실패도 제어 가능한 형태로 처리됐다는 것입니다.',
      dashboards: [
        {
          src: 'img/shopping_scenarioA2.png',
          alt: 'Shopping API Server Grafana 시나리오 A 대시보드',
          caption:
            '같은 상품에 주문이 몰릴 때 처리량, 응답 시간, 성공/실패 흐름, Redis 락 사용량이 어떻게 변하는지 보여주는 대시보드입니다.',
        },
      ],
    },
    {
      title: '상품 목록 조회 캐싱으로 반복 읽기 비용 절감',
      problem:
        '많이 보는 상품 목록을 매번 DB에서 다시 조회하면 읽기 부하가 계속 쌓일 수 있었습니다.',
      cause:
        '같은 조건의 목록 조회가 반복돼도 이를 저장해 두는 캐시가 없어서 DB를 계속 호출하고 있었습니다.',
      solution:
        '상품 목록 조회 결과를 Redis에 저장해 두고, 상품이 바뀌면 관련 캐시를 지우도록 했습니다. 검증은 자주 보는 목록 50%, 랜덤 목록 50%로 나눠서 진행했습니다.',
      result:
        '성공 비율은 그대로 유지하면서 Redis hit가 miss보다 높게 나왔고, 동시에 p50/p95/p99 지연시간도 더 낮아졌습니다. 반복 조회 요청이 실제로 캐시로 흡수된다는 점을 확인할 수 있었습니다.',
      dashboards: [
        {
          src: 'img/shopping_scenarioB2.png',
          alt: 'Shopping API Server Grafana 시나리오 B 대시보드',
          caption:
            '상품 목록 캐시 적용 후 처리량, 응답 시간, 성공 비율, Redis hit/miss 변화를 함께 볼 수 있는 대시보드입니다. (왼쪽이 캐싱)',
        },
      ],
    },
    {
      title: 'Redis 기반 대기열·활성 슬롯 제어',
      problem:
        '많은 사용자가 한 번에 결제 단계로 들어오면 서버가 버티기 어렵고, 처리 순서도 꼬일 수 있었습니다.',
      cause:
        '대기열 없이 바로 처리하면 순간적으로 요청이 몰리면서 병목과 정합성 문제가 생기기 쉬웠습니다.',
      solution:
        'Redis ZSET을 사용해 이벤트별 대기열과 현재 입장 가능한 사용자 수를 따로 관리했습니다. 빈 슬롯이 생기면 다음 사용자에게 자동으로 입장 토큰이 넘어가도록 만들었습니다.',
      result:
        '활성 슬롯 수를 제한한 상태에서도 대기열이 줄어들고, 결제 완료나 만료에 따라 슬롯이 다시 배분되는 흐름을 확인할 수 있었습니다.',
      dashboards: [
        {
          src: 'img/ticket_dashboard.png',
          alt: 'Ticketing Server Grafana 대시보드',
          caption:
            '활성 슬롯 제한 아래에서 대기열이 줄고, 슬롯이 다시 배정되는 흐름을 보여주는 대시보드입니다.',
        },
      ],
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
    awards: [
      '팀 프로젝트 기반 서비스 구현 경험',
      '기술 문서 및 아키텍처 정리 습관 보유',
    ],
  },
  contact: {
    name: '김효식',
    email: 'gytlr339@gmail.com',
    github: 'https://github.com/hyosikKim98',
    blog: 'https://www.notion.so/22509bd4b28c8099a3edcedc03db4905?source=copy_link',
    message:
      '문제의 원인을 구조로 설명하고, 운영 가능한 백엔드를 만드는 개발자로 성장하고 있습니다.',
  },
};

function renderHeader() {
  const data = portfolioData.header;
  document.getElementById('header').innerHTML = `
    <div class="doc-header" id="top">
      <div class="doc-header-top">
        <div class="doc-header-main">
          <img class="doc-profile-image" src="${data.photo.src}" alt="${data.photo.alt}">
          <div class="doc-header-content">
            <div class="doc-header-copy">
              <h1 class="doc-title">${data.name}</h1>
              <p class="role">${data.role}</p>
        
            </div>
            <ul class="meta-list" aria-label="연락처 및 링크">
              <li><span class="meta-label">Email</span><span class="meta-value">${data.contact.email}</span></li>
              <li><span class="meta-label">GitHub</span><span class="meta-value">${data.contact.github}</span></li>
              <li><span class="meta-label">Blog</span><span class="meta-value"><a href="${data.contact.blog}" target="_blank" rel="noopener">[Notion_Blog]</a></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAbout() {
  const data = portfolioData.about;
  document.getElementById('about').innerHTML = `
    <div class="section" id="about-section">
      <h2 class="section-title">About Me</h2>
      
      <article>${data.paragraphs.map((p) => `<p class="paragraph">${p}</p>`).join('')}</article>
    </div>
  `;
}

function renderProjects() {
  const entries = portfolioData.projects
    .map(
      (p) => `
      <article class="project-entry">
        <div class="project-leading">
          <div class="project-header">
            <div>
              <div class="project-title-row">
                <h3 class="project-title">${p.title}</h3>
                <a class="project-inline-link" href="${p.links.github}">[GitHub]</a>
              </div>
              <p class="project-one-line">${p.oneLine}</p>
            </div>
          </div>
        </div>

        <h4 class="subsection-title">Project Overview</h4>
        <div class="project-grid">
          <div class="project-block"><strong>프로젝트 설명</strong>${p.overview.description}</div>
          <div class="project-block"><strong>담당 역할</strong>${p.overview.role}</div>
          <div class="project-block"><strong>사용 기술</strong>${p.overview.tech}</div>
          <div class="project-block"><strong>핵심 기능 요약</strong>${p.overview.feature}</div>
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

        <h4 class="subsection-title">문제 상황 / 해결 방법 / 결과 / 배운 점</h4>
        <div class="project-grid">
          <div class="project-block"><strong>문제 상황</strong>${p.parrl.problem}</div>
          <div class="project-block"><strong>해결 방법</strong>${p.parrl.approach}</div>
          <div class="project-block"><strong>결과</strong>${p.parrl.result}</div>
          <div class="project-block"><strong>배운 점</strong>${p.parrl.learned}</div>
        </div>

        <h4 class="subsection-title">Backend Engineering Points</h4>
        <ul class="tag-list">
          ${p.engineeringPoints.map((point) => `<li class="tag">${point}</li>`).join('')}
        </ul>
      </article>
    `,
    )
    .join('');

  document.getElementById('projects').innerHTML = `
    <div class="section" id="projects-section">
      <h2 class="section-title">Projects</h2>
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
        <p class="paragraph"><strong>해결책:</strong> ${h.solution}</p>
        <p class="paragraph"><strong>결과:</strong> ${h.result}</p>
        ${
          h.dashboards && h.dashboards.length
            ? `
              <div class="dashboard-grid">
                ${h.dashboards
                  .map(
                    (image) =>
                      `
                      <figure class="dashboard-figure">
                        <img class="dashboard-image" src="${image.src}" alt="${image.alt}">
                        <figcaption class="architecture-caption">${image.caption}</figcaption>
                      </figure>
                    `,
                  )
                  .join('')}
              </div>
            `
            : ''
        }
      </article>
    `,
    )
    .join('');

  document.getElementById('engineering-highlights').innerHTML = `
    <div class="section" id="engineering-highlights-section">
      <h2 class="section-title">Engineering Highlights</h2>
      
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
  document.getElementById('education').innerHTML =
    `
    <div class="section" id="education-section">
      <h2 class="section-title">Education / Certificates</h2>
    
      <div class="triple-grid">
        <article class="info-block">
          <h3>Education</h3>
          <ul class="plain-list">${data.education.map((v) => `<li>${v}</li>`).join('')}</ul>
        </article>
        <article class="info-block">
          <h3>Certificates</h3>
          <ul class="plain-list">${data.certificates.map((v) => `<li>${v}</li>`).join('')}</ul>
        </article>
        ` /*
        <article class="info-block">
          <h3>Awards / Others</h3>
          <ul class="plain-list">${data.awards.map((v) => `<li>${v}</li>`).join('')}</ul>
        </article>
        */ +
    `
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
  renderAbout();
  renderProjects();
  renderHighlights();
  renderExperience();
  renderEducation();
  renderContact();
  setupEvents();
}

document.addEventListener('DOMContentLoaded', init);
