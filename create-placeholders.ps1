# Create Placeholder Images for Portfolio Projects
# This script creates simple placeholder images for missing projects

Write-Host "`n🎨 Creating Placeholder Images for Portfolio..." -ForegroundColor Cyan

# Load required assemblies
Add-Type -AssemblyName System.Drawing

$portfolioPath = "c:\Users\geoni\updated portfolio\portfolio"
$width = 1200
$height = 675

# Function to create placeholder image
function New-PlaceholderImage {
    param(
        [string]$OutputPath,
        [string]$Title,
        [string]$Subtitle = ""
    )
    
    try {
        # Create bitmap
        $bitmap = New-Object System.Drawing.Bitmap($width, $height)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        
        # Set high quality rendering
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
        $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
        
        # Background gradient (dark gray)
        $rect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
        $color1 = [System.Drawing.Color]::FromArgb(31, 41, 59)    # #1f2937
        $color2 = [System.Drawing.Color]::FromArgb(17, 24, 39)    # #111827
        $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $color1, $color2, 45)
        $graphics.FillRectangle($brush, $rect)
        
        # Add border
        $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(139, 92, 246), 4) # Violet
        $graphics.DrawRectangle($pen, 20, 20, $width - 40, $height - 40)
        
        # Add title
        $fontTitle = New-Object System.Drawing.Font("Arial", 60, [System.Drawing.FontStyle]::Bold)
        $brushText = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(139, 92, 246))
        $textSize = $graphics.MeasureString($Title, $fontTitle)
        $x = ($width - $textSize.Width) / 2
        $y = ($height - $textSize.Height) / 2 - 50
        $graphics.DrawString($Title, $fontTitle, $brushText, $x, $y)
        
        # Add subtitle if provided
        if ($Subtitle) {
            $fontSub = New-Object System.Drawing.Font("Arial", 24)
            $brushSub = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(167, 139, 250))
            $textSize2 = $graphics.MeasureString($Subtitle, $fontSub)
            $x2 = ($width - $textSize2.Width) / 2
            $y2 = $y + $textSize.Height + 20
            $graphics.DrawString($Subtitle, $fontSub, $brushSub, $x2, $y2)
        }
        
        # Add "Placeholder" watermark
        $fontWater = New-Object System.Drawing.Font("Arial", 18, [System.Drawing.FontStyle]::Italic)
        $brushWater = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(100, 167, 139, 250))
        $watermark = "Placeholder Image - Replace with actual screenshot"
        $waterSize = $graphics.MeasureString($watermark, $fontWater)
        $wx = ($width - $waterSize.Width) / 2
        $wy = $height - 100
        $graphics.DrawString($watermark, $fontWater, $brushWater, $wx, $wy)
        
        # Save image
        $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
        
        # Cleanup
        $bitmap.Dispose()
        $graphics.Dispose()
        $brush.Dispose()
        $pen.Dispose()
        $brushText.Dispose()
        $fontTitle.Dispose()
        
        Write-Host "  ✅ Created: $OutputPath" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "  ❌ Error creating $OutputPath : $_" -ForegroundColor Red
        return $false
    }
}

# Create LMS placeholder
Write-Host "`n📚 Creating LMS Project placeholder..." -ForegroundColor Yellow
$lmsPath = Join-Path $portfolioPath "images\projects\lms\lms-main.png"
$lmsResult = New-PlaceholderImage -OutputPath $lmsPath -Title "LMS Project" -Subtitle "Library Management System"

# Create GuardianTrack placeholder
Write-Host "`n🛡️  Creating GuardianTrack Project placeholder..." -ForegroundColor Yellow
$gtPath = Join-Path $portfolioPath "images\projects\guardiantrack\guardiantrack-main.png"
$gtResult = New-PlaceholderImage -OutputPath $gtPath -Title "GuardianTrack" -Subtitle "Smart Safety System"

# Summary
Write-Host "`n" ("=" * 60) -ForegroundColor Cyan
Write-Host "📊 Summary:" -ForegroundColor Cyan
Write-Host ("=" * 60) -ForegroundColor Cyan

if ($lmsResult) {
    Write-Host "  ✅ LMS placeholder created successfully" -ForegroundColor Green
} else {
    Write-Host "  ❌ LMS placeholder failed" -ForegroundColor Red
}

if ($gtResult) {
    Write-Host "  ✅ GuardianTrack placeholder created successfully" -ForegroundColor Green
} else {
    Write-Host "  ❌ GuardianTrack placeholder failed" -ForegroundColor Red
}

Write-Host "`n💡 Next Steps:" -ForegroundColor Yellow
Write-Host "  1. Visit http://localhost:8000 to see the placeholders" -ForegroundColor White
Write-Host "  2. Replace placeholders with actual project screenshots" -ForegroundColor White
Write-Host "  3. Keep filename as 'lms-main.png' and 'guardiantrack-main.png'" -ForegroundColor White
Write-Host "`n✨ Done! Your portfolio now has placeholder images." -ForegroundColor Green
Write-Host "   Replace them with real screenshots when ready.`n" -ForegroundColor Gray
