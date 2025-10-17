# Portfolio Image Organization Guide

## 📁 New Image Structure

```
portfolio/
├── images/
│   ├── certificates/          # All certificate images
│   │   ├── microsoft-security.jpg
│   │   ├── generative-ai.jpg
│   │   ├── software-development.jpg
│   │   └── azure-ai.jpg
│   ├── profile/               # Profile pictures
│   │   └── geo-profile.jpg
│   └── projects/              # Project screenshots
│       ├── class-management/   # Class Management System
│       │   ├── class-mgmt-192248.png
│       │   ├── class-mgmt-192733.png
│       │   ├── class-mgmt-192954.png
│       │   ├── class-mgmt-193146.png
│       │   └── class-mgmt-194051.png
│       ├── lms/               # Learning Management System
│       └── guardiantrack/     # GuardianTrack Project
```

## 🚀 How to Organize Images

### Option 1: Run the PowerShell Script
```powershell
cd "c:\Users\geoni\updated portfolio\portfolio"
.\organize-images.ps1
```

### Option 2: Manual Organization
Move/copy files according to the structure above.

## 📝 Update Required in HTML Files

After organizing images, update these paths in your HTML files:

### index.html, geo.html, etc.
**Old paths:**
- `c1.jpg` → `images/certificates/microsoft-security.jpg`
- `c2/c2.jpg` → `images/certificates/generative-ai.jpg`
- `c3/c3.jpg` → `images/certificates/software-development.jpg`
- `c4.jpg` → `images/certificates/azure-ai.jpg`
- `geo/geo pro pic.jpg` → `images/profile/geo-profile.jpg`

### clg-project.html
**Old paths:**
- `clg-images/Screenshot 2025-08-23 *.png` → `images/projects/class-management/class-mgmt-*.png`

## ✅ Benefits of This Structure

1. **Better Organization**: All images grouped by category
2. **Easier Maintenance**: Know exactly where each image type goes
3. **Cleaner Root**: Less clutter in the portfolio root directory
4. **Scalability**: Easy to add more images in the future
5. **Professional**: Industry-standard folder structure

## 🔄 Migration Steps

1. **Run the script**: Execute `organize-images.ps1`
2. **Verify**: Check that all images are copied correctly
3. **Update HTML**: Update image paths in all HTML files
4. **Test**: Load your portfolio and verify all images display
5. **Clean up**: Remove old image files/folders after verification

## 📋 Old Structure (to be removed after migration)

```
portfolio/
├── c1.jpg          ❌ Delete after migration
├── c2/             ❌ Delete after migration
│   └── c2.jpg
├── c3/             ❌ Delete after migration
│   └── c3.jpg
├── c4.jpg          ❌ Delete after migration
├── geo/            ⚠️  Keep folder, just remove the image
│   └── geo pro pic.jpg
├── clg-images/     ❌ Delete after migration
├── lms-images/     ❌ Delete after migration
└── guardiantrack-images/  ❌ Delete after migration
```

## 🎯 Next Steps

1. Run `organize-images.ps1`
2. Update all HTML file paths to use new structure
3. Test the portfolio thoroughly
4. Delete old image directories once verified
5. Commit changes to git

---
*Created: 2025-10-16*
*Purpose: Portfolio image organization and cleanup*
