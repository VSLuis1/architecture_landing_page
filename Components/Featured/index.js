import style from "./style.module.css";

export default function Featured() {
  const itemFeatured = [
    {
      id: 1,
      image: "Diamond.svg",
      title: "Innovative Design",
      text: "Our architecture design company is at the forefront of innovation, employing cutting-edge technologies and forward-thinking ideas to create designs that inspire and endure.",
    },
    {
      id: 2,
      image: "Lightning.svg",
      title: "Sustainable Solutions",
      text: "We prioritize sustainability in every project, incorporating eco-friendly materials and energy-efficient designs to ensure a greener, more environmentally responsible future.",
    },
    {
      id: 3,
      image: "Fire.svg",
      title: "Skilled Team",
      text: "Our team of architects, engineers, and designers are highly experienced and committed to excellence, ensuring that every project is executed with the utmost precision and care.",
    },
    {
      id: 4,
      image: "Layout.svg",
      title: "Project Management",
      text: "We manage every aspect of the design process efficiently, delivering projects on time and within budget, while maintaining the highest quality standards.",
    },
    {
      id: 5,
      image: "Settings.svg",
      title: "Tailored Design",
      text: "Our firm takes a client-centered approach, working closely with each client to understand their unique vision and needs, resulting in truly personalized and functional spaces.",
    },
    {
      id: 6,
      image: "Power-button.svg",
      title: "Aesthetic Versatility",
      text: "Whether it's modern, classic, or avant-garde, our designs transcend styles and trends, reflecting the diverse tastes and preferences of our clientele, creating spaces that are both timeless and breathtaking.",
    },
  ];

  return (
    <div className={style.featured} id="featured">
      {itemFeatured.map((item) => (
        <div className={style.box_featured} key={item.id}>
          <img src={`/img/${item.image}`} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
