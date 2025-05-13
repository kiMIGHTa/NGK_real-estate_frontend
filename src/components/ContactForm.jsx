export default function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input type="text" placeholder="First Name" className="input-field" />
        </div>
        <div>
          <input type="text" placeholder="Last Name" className="input-field" />
        </div>
      </div>
      <div>
        <input type="email" placeholder="Email Address" className="input-field" />
      </div>
      <div>
        <input type="tel" placeholder="Phone Number" className="input-field" />
      </div>
      <div>
        <select className="dropdown-select">
          <option value="">I'm interested in...</option>
          <option value="buying">Buying a property</option>
          <option value="selling">Selling a property</option>
          <option value="renting">Renting a property</option>
          <option value="investing">Property investment</option>
          <option value="other">Other inquiry</option>
        </select>
      </div>
      <div>
        <textarea placeholder="Your Message" className="input-field min-h-[120px]"></textarea>
      </div>
      <button type="submit" className="w-full btn-primary">
        Send Message
      </button>
    </form>
  )
}
