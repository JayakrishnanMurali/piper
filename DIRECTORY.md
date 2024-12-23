```
piper/
├── apps/                          # Applications (API, Dashboard)
│   ├── api/                       # Backend API
│   │   ├── src/                   # API source code
│   │   │   ├── routes.ts          # API route definitions
│   │   │   ├── pipeline-runner.ts # Pipeline execution logic
│   │   │   ├── auth.ts            # Authentication and authorization
│   │   │   └── main.ts            # API server entry point
│   │   ├── deno.json              # API-specific Deno configuration
│   │   └── README.md              # Documentation for API
│   ├── dashboard/                 # Frontend dashboard
│   │   ├── src/                   # Dashboard source code
│   │   │   ├── components/        # UI components
│   │   │   ├── pages/             # Page components
│   │   │   ├── utils/             # Utilities for the frontend
│   │   │   └── App.tsx            # Root component
│   │   ├── deno.json              # Dashboard-specific Deno configuration
│   │   └── README.md              # Documentation for Dashboard
├── packages/                      # Reusable modules
│   ├── core/                      # Core logic shared across apps
│   │   ├── pipeline.ts            # Pipeline execution engine
│   │   ├── webhook-handler.ts     # Webhook processing
│   │   ├── notification.ts        # Notification handling
│   │   ├── deno.json              # Core-specific Deno configuration
│   │   └── README.md              # Documentation for Core
│   ├── db/                        # Database logic
│   │   ├── schema.sql             # SQL schema
│   │   ├── migrations/            # Database migrations
│   │   ├── db.ts                  # Database connection utility
│   │   ├── deno.json              # DB-specific Deno configuration
│   │   └── README.md              # Documentation for DB
│   ├── integrations/              # Third-party integrations
│   │   ├── github.ts              # GitHub integration
│   │   ├── gitlab.ts              # GitLab integration
│   │   ├── cloud/                 # Cloud provider integrations
│   │   │   ├── aws.ts             # AWS integration
│   │   │   ├── gcp.ts             # GCP integration
│   │   │   └── azure.ts           # Azure integration
│   │   ├── deno.json              # Integration-specific Deno configuration
│   │   └── README.md              # Documentation for Integrations
├── tests/                         # Cross-package tests
│   ├── api/                       # API tests
│   ├── core/                      # Core tests
│   ├── integrations/              # Integration tests
│   └── workers/                   # Worker tests
├── deno.json                      # Root Deno configuration with workspace settings
├── README.md                      # Root documentation
└── LICENSE                        # Project license
```
