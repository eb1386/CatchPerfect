import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Smartphone, Activity, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: 'Mount the Sensor',
    description:
      'Attach the lightweight Catch Perfect sensor to your oar. It takes seconds to clip on and won\'t affect your stroke. The sensor uses a combination of accelerometers and gyroscopes to capture every movement of the oar throughout the rowing stroke.',
    details: ['Under 30g weight', 'Waterproof IP68', 'Clips in seconds'],
    color: '#10b981',
    colorLight: 'rgba(16, 185, 129, 0.12)',
    colorBorder: 'rgba(16, 185, 129, 0.25)',
  },
  {
    icon: Activity,
    title: 'Row Like Normal',
    description:
      'There\'s nothing to change about your routine. Just row. The sensor captures hundreds of data points per stroke, measuring blade entry angle, drive force curve, recovery timing, handle speed, and body sequencing in real time.',
    details: ['200+ data points per stroke', 'Real-time capture', 'Zero interference'],
    color: '#0ea5e9',
    colorLight: 'rgba(14, 165, 233, 0.12)',
    colorBorder: 'rgba(14, 165, 233, 0.25)',
  },
  {
    icon: BarChart3,
    title: 'Get Your Breakdown',
    description:
      'When your session ends, a detailed report is delivered straight to your phone. Every phase of the stroke is scored individually with specific, actionable feedback on what to fix and how to fix it.',
    details: ['Phase-by-phase scoring', 'Actionable insights', 'Progress tracking'],
    color: '#f59e0b',
    colorLight: 'rgba(245, 158, 11, 0.12)',
    colorBorder: 'rgba(245, 158, 11, 0.25)',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const totalSteps = steps.length;

  const goToStep = (step: number) => {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const activeStep = steps[currentStep - 1];

  return (
    <section id="how" className="relative py-16 lg:py-24 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`max-w-3xl mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Simple to use.
            <span className="font-serif italic text-emerald-400"> Powerful</span> results.
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Catch Perfect is designed to disappear into your routine. No complex setup, no coaching certifications required.
            Clip the sensor on, row, and let the data do the talking.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="hiw-stepper-wrapper">
            <div className="hiw-stepper-sidebar">
              {steps.map((step, index) => {
                const stepNum = index + 1;
                const isActive = currentStep === stepNum;
                const isComplete = currentStep > stepNum;

                return (
                  <React.Fragment key={stepNum}>
                    <button
                      onClick={() => goToStep(stepNum)}
                      className={`hiw-step-button ${isActive ? 'hiw-step-active' : ''}`}
                    >
                      <motion.div
                        className="hiw-step-circle"
                        animate={{
                          backgroundColor: isActive || isComplete ? step.color : '#27272a',
                          borderColor: isActive || isComplete ? step.color : '#3f3f46',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {isComplete ? (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-sm font-bold" style={{ color: isActive ? '#fff' : '#a1a1aa' }}>
                            {stepNum}
                          </span>
                        )}
                      </motion.div>
                      <div className="hiw-step-label">
                        <span className="text-xs font-mono uppercase tracking-wider" style={{ color: isActive ? step.color : '#71717a' }}>
                          Step {String(stepNum).padStart(2, '0')}
                        </span>
                        <span className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                          {step.title}
                        </span>
                      </div>
                    </button>
                    {index < totalSteps - 1 && (
                      <div className="hiw-step-connector-vertical">
                        <motion.div
                          className="hiw-step-connector-fill"
                          animate={{
                            height: isComplete ? '100%' : '0%',
                            backgroundColor: step.color,
                          }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            <div className="hiw-stepper-content">
              <div className="hiw-content-card" style={{ borderColor: activeStep.colorBorder }}>
                <HiwContentWrapper currentStep={currentStep} direction={direction}>
                  <div className="hiw-content-inner">
                    <div className="hiw-content-header">
                      <div className="hiw-icon-wrapper" style={{ backgroundColor: activeStep.colorLight }}>
                        <activeStep.icon className="w-7 h-7" style={{ color: activeStep.color }} />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">{activeStep.title}</h3>
                    </div>
                    <p className="text-base text-zinc-400 leading-relaxed mt-5">{activeStep.description}</p>
                    <ul className="mt-6 space-y-3">
                      {activeStep.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                          <svg className="w-4 h-4 flex-shrink-0" style={{ color: activeStep.color }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-zinc-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </HiwContentWrapper>

                <div className="hiw-nav-row">
                  {currentStep > 1 ? (
                    <button onClick={handleBack} className="hiw-prev-btn">Previous</button>
                  ) : (
                    <div />
                  )}
                  {currentStep < totalSteps && (
                    <button
                      onClick={handleNext}
                      className="hiw-next-btn"
                      style={{ backgroundColor: activeStep.color }}
                    >
                      Next Step
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HiwContentWrapper({ currentStep, direction, children }: {
  currentStep: number; direction: number; children: React.ReactNode;
}) {
  const [parentHeight, setParentHeight] = useState(0);

  return (
    <motion.div
      style={{ position: 'relative', overflow: 'hidden' }}
      animate={{ height: parentHeight || 'auto' }}
      transition={{ type: 'spring', duration: 0.4 }}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        <HiwSlideTransition key={currentStep} direction={direction} onHeightReady={h => setParentHeight(h)}>
          {children}
        </HiwSlideTransition>
      </AnimatePresence>
    </motion.div>
  );
}

function HiwSlideTransition({ children, direction, onHeightReady }: {
  children: React.ReactNode; direction: number; onHeightReady: (h: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) onHeightReady(containerRef.current.offsetHeight);
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={hiwVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35 }}
      style={{ position: 'absolute', left: 0, right: 0, top: 0 }}
    >
      {children}
    </motion.div>
  );
}

const hiwVariants = {
  enter: (dir: number) => ({ y: dir >= 0 ? 30 : -30, opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (dir: number) => ({ y: dir >= 0 ? -30 : 30, opacity: 0 }),
};
