$dest = "c:\Users\geoni\updated portfolio\portfolio\images\projects\lms"
if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest | Out-Null }
$map = @{
    "C:\Users\geoni\OneDrive\Pictures\booking-lms.png" = "lms-main.png"
    "C:\Users\geoni\OneDrive\Pictures\books-menu-lms.png" = "lms-courses.png"
    "C:\Users\geoni\OneDrive\Pictures\user-dashboard-lms.png" = "lms-student-view.png"
    "C:\Users\geoni\OneDrive\Pictures\Screenshots\Screenshot 2025-10-17 084805.png" = "lms-login.png"
    "C:\Users\geoni\OneDrive\Pictures\google-connection-integrated-lms.png" = "lms-google-integration.png"
}

foreach ($src in $map.Keys) {
    $dstName = $map[$src]
    $dst = Join-Path $dest $dstName
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dst -Force
        Write-Host "Copied $src -> $dst"
    } else {
        Write-Host "Missing source: $src"
    }
}
