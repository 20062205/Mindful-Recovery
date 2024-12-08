import React from 'react';
import './homepage.css';

const Homepage = () => {
  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Mindful Recovery <img src="logo1.jpg" alt="Logo" height="40px" width="40px" />
        </a>
        <i className="bx bx-menu" id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="quiz.html">Quiz</a>
          <a href="virtualdiary.html">Journal</a>
          <a href="Audiotherapy">Audio Therapy</a>
          <a href="yoga.html">Yoga</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h2>Mindful Recovery</h2>
          <p>
            "Welcome to Mindful Recovery, your companion in managing and
            understanding anxiety. This platform is designed to empower you by
            providing a safe space with interactive tools, helpful resources,
            and personalized guidance. Let's walk this journey together towards
            mindfulness, resilience, and self-compassion."
          </p>
        </div>
        <div className="home-img">
          <img src="logo.jfif" alt="Mindful Recovery" />
        </div>
      </section>

      <section className="services" id="services">
        <h1>Services</h1>
        <div className="service-box">
          {/* Row 1 */}
          <div className="service-card">
            <img src="quiz.jpg" alt="" />
            <h3>Quiz</h3>
            <p>
              "Our anxiety quiz is a simple tool to help you gain a deeper
              understanding of your anxiety patterns. By answering a few
              questions, you’ll be able to identify your unique anxiety profile,
              which can be helpful for finding the right strategies to manage
              it."
            </p>
            <div className="btn">
              <button>
                <a href="quiz.html">Get Started</a>
              </button>
            </div>
          </div>
          <div className="service-card">
            <img src="journal.jpg" alt="" />
            <h3>Journal</h3>
            <p>
              "Journaling is a powerful tool for processing thoughts, reflecting
              on your day, and finding patterns in your emotions. With our
              journal, you can freely express your thoughts in a safe, private
              space designed just for you."
            </p>
            <div className="btn">
              <button>
                <a href="virtualdiary.html">Start Journaling</a>
              </button>
            </div>
          </div>
          {/* Row 2 */}
          <div className="service-card">
            <img src="audio .jpg" alt="audio" />
            <h3>Audio Therapy</h3>
            <p>
              "In a world full of noise, let us guide you toward calm. Audio
              Therapy is more than just sound—it's a transformative experience
              designed to soothe your mind and uplift your spirit."
            </p>
            <div className="btn">
              <button>
                <a href="audiotherapy.html">Explore Audio Therapy</a>
              </button>
            </div>
          </div>
          <div className="service-card">
            <img src="y h.jpg" alt="" />
            <h3>Yoga</h3>
            <p>
              "Experience the calming power of yoga. Our guided sessions help
              ease anxiety, improve flexibility, and promote mindfulness—all in
              just a few minutes a day."
            </p>
            <div className="btn">
              <button>
                <a href="yoga1.html">Start Your Yoga Journey</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="content">
          <h1>Testimonials</h1>
          <div className="testimonial-item">
            <p>
              "The chatbot is amazing! It gives me quick tips when I’m stressed
              and helps me feel better instantly."
            </p>
            <span>- Sara</span>
          </div>
          <div className="testimonial-item">
            <p>
              "The quiz showed me a lot about my anxiety. I feel more prepared
              to manage it now."
            </p>
            <span>- Alex</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Mindful Recovery. All rights reserved.</p>
        <p>
          <a href="#home">Back to Top</a>
        </p>
      </footer>
    </>
  );
};

export default Homepage;
