param(
    [string]$srcGuardian = 'C:\Users\geoni\Downloads\cover-img-guardiantrack.jpg.png',
    [string]$srcLms = 'C:\Users\geoni\Downloads\cover-img-lms.jpg.png',
    [string]$srcCms = 'C:\Users\geoni\Downloads\cover-img-cms.jpg.png'
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
$repoRoot = Join-Path $root '..' | Resolve-Path -Relative
$imagesRoot = Join-Path $repoRoot 'images\projects'

# Ensure directories
$guardianDir = Join-Path $imagesRoot 'guardiantrack'
$lmsDir = Join-Path $imagesRoot 'lms'
$cmsDir = Join-Path $imagesRoot 'class-management'

New-Item -ItemType Directory -Force -Path $guardianDir | Out-Null
New-Item -ItemType Directory -Force -Path $lmsDir | Out-Null
New-Item -ItemType Directory -Force -Path $cmsDir | Out-Null

function CopyIfExists($src, $dest) {
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dest -Force
        Write-Output "Copied: $src -> $dest"
    } else {
        Write-Warning "Source not found: $src"
    }
}

CopyIfExists $srcGuardian (Join-Path $guardianDir 'cover.jpg')
CopyIfExists $srcLms (Join-Path $lmsDir 'cover.jpg')
CopyIfExists $srcCms (Join-Path $cmsDir 'cover.jpg')

Write-Output "Done. Check images/projects/* for cover.jpg files."
