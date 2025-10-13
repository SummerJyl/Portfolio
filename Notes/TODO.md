1️⃣ Projects Section

✅ Remove duplicate projects (done).

✅ Ensure all screenshots/videos are in /Public/screenshots or /Public/videos.

Test each imgSrc / videoSrc in the browser.

2️⃣ Open Source Section

Review PR links and descriptions.

Consider automating: maybe fetch latest contributions via GitHub API for future updates.

3️⃣ Tech Stack / Skills Section

Optional: prepare .env mode for dynamic skill display (VITE_PROJECT_MODE).

Decide if any skills should highlight differently per job type.

4️⃣ Experience Section

Keep static or tailor per job application (copy/paste bullets from resume).

5️⃣ Build / Test

Run npm run dev in Portfolio root.

Check all sections display correctly, images load, videos play.

Commit changes after verifying.

6️⃣ Optional Automation (Later)

Dynamic “mode” for projects/skills per job.

Fetch Open Source contributions automatically.

**Portfolio (Vite / React)**

Purpose: Local dev server for your portfolio site.

Terminal: zsh - Portfolio

cd ~/Portfolio
npm install       # only if not done
npm run dev       # starts Vite dev server


Access at: http://localhost:5173 (default Vite port)

Check: Projects, Open Source, Skills, Experience sections.

2️⃣ Azure Microservices Demo

Purpose: Run demo to grab screenshots / test API.

a. Redis

Terminal: Redis

docker run -p 6379:6379 redis:7-alpine


Keeps the job queue running.

b. API Gateway

Terminal: API Gateway

cd ~/Documents/azure-microservices-demo
npm run dev:api


Starts server on http://localhost:3000

Submits and retrieves jobs

c. Worker

Terminal: Worker

cd ~/Documents/azure-microservices-demo
npm run dev:worker


Processes queued jobs

Needed for POST /jobs to return completed results

d. Testing / Screenshot

Terminal: zsh / curl

curl -X POST http://localhost:3000/jobs -H "Content-Type: application/json" -d '{"type":"calculation","data":{"value":42}}'
curl http://localhost:3000/jobs/<jobId>


Use output for screenshot or verification

Capture terminal output for your portfolio (or eventually screenshot a web page / table UI if you build one)

✅ Tips

Rename terminals clearly: Portfolio, Redis, API Gateway, Worker

Always start Redis first, then API Gateway, then Worker

Portfolio is independent; you can leave it running while testing Azure Microservices