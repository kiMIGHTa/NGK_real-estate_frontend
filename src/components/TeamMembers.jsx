import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function TeamMembers() {
  // In a real app, this would come from an API or database
  const team = [
    {
      id: "1",
      name: "Andrew S",
      position: "Real Estate Operations Manager",
      image: "/andrew.png?height=300&width=300",
      bio: "With over 5 years of experience in real estate, Andrew leads our team with passion and expertise.",
    },
    {
      id: "2",
      name: "Haist Kimani",
      position: "Senior Real Estate Agent",
      image: "/Haist.png?height=300&width=300",
      bio: "Haist specializes in both residential and commercial properties and has deep knowledge on real estate marketing.",
    },
    {
      id: "3",
      name: "Dennis Kimaita",
      position: "Software Developer",
      image: "/kimaita.png?height=300&width=300",
      bio: "Kimaita specializes in coming up with innovative tech solutions to real-world problems.",
    },
    // {
    //   id: "4",
    //   name: "David Wilson",
    //   position: "Property Manager",
    //   image: "/placeholder.svg?height=300&width=300",
    //   bio: "David ensures all our managed properties are maintained to the highest standards.",
    // },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-0">
      {team.map((member) => (
        <div
          key={member.id}
          className="card overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="aspect-square relative">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
              // width={300}
              // height={300}
            />
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
  )
}
