# 👨‍⚕️ Prescripto — Medical Appointment Portal 
Prescripto is a role-based telehealth portal connecting patients, doctors, and administrators. Patients can search doctors, book/cancel appointments, and view appointment history.
Doctors have a dashboard to view schedules, accept/update appointments, and manage availability. Admins can add/manage doctors and users, view site-wide stats, and handle appointments.
Scroll down for demo videos/images and steps for setup.  (For Quick View Set Video Speed to 2x) 


## 1. 💻 Technologies
- ⚛️ React +  Vite (frontend & admin)
- 🟢 Node.js + Express (backend)
- 🍃 MongoDB (Mongoose)
- ☁️ Cloudinary (media uploads)
- 🔐 JWT (authentication)
- 🧰 ESLint (linting / code quality)

## 2. 🚀 Key Features
- Patient: Search doctors, book/cancel appointments, view history
- Doctor: View schedule, accept/update appointments
- Admin: Manage doctors/users, view dashboard stats

## 3. ⚙️ Running (quick)
1. Backend: `cd backend && npm install && npm run server`
2. Frontend: `cd frontend && npm install && npm run dev`
3. Admin UI: `cd admin && npm install && npm run dev`

   

## 4. 🖼️ Preview

---
### Patient Panel Video Demo & Images 
---
<img width="32" height="32" alt="image" src="https://github.com/user-attachments/assets/2d69e2cb-e469-45f9-b27c-3e77af03ac0b" />

https://github.com/user-attachments/assets/2a90dd42-c1b2-45bd-9554-5607f9c4b7fd

# IMAGE 1
![Patient-User Panel  SS1](https://github.com/user-attachments/assets/f02d58c2-9c62-4f20-8c7c-415a4c51fbfc)
# IMAGE 2
![Patient-User Panel  SS2](https://github.com/user-attachments/assets/c80a2ff9-2efe-47ba-a54c-39487558665a)
# IMAGE 3
![Patient-User Panel  SS3](https://github.com/user-attachments/assets/cebe8966-4f62-4817-9f1e-16b34ec2265a)
# IMAGE 4
![Patient-User Panel  SS4](https://github.com/user-attachments/assets/4854b97b-8fcb-4f2a-bb5d-39edaa8fc017)
# IMAGE 5
![Patient-User Panel  SS5](https://github.com/user-attachments/assets/36821c86-5ed7-4e2c-a552-309833cc57d8)
# IMAGE 6
![Patient-User Panel  SS6](https://github.com/user-attachments/assets/952da04c-0e5c-4ff6-86c9-296120b6ae13)
# IMAGE 7
![Patient-User Panel  SS7](https://github.com/user-attachments/assets/3ae1c583-58c4-416e-9dca-8129c0592c27)
# IMAGE 8
![Patient-User Panel  SS8](https://github.com/user-attachments/assets/654a446e-a0ab-4364-9b34-e5d2c47c2a6f)

---
### Admin + Doctor Panel Video Demo
---
<img width="32" height="32" alt="image" src="https://github.com/user-attachments/assets/2d69e2cb-e469-45f9-b27c-3e77af03ac0b" />

https://github.com/user-attachments/assets/bb3deaed-4234-4f3c-b584-48c7a7f0784c

---
### Admin Panel Images
---
# IMAGE 1
![Admin Panel SS1](https://github.com/user-attachments/assets/c7c5d3c4-c6c1-4f71-aab2-35fb87506565)
# IMAGE 2
![Admin Panel SS2](https://github.com/user-attachments/assets/6f85f7ba-05ad-434a-8a15-5b270be4139d)
# IMAGE 3
![Admin Panel SS3](https://github.com/user-attachments/assets/67d791e4-95da-40d9-96e4-45df6f652ed7)
# IMAGE 4
![Admin Panel SS4](https://github.com/user-attachments/assets/be93da29-0d5d-4cb9-9958-646a177b7605)
# IMAGE 5
![Admin Panel SS5](https://github.com/user-attachments/assets/186276ad-9bc5-42e3-9860-ce467377ce13)

---
### Doctor Panel Images
---
# IMAGE 1
![Doctor Panel SS1](https://github.com/user-attachments/assets/59be1582-9e03-4859-b1c9-c7c8348c8ad0)
# IMAGE 2
![Doctor Panel SS2](https://github.com/user-attachments/assets/2c96d6d4-662c-4f9b-a9cf-80d22a609c63)
# IMAGE 3
![Doctor Panel SS3](https://github.com/user-attachments/assets/790ce861-4e0c-4231-9cdd-c0f8babc5111)
# IMAGE 4
![Doctor Panel SS4](https://github.com/user-attachments/assets/3bdd1d4f-ddd1-4523-8755-07af5c0567a7)

## 5. Setup & Local Run (Running Process In Detaile)
---
1. Clone the repository.

2. Backend

```bash
cd backend
npm install
# create a .env file in backend/ (example below)
# start server (dev)
npm run server
(The backend listens by default on port `4000` (see `backend/server.js`).)

3. Frontend (Patient)
```bash
cd frontend
npm install
npm run dev

4. Admin panel (Admin + Doctor UIs)
```bash
cd admin
npm install
npm run dev
```
(If you need to preview built files, run `npm run build` and `npm run preview` in each frontend folder)

## 6. Required environment variables (create `backend/.env`)
- MONGODB_URI=your_mongo_connection_string
- CLOUDINARY_NAME=your_cloudinary_cloud_name
- CLOUDINARY_API_KEY=your_cloudinary_api_key
- CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
- JWT_SECRET=any_strong_secret
- ADMIN_EMAIL=your_admin_email
- ADMIN_PASSWORD=your_admin_password
Note: The DB connection will use `MONGODB_URI/prescripto` as the database name.
