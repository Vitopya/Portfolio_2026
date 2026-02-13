$src = "D:\Documents\[2025-2026] Portfolio_Joseph-Deffayet\Code_repo\portfolio-tmp"
$dst = "D:\Documents\[2025-2026] Portfolio_Joseph-Deffayet\Code_repo"

Get-ChildItem -LiteralPath $src -Force | ForEach-Object {
    $destPath = Join-Path $dst $_.Name
    Move-Item -LiteralPath $_.FullName -Destination $destPath -Force
}

# Remove the now-empty temp directory
Remove-Item -LiteralPath $src -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Done"
