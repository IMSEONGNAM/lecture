const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

const programData = {
  worker: {
    kicker: "직장인이 꼭 알아야 할 AI 툴",
    title: "보고서, 메일, 회의록 자동화",
    desc: "반복 업무를 AI로 줄이고, 보고서와 회의록을 바로 업무 결과물로 만드는 실습형 과정입니다.",
    items: ["업무별 AI 툴 선택법", "메일·보고서 초안 작성", "회의록 정리와 후속 업무 추출"],
  },
  marketer: {
    kicker: "AI 콘텐츠팀 만들기",
    title: "SNS 콘텐츠 캘린더와 블로그 SEO 프롬프트",
    desc: "마케팅 기획부터 콘텐츠 제작, 발행 캘린더까지 AI와 함께 운영하는 흐름을 만듭니다.",
    items: ["브랜드 메시지 정리", "카드뉴스·블로그 초안 제작", "콘텐츠 캘린더 운영"],
  },
  founder: {
    kicker: "AI로 사업계획서 만들기",
    title: "정부지원사업 리서치와 피치덱 제작",
    desc: "창업자의 아이디어를 지원사업 문서, 발표 자료, 실행 계획으로 바꾸는 과정입니다.",
    items: ["시장·고객 리서치", "사업계획서 목차 설계", "피치덱 스토리라인 제작"],
  },
  work: {
    kicker: "Google Workspace와 Slack",
    title: "팀 업무를 연결하는 자동화 워크플로우",
    desc: "흩어진 업무를 협업 도구와 AI로 묶어 기록, 공유, 후속 실행이 남는 시스템을 만듭니다.",
    items: ["문서·시트 협업 구조", "Slack 업무 운영", "반복 보고 자동화"],
  },
  career: {
    kicker: "포트폴리오/커리어",
    title: "AI로 나만의 포트폴리오 홈페이지 만들기",
    desc: "경험을 정리하고 결과물을 보여주는 개인 포트폴리오를 기획부터 제작까지 실습합니다.",
    items: ["커리어 스토리 정리", "프로젝트 결과물 구성", "홈페이지 초안 제작"],
  },
  org: {
    kicker: "기관/기업 교육",
    title: "공공기관, 대학, 재직자, 창업반 맞춤 교육",
    desc: "대상과 조직 목표에 맞춰 AI 활용, 콘텐츠, 스마트워크, 창업 과정을 조합합니다.",
    items: ["교육 대상별 난이도 설계", "실습 과제와 결과물 중심 운영", "후속 자료실·커뮤니티 연계"],
  },
};

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeader);
updateHeader();

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = programData[tab.dataset.tab];
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector("#program-kicker").textContent = selected.kicker;
    document.querySelector("#program-title").textContent = selected.title;
    document.querySelector("#program-desc").textContent = selected.desc;
    document.querySelector("#program-list").innerHTML = selected.items
      .map((item) => `<li>${item}</li>`)
      .join("");
  });
});

function handleDemoForm(formSelector, messageSelector, successMessage) {
  const form = document.querySelector(formSelector);
  const message = document.querySelector(messageSelector);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = successMessage;
    form.reset();
  });
}

handleDemoForm("#join-form", "#join-message", "신청 내용이 화면에서 접수되었습니다. 실제 발송 연결 전 데모 상태입니다.");
handleDemoForm("#contact-form", "#contact-message", "문의 내용이 화면에서 접수되었습니다. 실제 메일/폼 연동 전 데모 상태입니다.");
