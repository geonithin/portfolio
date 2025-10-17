# Image Organization Script for Portfolio
# This script organizes all images into a proper folder structure

Write-Host "Starting image organization..." -ForegroundColor Cyan

# Define paths
$portfolioRoot = "c:\Users\geoni\updated portfolio\portfolio"
$imagesRoot = "$portfolioRoot\images"

# Create subdirectories if they don't exist
$directories = @(
    "$imagesRoot\certificates",
    "$imagesRoot\profile",
    "$imagesRoot\projects\class-management",
    "$imagesRoot\projects\lms",
    "$imagesRoot\projects\guardiantrack"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "Created directory: $dir" -ForegroundColor Green
    }
}

# Copy certificate images
Write-Host "`nOrganizing certificate images..." -ForegroundColor Yellow
Copy-Item "$portfolioRoot\c1.jpg" "$imagesRoot\certificates\microsoft-security.jpg" -Force -ErrorAction SilentlyContinue
Copy-Item "$portfolioRoot\c2\c2.jpg" "$imagesRoot\certificates\generative-ai.jpg" -Force -ErrorAction SilentlyContinue
Copy-Item "$portfolioRoot\c3\c3.jpg" "$imagesRoot\certificates\software-development.jpg" -Force -ErrorAction SilentlyContinue
Copy-Item "$portfolioRoot\c4.jpg" "$imagesRoot\certificates\azure-ai.jpg" -Force -ErrorAction SilentlyContinue
Write-Host "Certificate images copied!" -ForegroundColor Green

# Copy profile image
Write-Host "`nOrganizing profile images..." -ForegroundColor Yellow
Copy-Item "$portfolioRoot\geo\geo pro pic.jpg" "$imagesRoot\profile\geo-profile.jpg" -Force -ErrorAction SilentlyContinue
Write-Host "Profile image copied!" -ForegroundColor Green

# Copy project images
Write-Host "`nOrganizing project images..." -ForegroundColor Yellow

# Class Management System images
if (Test-Path "$portfolioRoot\clg-images") {
    Get-ChildItem "$portfolioRoot\clg-images\*.png" | ForEach-Object {
        $newName = $_.Name -replace "Screenshot 2025-08-23 ", "class-mgmt-"
        Copy-Item $_.FullName "$imagesRoot\projects\class-management\$newName" -Force
    }
    Write-Host "Class Management System images copied!" -ForegroundColor Green
}

# LMS images (if any exist)
if (Test-Path "$portfolioRoot\lms-images") {
    Get-ChildItem "$portfolioRoot\lms-images\*.*" -ErrorAction SilentlyContinue | ForEach-Object {
        Copy-Item $_.FullName "$imagesRoot\projects\lms\" -Force
    }
    Write-Host "LMS images copied!" -ForegroundColor Green
}

# GuardianTrack images (if any exist)
if (Test-Path "$portfolioRoot\guardiantrack-images") {
    Get-ChildItem "$portfolioRoot\guardiantrack-images\*.*" -ErrorAction SilentlyContinue | ForEach-Object {
        Copy-Item $_.FullName "$imagesRoot\projects\guardiantrack\" -Force
    }
    Write-Host "GuardianTrack images copied!" -ForegroundColor Green
}

Write-Host "`n✅ Image organization complete!" -ForegroundColor Green
Write-Host "`nNew image structure:" -ForegroundColor Cyan
Write-Host "  images/" -ForegroundColor White
Write-Host "    ├── certificates/" -ForegroundColor White
Write-Host "    │   ├── microsoft-security.jpg" -ForegroundColor Gray
Write-Host "    │   ├── generative-ai.jpg" -ForegroundColor Gray
Write-Host "    │   ├── software-development.jpg" -ForegroundColor Gray
Write-Host "    │   └── azure-ai.jpg" -ForegroundColor Gray
Write-Host "    ├── profile/" -ForegroundColor White
Write-Host "    │   └── geo-profile.jpg" -ForegroundColor Gray
Write-Host "    └── projects/" -ForegroundColor White
Write-Host "        ├── class-management/" -ForegroundColor White
Write-Host "        ├── lms/" -ForegroundColor White
Write-Host "        └── guardiantrack/" -ForegroundColor White

Write-Host "`n⚠️  Note: Original images are kept in their current locations." -ForegroundColor Yellow
Write-Host "You can manually delete them after verifying the new structure works." -ForegroundColor Yellow
