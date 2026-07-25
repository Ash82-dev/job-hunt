# Job Hunt

A modern Kanban board application for tracking job applications through different stages of the hiring process.

## Features

- **Kanban Board Dashboard** — Visual board with three columns: Applied, Interview, and Rejected
- **Application Management** — Create, view, and update job applications with detailed information
- **User Authentication** — Secure sign-up, login, and logout powered by Supabase Auth
- **Search** — Quickly filter applications by company name
- **Dark/Light Theme** — Toggle between themes with system preference support
- **Responsive Design** — Mobile-friendly sidebar and adaptive layouts
- **Form Validation** — Type-safe forms with React Hook Form and Zod schemas
- **Real-time Feedback** — Toast notifications for all user actions

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Language | TypeScript 6 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Backend | Supabase |
| State Management | TanStack Query |
| Forms | React Hook Form |
| Validation | Zod |
| Routing | React Router 8 |
| Notifications | React Hot Toast |

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project with auth enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/job-hunt.git

# Navigate to project directory
cd job-hunt

# Install dependencies
pnpm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

### Development

```bash
pnpm dev
```

### Production Build

```bash
pnpm build
pnpm preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── features/
│   ├── application/     # Application detail & update logic
│   ├── auth/            # Authentication (login, register, logout)
│   ├── dashboard/       # Kanban board & application summary
│   └── settings/        # User preferences (theme)
├── layouts/             # App and Auth layout wrappers
├── pages/               # Error pages (404)
├── router/              # Route definitions & guards
├── services/            # Supabase client setup
├── theme/               # Theme context & provider
└── types/               # Shared TypeScript types
```

## License

MIT
