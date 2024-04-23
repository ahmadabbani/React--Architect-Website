import React, { useState } from "react";
export const DataContext = React.createContext();
const DataProvider = ({ children }) => {
  //projects
  const projects = [
    {
      id: 1,
      name: "The Glass Oasis",
      image: `${process.env.PUBLIC_URL}/images/modern&luxury/modern-img4.jpg`,
      gallery: [
        "/images/gallery-modern&lux/gallery14.jpg",
        "/images/gallery-modern&lux/gallery20.jpg",
        "/images/gallery-modern&lux/gallery30.jpg",
      ],
      type: "Modern",
      size: "3000 ft², 27000 ft³",
      completion: "2023",
      client: "Blue Ridge Developments",
      location: "New York",
      details: `A modern house with extensive use of glass. This design creates a seamless indoor-outdoor connection, blurring the boundaries between inside and outside living.`,
    },
    {
      id: 2,
      name: "The Azure Vista",
      image: "/images/medit/medit-img5.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery39.jpg",
        "/images/gallery-modern&lux/gallery8.jpg",
        "/images/gallery-modern&lux/gallery5.jpg",
      ],
      type: "Mediterranean",
      size: "32000 ft², 17000 ft³",
      completion: "2020",
      client: "Cedar Grove Estates",
      location: "New York",
      details: ` A Mediterranean house with a stunning view of the sea. This house is designed to provide a seamless indoor-outdoor living experience, with large windows and open spaces that let you enjoy the breathtaking vista.`,
    },
    {
      id: 3,
      name: "The White Monolith",
      image: "/images/modern&luxury/modern-img2.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery27.jpg",
        "/images/gallery-modern&lux/gallery3.jpg",
        "/images/gallery-modern&lux/gallery36.jpg",
      ],
      type: "Modern",
      size: "3000 ft², 27000 ft³",
      completion: "2024",
      client: "Pine Valley Construction",
      location: "New York",
      details: ` A striking, all-white modern house. Its bold simplicity stands out, making a strong statement in any neighborhood.`,
    },
    {
      id: 4,
      name: "The Cozy Corner",
      image: "/images/cottage/cott-img5.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery2.jpg",
        "/images/gallery-modern&lux/gallery20.jpg",
        "/images/gallery-modern&lux/gallery21.jpg",
      ],
      type: "Cottage",
      size: "4500 ft², 32000 ft³",
      completion: "2024",
      client: "Sunset Builders",
      location: "New York",
      details: `A charming cottage that offers a warm and inviting atmosphere. The cozy design makes it the perfect place to relax and unwind.`,
    },

    {
      id: 5,
      name: "The Country Comfort",
      image: "/images/cottage/cott-img1.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery4.jpg",
        "/images/gallery-modern&lux/gallery20.jpg",
        "/images/gallery-modern&lux/gallery2.jpg",
      ],
      type: "Cottage",
      size: "2500 ft², 22000 ft³",
      completion: "2023",
      client: "Riverbend Properties",
      location: "New York",
      details: ` A cottage house that embodies the comfort and simplicity of country living. The design makes it the perfect place for those seeking a slower pace of life.`,
    },

    {
      id: 6,
      name: "The Crystal Castle",
      image: "/images/modern&luxury/lux-img4.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery11.jpg",
        "/images/gallery-modern&lux/gallery22.jpg",
        "/images/gallery-modern&lux/gallery37.jpg",
      ],
      type: "Luxury",
      size: "4500 ft², 32000 ft³",
      completion: "2021",
      client: "Summit Building Solutions",
      location: "New York",
      details: `A luxury house that stands out with its crystal-clear glass walls. The house offers panoramic views of its surroundings, providing a living experience that is both luxurious and connected with nature.`,
    },
    {
      id: 7,
      name: "The Golden Gateway",
      image: "/images/modern&luxury/lux-img1.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery9.jpg",
        "/images/gallery-modern&lux/gallery18.jpg",
        "/images/gallery-modern&lux/gallery34.jpg",
      ],
      type: "Luxury",
      size: "3500 ft², 22000 ft³",
      completion: "2017",
      client: "Skyline Property Management",
      location: "New York",
      details: `A luxury house with a grand golden gateway. The gateway serves as an impressive entrance, setting the tone for the rest of the house.`,
    },

    {
      id: 8,
      name: "The Olive Grove",
      image: "/images/medit/medit-img1.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery19.jpg",
        "/images/gallery-modern&lux/gallery22.jpg",
        "/images/gallery-modern&lux/gallery16.jpg",
      ],
      type: "Mediterranean",
      size: "7500 ft², 42000 ft³",
      completion: "2019",
      client: "Harmony Construction Co.",
      location: "New York",
      details: `A Mediterranean house nestled in an olive grove. The house is designed to blend seamlessly with its natural surroundings, creating a peaceful and serene living environment.`,
    },
    {
      id: 9,
      name: "The Lavish Loft",
      image: "/images/modern&luxury/lux-img2.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery15.jpg",
        "/images/gallery-modern&lux/gallery14.jpg",
        "/images/gallery-modern&lux/gallery24.jpg",
      ],
      type: "Luxury",
      size: "2500 ft², 34000 ft³",
      completion: "2016",
      client: "ertex Construction Enterprises",
      location: "New York",
      details: `A luxury house with a loft that offers stunning views of the city skyline. The loft is designed with a focus on luxury and comfort, providing a living experience that is truly above the rest.`,
    },
    {
      id: 10,
      name: "The Woodland Whimsy",
      image: "/images/cottage/cott-img4.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery4.jpg",
        "/images/gallery-modern&lux/gallery40.jpg",
        "/images/gallery-modern&lux/gallery20.jpg",
      ],
      type: "Cottage",
      size: "5500 ft², 52000 ft³",
      completion: "2012",
      client: "Solstice Building Solutions",
      location: "New York",
      details: `A cottage nestled in the woods. The location makes it the perfect place for those seeking tranquility and a connection with nature.`,
    },
    {
      id: 11,
      name: "The Cubist Dream",
      image: "/images/modern&luxury/modern-img3.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery20.jpg",
        "/images/gallery-modern&lux/gallery38.jpg",
        "/images/gallery-modern&lux/gallery3.jpg",
      ],
      type: "Modern",
      size: "3500 ft², 22000 ft³",
      completion: "2014",
      client: "Peak Property Builders",
      location: "New York",
      details: `A modern house composed of a series of cubes. This design plays with form and space, creating a unique and visually interesting home.`,
    },
    {
      id: 12,
      name: "The Seaside Solace",
      image: "/images/medit/medit-img2.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery15.jpg",
        "/images/gallery-modern&lux/gallery16.jpg",
        "/images/gallery-modern&lux/gallery7.jpg",
      ],
      type: "Mediterranean",
      size: "2500 ft², 32000 ft³",
      completion: "2018",
      client: "Polaris Property Group",
      location: "New York",
      details: `A Mediterranean house offering solace by the sea. With its spacious interiors and stunning sea views, this house provides a tranquil retreat from the hustle and bustle of daily life.`,
    },
    {
      id: 13,
      name: "The Vintage Villa",
      image: "/images/cottage/cott-img3.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery2.jpg",
        "/images/gallery-modern&lux/gallery24.jpg",
        "/images/gallery-modern&lux/gallery20.jpg",
      ],
      type: "Cottage",
      size: "3500 ft², 22000 ft³",
      completion: "2015",
      client: "Summit Building Solutions",
      location: "New York",
      details: ` A cottage house that retains its vintage charm. Despite offering modern comforts, the house still feels like a step back in time.`,
    },
    {
      id: 14,
      name: "The Platinum Palace",
      image: "/images/modern&luxury/lux-img3.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery14.jpg",
        "/images/gallery-modern&lux/gallery12.jpg",
        "/images/gallery-modern&lux/gallery18.jpg",
      ],
      type: "Luxury",
      size: "2400 ft², 18000 ft³",
      completion: "2020",
      client: "Horizon Real Estate Group",
      location: "New York",
      details: ` A luxury house that exudes sophistication. The house features a blend of modern and classic design elements, creating a timeless appeal.`,
    },

    {
      id: 15,
      name: "The Vineyard Villa",
      image: "/images/medit/medit-img3.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery27.jpg",
        "/images/gallery-modern&lux/gallery23.jpg",
        "/images/gallery-modern&lux/gallery3.jpg",
      ],
      type: "Mediterranean",
      size: "2300 ft², 30000 ft³",
      completion: "2022",
      client: "Aurora Real Estate Developers",
      location: "New York",
      details: ` A Mediterranean house surrounded by a lush vineyard. The house is designed with a focus on outdoor living, with a spacious patio and an outdoor kitchen for alfresco dining.`,
    },
    {
      id: 16,
      name: "Dark Wood Home",
      image: "/images/modern&luxury/modern-img7.jpg",
      gallery: [
        "/images/gallery-modern&lux/gallery41.jpg",
        "/images/gallery-modern&lux/gallery23.jpg",
        "/images/gallery-modern&lux/gallery29.jpg",
      ],
      type: "Modern",
      size: "2300 ft², 30000 ft³",
      completion: "2023",
      client: "Horizon Real Estate Group",
      location: "New York",
      details: `  A modern sanctuary that blends the warmth of rich, dark wood with the sleek lines of contemporary design. It’s a tranquil retreat, embodying the harmony between nature and urban living.`,
    },
  ];
  const [activeLink, setActiveLink] = useState("home");
  const handleClickLink = (link) => {
    setTimeout(() => {
      setActiveLink(link);
    }, 200);
  };

  return (
    <DataContext.Provider
      value={{ projects, setActiveLink, activeLink, handleClickLink }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
