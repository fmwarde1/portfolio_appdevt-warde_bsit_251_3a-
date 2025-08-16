import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* Hero Banner */}
  <section 
    className="hero" 
     style={{ backgroundImage: "url('../src/images/bg.jpg')" }}
>
    <h1>Hi!, I'm Federico Warde,</h1> 
    <h1>and Welcome to My Portfolio!</h1>
    <p>This portfolio is about the recent projects that I made.</p>
    <button className="cta-btn">Explore My Projects</button>
</section>

      {/* Body Content */}
      <section className="body-content">
        <h2>Recent Projects</h2>
        <div className="posts">
          <article className="post">
            <img src="../src/images/ui.jpg" alt="Learning React" />
            <h3>📌 My First Projects</h3>
            <p>
              My first project was to built a UI/UX for a social media app,
              with figma!...
            </p>
            <a href="#">Read More →</a>
          </article>

          <article className="post">
            <img src="../src/images/wallmera.jpg" alt="Learning React" />
            <h3>🚀 Making Websites</h3>
            <p>
              We made a website for our project, and named it WALLMERA!...
            </p>
            <a href="#">Read More →</a>
          </article>

          <article className="post">
            <img src="../src/images/github.jpg" alt="Learning React" />
            <h3>🎨 </h3>
            <p>
             Learning and saving files with Github!...
            </p>
            <a href="#">Read More →</a>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>❓ What is this blog about?</h4>
          <p>
            This blog showcases my portfolio, projects, and articles about
            technology, design, and personal growth.
          </p>
        </div>

        <div className="faq-item">
          <h4>❓ Can I collaborate with you?</h4>
          <p>
            Absolutely! Feel free to reach out via the contact links in the
            footer.
          </p>
        </div>

        <div className="faq-item">
          <h4>❓ How often do you post?</h4>
          <p>
            I try to post at least once a week with new content and updates on
            my projects.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} My Portfolio | All Rights Reserved</p>
        <div className="socials">
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
