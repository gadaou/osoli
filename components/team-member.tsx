interface TeamMemberProps {
  quote: string
  name: string
  title: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

export default function TeamMember({ quote, name, title, imageSrc, imageAlt, reverse = false }: TeamMemberProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
      <div className={`space-y-8 ${reverse ? 'lg:col-start-2' : ''}`}>
        <blockquote className="text-xl text-gray-500 leading-relaxed italic">
          "{quote}"
        </blockquote>
        <div className="flex items-center space-x-4">
          <div className="w-1 h-16 bg-blue-600"></div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">{name}</h3>
            <p className="text-gray-500">{title}</p>
          </div>
        </div>
      </div>
      <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-[500px] object-cover rounded-lg"
        />
      </div>
    </div>
  )
}
