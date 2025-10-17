$destDir = "c:\Users\geoni\updated portfolio\portfolio\images\books"
if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir | Out-Null }

# Plain copy for JPG sources
$copies = @{
    "C:\Users\geoni\Downloads\it-ends-with-us.jpg" = "it-ends-with-us.jpg"
    "C:\Users\geoni\Downloads\it-starts-with-us.jpg" = "it-starts-with-us.jpg"
    "C:\Users\geoni\Downloads\pride-and-prejudice.jpg" = "pride-and-prejudice.jpg"
}

foreach ($src in $copies.Keys) {
    $destName = $copies[$src]
    $dst = Join-Path $destDir $destName
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dst -Force
        Write-Host "Copied $src -> $dst"
    } else {
        Write-Host "Source missing: $src"
    }
}

# Convert PNG -> JPG for Sherlock Holmes
$pngSrc = "C:\Users\geoni\Downloads\sherlock-holmes.png"
$jpgDst = Join-Path $destDir "sherlock-holmes.jpg"
if (Test-Path $pngSrc) {
    try {
        Add-Type -AssemblyName System.Drawing
        $bmp = [System.Drawing.Bitmap]::FromFile($pngSrc)
        $bmp.Save($jpgDst, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $bmp.Dispose()
        Write-Host "Converted $pngSrc -> $jpgDst"
    } catch {
        Write-Host "Conversion failed for $pngSrc : $_"
    }
} else {
    Write-Host "Source missing: $pngSrc"
}
