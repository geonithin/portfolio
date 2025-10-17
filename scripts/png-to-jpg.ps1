Add-Type -AssemblyName System.Drawing
$dir = "c:\Users\geoni\updated portfolio\portfolio\images\books"
Get-ChildItem -Path $dir -Filter *.png | ForEach-Object {
    $png = $_.FullName
    $jpg = [System.IO.Path]::ChangeExtension($png, '.jpg')
    $bmp = [System.Drawing.Bitmap]::FromFile($png)
    $bmp.Save($jpg, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    Write-Output "Converted $png -> $jpg"
}
