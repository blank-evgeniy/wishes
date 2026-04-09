import {
  HomeFaqSection,
  HomeFeaturesSection,
  HomeHeroSection,
  HomeStepsSection,
  HomeUseCasesSection,
} from "./ui";

export const HomeView = () => {
  return (
    <main className="rounded-t-xl border-border bg-secondary relative flex-1 overflow-hidden border lg:p-8 p-4">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80 blur-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(255,255,255,0)_70%)]"
        aria-hidden
      />

      <div className="relative flex flex-col gap-8 lg:gap-14">
        <HomeHeroSection />
        <HomeFeaturesSection />
        <HomeStepsSection />
        <HomeUseCasesSection />
        <HomeFaqSection />
      </div>
    </main>
  );
};
