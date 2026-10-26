@echo off
cd /d "%~dp0"
echo Installation des dependances...
npm install
echo.
echo Installation terminee!
echo.
echo Pour lancer le serveur de developpement, executez:
echo   npm run dev
echo.
pause
