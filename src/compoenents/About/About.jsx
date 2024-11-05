import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1 className="details-title">ABOUT US</h1>
      <p className="about-text">
        - At [Restaurant Name], we believe that eating well should never mean
        sacrificing flavor. Our menu is thoughtfully crafted to offer a variety
        of delicious, nutritious dishes made from the freshest, locally-sourced
        ingredients. Whether you’re a dedicated health enthusiast or just
        looking to enjoy a satisfying meal, we have something for everyone.
      </p>
      <h2>What Sets Us Apart?</h2>
      <ul className="about-list">
        <li>
          Wholesome Ingredients: We prioritize organic produce, lean proteins,
          and whole grains, ensuring that every bite is packed with nutrients.
        </li>
        <li>
          Diverse Flavors: From vibrant salads and hearty grain bowls to zesty
          wraps and flavorful smoothies, our diverse menu celebrates the
          richness of healthy eating.
        </li>
        <li>
          Customizable Options: We know everyone has unique tastes and dietary
          needs. That’s why we offer customizable meals to fit your
          preferences—vegan, gluten-free, or keto, we’ve got you covered!
        </li>
        <li>
          Sustainability Focus: We are committed to sustainability, using
          eco-friendly packaging and minimizing waste to protect our planet for
          future generations.
        </li>
      </ul>
    </div>
  );
}
