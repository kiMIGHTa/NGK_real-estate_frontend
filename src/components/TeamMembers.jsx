import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function TeamMembers() {
  const team = [
    {
      id: "1",
      name: "Andrew S. ",
      position: "Real Estate Operations Manager",
      images: {
        webp: "/andrew.webp",
        png: "/andrew.png"
      },
      bio: "With over 5 years of experience in real estate, Andrew leads our team with passion and expertise.",
    },
    {
      id: "2",
      name: "Haist Kimani",
      position: "Senior Real Estate Agent",
      images: {
        webp: "/haist.webp",
        png: "/Haist.png"
      },
      bio: "Haist specializes in both residential and commercial properties and has deep knowledge on real estate marketing.",
    },
    {
      id: "3",
      name: "Dennis Kimaita",
      position: "Software Developer",
      images: {
        webp: "/kimaita.webp",
        png: "/kimaita.png"
      },
      bio: "Kimaita specializes in coming up with innovative tech solutions to real-world problems.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-0">
      {team.map((member) => (
        <div
          key={member.id}
          className="card overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="aspect-square relative">
            <picture>
              <source srcSet={member.images.webp} type="image/webp" />
              <source srcSet={member.images.png} type="image/png" />
              <img
                src={member.images.png}
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
                width={300}
                height={300}
              />
            </picture>
          </div>
          <div className="p-4 text-center">
            <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
            <p className="text-maroon text-sm mb-3">{member.position}</p>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-maroon transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-maroon transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-maroon transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}