import React from "react";
import "./About.css";
const About = () => {
  return (
    <div class="khush">
      <img className="image" src="abou.jpg" alt=""></img>

      <div class="text">
        <h1> About us</h1>
        <p>
          Welcome to Read Zone, your personal book sanctuary! At Read Zone,
          we're dedicated to enhancing your reading experience by providing you
          with your very own digital bookshelf. Whether you're an avid reader or
          just starting your literary journey, our platform allows you to
          explore a vast collection of books, create notes, and save your
          favorites for future enjoyment
        </p>
        <p>
          Immerse yourself in captivating stories, insightful knowledge, and
          inspiring tales from our extensive library. With the ability to mark
          books as read, jot down notes, and earn points for completing books,
          Read Zone offers a rewarding reading experience tailored to your
          preferences.
        </p>
        <p>
          Join our community of book enthusiasts today and embark on a journey
          of exploration, discovery, and endless learning at Read Zone. Let's
          make reading more than just a hobby – let's make it a lifestyle
        </p>
        <p>
          {" "}
          At Read Zone, we believe in the power of collaboration and innovation.
          This incredible platform was brought to life by the combined efforts
          of our talented team members: Saurabh, Prasoon, Aryan, Khuswant, and
          Ayush. These skilled engineers worked tirelessly, dedicating their
          expertise and passion to create Read Zone in just one day at the
          Hacanicoo event.
        </p>
      </div>
    </div>
  );
};

export default About;
