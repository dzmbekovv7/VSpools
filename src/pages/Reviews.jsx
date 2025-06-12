import React from 'react'

// Testimonials about VSPOOLS - debates and discussions
const testimonialsData = [
  {
    id: 1,
    name: 'Alex Peterson',
    avatar: 'https://i.pravatar.cc/100?img=32',
    title: 'Engaging Debates',
    content:
      'VSPOOLS is where every controversial topic is explored from all sides. I love the lively debates and unexpected arguments here.',
  },
  {
    id: 2,
    name: 'Marina Kovaleva',
    avatar: 'https://i.pravatar.cc/100?img=15',
    title: 'Deep Conflict Analysis',
    content:
      'I appreciate how VSPOOLS breaks down conflicts logically and without emotion. It helps me see situations objectively.',
  },
  {
    id: 3,
    name: 'Igor Smirnov',
    avatar: 'https://i.pravatar.cc/100?img=7',
    title: 'Diverse Opinions',
    content:
      'No canned responses here—just real discussions. VSPOOLS creates a space for constructive dialogue across viewpoints.',
  },
  {
    id: 4,
    name: 'Catherine Vasilyeva',
    avatar: 'https://i.pravatar.cc/100?img=25',
    title: 'Clear and Concise',
    content:
      'I like how even complex topics are explained simply, making debates accessible and interesting for everyone.',
  },
  {
    id: 5,
    name: 'Dmitry Ivanov',
    avatar: 'https://i.pravatar.cc/100?img=29',
    title: 'Transparency and Honesty',
    content:
      'I value VSPOOLS for its honesty and openness. No room for manipulation—only genuine arguments and fair dialogue.',
  },
  {
    id: 6,
    name: 'Olga Novikova',
    avatar: 'https://i.pravatar.cc/100?img=8',
    title: 'Interesting Disputes',
    content:
      'Every discussion here is full of energy and drive. VSPOOLS is great for sharpening critical thinking and learning to listen.',
  },
  {
    id: 7,
    name: 'Maxim Fyodorov',
    avatar: 'https://i.pravatar.cc/100?img=44',
    title: 'Platform for Ideas',
    content:
      'VSPOOLS is not just about disputes, it’s a place to form new perspectives and better understand complex issues.',
  },
]

// Background pattern of X and O crosses (unchanged)
const BackgroundPattern = () => {
  const patternItems = []
  const cols = 20
  const rows = 12

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const isX = (x + y) % 2 === 0
      patternItems.push(
        <span
          key={`${x}-${y}`}
          style={{
            position: 'absolute',
            top: `${(y / rows) * 100}%`,
            left: `${(x / cols) * 100}%`,
            transform: 'translate(-50%, -50%)',
            fontSize: '2rem',
            color: 'rgba(100, 116, 139, 0.07)',
            userSelect: 'none',
            pointerEvents: 'none',
            fontWeight: '900',
            fontFamily: 'monospace',
            zIndex: 0,
          }}
        >
          {isX ? 'X' : 'O'}
        </span>
      )
    }
  }

  return <>{patternItems}</>
}

const Testimonials = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 overflow-hidden py-20 px-6 sm:px-12">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundPattern />
      </div>

      {/* Intro text */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-6 drop-shadow-lg">
          What People Say About VSPOOLS
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          VSPOOLS is a platform for honest, lively, and sharp debates. Hear diverse opinions and discover new perspectives on conflicts.
        </p>
      </div>

      {/* Testimonials grid with varied styles */}
      <div className="relative z-10 max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map(({ id, name, avatar, title, content }, idx) => {
          // Vary shadow and padding for subtle difference
          const shadowClasses = ['shadow-md', 'shadow-lg', 'shadow-xl']
          const paddingClasses = ['p-5', 'p-6', 'p-7']
          const borderColors = ['border-indigo-300', 'border-purple-300', 'border-indigo-400']

          return (
            <div
              key={id}
              className={`bg-white bg-opacity-90 backdrop-blur-md rounded-xl border ${borderColors[idx % borderColors.length]} ${shadowClasses[idx % shadowClasses.length]} ${paddingClasses[idx % paddingClasses.length]} flex flex-col transition-shadow duration-500 hover:shadow-2xl`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={avatar}
                  alt={name}
                  className="w-14 h-14 rounded-full border-2 border-indigo-400 shadow-sm"
                />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-800">{name}</h3>
                  <p className="text-indigo-600 text-sm italic">{title}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-[17px]">{content}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
