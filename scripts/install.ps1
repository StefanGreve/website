Push-Location -Path $(git rev-parse --show-toplevel)

Write-Host "Install the project" -ForegroundColor Yellow
yarn install

Write-Host "Install Git hooks" -ForegroundColor Yellow
yarn run husky install

Pop-Location
