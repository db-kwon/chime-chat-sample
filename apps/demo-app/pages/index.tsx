import { useState } from 'react';
import Head from 'next/head';
import { ChatWidget } from '@chat-widget/core';
import { ChatConfig } from '@chat-widget/core';

export default function Home() {
  const [config] = useState<ChatConfig>({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || '',
    },
    meetingId: 'demo-meeting-123',
    attendeeId: 'demo-attendee-456',
  });

  return (
    <>
      <Head>
        <title>Chime Chat Demo</title>
        <meta
          name="description"
          content="Chime Chat Widget 데모 애플리케이션"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          minHeight: '100vh',
          padding: '2rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <h1
            style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Chime Chat Demo
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              opacity: 0.9,
            }}
          >
            AWS Chime SDK를 사용한 실시간 채팅 위젯 데모입니다.
          </p>

          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '1.5rem',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
              우측 하단의 채팅 버튼을 클릭하여 채팅을 시작해보세요!
            </p>
          </div>
        </div>

        <ChatWidget config={config} />
      </main>
    </>
  );
}
