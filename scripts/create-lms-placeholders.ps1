Add-Type -AssemblyName System.Drawing

$dir = "c:\Users\geoni\updated portfolio\portfolio\images\projects\lms"
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir | Out-Null }

$images = @{
    "lms-main.png" = "LMS - Main Dashboard"
    "lms-login.png" = "LMS - Login Page"
    "lms-courses.png" = "LMS - Course Listing"
    "lms-student-view.png" = "LMS - Student View"
    "lms-admin.png" = "LMS - Admin Panel"
}

foreach ($name in $images.Keys) {
    $text = $images[$name]
    $path = Join-Path $dir $name
    $bmp = New-Object System.Drawing.Bitmap 1280,720
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.Color]::FromArgb(45,45,48))
    $font = New-Object System.Drawing.Font("Segoe UI",36,[System.Drawing.FontStyle]::Bold)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(167,139,250))
    $rect = New-Object System.Drawing.RectangleF(20,300,1240,120)
    $stringFormat = New-Object System.Drawing.StringFormat
    $stringFormat.Alignment = [System.Drawing.StringAlignment]::Center
    $stringFormat.LineAlignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString($text, $font, $brush, $rect, $stringFormat)
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $bmp.Dispose()
    Write-Host "Created placeholder: $path"
}
