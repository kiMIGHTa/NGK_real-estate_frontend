import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function TeamMembers() {
  // In a real app, this would come from an API or database
  const team = [
    {
      id: "1",
      name: "Simon Kioko",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of experience in real estate, Sarah leads our team with passion and expertise.",
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      position: "Senior Real Estate Agent",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael specializes in luxury properties and has closed over $50 million in sales.",
    },
    {
      id: "3",
      name: "Jennifer Lee",
      position: "Marketing Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Jennifer brings creative marketing strategies that help our properties stand out in the market.",
    },
    {
      id: "4",
      name: "David Wilson",
      position: "Property Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "David ensures all our managed properties are maintained to the highest standards.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {team.map((member) => (
        <div key={member.id} className="card overflow-hidden">
          <div className="aspect-square relative">
            <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-maroon text-sm mb-2">{member.position}</p>
            <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
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
