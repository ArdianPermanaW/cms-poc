@echo off
echo Starting CMS and Frontend...

:: Start Strapi CMS
start cmd /k "cd cms && npm run develop"
start http://localhost:1337/admin/auth/login

:: Start Web Frontend
start cmd /k "cd web-frontend && npm run dev"
start http://localhost:5173

:: Start Mobile Frontend 
::start cmd /k "cd frontend-mobile && npm run web"

exit
