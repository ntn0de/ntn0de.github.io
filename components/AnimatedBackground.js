import {
  SiShopify,
  SiReact,
  SiRemix,
  SiNodedotjs,
  SiWoo,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
  SiLaravel,
} from 'react-icons/si';

// Predefined random positions for consistent scattering
const randomPositions = [
  { x: 15, y: 20 }, { x: 75, y: 15 }, { x: 35, y: 45 }, { x: 85, y: 60 },
  { x: 25, y: 70 }, { x: 65, y: 35 }, { x: 45, y: 80 }, { x: 90, y: 25 },
  { x: 10, y: 50 }, { x: 55, y: 10 }, { x: 70, y: 75 }, { x: 30, y: 30 },
  { x: 80, y: 50 }, { x: 20, y: 85 }, { x: 50, y: 40 },
];

const icons = [
  { Icon: SiShopify, color: '#6b6b6b', size: 40 },
  { Icon: SiReact, color: '#6b6b6b', size: 40 },
  { Icon: SiRemix, color: '#6b6b6b', size: 40 },
  { Icon: SiNodedotjs, color: '#6b6b6b', size: 40 },
  { Icon: SiWoo, color: '#6b6b6b', size: 40 },
  { Icon: SiTypescript, color: '#6b6b6b', size: 40 },
  { Icon: SiTailwindcss, color: '#6b6b6b', size: 40 },
  { Icon: SiVuedotjs, color: '#6b6b6b', size: 40 },
  { Icon: SiShopify, color: '#8a8a8a', size: 35 },
  { Icon: SiReact, color: '#8a8a8a', size: 35 },
  { Icon: SiRemix, color: '#8a8a8a', size: 35 },
  { Icon: SiNodedotjs, color: '#8a8a8a', size: 35 },
  { Icon: SiWoo, color: '#a0a0a0', size: 30 },
  { Icon: SiTypescript, color: '#a0a0a0', size: 30 },
  { Icon: SiLaravel, color: '#a0a0a0', size: 30 },
].filter(icon => icon.Icon); // Filter out any undefined icons

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {icons.map((iconData, index) => {
        const IconComponent = iconData.Icon;
        if (!IconComponent) return null; // Safety check
        
        const position = randomPositions[index % randomPositions.length];
        const startX = position.x;
        const startY = position.y;
        const duration = 20 + (index % 3) * 10; // 20, 30, or 40 seconds
        const delay = (index * 0.5) % 5;
        const animationType = index % 3; // 0, 1, or 2 for different animation patterns

        return (
          <div
            key={index}
            className={`floating-icon float-${animationType}`}
            style={{
              position: 'absolute',
              left: `${startX}%`,
              top: `${startY}%`,
              opacity: 0.04,
              animation: `float-${animationType} ${duration}s ${delay}s infinite ease-in-out`,
            }}
          >
            <IconComponent
              size={iconData.size}
              color={iconData.color}
              style={{
                filter: 'blur(1px)',
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
