# Check Portfolio Images Status
# Shows which images exist and which are missing

Write-Host "`n🔍 Checking Portfolio Images Status...`n" -ForegroundColor Cyan

$portfolioPath = "c:\Users\geoni\updated portfolio\portfolio"
$imagesPath = Join-Path $portfolioPath "images"

# Define required images
$requiredImages = @{
    "Profile Images" = @(
        @{Path = "profile\geo-profile.jpg"; Name = "Profile Picture"}
    )
    "Certificate Images" = @(
        @{Path = "certificates\microsoft-security.jpg"; Name = "Microsoft Security Essentials"}
        @{Path = "certificates\generative-ai.jpg"; Name = "Generative AI Certificate"}
        @{Path = "certificates\software-development.jpg"; Name = "Software Development Certificate"}
        @{Path = "certificates\azure-ai.jpg"; Name = "Azure AI Certificate"}
    )
    "Project Images" = @(
        @{Path = "projects\class-management\class-mgmt-192248.png"; Name = "Class Mgmt Screenshot 1"}
        @{Path = "projects\class-management\class-mgmt-192733.png"; Name = "Class Mgmt Screenshot 2"}
        @{Path = "projects\class-management\class-mgmt-192954.png"; Name = "Class Mgmt Screenshot 3"}
        @{Path = "projects\class-management\class-mgmt-193146.png"; Name = "Class Mgmt Screenshot 4"}
        @{Path = "projects\class-management\class-mgmt-194051.png"; Name = "Class Mgmt Screenshot 5"}
        @{Path = "projects\lms\lms-main.png"; Name = "LMS Main Dashboard"}
        @{Path = "projects\guardiantrack\guardiantrack-main.png"; Name = "GuardianTrack Main"}
    )
}

$totalImages = 0
$existingImages = 0
$missingImages = @()

foreach ($category in $requiredImages.Keys) {
    Write-Host "📁 $category" -ForegroundColor Yellow
    Write-Host ("─" * 60) -ForegroundColor Gray
    
    foreach ($image in $requiredImages[$category]) {
        $totalImages++
        $fullPath = Join-Path $imagesPath $image.Path
        
        if (Test-Path $fullPath) {
            $existingImages++
            $fileSize = (Get-Item $fullPath).Length
            $fileSizeKB = [math]::Round($fileSize / 1KB, 2)
            Write-Host "  ✅ $($image.Name)" -ForegroundColor Green -NoNewline
            Write-Host " ($fileSizeKB KB)" -ForegroundColor Gray
        } else {
            Write-Host "  ❌ $($image.Name)" -ForegroundColor Red -NoNewline
            Write-Host " - MISSING" -ForegroundColor DarkRed
            $missingImages += $image
        }
    }
    Write-Host ""
}

# Summary
Write-Host ("=" * 60) -ForegroundColor Cyan
Write-Host "📊 Summary" -ForegroundColor Cyan
Write-Host ("=" * 60) -ForegroundColor Cyan
Write-Host "  Total Required: $totalImages images" -ForegroundColor White
Write-Host "  ✅ Existing: $existingImages images" -ForegroundColor Green
Write-Host "  ❌ Missing: $($totalImages - $existingImages) images" -ForegroundColor Red

if ($missingImages.Count -gt 0) {
    Write-Host "`n⚠️  Missing Images:" -ForegroundColor Yellow
    foreach ($img in $missingImages) {
        Write-Host "     • $($img.Name)" -ForegroundColor Red
        Write-Host "       Path: $($img.Path)" -ForegroundColor Gray
    }
    
    Write-Host "`n💡 To add missing images:" -ForegroundColor Yellow
    Write-Host "   Option 1: Run .\create-placeholders.ps1 to create placeholder images" -ForegroundColor White
    Write-Host "   Option 2: Copy your actual screenshots to the missing paths" -ForegroundColor White
    Write-Host "   Option 3: Read ADDING-IMAGES-GUIDE.md for detailed instructions`n" -ForegroundColor White
} else {
    Write-Host "`n✨ All images are present! Your portfolio is complete.`n" -ForegroundColor Green
}

# Check old image files that can be deleted
Write-Host ("=" * 60) -ForegroundColor Cyan
Write-Host "🧹 Old Image Files (Can be deleted after verification)" -ForegroundColor Cyan
Write-Host ("=" * 60) -ForegroundColor Cyan

$oldPaths = @(
    "c1.jpg"
    "c2\c2.jpg"
    "c3\c3.jpg"
    "c4.jpg"
    "geo\geo pro pic.jpg"
    "clg-images"
)

$foundOld = $false
foreach ($oldPath in $oldPaths) {
    $fullOldPath = Join-Path $portfolioPath $oldPath
    if (Test-Path $fullOldPath) {
        $foundOld = $true
        if ((Get-Item $fullOldPath).PSIsContainer) {
            $fileCount = (Get-ChildItem $fullOldPath -Recurse -File).Count
            Write-Host "  📁 $oldPath\ ($fileCount files)" -ForegroundColor Yellow
        } else {
            $fileSize = (Get-Item $fullOldPath).Length
            $fileSizeKB = [math]::Round($fileSize / 1KB, 2)
            Write-Host "  📄 $oldPath ($fileSizeKB KB)" -ForegroundColor Yellow
        }
    }
}

if (-not $foundOld) {
    Write-Host "  ✅ No old image files found - already cleaned up!" -ForegroundColor Green
} else {
    Write-Host "`n⚠️  You can delete these old files once you verify the new images work." -ForegroundColor Yellow
}

Write-Host "`n✅ Image check complete!`n" -ForegroundColor Green
