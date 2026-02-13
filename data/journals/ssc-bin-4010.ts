import type { JournalModule } from '@/types/journal';

export const sscBin4010: JournalModule = {
  moduleId: 'ssc-bin-4010',
  moduleCode: 'SSC-BIN-4010-1.1',
  moduleName: 'Stakeholder Management',
  moduleNumber: 'M5',
  theme: {
    primary: 'from-indigo-600 to-cyan-500',
    accent: 'indigo',
    knowledgeBadgeClass: 'bg-indigo-100 text-indigo-800 border border-indigo-200',
    abilitiesBadgeClass: 'bg-cyan-100 text-cyan-800 border border-cyan-200',
    luHeaderBgClass: 'bg-gradient-to-r from-slate-800 via-indigo-900 to-cyan-800',
    luIconClass: 'text-cyan-300',
    promptCardClass: 'bg-indigo-50 border border-indigo-200',
    reflectionCardClass: 'bg-cyan-50 border border-cyan-200',
    sidebarActiveClass: 'bg-indigo-100 text-indigo-800',
    buttonPrimaryClass:
      'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white',
    coverTitleClass:
      'bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent',
  },
  coverSheet: {
    institution: 'Hua Mei Training Academy',
    program: 'Social Service — Clinical Attachment',
    moduleCode: 'SSC-BIN-4010-1.1',
    moduleName: 'Stakeholder Management',
    moduleNumber: 'Module 5 (M5)',
    assignmentTitle: 'Reflective Practice — Clinical Attachment Journal',
    studentName: '',
    studentId: '',
    intakeCohort: '',
    submissionDate: '',
    supervisorName: '',
    placementCenter: '',
    assessorName: '',
    contactDetails: '',
  },
  learningUnits: [
    // ─────────────────────────────────────────────────────────────────────
    // LEARNING UNIT 1 — LO1: Stakeholder Management
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu1',
      title:
        'LO1: Facilitate networking opportunities to build positive and trustworthy relationships with different stakeholders to attain joint objectives.',
      shortTitle: 'Learning Unit 1',
      subSections: [
        // ── Abilities A1 ─────────────────────────────────────────────────
        {
          id: 'lu1-a1',
          type: 'abilities',
          label: 'Abilities (A1)',
          performanceCriteriaTitle:
            'A1 — Facilitate networking opportunities to build relationships with stakeholders.',
          entries: [
            {
              id: 'lu1-a1-e1',
              prompts: [
                {
                  id: 'lu1-a1-e1-p1',
                  promptText: 'How do you engage volunteers (stakeholders)?',
                  performanceCriteria: 'A1',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Volunteers who believe in the cause of the organisation, and are given autonomy with sufficient financial resources and deployed to areas of their expertise, have a greater sense of purpose and are thus more engaged.',
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'A consistent communication method — such as email updates and newsletters — and the regular sharing of volunteers\' roles and responsibilities leads to higher levels of engagement and a stronger sense of belonging.',
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'Getting feedback from volunteers and providing channels for them to voice their concerns is positively correlated with the success of volunteer programmes and higher volunteer retention rates.',
                  },
                ],
              },
            },
          ],
        },

        // ── Abilities A4 ─────────────────────────────────────────────────
        {
          id: 'lu1-a4',
          type: 'abilities',
          label: 'Abilities (A4)',
          performanceCriteriaTitle:
            'A4 — Implement metrics to track stakeholder engagement.',
          entries: [
            {
              id: 'lu1-a4-e1',
              prompts: [
                {
                  id: 'lu1-a4-e1-p1',
                  promptText:
                    'How does your centre measure volunteer attendance (volunteer engagement)?',
                  performanceCriteria: 'A4',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Mobile apps are used to track and monitor volunteer attendance, along with metrics such as frequency of volunteers\' attendance at activities organised by the centre, and the average number of years of voluntary work at the centre.',
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'Here is a framework of metrics to track volunteer engagement, categorised by their strategic value:',
                  },

                  // ── 1. Quantitative Engagement ──────────────────────────
                  {
                    kind: 'description-block',
                    content: {
                      title: '1. Quantitative Engagement (The "Hard" Data)',
                      description:
                        'These numbers indicate whether the volunteer pipeline is healthy and whether people are actually showing up.',
                      bulletPoints: [],
                    },
                  },
                  {
                    kind: 'bullet-list',
                    content: [
                      'Volunteer Retention Rate — The percentage of volunteers who remain active over a specific period (e.g., 6 or 12 months). High turnover is disruptive to seniors who have formed meaningful bonds.',
                      'Frequency of Interaction — Instead of total hours, track visits per month per volunteer. A volunteer who visits for one hour every week is often more valuable in elder care than one who does a single 10-hour "blitz."',
                      'No-Show / Reliability Rate — The percentage of scheduled shifts missed without prior notice. In a care setting, a no-show is not merely an administrative lapse; it is a disappointed senior.',
                      'Training Completion Rate — The percentage of volunteers who complete advanced training (e.g., dementia care communication or palliative support). This indicates a growth mindset and long-term commitment.',
                    ],
                  },

                  // ── 2. Qualitative Engagement ───────────────────────────
                  {
                    kind: 'description-block',
                    content: {
                      title: '2. Qualitative Engagement (The "Feeling" Data)',
                      description:
                        'It is essential to know whether volunteers are finding meaning in their work or whether they are burning out.',
                      bulletPoints: [],
                    },
                  },
                  {
                    kind: 'bullet-list',
                    content: [
                      'vNPS (Volunteer Net Promoter Score) — Based on the question: "On a scale of 0–10, how likely are you to recommend volunteering at this centre to a friend?"',
                      'Motivation Alignment — Periodic surveys asking volunteers whether they feel their skills (e.g., playing piano, speaking a second language) are being utilised.',
                      'Exit Interview Themes — Categorising why people leave. Is it "life circumstances" or "lack of support from staff"?',
                    ],
                  },

                  // ── 3. Impact Metrics ───────────────────────────────────
                  {
                    kind: 'description-block',
                    content: {
                      title: '3. Impact Metrics (The "Outcome" Data)',
                      description:
                        'These measure the value added to seniors\' lives — the ultimate goal of the volunteer programme.',
                      bulletPoints: [],
                    },
                  },
                  {
                    kind: 'bullet-list',
                    content: [
                      'Resident Socialisation Score — A simple scale used by seniors to rate their mood before and after a volunteer visit.',
                      'Service Diversification — Tracking the variety of activities provided (e.g., 40% companionship, 30% technical help, 30% physical assistance). This ensures the programme is not one-dimensional.',
                      'Staff Relief Metric — Surveys asking professional caregivers: "To what extent did volunteer presence allow you to focus more on clinical tasks today?"',
                    ],
                  },

                  // ── Engagement Tracking Dashboard ───────────────────────
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Engagement Tracking Dashboard',
                      description:
                        'A summary of the key performance indicators used to monitor volunteer engagement across four strategic dimensions:',
                      bulletPoints: [],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Volunteer Engagement KPI Dashboard',
                    headers: ['Metric Type', 'KPI', 'Why it Matters'],
                    rows: [
                      {
                        'Metric Type': 'Stability',
                        'KPI': 'Retention Rate',
                        'Why it Matters': 'Seniors need consistent faces to feel secure.',
                      },
                      {
                        'Metric Type': 'Commitment',
                        'KPI': 'Upskilling Rate',
                        'Why it Matters':
                          'Shows the volunteer sees this as a serious role, not a hobby.',
                      },
                      {
                        'Metric Type': 'Sentiment',
                        'KPI': 'vNPS',
                        'Why it Matters': 'Happy volunteers are your best recruitment tool.',
                      },
                      {
                        'Metric Type': 'Impact',
                        'KPI': 'Resident Mood Lift',
                        'Why it Matters':
                          'Validates that the programme is achieving its mission.',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};
