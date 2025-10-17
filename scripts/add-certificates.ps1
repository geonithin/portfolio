$dest = "c:\Users\geoni\updated portfolio\portfolio\images\certificates"
if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest | Out-Null }
$files = @("C:\Users\geoni\Downloads\c7.jpg","C:\Users\geoni\Downloads\c6.jpg","C:\Users\geoni\Downloads\c5.jpg")
foreach ($f in $files) {
    if (Test-Path $f) {
        $name = Split-Path $f -Leaf
        Copy-Item $f -Destination (Join-Path $dest $name) -Force
        Write-Host "Copied $f -> $dest\$name"
    } else { Write-Host "Missing: $f" }
}
