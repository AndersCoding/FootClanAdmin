
  
# 🦶FootClan Admin🦶

  

A solution for admin of the Footclan. Add, or delete, members of your clan!

  

**FootClan** is a simple fullstack-project build with React Natie (Expo) for frontend, and .NET Web API as backend. The application let's you add, display and delete members.

  

---

  

## 📦 Technologies used

  

- **Frontend**: React Native (Expo), TypeScript

- **Backend**: C# .NET 8 Web API

- **Database**: SQLite

- **State Management**: React Context

- **API-handling**: Axios

  

## 🚀 Get started

  

### 📱 Frontend (React Native)

  

1. Navigate to the `frontend`-folder:

```bash

cd frontend

npm install

npx expo start

```

  

Select your device

- Web (w)

- iPhone (i)

- Android (a)

  

2. Navigate to the ``backend``-folder:

```bash

dotnet run --urls "http://0.0.0.0:5192"

```

  

Backend is now available on:\

    http://<din-lokale-ip>:5192/api/User

**⚙️ Update baseURL**

Edit this line in `frontend/services/api.ts`:

     const api = axios.create({
      baseURL: "http://192.168.X.X:5192/api", // 👈 Replace with your actual local IP
    });

  

#### If you don't know your own IP-adress, see how to find it below ####

  

Open backend in Swagger

http://localhost:5192/swagger/index.html
  

## 🧪 Features

  

- [x] Add new users to the FootClan

- [x] View user list with name and email

- [x] Delete existing users

- [x] Data is stored in SQLite and persists between sessions

- [x] Fully responsive UI (mobile/web)

- [ ] Edit user (coming soon)

- [ ] Authentication and roles (coming later)

  

## 🧰 Requirements

  

- Node.js >= 18

- Expo CLI (`npm install -g expo-cli`)

- .NET 8 SDK

- SQLite (CLI) + optionally DB Browser for SQLite

  

## IP-adress help ##

macOS / Linux

```bash

ipconfig getifaddr en0

````

  

windows

```bash

ipconfig

```