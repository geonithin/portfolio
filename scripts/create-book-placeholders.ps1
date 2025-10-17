Add-Type -AssemblyName System.Drawing

$books = @{
    "it-ends-with-us.jpg" = "It Ends with Us"
    "it-starts-with-us.jpg" = "It Starts with Us"
    "pride-and-prejudice.jpg" = "Pride & Prejudice"
    "sherlock-holmes.jpg" = "Sherlock Holmes"
}

$dir = "c:\Users\geoni\updated portfolio\portfolio\images\books"
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir | Out-Null }

foreach ($name in $books.Keys) {
    $text = $books[$name]
    $bmp = New-Object System.Drawing.Bitmap 150,225
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.Color]::FromArgb(55,55,55)) # dark background
    $font = New-Object System.Drawing.Font("Segoe UI",12,[System.Drawing.FontStyle]::Bold)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $rect = New-Object System.Drawing.RectangleF(8,80,134,80)
    $stringFormat = New-Object System.Drawing.StringFormat
    $stringFormat.Alignment = [System.Drawing.StringAlignment]::Center
    $stringFormat.LineAlignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString($text, $font, $brush, $rect, $stringFormat)
    $path = Join-Path $dir $name
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose(); $bmp.Dispose()
    Write-Host "Created $path"
}
