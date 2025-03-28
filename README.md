
# VoyagePoint 🌍

**VoyagePoint** is a responsive travel and tourism web platform built with **ASP.NET Core MVC** and **MySQL**. It enables users to register, log in, and explore various places, hotels, and food options in a user-friendly layout. This project was designed to meet academic requirements, showcasing MVC architecture, form validation, responsive design, and integration with a relational database.

---

## 📁 Project Structure

```
VoyagePoint/
│
├── Controllers/              # ASP.NET MVC Controllers
├── Views/                    # Razor Views (HTML Layout)
├── Models/                   # Data Models
├── Data/                     # Database Connection & Repository
├── Properties/               # Launch and publish profiles
├── appsettings.json          # Configuration file
├── VoyagePoint.csproj        # Project File
├── VoyagePoint.sln           # Solution File
├── VoyagePoint.sql           # Database script
└── README.md                 # Project Instructions
```

---

## ⚙️ Tools & Technologies Used

- **.NET 8.0 SDK**
- **ASP.NET Core MVC**
- **MySQL**
- **Visual Studio / VS Code**
- **C#**
- **HTML, CSS, JavaScript**
- **Bootstrap (for responsiveness)**

---

## 🛠️ How to Run the Project

### 1. 📦 Prerequisites
Ensure the following are installed on your machine:

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.407-macos-x64-installer)
- [MySQL Server](https://sourceforge.net/projects/xampp/files/XAMPP%20Mac%20OS%20X/8.0.28/xampp-osx-8.0.28-0-installer.dmg)
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) or VS Code (https://code.visualstudio.com/Download) with C# extension
- Google Place API from google cloud
---

### 2. 🗂️ Setup Instructions

#### ✅ Step 1: Clone or Unzip
Unzip this folder and open it in **Visual Studio** or **VS Code**.

#### ✅ Step 2: Restore Packages
```bash
dotnet restore
```

#### ✅ Step 3: Setup MySQL Database

- Create a MySQL database named `VoyagePoint`
- Import the VoyagePoint.sql

- Update your `Data/databaseHelper.cs` connection string:
```json
private readonly string _connectionString = "Server=localhost;Database=Database_Name;User=root;Password=;";
```
#### ✅ Step 4: Setup Google APi

- Update your `wwroot/js/site.js` GOOGLE_API with your google place API:
```json
    script.src = "https://maps.googleapis.com/maps/api/js?key=GOOGLE_API&libraries=places&callback=initialize";
```

#### ✅ Step 5: Build the Project
```bash
dotnet build
```

#### ✅ Step 6: Run the Application
```bash
dotnet run
```

---

### 3. 🌐 Access the Web App
After successful build and run, go to:

```
https://localhost:port
```

You’ll see the homepage with navigation to **Hotels**, **Places**, **Food**, and **Account** features.

---

## ✨ Features Covered from Rubric

- ✅ HTML layout with proper structure
- ✅ External, internal, and inline CSS styling
- ✅ Navigation links
- ✅ JavaScript validation with alerts/prompts
- ✅ Full MVC Architecture
- ✅ Responsive design (Bootstrap-based)
- ✅ MySQL Integration for storing user data
- ✅ Modular code for reusability
- ✅ Organized folder structure
- ✅ Documentation and comments

---
