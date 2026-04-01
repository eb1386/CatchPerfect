export interface LevelTip {
  advice: string;
  drill: string;
  focus: string;
}

export interface CoachingTip {
  analogy: string;
  drill: string;
  why: string;
  levels: Record<number, LevelTip>;
}

export const levelLabels: Record<number, { name: string; desc: string }> = {
  1: { name: 'Beginner', desc: 'New to rowing' },
  2: { name: 'Novice', desc: 'A few months in' },
  3: { name: 'Intermediate', desc: 'Comfortable on the water' },
  4: { name: 'Advanced', desc: 'Racing competitively' },
  5: { name: 'Elite', desc: 'High-level competitor' },
};

export const coachingTips: Record<string, CoachingTip> = {
  'Blade Entry Angle': {
    analogy: 'Imagine slicing a knife into butter at a clean angle.',
    drill: 'Pause drill at the catch position.',
    why: 'A clean blade entry means more power from every stroke.',
    levels: {
      1: {
        advice: 'Focus on dropping the blade into the water before you push with your legs. Think of it like dipping a spoon into soup -- smooth and straight down.',
        drill: 'Pause at the catch for 2 seconds, then place the blade and drive. Repeat for 20 strokes.',
        focus: 'Clean placement',
      },
      2: {
        advice: 'Work on squaring the blade earlier so it is ready to enter the water the moment you reach full compression.',
        drill: 'Square-and-pause drill: Square the blade at half-slide, pause, then continue to the catch and row.',
        focus: 'Early squaring',
      },
      3: {
        advice: 'Refine your entry angle to 40-45 degrees. A steeper entry grabs more water instantly and reduces backsplash.',
        drill: 'Top-quarter rowing: Row using only the first quarter of the drive. Focus entirely on a quick, clean catch.',
        focus: 'Angle precision',
      },
      4: {
        advice: 'Minimize air time between the square and the entry. The blade should lock on instantly at full reach without any downward chop.',
        drill: 'Video analysis: Record your catch from the side. The blade tip should enter before the handle moves horizontally.',
        focus: 'Zero slack',
      },
      5: {
        advice: 'Optimize entry timing relative to boat speed. At high rates, the blade must lock on within 0.08s of reaching full compression.',
        drill: 'Rate ladders: Row 10 strokes at each rate from 22-34, maintaining identical catch timing throughout.',
        focus: 'Rate-independent timing',
      },
    },
  },
  'Catch Timing': {
    analogy: 'Think of catching a ball at exactly the right moment.',
    drill: 'Legs-only rowing to isolate catch timing.',
    why: 'Better catch timing means power from the first moment of the drive.',
    levels: {
      1: {
        advice: 'Make sure your blade is in the water before your legs start pushing. Many beginners push first and catch air.',
        drill: 'Legs-only rowing: Keep arms straight, body still. Feel the blade connect with water before the legs push.',
        focus: 'Blade before legs',
      },
      2: {
        advice: 'Focus on the connection -- the moment you feel resistance on the blade, that is when your legs should fire.',
        drill: 'Light pressure catch drill: Row at 50% power, feeling for the "grab" of water before adding leg drive.',
        focus: 'Feeling the grab',
      },
      3: {
        advice: 'Reduce the delay between blade entry and leg drive to under 0.15s. The catch should feel like one fluid motion, not two separate actions.',
        drill: 'Quick-catch drill: Focus on making the catch as short as possible while keeping it clean. 10 strokes sharp, 10 strokes normal.',
        focus: 'Reducing delay',
      },
      4: {
        advice: 'Your catch timing should be consistent within 0.02s stroke-to-stroke. Focus on rhythm over individual strokes.',
        drill: 'Eyes-closed rowing: Row 20 strokes with eyes closed, relying on feel alone. This sharpens proprioception at the catch.',
        focus: 'Consistency',
      },
      5: {
        advice: 'At race pace, pre-load the blade by building leg pressure before full compression. The catch becomes a continuation, not an initiation.',
        drill: 'Race-start practice: Do standing starts focusing on instant connection. Time from entry to peak force should be under 0.1s.',
        focus: 'Pre-loading',
      },
    },
  },
  'Handle Speed': {
    analogy: 'Think of pulling a door open -- smooth acceleration, not a yank.',
    drill: 'Ratio rowing: 5 strokes half pressure, 5 strokes full pressure.',
    why: 'Consistent handle acceleration means even power application.',
    levels: {
      1: {
        advice: 'Avoid yanking the handle. Start the pull gently and let it speed up through the stroke, like rolling a snowball downhill.',
        drill: 'Light-heavy drill: Row 5 very light strokes, then 5 firm strokes. Keep the same smooth acceleration pattern for both.',
        focus: 'Smooth start',
      },
      2: {
        advice: 'The handle should accelerate continuously from catch to finish. If it stalls in the middle, you are losing your leg-back connection.',
        drill: 'Pause at half-drive: Stop when the handle is at your knees. Feel whether your back is connected. Then finish the stroke smoothly.',
        focus: 'Continuous pull',
      },
      3: {
        advice: 'Match your handle speed curve to your power curve. Peak handle speed should coincide with your strongest leg drive position.',
        drill: 'Power-10s with focus: Row 10 strokes at full power, concentrating on peak speed happening at mid-drive, not at the catch or finish.',
        focus: 'Speed curve matching',
      },
      4: {
        advice: 'Eliminate handle speed dips at the transition from legs to back. The handoff should be seamless.',
        drill: 'Transition rowing: Row focusing only on the moment your legs finish and your back takes over. There should be no speed drop.',
        focus: 'Seamless transition',
      },
      5: {
        advice: 'Optimize handle velocity profile for boat acceleration. At racing rates, the handle speed curve should be a smooth parabola.',
        drill: 'Instrumented rowing: Use force-curve data to visualize and refine your handle speed profile stroke by stroke.',
        focus: 'Velocity optimization',
      },
    },
  },
  'Body Angle at Catch': {
    analogy: 'Picture reaching for something on a high shelf while sitting.',
    drill: 'Body-over drill: Swing torso forward first, then bend knees.',
    why: 'Proper body angle lets your legs do the heavy lifting.',
    levels: {
      1: {
        advice: 'Lean forward from your hips, not your shoulders. Think of tipping a bucket forward -- the whole thing tilts, it does not fold in the middle.',
        drill: 'Sit at the catch position and have someone check your posture. Your back should be straight, leaning forward about 30 degrees from vertical.',
        focus: 'Hip hinge',
      },
      2: {
        advice: 'Your body angle should be set before your knees start bending. Do not add more forward lean as you slide up -- set it early and hold it.',
        drill: 'Body-over pause: At the finish, rock forward to your target angle, pause 2 seconds, then start the slide. The angle should not change.',
        focus: 'Set early',
      },
      3: {
        advice: 'Aim for 25-30 degrees of forward lean. More than that compresses your lungs at the catch; less reduces your effective stroke length.',
        drill: 'Mirror check: Row on an erg next to a mirror. Watch your body angle at the catch -- it should be the same every single stroke.',
        focus: 'Angle consistency',
      },
      4: {
        advice: 'Maintain body angle under fatigue. Most rowers lose 5-10 degrees of forward lean in the last 500m. Build endurance in that position.',
        drill: 'Fatigue holds: After a hard piece, hold the catch position (body over, arms extended) for 30 seconds. Build strength in that range.',
        focus: 'Endurance under load',
      },
      5: {
        advice: 'Micro-adjust body angle based on rate. At higher rates, slightly less angle keeps you efficient. At low rates, maximize reach.',
        drill: 'Rate sweeps: Row 2 minutes each at rates 18, 24, 30. Note your natural body angle at each and refine for maximum length vs. efficiency.',
        focus: 'Rate-adaptive angle',
      },
    },
  },
  'Leg Drive Power': {
    analogy: 'Imagine pushing a heavy box across the floor with flat feet.',
    drill: 'Feet-out rowing to force proper heel engagement.',
    why: 'Strong leg drive is where 60% of your rowing power comes from.',
    levels: {
      1: {
        advice: 'Push through your whole foot, especially the heels. If only your toes are pressing, you are not using your strongest muscles.',
        drill: 'Feet-out rowing: Unstrap your feet. If you push through your toes, your feet will slip off. This teaches heel connection.',
        focus: 'Heel connection',
      },
      2: {
        advice: 'Think of a leg press in the gym. You would not push with just your quads -- engage your glutes and hamstrings too.',
        drill: 'Heavy-legs drill: Row legs-only at maximum pressure for 10 strokes. Focus on pushing the footplate away like a leg press machine.',
        focus: 'Full leg engagement',
      },
      3: {
        advice: 'Power application should be immediate from the catch. There should be no "soft spot" at the start of the drive where the legs are pushing but the boat is not accelerating.',
        drill: 'Standing starts: From a dead stop, focus on instant power. The first stroke should move the boat significantly.',
        focus: 'Instant power',
      },
      4: {
        advice: 'Optimize your drive-to-recovery power ratio. You should be producing 85%+ of peak force within the first third of the drive.',
        drill: 'Force-curve work: Aim for a front-loaded force curve. Peak force should happen before your shins pass vertical.',
        focus: 'Front-loaded power',
      },
      5: {
        advice: 'At race pace, leg drive must maintain peak watts even at stroke 180+. Build specific endurance for sustained power output.',
        drill: 'Progressive 2k intervals: Row 500m repeats, maintaining within 5% of your peak watt output on every interval.',
        focus: 'Sustained peak watts',
      },
    },
  },
  Sequencing: {
    analogy: 'Think of a whip -- the motion flows in order from handle to tip.',
    drill: 'Reverse pick drill: legs only, add body, add arms.',
    why: 'Correct sequencing chains your power together.',
    levels: {
      1: {
        advice: 'Remember: legs push first, then your back swings, then your arms pull. On the way back, reverse it: arms, body, legs. Like stacking and unstacking blocks.',
        drill: 'Pick drill: Row 10 strokes arms only, 10 arms + body, 10 full strokes. Feel each piece add on in order.',
        focus: 'Legs-back-arms order',
      },
      2: {
        advice: 'The most common mistake is opening the back too early. Your back should not swing until your legs are nearly straight.',
        drill: 'Legs-only focus: Row 20 strokes using only legs, keeping your back angle fixed. If your back moves, you are breaking sequence.',
        focus: 'Delayed back swing',
      },
      3: {
        advice: 'Focus on the overlap zones -- the handoff from legs to back and from back to arms should be seamless, not abrupt.',
        drill: 'Slow-motion rowing: Row at rate 16 at very low pressure. Exaggerate the sequential nature. Feel three distinct phases blend together.',
        focus: 'Smooth transitions',
      },
      4: {
        advice: 'At racing rates, the sequence compresses but should never collapse. Legs still lead even when the whole stroke takes 0.8 seconds.',
        drill: 'Rate build with video: Film yourself rowing from rate 20 to 36. Review to ensure sequencing stays clean at every rate.',
        focus: 'Compressed but clean',
      },
      5: {
        advice: 'Optimize the overlap timing between segments for maximum boat run. The ideal overlap is about 10-15% between each phase.',
        drill: 'Instrumented analysis: Use a SmartOar or similar to view your force profile segmentation. Adjust overlap for peak boat speed.',
        focus: 'Overlap optimization',
      },
    },
  },
  'Handle Height': {
    analogy: 'Think of carrying a tray of drinks -- keep it level.',
    drill: 'Straight-arm rowing to feel a flat hand path.',
    why: 'Stable handle height means a cleaner, more efficient stroke.',
    levels: {
      1: {
        advice: 'Keep your hands traveling at roughly the same height throughout the drive. Imagine a shelf at belly-button height -- your hands should stay on it.',
        drill: 'Straight-arm rowing: Row with arms straight (legs and back only). Watch your hands trace a flat, level line.',
        focus: 'Level hands',
      },
      2: {
        advice: 'A slight arc is natural, but big dips or rises waste energy. Your knuckles should stay between navel and lower ribs throughout.',
        drill: 'String drill: Visualize a string connecting your hands to a fixed point at rib height. Keep tension on that imaginary string throughout the stroke.',
        focus: 'Consistent arc',
      },
      3: {
        advice: 'Handle height affects blade depth. If your hands drop, the blade goes too deep. If they rise, you wash out. Aim for consistent blade burial.',
        drill: 'Blade-depth focus: Row watching your blade. It should be buried to the same depth on every stroke. Adjust hand height to control it.',
        focus: 'Blade depth control',
      },
      4: {
        advice: 'Maintain handle height during the extraction. Many rowers drop their hands at the finish, causing a messy extraction and lost run.',
        drill: 'Tap-down drill: At the finish, practice a quick, minimal tap-down. The hands should drop only 2-3 inches to extract cleanly.',
        focus: 'Clean extraction',
      },
      5: {
        advice: 'Optimize handle height for water conditions. In rough water, slightly higher handles provide better blade clearance without sacrificing depth.',
        drill: 'Variable conditions work: Practice in different water states, consciously adjusting handle height while maintaining consistent blade depth.',
        focus: 'Adaptive control',
      },
    },
  },
  Posture: {
    analogy: 'Imagine a string pulling you upward from the top of your head.',
    drill: 'Sit tall at the finish, squeeze shoulder blades gently.',
    why: 'Good posture protects your back and improves breathing.',
    levels: {
      1: {
        advice: 'Sit up tall like there is a string pulling the top of your head to the ceiling. Slouching on the erg is like rowing with the brakes on.',
        drill: 'Posture check at the finish: After each stroke, sit tall for a moment. Squeeze your shoulder blades gently together and feel your chest open.',
        focus: 'Sitting tall',
      },
      2: {
        advice: 'Maintain your tall posture even when you lean forward. The forward lean comes from your hips, not from rounding your back.',
        drill: 'Flat-back drill: Place your hand on your lower back as you rock over. It should stay flat (slight natural curve), not rounded.',
        focus: 'Flat back forward',
      },
      3: {
        advice: 'Core engagement is the key to posture. Your abdominals should be slightly braced throughout the stroke, like you are about to be lightly pushed.',
        drill: 'Core-focus pieces: Row 500m focused entirely on keeping your core braced. Your back should feel supported, not strained.',
        focus: 'Core stability',
      },
      4: {
        advice: 'Under fatigue, posture is the first thing to go. Build specific endurance for maintaining posture through the final quarter of a race.',
        drill: 'Fatigue posture sets: After a hard 1000m piece, immediately row 500m at low pressure with perfect posture. Train the habit under fatigue.',
        focus: 'Fatigue resistance',
      },
      5: {
        advice: 'Optimize spinal alignment for maximum force transfer. Any postural deviation leaks power between your legs and the blade.',
        drill: 'Biomechanical assessment: Work with a coach to analyze your spinal position at each phase. Use targeted mobility work to address limitations.',
        focus: 'Force transfer',
      },
    },
  },
  'Recovery Time': {
    analogy: 'The recovery is like taking a breath between sentences.',
    drill: 'Count "one-two-three" during the recovery.',
    why: 'A controlled recovery lets muscles rest between strokes.',
    levels: {
      1: {
        advice: 'The slide back to the catch should take about twice as long as the drive. If you are rushing forward, you are not resting. Slow it down.',
        drill: 'Counting drill: Count "one" on the drive and "one-two" on the recovery. The recovery should feel noticeably slower.',
        focus: '2:1 ratio',
      },
      2: {
        advice: 'Think of the recovery as your rest period. Let gravity and relaxation do the work -- do not muscle your way back to the catch.',
        drill: 'Relaxation rowing: Row 20 strokes focusing on making the recovery feel effortless. Your grip should loosen, shoulders drop, breathing steady.',
        focus: 'Relaxed return',
      },
      3: {
        advice: 'Use the recovery to set up the next stroke. A controlled recovery means a better catch, which means a better drive. It is an investment.',
        drill: 'Variable rate drill: Row 1 minute at rate 18, then 1 minute at rate 24. Keep the recovery time identical -- only shorten the drive.',
        focus: 'Recovery as setup',
      },
      4: {
        advice: 'At high rates, the recovery shortens but should never feel rushed. Train your ability to relax in shorter and shorter windows.',
        drill: 'Rate ceiling work: Find the rate where your recovery starts feeling rushed. Work 2 beats below that, focusing on maintaining calm.',
        focus: 'Calm at high rates',
      },
      5: {
        advice: 'Optimize recovery timing for boat run. The ideal recovery speed decelerates into the catch, matching boat deceleration for zero check.',
        drill: 'Boat-run focus: Row in a single and measure glide distance per stroke. Adjust recovery speed to maximize distance the boat runs between strokes.',
        focus: 'Maximizing run',
      },
    },
  },
  'Hand Speed': {
    analogy: 'Like pushing a revolving door -- just enough force to keep moving.',
    drill: 'Hands-away drill: Push hands away quickly but smoothly at the finish.',
    why: 'Quick, controlled hand speed creates room for a relaxed recovery.',
    levels: {
      1: {
        advice: 'At the finish, push your hands away from your body first, before anything else moves. Quick hands away gives you room for a smooth recovery.',
        drill: 'Hands-away only: Sit at the finish and practice just the hand push-away motion 20 times. Snap the hands forward, then pause.',
        focus: 'Hands first',
      },
      2: {
        advice: 'Your hands should move away at the same speed every stroke. Inconsistent hand speed throws off your whole recovery rhythm.',
        drill: 'Metronome rowing: Set a metronome and match your hand-away timing to the click. Build consistency.',
        focus: 'Consistent speed',
      },
      3: {
        advice: 'The hands-away speed should create a natural body rock-over. If your hands are too slow, your body waits. Too fast, and you lurch forward.',
        drill: 'Chain reaction drill: Focus on hands triggering body movement. The hands lead, the body follows like a chain reaction.',
        focus: 'Triggering body prep',
      },
      4: {
        advice: 'At race pace, hand speed must increase proportionally with rate while maintaining the same quality of extraction.',
        drill: 'Rate build hand focus: Build from 20 to 34 in 2-stroke increments, focusing only on maintaining clean, fast hands-away at every rate.',
        focus: 'Rate-proportional speed',
      },
      5: {
        advice: 'Optimize hand speed for minimal check at the finish. The hands should redirect momentum rather than stop-and-start it.',
        drill: 'Flow work: Row at race pace focusing on the turnaround at the finish. Hands should redirect like a pendulum, not brake and restart.',
        focus: 'Momentum redirection',
      },
    },
  },
  'Body Preparation': {
    analogy: 'Like a sprinter getting set in the blocks before the gun.',
    drill: 'Pause at half-slide to check if body is already rocked forward.',
    why: 'Early body preparation means arriving at the catch ready to drive.',
    levels: {
      1: {
        advice: 'Your body should be leaning forward before your legs start bending. Think: hands away, body forward, THEN legs bend.',
        drill: 'Three-step recovery: Pause after hands away. Pause after body over. Then let legs bring you to the catch. Three distinct steps.',
        focus: 'Sequence the recovery',
      },
      2: {
        advice: 'Your body-over should be complete by the time your knees break. If you are still rocking forward while sliding, you are late.',
        drill: 'Knees-break checkpoint: Row normally but mentally check -- when your knees start bending, is your body already forward? If not, slow down.',
        focus: 'Complete before slide',
      },
      3: {
        advice: 'The body-over position should be identical whether you are at half-slide or full compression. Set it once and lock it.',
        drill: 'Half-slide pause: Row with a 2-second pause at half-slide. Check your body angle -- then continue to the catch without any more forward lean.',
        focus: 'Lock and hold',
      },
      4: {
        advice: 'Under fatigue, body prep timing drifts late. Build specific awareness to maintain early preparation in the last quarter of a race.',
        drill: 'Descending intervals: 500m, 400m, 300m, 200m with full rest. On each piece, the only focus is early body prep, especially as you tire.',
        focus: 'Timing under fatigue',
      },
      5: {
        advice: 'Optimize body-over speed relative to rate. At higher rates, the body-over must be faster and more decisive while remaining smooth.',
        drill: 'Rate-specific body prep: Row 10-stroke bursts at rates 26, 30, 34, 38. Focus on making body-over timing crisp at each rate.',
        focus: 'Decisive at all rates',
      },
    },
  },
  'Slide Control': {
    analogy: 'Like rolling a marble to the edge of a table -- controlled and decelerating.',
    drill: 'Tennis ball between knees to prevent splaying.',
    why: 'Controlled slide speed means a smoother catch.',
    levels: {
      1: {
        advice: 'Slow down as you approach the catch. Crashing into the front stops is like slamming the brakes in a car -- it kills all your momentum.',
        drill: 'Deceleration focus: Row 20 strokes thinking only about slowing down in the last 3 inches of the slide. Arrive gently at the catch.',
        focus: 'Gentle arrival',
      },
      2: {
        advice: 'Your slide speed should be constant or decelerating -- never accelerating into the catch. Think of parking a car: you coast in, you do not floor it.',
        drill: 'Slide-speed awareness: Row at rate 20 and consciously feel your slide speed. It should feel like the seat is barely moving at full compression.',
        focus: 'No acceleration',
      },
      3: {
        advice: 'Slide control is core control. If your core is not engaged, your mass overshoots the catch and creates check (backward force on the boat).',
        drill: 'Core-engaged slides: Row focusing on bracing your core as you approach the catch. The core should "absorb" your momentum like a shock absorber.',
        focus: 'Core deceleration',
      },
      4: {
        advice: 'Match your slide deceleration to the boat deceleration. The seat and the boat should come to the same speed at the catch for zero check.',
        drill: 'Boat-speed matching: In a single, focus on making the catch feel weightless. If the boat checks, your slide was too fast.',
        focus: 'Zero-check catch',
      },
      5: {
        advice: 'At race pace, slide control becomes the primary differentiator for boat speed. Even 5% excess check at the catch costs significant speed over 2000m.',
        drill: 'GPS/speed coach work: Monitor boat speed through the catch. Aim for less than 3% speed drop at the catch at race pace.',
        focus: 'Minimizing speed loss',
      },
    },
  },
  'Recovery Speed': {
    analogy: 'Like a pendulum -- fast at the bottom, slow at the top.',
    drill: 'Two-speed drill: Make the recovery noticeably slower than the drive.',
    why: 'Slowing the recovery gives rest time and prevents a sloppy catch.',
    levels: {
      1: {
        advice: 'If your recovery feels as fast as your drive, you are rushing. The recovery should feel like the "easy" part of every stroke.',
        drill: 'Exaggeration drill: Row 10 strokes making the recovery absurdly slow -- like slow motion. Then gradually speed up while keeping it relaxed.',
        focus: 'Slower than the drive',
      },
      2: {
        advice: 'Use the recovery to breathe. Exhale on the drive, inhale on the recovery. If you cannot breathe calmly on the recovery, you are going too fast.',
        drill: 'Breathing-linked recovery: Tie your recovery speed to a full, slow inhale. The slide should not arrive at the catch before the breath is complete.',
        focus: 'Breathing rhythm',
      },
      3: {
        advice: 'A rushed recovery steals energy from the drive. Every bit of effort on the recovery is effort you cannot use on the next stroke.',
        drill: 'Energy-check drill: Row 1000m at moderate effort, then row 1000m at the same split but focusing on a lazier recovery. Note how much easier it feels.',
        focus: 'Energy conservation',
      },
      4: {
        advice: 'Your recovery speed should be the same at stroke 10 and stroke 200 of a race. Fatigue makes you rush -- fight that urge.',
        drill: 'Late-race simulation: Row 500m hard, then 500m at the same rate focusing entirely on recovery speed. Train the habit of staying calm when tired.',
        focus: 'Consistent under fatigue',
      },
      5: {
        advice: 'Optimize recovery velocity profile for maximum boat run. Decelerate smoothly into the catch rather than maintaining constant recovery speed.',
        drill: 'Boat-run metrics: Measure distance per stroke at different recovery speed profiles. Find the optimal deceleration curve for your boat class.',
        focus: 'Velocity profiling',
      },
    },
  },
  'Body Prep Timing': {
    analogy: 'Like getting dressed before leaving the house -- do not do it at the door.',
    drill: 'Arms-body-legs drill: Break recovery into three distinct moves.',
    why: 'Getting the body set early gives a stable, powerful catch.',
    levels: {
      1: {
        advice: 'After the finish: hands go first, then body rocks forward, then legs bend. It is like a three-step dance -- learn the order and stick to it.',
        drill: 'Segmented recovery: Pause after each segment. Hands away (pause). Body over (pause). Legs to catch. Do 20 strokes this way.',
        focus: 'Three-step order',
      },
      2: {
        advice: 'If your body is still rocking forward when your legs start bending, you are late. The body should be set before the slide begins.',
        drill: 'Quick body-over: Practice snapping the body forward immediately after hands away. It should be done in under a second.',
        focus: 'Quick set',
      },
      3: {
        advice: 'Think of body prep as loading a spring. The sooner you are set, the more time you have to build into a powerful catch.',
        drill: 'Loaded-catch drill: Focus on feeling "loaded" and ready at half-slide. If you are still setting up, slow the recovery and prep earlier.',
        focus: 'Loaded and ready',
      },
      4: {
        advice: 'At race rates above 32, body prep must happen almost simultaneously with hands-away. Train the speed of this transition.',
        drill: 'High-rate body prep: Row at rate 34+ for 20-stroke bursts. The only focus is getting the body set despite the compressed timing.',
        focus: 'Speed at high rates',
      },
      5: {
        advice: 'Optimize body-prep timing to minimize stern dip. Late body prep shifts your mass forward too abruptly, causing the stern to dip and check the boat.',
        drill: 'Stern-dip analysis: Have a coach watch the stern during your recovery. Adjust body-prep speed until the stern movement is minimal.',
        focus: 'Minimal stern disruption',
      },
    },
  },
};
