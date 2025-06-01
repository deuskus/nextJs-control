"use client";
import {ReactNode} from "react";
import {useInitUserSession} from '@/hooks/useInitUserSession';
import {Header} from '@/components/header/Header';
import {Footer} from '@/components/footer/Footer';
import {ScrollToTop} from '@/components/scroll-to-top/ScrollToTop';

export function InitUserSessionWrapper({children}:{children:ReactNode}) {
  useInitUserSession();
  return (
    <div className='bg-gray-400/50 min-h-[100dvh] flex flex-col'>
      <div className='relative'>
        <header className='h-[10dvh] bg-black w-full fixed z-30 border-b-2 border-white'>
          <Header/>
        </header>
      </div>
      <main className='min-h-[100dvh] pt-[10dvh] bg-slate-50 w-full flex-grow'>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
} 