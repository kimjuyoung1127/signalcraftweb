import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';

export async function GET() {
  try {
    // Read the logo file and convert to base64 data URI
    const logoBuffer = await readFile(join(process.cwd(), 'public/signalcraft-logo.png'));
    const logoBase64 = logoBuffer.toString('base64');
    const logoSrc = `data:image/png;base64,${logoBase64}`;

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            padding: '40px',
          }}
        >
          {/* Logo Mark */}
          <img
            src={logoSrc}
            width={140}
            height={140}
            style={{
              marginBottom: '24px',
            }}
            alt="SignalCraft"
          />

          {/* Brand Name */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            SignalCraft
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '36px',
              color: 'white',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: '500',
            }}
          >
            Sound to Insight.
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '18px',
              color: '#d1d5db',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            AI equipment monitoring from sound and vibration
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Cache-Control': 'public, max-age=86400',
        },
      }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}
