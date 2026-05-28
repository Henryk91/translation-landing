<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Translation Practice landing page. PostHog is initialized in `src/main.tsx` using environment variables and the `PostHogProvider` wraps the entire app. Event tracking has been added across all key user interaction points: every "Start practicing" CTA, individual CEFR level links, grammar topic links, and the feedback modal flow (open, submit success, submit failure).

| Event | Description | File |
|-------|-------------|------|
| `cta_clicked` | User clicks any "Start practicing" CTA; `location` property indicates where (`hero`, `header`, `faq`) | `src/components/Hero.tsx`, `src/components/Header.tsx`, `src/components/FAQ.tsx` |
| `see_how_it_works_clicked` | User clicks "See how it works" anchor link in hero section | `src/components/Hero.tsx` |
| `level_clicked` | User clicks a CEFR level link; `level` and `path` properties included | `src/components/Levels.tsx` |
| `topic_clicked` | User clicks "Learn Now" for a grammar topic; `topic` and `path` properties included | `src/components/Topics.tsx` |
| `feedback_opened` | User opens the feedback modal | `src/components/FeedbackButton.tsx` |
| `feedback_submitted` | Feedback form submitted successfully | `src/components/FeedbackButton.tsx` |
| `feedback_failed` | Feedback submission failed (network or server error) | `src/components/FeedbackButton.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/710654)
- [CTA Clicks by Location](/insights/8zKkrHYr) — line chart showing CTA clicks over time, broken down by page location
- [Total CTA Clicks (Unique Users)](/insights/eGyURyoo) — bold number of daily unique users clicking CTAs
- [Level Clicks](/insights/naCIZ6Ox) — bar chart showing which CEFR levels attract the most interest
- [Topic Clicks](/insights/SSjj0Gxi) — bar chart showing which grammar topics are most popular
- [Feedback Funnel](/insights/Ud4faP31) — funnel from feedback modal opened to submission

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
