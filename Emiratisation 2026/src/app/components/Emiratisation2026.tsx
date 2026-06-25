import { type FormEvent, useRef, useState } from "react";
import tascLogo from "@/assets/2b3412e8fe117b35199bad27286347d3bc75c3be.png";
import "@/styles/emiratisation-2026.css";

const facts = [
  {
    figure: "2040",
    meaning:
      "NAFIS is now part of the UAE's long-term national agenda, not a short-term programme.",
  },
  {
    figure: "AED 6,000",
    meaning: "The minimum monthly salary for Emiratis in the private sector.",
  },
  {
    figure: "20+ employees",
    meaning: "Companies of this size now carry Emiratisation obligations.",
  },
  {
    figure: "+1% +1%",
    meaning: "A 1% increase by June and another 1% before the end of 2026.",
  },
  {
    figure: "AED 9,000 / month",
    meaning:
      "The cost of leaving a single Emirati position unfilled, adding up to over AED 100,000 a year.",
  },
  {
    figure: "AED 100k-500k",
    meaning: "The fine range for violations such as fake Emiratisation.",
  },
  {
    figure: "AED 3,000 / child",
    meaning:
      "Monthly family support, now uncapped and extended to children of Emirati mothers.",
  },
  {
    figure: "Up to 80%",
    meaning:
      "Discounts on selected Ministry fees for Emiratisation Partners Club members.",
  },
];

const learnings = [
  "Why NAFIS is now a national agenda item running to 2040, not a short-term scheme.",
  "The two deadlines employers are working against: 1% by end of June and another 1% before the end of 2026.",
  "How the Ministry uses AI to spot fake Emiratisation, and why on-paper hires no longer go unnoticed.",
  "What the new family benefits package changes for Emirati employees and their families.",
  "The penalties: AED 9,000 per month for every unfilled role, and AED 100,000 to AED 500,000 for violations.",
  "How the workforce-partner model lets you hire Emirati talent quickly while staying fully compliant.",
];

const faqs = [
  {
    question: "What is fake Emiratisation?",
    answer:
      "It is when an Emirati employee exists only on paper, with no real role or responsibilities, purely to satisfy a quota. The Ministry now uses AI to detect these arrangements, and penalties run from AED 100,000 to AED 500,000 per violation.",
  },
  {
    question: "Do Emiratisation rules apply to small companies?",
    answer:
      "Yes. Businesses with 20 to 49 employees now have obligations and are expected to employ at least two Emirati nationals by the end of 2026.",
  },
  {
    question: "What does it cost to leave an Emirati role unfilled?",
    answer:
      "AED 9,000 per month for each unfilled position, which adds up to more than AED 100,000 over a year.",
  },
  {
    question: "Is hiring through a workforce partner compliant?",
    answer:
      "Yes, as long as the employee holds a legitimate role and receives a real monthly salary. The partner handles the administration; the employee does genuine work.",
  },
  {
    question: "What's new in the NAFIS benefits package?",
    answer:
      "Family support is now uncapped rather than limited to four children, extended to the children of Emirati mothers, and AED 3,000 per child is paid monthly. Spouses of Emirati citizens working in the private sector are now included too.",
  },
  {
    question: "What are the Emiratisation targets for 2026?",
    answer:
      "A 1% increase by the end of June and a further 1% before the end of 2026.",
  },
];

function scrollToForm() {
  document.getElementById("advisory-call")?.scrollIntoView({ behavior: "smooth" });
}

export function Emiratisation2026() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoUnlocked, setIsVideoUnlocked] = useState(false);
  const [isVideoGateOpen, setIsVideoGateOpen] = useState(false);
  const [shouldPlayAfterSubmit, setShouldPlayAfterSubmit] = useState(false);

  function openVideoGate() {
    if (isVideoUnlocked) {
      videoRef.current?.play();
      return;
    }

    setShouldPlayAfterSubmit(true);
    setIsVideoGateOpen(true);
  }

  function closeVideoGate() {
    setIsVideoGateOpen(false);
  }

  function unlockVideo() {
    setIsVideoUnlocked(true);
    setIsVideoGateOpen(false);

    if (shouldPlayAfterSubmit) {
      window.setTimeout(() => {
        videoRef.current?.play();
      }, 0);
    }
  }

  function handleVideoGateSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    unlockVideo();
  }

  function handleVideoPlay() {
    if (!isVideoUnlocked) {
      videoRef.current?.pause();
      openVideoGate();
    }
  }

  return (
    <main className="em-page">
      <header className="em-hero" id="top">
        <nav className="em-nav" aria-label="Primary">
          <a className="em-logo-link" href="https://www.tascoutsourcing.com/" aria-label="TASC home">
            <img className="em-logo" src={tascLogo} alt="TASC" />
          </a>
          <div className="em-nav-actions">
            <button type="button" onClick={openVideoGate}>
              Watch briefing
            </button>
            <button type="button" onClick={scrollToForm}>
              Book advisory call
            </button>
          </div>
        </nav>

        <section className="em-hero-grid">
          <div className="em-hero-copy">
            <p className="em-eyebrow">Emiratisation 2026 briefing</p>
            <h1>Emiratisation in 2026 Has Changed. Has Your Hiring Plan?</h1>
            <p className="em-hero-lede">
              NAFIS now runs to 2040, the salary floor sits at AED 6,000, and
              companies with 20 staff are in scope. We sat down with
              public-sector leader Huda Al Hashemi to explain what every
              employer in the UAE needs to do before the next deadline.
            </p>
            <div className="em-hero-actions">
              <button type="button" className="em-primary" onClick={scrollToForm}>
                Book a free workforce advisory call
              </button>
              <button type="button" className="em-secondary" onClick={openVideoGate}>
                Watch the conversation
              </button>
            </div>
          </div>

          <aside className="em-deadline-panel" aria-label="2026 Emiratisation deadlines">
            <span>2026 targets</span>
            <strong>+1% by June</strong>
            <strong>+1% by year end</strong>
            <p>Planning now is cheaper than rushing when penalties land.</p>
          </aside>
        </section>
      </header>

      <section className="em-intro em-section">
        <div className="em-container em-narrow">
          <p>
            Most managers still treat Emiratisation as a hiring target to clear
            before year-end. That view is now a liability.
          </p>
          <p>
            Over the past twelve months the framework has grown into a full
            system that ties together compliance, family benefits, pension
            contributions and workforce planning. The Ministry has added AI to
            its monitoring, the salary floor has moved, and smaller businesses
            that once sat outside the rules are now firmly inside them.
          </p>
          <p>
            We invited Huda Al Hashemi, an Emirati public-sector leader who
            works closely on private-sector talent, to walk through what
            actually changed and what it means for the people running UAE
            businesses. Watch the full conversation below, then talk to our team
            about where you stand.
          </p>
        </div>
      </section>

      <section className="em-video-section em-section" id="briefing">
        <div className="em-container">
          <div className="em-section-heading">
            <p className="em-eyebrow">Watch</p>
            <h2>The 2026 Emiratisation Briefing</h2>
            <p>
              A 20-minute conversation with Huda Al Hashemi on NAFIS,
              penalties, the new benefits package and the compliant way to hire
              Emirati talent at speed.
            </p>
          </div>

          <div className="em-video-grid">
            <div className={`em-video-frame ${isVideoUnlocked ? "is-unlocked" : "is-locked"}`}>
              <video
                ref={videoRef}
                controls={isVideoUnlocked}
                playsInline
                preload="metadata"
                poster="/emiratisation-2026/emiratisation-briefing-poster.jpg"
                onPlay={handleVideoPlay}
              >
                <source src="/emiratisation-2026/emiratisation-briefing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isVideoUnlocked ? (
                <button
                  type="button"
                  className="em-video-lock"
                  onClick={openVideoGate}
                  aria-label="Unlock and watch the Emiratisation briefing"
                >
                  <span>Watch the conversation</span>
                </button>
              ) : null}
            </div>

            <div className="em-learnings">
              <h3>What you'll learn</h3>
              <ul>
                {learnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {isVideoGateOpen ? (
        <div
          className="em-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-gate-title"
        >
          <div className="em-form-panel em-video-gate">
            <button
              type="button"
              className="em-modal-close"
              onClick={closeVideoGate}
              aria-label="Close video form"
            >
              x
            </button>
            <h3 id="video-gate-title">Watch the full conversation</h3>
            <p>
              Share your details to unlock the 2026 Emiratisation briefing.
            </p>
            <form className="hubspot-fallback-form" onSubmit={handleVideoGateSubmit}>
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Work email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Company
                <input name="company" type="text" autoComplete="organization" required />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={3}
                  defaultValue="I would like to watch the Emiratisation briefing."
                  required
                />
              </label>
              <button type="submit">Unlock video</button>
            </form>
          </div>
        </div>
      ) : null}

      <section className="em-section em-facts">
        <div className="em-container">
          <div className="em-section-heading">
            <p className="em-eyebrow">The numbers that matter</p>
            <h2>What employers need to plan around now</h2>
          </div>

          <div className="em-fact-grid">
            {facts.map((fact) => (
              <article className="em-fact-card" key={fact.figure}>
                <strong>{fact.figure}</strong>
                <p>{fact.meaning}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="em-partner em-section">
        <div className="em-container em-split">
          <div>
            <p className="em-eyebrow">The compliant way to hire</p>
            <h2>Fast Emirati hiring does not have to mean risky hiring.</h2>
          </div>
          <div className="em-copy-stack">
            <p>
              Many companies still believe they have to choose between hiring
              Emirati talent fast and hiring it properly. They do not.
            </p>
            <p>
              Working with a workforce partner lets you keep your focus on the
              business while the sourcing, NAFIS and pension registration,
              contracts and onboarding run through one provider. The Emirati
              employee holds a genuine role and draws a real monthly salary, so
              the arrangement sits fully within Ministry rules. What you gain is
              speed and a lighter load on your internal team.
            </p>
            <p>
              That is the model TASC has used to bring Emirati professionals
              into the private sector for years, alongside our work on the
              Emiratisation Summit, the Emiratisation Guidebook and
              career-guidance programmes with NAFIS and other national bodies.
            </p>
            <button type="button" className="em-primary" onClick={scrollToForm}>
              Talk to our Emiratisation team
            </button>
          </div>
        </div>
      </section>

      <section className="em-cta em-section" id="advisory-call">
        <div className="em-container em-cta-grid">
          <div>
            <p className="em-eyebrow">Free workforce advisory call</p>
            <h2>Know where you stand before the deadline finds you.</h2>
            <p>
              The companies that handle this well are the ones planning now, not
              the ones rushing in November. Book a free workforce advisory call
              and we will help you read your current position, map the targets
              that apply to your business, and lay out the most effective path
              to meet them.
            </p>
          </div>
          <div className="em-form-panel">
            <h3>Book your free advisory call</h3>
            <div id="hubspot-form-container">
              <form
                className="hubspot-fallback-form"
                action="mailto:marketing@tascoutsourcing.com"
                method="post"
                onSubmit={unlockVideo}
              >
                <label>
                  Name
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label>
                  Work email
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label>
                  Company
                  <input name="company" type="text" autoComplete="organization" required />
                </label>
                <button type="submit">Request a call</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="em-section em-faq">
        <div className="em-container">
          <div className="em-section-heading">
            <p className="em-eyebrow">FAQ</p>
            <h2>Common Emiratisation questions for 2026</h2>
          </div>
          <div className="em-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
