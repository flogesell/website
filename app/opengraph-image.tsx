import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Flo Gesell – IT-Consultant & Fullstack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* subtle grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          }}
        />
        {/* content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '4px',
              textTransform: 'uppercase',
            }}
          >
            flogesell.de
          </div>
          <div
            style={{
              fontSize: '80px',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            Flo Gesell
          </div>
          <div
            style={{
              fontSize: '32px',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '8px',
            }}
          >
            IT-Consultant & Fullstack Developer
          </div>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '24px',
            }}
          >
            {['React', 'Next.js', 'Angular', 'React Native'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '6px 16px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '18px',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
