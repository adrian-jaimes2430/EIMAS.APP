---
name: Kinetic Intelligence
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1b1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#303032'
  outline: '#909097'
  outline-variant: '#46464c'
  surface-tint: '#c0c6de'
  primary: '#c0c6de'
  on-primary: '#2a3043'
  primary-container: '#020617'
  on-primary-container: '#72778d'
  inverse-primary: '#585e73'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ddb7ff'
  on-tertiary: '#490080'
  tertiary-container: '#0f0021'
  on-tertiary-container: '#9f4cee'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce1fb'
  primary-fixed-dim: '#c0c6de'
  on-primary-fixed: '#151b2d'
  on-primary-fixed-variant: '#40465a'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#131315'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style
The design system is engineered for the high-stakes world of market intelligence. It evokes the feeling of an "AI Command Center," blending the efficiency of a developer tool with the visual impact of high-end editorial media. 

The aesthetic is **Corporate Modern with a Cinematic edge**. It prioritizes precision and materiality, using deep navy voids and electric luminous accents to guide the user's focus toward critical data points. The personality is sophisticated and forward-leaning—not just a tool for observation, but a platform for strategic dominance. 

Key visual pillars include:
- **Luminous Precision:** Using light as a functional signal, not just decoration.
- **Editorial Authority:** Bold, intentional typography that treats data like a headline.
- **Controlled Glassmorphism:** Subtle translucency to maintain a sense of depth without sacrificing performance or clarity.

## Colors
This design system utilizes a "Deep Void" dark mode, centered around the seed color `#020617`. The palette is designed for high-contrast visibility in low-light environments typical of analyst workflows.

- **Primary & Neutral:** The base is a near-black navy, providing a canvas where information can "pop." Surfaces are tiered using tonal layers rather than pure black to create a sense of physical structure.
- **Signal Colors:** Electric Blue (#3b82f6) acts as the primary action and focus color. Ultraviolet (#a855f7) represents AI-driven insights and automated processes.
- **Market Intelligence Scale:** A specialized color scale is provided for data visualization. It transitions from stable blues to high-velocity magentas, allowing users to instantly categorize the urgency and impact of market shifts.

## Typography
The system uses **Inter** exclusively to leverage its technical, utilitarian roots while pushing its limits through extreme weight and scale. 

- **Display Hierarchy:** Large-scale headlines use heavy weights and tight letter spacing to evoke an editorial, "front-page" feel. This is used for key market insights and high-level summaries.
- **Data Legibility:** Labels are set in uppercase with increased letter spacing to provide a "technical instrument" aesthetic, ensuring small metadata remains highly readable.
- **Body Text:** Main content maintains a generous line height (1.5x) to prevent fatigue during long reading sessions.

## Layout & Spacing
This system employs a **Fluid Grid** model with high-density spacing for data and expansive, low-density spacing for editorial sections.

- **Grid:** A 12-column layout for desktop with 24px gutters. On mobile, this collapses to a 4-column layout with 16px margins.
- **Rhythm:** The system uses a 4px baseline grid. Padding and margins should always be multiples of this unit to maintain mathematical harmony.
- **Intelligence Density:** Dashboards utilize "sm" and "md" spacing to maximize information density, while "Story" or "Insight" pages utilize "xl" and "xxl" spacing to create a cinematic, high-end experience.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layering** and **Restrained Glassmorphism**.

- **Surface Levels:** 
    - *Void (Base):* The deepest layer, used for the main background.
    - *Surface (Mid):* Used for primary cards and sidebar containers.
    - *Elevated (High):* Used for tooltips, modals, and active states.
- **Luminosity:** Elevation is further defined by subtle inner borders (1px) in a slightly lighter shade than the background, creating a "beveled glass" effect. 
- **Glows:** Use soft, diffused radial gradients behind key UI elements (like the primary action button) to suggest a light source emanating from within the screen.

## Shapes
The shape language balances precision with approachability. 

- **Radius:** A standard radius of 0.5rem (8px) is used for most components to provide a "Soft Rounded" feel that feels modern and accessible. 
- **Large Components:** Cards and main containers use `rounded-lg` (16px) to define distinct sections of content.
- **Interactive Elements:** Buttons and tags use a consistent 8px radius to maintain a unified interactive language.

## Components
- **Buttons:** Primary buttons feature a high-contrast gradient from Electric Blue to Ultraviolet. They should feel solid and "heavy," with a slight glow on hover. Secondary buttons are "ghost" style with a 1px border.
- **Cards:** Cards should have a subtle 1px border using `#334155`. Backgrounds should use a backdrop-blur (12px) if positioned over visual content to maintain the cinematic glass effect.
- **Input Fields:** Search and data inputs are dark and recessed. The focus state should illuminate the entire border in Electric Blue with a soft outer glow.
- **Market Intelligence Chips:** Small, high-contrast badges used to denote market status (e.g., "Trending," "Volatile"). These use the `intelligence_scale` colors with white text for maximum readability.
- **Data Visualization:** Charts should use thin stroke weights (1px to 1.5px) and avoid heavy fills. Use the `intelligence_scale` for line colors to communicate data sentiment.
- **The MAGI Agent:** A dedicated UI component for AI interaction. This should feature a constant, subtle Ultraviolet pulse animation to indicate "active thought."