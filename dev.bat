@echo off
REM Double-click this file to start the site.
REM It changes into its own folder first, so the space in
REM "Personal Website" can't break the path.
cd /d "%~dp0"
if not exist "node_modules" (
  echo Installing dependencies, this only happens once...
  call npm install
)
echo.
echo Starting dev server -- open http://localhost:3000 in your browser.
echo Press Ctrl+C in this window to stop it.
echo.
call npm run dev
pause
