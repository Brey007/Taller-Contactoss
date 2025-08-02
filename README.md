# ContactosActivity 📱

Aplicación móvil desarrollada en **React Native** para gestionar una lista de contactos, incluyendo la opción de marcarlos como favoritos.

---

## 🧱 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js (recomendado LTS)](https://nodejs.org/)
- [Java JDK 11 o superior](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio](https://developer.android.com/studio) (con emulador configurado)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

> 🛠️ Sigue la guía oficial para configurar tu entorno:  
> https://reactnative.dev/docs/environment-setup  
> Selecciona la opción **"React Native CLI"** (no Expo) y tu sistema operativo.

---

## 🚀 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/Brey007/Taller-Contactoss.git
cd ContactsActivity
```

2. Instala las dependencias del proyecto:

```bash
npm install
```

3. Instala los paquetes de navegación requeridos:

```bash
npm install @react-navigation/native @react-navigation/stack
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
```

4. Asegúrate de hacer el enlace de las dependencias nativas:

```bash
npx pod-install
```

5. Inicia el servidor Metro:

```bash
npx start
```
---

## 🧪 Funcionalidades

- Agregar contactos
- Marcar/desmarcar como favoritos
- Filtros: ver todos, solo favoritos o no favoritos
- Validación de nombre y teléfono

---

## 📁 Estructura de Carpetas

```
src/
│
├── Components/
│   └── ContactItem.jsx
│
├── Navigator/
│   └── AppNavigator.js
│
├── Screens/
│   ├── AddContactScreen.jsx
│   └── ContactListScreen.jsx
│
└── App.js
```

---

## ⚠️ Notas

- Este proyecto **no usa Expo**, así que solo puede ejecutarse con React Native CLI.
- Recuerda tener tu emulador abierto o un dispositivo Android conectado por USB o Expo go abierto para visualizarlo al ejecutar: `npm start`.

---

## 🧑‍💻 Autor

Creado por [Brey007](https://github.com/Brey007)