import React, { useEffect } from "react";
import "./yoga1.css";

const Yoga = () => {
  useEffect(() => {
    // OnLoad function and scroll behavior
    const preloader = document.getElementById("load");
    const scroll = document.getElementById("main");

    const myFunction = () => {
      if (preloader) preloader.style.display = "none";
      if (scroll) scroll.style.overflow = "hidden";
    };

    myFunction();

    // Scroll-to-top functionality
    const backTopElement = document.getElementById("back-top-div");
    const minScrolledAmountToBackTop = 800;

    const handleScroll = () => {
      if (window.scrollY < minScrolledAmountToBackTop) {
        backTopElement?.classList.add("hidden");
      } else {
        backTopElement?.classList.remove("hidden");
      }
    };

    const backTop = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("scroll", handleScroll);
    backTopElement?.addEventListener("click", backTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      backTopElement?.removeEventListener("click", backTop);
    };
  }, []);

  return (
    <div id="main">
      <header>
        <div className="container">
          <div className="overlay">
            <h1>Yoga Enhances Your Life</h1>
            <p>
              A mind and body practice combining various styles of physical
              postures, breathing techniques, and meditation or relaxation:
              Yoga is an ancient practice that may have originated in India.
            </p>
          </div>
        </div>
      </header>
      <section className="aasan" id="aasan">
        <div className="row">
          {/* Repeated structure for yoga poses */}
          {[
            {
              title: "Ardha Chakrasana",
              description:
                "Ardha Chakrasana, or the Standing Backward Bend Pose, stretches the front upper torso and tones the arms and shoulder muscles. Know the steps of doing the posture, all its benefits, and contraindications by clicking below.",
              image: "Ardha Chakrasana.jpg",
              link: "https://www.artofliving.org/in-en/yoga/yoga-poses/standing-backward-bend",
            },
            {
              title: "Virabhadrasana",
              description:
                "Virabhadrasana or Warrior Pose increases stamina, strengthens arms, and brings courage and grace. It is an excellent yoga pose for those in sedentary jobs. It is also very beneficial in the case of frozen shoulders.",
              image: "Virabhadrasana.jpg",
              link: "https://www.artofliving.org/in-en/yoga/yoga-poses/warrior-pose-virbhadrasana",
            },
            {
              title: "Paschim Namaskarasana",
              description:
                "This yoga pose opens the abdomen and stretches the upper back and shoulder joints.",
              image: "Paschim Namaskarasana.jpg",
              link: "https://www.artofliving.org/in-en/yoga/yoga-poses/reverse-prayer-pose",
            },
            {
              title: "Ardha Matsyendrasana",
              description:
                "Ardha Matsyendrasana, or the Half Spinal Twist Pose, makes the spine more elastic and increases the oxygen supply to the lungs.",
              image: "Ardha Matsyendrasana.jpg",
              link: "https://www.artofliving.org/in-en/yoga/yoga-poses/sitting-half-spinal-twist-ardha-matsyendrasana",
            },
            {
              title: "Prasarita Padahastasana",
              description:
                "This yoga pose lengthens the spine, strengthens the legs and feet, and strengthens the abdomen.",
              image: "Prasarita Padahastasana.jpg",
              link: "https://www.artofliving.org/in-en/yoga/yoga-poses/standing-forward-bend",
            },
          ].map((pose, index) => (
            <div key={index} className="aasan1">
              <div className="aasan1-img">
                <img src={pose.image} alt={pose.title} />
              </div>
              <div className="atext">
                <h1>{pose.title}</h1>
                <p>{pose.description}</p>
                <a href={pose.link}>
                  <button>Read More</button>
                </a>
              </div>
            </div>
          ))}
          <a
            className="more"
            href="https://www.artofliving.org/in-en/yoga/yoga-poses/sitting-standing-recumbent-yoga-poses"
          >
            More Asanas
          </a>
        </div>
      </section>

      <section className="videos" id="videos">
        <div className="flip-card" data-aos="fade-up" data-aos-duration="800">
          {[
            "https://www.youtube.com/embed/s2NQhpFGIOg",
            "https://www.youtube.com/embed/g_tea8ZNk5A",
            "https://www.youtube.com/embed/c8hjhRqIwHE",
            "https://www.youtube.com/embed/brjAjq4zEIE",
            "https://www.youtube.com/embed/0XBcrjkkwQo",
          ].map((videoSrc, index) => (
            <div key={index} className="inner">
              <iframe
                src={videoSrc}
                title={`YouTube video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Yoga;
