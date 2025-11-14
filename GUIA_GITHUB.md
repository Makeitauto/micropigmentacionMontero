# 🚀 Guía: Subir Proyecto a GitHub

Guía paso a paso para subir tu proyecto Microcapilar Montero a un nuevo repositorio de GitHub.

---

## 📋 Paso 1: Crear el Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** (arriba a la derecha) → **"New repository"**
3. Completa el formulario:
   - **Repository name**: `microcapilarmontero` (o el nombre que prefieras)
   - **Description**: "Página web premium para clínica de micropigmentación"
   - **Visibility**: Elige **Public** o **Private**
   - ⚠️ **NO marques** "Add a README file", "Add .gitignore", ni "Choose a license"
4. Haz clic en **"Create repository"**

---

## 📋 Paso 2: Inicializar Git en tu Proyecto Local

Abre la terminal en la carpeta del proyecto (`C:\Users\usuario\Desktop\MCM`) y ejecuta:

```bash
# Inicializar el repositorio Git
git init
```

---

## 📋 Paso 3: Agregar todos los Archivos

```bash
# Agregar todos los archivos al staging area
git add .
```

---

## 📋 Paso 4: Hacer el Primer Commit

```bash
# Crear el commit inicial
git commit -m "Initial commit: Página web Microcapilar Montero"
```

---

## 📋 Paso 5: Conectar con el Repositorio de GitHub

GitHub te mostrará una URL después de crear el repositorio. Usa una de estas opciones:

### Opción A: HTTPS (Recomendado para principiantes)
```bash
# Reemplaza TU_USUARIO con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU_USUARIO/microcapilarmontero.git
```

### Opción B: SSH (Si tienes SSH configurado)
```bash
git remote add origin git@github.com:TU_USUARIO/microcapilarmontero.git
```

---

## 📋 Paso 6: Verificar la Conexión

```bash
# Verificar que el remote está configurado correctamente
git remote -v
```

Deberías ver algo como:
```
origin  https://github.com/TU_USUARIO/microcapilarmontero.git (fetch)
origin  https://github.com/TU_USUARIO/microcapilarmontero.git (push)
```

---

## 📋 Paso 7: Subir el Código a GitHub

```bash
# Subir el código a la rama main
git branch -M main
git push -u origin main
```

Si es la primera vez que usas GitHub desde esta computadora, te pedirá autenticarte:
- **HTTPS**: Te pedirá usuario y contraseña (o token de acceso personal)
- **SSH**: Debe funcionar automáticamente si tienes las claves configuradas

---

## 🔐 Si te pide Autenticación (HTTPS)

Si GitHub te pide autenticación y tu contraseña no funciona:

1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Genera un nuevo token con permisos `repo`
3. Usa el token como contraseña cuando Git te la pida

---

## ✅ Verificar que Funcionó

1. Ve a tu repositorio en GitHub: `https://github.com/TU_USUARIO/microcapilarmontero`
2. Deberías ver todos tus archivos subidos
3. El README.md debería aparecer con la descripción del proyecto

---

## 📝 Comandos Resumen (Copia y Pega)

```bash
# 1. Inicializar Git
git init

# 2. Agregar archivos
git add .

# 3. Hacer commit
git commit -m "Initial commit: Página web Microcapilar Montero"

# 4. Agregar remote (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/microcapilarmontero.git

# 5. Verificar remote
git remote -v

# 6. Subir a GitHub
git branch -M main
git push -u origin main
```

---

## 🔄 Para Futuras Actualizaciones

Cuando hagas cambios y quieras subirlos:

```bash
# 1. Ver qué archivos cambiaron
git status

# 2. Agregar los cambios
git add .

# 3. Hacer commit con un mensaje descriptivo
git commit -m "Descripción de los cambios realizados"

# 4. Subir los cambios
git push
```

---

## ⚠️ Notas Importantes

1. **Archivos que NO se suben**: 
   - `node_modules/` (está en .gitignore)
   - `.env` y `.env.local` (archivos de configuración sensibles)
   - `.next/` (carpeta de build)

2. **Archivos que SÍ se suben**:
   - Todo el código fuente
   - `package.json` (para que otros puedan instalar dependencias)
   - Imágenes en `public/images/` (si las tienes)

3. **Si tienes errores**:
   - Asegúrate de estar en la carpeta correcta del proyecto
   - Verifica que el nombre del repositorio en GitHub sea correcto
   - Si el repositorio ya tiene contenido, usa: `git pull origin main --allow-unrelated-histories` antes de hacer push

---

## 🎉 ¡Listo!

Tu proyecto ya está en GitHub. Ahora puedes:
- Compartir el repositorio con otros
- Hacer deploy a Vercel, Netlify u otros servicios
- Colaborar con otros desarrolladores
- Mantener un historial de cambios

