import Project from '@/components/projects/projects';
import SmoothScroll from '@/components/smooth-scroll';
import dynamic from 'next/dynamic';

const Earth = dynamic(() => import('@/components/earth/earth'), {
  ssr: false,
  loading: () => (
    <div className="h-16 bg-[#0f0f0f] my-auto relative flex items-center justify-center">
      <div className="h-16 w-16 rounded-full border-2 border-[#fff] border-dashed animate-spin"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex justify-center items-center content-center h-screen">
        <h1 className="font-bold text-5xl text-white">Scroll</h1>
      </div>
      <main className="h-[60vw] bg-[#0f0f0f] relative flex items-center justify-center my-64">
        <Earth />
        <Project />
      </main>
    </SmoothScroll>
  );
}
