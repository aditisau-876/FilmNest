# 🎬 FilmNest

### Discover. Explore. Find Your Next Favorite Movie.

**FilmNest** is a movie discovery platform that brings movie exploration, personalized recommendations, and cinematic experiences together in one place. From trending titles and timeless favorites to AI-powered suggestions tailored to your interests, FilmNest helps you discover what to watch next.

Explore movies, browse genres, learn about casts, watch trailers, read reviews, explore streaming availability, and build your personal watchlist through a modern, cinematic interface.

## 🌐 Live Deployment

| Service                          | URL                                        |
| -------------------------------- | ------------------------------------------ |
| 🎬 FilmNest Frontend             | https://filmnest-ci02.onrender.com         |
| ⚙️ FilmNest Backend              | https://filmnest-backend.onrender.com      |
| 📚 Interactive API Documentation | https://filmnest-backend.onrender.com/docs |

**Explore FilmNest:** https://filmnest-ci02.onrender.com

**Backend API:** https://filmnest-backend.onrender.com

---

## ✨ Features

* 🎞️ **Movie Discovery** — Explore trending, popular, top-rated, upcoming, and currently playing movies.
* 🔎 **Movie Search** — Search for films and discover titles using supported filters.
* 🤖 **AI-Powered Recommendations** — Find movies based on your mood, interests, favorite films, actors, and genres.
* 🎭 **Genre Exploration** — Discover movies across different genres.
* 📖 **Detailed Movie Pages** — Explore plot summaries, ratings, release information, cast details, and similar movies.
* ▶️ **Trailer Discovery** — Find available movie trailers.
* ⭐ **Movie Reviews** — Explore reviews and ratings from supported sources.
* 📺 **Streaming Availability** — Check available streaming providers where information is supported.
* ❤️ **Personal Watchlist** — Save movies you want to watch.
* 🕒 **Recently Viewed Movies** — Track supported movie-viewing activity.
* 🔐 **User Authentication** — Create an account and sign in using email and password.
* 🌐 **Google Sign-In** — Authenticate using Google OAuth.
* 🎯 **Personalized Discovery** — Use supported movie activity and genre preferences to improve discovery.
* 📱 **Responsive Design** — Enjoy a cinematic browsing experience across supported screen sizes.

> FilmNest is a movie discovery platform, not a direct movie-streaming service. Trailer playback and streaming availability depend on external providers.

---

## 🛠️ Technology Stack

### Frontend

* React
* Vite
* JavaScript
* Tailwind CSS
* React Router
* Axios
* Framer Motion
* Lucide React

### Backend

* Python
* FastAPI
* SQLAlchemy
* Pydantic
* Alembic

### Database

* PostgreSQL

### External Services

* **The Movie Database (TMDB)** — Movie details, genres, cast, trailers, reviews, and supported streaming information.
* **Google OAuth** — Google sign-in.
* **Google Gemini** — AI-powered movie recommendations, when configured.

### Deployment

* **Render Static Site** — Frontend hosting.
* **Render Web Service** — Backend hosting.
* **Render PostgreSQL** — Database hosting.

---

## 🏗️ Architecture

```text
                   FILMNEST
                       |
          +------------+------------+
          |                         |
          v                         v
    React Frontend             FastAPI Backend
    Render Static Site         Render Web Service
          |                         |
          |  HTTPS API Requests     |
          +------------------------>|
                                    |
                       +------------+------------+
                       |            |            |
                       v            v            v
                  PostgreSQL       TMDB       Gemini AI
                  User Data     Movie Data   Recommendations
```

### Live Services

| Component | Deployment                                 |
| --------- | ------------------------------------------ |
| Frontend  | https://filmnest-ci02.onrender.com         |
| Backend   | https://filmnest-backend.onrender.com      |
| API Docs  | https://filmnest-backend.onrender.com/docs |

---

## 🚀 Run FilmNest Locally

### Prerequisites

Install the following tools:

* Python 3.12
* Node.js and npm
* PostgreSQL
* Git

You'll also need the appropriate API credentials for the external services you intend to use.

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd FilmNest
```

Replace the placeholder with your actual GitHub repository URL.

### 2. Configure the Backend

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv .venv
```

Activate it on Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

### 3. Configure Backend Environment Variables

Create a `.env` file inside `backend/`.

Example:

```env
DATABASE_URL=your_postgresql_connection_string
SECRET_KEY=your_secure_secret_key
TMDB_API_TOKEN=your_tmdb_api_token
GEMINI_API_KEY=your_gemini_api_key
GOOGLE_CLIENT_ID=your_existing_google_client_id
```

Add any other variables required by your backend settings. For example, configure `GOOGLE_CLIENT_SECRET` only if your implementation requires it.

Use your existing Google OAuth Client ID. You do not need to generate a new one just because the application is deployed.

**Never commit real credentials or secrets to GitHub.**

### 4. Prepare the Database

Create a PostgreSQL database and configure its connection string in your backend `.env`.

Apply database migrations:

```bash
alembic upgrade head
```

Run this command from the backend directory.

### 5. Start the Backend

```bash
python run.py
```

When the server is running, open:

http://127.0.0.1:8000/docs

This opens the interactive FastAPI documentation.

### 6. Configure the Frontend

Open a second terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside `frontend/`:

```env
VITE_API_URL=http://127.0.0.1:8000
VITE_GOOGLE_CLIENT_ID=your_existing_google_client_id
```

Use the same existing Google OAuth Client ID that belongs to your Google Cloud web application.

Make sure your frontend reads these variables, for example:

```jsx
<GoogleOAuthProvider
  clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
>
  {/* Your application */}
</GoogleOAuthProvider>
```

Never put a Google Client Secret or other private credentials in frontend environment variables.

### 7. Start the Frontend

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

http://localhost:5173

---

## 🌍 Production Configuration

FilmNest is deployed using Render.

### Frontend — Render Static Site

| Setting           | Value                              |
| ----------------- | ---------------------------------- |
| Service URL       | https://filmnest-ci02.onrender.com |
| Root Directory    | `frontend`                         |
| Build Command     | `npm ci && npm run build`          |
| Publish Directory | `dist`                             |

Configure these frontend environment variables in Render:

```env
VITE_API_URL=https://filmnest-backend.onrender.com
VITE_GOOGLE_CLIENT_ID=your_existing_google_client_id
```

Replace the Client ID placeholder with the actual existing value.

After changing environment variables, trigger a new deployment so Vite rebuilds the frontend with the updated configuration.

### Backend — Render Web Service

| Setting        | Value                                              |
| -------------- | -------------------------------------------------- |
| Service URL    | https://filmnest-backend.onrender.com              |
| Root Directory | `backend`                                          |
| Build Command  | `pip install -r requirements.txt`                  |
| Start Command  | `uvicorn app.main:app --host 0.0.0.0 --port $PORT` |

The start command assumes your FastAPI application is defined as `app` in `backend/app/main.py`.

Configure the required backend environment variables in Render, including your database connection, signing secret, TMDB token, Gemini key, and existing Google Client ID as required by your implementation.

### Database — Render PostgreSQL

Configure the backend to connect to the PostgreSQL instance used by the deployed application. Apply all required Alembic migrations to the production database.

---

## 🔑 Google OAuth Configuration

FilmNest uses Google sign-in through the frontend and its backend `/auth/google` API endpoint.

### Existing Google Client ID

Keep your existing Google OAuth Client ID. Update the allowed website origin to include the deployed frontend:

```text
https://filmnest-ci02.onrender.com
```

If you also use Google login locally, keep the appropriate local development origin:

```text
http://localhost:5173
```

### Authorized Redirect URIs

The current frontend flow obtains a Google access token and sends it to:

```text
POST https://filmnest-backend.onrender.com/auth/google
```

This is an API endpoint, not a browser redirect URI. Do not add it as an authorized redirect URI merely because it is the backend endpoint. Configure redirect URIs only if your chosen Google OAuth flow actually uses them.

The backend must validate the Google credential/token according to the authentication implementation before issuing a FilmNest application token.

---

## 🔐 Security

* Keep `.env` and `.env.local` files out of version control.
* Never expose private API keys or OAuth client secrets in the frontend.
* Use HTTPS for production requests.
* Configure CORS to allow trusted frontend origins.
* Use secure password hashing and token-signing practices.
* Validate Google credentials on the backend.
* Use a strong production signing secret.
* Restrict access to production database credentials.

---

## 🧪 Build and Testing

### Frontend Production Build

From `frontend/`:

```bash
npm run build
```

### Backend Tests

From `backend/`, if the project includes a pytest suite:

```bash
pytest
```

Run the tests and checks available in your current repository before releasing changes.

---

## 🛣️ Future Enhancements

Potential improvements include:

* More personalized movie recommendations.
* Advanced movie filters and sorting.
* Enhanced watchlist organization.
* Improved recommendation explanations.
* More comprehensive automated tests.
* Accessibility improvements and further mobile refinements.

---

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test your changes.
5. Submit a pull request describing your improvements.

---

## 📄 License

A license has not been specified here. Add a license file to the repository if you intend to define how others may use, modify, and redistribute FilmNest.

---

## 🎬 About FilmNest

FilmNest brings the excitement of discovering movies into one convenient destination. Whether you're searching for a gripping thriller, revisiting a classic, exploring a new genre, or looking for recommendations that match your mood, FilmNest is designed to make finding your next movie enjoyable.

By combining movie discovery, useful film information, personal watchlists, and AI-powered recommendations, FilmNest aims to turn the question *"What should I watch next?"* into the beginning of your next cinematic adventure.

**FilmNest — Your next favorite movie starts here.**

---

**Live Website:** https://filmnest-ci02.onrender.com
**Backend API:** https://filmnest-backend.onrender.com
**API Documentation:** https://filmnest-backend.onrender.com/docs
